// Module 4 Comprehensive Handouts - Capstone Project Guide
// From Problem Definition to EDA

const module4Handouts = {
    'm4-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Leading a Project: Problem Definition</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student team wants to solve all agricultural problems with a single AI app.</p>
                <p>Vague goals like 'solve farm losses' fail because project scopes are too broad.</p>
                <p>Successful projects solve one specific bottleneck: like early detection of tomato blight.</p>
                <p>Problem scoping defines clear inputs, measurable success metrics, and realistic timeline boundaries.</p>
                <p>How do we scope an agricultural data science capstone project for maximum impact?</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Identify valid agricultural problems for AI solutions</li>
                    <li>Scope a project to be manageable (MVP)</li>
                    <li>Define success criteria (Metrics)</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Defining the Problem = Checking the Soil</strong></p>
                    <p>Before you plant (build a model), you check if the soil (problem) is viable. Is it worth growing crops here? Or are you just planting seeds in gravel?</p>
                </div>
            </div>

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

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>A good problem is specific: "Predict tomato blight" vs "Help farmers"</li>
                    <li>Define "Success": Accuracy > 90%? Run on a phone?</li>
                    <li>Don't boil the ocean - start small.</li>
                </ul>
            </div>
        </div>
    


            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.1: Capstone Project Scoping Matrix
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
print("Out of Scope:    ", ", ".join(project_charter['out_of_scope']))</code></pre>
            </div>
            <div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If your team only has 4 weeks, change <code>timeline_weeks = 4</code> and remove surface blemish detection from in-scope. How does narrowing scope protect delivery?</p>
</div>
                    `,
    'm4-t2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Agricultural Problem Identification</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Engineers often build AI tools without consulting actual farmers in the village.</p>
                <p>The resulting software solves imaginary problems that farmers do not care about.</p>
                <p>Visiting fields exposes real pain points: like sudden groundwater depletion or labor shortages.</p>
                <p>Field interviews ensure that student projects address genuine economic farming bottlenecks.</p>
                <p>How do we interview farmers to identify high-value agricultural problems for AI?</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Analyze stakeholder (farmer) needs</li>
                    <li>Assess impact vs effort</li>
                    <li>Understand common pain points (water, pests, labor)</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Stakeholder Analysis = Listening to the Elders</strong></p>
                    <p>You might think a drone is cool, but if the farmer just wants a better way to check soil moisture without walking, the drone is overkill. Build what they need, not what looks cool.</p>
                </div>
            </div>

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

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Interview Simulation</h3>
                    <p>Roleplay: One student is a farmer with a pest problem. The other is an AI engineer. Ask questions to find the root cause using the "5 Whys" technique.</p>
                </div>
            </div>
        </div>
    


            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.2: Farmer Problem Severity Ranking
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
print(f"\nSelected Capstone Focus: {top_problem['Problem_Description']}")</code></pre>
            </div>
            <div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If pest losses drop to <code>5000</code> due to resistant seeds, which problem takes the top priority score?</p>
</div>
                    `,
    'm4-t9': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Data Collection Strategy</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Students collect all soil samples from a single fertile plot near the college canteen.</p>
                <p>Their AI model learns only about that one plot and fails across diverse field conditions.</p>
                <p>Unrepresentative sampling creates biased models that cannot be trusted in real farming.</p>
                <p>Stratified field sampling collects samples across diverse soil textures, slopes, and crops.</p>
                <p>How do we design unbiased agricultural data collection strategies across field zones?</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Primary vs Secondary Data</li>
                    <li>Designing a data collection protocol</li>
                    <li>Ensuring data quality and diversity</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Data Collection = Harvesting</strong></p>
                    <p>If you harvest sloppy (mix weeds with crop), your final product is bad. If you harvest only from the sunny side of the field (bias), you don't know the true yield.</p>
                </div>
            </div>

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

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Simulating Data Collection Checklist
def check_data_quality(df):
    report = {
        'total_rows': len(df),
        'missing_values': df.isnull().sum().to_dict(),
        'duplicates': df.duplicated().sum(),
        'negative_values': (df.select_dtypes(include=np.number) < 0).sum().to_dict()
    }
    return report

# Mock collected data
data = pd.DataFrame({
    'ph': [6.5, 7.0, -1.0, 6.8, np.nan], # -1 is error, nan is missing
    'moisture': [30, 32, 28, 105, 30]    # 105 is likely error (>100%)
})

print(check_data_quality(data))
                </code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If Lowland Clay has only <code>10</code> samples collected, why does this create a dangerous blind spot for model training?</p>
</div>

        </div>
    `,
    'm4-t10': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Exploratory Data Analysis (EDA)</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student trains an algorithm before checking minimums, maximums, and distributions.</p>
                <p>The model gives nonsense recommendations because one moisture sensor recorded 999%.</p>
                <p>A broken sensor reading corrupted the entire training process without the student noticing.</p>
                <p>Exploratory Data Analysis (EDA) charts distributions and catches sensor bugs early.</p>
                <p>How does EDA expose outliers and hidden relationships before model training begins?</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use Pandas and Seaborn for EDA</li>
                    <li>Detect outliers and anomalies</li>
                    <li>Visualize distributions and correlations</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>EDA = Walking the Fields</strong></p>
                    <p>Before you make a plan for the season, you walk every row. You look for wet spots, rocky patches, or sick plants. EDA is "walking" through your data rows.</p>
                </div>
            </div>

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

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Load dataset
df = sns.load_dataset('iris') # Proxy for crop data

# 1. Distribution
sns.histplot(df['sepal_length'], kde=True)
plt.title('Distribution of Sepal Length')
plt.show()

# 2. Pairplot (Relationships)
sns.pairplot(df, hue='species')
plt.show()

# 3. Correlation Map
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('Feature Correlations')
plt.show()
                </code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Filter the series: <code>clean_data = raw_field_telemetry[raw_field_telemetry <= 100.0]</code>. What is the true average soil moisture?</p>
</div>

        </div>
    `,

    'm4-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Literature Review Methodology</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student team spends three weeks writing an algorithm that someone else already perfected.</p>
                <p>Reinventing existing wheels wastes valuable capstone time and lowers project novelty.</p>
                <p>Reading published journal papers reveals tested models, known pitfalls, and open gaps.</p>
                <p>A systematic literature review provides a solid scientific foundation for capstone projects.</p>
                <p>How do we review published agricultural AI papers efficiently to guide project design?</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Find credible sources (Google Scholar, arXiv)</li>
                    <li>Synthesize existing research on Agri-AI</li>
                    <li>Identify "Research Gaps" to solve</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Literature Review = Asking the Neighbors</strong></p>
                    <p>Before trying a new crop variety, you ask other farmers what worked for them. You don't want to repeat their mistakes (e.g., planting rice in sandy soil). Research is just learning from others' experiments.</p>
                </div>
            </div>

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

            <div class="student-activity">
                <h2>🎯 Hands-On Activity</h2>
                <div class="activity-box">
                    <h3>Mini-Review</h3>
                    <p>Find 3 papers on "Deep Learning for Tomato Disease". Comparison table columns: Algorithm Used, Dataset Size, Accuracy Achieved, Limitations.</p>
                </div>
            </div>
        </div>
    


            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.3: Literature Review Benchmark Comparison
import pandas as pd

lit_review_benchmarks = pd.DataFrame({
    'Paper_Author': ['Sharma et al. (2023)', 'Patel & Rao (2024)', 'Kumar (2025)'],
    'Model_Used': ['ResNet-50', 'MobileNetV2', 'YOLOv8'],
    'Reported_Accuracy': [92.5, 94.1, 89.8],
    'Model_Size_MB': [98.0, 14.0, 22.0]
})

print("--- Prior Research Benchmark Matrix ---")
print(lit_review_benchmarks)
print("\nConclusion: MobileNetV2 gives best balance of high accuracy and small file size.")</code></pre>
            </div>
            <div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If your project must run on a cheap smartphone, which model size is best: 98 MB or 14 MB?</p>
</div>
                    `,
    'm4-t4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Dataset Selection & Sources</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Students download an online dataset claiming to represent Indian farm soil test records.</p>
                <p>Midway through the project, they discover the dataset was collected in sandy Florida soil.</p>
                <p>Florida soil properties behave completely differently from red sandy loams in GKVK fields.</p>
                <p>Validating dataset geographic origin, soil taxonomy, and crop varieties prevents project failure.</p>
                <p>How do we validate agricultural datasets before training machine learning models?</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Known repositories (Kaggle, UCI, PlantVillage)</li>
                    <li>Evaluating dataset quality (Resolution, Labels, Balance)</li>
                    <li>Licensing (Creative Commons, Open Source)</li>
                </ul>
            </div>

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

            <div class="summary">
                <h2>📋 Top Agri-Datasets</h2>
                <ul>
                    <li><strong>PlantVillage:</strong> Leaf diseases (Classification)</li>
                    <li><strong>Global Wheat Head:</strong> Object Detection</li>
                    <li><strong>Crop Recommendation:</strong> Soil/Climate data (Tabular)</li>
                </ul>
            </div>
        </div>
    


            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.4: Agricultural Dataset Feasibility Validation
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
print(f"4. Missing Values: {dataset_profile['missing_values_count']} -> Easy to clean with Pandas")</code></pre>
            </div>
            <div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If <code>ph_max = 14.0</code> (impossible for crop soil), add an assertion check to reject impossible laboratory errors!</p>
</div>
                    `,

    'm4-t5': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Feasibility Analysis</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A proposed project requires flying multi-spectral drones over five hundred farm acres daily.</p>
                <p>The student team discovers that commercial drone batteries cost fifty thousand rupees each.</p>
                <p>Government flight permissions take three months to approve, while the semester is eight weeks.</p>
                <p>Feasibility analysis checks hardware costs, legal permits, and time limits before spending money.</p>
                <p>How do we evaluate technical, economic, and operational feasibility for capstones?</p>
            </div>

            <div class="core-concepts">
                <h2>📖 Technical vs Economic Feasibility</h2>
                <p><strong>Technical:</strong> Can we build it? (Do we have data? GPU? Skills?)</p>
                <p><strong>Economic:</strong> Should we build it? (Does it crave money? Is the ROI positive?)</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Feasibility = Can I afford this tractor?</strong></p>
                    <p>A giant combine harvester is "technically" great, but on a 1-acre farm, it's "economically" a disaster. Same with using a supercomputer for a simple regression task.</p>
                </div>
            </div>

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

        </div>
    


            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.5: Capstone Feasibility Risk Scoring
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
print(f"\nOverall Feasibility Index: {overall_feasibility:.2f} / 10.0 (Green Light: Proceed!)")</code></pre>
            </div>
            <div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If expensive hardware drops <code>Budget Feasibility</code> to <code>3.0</code>, how does the overall score change? Would you proceed?</p>
</div>
                    `,

    'm4-t6': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Project Timeline Planning</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Students spend six weeks collecting data, leaving only one week to train models and write reports.</p>
                <p>Rushing the model training and final documentation leads to poor grades and project failure.</p>
                <p>Crop seasons do not wait: if you miss the flowering stage, you lose data for the year.</p>
                <p>Timeline milestone planning breaks capstones into synchronized weekly deadlines.</p>
                <p>How do Gantt charts and milestone schedules keep agricultural projects on time?</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create a Gantt Chart</li>
                    <li>Set Milestones (Data Ready, Prototype, Final)</li>
                    <li>Buffer for debugging time</li>
                </ul>
            </div>

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

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import matplotlib.pyplot as plt

# Simple Gantt Chart Data
tasks = pd.DataFrame([
    {'Task': 'Literature Review', 'Start': 1, 'Duration': 2},
    {'Task': 'Data Collection', 'Start': 3, 'Duration': 3},
    {'Task': 'Preprocessing', 'Start': 6, 'Duration': 2},
    {'Task': 'Model Training', 'Start': 8, 'Duration': 5},
    {'Task': 'Evaluation', 'Start': 13, 'Duration': 2}
])

plt.barh(y=tasks['Task'], width=tasks['Duration'], left=tasks['Start'], color='skyblue')
plt.xlabel('Weeks')
plt.title('Project Timeline')
plt.grid(axis='x')
plt.show()
                </code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If data collection takes an extra week, shift Week 4 to Week 5. How do you compress remaining phases to protect the Week 8 viva?</p>
</div>

        </div>
    `,

    'm4-t7': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Resource Allocation (Compute & Tools)</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Four students join a project team without deciding who will do what tasks.</p>
                <p>Two students duplicate the same literature survey, while nobody collects soil samples.</p>
                <p>Unassigned tasks cause finger-pointing and missed deadlines before review presentations.</p>
                <p>Resource allocation assigns specific roles based on each team member's strengths.</p>
                <p>How do team leaders assign data, modeling, and presentation roles effectively?</p>
            </div>

            <div class="summary">
                <h2>📋 Essential Tools</h2>
                <ul>
                    <li><strong>Coding:</strong> VS Code, Jupyter, Google Colab (Free GPU!)</li>
                    <li><strong>Version Control:</strong> Git & GitHub</li>
                    <li><strong>Tracking:</strong> Trello / Jira</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Allocation = Assigning the Oxen</strong></p>
                    <p>You don't use your best ox for light cart duty. Similarly, don't waste GPU hours on data cleaning that the CPU can handle.</p>
                </div>
            </div>

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

        </div>
    


            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.7: Team Resource Allocation Matrix
team_responsibilities = {
    "Ravi (Agronomy Lead)":      "Field sampling, soil taxonomy, biological ground truth",
    "Deepa (ML Engineer)":       "Data cleaning, model training, hyperparameter tuning",
    "Kavya (Full-Stack Dev)":     "Streamlit dashboard UI, SQLite database integration",
    "Manoj (Documentation Lead)":"Literature review compilation, charts, viva slide deck"
}

print("--- Capstone Team Responsibility Matrix ---")
for member, role in team_responsibilities.items():
    print(f"👉 {member:<26} -> {role}")</code></pre>
            </div>
            <div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If your team has only 2 students, pair Agronomy with Documentation and ML with UI. Who owns code testing?</p>
</div>
                    `,

    'm4-t8': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>Team Collaboration Best Practices</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Teammates share code files by emailing versions like 'model_final_v2_really_final.py'.</p>
                <p>One teammate accidentally overwrites another's code, erasing two days of work.</p>
                <p>Messy file sharing creates chaos and causes code to break the night before reviews.</p>
                <p>Git version control tracks every code edit and merges team contributions safely.</p>
                <p>How does Git collaboration prevent team code loss and keep projects organized?</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Version Control (Git Commit/Push/Pull)</li>
                    <li>Code Comments and Documentation</li>
                    <li>Dividing tasks (Data Lead, Model Lead, Frontend Lead)</li>
                </ul>
            </div>

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

            <div class="code-section">
                <h2>💻 Git Basics</h2>
                <pre><code class="language-bash">
# 1. Clone repo
git clone https://github.com/agri-lms/project.git

# 2. Create branch
git checkout -b feature-model-v1

# 3. Save changes
git add model.py
git commit -m "Added Random Forest baseline"

# 4. Share
git push origin feature-model-v1
                </code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a new commit entry for yourself adding the final viva slides. Why is a clear commit message important?</p>
</div>

        </div>
    `,
};

if (typeof window !== 'undefined') {
    window.module4Handouts = module4Handouts;
}
