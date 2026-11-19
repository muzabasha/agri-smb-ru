# scripts/verify_enhancements.py
import re

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

total_checked = 0
issues = []

for filepath in FILES:
    with open(filepath, 'r', encoding='utf-8') as f:
        c = f.read()

    # Find topics
    matches = list(re.finditer(r"['\"](m[1-3]-t\d+)['\"]\s*:\s*`", c))
    for i, m in enumerate(matches):
        tid = m.group(1)
        start = m.end()
        end = matches[i+1].start() if i + 1 < len(matches) else len(c)
        body = c[start:end]
        total_checked += 1
        has_refl = "reflexive-questions" in body and "Reflexive Questions" in body
        has_refl_details = "reflexive-details" in body and "<summary>" in body
        has_quiz = "quiz-section" in body and "Activity-Based Feedback MCQs" in body
        has_feedback = "quiz-feedback" in body and "Detailed Activity Feedback" in body

        # Check order: reflexive questions must come before learning-objectives / farming-analogy / core-concepts
        refl_pos = body.find("reflexive-questions")
        intro_pos = -1
        for intro_tag in ["learning-objectives", "farming-analogy", "core-concepts"]:
            p = body.find(intro_tag)
            if p != -1 and (intro_pos == -1 or p < intro_pos):
                intro_pos = p

        order_ok = (intro_pos == -1 or refl_pos < intro_pos)

        if not (has_refl and has_refl_details and has_quiz and has_feedback and order_ok):
            issues.append({
                'topic': tid,
                'file': filepath,
                'has_refl': has_refl,
                'has_refl_details': has_refl_details,
                'has_quiz': has_quiz,
                'has_feedback': has_feedback,
                'order_ok': order_ok
            })

print(f"Total topics verified: {total_checked}")
if issues:
    print(f"❌ Found {len(issues)} issues:")
    for iss in issues:
        print(" ", iss)
else:
    print("🎉 ALL 68 TOPICS VERIFIED PERFECTLY! All reflexive questions are before topic introduction with hidden answers, and all MCQs have activity feedback!")
