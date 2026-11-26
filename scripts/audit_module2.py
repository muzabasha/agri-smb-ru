import re

files = [
    'js/handouts/module2-handouts.js',
    'js/handouts/module2-handouts-part2.js',
    'js/handouts/module2-handouts-part3.js',
    'js/handouts/activities-handouts.js'
]

raw_content = {}
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        raw = fp.read()
    pattern = r"['\"](m2-[a-zA-Z0-9_-]+)['\"]\s*:\s*`([\s\S]*?)`(?=\s*[,}\n])"
    for m in re.finditer(pattern, raw):
        raw_content[m.group(1)] = (f, m.group(2))

print(f"Total Module 2 units loaded: {len(raw_content)}")
for tid in [f'm2-t{i}' for i in range(1, 26)] + [f'm2-activity{i}' for i in range(1, 5)]:
    entry = raw_content.get(tid)
    if not entry:
        print(f"[{tid}] MISSING")
        continue
    f, c = entry
    has_code = '<code' in c or '<pre' in c
    has_story = 'farm-dilemma-box' in c or 'the farming connection' in c.lower()
    has_ipo = 'ipo-model' in c
    has_whatif = 'interactive-whatif' in c
    
    # Check abstract variables
    has_abstract = bool(re.search(r'\b(foo|bar|baz)\b|\b[xy]\s*=', c))
    print(f"[{tid}] in {f} ({len(c)} chars) | Code: {has_code} | Story: {has_story} | IPO: {has_ipo} | WhatIf: {has_whatif} | AbstractVars: {has_abstract}")
