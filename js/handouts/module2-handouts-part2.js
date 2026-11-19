// Module 2 Comprehensive Handouts - Part 2 (m2-t3, m2-t4, m2-t7 to m2-t13)
// Broadcasting, Stats, Data Analysis, Visualization

const module2HandoutsPart2 = {
    'm2-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Broadcasting and Advanced Operations</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> How does NumPy's 'broadcasting' allow an agronomist to apply an 8% sensor temperature calibration offset to a matrix of 100,000 readings across 50 depths without making 50 duplicate copies of the offset?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Broadcasting automatically stretches compatible dimensions in virtual memory without allocating extra RAM. When adding a 1D calibration vector of shape (50,) to a 2D sensor matrix of shape (100000, 50), NumPy virtually expands the vector across all 100,000 rows, performing element-wise addition with zero memory duplication.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does attempting to add an array of shape (50, 3) to an array of shape (50, 2) throw a 'broadcast dimensions could not be aligned' error?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> NumPy's broadcasting rule requires that trailing dimensions must either be equal or one of them must be 1. Comparing (50, 3) and (50, 2), trailing dimensions 3 and 2 are neither equal nor is either 1. NumPy cannot align 3 soil nutrients with 2 moisture sensors, rejecting the ambiguous operation.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Aerial Spray Demo):</strong> In the Teacher's live aerial-spray simulation, how did broadcasting apply 3 distinct chemical nozzle dosage adjustments to a 10,000-cell flight GPS coordinate matrix?</p>
                    <ul>
                        <li>A) NumPy automatically broadcast the (3,) parameter vector across the (10000, 3) flight grid without replicating data in memory</li>
                        <li>B) By running three nested while loops in Python</li>
                        <li>C) By manually duplicating the 3 parameters 10,000 times into a new CSV file</li>
                        <li>D) By deleting all flight data rows</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Broadcasting virtually stretched the (3,) vector across the (10000, 3) matrix without memory overhead.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> NumPy broadcasting aligns trailing dimensions: a 1D vector of shape (3,) is compatible with an array of shape (10000, 3) because the trailing dimension 3 matches, enabling instant zero-copy vectorized arithmetic.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Python while loops discard NumPy's C-level vectorization benefits.</li>
                                <li><strong>Why C is incorrect:</strong> Manual duplication wastes megabytes of RAM and slows computation.</li>
                                <li><strong>Why D is incorrect:</strong> Deleting flight data destroys navigation records.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Sensor Normalization Studio):</strong> During the Multi-Zone Sensor Normalization Studio, what dimension manipulation was required before subtracting a 1D plot baseline mean array of shape (50,) from a 2D matrix of shape (50, 24)?</p>
                    <ul>
                        <li>A) Reshaping the baseline array to (50, 1) using newaxis or .reshape(50, 1) so broadcasting aligns along columns</li>
                        <li>B) Transposing the 24-hour matrix into a 1D array</li>
                        <li>C) Flattening the entire matrix to zero</li>
                        <li>D) Multiplying the array by 24</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Reshaped baseline from (50,) to (50, 1) so NumPy broadcasted across the 24 hourly columns.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> A 1D array of shape (50,) aligns with trailing dimensions (mismatching 24). Reshaping it to (50, 1) introduces a singleton column dimension, allowing NumPy to broadcast that column 24 times across the time axis.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Transposing into 1D loses the plot-by-hour matrix structure.</li>
                                <li><strong>Why C is incorrect:</strong> Flattening to zero deletes all baseline measurements.</li>
                                <li><strong>Why D is incorrect:</strong> Multiplying by 24 scales values without fixing dimension alignment.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Vectorized Sensor Calibration Script, which code cleanly broadcast a temperature correction scalar (+1.25°C) across all elements of an entire multi-depth array?</p>
                    <ul>
                        <li>A) calibrated_readings = raw_readings + 1.25</li>
                        <li>B) calibrated_readings = [x + 1.25 for x in raw_readings]</li>
                        <li>C) calibrated_readings = raw_readings.append(1.25)</li>
                        <li>D) calibrated_readings = np.concatenate([raw_readings, 1.25])</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>raw_readings + 1.25 broadcasted the scalar across every element in the multidimensional array.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Scalars broadcast universally to any array shape in NumPy, applying the mathematical offset to every element without loops or reshape boilerplate.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> List comprehensions on multidimensional arrays yield nested list artifacts and slow down execution.</li>
                                <li><strong>Why C is incorrect:</strong> NumPy arrays do not have an .append() method; the function is np.append().</li>
                                <li><strong>Why D is incorrect:</strong> Concatenation changes array shape rather than adding a numerical offset.</li>
                            </ul>
                        </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> When analyzing crop yield across 100 farm plots, why does reporting only the mean yield give a dangerously misleading picture if 5 plots suffered complete pest devastation while 5 had record bumper crops?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> The arithmetic mean blends extremes together, concealing high yield volatility and risk. A farm with a mean of 50 quintals/ha could have all plots producing 50, or half producing 100 and half producing 0. Statistical dispersion metrics—variance, standard deviation, and interquartile range—reveal operational risk that average figures conceal.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why is the Pearson correlation coefficient between fertilizer application and crop yield incapable of proving that fertilizer caused the yield increase?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Correlation measures linear association, not biological causation! High fertilizer usage may correlate strongly with high yield, but both might be driven by a confounding variable: progressive farmers who can afford fertilizer also invest in superior drip irrigation and certified hybrid seeds.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Correlation Demo):</strong> In the Teacher's live correlation demonstration on real farm telemetry, what did an r = -0.82 Pearson correlation between soil moisture deficit and vegetative canopy greenness indicate?</p>
                    <ul>
                        <li>A) A strong negative linear relationship: as soil moisture deficit increased (drier soil), canopy greenness significantly decreased</li>
                        <li>B) That soil moisture deficit causes fungal leaf blight</li>
                        <li>C) That the sensor wires were connected backwards</li>
                        <li>D) That canopy greenness and soil moisture are completely independent</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>A strong negative linear correlation between soil moisture deficit and canopy greenness.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> A Pearson correlation r near -1.0 indicates a strong inverse relationship: as moisture deficit climbs (drought worsens), plant chlorophyll and vegetative vigor decline proportionally.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Correlation does not identify specific fungal biological pathogens.</li>
                                <li><strong>Why C is incorrect:</strong> Negative correlation is a natural physical relationship, not an electrical wiring error.</li>
                                <li><strong>Why D is incorrect:</strong> Independence would be indicated by a correlation coefficient near r = 0.0.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Multi-Factor Yield Correlation Studio):</strong> During the Multi-Factor Yield Studio, how did teams prevent extreme outlier yields (caused by a combine harvester scale calibration glitch of 999 quintals) from corrupting the baseline analysis?</p>
                    <ul>
                        <li>A) By computing the median and Interquartile Range (IQR) alongside mean and standard deviation, and winsorizing values exceeding Q3 + 1.5*IQR</li>
                        <li>B) By deleting all rows where yield was higher than 10 quintals</li>
                        <li>C) By multiplying all yields by zero</li>
                        <li>D) By replacing the entire column with random numbers</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Used robust non-parametric metrics (median, IQR) and trimmed/winsorized values exceeding 1.5*IQR bounds.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Non-parametric statistics (median and IQR) are robust against hardware anomalies, preventing rogue extreme sensor spikes from distorting baseline agricultural averages.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Deleting values above 10 quintals discards genuine high-yielding crop records.</li>
                                <li><strong>Why C is incorrect:</strong> Multiplying by zero erases the entire experimental dataset.</li>
                                <li><strong>Why D is incorrect:</strong> Random numbers destroy all empirical evidence.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Farm Correlation Profiler, which NumPy function computed the pairwise correlation matrix across soil pH, organic carbon, and grain yield simultaneously?</p>
                    <ul>
                        <li>A) np.corrcoef(farm_metrics, rowvar=False)</li>
                        <li>B) np.std(farm_metrics)</li>
                        <li>C) np.linalg.det(farm_metrics)</li>
                        <li>D) np.unique(farm_metrics)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>np.corrcoef(farm_metrics, rowvar=False) computed the standardized pairwise correlation matrix.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The <code>np.corrcoef()</code> function computes normalized covariance matrices (Pearson correlation coefficients) between all column variables when <code>rowvar=False</code>, returning a symmetric matrix of correlation values.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> np.std() computes standard deviation, not pairwise correlation.</li>
                                <li><strong>Why C is incorrect:</strong> np.linalg.det() computes matrix determinants.</li>
                                <li><strong>Why D is incorrect:</strong> np.unique() extracts unique elements.</li>
                            </ul>
                        </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Before training a machine learning model on farm data, why should an Agri-Data Scientist always inspect <code>df.describe()</code> and <code>df.info()</code> rather than jumping straight into model fitting?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> <code>df.info()</code> reveals missing data counts and incorrect column data types (e.g., numbers stored as strings). <code>df.describe()</code> reveals statistical anomalies: minimum soil pH of -999 (a sensor disconnect error code), maximum soil moisture of 1000%, or extreme skewness that would corrupt gradient descent.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does a visual histogram of crop yield frequently show a bimodal (two-peaked) distribution rather than a classic bell-shaped Gaussian normal distribution?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Agricultural data reflects physical realities! A bimodal yield distribution usually signifies two distinct sub-populations in the dataset: e.g., irrigated plots producing high yields (peak 2) versus rainfed plots suffering drought stress (peak 1), or two distinct crop varieties combined in the same dataset.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Farm-Health Dashboard Demo):</strong> In the Teacher's live farm-health profiling demo, what critical hardware anomaly was immediately exposed by running df['soil_temp'].describe()?</p>
                    <ul>
                        <li>A) A minimum value of -999.0°C and maximum of 999.0°C, indicating uncleaned error codes transmitted by disconnected ADC sensor probes</li>
                        <li>B) A perfectly Gaussian normal distribution</li>
                        <li>C) The exact date of next year's harvest</li>
                        <li>D) The farmer's bank account balance</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Min/max values of ±999.0°C revealed unhandled hardware error codes in the telemetry.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>df.describe()</code> immediately flags out-of-bounds extremes. Sensor hardware frequently transmits sentinel values like -999 or 9999 when detached or uncalibrated, which must be filtered before modeling.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Extreme sentinel values break normal Gaussian symmetry.</li>
                                <li><strong>Why C is incorrect:</strong> Statistical summaries describe historical data, not future calendar dates.</li>
                                <li><strong>Why D is incorrect:</strong> Soil temperature telemetry does not contain banking data.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Outlier Investigation Studio):</strong> During the Outlier Investigation Studio, how did teams determine whether a yield reading of 120 quintals/ha was a recording error or a genuine biological breakthrough?</p>
                    <ul>
                        <li>A) By cross-referencing fertilizer application, drip fertigation logs, hybrid seed variety, and peer farmer yields from adjacent plots on the same date</li>
                        <li>B) By immediately deleting the record because it was higher than the mean</li>
                        <li>C) By flipping a coin</li>
                        <li>D) By asking an LLM without providing the farm data</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Cross-referenced agronomic co-factors (inputs, variety, irrigation, neighbors) to validate biological plausibility.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Outliers are not always errors; in agriculture, they may represent elite hybrid performance or high management efficiency. True validation requires cross-referencing input logs and environmental co-factors.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Blindly deleting high values discards potential biological breakthroughs and distorts yield potential.</li>
                                <li><strong>Why C is incorrect:</strong> Coin flipping is unscientific and arbitrary.</li>
                                <li><strong>Why D is incorrect:</strong> Generic LLMs cannot verify empirical physical field trial records without data.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Farm Dataset Explorer, which code generated a multi-panel visual overview of yield distribution and soil pH?</p>
                    <ul>
                        <li>A) df[['yield', 'soil_ph']].hist(bins=20, figsize=(10, 4)) followed by plt.show()</li>
                        <li>B) df.print()</li>
                        <li>C) plt.close('all')</li>
                        <li>D) df.values.sum()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df[['yield', 'soil_ph']].hist(bins=20) visualized frequency distributions for both variables.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Pandas integrates directly with Matplotlib: calling <code>.hist()</code> on selected DataFrame columns produces clean, multi-subplot histograms revealing skewness, bimodality, and outliers.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> DataFrames do not have a <code>.print()</code> method.</li>
                                <li><strong>Why C is incorrect:</strong> plt.close() closes figures without rendering or displaying plots.</li>
                                <li><strong>Why D is incorrect:</strong> Summing all values produces an uninterpretable single number.</li>
                            </ul>
                        </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> What is the crucial difference between <code>.loc[]</code> and <code>.iloc[]</code> in Pandas when filtering agricultural plot records?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> <code>.loc[]</code> is label-based: <code>df.loc['Plot_102', 'soil_ph']</code> accesses data by explicit index names and column header strings. <code>.iloc[]</code> is integer-position based: <code>df.iloc[0, 3]</code> accesses data by raw zero-indexed memory position. Confusing the two causes catastrophic errors if plot IDs happen to be numbers (e.g., plot ID 100 located at row index 0).</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does filtering an agricultural DataFrame using standard chained indexing <code>df[df['crop'] == 'Cotton']['yield'] = 50</code> trigger Pandas' infamous <code>SettingWithCopyWarning</code>?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Chained indexing creates ambiguity: Python first evaluates <code>df[df['crop'] == 'Cotton']</code>, which might return a temporary copy rather than a direct reference (view) into the original DataFrame. Modifying <code>['yield']</code> on that copy means the original DataFrame is silently unchanged! The safe, explicit syntax is <code>.loc</code>: <code>df.loc[df['crop'] == 'Cotton', 'yield'] = 50</code>.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Multi-Condition Query Demo):</strong> In the Teacher's live demonstration, what Pandas <code>.loc</code> expression filtered all plots growing 'Wheat' with soil pH < 6.0 while updating their 'lime_recommendation' column to True?</p>
                    <ul>
                        <li>A) df.loc[(df['crop'] == 'Wheat') & (df['soil_ph'] < 6.0), 'lime_recommendation'] = True</li>
                        <li>B) df[df['crop'] == 'Wheat']['soil_ph'] = True</li>
                        <li>C) if df['crop'] == 'Wheat': df['lime'] = True</li>
                        <li>D) df.query('crop == Wheat and soil_ph < 6.0').delete()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df.loc[(condition1) & (condition2), 'col'] = True cleanly selected and mutated data without SettingWithCopyWarning.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Using <code>.loc[row_condition, target_column]</code> is the gold-standard Pandas idiom for conditional mutation, ensuring direct in-place modification of the original DataFrame.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Chained indexing triggers SettingWithCopyWarning and fails to update the original DataFrame.</li>
                                <li><strong>Why C is incorrect:</strong> Python's <code>if</code> statement cannot evaluate an entire Series truth value.</li>
                                <li><strong>Why D is incorrect:</strong> Querying and calling .delete() is invalid syntax.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Farm Subsidy Eligibility Studio):</strong> During the Subsidy Eligibility Screening Studio, which query operator correctly selected farmers who cultivated either 'Ragi' OR 'Maize' with landholding <= 2.0 hectares?</p>
                    <ul>
                        <li>A) df[df['crop'].isin(['Ragi', 'Maize']) & (df['land_hectares'] <= 2.0)]</li>
                        <li>B) df[df['crop'] == 'Ragi' or df['crop'] == 'Maize']</li>
                        <li>C) df.filter(items=['Ragi', 'Maize'])</li>
                        <li>D) df['land_hectares'].min()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df['crop'].isin(['Ragi', 'Maize']) combined with landholding <= 2.0 via bitwise & operator.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The <code>.isin()</code> method provides clean, readable vectorized membership testing, which combines cleanly with numerical inequalities using the bitwise <code>&</code> operator.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Using Python's logical 'or' throws a ValueError on Series comparisons.</li>
                                <li><strong>Why C is incorrect:</strong> df.filter(items=...) filters column headers, not row values.</li>
                                <li><strong>Why D is incorrect:</strong> min() returns a scalar number, not a filtered subset of farmers.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Farm Data Query Engine, what method selected rows based on a complex string query without verbose brackets?</p>
                    <ul>
                        <li>A) df.query("soil_moisture < 25 and ambient_temp > 35")</li>
                        <li>B) df.select("where moisture < 25")</li>
                        <li>C) df.where_string("all")</li>
                        <li>D) df.eval_string()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df.query("soil_moisture < 25 and ambient_temp > 35") provided clean, readable string-based query syntax.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Pandas <code>.query()</code> evaluates string expressions using numexpr under the hood, offering clean, uncluttered syntax for complex multi-variable filtering.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> DataFrames do not have a <code>.select()</code> method for SQL string clauses.</li>
                                <li><strong>Why C is incorrect:</strong> <code>.where_string()</code> is a fictitious method.</li>
                                <li><strong>Why D is incorrect:</strong> <code>.eval_string()</code> does not exist in Pandas.</li>
                            </ul>
                        </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> When an IoT soil moisture sensor goes offline for 3 days during a rainstorm, why is simply deleting those missing rows (<code>df.dropna()</code>) an agronomic disaster?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Deleting missing rows during a storm creates catastrophic selection bias! The missing records coincided with peak rainfall and soil saturation. Deleting them artificially removes the wettest days from the historical record, biasing long-term climatic averages toward dry conditions and breaking chronological time continuity required for hydrological modeling.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why should you never fill missing soil nitrogen values with the column mean (<code>df.fillna(df.mean())</code>) across a mixed farm dataset of legumes and cereals?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Legumes (like soybean or groundnut) fix atmospheric nitrogen, exhibiting vastly higher soil nitrogen levels than cereals (like maize or wheat). Imputing the global dataset mean overestimates nitrogen on cereal plots (risking fertilizer under-application) while underestimating nitrogen on legume plots. Imputation must be grouped by crop type: <code>df.groupby('crop')['nitrogen'].transform('median')</code>.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Sensor Gap Rescue Demo):</strong> In the Teacher's live telemetry demonstration, what imputation strategy accurately restored missing 15-minute temperature readings during a 2-hour sensor battery replacement?</p>
                    <ul>
                        <li>A) Time-weighted linear interpolation: df['temperature'].interpolate(method='time')</li>
                        <li>B) Filling all missing values with 0.0°C</li>
                        <li>C) Dropping all preceding and succeeding rows</li>
                        <li>D) Filling with the maximum temperature of the year</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Time-weighted linear interpolation: .interpolate(method='time') smoothed between known bounds.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> For short temporal gaps in continuous physical environmental data, time-weighted interpolation estimates intermediate temperatures based on surrounding boundary measurements, preserving diurnal trends.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Imputing 0.0°C introduces artificial freezing temperatures and triggers false frost alarms.</li>
                                <li><strong>Why C is incorrect:</strong> Dropping surrounding valid rows destroys real measurements.</li>
                                <li><strong>Why D is incorrect:</strong> Filling with annual maximum creates false heatwave anomalies.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Sensor Failure Triage Studio):</strong> During the Sensor Failure Triage Studio, how did teams handle an experimental plot where an entire sensor node was destroyed by a wild boar and had 95% missing data?</p>
                    <ul>
                        <li>A) Dropping the plot column entirely because imputing 95% of data creates artificial hallucinations with no empirical foundation</li>
                        <li>B) Imputing all 95% missing values with random numbers</li>
                        <li>C) Duplicating data from a farm 500 kilometers away</li>
                        <li>D) Setting all values to 100</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Dropped the severely corrupted plot column because 95% missingness cannot be reliably imputed.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Data engineering best practices dictate that features or entities with >70–80% missingness should be pruned; synthetic imputation across 95% of records injects severe model hallucinations without empirical signal.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Imputing 95% random data corrupts machine learning models with pure noise.</li>
                                <li><strong>Why C is incorrect:</strong> Weather and soil 500 km away have zero local micro-climatic relevance.</li>
                                <li><strong>Why D is incorrect:</strong> Hardcoding 100 introduces extreme bias.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Missing Data Cleaning Pipeline, how did you verify the exact count and percentage of missing values per column?</p>
                    <ul>
                        <li>A) missing_summary = df.isnull().sum() / len(df) * 100</li>
                        <li>B) missing_summary = df.count() * 100</li>
                        <li>C) missing_summary = df.shape[0]</li>
                        <li>D) missing_summary = df.empty</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df.isnull().sum() / len(df) * 100 computed the precise missing data percentage per column.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Chaining <code>.isnull().sum()</code> calculates the total count of nulls per column, which dividing by <code>len(df)</code> converts into percentage of missingness for triage.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> <code>.count()</code> returns the number of non-null values, not missing values.</li>
                                <li><strong>Why C is incorrect:</strong> <code>.shape[0]</code> returns the total row count.</li>
                                <li><strong>Why D is incorrect:</strong> <code>.empty</code> returns a single boolean indicating if the DataFrame has zero rows.</li>
                            </ul>
                        </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> How does Pandas' Split-Apply-Combine paradigm mirror how a district agricultural commissioner analyzes harvest productivity across 10 taluks (sub-districts)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A commissioner does not examine 50,000 individual farm rows. They 'Split' the dataset into 10 separate taluk groups, 'Apply' aggregate calculations to each group (mean yield, total fertilizer consumed, drought-affected acreage), and 'Combine' the results into a compact 10-row district executive dashboard using <code>df.groupby('taluk').agg({'yield': 'mean', 'fertilizer': 'sum'})</code>.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does calculating the average yield across an entire state without grouping by crop type commit Simpson's Paradox?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Simpson's Paradox occurs when an apparent trend reverses or disappears when groups are aggregated! For example, high-value sugarcane yields 80 tons/ha while rainfed millets yield 2 tons/ha. If irrigated districts grow sugarcane and dry districts grow millet, an aggregated state-wide average gives meaningless numbers that reflect crop mix rather than actual farming efficiency.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Harvest Intelligence Demo):</strong> In the Teacher's live demonstration, what Pandas <code>groupby().agg()</code> statement computed both the mean yield and the maximum recorded soil moisture grouped by 'district'?</p>
                    <ul>
                        <li>A) df.groupby('district').agg({'yield': 'mean', 'moisture': 'max'})</li>
                        <li>B) df.groupby('district').sum()</li>
                        <li>C) df.aggregate(['mean', 'max'])</li>
                        <li>D) df.pivot_table(index='district')</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df.groupby('district').agg({'yield': 'mean', 'moisture': 'max'}) computed custom metrics per group.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Passing a dictionary mapping column names to aggregation functions inside <code>.agg()</code> provides fine-grained control over group-wise summaries across multiple variables.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> <code>.sum()</code> applies summation to all columns, which is meaningless for soil moisture percentages.</li>
                                <li><strong>Why C is incorrect:</strong> Calling <code>.aggregate()</code> without groupby computes statewide totals without district grouping.</li>
                                <li><strong>Why D is incorrect:</strong> Basic pivot_table without aggfunc defaults to mean across all columns.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (District Harvest Intelligence Studio):</strong> During the District Harvest Studio, how did teams restructure harvest data to create a cross-tabulated matrix showing average crop yield with 'district' as rows and 'crop_type' as columns?</p>
                    <ul>
                        <li>A) df.pivot_table(index='district', columns='crop_type', values='yield', aggfunc='mean')</li>
                        <li>B) df.melt(id_vars='district')</li>
                        <li>C) df.unstack().dropna()</li>
                        <li>D) df.transpose()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df.pivot_table(index='district', columns='crop_type', values='yield', aggfunc='mean') created a 2D cross-tabulation.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Pandas <code>.pivot_table()</code> reshapes long-format telemetry into a compact 2D matrix, enabling comparative evaluation of crop yields across districts and crop types.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> <code>.melt()</code> unpivots wide data into long format, the exact opposite of pivot_table.</li>
                                <li><strong>Why C is incorrect:</strong> unstack() requires hierarchical MultiIndex series.</li>
                                <li><strong>Why D is incorrect:</strong> <code>.transpose()</code> swaps rows and columns without aggregating values.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Farm Aggregation Report, how did you filter to retain only districts that had more than 100 reporting farm plots?</p>
                    <ul>
                        <li>A) df.groupby('district').filter(lambda x: len(x) > 100)</li>
                        <li>B) df[df['district'] > 100]</li>
                        <li>C) df.drop_duplicates()</li>
                        <li>D) df.head(100)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df.groupby('district').filter(lambda x: len(x) > 100) filtered groups based on group size.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The <code>.filter()</code> method on a GroupBy object applies a boolean predicate function to each sub-dataframe, discarding groups that fail the condition (e.g., sample size < 100).</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Comparing string district names with integer 100 throws a TypeError.</li>
                                <li><strong>Why C is incorrect:</strong> drop_duplicates() removes repeated rows without group size filtering.</li>
                                <li><strong>Why D is incorrect:</strong> head(100) returns the first 100 rows of the dataframe.</li>
                            </ul>
                        </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> When comparing soil organic carbon across 5 different tillage practices, why is a Box Plot vastly more informative than a standard Bar Chart of group means?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A bar chart shows only a single number (the mean), hiding whether the data is tightly clustered or wildly spread. A Box Plot reveals the full five-number summary: median, 25th and 75th percentiles (IQR), whiskers, and individual extreme outlier plots. It visually demonstrates whether a tillage practice reliably improves soil carbon or merely produces erratic spikes.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does an agronomist interpret a Correlation Heatmap displaying 15 soil, weather, and crop factors simultaneously?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A correlation heatmap encodes pairwise Pearson coefficients into color gradients (e.g., deep blue for +1.0, dark red for -1.0). An agronomist can scan the matrix in seconds to spot multi-collinearity (e.g., canopy temperature and vapor pressure deficit correlating at +0.95) and identify primary drivers of harvest yield.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Diagnostic Charting Demo):</strong> In the Teacher's live demonstration, what visual diagnostic chart immediately proved that nitrogen application data was heavily right-skewed with a few extreme over-fertilized outliers?</p>
                    <ul>
                        <li>A) A histogram combined with a box plot showing a long right tail and isolated outlier points beyond 1.5*IQR</li>
                        <li>B) A pie chart with 500 identical slices</li>
                        <li>C) An empty scatter plot</li>
                        <li>D) A line chart with connecting dots</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>A histogram and box plot clearly displayed the right-skewed tail and extreme high-rate outliers.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Combining histograms (showing frequency density) with box plots (displaying IQR bounds and outlier markers) provides the definitive visual assessment of distributional skewness and extreme values.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Pie charts with hundreds of slices are unreadable and cannot show continuous distributions.</li>
                                <li><strong>Why C is incorrect:</strong> Empty scatter plots display no data.</li>
                                <li><strong>Why D is incorrect:</strong> Line charts imply continuous chronological sequences, inappropriate for unordered plot samples.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Farm Analytics Dashboard Studio):</strong> During the Dashboard Design Studio, what Seaborn heatmap setting displayed exact numeric correlation coefficients directly inside each colored grid cell?</p>
                    <ul>
                        <li>A) sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', fmt='.2f')</li>
                        <li>B) sns.heatmap(corr_matrix, labels=False)</li>
                        <li>C) sns.lineplot(corr_matrix)</li>
                        <li>D) sns.pairplot(corr_matrix)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>sns.heatmap(..., annot=True, fmt='.2f') overlaid formatted numeric correlation values inside cells.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Setting <code>annot=True</code> instructs Seaborn to print the actual correlation values inside every cell, with <code>fmt='.2f'</code> formatting decimals to 2 places for precise evaluation.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> <code>labels=False</code> hides text annotations.</li>
                                <li><strong>Why C is incorrect:</strong> sns.lineplot is for 1D/2D line trends, not 2D correlation matrices.</li>
                                <li><strong>Why D is incorrect:</strong> sns.pairplot generates a matrix of pairwise scatterplots, not a correlation heatmap.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a 4-Panel Farm Analytics Dashboard, which Matplotlib method initialized a 2x2 grid of subplots sharing a unified figure canvas?</p>
                    <ul>
                        <li>A) fig, axes = plt.subplots(2, 2, figsize=(12, 10))</li>
                        <li>B) plt.figure(4)</li>
                        <li>C) plt.grid(True)</li>
                        <li>D) plt.axes([0, 0, 1, 1])</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>fig, axes = plt.subplots(2, 2, figsize=(12, 10)) initialized a 2x2 array of subplot axes.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>plt.subplots(nrows, ncols)</code> returns both the top-level figure and a NumPy array of Axes objects (indexed via <code>axes[0, 0]</code>, <code>axes[0, 1]</code>, etc.), providing clean modular access to each panel.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> plt.figure(4) creates an empty figure window labeled 4.</li>
                                <li><strong>Why C is incorrect:</strong> plt.grid() toggles background grid lines on the current axis.</li>
                                <li><strong>Why D is incorrect:</strong> plt.axes() manually positions a single arbitrary axis box.</li>
                            </ul>
                        </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is a Seaborn Violin Plot superior to a traditional box plot when analyzing yield across three different seed varieties?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A box plot assumes unimodal distributions within the IQR box. If a seed variety has a bimodal yield distribution (e.g., performing excellently under irrigation but failing under dry spells), a box plot hides this entirely! A Violin Plot combines a box plot with a rotated Kernel Density Estimation (KDE) curve, visually showing the exact peaks, valleys, and probability density across yields.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does Seaborn's <code>pairplot</code> assist an agro-data scientist in spotting non-linear crop interactions before building machine learning models?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> <code>pairplot</code> automatically renders a grid of scatter plots for every pairwise combination of features alongside univariate distribution histograms on the diagonal. In one glance, an analyst can spot non-linear parabolic responses (e.g., temperature vs yield), clustering tendencies, and collinear features.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Seaborn Report Demo):</strong> In the Teacher's live demonstration, what did a Seaborn violin plot reveal about crop yield distributions that a standard box plot failed to show?</p>
                    <ul>
                        <li>A) It revealed a distinct bimodal (twin-peaked) distribution in rainfed plots caused by a split planting date</li>
                        <li>B) It proved that all farmers had identical incomes</li>
                        <li>C) It showed that soil moisture had negative values</li>
                        <li>D) It printed the farmer's phone numbers</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Revealed a bimodal distribution with twin density peaks that box plots concealed.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Violin plots estimate kernel density along the vertical distribution axis, showing multiple modes (peaks), neck pinch points, and skewed distribution shapes that box plot rectangles hide.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Violin plots visualize data dispersion, not uniform equality.</li>
                                <li><strong>Why C is incorrect:</strong> Biological bimodality does not imply negative moisture readings.</li>
                                <li><strong>Why D is incorrect:</strong> Statistical charts do not print contact lists.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Statistical Report Design Studio):</strong> During the Report Design Studio, what Seaborn chart type was chosen to evaluate linear regression trends between nitrogen application and yield while categorizing plots by 'irrigation_type' using color hues?</p>
                    <ul>
                        <li>A) sns.lmplot(x='nitrogen', y='yield', hue='irrigation_type', data=df)</li>
                        <li>B) sns.barplot(x='nitrogen', data=df)</li>
                        <li>C) sns.heatmap(df)</li>
                        <li>D) sns.rugplot(df['yield'])</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>sns.lmplot(x='nitrogen', y='yield', hue='irrigation_type', data=df) fitted multi-category linear regressions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Seaborn's <code>lmplot()</code> fits linear regression lines with 95% bootstrap confidence intervals across categorical subsets designated by <code>hue</code>, allowing instant comparison of slope gradients across farming practices.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> barplot shows categorical aggregated means, not continuous linear regression trends.</li>
                                <li><strong>Why C is incorrect:</strong> heatmap requires a 2D matrix, not raw scatter records.</li>
                                <li><strong>Why D is incorrect:</strong> rugplot draws tick marks on an axis for marginal univariate distributions.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Seaborn Insight Report, which high-level function plotted pairwise bivariate distributions across all numeric soil and crop features in a single call?</p>
                    <ul>
                        <li>A) sns.pairplot(df, hue='crop_type', diag_kind='kde')</li>
                        <li>B) sns.relplot(df)</li>
                        <li>C) sns.catplot(df)</li>
                        <li>D) sns.jointplot(df)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>sns.pairplot(df, hue='crop_type', diag_kind='kde') rendered an exploratory matrix of pairwise plots.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Seaborn's <code>pairplot()</code> generates an (N x N) grid of scatterplots for every feature pair with KDE density curves along the diagonal, partitioned by categorical group hues.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> relplot plots specified (x, y) relationships, not all pairwise combinations.</li>
                                <li><strong>Why C is incorrect:</strong> catplot is dedicated to categorical variables.</li>
                                <li><strong>Why D is incorrect:</strong> jointplot evaluates exactly two variables at a time.</li>
                            </ul>
                        </div>
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
