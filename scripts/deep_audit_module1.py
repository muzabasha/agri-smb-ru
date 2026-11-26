import re
import json

# Load structure
with open('js/comprehensive-structure.js', 'r', encoding='utf-8') as f:
    struct_str = f.read()

# Load all handouts
files = [
    'js/handouts/module1-handouts-part1.js',
    'js/handouts/module1-handouts-part2.js',
    'js/handouts/module1-handouts-part3.js',
    'js/handouts/activities-handouts.js'
]

raw_content = {}
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        raw = fp.read()
    # Match entries
    pattern = r"['\"](m1-[a-zA-Z0-9_-]+)['\"]\s*:\s*`([\s\S]*?)`(?=\s*[,}\n])"
    for m in re.finditer(pattern, raw):
        raw_content[m.group(1)] = (f, m.group(2))

# Topic list for Module 1
topics_meta = [
    ("m1-t1", "Introduction to Artificial Intelligence", ["What is AI?", "Types of AI", "AI vs ML vs DL"]),
    ("m1-t2", "Machine Learning Paradigms", ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"]),
    ("m1-t3", "History and Evolution of AI/ML", ["Timeline of AI", "Key Milestones", "Modern AI Era"]),
    ("m1-t4", "AI/ML Applications in Agriculture", ["Precision Farming", "Crop Monitoring", "Yield Prediction", "Disease Detection"]),
    ("m1-t5", "Career Opportunities in AgriTech", ["Job Roles", "Industry Landscape", "Skill Requirements"]),
    ("m1-t6", "Mathematical Foundations for ML", ["Why Math Matters", "Essential Concepts", "Application in ML"]),
    ("m1-t7", "Statistics and Probability Basics", ["Mean, Median, Mode", "Variance & Standard Deviation", "Probability Distributions"]),
    ("m1-t8", "Linear Algebra for Machine Learning", ["Vectors & Matrices", "Matrix Operations", "Eigenvalues"]),
    ("m1-t9", "Data Types and Structures", ["Structured vs Unstructured", "Time Series Data", "Image Data"]),
    ("m1-t10", "Data Collection Methods in Agriculture", ["IoT Sensors", "Satellite Imagery", "Manual Collection"]),
    ("m1-t11", "Python Environment Setup", ["Installing Python", "Google Colab Setup", "IDE Configuration"]),
    ("m1-t12", "Variables and Data Types", ["int, float, string, bool", "Type Conversion", "Variable Naming"]),
    ("m1-t13", "Operators and Expressions", ["Arithmetic Operators", "Comparison Operators", "Logical Operators"]),
    ("m1-t14", "Control Structures (If-Else)", ["if statements", "if-else", "elif chains", "Nested conditionals"]),
    ("m1-t15", "Loops (For and While)", ["for loops", "while loops", "break & continue", "Loop patterns"]),
    ("m1-t16", "Functions and Modularity", ["Defining functions", "Parameters & Arguments", "Return values", "Scope"]),
    ("m1-t17", "Lists, Tuples, and Dictionaries", ["List operations", "Tuple immutability", "Dictionary key-value pairs"]),
    ("m1-t18", "String Manipulation", ["String methods", "Formatting", "Regular expressions basics"]),
    ("m1-t19", "File Handling Basics", ["Reading files", "Writing files", "CSV handling"]),
    ("m1-activity1", "Activity: Google Colab Setup", ["Colab Interface", "GPU Runtime", "Mounting Drive"]),
    ("m1-activity2", "Activity: Python Programming Exercises", ["Basic Exercises", "Agri Calculations", "Looping"]),
    ("m1-activity3", "Activity: Agricultural Data Analysis Project", ["Data Loading", "Summary Stats", "Insights"]),
    ("m1-activity4", "Activity: Data Visualization with Matplotlib", ["Plotting Crops", "Bar Charts", "Scatter Plots"])
]

results = []

for tid, title, subtopics in topics_meta:
    entry = raw_content.get(tid)
    if not entry:
        results.append({
            "id": tid,
            "title": title,
            "status": "MISSING",
            "file": None,
            "length": 0
        })
        continue
    
    fname, html = entry
    # Check elements
    has_reflexive = "reflexive" in html.lower()
    has_objectives = "learning-objectives" in html or "learning objectives" in html.lower()
    has_analogy = "analogy" in html.lower() or "farming connection" in html.lower()
    has_ipo = "ipo" in html.lower() or ("input" in html.lower() and "processing" in html.lower() and "output" in html.lower() and "box" in html.lower())
    has_code = "<code" in html or "<pre" in html
    has_code_python = "def " in html or "import " in html or "print(" in html
    has_hands_on = "hands-on" in html.lower() or "exercise" in html.lower() or "try it" in html.lower() or "activity" in html.lower()
    has_agri_case = "case study" in html.lower() or "real-world" in html.lower() or "gk vk" in html.lower() or "karnataka" in html.lower() or "farmer" in html.lower()
    has_quiz = "quiz" in html.lower() or "assessment" in html.lower() or "test your knowledge" in html.lower() or "knowledge check" in html.lower()
    has_pitfalls = "pitfall" in html.lower() or "common error" in html.lower() or "mistake" in html.lower()
    
    # Subtopic keyword presence
    subtopics_matched = []
    for st in subtopics:
        words = [w for w in re.sub(r'[^a-zA-Z0-9]', ' ', st).lower().split() if len(w) > 3]
        matched = any(w in html.lower() for w in words)
        subtopics_matched.append((st, matched))
    
    # Count sections / h2 / h3
    h2s = re.findall(r'<h2[^>]*>([\s\S]*?)</h2>', html)
    clean_h2s = [re.sub(r'<[^>]+>', '', h).strip() for h in h2s]
    
    # Code blocks count
    code_blocks = len(re.findall(r'<code[^>]*>', html))
    
    results.append({
        "id": tid,
        "title": title,
        "status": "PRESENT",
        "file": fname,
        "char_count": len(html),
        "word_count": len(html.split()),
        "h2_count": len(h2s),
        "h2_titles": clean_h2s,
        "code_blocks": code_blocks,
        "has_reflexive": has_reflexive,
        "has_objectives": has_objectives,
        "has_analogy": has_analogy,
        "has_ipo": has_ipo,
        "has_code": has_code,
        "has_code_python": has_code_python,
        "has_hands_on": has_hands_on,
        "has_agri_case": has_agri_case,
        "has_quiz": has_quiz,
        "has_pitfalls": has_pitfalls,
        "subtopics_matched": subtopics_matched
    })

with open('scripts/module1_audit_report.json', 'w', encoding='utf-8') as out:
    json.dump(results, out, indent=2)

print(f"Audited {len(results)} topics.")
for r in results:
    sub_ok = sum(1 for _, m in r['subtopics_matched'])
    sub_total = len(r['subtopics_matched'])
    print(f"{r['id']:<14} | {r['char_count']:>5} chars | Codes: {r['code_blocks']:>2} | Refl: {r['has_reflexive']} | Analogy: {r['has_analogy']} | IPO: {r['has_ipo']} | HandsOn: {r['has_hands_on']} | Quiz: {r['has_quiz']} | Subtopics: {sub_ok}/{sub_total}")
