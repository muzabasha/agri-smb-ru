
const activitiesHandouts = {
    // --- MODULE 1 ACTIVITIES ---
    'm1-activity1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🛠️ Activity: Google Colab Setup & Environment Mastery</h1>
                <p class="duration">⏱️ Duration: 1 hour | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Establish a cloud-based Python data science environment equipped with hardware acceleration and persistent drive storage for agricultural AI projects.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 System Verification Script</h2>
                <pre><code class="language-python">
# 1. Verify Google Colab Cloud Environment
print("🌾 Checking Google Colab Environment for Agri-AI...")
import sys
import numpy as np
import pandas as pd
print(f"✅ Python Version: {sys.version.split()[0]}")
print(f"✅ NumPy Version: {np.__version__}")
print(f"✅ Pandas Version: {pd.__version__}")

# 2. Check Hardware Acceleration
try:
    import torch
    gpu_avail = torch.cuda.is_available()
    print(f"🚀 GPU Available: {gpu_avail}")
    if gpu_avail:
        print(f"   Device: {torch.cuda.get_device_name(0)}")
except ImportError:
    print("ℹ️ PyTorch not imported")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Cloud Environment Provisioning & GPU Allocation</h3>
                            <p><strong>Educator Action:</strong> The instructor walks the class through setting up Google Colab live on the projector:</p>
                            <ul>
                                <li>Demonstrates selecting runtime type (T4 GPU), explains GPU memory limits (15 GB VRAM), and demonstrates cloud shell commands (<code>!nvidia-smi</code>, <code>!free -h</code>).</li>
                                <li>Demonstrates handling execution crashes, clearing out-of-memory states, and restarting runtimes cleanly.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> Live projected terminal output verifying active GPU acceleration and package versions.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Cloud Workspace Architecture & Drive Synchronization Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student cohorts in setting up institutional research workspace structures:</p>
                            <ul>
                                <li>Establish persistent Google Drive storage hierarchy: <code>/content/drive/MyDrive/AgriAI_GKVK/{data,notebooks,models}</code>.</li>
                                <li>Faculty leads a collaborative session solving authentication tokens, file permission sharing, and automated session reconnection routines.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-verified Cloud Storage Protocol ensuring persistent storage for large agricultural datasets.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Pair-Programming Environment Audit & Bug Hunt</h3>
                            <p><strong>Team Syndicate:</strong> Student pairs exchange Colab notebooks using sharing links:</p>
                            <ul>
                                <li>Student A injects an intentional environment bug (e.g. invalid package version, corrupted file path, syntax error).</li>
                                <li>Student B inspects the error trace, debugs the cell, and documents the resolution in Colab comments.</li>
                                <li>Partners swap roles to verify cross-notebook collaboration and commenting protocols.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> Reciprocally peer-reviewed notebooks with documented debugging commentary.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Solo Lab Setup & Farm Profile Execution</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build your individual foundational lab notebook:</p>
                            <ul>
                                <li>Mount personal Google Drive and verify write permissions by creating a text file <code>test_farm.txt</code>.</li>
                                <li>Write and run an automated script calculating total farm acreage and seed requirement for 3 different crops.</li>
                                <li>Export the completed notebook as both <code>.ipynb</code> and <code>.py</code> script files.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A completed, executed personal Colab notebook verified against the starter checklist.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm1-activity2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🐍 Activity: Python Programming Exercises</h1>
                <p class="duration">⏱️ Duration: 2 hours | Coding Challenge</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Core Exercise Starter Code</h2>
                <pre><code class="language-python">
# Challenge 1: Dynamic Farm Area & Seed Calculation
length_meters = 120.0
width_meters = 75.0
area_sqm = length_meters * width_meters
area_hectares = area_sqm / 10000.0
print(f"Farm Area: {area_sqm:,.1f} sq.m ({area_hectares:.2f} hectares)")

# Challenge 2: Multi-Factor Temperature Warning System
temperature_c = 36.5
humidity_pct = 78.0
if temperature_c > 35.0 and humidity_pct > 70.0:
    print("🚨 SEVERE HEAT & HUMIDITY: High fungal and heat stress alert!")
elif temperature_c > 30.0:
    print("⚠️ Moderate heat: Increase drip irrigation frequency.")
else:
    print("✅ Normal temperature conditions.")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Algorithmic Problem Solving & Edge Case Demonstration</h3>
                            <p><strong>Educator Action:</strong> The teacher live-solves an applied agricultural algorithmic challenge on projector:</p>
                            <ul>
                                <li>Constructs an automated irrigation pump scheduler balancing water table depth, soil moisture %, and electricity tariff hours.</li>
                                <li>Demonstrates live debugging using print statements and assertions, showing how to trace variable values through loops and conditions.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive live demonstration script showing algorithmic problem decomposition and edge-case handling.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agricultural Mathematical Logic & Control Flow Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty and student cohorts co-design algorithms for complex agricultural scenarios:</p>
                            <ul>
                                <li>Co-design an intelligent grain silo ventilation controller accounting for dew point, ambient relative humidity, and grain temperature.</li>
                                <li>Faculty challenges groups on boundary conditions (e.g. rain sensor active while temperature hits frost danger point).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-vetted algorithm flowchart and pseudocode specification for automated grain preservation.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Cooperative Farm Scripting & Code Review Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams of 3&ndash;4 build a modular farm utility script:</p>
                            <ul>
                                <li>Team members write modular components: (1) Fertilizer dosing formula, (2) Yield prediction heuristic, (3) Cost-benefit calculator.</li>
                                <li>Integrate all functions into a single script, conduct peer code reviews checking PEP-8 styling, and test with 3 synthetic farm profiles.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An integrated, peer-reviewed Python script with written code review evaluations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>5-Challenge Agricultural Programming Gauntlet</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, independently code and execute solutions to 5 practical farming challenges:</p>
                            <ul>
                                <li>1. Farm area conversion (acres &rarr; hectares &rarr; sq.m).</li>
                                <li>2. Soil pH classification (strongly acidic to strongly alkaline).</li>
                                <li>3. Cumulative rainfall accumulator with drought threshold warning.</li>
                                <li>4. Nested dictionary inventory for 5 crop varieties.</li>
                                <li>5. Custom function calculating net profit margin per hectare.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A self-tested Colab notebook containing all 5 solutions with printed verification outputs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm1-activity3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>📊 Activity: Agricultural Data Analysis Project</h1>
                <p class="duration">⏱️ Duration: 3 hours | Capstone Lab</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Data Analysis Starter Script</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Sample multi-zone crop dataset
data = {
    'Plot_ID': ['Plot_A', 'Plot_B', 'Plot_C', 'Plot_D', 'Plot_E'],
    'Crop': ['Wheat', 'Rice', 'Maize', 'Ragi', 'Groundnut'],
    'Acreage': [4.5, 6.0, 3.5, 5.0, 2.8],
    'Yield_Tons': [18.2, 31.5, 15.8, 14.0, 6.2],
    'Soil_pH': [6.5, 7.2, 5.8, 6.1, 7.8],
    'N_kg_ha': [110, 140, 85, 65, 45]
}

df = pd.DataFrame(data)
df['Yield_Per_Acre'] = df['Yield_Tons'] / df['Acreage']
print("=== Farm Production Dataset ===")
print(df[['Plot_ID', 'Crop', 'Yield_Per_Acre', 'Soil_pH']])
print(f"\\nHighest Yield Rate: {df['Yield_Per_Acre'].max():.2f} tons/acre ({df.loc[df['Yield_Per_Acre'].idxmax(), 'Crop']})")
print(f"Average Yield Rate: {df['Yield_Per_Acre'].mean():.2f} tons/acre")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live End-to-End Dataset Ingestion & Profiling Demonstration</h3>
                            <p><strong>Educator Action:</strong> The instructor live-demonstrates loading an authentic agricultural field dataset using Pandas in Google Colab:</p>
                            <ul>
                                <li>Inspects data shape, types, missing values (<code>df.isnull().sum()</code>), and summary statistics (<code>df.describe()</code>).</li>
                                <li>Demonstrates filtering high-yield plots, grouping by crop category, and calculating aggregated fertilizer response metrics.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive data analysis walkthrough displaying summary stats and grouped aggregations on the classroom screen.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Research-Grade Exploratory Data Analysis (EDA) Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in conducting professional agricultural EDA on multi-year GKVK trial datasets:</p>
                            <ul>
                                <li>Formulate scientific questions: <em>"Does soil organic carbon correlate more strongly with yield in dryland or irrigated plots?"</em></li>
                                <li>Faculty guides teams in identifying collinearity between nitrogen application and soil electrical conductivity.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-developed Agronomic Data Insights Report vetted by faculty with verified correlation analyses.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Zone Soil & Yield Dataset Analysis Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a multi-zone soil test and harvest records dataset covering 20 farm holdings:</p>
                            <ul>
                                <li>Perform data cleaning (imputing missing values, removing outliers).</li>
                                <li>Compute yield per acre, total revenue, and rank plots by input-use efficiency.</li>
                                <li>Present team insights to a peer syndicate acting as agricultural cooperative board members deciding resource allocation for next season.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative data analysis presentation with peer-evaluated findings and recommendations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Complete Solo Crop Yield & Soil Health Analysis Script</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent data analysis script on a simulated or real agricultural CSV dataset:</p>
                            <ul>
                                <li>Load the dataset with Pandas and verify clean data types.</li>
                                <li>Calculate mean, median, standard deviation, and interquartile range for yields.</li>
                                <li>Filter all plots that produced above-average yield with below-average fertilizer use (high-efficiency plots).</li>
                                <li>Export the filtered high-efficiency plots to a new CSV file <code>top_performing_plots.csv</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook containing data exploration, filtering logic, and exported summary CSV.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm1-activity4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>📈 Activity: Agricultural Data Visualization</h1>
                <p class="duration">⏱️ Duration: 2 hours | Visual Analytics Lab</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Plotting Starter Script</h2>
                <pre><code class="language-python">
import matplotlib.pyplot as plt

# Monthly rainfall and crop evapotranspiration
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
rainfall_mm = [5, 10, 15, 45, 80, 120, 180, 210, 160, 95, 30, 10]
crop_water_need_mm = [40, 45, 60, 80, 110, 130, 140, 130, 110, 80, 50, 40]

plt.figure(figsize=(10, 5))
plt.bar(months, rainfall_mm, color='#3b82f6', alpha=0.7, label='Rainfall (mm)')
plt.plot(months, crop_water_need_mm, color='#ef4444', marker='o', linewidth=2, label='Crop Water Need (mm)')
plt.title('Monthly Rainfall vs Crop Water Requirement', fontsize=14, fontweight='bold')
plt.xlabel('Month')
plt.ylabel('Water (mm)')
plt.legend()
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Geospatial & Agronomic Chart Construction Demonstration</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates building publication-quality agricultural charts live in Google Colab using Matplotlib:</p>
                            <ul>
                                <li>Plots multi-axis visualizations (rainfall bar chart on left y-axis, temperature line plot on right y-axis).</li>
                                <li>Demonstrates customizing colors, gridlines, legends, and highlighting deficit periods (where water need &gt; rainfall) with shaded red zones.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive multi-axis agricultural climate chart rendered and explained live on screen.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Farmer Advisory Dashboard Visualization Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in designing intuitive, low-literacy visual charts for rural farming communities:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we display soil nutrient status (N, P, K) so a farmer can instantly recognize deficiencies without understanding complex chemical units?</li>
                                <li><strong>Collaborative Design:</strong> Faculty and student groups develop color-coded gauge and bar charts (Green = Optimal, Yellow = Borderline, Red = Critical Deficit) with actionable iconography.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-vetted Smallholder Visual Advisory Template with intuitive color thresholds.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Panel Agro-Climatic Infographic Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams build a 4-panel dashboard using Matplotlib subplots (<code>plt.subplots(2, 2)</code>):</p>
                            <ul>
                                <li>Panel 1: Monthly rainfall histogram.</li>
                                <li>Panel 2: Soil moisture decay curve over time.</li>
                                <li>Panel 3: Fertilizer response scatter plot with trend line.</li>
                                <li>Panel 4: Crop production pie/donut chart across 4 farm zones.</li>
                                <li>Swap dashboards with a peer team to review visual clarity, axis labeling, and color contrast.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A completed 4-panel agricultural dashboard figure with peer review evaluation scores.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Custom Multi-Plot Agricultural Visualization Script</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone Python visualization script:</p>
                            <ul>
                                <li>Plot actual crop yields across 6 plots as a horizontal bar chart with custom color highlighting the best and worst plots.</li>
                                <li>Add a vertical dashed line indicating the regional benchmark target yield.</li>
                                <li>Annotate the highest-yielding plot with text displaying <code>"🏆 Top Performer"</code> and save the plot as a high-resolution PNG image (<code>plt.savefig('farm_yields.png', dpi=300)</code>).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating and saving the annotated agricultural yield chart.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // --- MODULE 2 ACTIVITIES ---
    'm2-activity1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🧪 Activity: NumPy Soil Data</h1></div>
            <div class="code-section"><h2>💻 Array Operations</h2>
            <pre><code class="language-python">
import numpy as np
soil_ph = np.array([6.5, 7.1, 5.8, 6.2])
print("Acidic Soils:", soil_ph[soil_ph < 6.0])
print("Mean pH:", np.mean(soil_ph))
            </code></pre></div>
        </div>
    `,
    'm2-activity2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>📉 Activity: Linear Regression</h1></div>
            <div class="code-section"><h2>💻 Yield Prediction</h2>
            <pre><code class="language-python">
from sklearn.linear_model import LinearRegression
X = [[10], [20], [30]] # Fertilizer
y = [15, 25, 35]       # Yield
model = LinearRegression().fit(X, y)
print("Predicted Yield for 40kg:", model.predict([[40]])[0])
            </code></pre></div>
        </div>
    `,
    'm2-activity3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🏷️ Activity: Classification</h1></div>
            <div class="code-section"><h2>💻 Crop Type</h2>
            <pre><code class="language-python">
from sklearn.tree import DecisionTreeClassifier
# 0=Dry, 1=Wet
X = [[0], [0], [1], [1]]
y = ['Wheat', 'Wheat', 'Rice', 'Rice']
clf = DecisionTreeClassifier().fit(X, y)
print("Crop for Wet Soil:", clf.predict([[1]])[0])
            </code></pre></div>
        </div>
    `,
    'm2-activity4': `
        <div class="handout-premium">
            <div class="topic-header"><h1>⚖️ Activity: Model Eval</h1></div>
            <div class="code-section"><h2>💻 Accuracy Check</h2>
            <pre><code class="language-python">
from sklearn.metrics import accuracy_score
y_true = [0, 1, 1, 0]
y_pred = [0, 1, 0, 0]
print(f"Accuracy: {accuracy_score(y_true, y_pred)*100}%")
            </code></pre></div>
        </div>
    `,

    // --- MODULE 3 ACTIVITIES ---
    'm3-activity1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🌾 Activity: Crop Yield System</h1></div>
            <div class="code-section"><h2>💻 Random Forest</h2>
            <pre><code class="language-python">
from sklearn.ensemble import RandomForestRegressor
import numpy as np
X_train = np.random.rand(100, 3) # Rain, Temp, Soil
y_train = np.random.rand(100) * 10
rf = RandomForestRegressor().fit(X_train, y_train)
print("System Ready. Prediction:", rf.predict([[0.5, 0.5, 0.5]])[0])
            </code></pre></div>
        </div>
    `,
    'm3-activity2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🍃 Activity: Disease Detection</h1></div>
            <div class="code-section"><h2>💻 Simple CNN</h2>
            <pre><code class="language-python">
import tensorflow as tf
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(64,64,3)),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
print("CNN Architecture Built")
            </code></pre></div>
        </div>
    `,
    'm3-activity3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🏜️ Activity: Soil Health</h1></div>
            <div class="code-section"><h2>💻 Clustering</h2>
            <pre><code class="language-python">
from sklearn.cluster import KMeans
soil_data = [[10, 5], [12, 6], [50, 20]]
km = KMeans(n_clusters=2).fit(soil_data)
print("Zone Labels:", km.labels_)
            </code></pre></div>
        </div>
    `,
    'm3-activity4': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🌦️ Activity: Weather Forecasting</h1></div>
            <div class="code-section"><h2>💻 ARIMA Forecast</h2>
            <pre><code class="language-python">
from statsmodels.tsa.arima.model import ARIMA
history = [20, 22, 21, 23, 25]
model = ARIMA(history, order=(1,1,0)).fit()
print("Next Day Temp:", model.forecast()[0])
            </code></pre></div>
        </div>
    `,

    // --- MODULE 4 ACTIVITIES ---
    'm4-activity1': `
        <div class="handout-premium">
            <div class="topic-header"><h1>📝 Activity: Capstone Planning</h1></div>
            <div class="summary"><h2>Documentation</h2><p>Draft your problem statement.</p></div>
            <div class="code-section"><h2>💻 Template</h2>
            <pre><code class="language-markdown">
# Project Title: [Name]
## Problem
Farmers in [Region] face [Issue].
## Solution
An AI model using [Algorithm] to predict [Target].
            </code></pre></div>
        </div>
    `,
    'm4-activity2': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🛠️ Activity: Dev & Testing</h1></div>
            <div class="code-section"><h2>💻 Test Script</h2>
            <pre><code class="language-python">
def test_model(model, data):
    try:
        pred = model.predict(data)
        assert pred >= 0
        print("✅ Test Passed")
    except:
        print("❌ Test Failed")
            </code></pre></div>
        </div>
    `,
    'm4-activity3': `
        <div class="handout-premium">
            <div class="topic-header"><h1>🎤 Activity: Final Presentation</h1></div>
            <div class="summary"><h2>Slide Structure</h2>
            <ul>
                <li>Slide 1: Problem & Impact</li>
                <li>Slide 2: Data & Methodology</li>
                <li>Slide 3: Results & Demo</li>
                <li>Slide 4: Future Work</li>
            </ul>
            </div>
            <div class="code-section"><h2>💻 Demo Launcher</h2>
            <pre><code class="language-python">
print("Starting Demo...")
# Simulate app launch
import time
for i in range(3):
    print("Loading modules...")
    time.sleep(1)
print("App Running on localhost:8501")
            </code></pre></div>
        </div>
    `
};
if (typeof window !== 'undefined') {
    window.activitiesHandouts = activitiesHandouts;
}
