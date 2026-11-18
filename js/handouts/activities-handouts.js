
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
            <div class="topic-header">
                <h1>🧪 Activity: NumPy &amp; Pandas Soil Sensor Matrix Laboratory</h1>
                <p class="duration">⏱️ Duration: 1.5 hours | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Transform raw multi-depth soil sensor telemetry across experimental farm research plots into clean vectorized matrices, computing zonal moisture deficits and nutrient availability indices using NumPy and Pandas.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Soil Matrix Verification Script</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd

# Multi-plot soil telemetry matrix: [moisture_pct, ph, electrical_cond]
soil_readings = np.array([
    [22.4, 6.2, 1.15],
    [18.1, 5.8, 0.95],
    [34.5, 7.1, 1.80],
    [28.0, 6.5, 1.30],
    [15.2, 5.5, 0.85]
])

print("🌾 Raw Soil Matrix Shape:", soil_readings.shape)
moisture = soil_readings[:, 0]
ph_vals = soil_readings[:, 1]

# Vectorized critical plot detection
critical_plots = np.where((moisture < 20.0) | (ph_vals < 6.0))[0]
print(f"🚨 Priority Irrigation/Liming Plots (0-indexed): {critical_plots}")
print(f"✅ Mean Moisture: {np.mean(moisture):.1f}% | Mean pH: {np.mean(ph_vals):.2f}")
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
                            <h3>Multi-Depth Soil Matrix Manipulation &amp; Array Broadcasting</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates live on the projector:</p>
                            <ul>
                                <li>Ingests raw soil moisture and electrical conductivity readings across a 12-plot experimental field at 3 depths (10cm, 30cm, 60cm) into a 3D NumPy array.</li>
                                <li>Demonstrates broadcasting: applies depth-specific soil bulk density calibration factors across all plots simultaneously without loops.</li>
                                <li>Projects vectorized boolean masking to isolate plots requiring immediate fertigation.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> Live interactive array slicing notebook showing execution time speedup and memory footprint optimization.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Farm Sensor Mesh Ingestion &amp; Normalization Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams in designing a standardized NumPy/Pandas processing pipeline for multi-station agricultural telemetry:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we vectorize missing sensor values, interpolate intermittent communication drops, and calculate rolling 7-day soil water depletion rates?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and student groups develop standardized array processing functions with unit conversion and error clipping.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-vetted Soil Matrix Data Pipeline specification document.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Plot Irrigation Prioritization Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student cohorts analyze a 50-plot experimental farm dataset:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Vectorize soil moisture, temperature, and organic matter into a DataFrame.</li>
                                <li><strong>Task 2:</strong> Calculate a composite Agricultural Water Stress Index (AWSI) per plot and sort plots into Urgent, Moderate, and Saturated zones.</li>
                                <li><strong>Peer Review:</strong> Teams audit each other's vectorization syntax to verify that zero Python <code>for</code> loops were used.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-evaluated plot water stress dossier with vectorized summary heatmaps.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build an Automated Soil Analysis Script in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent data processing script:</p>
                            <ul>
                                <li>Create an array of 20 soil sample pH and moisture readings.</li>
                                <li>Identify acidic soils (pH &lt; 6.0) and dry plots (moisture &lt; 25%).</li>
                                <li>Normalize values to 0-1 range using <code>(x - min)/(max - min)</code> and calculate the mean and standard deviation.</li>
                                <li>Save the processed summary DataFrame to a CSV file.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating normalized soil statistics and exported CSV.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm2-activity2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>📉 Activity: Multiple Linear Regression &amp; Harvest Forecasting Lab</h1>
                <p class="duration">⏱️ Duration: 2 hours | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Train, diagnose, and interpret a multiple linear regression model predicting crop harvest yields based on micro-climatic features, fertilizer application rates, and irrigation volumes.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Regression Verification Script</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

# Features: [Rainfall_mm, Nitrogen_kg_ha, Temp_C]
X_train = np.array([
    [650, 120, 26.5],
    [520,  90, 28.1],
    [780, 150, 24.8],
    [410,  60, 30.2],
    [850, 160, 23.5]
])
# Target: Yield in quintals/ha
y_train = np.array([48.5, 36.2, 58.0, 26.4, 62.1])

model = LinearRegression().fit(X_train, y_train)
y_pred = model.predict(X_train)

print(f"🌾 Model Intercept: {model.intercept_:.2f}")
print(f"📊 Feature Weights (Rain, N, Temp): {np.round(model.coef_, 3)}")
print(f"📈 Training R² Score: {r2_score(y_train, y_pred):.3f}")

# Predict for upcoming season
test_plot = np.array([[600, 110, 27.0]])
print(f"🔮 Forecast Harvest Yield: {model.predict(test_plot)[0]:.1f} quintals/ha")
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
                            <h3>Live Multiple Regression Fitting, Coefficient Extraction &amp; Diagnostic Plotting</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates multiple regression live in Google Colab on the projector:</p>
                            <ul>
                                <li>Fits a multiple regression model on 60 farm records with 4 predictors (Rainfall, Nitrogen, Phosphorus, Growing Degree Days).</li>
                                <li>Live interpretation of feature weights ($\beta_i$): explains marginal yield gains per kg of fertilizer applied.</li>
                                <li>Plots residuals ($y - \hat{y}$) and calculates Variance Inflation Factor (VIF) to detect multicollinearity live on screen.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live regression script generating diagnostic residual plots and interpretable feature weight tables.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Multicollinearity Diagnosis &amp; Agro-Economic Feature Engineering Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student groups through real-world collinearity dilemmas in agricultural data:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"When ambient temperature, sunshine hours, and vapor pressure deficit are all tightly correlated, how do we select or combine features to prevent unstable regression coefficients?"</em></li>
                                <li><strong>Collaborative Architecture:</strong> Faculty and students formulate feature selection rules, testing principal components vs domain-informed composite indices.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Collinearity Mitigation Protocol for agricultural regression models.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Seasonal Crop Yield Forecasting Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive historical yield datasets from 3 agro-ecological zones:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Clean, standardize, and fit multiple linear regression models per zone.</li>
                                <li><strong>Task 2:</strong> Simulate 3 climate scenarios (Drought, Normal Monsoon, Excess Rainfall) and project harvest outcomes.</li>
                                <li><strong>Peer Audit:</strong> Teams present scenario forecasts to a peer syndicate for validation against agronomic feasibility benchmarks.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A multi-scenario harvest forecast dossier with peer-reviewed confidence bounds.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build &amp; Validate a Crop Yield Predictor in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent regression pipeline:</p>
                            <ul>
                                <li>Create a DataFrame with 50 plot records (features: rainfall, fertilizer, soil pH).</li>
                                <li>Train a Scikit-Learn <code>LinearRegression</code> model.</li>
                                <li>Print model intercept, feature coefficients, and test $R^2$ score.</li>
                                <li>Predict yield for two contrasting farmer input scenarios.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with trained regression model and scenario predictions.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm2-activity3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🏷️ Activity: Decision Tree &amp; Random Forest Crop &amp; Pest Classification Lab</h1>
                <p class="duration">⏱️ Duration: 2 hours | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Construct, prune, and visualize interpretable tree models for precision plant pathology diagnosis and crop recommendation across variable soil types.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Tree Classification Verification Script</h2>
                <pre><code class="language-python">
from sklearn.tree import DecisionTreeClassifier, export_text
import numpy as np

# Features: [Soil_Moisture_pct, Salinity_dS_m, Nitrogen_ppm]
X = np.array([
    [15, 0.8,  40],  # Sorghum
    [18, 1.2,  35],  # Sorghum
    [32, 0.4, 110],  # Rice
    [35, 0.5, 120],  # Rice
    [24, 0.9,  80],  # Maize
    [26, 0.7,  75]   # Maize
])
y = ['Sorghum', 'Sorghum', 'Rice', 'Rice', 'Maize', 'Maize']

clf = DecisionTreeClassifier(max_depth=2, random_state=42).fit(X, y)
print("🌳 Generated Agronomic Decision Rules:\\n")
print(export_text(clf, feature_names=['Moisture', 'Salinity', 'Nitrogen']))

test_plot = [[30, 0.6, 95]]
print(f"🎯 Recommended Crop for Test Plot: {clf.predict(test_plot)[0]}")
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
                            <h3>Live Tree Splitting, Gini Purity &amp; Decision Rule Export</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates decision trees live in Colab on the projector:</p>
                            <ul>
                                <li>Trains a classifier on plant disease symptoms (leaf discoloration, wilting, lesion geometry).</li>
                                <li>Renders an interactive decision tree diagram using <code>plot_tree(filled=True)</code>.</li>
                                <li>Shows how unpruned trees overfit, and prunes with <code>max_depth=3</code> to extract human-readable IF-THEN rules for agricultural extension workers.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive Colab notebook generating graphical tree visualizations and exported diagnostic rules.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Tree Pruning &amp; University Extension Diagnostic Key Alignment Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on calibrating AI tree logic with official university extension guides:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we constrain decision tree branch structures so that pesticide recommendations are only triggered after insect density exceeds economic threshold levels (ETL)?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students configure feature constraints and minimum leaf sample thresholds to ensure agronomic safety.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agronomically Calibrated Pest Diagnostic Rule Matrix.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Automated Crop Suitability &amp; Disease Classifier Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams develop classification models for 4 regional cash crops:</p>
                            <ul>
                                <li><strong>Features:</strong> <code>[soil_type, rainfall_band, elevation_m, temperature_range]</code>.</li>
                                <li><strong>Task:</strong> Train both a single pruned Decision Tree and an ensemble Random Forest; compare interpretability vs test accuracy.</li>
                                <li><strong>Peer Defense:</strong> Teams defend their chosen tree depth and feature importance rankings before a peer panel.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A comparative classifier dossier with visual tree flowcharts and ensemble benchmark metrics.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build &amp; Evaluate a Tree Classifier in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent classifier:</p>
                            <ul>
                                <li>Create a dataset of 60 crop disease observations with 3 symptoms.</li>
                                <li>Fit a <code>DecisionTreeClassifier(max_depth=3)</code>.</li>
                                <li>Plot and save the tree visualization using <code>matplotlib</code>.</li>
                                <li>Test the tree on 2 new symptom profiles and print the predicted disease class.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating a saved decision tree diagram and diagnostic test outputs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm2-activity4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>⚖️ Activity: Comprehensive Model Evaluation &amp; Validation Suite Lab</h1>
                <p class="duration">⏱️ Duration: 2 hours | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Implement a rigorous multi-metric evaluation harness for precision farming models, assessing regression and classification models with cross-validation, confusion matrices, ROC-AUC, and residual analysis.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Evaluation Suite Verification Script</h2>
                <pre><code class="language-python">
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score
import numpy as np

# True pest infestation (0 = None, 1 = Outbreak)
y_true = np.array([0, 0, 0, 1, 0, 1, 1, 0, 1, 0])
# Model predicted probabilities of outbreak
y_prob = np.array([0.10, 0.25, 0.35, 0.88, 0.15, 0.72, 0.65, 0.40, 0.92, 0.20])
y_pred = (y_prob >= 0.50).astype(int)

print("📊 Confusion Matrix:\\n", confusion_matrix(y_true, y_pred))
print(f"🎯 ROC-AUC Score: {roc_auc_score(y_true, y_prob):.3f}")
print("\\n📋 Detailed Classification Report:\\n", classification_report(y_true, y_pred, target_names=['Healthy', 'Outbreak']))
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
                            <h3>Live Demonstration: Multi-Metric Model Diagnostic Dashboard</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates model evaluation live in Google Colab on the projector:</p>
                            <ul>
                                <li>Evaluates both a yield regression model and a pest classification model.</li>
                                <li>Live demonstration of confusion matrix heatmap, ROC-AUC curve, and Precision-Recall curve.</li>
                                <li>Explains the critical difference between Type I (false alarm) and Type II (missed infestation) errors in agricultural pest management.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab diagnostic dashboard generating composite ROC, PR, and residual plots.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agribusiness Risk-Weighted Evaluation Matrix Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on defining cost-sensitive evaluation frameworks:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In automated fruit grading for export, what is the economic cost ratio between discarding good produce vs shipping bad produce, and how does this define our evaluation benchmark?"</em></li>
                                <li><strong>Collaborative Formulation:</strong> Faculty and students create weighted F-beta scores and custom utility metrics matching supply-chain financial models.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agribusiness Model Validation Protocol with cost-weighted evaluation rubrics.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The Validation Suite Showdown Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive predictions from 3 anonymous agricultural AI models:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Run comprehensive cross-validation and compute Accuracy, Precision, Recall, F1, and AUC.</li>
                                <li><strong>Task 2:</strong> Construct calibration curves and residual diagnostic charts.</li>
                                <li><strong>Peer Audit:</strong> Teams present their evaluation audit, identifying which anonymous model is overfitted and recommending the best candidate for field deployment.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-evaluated model benchmarking report with comprehensive diagnostic charts.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a Full Model Evaluation Pipeline in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent validation pipeline:</p>
                            <ul>
                                <li>Train a classifier on a synthetic agricultural pest dataset.</li>
                                <li>Compute confusion matrix, classification report, and ROC-AUC score.</li>
                                <li>Plot the confusion matrix using Seaborn heatmap and display the ROC curve.</li>
                                <li>Print a summary paragraph interpreting the model's false negative rate.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating an evaluation report with confusion matrix and ROC visualizations.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // --- MODULE 3 ACTIVITIES ---
    'm3-activity1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Activity: Multi-Stage Crop Yield Ensemble Forecasting Lab</h1>
                <p class="duration">⏱️ Duration: 2 hours | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Build, evaluate, and deploy an end-to-end multi-algorithm ensemble system (Random Forest, Gradient Boosting, Ridge) to predict field crop harvest yields from multi-source agro-meteorological and soil telemetry data.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Ensemble Verification Script</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.linear_model import Ridge
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_squared_error

# Synthetic multi-source farm telemetry (Rain, Temp, Soil_N, Soil_pH, Irrigation)
np.random.seed(42)
n = 200
X = pd.DataFrame({
    'rainfall_mm': np.random.uniform(300, 800, n),
    'temp_c': np.random.uniform(22, 36, n),
    'soil_n_ppm': np.random.uniform(30, 120, n),
    'soil_ph': np.random.uniform(5.5, 7.8, n),
    'irrigation_m3': np.random.uniform(100, 500, n)
})
y = (0.05 * X['rainfall_mm'] - 0.8 * X['temp_c'] + 0.3 * X['soil_n_ppm'] + 
     5 * X['soil_ph'] + 0.04 * X['irrigation_m3'] + np.random.normal(0, 5, n))

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

rf = RandomForestRegressor(n_estimators=50, random_state=42).fit(X_train, y_train)
gb = GradientBoostingRegressor(n_estimators=50, random_state=42).fit(X_train, y_train)
ridge = Ridge(alpha=1.0).fit(X_train, y_train)

# Ensemble Blend
y_pred_ens = 0.45 * rf.predict(X_test) + 0.45 * gb.predict(X_test) + 0.10 * ridge.predict(X_test)

print(f"📈 Ensemble Test R² Score: {r2_score(y_test, y_pred_ens):.3f}")
print(f"🎯 Ensemble RMSE: {np.sqrt(mean_squared_error(y_test, y_pred_ens)):.2f} quintals/ha")
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
                            <h3>Multi-Model Stacking &amp; Feature Attribution Demonstration</h3>
                            <p><strong>Educator Action:</strong> The instructor builds a multi-model voting and stacking regressor live in Colab on the projector:</p>
                            <ul>
                                <li>Ingests multi-source soil, climate, and management records across regional research plots.</li>
                                <li>Extracts permutation importances and Partial Dependence Plots (PDP) for rainfall and nitrogen to show biological yield saturation curves.</li>
                                <li>Simulates extreme heatwave shocks to test ensemble prediction stability.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> Live interactive ensemble forecasting notebook with partial dependence response curves.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Regional Yield Prediction &amp; Spatial Generalization Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on cross-district spatial generalization:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we calibrate yield models across shifting soil orders (black cotton soils vs red sandy loams) so models maintain accuracy in unseen districts?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate spatial cross-validation and transfer weighting protocols to prevent regional overfitting.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Multi-District Yield Generalization Protocol document.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>State Harvest Forecasting Hackathon Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive 300 regional plot records with weather lags and fertilizer histories:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Build and tune competing ensemble pipelines combining Tree, Boosting, and Linear estimators.</li>
                                <li><strong>Task 2:</strong> Evaluate models under 5-fold spatial cross-validation and calculate RMSE, MAE, and $R^2$.</li>
                                <li><strong>Peer Audit:</strong> Teams audit each other's feature sets to ensure zero lookahead data leakage.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A district yield forecasting dossier with validation scorecards and peer audit logs.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build &amp; Validate a Random Forest Yield Forecaster in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent ensemble regression script:</p>
                            <ul>
                                <li>Load multi-feature agricultural telemetry data; split 80/20 into train/test sets.</li>
                                <li>Train a <code>RandomForestRegressor(n_estimators=100, max_depth=8)</code>.</li>
                                <li>Print test $R^2$ score and RMSE; predict harvest yield for 3 custom farmer scenario inputs.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating trained ensemble models and novel scenario prediction tables.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm3-activity2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🍃 Activity: Deep Learning Crop Disease Diagnostic Lab</h1>
                <p class="duration">⏱️ Duration: 2.5 hours | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Construct, augment, and fine-tune a Convolutional Neural Network (CNN) with transfer learning to diagnose foliar crop diseases from mobile field photographs.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 MobileNetV2 Transfer Verification Script</h2>
                <pre><code class="language-python">
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras import layers, models

# Lightweight vision backbone for edge farm diagnosis
base = MobileNetV2(input_shape=(128, 128, 3), include_top=False, weights='imagenet')
base.trainable = False

model = models.Sequential([
    base,
    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.3),
    layers.Dense(4, activation='softmax') # 4 disease classes
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
print("🌿 Model Summary:")
model.summary()
print("✅ Edge-ready foliar disease diagnostic architecture initialized!")
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
                            <h3>Live CNN Training, Grad-CAM Saliency Maps &amp; Interpretation</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates transfer learning live in Colab on the projector:</p>
                            <ul>
                                <li>Trains a transfer learning model live on tomato leaf disease images.</li>
                                <li>Generates Grad-CAM (Gradient-weighted Class Activation Mapping) heatmaps projecting exactly which leaf lesions and veins triggered the neural network's diagnosis.</li>
                                <li>Shows students how to detect when a model erroneously focuses on background soil instead of true disease spots.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script rendering Grad-CAM visual explanation heatmaps overlaid on diseased leaves.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Mobile Edge Diagnostic Architecture &amp; Latency Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on packaging disease classifiers into offline TFLite models for rural agricultural extension workers with low-end Android smartphones:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we compress a 15MB vision model to under 3MB using INT8 quantization so inference executes in under 120ms on low-cost rural devices without internet connectivity?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate post-training quantization pipelines and test mobile latency benchmarks.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Mobile Field Pathology TFLite Deployment Specification.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Foliar Pathology Multi-Class Tournament Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams train classifiers on a 4-class foliar pathology dataset (Healthy, Early Blight, Late Blight, Leaf Mold):</p>
                            <ul>
                                <li><strong>Task 1:</strong> Compare lightweight CNN architectures (MobileNetV2 vs SqueezeNet vs Custom CNN).</li>
                                <li><strong>Task 2:</strong> Evaluate precision, recall, and false-alarm rates; inspect Grad-CAM visualizations on misclassified samples.</li>
                                <li><strong>Peer Defense:</strong> Teams defend their model reliability before a peer audit panel.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A foliar disease classification report with multi-class confusion matrices and Grad-CAM verification figures.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a 3-Class Foliar Disease CNN in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent convolutional network:</p>
                            <ul>
                                <li>Construct a lightweight CNN with 2 Conv2D layers and a Dense softmax output for 3 crop health classes.</li>
                                <li>Train for 5 epochs on sample image arrays; evaluate on a test set.</li>
                                <li>Print the classification report and plot training vs validation accuracy curves.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with trained vision model and classification metrics.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm3-activity3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🏜️ Activity: Precision Soil Health Clustering &amp; Management Zoning Lab</h1>
                <p class="duration">⏱️ Duration: 2 hours | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Perform unsupervised multivariate spatial clustering on multi-depth soil sensor telemetry to delineate precision management zones for variable-rate fertigation.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 Soil Health Clustering Verification Script</h2>
                <pre><code class="language-python">
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np
import pandas as pd

# Multi-depth soil telemetry: [EC_dS_m, Organic_Carbon_pct, pH, Moisture_pct]
soil_matrix = np.array([
    [0.85, 0.42, 6.2, 18.5],
    [0.92, 0.38, 6.0, 17.2],
    [1.85, 0.85, 7.4, 28.4],
    [1.70, 0.78, 7.2, 26.8],
    [1.15, 0.55, 6.6, 22.1],
    [1.25, 0.58, 6.8, 23.5]
])

scaler = StandardScaler()
scaled_soil = scaler.fit_transform(soil_matrix)

kmeans = KMeans(n_clusters=3, random_state=42).fit(scaled_soil)
print("🌾 Assigned Precision Soil Management Zones:", kmeans.labels_)
print("📊 Cluster Centroid Scaled Attributes:\\n", np.round(kmeans.cluster_centers_, 2))
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
                            <h3>Multi-Depth Soil Cluster Delineation &amp; Spatial Mapping</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates multivariate soil clustering live in Colab on the projector:</p>
                            <ul>
                                <li>Ingests soil physical and chemical parameters across an experimental research farm.</li>
                                <li>Applies PCA and K-Means clustering; projects spatial cluster boundaries on a GIS farm map.</li>
                                <li>Validates cluster separation using silhouette analysis ($S &gt; 0.65$) and generates radar profiles for each zone.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive Colab notebook generating 2D spatial soil management zone maps.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Variable-Rate Prescription &amp; Soil Boundary Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on translating mathematical cluster centroids into agronomic variable-rate nutrient and irrigation prescriptions:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we convert cluster centroids into variable-rate nitrogen, phosphorus, and irrigation application maps that match tractor implement resolution?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate cluster-to-prescription transfer functions and boundary smoothing algorithms.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Variable-Rate Management Zone Prescription Protocol.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Plot Soil Fertility Zoning Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams analyze 80 soil sampling coordinates:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Determine optimal cluster count ($K$) using both Elbow and Silhouette methods.</li>
                                <li><strong>Task 2:</strong> Delineate 3 management zones (High Fertility, Leached Sandy, Heavy Clay) and formulate targeted soil conditioning plans.</li>
                                <li><strong>Peer Defense:</strong> Teams defend their spatial zone boundaries before a peer audit syndicate.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A spatial soil fertility zoning dossier with cluster radar charts and prescription maps.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Implement Soil Health K-Means Clustering in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent clustering script:</p>
                            <ul>
                                <li>Load an array of 30 soil samples with features <code>[pH, EC, organic_carbon, moisture]</code>.</li>
                                <li>Standardize features using <code>StandardScaler</code> and run <code>KMeans(n_clusters=3)</code>.</li>
                                <li>Compute cluster silhouette score and print the mean physical traits for each management zone.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating soil clusters and centroid attribute tables.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm3-activity4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌦️ Activity: Agro-Meteorological Time Series &amp; Weather Forecasting Lab</h1>
                <p class="duration">⏱️ Duration: 2 hours | Practical Lab</p>
            </div>
            <div class="summary">
                <h2>Project Goal</h2>
                <p>Implement seasonal ARIMA and exponential smoothing time series models to forecast micro-climatic parameters (temperature, humidity, precipitation) for precision agricultural scheduling.</p>
            </div>
            
            <div class="code-section">
                <h2>💻 SARIMA Forecasting Verification Script</h2>
                <pre><code class="language-python">
from statsmodels.tsa.arima.model import ARIMA
import pandas as pd
import numpy as np

# 30-day historical temperature series from agro-met station
np.random.seed(42)
days = pd.date_range('2024-03-01', periods=30)
temp_series = pd.Series(
    24 + 4 * np.sin(np.linspace(0, 3 * np.pi, 30)) + np.random.normal(0, 0.8, 30),
    index=days
)

model = ARIMA(temp_series, order=(1, 1, 1)).fit()
forecast_3d = model.forecast(steps=3)

print("📅 3-Day Temperature Forecast:")
for date, val in forecast_3d.items():
    print(f"   {date.strftime('%Y-%m-%d')}: {val:.2f} °C")
print("✅ Time series forecasting model verified!")
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
                            <h3>Live SARIMA Modeling, Residual Diagnostics &amp; Fan Charts</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates end-to-end time series modeling on weather records live on the projector:</p>
                            <ul>
                                <li>Decomposes trend and seasonality from daily weather station records.</li>
                                <li>Fits an ARIMA model and plots 7-day probabilistic forecast fan charts with 95% confidence intervals.</li>
                                <li>Runs Ljung-Box diagnostic tests to prove residual independence.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script displaying ACF/PACF plots, SARIMA forecasts, and diagnostic residual charts.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Extreme Agro-Climatic Warning Alert Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student cohorts through establishing statistical warning triggers for sudden frost, heatwaves, and monsoon breaks:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we configure a 48-hour early warning system using ARIMA prediction lower confidence bounds ($T_{\text{pred}} - 1.96 \times \text{SE} &lt; 0^\circ\text{C}$) to alert orchardists to turn on frost protection sprinklers with zero missed frost events?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate threshold decision rules balancing False Alarm costs against catastrophic freezing losses.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Climatic Early Warning Architecture Blueprint.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>14-Day Micro-Climate Forecast Benchmark Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams compete to forecast temperature and precipitation across a 14-day holdout period:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Benchmark ARIMA against Exponential Smoothing and Naive seasonal baselines.</li>
                                <li><strong>Task 2:</strong> Evaluate test set RMSE and Mean Absolute Scaled Error (MASE).</li>
                                <li><strong>Peer Defense:</strong> Teams present their forecast fan charts to a peer syndicate for validation against real atmospheric ground truths.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A multi-model weather forecasting dossier with error benchmarking curves.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build an ARIMA Temperature Forecaster in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent forecasting script:</p>
                            <ul>
                                <li>Load a 40-day temperature series, verify stationarity with differencing, and fit <code>ARIMA(order=(1,1,1))</code>.</li>
                                <li>Generate a 5-day out-of-sample forecast with 95% confidence intervals.</li>
                                <li>Plot the historical curve and forecasted points with shaded uncertainty bands.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating the ARIMA forecast and evaluation plots.
                        </div>
                    </div>
                </div>
            </div>
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
