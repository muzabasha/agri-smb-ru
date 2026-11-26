# Module 4 Templates: Part 1 (matching module4-handouts.js)
# Topics: m4-t1 to m4-t10

m4_templates_p1 = {
    "m4-t1": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student team wants to solve all agricultural problems with a single AI app.</p>
                <p>Vague goals like 'solve farm losses' fail because project scopes are too broad.</p>
                <p>Successful projects solve one specific bottleneck: like early detection of tomato blight.</p>
                <p>Problem scoping defines clear inputs, measurable success metrics, and realistic timeline boundaries.</p>
                <p>How do we scope an agricultural data science capstone project for maximum impact?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Problem Statement:</strong> 25% post-harvest tomato damage in Kolar mandis.</li>
                            <li><strong>Available Data:</strong> Smartphone fruit photos and transit temperature logs.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Scope Matrix:</strong> Define in-scope goals vs out-of-scope distractions.</li>
                            <li><strong>Success Metric:</strong> Target 90% sorting accuracy within 8-week semester.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Project Charter:</strong> Signed capstone scope document approved by mentor.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.1: Capstone Project Scoping Matrix
project_charter = {
    "title": "Smart Tomato Quality Grader",
    "target_crop": "Tomato",
    "primary_metric": "Sorting Accuracy >= 90%",
    "in_scope": ["Ripeness grading", "Surface blemish detection"],
    "out_of_scope": ["Drone yield mapping", "Borewell motor control"],
    "timeline_weeks": 8
}

print(f"Capstone Project: {project_charter['title']}")
print(f"Target Crop:      {project_charter['target_crop']}")
print(f"Success Metric:   {project_charter['primary_metric']}")
print("In Scope Items:  ", ", ".join(project_charter['in_scope']))
print("Out of Scope:    ", ", ".join(project_charter['out_of_scope']))
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If your team only has 4 weeks, change <code>timeline_weeks = 4</code> and remove surface blemish detection from in-scope. How does narrowing scope protect delivery?</p>
</div>
        """
    },

    "m4-t2": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Engineers often build AI tools without consulting actual farmers in the village.</p>
                <p>The resulting software solves imaginary problems that farmers do not care about.</p>
                <p>Visiting fields exposes real pain points: like sudden groundwater depletion or labor shortages.</p>
                <p>Field interviews ensure that student projects address genuine economic farming bottlenecks.</p>
                <p>How do we interview farmers to identify high-value agricultural problems for AI?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Farmer Survey:</strong> Crop loss causes ranked by 20 local growers.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Frequency Ranking:</strong> Sort problems by total economic rupees lost.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Top Priority Problem:</strong> Whitefly pest damage identified as top pain point.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.2: Farmer Problem Severity Ranking
import pandas as pd

survey_feedback = pd.DataFrame({
    'Problem_Description': ['Whitefly Pest Infestation', 'High Chemical Cost', 'Borewell Drying', 'Market Price Crash'],
    'Farmers_Affected_Pct': [85.0, 70.0, 60.0, 90.0],
    'Annual_Loss_Per_Acre_Rs': [24000, 12000, 35000, 18000]
})

survey_feedback['Severity_Score'] = (
    survey_feedback['Farmers_Affected_Pct'] * survey_feedback['Annual_Loss_Per_Acre_Rs'] / 1000.0
)

top_problem = survey_feedback.sort_values(by='Severity_Score', ascending=False).iloc[0]

print("--- Farmer Pain Point Analysis ---")
print(survey_feedback[['Problem_Description', 'Severity_Score']])
print(f"\\nSelected Capstone Focus: {top_problem['Problem_Description']}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If pest losses drop to <code>5000</code> due to resistant seeds, which problem takes the top priority score?</p>
</div>
        """
    },

    "m4-t3": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student team spends three weeks writing an algorithm that someone else already perfected.</p>
                <p>Reinventing existing wheels wastes valuable capstone time and lowers project novelty.</p>
                <p>Reading published journal papers reveals tested models, known pitfalls, and open gaps.</p>
                <p>A systematic literature review provides a solid scientific foundation for capstone projects.</p>
                <p>How do we review published agricultural AI papers efficiently to guide project design?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Research Papers:</strong> 15 published articles on crop disease computer vision.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Comparison Matrix:</strong> Extract models used, datasets tested, and reported accuracy.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Literature Summary:</strong> MobileNetV2 identified as top lightweight model.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.3: Literature Review Benchmark Comparison
import pandas as pd

lit_review_benchmarks = pd.DataFrame({
    'Paper_Author': ['Sharma et al. (2023)', 'Patel & Rao (2024)', 'Kumar (2025)'],
    'Model_Used': ['ResNet-50', 'MobileNetV2', 'YOLOv8'],
    'Reported_Accuracy': [92.5, 94.1, 89.8],
    'Model_Size_MB': [98.0, 14.0, 22.0]
})

print("--- Prior Research Benchmark Matrix ---")
print(lit_review_benchmarks)
print("\\nConclusion: MobileNetV2 gives best balance of high accuracy and small file size.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If your project must run on a cheap smartphone, which model size is best: 98 MB or 14 MB?</p>
</div>
        """
    },

    "m4-t4": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Students download an online dataset claiming to represent Indian farm soil test records.</p>
                <p>Midway through the project, they discover the dataset was collected in sandy Florida soil.</p>
                <p>Florida soil properties behave completely differently from red sandy loams in GKVK fields.</p>
                <p>Validating dataset geographic origin, soil taxonomy, and crop varieties prevents project failure.</p>
                <p>How do we validate agricultural datasets before training machine learning models?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Candidate Dataset:</strong> 1,000 downloaded agricultural soil sample records.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Taxonomy Check:</strong> Verify soil order (Alfisols/Inceptisols for Karnataka).</li>
                            <li><strong>Range Verification:</strong> Ensure pH (5.0 to 8.5) and moisture (10% to 45%) match field realities.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Dataset Audit Report:</strong> Verified dataset approved for capstone training.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.4: Agricultural Dataset Feasibility Validation
import pandas as pd

dataset_profile = {
    "total_samples": 1200,
    "soil_types_represented": ["Red Sandy Loam", "Black Clay"],
    "ph_min": 5.2,
    "ph_max": 7.8,
    "missing_values_count": 18
}

print("Dataset Audit Checklist:")
print(f"1. Sample Count: {dataset_profile['total_samples']} -> Adequate for ML")
print(f"2. Local Soil Types: {', '.join(dataset_profile['soil_types_represented'])} -> Matches Karnataka")
print(f"3. pH Range: {dataset_profile['ph_min']} to {dataset_profile['ph_max']} -> Biologically realistic")
print(f"4. Missing Values: {dataset_profile['missing_values_count']} -> Easy to clean with Pandas")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If <code>ph_max = 14.0</code> (impossible for crop soil), add an assertion check to reject impossible laboratory errors!</p>
</div>
        """
    },

    "m4-t5": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A proposed project requires flying multi-spectral drones over five hundred farm acres daily.</p>
                <p>The student team discovers that commercial drone batteries cost fifty thousand rupees each.</p>
                <p>Government flight permissions take three months to approve, while the semester is eight weeks.</p>
                <p>Feasibility analysis checks hardware costs, legal permits, and time limits before spending money.</p>
                <p>How do we evaluate technical, economic, and operational feasibility for capstones?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Project Constraints:</strong> ₹5,000 budget, 8-week semester, Smartphone camera.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Feasibility Scoring:</strong> Score technical, financial, and regulatory risks.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Pivot Strategy:</strong> Switch from expensive drones to free satellite imagery.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.5: Capstone Feasibility Risk Scoring
feasibility_aspects = {
    "Technical Feasibility": 8.5,  # Models run on free Google Colab
    "Budget Feasibility":    9.0,  # Uses free Sentinel-2 satellite data
    "Timeline Feasibility":  8.0,  # Achievable in 8 academic weeks
    "Legal & Safety":       10.0   # No drone permits required
}

overall_feasibility = sum(feasibility_aspects.values()) / len(feasibility_aspects)

print("--- Capstone Feasibility Scorecard ---")
for aspect, score in feasibility_aspects.items():
    print(f"{aspect:<25}: {score:.1f} / 10.0")
print(f"\\nOverall Feasibility Index: {overall_feasibility:.2f} / 10.0 (Green Light: Proceed!)")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If expensive hardware drops <code>Budget Feasibility</code> to <code>3.0</code>, how does the overall score change? Would you proceed?</p>
</div>
        """
    },

    "m4-t6": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Students spend six weeks collecting data, leaving only one week to train models and write reports.</p>
                <p>Rushing the model training and final documentation leads to poor grades and project failure.</p>
                <p>Crop seasons do not wait: if you miss the flowering stage, you lose data for the year.</p>
                <p>Timeline milestone planning breaks capstones into synchronized weekly deadlines.</p>
                <p>How do Gantt charts and milestone schedules keep agricultural projects on time?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Semester Duration:</strong> 8 working weeks from proposal to viva.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Phase Allocation:</strong> 2 wks data, 2 wks model, 2 wks UI, 2 wks testing & report.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Milestone Schedule:</strong> Weekly delivery deadlines for each team member.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.6: Capstone Project Milestone Scheduler
project_milestones = [
    {"Week": 1, "Phase": "Problem Definition & Literature Review", "Status": "Complete"},
    {"Week": 2, "Phase": "Field Soil Data Collection & Auditing", "Status": "Complete"},
    {"Week": 4, "Phase": "Model Training & Cross-Validation",    "Status": "In Progress"},
    {"Week": 6, "Phase": "Streamlit User Interface Development", "Status": "Pending"},
    {"Week": 8, "Phase": "Final Thesis Report & Viva Defense",    "Status": "Pending"}
]

print("--- 8-Week Capstone Milestone Tracker ---")
for m in project_milestones:
    print(f"Week {m['Week']}: {m['Phase']:<40} [{m['Status']}]")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If data collection takes an extra week, shift Week 4 to Week 5. How do you compress remaining phases to protect the Week 8 viva?</p>
</div>
        """
    },

    "m4-t7": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Four students join a project team without deciding who will do what tasks.</p>
                <p>Two students duplicate the same literature survey, while nobody collects soil samples.</p>
                <p>Unassigned tasks cause finger-pointing and missed deadlines before review presentations.</p>
                <p>Resource allocation assigns specific roles based on each team member's strengths.</p>
                <p>How do team leaders assign data, modeling, and presentation roles effectively?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Team Roster:</strong> 4 students with agronomy, coding, and writing skills.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Skill Mapping:</strong> Match best skills to project tasks.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Responsibility Matrix:</strong> Clear ownership of data, code, UI, and documentation.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.7: Team Resource Allocation Matrix
team_responsibilities = {
    "Ravi (Agronomy Lead)":      "Field sampling, soil taxonomy, biological ground truth",
    "Deepa (ML Engineer)":       "Data cleaning, model training, hyperparameter tuning",
    "Kavya (Full-Stack Dev)":     "Streamlit dashboard UI, SQLite database integration",
    "Manoj (Documentation Lead)":"Literature review compilation, charts, viva slide deck"
}

print("--- Capstone Team Responsibility Matrix ---")
for member, role in team_responsibilities.items():
    print(f"👉 {member:<26} -> {role}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If your team has only 2 students, pair Agronomy with Documentation and ML with UI. Who owns code testing?</p>
</div>
        """
    },

    "m4-t8": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Teammates share code files by emailing versions like 'model_final_v2_really_final.py'.</p>
                <p>One teammate accidentally overwrites another's code, erasing two days of work.</p>
                <p>Messy file sharing creates chaos and causes code to break the night before reviews.</p>
                <p>Git version control tracks every code edit and merges team contributions safely.</p>
                <p>How does Git collaboration prevent team code loss and keep projects organized?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Team Code:</strong> Python files edited by multiple student collaborators.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Git Tracking:</strong> Record exact line changes, timestamps, and commit notes.</li>
                            <li><strong>Branch Merging:</strong> Merge new features into main branch smoothly.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Clean Repository:</strong> Fully tracked GitHub project ready for evaluators.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.8: Simulating Git Version Control Log
git_commit_history = [
    {"hash": "e186ec6", "author": "Deepa", "message": "Add Linear Regression model for wheat yield"},
    {"hash": "6c6b63d", "author": "Ravi",  "message": "Upload cleaned soil test CSV from GKVK field"},
    {"hash": "d51ab92", "author": "Kavya", "message": "Build interactive Streamlit farmer dashboard"}
]

print("--- Project GitHub Commit Trail ---")
for commit in git_commit_history:
    print(f"Commit [{commit['hash']}] by {commit['author']:<6}: {commit['message']}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a new commit entry for yourself adding the final viva slides. Why is a clear commit message important?</p>
</div>
        """
    },

    "m4-t9": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Students collect all soil samples from a single fertile plot near the college canteen.</p>
                <p>Their AI model learns only about that one plot and fails across diverse field conditions.</p>
                <p>Unrepresentative sampling creates biased models that cannot be trusted in real farming.</p>
                <p>Stratified field sampling collects samples across diverse soil textures, slopes, and crops.</p>
                <p>How do we design unbiased agricultural data collection strategies across field zones?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Field Zones:</strong> Upland sandy plots, Lowland clay plots, River valley plots.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Stratified Sampling:</strong> Collect equal sample quotas from all three zones.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Balanced Dataset:</strong> Unbiased training data representing entire farm.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.9: Stratified Field Sampling Quota Tracker
field_strata = {
    "Upland Sandy Soil":   {"target": 50, "collected": 48},
    "Midland Loamy Soil":  {"target": 50, "collected": 52},
    "Lowland Clay Soil":   {"target": 50, "collected": 45}
}

print("--- Stratified Field Sampling Progress ---")
total_samples = 0
for zone, quota in field_strata.items():
    total_samples += quota['collected']
    completion = (quota['collected'] / quota['target']) * 100.0
    print(f"{zone:<20}: {quota['collected']}/{quota['target']} samples ({completion:.0f}%)")

print(f"\\nTotal Samples Assembled: {total_samples} (Balanced representation achieved)")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If Lowland Clay has only <code>10</code> samples collected, why does this create a dangerous blind spot for model training?</p>
</div>
        """
    },

    "m4-t10": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student trains an algorithm before checking minimums, maximums, and distributions.</p>
                <p>The model gives nonsense recommendations because one moisture sensor recorded 999%.</p>
                <p>A broken sensor reading corrupted the entire training process without the student noticing.</p>
                <p>Exploratory Data Analysis (EDA) charts distributions and catches sensor bugs early.</p>
                <p>How does EDA expose outliers and hidden relationships before model training begins?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Raw Soil Measurements:</strong> [22.0, 24.5, 999.0, 19.8, 25.1] percent moisture.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Statistical Inspection:</strong> Summary statistics reveal impossible 999% max.</li>
                            <li><strong>Outlier Isolation:</strong> Identify sensor fault code.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Cleaned Feature:</strong> Outlier removed before model training starts.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 4.10: Exploratory Data Analysis & Outlier Detection
import pandas as pd

raw_field_telemetry = pd.Series([22.0, 24.5, 999.0, 19.8, 25.1, 23.0], name="Soil_Moisture")

print("--- Summary Statistics ---")
print(raw_field_telemetry.describe())

# Detect hardware malfunction outliers (> 100% moisture is impossible)
impossible_outliers = raw_field_telemetry[raw_field_telemetry > 100.0]
print(f"\\nDetected Impossible Malfunctions: {list(impossible_outliers)}")
print("Action: Remove reading 999.0 before training model.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Filter the series: <code>clean_data = raw_field_telemetry[raw_field_telemetry <= 100.0]</code>. What is the true average soil moisture?</p>
</div>
        """
    }
}

print("Loaded Module 4 Part 1 templates:", len(m4_templates_p1))
