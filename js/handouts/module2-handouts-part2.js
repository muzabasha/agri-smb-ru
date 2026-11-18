// Module 2 Comprehensive Handouts - Part 2 (m2-t3, m2-t4, m2-t7 to m2-t13)
// Broadcasting, Stats, Data Analysis, Visualization

const module2HandoutsPart2 = {
    'm2-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Broadcasting and Advanced Operations</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand NumPy broadcasting rules</li>
                    <li>Apply vectorization for efficient computation</li>
                    <li>Optimize performance with NumPy operations</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Broadcasting = One Tractor, Many Fields</strong></p>
                    <p>Instead of driving a tractor through each field row separately, broadcasting lets you apply an operation across all rows at once - like aerial spraying!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np

# === BROADCASTING BASICS ===
print("=== Broadcasting Example ===")

# All plot yields
yields = np.array([2500, 2800, 3100, 2900, 2700])

# Add bonus to ALL yields (broadcasting scalar)
bonus = 200
adjusted_yields = yields + bonus  # 200 is broadcast to all elements
print(f"Original: {yields}")
print(f"With bonus: {adjusted_yields}")

# === BROADCASTING WITH ARRAYS ===
print("\\n=== 2D Broadcasting ===")

# Yields for 3 plots, 4 seasons
yields_2d = np.array([
    [2500, 2600, 2400, 2700],  # Plot A
    [2800, 2900, 2700, 3000],  # Plot B
    [2200, 2300, 2100, 2400]   # Plot C
])

# Seasonal adjustment factors (1D array)
season_factors = np.array([1.0, 1.1, 0.9, 1.2])

# Broadcasting: (3,4) * (4,) -> (3,4)
adjusted = yields_2d * season_factors
print(f"Original:\\n{yields_2d}")
print(f"Season factors: {season_factors}")
print(f"Adjusted:\\n{adjusted}")

# === VECTORIZATION ===
print("\\n=== Vectorized Operations ===")

# Slow way (avoid!)
def slow_calculation(data):
    result = []
    for x in data:
        result.append(x * 2 + 10)
    return result

# Fast way (vectorized)
def fast_calculation(data):
    return data * 2 + 10

data = np.random.rand(100000)

import time
start = time.time()
slow = slow_calculation(data)
print(f"Loop time: {time.time()-start:.4f}s")

start = time.time()
fast = fast_calculation(data)
print(f"Vectorized time: {time.time()-start:.4f}s")
print("Vectorization is ~100x faster!")
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
                            <h3>Live Aerial-Spray Broadcasting: Vectorized Field Normalization</h3>
                            <p><strong>Educator Action:</strong> The instructor live-codes on the projector, demonstrating NumPy broadcasting with a 3×4 multi-sensor array representing temperature, humidity, and soil moisture across 4 field zones:</p>
                            <ul>
                                <li>Shows how a single 1D array <code>season_factors = [1.0, 1.1, 0.9, 1.2]</code> broadcasts across a (3,4) sensor array — analogous to aerial spraying adjusting all fields at once.</li>
                                <li>Benchmarks a Python loop vs. vectorized NumPy operation on 100,000 elements, projecting the speedup factor live (~80–100×).</li>
                                <li>Explains broadcasting rules (shape compatibility) using axis diagrams on the board.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook showing the broadcasting rules, axis diagrams, and a timed benchmark comparing loop vs. vectorized performance.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students &amp; Faculty: Collaborative Studio</span>
                            <h3>Multi-Zone Sensor Normalization Architecture</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides cohorts in designing a broadcasting pipeline for a 20-zone, 5-sensor smart farm:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we simultaneously apply zone-specific calibration offsets (a 1D array) across all 5 sensor readings (a 2D matrix) without any loops?</li>
                                <li><strong>Collaborative Design:</strong> Groups determine array shapes, resolve broadcasting dimension mismatches, and verify results using min-max normalization: $X_{\text{norm}} = \frac{X - \min(X)}{\max(X) - \min(X)}$.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-designed broadcasting pipeline notebook with shape diagrams and verified normalized sensor outputs.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Sensor Data Normalization &amp; Cross-Team Audit</h3>
                            <p><strong>Team Syndicate:</strong> Each team receives a 3×4 sensor array (temperature, humidity, soil moisture across 4 field zones):</p>
                            <ul>
                                <li>Apply row-wise min-max normalization using broadcasting — no loops allowed.</li>
                                <li>Apply a seasonal adjustment factor array <code>[1.05, 0.95, 1.10, 1.00]</code> via broadcasting and compare results.</li>
                                <li>Exchange notebooks with a peer team, audit their normalization logic, and flag any broadcasting dimension errors.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-audited normalization notebook with cross-verified outputs and a documented list of any corrected broadcasting dimension issues.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Vectorized Sensor Calibration Script</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a Python script that:</p>
                            <ul>
                                <li>Creates the 3×4 sensor array and applies min-max normalization to each row using only NumPy broadcasting.</li>
                                <li>Applies seasonal adjustment factors via broadcasting and prints the adjusted array.</li>
                                <li>Benchmarks loop vs. vectorized approach on a large (1000×1000) random array and reports the speedup ratio.</li>
                                <li>Writes a one-line comment explaining each broadcasting operation.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with normalized arrays, seasonal-adjusted outputs, and a printed speedup benchmark.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is broadcasting in NumPy?</p>
                    <ul>
                        <li>A) Sending data over network</li>
                        <li>B) Automatically expanding arrays for operations</li>
                        <li>C) Printing output to console</li>
                        <li>D) Saving arrays to files</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Broadcasting automatically expands smaller arrays to match larger ones for element-wise operations.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Broadcasting automatically expands arrays for operations</li>
                    <li>Vectorization is much faster than loops</li>
                    <li>Use NumPy operations instead of Python loops</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Statistical Functions</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Calculate descriptive statistics with NumPy</li>
                    <li>Understand correlation and covariance</li>
                    <li>Apply statistics to agricultural data analysis</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Statistics = Understanding Your Farm's Patterns</strong></p>
                    <ul>
                        <li>📊 <strong>Mean:</strong> Average yield across all plots</li>
                        <li>📊 <strong>Std:</strong> How much yields vary</li>
                        <li>📊 <strong>Correlation:</strong> Does more rain = more yield?</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np

# === DESCRIPTIVE STATISTICS ===
print("=== Farm Yield Statistics ===")

yields = np.array([2500, 2800, 3100, 2600, 2900, 3200, 2400, 2700])

print(f"Yields: {yields}")
print(f"Mean: {np.mean(yields):.0f} kg/ha")
print(f"Median: {np.median(yields):.0f} kg/ha")
print(f"Std Dev: {np.std(yields):.0f} kg/ha")
print(f"Variance: {np.var(yields):.0f}")
print(f"Min: {np.min(yields)}, Max: {np.max(yields)}")
print(f"Range: {np.ptp(yields)} kg/ha")  # peak-to-peak

# Percentiles
print(f"25th percentile: {np.percentile(yields, 25):.0f}")
print(f"75th percentile: {np.percentile(yields, 75):.0f}")

# === CORRELATION ===
print("\\n=== Correlation Analysis ===")

rainfall = np.array([100, 150, 200, 120, 180, 220, 90, 160])
yields = np.array([2500, 2800, 3100, 2600, 2900, 3200, 2400, 2700])

correlation = np.corrcoef(rainfall, yields)
print(f"Rainfall: {rainfall}")
print(f"Yields: {yields}")
print(f"Correlation matrix:\\n{correlation}")
print(f"Correlation coefficient: {correlation[0,1]:.3f}")

if correlation[0,1] > 0.7:
    print("✅ Strong positive correlation: More rain → Higher yield")
elif correlation[0,1] > 0.3:
    print("📊 Moderate positive correlation")
else:
    print("⚠️ Weak correlation")

# === COVARIANCE ===
print("\\n=== Covariance ===")
covariance = np.cov(rainfall, yields)
print(f"Covariance matrix:\\n{covariance}")
print(f"Covariance: {covariance[0,1]:.0f}")
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
                            <h3>Live Correlation &amp; Variance Profiling of Real Agri-Data</h3>
                            <p><strong>Educator Action:</strong> The instructor live-runs a NumPy statistical analysis in Google Colab using 8 real farm plot yield records:</p>
                            <ul>
                                <li>Computes mean, median, std, variance, and percentiles using NumPy, explaining each metric with a farming interpretation: <em>"A high std means yield is inconsistent across plots — investigate!"</em></li>
                                <li>Computes a 2×2 <code>np.corrcoef(rainfall, yields)</code> matrix live, reads the off-diagonal correlation coefficient aloud, and interprets the agronomic meaning (e.g., 0.97 → strong rainfall-yield dependency).</li>
                                <li>Distinguishes between covariance (direction) and correlation (standardized magnitude).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An annotated Colab notebook with printed statistics and a written agronomic interpretation of the correlation coefficient.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students &amp; Faculty: Collaborative Studio</span>
                            <h3>Multi-Factor Yield Correlation Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty leads a collaborative exploration of which environmental factor most strongly drives yield across a 10-plot dataset:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> Given temperature, humidity, and rainfall arrays, which single factor correlates most strongly with yield?</li>
                                <li><strong>Collaborative Analysis:</strong> Student groups compute <code>np.corrcoef</code> for each factor, rank them by correlation strength, and present their agronomic reasoning to the class.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A ranked correlation table with group-written agronomic justifications for each factor's influence on yield.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Statistical Profile &amp; Outlier Detection Audit</h3>
                            <p><strong>Team Syndicate:</strong> Each team analyzes a shared 8-variable farm dataset:</p>
                            <ul>
                                <li>Compute full descriptive statistics (mean, median, std, 25th and 75th percentiles) for temperature, humidity, and yield.</li>
                                <li>Flag any values outside the range $[\mu - 2\sigma, \mu + 2\sigma]$ as potential outliers using NumPy boolean masking.</li>
                                <li>Exchange statistical summaries with a peer team, verify calculations, and debate whether outlier plots should be dropped or investigated further.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A cross-verified statistical profile table and a peer-reviewed outlier report with drop/keep recommendations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Farm Correlation Profiler</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone script that:</p>
                            <ul>
                                <li>Defines three arrays: <code>temperature</code>, <code>humidity</code>, and <code>yield_kg</code> for 8 farm plots.</li>
                                <li>Computes and prints: mean, median, std, 25th percentile, 75th percentile, and range for each array.</li>
                                <li>Computes <code>np.corrcoef</code> between each environmental factor and yield, prints the coefficient, and writes a one-sentence interpretation.</li>
                                <li>Identifies which factor has the strongest correlation with yield and prints a recommendation.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with printed statistics, correlation coefficients, and a written interpretation for each environmental factor.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> A correlation of 0.85 between rainfall and yield means:</p>
                    <ul>
                        <li>A) No relationship</li>
                        <li>B) Strong positive relationship</li>
                        <li>C) Strong negative relationship</li>
                        <li>D) Cannot determine</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 0.85 is close to 1, indicating strong positive correlation.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>NumPy provides fast statistical functions</li>
                    <li>Correlation measures relationship strength (-1 to 1)</li>
                    <li>Covariance shows direction of relationship</li>
                    <li>Use np.corrcoef() for correlation analysis</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t7': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Data Analysis and Visualization</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use describe() and info() for quick data analysis</li>
                    <li>Create basic plots from DataFrames</li>
                    <li>Identify patterns and outliers in farm data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Data Analysis = Reading Your Farm's Health Report</strong></p>
                    <p>Just as a doctor's report tells you about your health, describe() and info() tell you everything about your farm data at a glance!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create farm dataset
np.random.seed(42)
farm_data = pd.DataFrame({
    'plot': [f'Plot_{i}' for i in range(1, 21)],
    'area_ha': np.random.uniform(1, 5, 20),
    'yield_kg': np.random.normal(3000, 500, 20),
    'rainfall_mm': np.random.uniform(100, 300, 20),
    'fertilizer_kg': np.random.uniform(30, 80, 20),
    'crop': np.random.choice(['Wheat', 'Rice', 'Cotton'], 20)
})

# === QUICK DATA OVERVIEW ===
print("=== Data Overview with info() ===")
print(farm_data.info())

print("\\n=== Statistical Summary with describe() ===")
print(farm_data.describe())

# === BASIC PLOTTING FROM DATAFRAME ===
print("\\n=== Creating Visualizations ===")

# Histogram
farm_data['yield_kg'].hist(bins=10, edgecolor='black')
plt.title('Distribution of Crop Yields')
plt.xlabel('Yield (kg/ha)')
plt.ylabel('Frequency')
plt.show()

# Box plot by crop
farm_data.boxplot(column='yield_kg', by='crop')
plt.title('Yield by Crop Type')
plt.suptitle('')  # Remove automatic title
plt.ylabel('Yield (kg/ha)')
plt.show()

# Scatter plot
farm_data.plot.scatter(x='rainfall_mm', y='yield_kg', 
                        alpha=0.7, c='fertilizer_kg', 
                        cmap='viridis', colorbar=True)
plt.title('Rainfall vs Yield (color = fertilizer)')
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
                            <h3>Live Farm-Health Dashboard: describe(), info() &amp; Multi-Plot Profiling</h3>
                            <p><strong>Educator Action:</strong> The instructor live-creates a 20-row farm DataFrame in Google Colab and profiles it in real time:</p>
                            <ul>
                                <li>Runs <code>df.info()</code> and interprets the output: column names, data types, non-null count, and memory footprint.</li>
                                <li>Runs <code>df.describe()</code> and translates every statistic into agronomic language: <em>"The 75th percentile yield of 3,500 kg/ha means 25% of plots are high-performers — where are they?"</em></li>
                                <li>Live-generates a histogram, box plot by crop type, and a scatter plot colored by fertilizer input, narrating each visualization as a farm diagnostic report.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An annotated Colab dashboard with describe() output interpreted in agronomic terms and 3 diagnostic charts.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students &amp; Faculty: Collaborative Studio</span>
                            <h3>Outlier Investigation &amp; Plot Health Ranking Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty provides a 20-row farm dataset and guides teams in building a data quality health report:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> Which plots are outliers in yield? Can we confirm this visually from a box plot before computing $\mu \pm 2\sigma$?</li>
                                <li><strong>Collaborative Analysis:</strong> Teams use describe() to identify suspicious ranges, then verify with histogram and scatter charts, documenting each anomaly.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-authored farm data health report identifying outlier plots with statistical and visual evidence.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Crop Comparative Analysis &amp; Peer Chart Critique</h3>
                            <p><strong>Team Syndicate:</strong> Each team loads the shared farm CSV and independently creates a visual analysis portfolio:</p>
                            <ul>
                                <li>Run <code>info()</code> and <code>describe()</code> and document findings.</li>
                                <li>Create histograms for all numerical columns and box plots grouped by crop type.</li>
                                <li>Build a scatter plot of rainfall vs. yield, colored by fertilizer level.</li>
                                <li>Exchange portfolios with a peer team and provide written critique: which chart best reveals the data story and why?</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-critiqued chart portfolio with written observations on data patterns, outliers, and crop performance differences.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Farm Dataset Explorer</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, create a 20-row farm DataFrame and produce:</p>
                            <ul>
                                <li>Print <code>info()</code> and <code>describe()</code> outputs and add a comment interpreting the mean and std of yield.</li>
                                <li>A histogram of yield distribution with the mean marked as a red dashed vertical line.</li>
                                <li>A box plot comparing yield by crop type (Wheat, Rice, Cotton).</li>
                                <li>A scatter plot of rainfall vs. yield — identify and annotate any obvious outlier point.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with 3 labeled charts, printed describe() output, and a written one-paragraph data insight summary.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does describe() show?</p>
                    <ul>
                        <li>A) Only column names</li>
                        <li>B) Count, mean, std, min, max, quartiles</li>
                        <li>C) Only data types</li>
                        <li>D) Memory usage only</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - describe() provides comprehensive statistical summary.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>info() shows data types and memory usage</li>
                    <li>describe() provides statistical summary</li>
                    <li>DataFrame has built-in plotting methods</li>
                    <li>Visualizations help identify patterns quickly</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t8': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Data Filtering and Selection</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use Boolean indexing to filter data</li>
                    <li>Master loc and iloc for data selection</li>
                    <li>Apply query methods for complex filters</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Filtering = Sorting Seeds by Quality</strong></p>
                    <p>Just as you sort seeds by size, color, or quality - filtering lets you select exactly the data rows you need!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Create farm data
farm = pd.DataFrame({
    'plot': ['A', 'B', 'C', 'D', 'E', 'F'],
    'crop': ['Wheat', 'Rice', 'Wheat', 'Cotton', 'Rice', 'Wheat'],
    'yield_kg': [2500, 3200, 2800, 1800, 3100, 2600],
    'irrigated': [True, True, False, True, True, False]
})

print("=== Original Data ===")
print(farm)

# === BOOLEAN INDEXING ===
print("\\n=== Boolean Indexing ===")

# High yield plots
high_yield = farm[farm['yield_kg'] > 2700]
print("High yield plots (>2700):")
print(high_yield)

# Wheat plots
wheat = farm[farm['crop'] == 'Wheat']
print("\\nWheat plots:")
print(wheat)

# Multiple conditions
irrigated_wheat = farm[(farm['crop'] == 'Wheat') & (farm['irrigated'] == True)]
print("\\nIrrigated wheat:")
print(irrigated_wheat)

# === LOC AND ILOC ===
print("\\n=== loc (label-based) ===")
print(farm.loc[0:2, ['plot', 'yield_kg']])  # Rows 0-2, specific columns

print("\\n=== iloc (position-based) ===")
print(farm.iloc[0:2, 1:3])  # First 2 rows, columns 1-2

# === QUERY METHOD ===
print("\\n=== Query Method ===")
result = farm.query("yield_kg > 2500 and irrigated == True")
print(result)
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
                            <h3>Live Multi-Condition Farm Query Engine: loc, iloc &amp; Boolean Chains</h3>
                            <p><strong>Educator Action:</strong> The instructor live-queries a 6-plot farm DataFrame in Google Colab using all three selection methods:</p>
                            <ul>
                                <li>Demonstrates Boolean indexing with a single condition, then chains two conditions using <code>&amp;</code> and <code>|</code> operators, explaining operator precedence with parentheses.</li>
                                <li>Contrasts <code>loc[0:2, ['plot','yield_kg']]</code> (label-based, end-inclusive) vs. <code>iloc[0:2, 1:3]</code> (position-based, end-exclusive) live on the same DataFrame.</li>
                                <li>Uses <code>df.query()</code> to replicate a complex multi-condition filter in a single readable string — analogous to asking: <em>"Show me all irrigated wheat plots with yield above district average."</em></li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook demonstrating Boolean chains, loc vs. iloc contrast, and a query() string filter with printed outputs.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students &amp; Faculty: Collaborative Studio</span>
                            <h3>Farm Performance Screening &amp; Subsidy Eligibility Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty presents a real-world scenario: an agriculture department must identify subsidy-eligible plots from a 50-row dataset:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> Which plots satisfy ALL of: area &gt; 2 ha, yield &lt; district average, AND non-irrigated? Build the filter incrementally.</li>
                                <li><strong>Collaborative Design:</strong> Groups design Boolean filter chains step-by-step, then validate using <code>.shape</code> to confirm expected row counts, and explore whether <code>query()</code> produces identical results.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-designed eligibility filter notebook with verified row counts and a comparison of Boolean vs. query() output.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Data Retrieval Race &amp; Filter Accuracy Audit</h3>
                            <p><strong>Team Syndicate:</strong> Each team receives a list of 4 data retrieval tasks on the shared farm DataFrame:</p>
                            <ul>
                                <li>Find all plots with area &gt; 2 hectares.</li>
                                <li>Find plots with yield below the dataset mean using a Boolean filter.</li>
                                <li>Find irrigated plots with high yield using <code>&amp;</code> chaining.</li>
                                <li>Use <code>nlargest(3, 'yield_kg')</code> to find the top 3 performing plots.</li>
                                <li>Exchange code with a peer team, audit each filter for correctness, and flag any logic errors.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-audited filter notebook with verified results and documented corrections to any logic errors found.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Farm Data Query Engine</h3>
                            <p><strong>Hands-on Coding Task:</strong> Using the 6-plot farm DataFrame, write individual filter queries to find:</p>
                            <ul>
                                <li>All plots with yield &gt; 2700 kg using Boolean indexing.</li>
                                <li>All Wheat plots using <code>==</code> comparison.</li>
                                <li>Irrigated Wheat plots using <code>&amp;</code> Boolean chain.</li>
                                <li>Top 3 plots by yield using <code>nlargest()</code> and independently verify using <code>sort_values(ascending=False).head(3)</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with 4 verified filter outputs, each preceded by a comment explaining the selection logic.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What's the difference between loc and iloc?</p>
                    <ul>
                        <li>A) loc is faster</li>
                        <li>B) loc uses labels, iloc uses positions</li>
                        <li>C) They are the same</li>
                        <li>D) iloc only works on rows</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - loc is label-based, iloc is position-based (integer).</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Boolean indexing: df[df['col'] > value]</li>
                    <li>loc: label-based selection</li>
                    <li>iloc: integer position-based selection</li>
                    <li>query(): string-based filtering for complex conditions</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t9': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Handling Missing Data</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Detect missing values in datasets</li>
                    <li>Apply strategies to fill missing data</li>
                    <li>Make decisions about dropping vs imputing</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Missing Data = Gaps in Farm Records</strong></p>
                    <p>Some days the sensor failed, some records got lost. We need to fill these gaps intelligently - like estimating missing rainfall from nearby stations!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Create data with missing values
data = pd.DataFrame({
    'plot': ['A', 'B', 'C', 'D', 'E'],
    'yield_kg': [2500, np.nan, 2800, np.nan, 2600],
    'rainfall': [150, 200, np.nan, 180, 170],
    'temperature': [28, 30, 29, np.nan, 27]
})

print("=== Data with Missing Values ===")
print(data)

# === DETECTING MISSING DATA ===
print("\\n=== Detecting Missing Values ===")
print("Is null?")
print(data.isnull())
print(f"\\nTotal missing per column:")
print(data.isnull().sum())

# === FILLING MISSING VALUES ===
print("\\n=== Filling Strategies ===")

# Fill with mean
data_mean = data.copy()
data_mean['yield_kg'] = data_mean['yield_kg'].fillna(data_mean['yield_kg'].mean())
print("Fill with mean:")
print(data_mean['yield_kg'])

# Fill with median
data_median = data.copy()
data_median['rainfall'] = data_median['rainfall'].fillna(data_median['rainfall'].median())

# Forward fill (use previous value)
data_ffill = data.copy()
data_ffill = data_ffill.fillna(method='ffill')
print("\\nForward fill:")
print(data_ffill)

# === DROPPING MISSING DATA ===
print("\\n=== Dropping Rows ===")
data_dropped = data.dropna()
print(f"Original rows: {len(data)}, After drop: {len(data_dropped)}")
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
                            <h3>Live Sensor Gap Rescue: Detecting &amp; Imputing Missing Farm Records</h3>
                            <p><strong>Educator Action:</strong> The instructor creates a 5-row farm DataFrame with strategic NaN values in yield, rainfall, and temperature columns and live-diagnoses it:</p>
                            <ul>
                                <li>Runs <code>df.isnull().sum()</code> and calculates % missingness per column, explaining the decision threshold: <em>"If &gt;30% of a column is missing, dropping the column may be better than imputing."</em></li>
                                <li>Demonstrates mean-fill, median-fill, and forward-fill strategies on different columns, showing how each changes the distribution.</li>
                                <li>Live-compares <code>dropna()</code> output row count vs. <code>fillna(mean)</code>, highlighting the data-loss tradeoff.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An annotated Colab notebook showing three filling strategies with before/after isnull().sum() verification.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students &amp; Faculty: Collaborative Studio</span>
                            <h3>Sensor Failure Triage &amp; Imputation Strategy Design</h3>
                            <p><strong>Studio Workshop:</strong> Faculty presents a 20-row dataset with varied missingness patterns across yield, rainfall, and soil moisture:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> For each column, what is the best imputation strategy — mean, median, forward fill, or drop? What's the agronomic justification?</li>
                                <li><strong>Collaborative Decision:</strong> Groups debate and vote on strategies, then implement their chosen approach and verify with <code>isnull().sum()</code> confirming zero missing values.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-authored imputation strategy decision table with agronomic justification and verified zero-missing-value output.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Messy Dataset Clean-Up &amp; Strategy Audit</h3>
                            <p><strong>Team Syndicate:</strong> Each team receives the same 20-row dataset with missing values and independently cleans it:</p>
                            <ul>
                                <li>Report the % missing for each column and decide independently: drop or fill for each.</li>
                                <li>Apply their chosen filling strategy (mean, median, or forward-fill).</li>
                                <li>Verify no missing values remain using <code>isnull().sum()</code>.</li>
                                <li>Exchange cleaned DataFrames with a peer team, compare the imputed values, and explain why different strategies produce different results.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-compared cleaned dataset with a written comparison of how different imputation strategies affected the final values.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Missing Data Cleaning Pipeline</h3>
                            <p><strong>Hands-on Coding Task:</strong> Starting from the 5-plot DataFrame with NaN values:</p>
                            <ul>
                                <li>Print <code>isnull().sum()</code> and <code>isnull().mean() * 100</code> to see absolute and % missing per column.</li>
                                <li>Fill yield NaN values with the column mean, rainfall NaN with median, temperature NaN with forward fill.</li>
                                <li>Verify the result with a final <code>isnull().sum()</code> confirming 0 missing values.</li>
                                <li>Print both the original and cleaned DataFrames side-by-side and write a comment explaining the choice for each column.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with the original vs. cleaned DataFrame comparison and a commented justification for each imputation strategy.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> When should you drop rows with missing data?</p>
                    <ul>
                        <li>A) Always</li>
                        <li>B) When very few rows are affected</li>
                        <li>C) Never</li>
                        <li>D) Only for numerical columns</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Drop when missing data is minimal. Otherwise, impute to avoid losing too much data.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>isnull() and isna() detect missing values</li>
                    <li>fillna() replaces missing with specified value</li>
                    <li>dropna() removes rows/columns with missing data</li>
                    <li>Choose strategy based on data importance and amount missing</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t10': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Data Aggregation and Grouping</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use groupby() for data aggregation</li>
                    <li>Apply multiple aggregation functions</li>
                    <li>Create pivot tables for analysis</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Groupby = Organizing Harvest by Category</strong></p>
                    <p>Just as you separate harvest by crop type to count each - groupby separates data to analyze each group!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Create farm data
farm = pd.DataFrame({
    'region': ['North', 'North', 'South', 'South', 'East', 'East'],
    'crop': ['Wheat', 'Rice', 'Wheat', 'Rice', 'Wheat', 'Rice'],
    'area_ha': [10, 8, 12, 6, 9, 7],
    'yield_kg': [25000, 32000, 28000, 24000, 22000, 28000]
})

print("=== Original Data ===")
print(farm)

# === BASIC GROUPBY ===
print("\\n=== Average Yield by Crop ===")
by_crop = farm.groupby('crop')['yield_kg'].mean()
print(by_crop)

# === MULTIPLE AGGREGATIONS ===
print("\\n=== Multiple Stats by Region ===")
by_region = farm.groupby('region').agg({
    'area_ha': 'sum',
    'yield_kg': ['mean', 'sum', 'count']
})
print(by_region)

# === GROUPBY MULTIPLE COLUMNS ===
print("\\n=== By Region AND Crop ===")
multi_group = farm.groupby(['region', 'crop'])['yield_kg'].sum()
print(multi_group)

# === PIVOT TABLE ===
print("\\n=== Pivot Table ===")
pivot = farm.pivot_table(
    values='yield_kg', 
    index='region', 
    columns='crop', 
    aggfunc='sum'
)
print(pivot)
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
                            <h3>Live Harvest-Category Intelligence: groupby(), agg() &amp; Pivot Tables</h3>
                            <p><strong>Educator Action:</strong> The instructor live-aggregates a 6-row farm DataFrame in Google Colab step-by-step:</p>
                            <ul>
                                <li>Demonstrates <code>groupby('crop')['yield_kg'].mean()</code> and interprets: <em>"Rice averages 28,000 kg across all plots — it's the high-performer."</em></li>
                                <li>Applies multi-statistic aggregation: <code>groupby('region').agg({'area_ha': 'sum', 'yield_kg': ['mean', 'sum', 'count']})</code> and walks through each result column.</li>
                                <li>Builds a pivot table using <code>pivot_table(values='yield_kg', index='region', columns='crop', aggfunc='sum')</code> and explains it as a cross-tabulation dashboard analogous to a farm management report.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An annotated Colab notebook demonstrating three aggregation approaches with printed outputs and agronomic interpretations.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students &amp; Faculty: Collaborative Studio</span>
                            <h3>District Harvest Intelligence Dashboard Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty provides a 20-row multi-region, multi-crop dataset and challenges teams to build a district performance dashboard:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> Which region-crop combination has the highest yield per hectare? Build it using groupby + pivot_table.</li>
                                <li><strong>Collaborative Design:</strong> Groups select appropriate aggregation functions (<code>mean</code> vs. <code>sum</code> vs. <code>max</code>), build nested groupby queries, and format a pivot table that a district officer could read directly.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-designed district performance pivot table identifying the best region-crop combination with supporting groupby evidence.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Farm Performance Ranking &amp; Pivot Verification</h3>
                            <p><strong>Team Syndicate:</strong> Each team performs an independent aggregation analysis on the shared dataset:</p>
                            <ul>
                                <li>Group by crop type: compute average yield and total area.</li>
                                <li>Group by region: compute total yield, average area, and plot count.</li>
                                <li>Build a pivot table: regions as rows, crops as columns, sum of yield as values.</li>
                                <li>Exchange pivot tables with a peer team, verify the computed values match raw data, and identify the best-performing region-crop combination.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-verified aggregation report with a pivot table, cross-checked values, and a written finding on the best-performing combination.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Farm Aggregation Report</h3>
                            <p><strong>Hands-on Coding Task:</strong> Using the 6-row farm DataFrame, independently produce:</p>
                            <ul>
                                <li>Average yield grouped by crop using <code>groupby().mean()</code>.</li>
                                <li>Total area and yield grouped by region using <code>groupby().agg()</code>.</li>
                                <li>A pivot table with regions as rows, crops as columns, and sum of yield as values.</li>
                                <li>Print the best-performing region-crop combination by finding the maximum in the pivot table, and write a comment explaining the finding.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with 3 aggregation outputs, a pivot table, and a printed best-performer finding with interpretation.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does groupby() return?</p>
                    <ul>
                        <li>A) A single value</li>
                        <li>B) A GroupBy object for aggregation</li>
                        <li>C) A filtered DataFrame</li>
                        <li>D) A sorted DataFrame</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - groupby() returns a GroupBy object that you can then apply aggregation functions to.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>groupby() splits data into groups</li>
                    <li>Apply functions: mean(), sum(), count(), etc.</li>
                    <li>agg() for multiple functions at once</li>
                    <li>pivot_table() for cross-tabulation</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Advanced Chart Types</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create histograms for distribution analysis</li>
                    <li>Use box plots to identify outliers</li>
                    <li>Build heatmaps for correlation visualization</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Advanced Charts = Detailed Farm Maps</strong></p>
                    <ul>
                        <li>📊 <strong>Histogram:</strong> Distribution of yields across plots</li>
                        <li>📦 <strong>Box Plot:</strong> Comparing crops, finding outliers</li>
                        <li>🗺️ <strong>Heatmap:</strong> Correlation between all factors</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Create data
np.random.seed(42)
yields = np.random.normal(3000, 500, 100)
crops = ['Wheat']*30 + ['Rice']*35 + ['Cotton']*35
crop_yields = {
    'Wheat': np.random.normal(2800, 400, 30),
    'Rice': np.random.normal(3500, 500, 35),
    'Cotton': np.random.normal(2000, 300, 35)
}

# === HISTOGRAM ===
plt.figure(figsize=(10, 4))
plt.hist(yields, bins=15, edgecolor='black', color='skyblue')
plt.title('Distribution of Crop Yields')
plt.xlabel('Yield (kg/ha)')
plt.ylabel('Frequency')
plt.axvline(np.mean(yields), color='red', linestyle='--', label='Mean')
plt.legend()
plt.show()

# === BOX PLOT ===
plt.figure(figsize=(10, 5))
data = [crop_yields['Wheat'], crop_yields['Rice'], crop_yields['Cotton']]
plt.boxplot(data, labels=['Wheat', 'Rice', 'Cotton'])
plt.title('Yield Comparison by Crop (Box Plot)')
plt.ylabel('Yield (kg/ha)')
plt.grid(True, alpha=0.3)
plt.show()

# === HEATMAP ===
# Correlation matrix
df = pd.DataFrame({
    'Rainfall': np.random.uniform(100, 300, 50),
    'Temperature': np.random.uniform(20, 35, 50),
    'Fertilizer': np.random.uniform(30, 80, 50),
    'Yield': np.random.uniform(2000, 4000, 50)
})
corr = df.corr()

plt.figure(figsize=(8, 6))
plt.imshow(corr, cmap='coolwarm', aspect='auto')
plt.colorbar(label='Correlation')
plt.xticks(range(len(corr.columns)), corr.columns, rotation=45)
plt.yticks(range(len(corr.columns)), corr.columns)
plt.title('Correlation Heatmap')

# Add values
for i in range(len(corr)):
    for j in range(len(corr)):
        plt.text(j, i, f'{corr.iloc[i,j]:.2f}', ha='center', va='center')
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
                            <h3>Live Diagnostic Charting: Histogram, Box Plot &amp; Correlation Heatmap</h3>
                            <p><strong>Educator Action:</strong> The instructor live-builds three diagnostic chart types in Google Colab using a 100-sample farm yield dataset:</p>
                            <ul>
                                <li>Builds a histogram with 15 bins, adds a red dashed mean line, and interprets the shape: <em>"A right skew means a few high-performing plots are pulling the average up — investigate them!"</em></li>
                                <li>Creates a box plot comparing Wheat, Rice, and Cotton yields, narrating what each box element (median, IQR, whiskers, outlier dots) means for farm management.</li>
                                <li>Constructs a correlation heatmap using <code>plt.imshow(corr, cmap='coolwarm')</code>, annotates each cell with the correlation value, and identifies the strongest relationship.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook with annotated histogram, box plot, and heatmap — each with a written one-sentence agronomic insight.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students &amp; Faculty: Collaborative Studio</span>
                            <h3>Farm Analytics Dashboard Design Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty leads teams in building a 2×2 matplotlib subplot dashboard for a district agricultural report:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> Design a dashboard that answers: How is yield distributed? Which crop performs best? Which regions are outliers? What factors correlate most?</li>
                                <li><strong>Collaborative Construction:</strong> Groups assign one chart per sub-team (histogram, box plot, heatmap, scatter), then assemble into a unified <code>plt.subplots(2,2)</code> layout with shared titles.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-built 2×2 farm analytics subplot dashboard with labeled axes, titles, and a brief group presentation on what each chart reveals.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Chart Portfolio Build &amp; Insight Peer Review</h3>
                            <p><strong>Team Syndicate:</strong> Each team independently builds a 3-chart portfolio from the shared dataset:</p>
                            <ul>
                                <li>Histogram of yield distribution with mean line annotated.</li>
                                <li>Box plot comparing 3 crop types side-by-side, identifying any outlier points.</li>
                                <li>Correlation heatmap for all 4 numerical variables with annotated values.</li>
                                <li>Exchange portfolios with a peer team, review each chart for correctness and clarity, and provide a scored written critique (1–5 for readability and insight).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-reviewed 3-chart portfolio with scored critique feedback and documented corrections.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a 4-Panel Farm Analytics Dashboard</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build a 2×2 subplot dashboard:</p>
                            <ul>
                                <li>Top-left: Histogram of yield distribution with a red mean line.</li>
                                <li>Top-right: Box plot of Wheat, Rice, and Cotton yields.</li>
                                <li>Bottom-left: Scatter plot of rainfall vs. yield.</li>
                                <li>Bottom-right: Correlation heatmap for all numerical variables with annotated cell values.</li>
                                <li>Add a main title: <em>"Farm Performance Analytics Dashboard"</em> and save the figure as a PNG.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook producing a saved 2×2 dashboard PNG with labeled axes, a main title, and a one-paragraph written summary of the key insights.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What do the whiskers on a box plot represent?</p>
                    <ul>
                        <li>A) Mean and median</li>
                        <li>B) Minimum and maximum (or 1.5×IQR)</li>
                        <li>C) Standard deviation</li>
                        <li>D) Mode values</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Whiskers extend to min/max or 1.5× the interquartile range.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Histograms show data distribution</li>
                    <li>Box plots compare groups and show outliers</li>
                    <li>Heatmaps visualize relationships between all variables</li>
                    <li>Use subplots to create dashboards</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Seaborn: Statistical Visualization</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create beautiful statistical plots with Seaborn</li>
                    <li>Use distribution and relationship plots</li>
                    <li>Apply Seaborn for agricultural data insights</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Seaborn = Professional Farm Reports</strong></p>
                    <p>While Matplotlib is like hand-drawing charts, Seaborn produces publication-quality visualizations automatically!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Set style
sns.set_theme(style="whitegrid")

# Create data
np.random.seed(42)
farm = pd.DataFrame({
    'crop': np.random.choice(['Wheat', 'Rice', 'Cotton'], 100),
    'region': np.random.choice(['North', 'South', 'East'], 100),
    'yield_kg': np.random.normal(3000, 600, 100),
    'rainfall': np.random.uniform(100, 300, 100),
    'fertilizer': np.random.uniform(30, 80, 100)
})

# === DISTRIBUTION PLOTS ===
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

# Histogram with KDE
sns.histplot(farm['yield_kg'], kde=True, ax=axes[0])
axes[0].set_title('Yield Distribution')

# Violin plot
sns.violinplot(x='crop', y='yield_kg', data=farm, ax=axes[1])
axes[1].set_title('Yield by Crop (Violin)')
plt.tight_layout()
plt.show()

# === RELATIONSHIP PLOTS ===
# Scatter with regression
sns.lmplot(x='rainfall', y='yield_kg', hue='crop', data=farm, height=5)
plt.title('Rainfall vs Yield by Crop')
plt.show()

# Pair plot
sns.pairplot(farm[['yield_kg', 'rainfall', 'fertilizer', 'crop']], hue='crop')
plt.show()

# === CATEGORICAL PLOTS ===
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

sns.boxplot(x='region', y='yield_kg', hue='crop', data=farm, ax=axes[0])
axes[0].set_title('Yield by Region and Crop')

sns.barplot(x='crop', y='yield_kg', data=farm, ci=95, ax=axes[1])
axes[1].set_title('Average Yield by Crop (95% CI)')
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
                            <h3>Live Seaborn Farm Report: Violin, lmplot &amp; pairplot Narration</h3>
                            <p><strong>Educator Action:</strong> The instructor live-creates a 100-row farm DataFrame and builds four Seaborn charts in Google Colab, narrating each as a professional reporting tool:</p>
                            <ul>
                                <li>Builds a <code>histplot</code> with <code>kde=True</code> and explains the KDE curve: <em>"The smoothed line tells us the yield probability density — the peak is where most farms cluster."</em></li>
                                <li>Creates a <code>violinplot</code> and contrasts it with a box plot: explains why violin shows bimodal distributions that box plots miss.</li>
                                <li>Runs <code>lmplot(x='rainfall', y='yield_kg', hue='crop')</code> and interprets the regression lines per crop: <em>"Rice shows the steepest rainfall-to-yield slope — it's most rain-sensitive."</em></li>
                                <li>Runs <code>pairplot</code> and shows how to read the diagonal (distributions) vs. off-diagonal (pairwise scatter relationships) quickly.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An annotated Colab notebook with 4 Seaborn charts, each captioned with a one-sentence agronomic interpretation.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students &amp; Faculty: Collaborative Studio</span>
                            <h3>Statistical Report Design: Chart Selection for Agri-Communication</h3>
                            <p><strong>Studio Workshop:</strong> Faculty presents a scenario: an NGO requests a farm performance report for three regions with limited reading time:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> Which two Seaborn charts best communicate crop yield differences and rainfall-yield relationships to a non-technical audience? Justify your choice.</li>
                                <li><strong>Collaborative Construction:</strong> Groups build their two chosen charts, present to the class, and defend their communication design choice — including axis labels, color choice, and legend readability.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-built 2-chart communication report with a written design rationale for chart selection and formatting decisions.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Seaborn Chart Portfolio &amp; Design Critique</h3>
                            <p><strong>Team Syndicate:</strong> Each team builds a 4-chart Seaborn portfolio from the shared 100-row farm dataset:</p>
                            <ul>
                                <li><code>histplot</code> with KDE for yield distribution.</li>
                                <li><code>violinplot</code> comparing yield by crop type.</li>
                                <li><code>lmplot</code> of rainfall vs. yield, colored by crop.</li>
                                <li><code>sns.heatmap</code> of the correlation matrix with annotated values.</li>
                                <li>Exchange portfolios with a peer team, score each chart for clarity and insight (1–5), and provide specific improvement suggestions.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-scored 4-chart Seaborn portfolio with scored critique feedback and documented improvements applied.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Seaborn Agricultural Insight Report</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, using the 100-row farm DataFrame with <code>sns.set_theme(style="whitegrid")</code>:</p>
                            <ul>
                                <li>Create a <code>pairplot</code> for yield, rainfall, and fertilizer, colored by crop type.</li>
                                <li>Create a <code>violinplot</code> comparing yield distribution across crop types.</li>
                                <li>Build a regression plot (<code>lmplot</code>) of fertilizer vs. yield for each crop separately.</li>
                                <li>Build a <code>sns.heatmap</code> of the correlation matrix with <code>annot=True</code> and interpret the strongest and weakest correlations in a comment.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with 4 Seaborn charts, each labeled, and a one-paragraph written summary identifying the most impactful agricultural factor revealed by the visualizations.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does sns.lmplot() add to a scatter plot?</p>
                    <ul>
                        <li>A) Colors</li>
                        <li>B) A regression line with confidence interval</li>
                        <li>C) 3D effect</li>
                        <li>D) Animation</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - lmplot adds a linear regression line with shaded confidence interval.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Seaborn creates beautiful statistical plots</li>
                    <li>histplot, violinplot for distributions</li>
                    <li>lmplot for regression visualization</li>
                    <li>pairplot for exploring all relationships</li>
                </ul>
            </div>
        </div>
    `
};

// Export
if (typeof window !== 'undefined') {
    window.module2HandoutsPart2 = module2HandoutsPart2;
}
