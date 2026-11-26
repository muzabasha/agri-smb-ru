import re
import os

# 1. Template for upgrading module5-handouts-p2.js m5BonusCard
def upgrade_m5_p2():
    filepath = 'js/handouts/module5-handouts-p2.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Replace the m5BonusCard definition with rich experiential learning structure
    old_func_pattern = r"function m5BonusCard\(num, icon, title, objective, concepts, code\) \{[\s\S]*?\n\}"
    new_func = """function m5BonusCard(num, icon, title, objective, concepts, code) {
    return `
    <div class="handout-premium">
        <div class="topic-header">
            <h1>${icon} Bonus Project ${num}: ${title}</h1>
            <p class="duration">⏱️ Estimated: 2-3 hours | Real-World Capstone</p>
        </div>

        <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
            <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
            <p>Farmers face real challenges managing ${title.toLowerCase()} in dynamic field environments.</p>
            <p>Manual monitoring is slow and misses critical crop and soil changes.</p>
            <p>Data science automates ${title.toLowerCase()} to protect harvests and maximize farmer profits.</p>
            <p>How do we develop and deploy this agricultural solution effectively?</p>
        </div>

        <div class="learning-objectives">
            <h2>🎯 Objective</h2>
            <p>${objective}</p>
        </div>

        <div class="concept-section">
            <h2>📌 Key Concepts</h2>
            <ul>${concepts.map(c => '<li>' + c + '</li>').join('')}</ul>
        </div>

        <div class="ipo-model">
            <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
            <div class="ipo-container">
                <div class="ipo-section input">
                    <h3>📥 INPUT</h3>
                    <ul>
                        <li><strong>Field Telemetry:</strong> Real-world agricultural sensors, imagery, or market data.</li>
                        <li><strong>Agronomic Baseline:</strong> Crop variety specifications and environmental bounds.</li>
                    </ul>
                </div>
                <div class="ipo-section processing">
                    <h3>⚙️ PROCESSING</h3>
                    <ul>
                        <li><strong>Feature Pipeline:</strong> Clean, filter, and extract key agricultural indicators.</li>
                        <li><strong>Core Algorithm:</strong> ${concepts[0] || 'Machine learning model pipeline'}.</li>
                    </ul>
                </div>
                <div class="ipo-section output">
                    <h3>📤 OUTPUT</h3>
                    <ul>
                        <li><strong>Actionable Insight:</strong> High-precision prediction and automated farm advisory.</li>
                        <li><strong>Farmer Value:</strong> Reduced chemical waste, conserved water, or higher crop yields.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="code-section">
            <h2>💻 Starter Code (Google Colab Ready)</h2>
            <pre><code class="language-python">${code}</code></pre>
        </div>

        <div class="interactive-whatif">
            <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
            <p><strong>Try it in Colab:</strong> Modify one input parameter in the starter code above. Re-run the cell. Observe how the agricultural prediction or decision output updates!</p>
        </div>

        <div class="summary">
            <h2>📋 Key Takeaways</h2>
            <ul>
                <li>${title} bridges data science directly to commercial agricultural impact.</li>
                <li>Real-world deployment requires robust handling of sensor noise and weather variance.</li>
                <li>Deliver clear, actionable recommendations that farmers can easily understand and trust.</li>
            </ul>
        </div>
    </div>`;
}"""

    text_updated = re.sub(old_func_pattern, new_func, text, count=1)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text_updated)
    print("Upgraded m5BonusCard in module5-handouts-p2.js (All 50 bonus projects enhanced!).\n")

# 2. Upgrade module5-handouts.js (Topics m5-t1 to m5-t21)
def upgrade_m5_p1():
    filepath = 'js/handouts/module5-handouts.js'
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Find all topics m5-t1 to m5-t21
    keys = re.findall(r"['\"](m5-t\d+)['\"]\s*:", text)
    print(f"Updating {len(keys)} topics in module5-handouts.js...")

    for k in keys:
        pattern = r"(['\"]" + re.escape(k) + r"['\"]\s*:\s*`)([\s\S]*?)(`\s*[,}\n])"
        m = re.search(pattern, text)
        if not m:
            continue
        prefix = m.group(1)
        content = m.group(2)
        suffix = m.group(3)

        # Extract title from h1 or h2
        title_m = re.search(r'<h[12][^>]*>([\s\S]*?)</h[12]>', content)
        raw_title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip() if title_m else f"Deployment Solution {k}"
        # Clean title
        clean_title = re.sub(r'^(🚀|💧|🦠|💹|🧪|🌾|🍃|🚜|🍎|📊)?\s*(Project|Bonus Project)?\s*\d*:\s*', '', raw_title).strip()

        story_box = f"""
        <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
            <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
            <p>Farmers face real challenges implementing {clean_title.lower()} under harsh outdoor conditions.</p>
            <p>Manual monitoring is slow, labor-intensive, and fails to catch rapid crop stress.</p>
            <p>Automated software and sensors solve this dilemma by providing live agricultural intelligence.</p>
            <p>How do we build and deploy this system for practical farm operations?</p>
        </div>
        """

        ipo_box = f"""
        <div class="ipo-model">
            <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
            <div class="ipo-container">
                <div class="ipo-section input">
                    <h3>📥 INPUT</h3>
                    <ul>
                        <li><strong>Field Telemetry:</strong> Live sensor readings, weather feeds, or crop photos.</li>
                        <li><strong>Agronomic Threshold:</strong> Safe biological operating boundaries.</li>
                    </ul>
                </div>
                <div class="ipo-section processing">
                    <h3>⚙️ PROCESSING</h3>
                    <ul>
                        <li><strong>Data Pipeline:</strong> Filter noise and compute key agricultural indicators.</li>
                        <li><strong>Decision Logic:</strong> Automated rules and machine learning model inference.</li>
                    </ul>
                </div>
                <div class="ipo-section output">
                    <h3>📤 OUTPUT</h3>
                    <ul>
                        <li><strong>Advisory Alert:</strong> Actionable guidance delivered to farmer mobile devices.</li>
                        <li><strong>Field Action:</strong> Automated solenoid valve or actuator response.</li>
                    </ul>
                </div>
            </div>
        </div>
        """

        whatif_box = """
        <div class="interactive-whatif">
            <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
            <p><strong>Try it in Colab:</strong> Modify one input parameter in the Python code above. Re-run the cell. Observe how the farm decision or prediction output updates!</p>
        </div>
        """

        # Insert story after topic-header
        if "farm-dilemma-box" not in content:
            if '<div class="topic-header">' in content:
                pos = re.search(r'(<div class="topic-header">[\s\S]*?</div>)', content).end()
                content = content[:pos] + "\n" + story_box + "\n" + content[pos:]
            else:
                content = story_box + "\n" + content

        # Insert IPO before code-section or at sensible place
        if "ipo-model" not in content:
            if '<div class="code-section">' in content:
                pos = re.search(r'<div class="code-section">', content).start()
                content = content[:pos] + ipo_box + "\n" + content[pos:]
            elif '<h3>💻' in content or '<h2>💻' in content:
                pos = re.search(r'<h[23]>💻', content).start()
                content = content[:pos] + ipo_box + "\n" + content[pos:]
            else:
                content = content + "\n" + ipo_box

        # Insert whatif after code-section
        if "interactive-whatif" not in content:
            if '<div class="code-section">' in content:
                pos = re.search(r'(<div class="code-section">[\s\S]*?</div>)', content).end()
                content = content[:pos] + "\n" + whatif_box + "\n" + content[pos:]
            elif '</pre>' in content:
                pos = re.search(r'</pre>', content).end()
                content = content[:pos] + "\n" + whatif_box + "\n" + content[pos:]
            else:
                content = content + "\n" + whatif_box

        text = text[:m.start()] + prefix + content + suffix + text[m.end():]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Finished updating module5-handouts.js (All 21 topics enhanced!).\n")

print("Applying Module 5 Enhancements...")
upgrade_m5_p1()
upgrade_m5_p2()
print("Module 5 enhancements successfully completed!")
