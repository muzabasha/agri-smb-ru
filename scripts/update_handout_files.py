# scripts/update_handout_files.py
import re
import os
import subprocess

from m1_full_data import M1_DATA
from m2_full_data import M2_DATA
from m3_full_data import M3_DATA

ALL_DATA = {}
ALL_DATA.update(M1_DATA)
ALL_DATA.update(M2_DATA)
ALL_DATA.update(M3_DATA)

print(f"Loaded {len(ALL_DATA)} total topic enhancements across Modules 1, 2, and 3.")

FILES = [
    'js/handouts/module1-handouts-part1.js',
    'js/handouts/module1-handouts-part2.js',
    'js/handouts/module1-handouts-part3.js',
    'js/handouts/module2-handouts.js',
    'js/handouts/module2-handouts-part2.js',
    'js/handouts/module2-handouts-part3.js',
    'js/handouts/module3-handouts.js',
    'js/handouts/module3-handouts-part2.js',
    'js/handouts/module3-handouts-part3.js'
]

def clean_backticks(text):
    # Convert markdown code backticks `code` to <code>code</code>
    text = re.sub(r"`([^`\n]+)`", r"<code>\1</code>", text)
    # Escape any remaining rogue backticks
    text = text.replace("`", r"\`")
    # Also escape any ${...} to prevent accidental template interpolation
    text = text.replace(r"${", r"\${")
    return text

def update_topic_body(tid, body, data):
    refl_html = clean_backticks(data['reflexive'].strip())
    quiz_html = clean_backticks(data['quiz'].strip())

    # 1. Update/insert Reflexive Questions
    refl_pattern = r"<!-- 💭 Reflexive Questions[\s\S]*?</div>\s*</div>"
    if re.search(refl_pattern, body):
        body = re.sub(refl_pattern, refl_html, body, count=1)
    else:
        # Insert after <div class="topic-header">...</div>
        header_match = re.search(r"(<div class=\"topic-header\">[\s\S]*?</div>)", body)
        if header_match:
            end_pos = header_match.end()
            body = body[:end_pos] + "\n\n" + refl_html + body[end_pos:]
        else:
            print(f"Warning: No topic-header found in {tid}")

    # 2. Update/insert Quiz Section
    quiz_pattern = r"<div class=\"quiz-section\">[\s\S]*?</div>\s*(?=<div class=\"summary\">|</div>\s*$)"
    if re.search(quiz_pattern, body):
        body = re.sub(quiz_pattern, quiz_html + "\n\n            ", body, count=1)
    else:
        # Check if there's summary
        sum_match = re.search(r"<div class=\"summary\">", body)
        if sum_match:
            start_pos = sum_match.start()
            body = body[:start_pos] + quiz_html + "\n\n            " + body[start_pos:]
        else:
            # Insert before last </div>
            last_div = body.rfind("</div>")
            if last_div != -1:
                body = body[:last_div] + quiz_html + "\n        </div>" + body[last_div+6:]
            else:
                body = body + "\n" + quiz_html

    return body

updated_counts = 0
failed_files = []

for filepath in FILES:
    print(f"\nProcessing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        file_content = f.read()

    # Find all topics defined in this file
    topic_matches = list(re.finditer(r"(['\"])(m[1-3]-t\d+)\1\s*:\s*`", file_content))
    if not topic_matches:
        print(f"  No topics found in {filepath}!")
        continue

    # We process topics from last to first so character offsets in earlier parts remain stable
    for i in range(len(topic_matches) - 1, -1, -1):
        m = topic_matches[i]
        tid = m.group(2)
        if tid not in ALL_DATA:
            print(f"  Skipping {tid} (not in enhancements dataset)")
            continue

        start_tick = m.end() - 1 # index of `
        # The closing tick is followed by either `,` or `\n};`
        next_m = re.search(r"`(?=,\s*['\"]m|\s*\n\s*};)", file_content[start_tick + 1:])
        if not next_m:
            next_m = re.search(r"`(?=,\s*\n|,\s*['\"]|\s*};)", file_content[start_tick + 1:])
        
        if not next_m:
            print(f"  ERROR: Could not find closing backtick for {tid} in {filepath}")
            continue

        end_tick = start_tick + 1 + next_m.start()
        raw_body = file_content[start_tick + 1 : end_tick]

        new_body = update_topic_body(tid, raw_body, ALL_DATA[tid])

        # Replace in file_content
        file_content = file_content[:start_tick + 1] + new_body + file_content[end_tick:]
        updated_counts += 1
        print(f"  Updated {tid}")

    # Write updated content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(file_content)

    # Validate JS syntax
    res = subprocess.run(['node', '-c', filepath], capture_output=True, text=True)
    if res.returncode != 0:
        print(f"  ❌ SYNTAX ERROR in {filepath}: {res.stderr}")
        failed_files.append(filepath)
    else:
        print(f"  ✅ {filepath} syntax valid (node -c passed)")

print(f"\n==========================================")
print(f"Successfully updated {updated_counts} topics across {len(FILES)} files!")
if failed_files:
    print(f"❌ Failed files: {failed_files}")
else:
    print(f"🎉 ALL {len(FILES)} FILES PASSED JAVASCRIPT SYNTAX VALIDATION!")
