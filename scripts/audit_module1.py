import re
import json

# Read comprehensive-structure.js to get all Module 1 topics
with open('js/comprehensive-structure.js', 'r', encoding='utf-8') as f:
    struct_text = f.read()

# Read handout files
handouts = {}
for fname in [
    'js/handouts/module1-handouts-part1.js',
    'js/handouts/module1-handouts-part2.js',
    'js/handouts/module1-handouts-part3.js',
    'js/handouts/activities-handouts.js'
]:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    # Find all 'm1-...': `...` or 'm1-...': "..."
    # Match patterns like 'm1-t1': `...`
    matches = re.finditer(r"['\"](m1-[a-zA-Z0-9_-]+)['\"]\s*:\s*(`[\s\S]*?`|'(?:\\.|[^'])*'|\"(?:\\.|[^\"])*\")", content)
    for m in matches:
        tid = m.group(1)
        val = m.group(2)
        # unquote roughly
        if val.startswith('`') and val.endswith('`'):
            val = val[1:-1]
        elif (val.startswith("'") and val.endswith("'")) or (val.startswith('"') and val.endswith('"')):
            val = val[1:-1]
        handouts[tid] = {
            'file': fname,
            'content': val,
            'length': len(val)
        }

print(f"Total Module 1 handouts found: {len(handouts)}")
for k, v in handouts.items():
    c = v['content']
    has_code = '<code' in c or '```' in c or 'def ' in c or 'import ' in c
    has_analogy = 'analogy' in c.lower() or 'farming' in c.lower() or 'tractor' in c.lower() or 'crop' in c.lower()
    has_hands_on = 'hands-on' in c.lower() or 'try it' in c.lower() or 'exercise' in c.lower() or 'interactive' in c.lower() or 'challenge' in c.lower()
    has_ipo = 'ipo' in c.lower() or ('input' in c.lower() and 'process' in c.lower() and 'output' in c.lower())
    has_colab = 'colab' in c.lower()
    print(f"[{k}] in {v['file']} ({v['length']} chars) | Code: {has_code} | Analogy: {has_analogy} | Hands-on: {has_hands_on} | IPO: {has_ipo}")
