# Simulate content-auditor.js logic
import re

files = [
    'js/handouts/module1-handouts-part1.js',
    'js/handouts/module1-handouts-part2.js',
    'js/handouts/module1-handouts-part3.js',
    'js/handouts/activities-handouts.js'
]

topics_to_check = [f'm1-t{i}' for i in range(1, 20)] + [f'm1-activity{i}' for i in range(1, 5)]

content_map = {}
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        raw = fp.read()
    for m in re.finditer(r"['\"](m1-[a-zA-Z0-9_-]+)['\"]\s*:\s*`([\s\S]*?)`(?=\s*[,}\n])", raw):
        content_map[m.group(1)] = m.group(2)

all_passed = True
for tid in topics_to_check:
    c = content_map.get(tid, "")
    if not c:
        print(f"FAILED: {tid} has no content!")
        all_passed = False
        continue
    has_code = '<code' in c
    has_story = 'farm-dilemma-box' in c
    has_whatif = 'interactive-whatif' in c
    if not has_code:
        print(f"FAILED: {tid} missing code!")
        all_passed = False
    if not has_story:
        print(f"FAILED: {tid} missing farm-dilemma-box!")
        all_passed = False
    if not has_whatif:
        print(f"FAILED: {tid} missing interactive-whatif!")
        all_passed = False

if all_passed:
    print("ALL 23 MODULE 1 UNITS PASSED AUDIT WITH 100% SUCCESS!")
