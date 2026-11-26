import re
import os

from m4_templates_part1 import m4_templates_p1
from m4_templates_part2 import m4_templates_p2
from m4_templates_activities import m4_activity_templates

# 1. Update module4-handouts.js (m4-t1 to m4-t10)
def update_m4_part1():
    filepath = 'js/handouts/module4-handouts.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        file_text = f.read()

    for tid, meta in m4_templates_p1.items():
        story_html = meta.get("story", "").strip()
        ipo_html = meta.get("ipo", "").strip()
        code_py = meta.get("code", "").strip()
        whatif_html = meta.get("whatif", "").strip()

        pattern = r"(['\"]" + re.escape(tid) + r"['\"]\s*:\s*`)([\s\S]*?)(`\s*[,}\n])"
        m = re.search(pattern, file_text)
        if m:
            prefix = m.group(1)
            content = m.group(2)
            suffix = m.group(3)

            # Insert story
            if "farm-dilemma-box" not in content and story_html:
                if '<div class="topic-header">' in content:
                    pos = re.search(r'(<div class="topic-header">[\s\S]*?</div>)', content).end()
                    content = content[:pos] + "\n\n" + story_html + "\n" + content[pos:]
                else:
                    content = story_html + "\n" + content

            # Insert IPO
            if "ipo-model" not in content and ipo_html:
                if '<div class="farming-analogy">' in content:
                    m_fa = re.search(r'(<div class="farming-analogy">[\s\S]*?</div>\s*</div>)', content)
                    if not m_fa:
                        m_fa = re.search(r'(<div class="farming-analogy">[\s\S]*?</div>)', content)
                    pos = m_fa.end()
                    content = content[:pos] + "\n\n" + ipo_html + "\n" + content[pos:]
                elif '<div class="learning-objectives">' in content:
                    pos = re.search(r'(<div class="learning-objectives">[\s\S]*?</div>)', content).end()
                    content = content[:pos] + "\n\n" + ipo_html + "\n" + content[pos:]

            # Insert code and what-if
            if "interactive-whatif" not in content:
                if '<div class="code-section">' in content:
                    pos = re.search(r'(<div class="code-section">[\s\S]*?</div>)', content).end()
                    content = content[:pos] + "\n\n" + whatif_html + "\n" + content[pos:]
                else:
                    new_code_sec = f"""
            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python">{code_py}</code></pre>
            </div>
            {whatif_html}
                    """
                    content = content + "\n\n" + new_code_sec

            file_text = file_text[:m.start()] + prefix + content + suffix + file_text[m.end():]
            print(f"  Updated {tid} in module4-handouts.js")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(file_text)
    print("Finished module4-handouts.js.\n")

# 2. Rebuild module4-handouts-part2.js with all 15 full topics (m4-t11 to m4-t25)
def rebuild_m4_part2():
    filepath = 'js/handouts/module4-handouts-part2.js'

    topic_titles = {
        "m4-t11": "Data Cleaning and Preprocessing",
        "m4-t12": "Feature Engineering for Project",
        "m4-t13": "Algorithm Selection Justification",
        "m4-t14": "Model Development and Training",
        "m4-t15": "Hyperparameter Optimization",
        "m4-t16": "Model Validation and Testing",
        "m4-t17": "Performance Metrics Analysis",
        "m4-t18": "Cross-Validation and Performance Testing",
        "m4-t19": "Error Analysis and Troubleshooting",
        "m4-t20": "Model Improvement Strategies",
        "m4-t21": "API Development and Testing",
        "m4-t22": "User Interface Design",
        "m4-t23": "Project Documentation Preparation",
        "m4-t24": "Presentation Skills for Technical Projects",
        "m4-t25": "Final Project Presentations and Viva"
    }

    out_lines = [
        "// Module 4 Comprehensive Handouts - Part 2",
        "// Capstone Execution: Cleaning, Modeling, Testing, Deployment & Viva",
        "// Complete with Farm Stories, IPO Models, Code & Interactive What-Ifs",
        "",
        "const module4HandoutsPart2 = {"
    ]

    for i in range(11, 26):
        tid = f"m4-t{i}"
        meta = m4_templates_p2[tid]
        title = topic_titles[tid]

        story_html = meta["story"].strip()
        ipo_html = meta["ipo"].strip()
        code_py = meta["code"].strip()
        whatif_html = meta["whatif"].strip()

        topic_content = f"""
    '{tid}': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 {title}</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

{story_html}

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

{ipo_html}

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python">{code_py}</code></pre>
            </div>

{whatif_html}

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `"""
        if i < 25:
            topic_content += ","
        out_lines.append(topic_content)

    out_lines.append("};")
    out_lines.append("")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write("\n".join(out_lines))
    print(f"Rebuilt module4-handouts-part2.js with all 15 topics (m4-t11 to m4-t25).\n")

# 3. Update activities-handouts.js for m4-activity1 to m4-activity3
def update_m4_activities():
    filepath = 'js/handouts/activities-handouts.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        file_text = f.read()

    for tid, meta in m4_activity_templates.items():
        story_html = meta.get("story", "").strip()
        whatif_html = meta.get("whatif", "").strip()

        pattern = r"(['\"]" + re.escape(tid) + r"['\"]\s*:\s*`)([\s\S]*?)(`\s*[,}\n])"
        m = re.search(pattern, file_text)
        if m:
            prefix = m.group(1)
            content = m.group(2)
            suffix = m.group(3)

            if "farm-dilemma-box" not in content and story_html:
                if '<div class="topic-header">' in content:
                    pos = re.search(r'(<div class="topic-header">[\s\S]*?</div>)', content).end()
                    content = content[:pos] + "\n\n" + story_html + "\n" + content[pos:]
                else:
                    content = story_html + "\n" + content

            if "interactive-whatif" not in content and whatif_html:
                if '<div class="code-section">' in content:
                    pos = re.search(r'(<div class="code-section">[\s\S]*?</div>)', content).end()
                    content = content[:pos] + "\n\n" + whatif_html + "\n" + content[pos:]
                else:
                    content = content + "\n\n" + whatif_html

            file_text = file_text[:m.start()] + prefix + content + suffix + file_text[m.end():]
            print(f"  Updated {tid} in activities-handouts.js")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(file_text)
    print("Finished activities-handouts.js for Module 4.\n")

print("Applying Module 4 Enhancements...")
update_m4_part1()
rebuild_m4_part2()
update_m4_activities()
print("Module 4 updates successfully applied!")
