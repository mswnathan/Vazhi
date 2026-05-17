"""
xlsx-to-tnea.py — convert TNEA cutoff Excel export into Vazhi data files.

Source: cutoff.tneaonline.org/search (official Anna University portal).
The user copies the search results into a single-sheet Excel with columns:
  Code, College Name, Branch, OC, BC, BCM, MBC, SC, SCA, ST

Usage:
  python3 tools/xlsx-to-tnea.py TNEA_Downloads.xlsx [--year 2025]

Generates data/tnea-meta.js and data/tnea.js (REPLACES whatever was there).

Cutoff values are stored as int(mark × 100). Asterisks (*) on marks indicate
vacancy-round allotments — stripped, the numeric value is preserved.
"""

import openpyxl, json, os, re, sys, argparse

TN_DISTRICTS = {
    'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Erode', 'Tiruppur', 'Tirupur',
    'Vellore', 'Tirunelveli', 'Thoothukudi', 'Tuticorin', 'Tiruchirappalli', 'Trichy',
    'Tiruvallur', 'Thiruvallur', 'Chengalpattu', 'Kanchipuram', 'Kancheepuram',
    'Krishnagiri', 'Dharmapuri', 'Namakkal', 'Karur', 'Perambalur', 'Ariyalur',
    'Cuddalore', 'Villupuram', 'Viluppuram', 'Tiruvannamalai', 'Thiruvannamalai',
    'Kallakurichi', 'Ranipet', 'Tirupattur', 'Tenkasi', 'Virudhunagar',
    'Ramanathapuram', 'Sivagangai', 'Sivaganga', 'Pudukkottai', 'Thanjavur',
    'Nagapattinam', 'Mayiladuthurai', 'Tiruvarur', 'Theni', 'Dindigul',
    'Kanyakumari', 'Nilgiris', 'The Nilgiris', 'Karaikal', 'Puducherry',
}

GOVT_NAME_PATTERNS = [
    re.compile(r'\bGovernment\b', re.I),
    re.compile(r'\bGovt\.?\b', re.I),
    re.compile(r'University Departments of Anna University', re.I),
    re.compile(r'Anna University.*Regional Campus', re.I),
    re.compile(r'Anna University.*-\s*(CEG|MIT|ACT|SAP)\b', re.I),
    re.compile(r'University College of Engineering', re.I),
    re.compile(r'School of Architecture.*Anna University', re.I),
    re.compile(r'Indian Institute of\b', re.I),
    re.compile(r'Central Institute of\b', re.I),
    re.compile(r'Central Electrochemical Research Institute', re.I),
    re.compile(r'Alagappa Chettiar', re.I),
]
AIDED_NAMES = {
    'psg college of technology', 'thiagarajar college of engineering',
    'coimbatore institute of technology', 'mepco schlenk engineering college',
    'national engineering college', "p.s.r.engineering college",
    'sri sivasubramaniya nadar college of engineering',
    'a.c.college of engineering and technology',
    'kongu engineering college', 'kumaraguru college of technology',
}


def infer_type(name):
    nl = name.lower()
    if any(an in nl for an in AIDED_NAMES):
        return 'Aided'
    if any(p.search(name) for p in GOVT_NAME_PATTERNS):
        return 'Government'
    return 'Self-financing'


def extract_district(name):
    # Try patterns: "<District>-<PIN>", "<District> <PIN>", "<District> Tk-<PIN>"
    for pat in [
        r'([A-Za-z][A-Za-z .]+?)\s*[-,]\s*\d{3}\s?\d{3}\b',
        r'([A-Za-z][A-Za-z .]+?)\s+\d{3}\s?\d{3}\b',
    ]:
        for m in re.finditer(pat, name):
            cand = m.group(1).strip().rstrip('.,').strip()
            cand = re.sub(r'\s+(Taluk|Tk|District|Dist|Post|Po|Pst|Village|Vill|Town)\.?$', '', cand, flags=re.I).strip()
            cand_norm = cand.title()
            if cand_norm in TN_DISTRICTS:
                return cand_norm
            # Take last word as district guess if it matches
            last = cand.split()[-1].title() if cand.split() else ''
            if last in TN_DISTRICTS:
                return last
    # Fallback: look for any known district name in the entire string
    for d in TN_DISTRICTS:
        if re.search(r'\b' + re.escape(d) + r'\b', name, re.I):
            return d
    return 'Other'


def short_name(name):
    # Anna University Chennai campuses (CEG, MIT, ACT, SAP, IST)
    m = re.search(r'-\s*(CEG|MIT|ACT|SAP|IST)\b', name)
    if m:
        return f'Anna Univ {m.group(1)}'
    # Anna University Regional Campus
    m = re.search(r'Anna University.*Regional Campus[,\s]+([A-Za-z]+)', name)
    if m:
        return f'AU {m.group(1)}'
    # Remove parentheticals first (e.g. "(Autonomous)", "(Formerly ...)") so they don't break later strips
    s = re.sub(r'\s*\(.*?\)', '', name).strip()
    # Strip everything from these keywords onward (address artefacts)
    for kw in [' District ', ' Dist ', ' Post,', ' Post-', ' Taluk', ' Tk,', ' Tk ',
               ' Village,', ' Nagar,', ' Pin', ' P.O', ' Po,']:
        idx = s.find(kw)
        if idx > 0:
            s = s[:idx]
    # Drop everything from comma onward
    s = re.split(r',', s)[0].strip()
    # Trim trailing 6-digit PIN if any
    s = re.sub(r'\s*\d{6}\s*$', '', s).strip()
    # For long generic names ending in district, prefix district as the differentiator:
    # "Government College of Engineering Sengipatti Thanjavur" → keep as-is
    # "Government College of Engineering" alone is too generic, so we keep address suffixes
    # Only strip trailing district name if removing it leaves a recognisably-unique name
    # (avoid collapsing many Govt CEs into the same short name).
    # Compact common prefixes:
    s = re.sub(r'^Government College of Engineering\b', 'Govt CE', s)
    s = re.sub(r'^Government College of Technology\b', 'Govt CT', s)
    s = re.sub(r'^University Departments of Anna University', 'Anna Univ Depts', s)
    s = re.sub(r'\s+\(Autonomous\)', '', s)
    s = s.strip()
    # Truncate
    if len(s) > 45:
        s = s[:42].rstrip() + '…'
    return s or name[:40]


def normalize_branch(b):
    b = b.strip()
    # Detect (SS) — self-financing stream, keep marker
    ss = '(SS)' in b.upper() or '(ss)' in b
    base = re.sub(r'\(SS\)', '', b, flags=re.I).strip()
    # Title case the base, preserving common acronyms
    base_tc = base.title()
    # Fix common acronym capitalisations
    base_tc = re.sub(r'\bAi\b', 'AI', base_tc)
    base_tc = re.sub(r'\bMl\b', 'ML', base_tc)
    base_tc = re.sub(r'\bIot\b', 'IoT', base_tc)
    base_tc = re.sub(r'\bIct\b', 'ICT', base_tc)
    base_tc = re.sub(r'\bVlsi\b', 'VLSI', base_tc)
    return f'{base_tc} (SS)' if ss else base_tc


def parse_mark(v):
    if v is None: return None
    if isinstance(v, (int, float)):
        return float(v) if 0 < float(v) <= 200 else None
    if isinstance(v, str):
        s = v.strip()
        if not s or s in {'—', '-', '--', 'N/A', '*'}: return None
        s = s.replace('*', '').strip()
        try:
            f = float(s)
            return f if 0 < f <= 200 else None
        except ValueError:
            return None
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('xlsx_path')
    ap.add_argument('--year', type=int, default=2025)
    args = ap.parse_args()

    wb = openpyxl.load_workbook(args.xlsx_path, read_only=True, data_only=True)
    ws = wb.active

    COMM_ORDER = ['OC', 'BC', 'BCM', 'MBC', 'SC', 'SCA', 'ST']
    colleges, college_shorts, college_types, college_districts = [], [], [], []
    branches = []
    college_idx_map, branch_idx_map = {}, {}
    rows_out = []
    n_skipped, n_blank, n_header = 0, 0, 0

    for i, row in enumerate(ws.iter_rows(values_only=True)):
        if i == 0: continue  # header
        code, college, branch = row[0], row[1], row[2]
        if college is None or branch is None:
            n_blank += 1
            continue
        # Skip repeated header rows ("Branch" string in branch col)
        if str(branch).strip().lower() == 'branch':
            n_header += 1
            continue
        college = str(college).strip()
        branch_norm = normalize_branch(str(branch))
        if not college or not branch_norm:
            n_blank += 1
            continue

        if college not in college_idx_map:
            college_idx_map[college] = len(colleges)
            colleges.append(college)
            college_shorts.append(short_name(college))
            college_types.append(infer_type(college))
            college_districts.append(extract_district(college))

        if branch_norm not in branch_idx_map:
            branch_idx_map[branch_norm] = len(branches)
            branches.append(branch_norm)

        c_idx = college_idx_map[college]
        b_idx = branch_idx_map[branch_norm]
        for j, comm in enumerate(COMM_ORDER):
            mark = parse_mark(row[3 + j])
            if mark is None:
                n_skipped += 1
                continue
            rows_out.append([
                args.year,
                c_idx,
                b_idx,
                0,  # quota = General
                j,  # comm code
                int(round(mark * 100)),
            ])

    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir   = os.path.dirname(script_dir)

    meta_path = os.path.join(root_dir, 'data', 'tnea-meta.js')
    meta_content = (
        "// Auto-generated by tools/xlsx-to-tnea.py — do not hand-edit\n"
        "// Source: cutoff.tneaonline.org/search (official Anna University TNEA portal)\n"
        "// Scope note: includes self-financing colleges (a deliberate exception to\n"
        "// CLAUDE.md §27's strict scope rule). The exception applies only to the\n"
        "// TNEA predictor dataset — the Colleges tab (colleges-tn.js) remains govt + aided only.\n"
        "const TNEA_META = {\n"
        f"  colleges:        {json.dumps(colleges, ensure_ascii=False)},\n"
        f"  collegeShort:    {json.dumps(college_shorts, ensure_ascii=False)},\n"
        f"  collegeType:     {json.dumps(college_types, ensure_ascii=False)},\n"
        f"  collegeDistrict: {json.dumps(college_districts, ensure_ascii=False)},\n"
        f"  branches:        {json.dumps(branches, ensure_ascii=False)},\n"
        '  communities:     ["OC","BC","BCM","MBC","SC","SCA","ST"],\n'
        '  quotas:          ["General","TN 7.5% Govt-school","NRI","Sports"]\n'
        "};\n"
    )
    with open(meta_path, 'w', encoding='utf-8') as f:
        f.write(meta_content)

    data_path = os.path.join(root_dir, 'data', 'tnea.js')
    data_content = (
        "// Auto-generated by tools/xlsx-to-tnea.py — do not hand-edit\n"
        "// Row format: [year, collegeIdx, branchIdx, quotaCode, commCode, cutoff_x100]\n"
        "const TNEA_ROWS = " + json.dumps(rows_out) + ";\n"
    )
    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(data_content)

    print(f"Year      : {args.year}")
    print(f"Colleges  : {len(colleges)}")
    print(f"Branches  : {len(branches)}")
    print(f"Rows      : {len(rows_out)}")
    print(f"Skipped   : {n_skipped} (blank/—/invalid cells)")
    print(f"Headers   : {n_header} (repeated header rows in XLSX)")
    print(f"Blank rows: {n_blank}")
    print(f"\nType spread:")
    from collections import Counter
    for t, n in Counter(college_types).most_common():
        print(f"  {t}: {n}")
    print(f"\nDistrict spread (top 10):")
    for d, n in Counter(college_districts).most_common(10):
        print(f"  {d}: {n}")


if __name__ == '__main__':
    main()
