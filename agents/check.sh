#!/bin/sh
# Vazhi full data health check
# Run from project root: sh agents/check.sh
node agents/validate.js && node agents/functional-test.js
