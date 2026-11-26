import re
import os

from m3_templates_part1 import m3_templates_p1
from m3_templates_part2 import m3_templates_p2
from m3_templates_part3 import m3_templates_p3
from m3_templates_activities import m3_activity_templates

def process_topic_content(content, meta):
    story_html = meta.get("story", "").strip()
    ipo_html = meta.get("ipo", "").strip()
    code_py = meta.get("code", "").strip()
    whatif_html = meta.get("whatif", "").strip()

    # 1. Add Farm Dilemma Story if not present
    if "farm-dilemma-box" not in content and story_html:
        if '<div class="topic-header">' in content:
            m = re.search(r'(<div class="topic-header">[\s\S]*?</div>)', content)
            if m:
                pos = m.end()
                content = content[:pos] + "\n\n" + story_html + "\n" + content[pos:]
        else:
            content = story_html + "\n" + content

    # 2. Add IPO Model if not present
    if "ipo-model" not in content and ipo_html:
        if '<div class="farming-analogy">' in content:
            m = re.search(r'(<div class="farming-analogy">[\s\S]*?</div>\s*</div>)', content)
            if not m:
                m = re.search(r'(<div class="farming-analogy">[\s\S]*?</div>)', content)
            if m:
                pos = m.end()
                content = content[:pos] + "\n\n" + ipo_html + "\n" + content[pos:]
            else:
                m2 = re.search(r'<div class="core-concepts">', content)
                if m2:
                    pos = m2.start()
                    content = content[:pos] + ipo_html + "\n\n" + content[pos:]
        elif '<div class="core-concepts">' in content:
            m2 = re.search(r'<div class="core-concepts">', content)
            pos = m2.start()
            content = content[:pos] + ipo_html + "\n\n" + content[pos:]
        elif '<div class="learning-objectives">' in content:
            m_obj = re.search(r'(<div class="learning-objectives">[\s\S]*?</div>)', content)
            if m_obj:
                pos = m_obj.end()
                content = content[:pos] + "\n\n" + ipo_html + "\n" + content[pos:]
            else:
                m_code = re.search(r'<div class="code-section">', content)
                if m_code:
                    pos = m_code.start()
                    content = content[:pos] + ipo_html + "\n\n" + content[pos:]
        elif '<div class="code-section">' in content:
            m_code = re.search(r'<div class="code-section">', content)
            pos = m_code.start()
            content = content[:pos] + ipo_html + "\n\n" + content[pos:]

    # 3. Add Code Section & What-If Challenge
    if "interactive-whatif" not in content:
        if '<div class="code-section">' in content:
            m_code = re.search(r'(<div class="code-section">[\s\S]*?</div>)', content)
            if m_code:
                pos = m_code.end()
                content = content[:pos] + "\n\n" + whatif_html + "\n" + content[pos:]
        else:
            if code_py:
                new_code_sec = f"""
            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python">{code_py}</code></pre>
            </div>
            {whatif_html}
                """
                m_hub = re.search(r'<div class="learn-by-doing-hub"', content)
                if m_hub:
                    pos = m_hub.start()
                    content = content[:pos] + new_code_sec + "\n\n" + content[pos:]
                else:
                    m_quiz = re.search(r'<div class="quiz-section"|<div class="summary"', content)
                    if m_quiz:
                        pos = m_quiz.start()
                        content = content[:pos] + new_code_sec + "\n\n" + content[pos:]
                    else:
                        content = content + "\n\n" + new_code_sec

    return content

def update_file(filepath, template_dict):
    with open(filepath, 'r', encoding='utf-8') as f:
        file_text = f.read()

    updated_count = 0
    for tid, meta in template_dict.items():
        pattern = r"(['\"]" + re.escape(tid) + r"['\"]\s*:\s*`)([\s\S]*?)(`\s*[,}\n])"
        m = re.search(pattern, file_text)
        if m:
            prefix = m.group(1)
            inner_content = m.group(2)
            suffix = m.group(3)

            new_inner = process_topic_content(inner_content, meta)
            file_text = file_text[:m.start()] + prefix + new_inner + suffix + file_text[m.end():]
            updated_count += 1
            print(f"  Updated {tid} in {os.path.basename(filepath)}")
        else:
            print(f"  WARNING: Could not find {tid} in {os.path.basename(filepath)}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(file_text)
    print(f"Finished {os.path.basename(filepath)}: {updated_count} topics updated.\\n")

print("Processing Module 3 Part 1 (module3-handouts.js)...")
update_file('js/handouts/module3-handouts.js', m3_templates_p1)

print("Processing Module 3 Part 2 (module3-handouts-part2.js)...")
update_file('js/handouts/module3-handouts-part2.js', m3_templates_p2)

print("Processing Module 3 Part 3 (module3-handouts-part3.js)...")
update_file('js/handouts/module3-handouts-part3.js', m3_templates_p3)

print("Processing Module 3 Activities (activities-handouts.js)...")
update_file('js/handouts/activities-handouts.js', m3_activity_templates)
