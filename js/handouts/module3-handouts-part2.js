// Module 3 Comprehensive Handouts - Part 2
// Regression, Weather/Soil Data, Crop Health, CV Fundamentals

const module3HandoutsPart2 = {
    'm3-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Regression Techniques for Yield Forecasting</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Crop yield does not increase in a straight line forever as fertilizer increases.</p>
                <p>After a certain point, extra fertilizer burns plant roots and causes yield decline.</p>
                <p>Simple linear regression cannot model this classic agronomic law of diminishing returns.</p>
                <p>Polynomial and Ridge regression model curved response curves with high biological accuracy.</p>
                <p>How do non-linear regression techniques model realistic biological crop responses?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why does Ridge Regression (L2) keep all agricultural features with small shrunk weights, while Lasso Regression (L1) forces redundant features to exactly zero?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Geometry of the penalty functions! Lasso's L1 penalty (<code>sum(|w|)</code>) has sharp diamond corners at the coordinate axes, causing gradient paths to hit zero and performing automated feature selection. Ridge's L2 penalty (<code>sum(w²)</code>) is a smooth sphere, shrinking coefficients asymptotically toward zero but retaining all features. ElasticNet blends both L1 and L2 penalties.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> When predicting wheat yield across 100 variables (soil, weather, vegetation indices), why is ElasticNet often superior to pure Lasso?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Collinear features! In agriculture, many features are strongly correlated (e.g., Sentinel-2 Band 8, Band 8A, and NDVI). When faced with a group of correlated features, pure Lasso arbitrarily picks one and zeroes out the rest. ElasticNet groups correlated features together, shrinking their weights cooperatively while preserving structural predictive signals.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Apply polynomial regression for non-linear yield patterns</li>
                    <li>Use Regularization (Ridge/Lasso) to prevent overfitting</li>
                    <li>Compare model performance on agricultural datasets</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Polynomial Regression = Curves, not just Straight Lines</strong></p>
                    <p>Crop growth isn't a straight line. It starts slow, explodes during mid-season, and plateaus before harvest. A simple ruler (Linear Regression) can't measure this curve - you need a flexible tape measure (Polynomial)!</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Fertilizer Levels:</strong> [20, 40, 60, 80, 100, 120, 140] kg/acre.</li>
                            <li><strong>Harvested Yield:</strong> [18, 28, 36, 41, 43, 42, 38] quintals.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Polynomial Expansion:</strong> Add squared terms (Fertilizer²).</li>
                            <li><strong>Ridge Regularization:</strong> Penalize overly steep curve weights.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Optimal Application:</strong> Peak yield occurs at exactly 95 kg/acre.</li>
                            <li><strong>Over-fertilization Warning:</strong> Doses above 100 kg reduce profit margins.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

# Generate S-shaped crop growth data
np.random.seed(42)
days = np.sort(np.random.uniform(0, 100, 50))[:, np.newaxis]
height = 100 / (1 + np.exp(-0.1 * (days - 50))) + np.random.normal(0, 2, (50, 1))

# === POLYNOMIAL REGRESSION ===
print("=== Modeling Growth Curve ===")

# Linear Model (Underfitting)
linear = LinearRegression().fit(days, height)
y_linear = linear.predict(days)

# Polynomial Model (Degree 3)
poly = make_pipeline(PolynomialFeatures(3), LinearRegression())
poly.fit(days, height)
y_poly = poly.predict(days)

# Plot
plt.scatter(days, height, color='black', label='Measurements')
plt.plot(days, y_linear, color='red', label='Linear (Too Simple)')
plt.plot(days, y_poly, color='green', linewidth=2, label='Polynomial (Good Fit)')
plt.title('Crop Growth Modeling')
plt.legend()
plt.show()

# === REGULARIZATION (Ridge vs Lasso) ===
print("\\n=== Regularization ===")
# Lasso shrinks coefficients to ZERO (feature selection)
lasso = Lasso(alpha=0.1)
lasso.fit(days, height)
print(f"Lasso Coeffs: {lasso.coef_}")
print("Notice how Lasso simplifies the model by shrinking weights!")
                </code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Predict harvest for <code>160.0 kg</code> fertilizer. Notice how the polynomial model correctly predicts yield drop due to chemical toxicity!</p>
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
                            <h3>Live Demonstration: Non-Linear Crop Nitrogen Curves &amp; ElasticNet Regularization</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates advanced agronomic regression live in Google Colab on the projector:</p>
                            <ul>
                                <li>Sets up a fertilizer-yield trial response showing quadratic diminishing biological returns (Mitscherlich-Baule law).</li>
                                <li>Demonstrates why simple linear regression overestimates yield at excessive fertilizer doses (toxic burn zone).</li>
                                <li>Fits polynomial degree 2 and degree 3 models using <code>PolynomialFeatures</code>, then applies <code>Ridge</code> ($L_2$) and <code>Lasso</code> ($L_1$) to penalize explosive higher-order terms.</li>
                                <li>Demonstrates <code>ElasticNet</code> to balance feature selection with group multicollinearity across correlated soil nutrients.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script comparing Linear, Polynomial, Ridge, Lasso, and ElasticNet fits with interactive parameter sliders.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agronomic Diminishing Returns &amp; Toxic Threshold Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in constraining machine learning regression curves to conform to biological laws:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In high-input agriculture, an unconstrained degree-5 polynomial predicts that applying 500 kg/ha of nitrogen will yield 150 quintals/ha, whereas real plants suffer fertilizer toxicity and lodge. How do we constrain regression slopes to reflect agronomic reality?"</em></li>
                                <li><strong>Collaborative Modeling:</strong> Faculty and students formulate isotonic regression and constrained optimization curves ensuring monotonic increases followed by biologically grounded plateaus.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agronomically Constrained Regression Specification document with penalty boundaries.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Fertilizer Response Curve &amp; Optimal Economic Dosage Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive multi-plot fertilizer trial data across 4 districts:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Fit polynomial regression models with Ridge/Lasso regularization to predict wheat yield.</li>
                                <li><strong>Task 2:</strong> Calculate the derivative ($\frac{d\text{Yield}}{d\text{Fertilizer}}$) and determine the exact Economic Maximum Fertilizer Dosage based on fertilizer cost vs crop selling price.</li>
                                <li><strong>Peer Audit:</strong> Teams present their economic dosage recommendations to a peer syndicate, defending why adding fertilizer past the derivative threshold wastes farmer capital.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An economic agronomy dossier detailing regression formulas, derivative calculations, and profit-maximizing input recommendations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Fit Regularized Polynomial Crop Response in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent regression pipeline:</p>
                            <ul>
                                <li>Generate synthetic nitrogen application rates (0 to 200 kg/ha) and corresponding yields exhibiting a parabolic response curve.</li>
                                <li>Fit a <code>PolynomialFeatures(degree=2)</code> model and evaluate with <code>LinearRegression</code> vs <code>Ridge(alpha=1.0)</code>.</li>
                                <li>Plot the scatter points, linear fit line, and polynomial curve on a single chart with legend and labels.</li>
                                <li>Compute the vertex of the parabola ($x = -\frac{b}{2a}$) to identify the maximum yielding fertilizer dosage.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating the parabolic fertilizer response curve and identifying optimal application rate.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Non-Linear Yield Curve Demo):</strong> In the Teacher's live demonstration fitting crop yield against nitrogen application, why did polynomial regression with ElasticNet regularization outperform standard linear regression?</p>
                    <ul>
                        <li>A) It captured the biological Mitscherlich diminishing returns curve (quadratic peak followed by toxic yield decline) while regularizing redundant polynomial powers</li>
                        <li>B) It assumed infinite linear yield growth</li>
                        <li>C) It converted crop yield into a categorical string</li>
                        <li>D) It deleted all fertilizer data points</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Captured non-linear biological diminishing returns while regularizing higher-order polynomial terms.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Crop nutrient uptake follows non-linear polynomial response curves. Regularized polynomial regression captures the parabolic inflection point where additional fertilizer becomes toxic while preventing overfitting.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Assuming infinite linear growth violates biological limits and kills crops through over-fertilization.</li>
                                <li><strong>Why C is incorrect:</strong> Regression predicts continuous numerical yields, not categorical strings.</li>
                                <li><strong>Why D is incorrect:</strong> Deleting fertilizer data removes the primary explanatory variable.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Multicollinearity Regularization Studio):</strong> During the Multi-Collinear Sensor Studio, why did student teams choose ElasticNet over Lasso when regularizing 25 correlated multi-spectral vegetation indices?</p>
                    <ul>
                        <li>A) Lasso arbitrarily selected one random spectral index and discarded the other 24, while ElasticNet retained groups of correlated indices with balanced weights</li>
                        <li>B) ElasticNet runs in zero CPU clock cycles</li>
                        <li>C) Lasso is not supported in Scikit-Learn</li>
                        <li>D) ElasticNet only works on integer inputs</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>ElasticNet stabilized correlated feature groups, avoiding Lasso's erratic single-feature selection.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> When features are highly correlated (as in adjacent multi-spectral bands), Lasso exhibits grouping instability by picking one feature at random. ElasticNet's L2 component encourages grouped selection, retaining collective signal.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> ElasticNet uses standard numerical coordinate descent optimization.</li>
                                <li><strong>Why C is incorrect:</strong> Lasso is fully supported in Scikit-Learn via <code>sklearn.linear_model.Lasso</code>.</li>
                                <li><strong>Why D is incorrect:</strong> ElasticNet natively processes continuous floating-point features.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task training an ElasticNet Yield Forecaster, what hyperparameter balanced the ratio between L1 (Lasso) and L2 (Ridge) penalties?</p>
                    <ul>
                        <li>A) l1_ratio (where 1.0 is pure Lasso and 0.0 is pure Ridge)</li>
                        <li>B) max_depth</li>
                        <li>C) n_estimators</li>
                        <li>D) criterion='gini'</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>l1_ratio controlled the convex combination between L1 and L2 regularization penalties.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In Scikit-Learn's <code>ElasticNet(alpha=..., l1_ratio=...)</code>, <code>l1_ratio</code> specifies the mixing balance: <code>l1_ratio=1</code> corresponds to pure Lasso, while <code>l1_ratio=0</code> corresponds to pure Ridge.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> max_depth is a decision tree hyperparameter.</li>
                                <li><strong>Why C is incorrect:</strong> n_estimators specifies tree count in ensemble models.</li>
                                <li><strong>Why D is incorrect:</strong> criterion='gini' is an impurity split metric for classification trees.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Real-world farming data is rarely linear</li>
                    <li>Use Polynomial Features to capture curves</li>
                    <li>Use Regularization to keep models stable</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Weather Data Integration</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Online weather APIs provide rainfall and temperature data in nested JSON format.</p>
                <p>Farmers need irrigation warnings, not confusing computer code or raw JSON strings.</p>
                <p>Agricultural programs must extract specific rain and temperature numbers automatically.</p>
                <p>Python parses weather API streams to calculate crop evapotranspiration on the fly.</p>
                <p>How do we integrate live weather APIs into automated farm irrigation schedules?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> A weather station is located 15 kilometers away from an experimental farm. Why can trusting its rainfall data lead to completely incorrect crop yield models?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Tropical and convective monsoon rainfall is hyper-localized: a thunderstorm can dump 60mm of rain on the weather station while leaving the farm 15 km away completely dry, or vice versa! Agronomic models must ingest gridded reanalysis data (ERA5, IMD Gridded) or integrate on-farm IoT rain gauges to eliminate spatial weather mismatch.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What is 'Heat Stress Degree-Hours' (HSDH), and why is it more critical for wheat yield than average daily temperature?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Wheat pollination is damaged by short bursts of acute heat: temperatures exceeding 32°C for even 3 hours during anthesis cause pollen sterility, devastating harvest yield. A daily average of 24°C conceals this lethal 3-hour spike. Heat Stress Degree-Hours accumulates the exact duration and intensity of temperatures exceeding critical physiological thresholds.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Fetch weather data from APIs (OpenWeatherMap)</li>
                    <li>Preprocess timeseries weather data</li>
                    <li>Create derived features (Rolling averages, Lag features)</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Weather Data = The Mood of the Heavens</strong></p>
                    <p>Plants don't care about today's rain alone - they care about the "cumulative" rain over the last week. Integrating weather data means calculating these rolling summaries.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Live Weather Stream:</strong> Temp 31°C, Humidity 45%, Wind 14 km/h.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>ET0 Calculation:</strong> Estimate daily crop water evaporation rate.</li>
                            <li><strong>Water Deficit:</strong> Subtract expected rainfall from evaporation need.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Irrigation Volume:</strong> Deliver 4.8 mm water per acre tonight.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Mock daily weather data
dates = pd.date_range('2024-01-01', periods=20)
weather = pd.DataFrame({
    'date': dates,
    'temp_c': np.random.uniform(20, 35, 20),
    'rain_mm': [0, 0, 5, 20, 50, 10, 0, 0, 0, 0, 2, 5, 0, 0, 0, 20, 30, 5, 0, 0]
})

print("=== Raw Weather Data ===")
print(weather.head())

# === PREPROCESSING & FEATURE ENGINEERING ===
print("\\n=== Derived Features ===")

# Rolling Average (Smooth out daily noise)
weather['temp_7d_avg'] = weather['temp_c'].rolling(window=7).mean()

# Cumulative Rainfall (Soil moisture proxy)
weather['rain_3d_sum'] = weather['rain_mm'].rolling(window=3).sum()

# Lag Features (What happened yesterday affects today)
weather['rain_yesterday'] = weather['rain_mm'].shift(1)

print(weather.tail(5)) # Showing tail as rolling/lag creates NaNs at start

# === MERGING WITH CROP DATA ===
# Imagine we have crop observations on specific dates
crop_obs = pd.DataFrame({
    'date': pd.to_datetime(['2024-01-07', '2024-01-14']),
    'height_cm': [10, 15]
})

print("\\n=== Merged Data ===")
merged = pd.merge(crop_obs, weather, on='date', how='left')
print(merged)
                </code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>rain_forecast_next_24h_mm = 15.0</code>. Does the advisory cancel drip irrigation when rain is coming?</p>
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
                            <h3>Live Demonstration: API Ingestion, Temporal Alignment &amp; Heat Stress Rolling Windows</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates automated weather data integration live in Google Colab on the projector:</p>
                            <ul>
                                <li>Queries meteorological data from open weather telemetry logs and API feeds.</li>
                                <li>Resolves real-world datetime alignment issues: synchronizes UTC timestamps with local IST farm logs using <code>pd.to_datetime</code> and <code>dt.tz_convert</code>.</li>
                                <li>Engineers rolling window features: rolling 3-day and 7-day cumulative rainfall, 5-day rolling maximum temperature, and identifies heat stress events (3 consecutive days &gt; 35&deg;C).</li>
                                <li>Merges weather features with ground-based phenology records using <code>pd.merge_asof</code> to simulate asynchronous field logging.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script downloading, cleaning, and temporally merging weather telemetry with field observation records.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Extreme Agro-Climatic Event Feature Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in architecting derived weather indices that trigger crop vulnerability thresholds:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"During the flowering stage of rice, high daytime temperatures paired with high humidity (&gt;85%) cause pollen sterility. How do we engineer a composite 'Pollen Sterility Risk Index' that triggers early warning alerts?"</em></li>
                                <li><strong>Collaborative Architecture:</strong> Faculty and students formulate interaction terms combining Vapor Pressure Deficit (VPD), nighttime temperature anomalies, and consecutive dry-day counters into an advisory pipeline.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Climatic Extreme Index Specification Matrix with documented physiological damage thresholds.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The Multi-Station Micro-Climate Interpolation Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are tasked with integrating weather data for a farm located 18 km away from the nearest physical weather station:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Clean raw multi-station timeseries data and handle missing sensor readings using forward-fill and rolling linear interpolation.</li>
                                <li><strong>Task 2:</strong> Calculate daily heat units (GDD), cold shock hours (&lt; 10&deg;C), and rolling moisture stress flags.</li>
                                <li><strong>Peer Audit:</strong> Teams exchange merged datasets to verify whether any forward-fill operations leaked future weather data into past crop records.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A clean micro-climatic feature pipeline dossier with temporal sanity check reports and heat stress alert logs.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Calculate Heat Stress &amp; Rainfall Lags in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent weather feature engineering script:</p>
                            <ul>
                                <li>Create a 60-day daily weather DataFrame with dates, daily max temperature, and precipitation.</li>
                                <li>Create a rolling 3-day sum of precipitation and a 7-day rolling mean of temperature.</li>
                                <li>Implement a boolean flag <code>heat_stress</code> triggered whenever max temperature exceeds 32&deg;C for 3 or more consecutive days using <code>.rolling(3).apply()</code>.</li>
                                <li>Plot daily temperature with shaded red bands highlighting the identified heat stress intervals.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating rolling weather features and an annotated heat-stress visualization chart.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live API Weather Integration Demo):</strong> In the Teacher's live demonstration connecting to open-meteo APIs, how were hourly weather observations temporally aligned with daily farm harvest ledgers?</p>
                    <ul>
                        <li>A) Resampling hourly streams to daily aggregates (computing daily T_max, T_min, total precipitation, and hours > 35°C) and joining on date index</li>
                        <li>B) Deleting all weather records except the first hour of each month</li>
                        <li>C) Shuffling weather timestamps randomly</li>
                        <li>D) Converting dates into latitude coordinates</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Resampled hourly weather to daily agronomic summary metrics and joined on calendar dates.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Raw weather APIs stream high-frequency hourly records. Agronomic integration requires aggregating hours into biologically meaningful daily metrics (diurnal temperature range, cumulative rainfall, extreme heat hours) before joining with plot records.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Deleting 99% of weather observations discards storm events and diurnal extremes.</li>
                                <li><strong>Why C is incorrect:</strong> Randomizing timestamps destroys all temporal alignment with crop growth.</li>
                                <li><strong>Why D is incorrect:</strong> Dates cannot be converted into geographic coordinates.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Micro-Climate Interpolation Studio):</strong> During the Weather Interpolation Studio, how did teams estimate rainfall for an isolated farm situated between three distant regional IMD weather stations?</p>
                    <ul>
                        <li>A) Inverse Distance Weighting (IDW) interpolation: weighting rainfall contributions inversely proportional to station distance squared</li>
                        <li>B) Using the rainfall of the station that logged the highest number</li>
                        <li>C) Averaging the three stations with equal 33% weights regardless of distance</li>
                        <li>D) Guessing zero rainfall</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Inverse Distance Weighting (IDW) assigned greater weight to geographically closer stations.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Spatial interpolation via IDW assigns higher mathematical weights to nearby stations based on distance decay, generating realistic spatial estimates across unmonitored farm topography.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Picking the maximum station overestimates rainfall and conceals dry zones.</li>
                                <li><strong>Why C is incorrect:</strong> Equal weighting ignores distance, giving a station 100 km away the same influence as one 2 km away.</li>
                                <li><strong>Why D is incorrect:</strong> Assuming zero rain introduces extreme drought bias.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task calculating Heat Stress Lags, which Pandas code computed the number of consecutive days where daily T_max exceeded 35.0°C?</p>
                    <ul>
                        <li>A) (df['t_max'] > 35.0).astype(int).groupby((~(df['t_max'] > 35.0)).cumsum()).cumsum()</li>
                        <li>B) df['t_max'].sum()</li>
                        <li>C) df['t_max'] == 35.0</li>
                        <li>D) df['t_max'].diff()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Grouped consecutive boolean exceedance masks to calculate cumulative consecutive heatwave duration.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Tracking heatwave persistence requires identifying contiguous blocks of threshold exceedance, accomplished in Pandas by grouping boolean masks against cumulative inversion boundaries.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> <code>.sum()</code> aggregates all temperatures across the year into an uninterpretable scalar.</li>
                                <li><strong>Why C is incorrect:</strong> Equality (<code>== 35.0</code>) checks for exact float matches, missing days with 36°C or 40°C.</li>
                                <li><strong>Why D is incorrect:</strong> <code>.diff()</code> computes day-over-day changes, not heatwave run lengths.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Raw weather data is noisy</li>
                    <li>Use rolling windows to capture trends</li>
                    <li>Shift/Lag data to model delayed effects</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t5': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Soil Data Integration</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer combines electronic soil test cards with tractor GPS spatial boundaries.</p>
                <p>Nitrogen and organic carbon levels vary dramatically from the ridge to the valley.</p>
                <p>Treating the whole field uniformly results in over-fertilizing fertile lowlands.</p>
                <p>Integrating soil telemetry maps creates variable-rate fertilizer zones across farm blocks.</p>
                <p>How does spatial soil data integration guide precision nutrient application?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is collecting 10 physical soil core samples per acre across a 500-acre farm economically impossible, and how does spatial interpolation (Kriging) solve this?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Laboratory soil testing costs Rs. 500–1,500 per sample. Taking 5,000 samples would cost Rs. 25–75 lakhs, bankrupting the farm project. Instead, agronomists take 50 scientifically distributed samples (using stratified grid or management zone sampling) and apply geostatistical Ordinary Kriging to generate high-resolution continuous fertility surfaces (pH, N, P, K) across the remaining 99% of unmeasured acreage.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What is a 'Semivariogram' in soil geostatistics, and what does the 'Range' parameter tell an agronomist about soil spatial variability?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A semivariogram plots variance between pairs of soil samples as a function of the distance separating them. As distance increases, variance rises until it hits a plateau (the Sill). The distance at which it plateaus is the 'Range': beyond this distance, soil samples are spatially independent. The Range dictates the maximum allowable spacing between soil probes.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Handle spatial soil data (Points vs Raster)</li>
                    <li>Interpolate point data to create soil maps</li>
                    <li>Use soil parameters (NPK, pH) in ML models</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Soil Data = The Foundation</strong></p>
                    <p>You only take soil samples at a few spots (Points), but you need to know the soil health of the whole field (Map). We use interpolation to "connect the dots"!</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Soil Grid:</strong> Zone A (High N), Zone B (Medium N), Zone C (Low N).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Prescription Rule:</strong> Invert dosage based on existing soil reserves.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Tractor Prescription:</strong> Zone A: 10 kg/acre, Zone C: 35 kg/acre.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd
from scipy.interpolate import griddata
import matplotlib.pyplot as plt

# === SOIL SAMPLING POINTS ===
# Random sample points in a field (100x100m)
points = np.random.rand(15, 2) * 100 
# Nitrogen levels at those points
values = np.random.uniform(20, 60, 15)

# === INTERPOLATION (Krinking-like behavior) ===
# Create a grid for the whole field
grid_x, grid_y = np.mgrid[0:100:100j, 0:100:100j]

# Interpolate using cubic method
grid_z = griddata(points, values, (grid_x, grid_y), method='cubic')

# Plot
plt.figure(figsize=(8, 6))
plt.imshow(grid_z.T, extent=(0,100,0,100), origin='lower', cmap='YlGn')
plt.scatter(points[:,0], points[:,1], c='red', label='Sample Points')
plt.colorbar(label='Nitrogen Level')
plt.title('Interpolated Soil Nitrogen Map')
plt.legend()
plt.show()

print("Notice how we generated a full map from just 15 points!")
                </code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Notice that Valley_West has 320 kg N (surplus). Why does the deficit correctly show <code>0</code> instead of a negative number?</p>
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
                            <h3>Live Demonstration: Spatial Soil Interpolation (Kriging &amp; RBF) &amp; Prescription Mapping</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates spatial soil data integration live in Google Colab on the projector:</p>
                            <ul>
                                <li>Ingests 20 GPS-tagged soil core measurements (nitrogen, organic carbon, pH) from a 25-hectare research farm.</li>
                                <li>Demonstrates spatial 2D interpolation using <code>scipy.interpolate.griddata</code> (comparing linear, nearest, and cubic methods) to generate a continuous raster soil fertility surface.</li>
                                <li>Demonstrates Ordinary Kriging using <code>PyKrige</code> to model spatial semivariograms and quantify interpolation uncertainty error maps.</li>
                                <li>Overlays fertility contour maps and generates a Variable Rate Application (VRA) fertilizer prescription map.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive Colab notebook generating continuous 2D soil fertility heatmaps and VRA prescription zones.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Geostatistical Sampling Density &amp; Soil Spatial Resolution Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in optimizing soil core sampling grids against analytical testing budgets:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"Soil testing costs \$35 per core sample. If a 100-hectare farm has heterogeneous topography, how many sampling points are mathematically required to reconstruct the soil nutrient surface with &lt;10% interpolation error?"</em></li>
                                <li><strong>Collaborative Strategy:</strong> Faculty and students evaluate grid sampling vs directed zone sampling based on elevation contours and historical yield maps, establishing cost-optimized sampling plans.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Field Sampling Economics Blueprint specifying minimal sample sizes and semivariogram validation tests.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Soil Fertility Interpolation &amp; Liming Prescription Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive sparse GPS soil test logs across a 50-hectare acidic plot:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Interpolate soil pH and cation exchange capacity (CEC) across a dense 100&times;100 spatial grid using cubic splines or radial basis functions (RBF).</li>
                                <li><strong>Task 2:</strong> Delineate management zones with critical soil acidity ($\text{pH} &lt; 5.8$) requiring agricultural lime application; calculate total metric tons of lime required.</li>
                                <li><strong>Peer Defense:</strong> Teams present their spatial prescription maps to a peer syndicate, defending their choice of interpolation algorithm and boundary buffer distances.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A geostatistical soil report dossier with 2D interpolated fertility heatmaps and quantified variable-rate liming schedules.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Interpolate Soil pH &amp; Generate Fertility Surface in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent spatial interpolation script:</p>
                            <ul>
                                <li>Create a coordinate array of 12 field sample points $(x, y)$ in a $100\text{m} \times 100\text{m}$ grid with soil pH readings ranging from 5.4 to 7.2.</li>
                                <li>Use <code>scipy.interpolate.griddata</code> with <code>method='cubic'</code> to interpolate pH values across a dense grid mesh <code>np.mgrid[0:100:100j, 0:100:100j]</code>.</li>
                                <li>Plot the interpolated surface using <code>plt.imshow</code> with colorbar and overlay the original sample coordinates as red scatter dots.</li>
                                <li>Write code to query the predicted pH at coordinate <code>(35, 65)</code> and print an agronomic recommendation (Lime, Neutral, or Acidify).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating the 2D interpolated soil fertility map and local point recommendation.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Kriging Spatial Interpolation Demo):</strong> In the Teacher's live demonstration of spatial soil interpolation, why is Ordinary Kriging preferred over simple nearest-neighbor interpolation when mapping soil pH?</p>
                    <ul>
                        <li>A) Kriging models spatial autocorrelation via a semivariogram, providing both optimal Best Linear Unbiased Estimates (BLUE) and an explicit spatial uncertainty/variance map</li>
                        <li>B) Nearest-neighbor runs only on deep learning GPUs</li>
                        <li>C) Kriging changes the physical pH of the soil</li>
                        <li>D) Kriging requires no input coordinates</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Kriging models spatial autocorrelation to provide optimal estimates and an explicit prediction variance map.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Unlike deterministic interpolation methods, Kriging is a geostatistical estimator that models the spatial covariance structure of the landscape, outputting predicted nutrient surfaces alongside statistical error variance rasters.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Nearest-neighbor is a simple distance algorithm running on basic CPUs.</li>
                                <li><strong>Why C is incorrect:</strong> Software algorithms model data; they do not alter physical soil chemistry.</li>
                                <li><strong>Why D is incorrect:</strong> Kriging is fundamentally geospatial and requires exact (x, y) coordinates.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Soil Fertility Sampling Density Studio):</strong> During the Sampling Density Studio, what parameter of the experimental semivariogram determined the maximum distance between soil core samples to ensure spatial dependence?</p>
                    <ul>
                        <li>A) The Range &mdash; the spatial separation distance beyond which sample points cease to be spatially correlated</li>
                        <li>B) The Nugget alone</li>
                        <li>C) The color of the soil sampling bags</li>
                        <li>D) The time of day the sample was tested</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>The Range parameter defined the spatial correlation boundary for sampling grid design.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In geostatistics, the semivariogram Range represents the distance threshold of spatial autocorrelation. To capture spatial continuity, sample spacing must be closer than the Range.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> The Nugget represents measurement error and micro-scale variability at zero distance.</li>
                                <li><strong>Why C is incorrect:</strong> Bag color has zero bearing on spatial geostatistics.</li>
                                <li><strong>Why D is incorrect:</strong> Testing time does not dictate geographic spatial correlation distance.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task interpolating soil pH across an experimental field, which SciPy module performed 2D Radial Basis Function (RBF) spatial interpolation?</p>
                    <ul>
                        <li>A) scipy.interpolate.Rbf(x_coords, y_coords, ph_values, function='multiquadric')</li>
                        <li>B) scipy.fft.fft2()</li>
                        <li>C) scipy.optimize.minimize()</li>
                        <li>D) scipy.signal.convolve2d()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>scipy.interpolate.Rbf fitted smooth spatial multiquadric surfaces across scattered coordinates.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> SciPy's <code>Rbf</code> class performs mesh-free spatial interpolation on scattered 2D points, fitting smooth continuous surfaces (multiquadric, thin-plate spline) across field coordinates.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> fft2() computes 2D Fast Fourier Transforms for frequency domain signal processing.</li>
                                <li><strong>Why C is incorrect:</strong> optimize.minimize() is for numerical parameter optimization.</li>
                                <li><strong>Why D is incorrect:</strong> convolve2d() performs spatial image filtering, not scattered point interpolation.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Soil samples are sparse (expensive to collect)</li>
                    <li>Interpolation fills the gaps</li>
                    <li>Soil maps guide Variable Rate Application (VRA)</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t6': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Crop Health Assessment</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>In high-density sugarcane, workers cannot walk through dense, razor-sharp mature canopies.</p>
                <p>Hidden pest outbreaks or water leaks inside the field center remain invisible from borders.</p>
                <p>By harvest time, interior damage has destroyed tons of profitable sugar stalk weight.</p>
                <p>Multispectral satellite indices scan deep into crop canopies from space every five days.</p>
                <p>How does multispectral vegetation index tracking monitor crop health non-destructively?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why does healthy green vegetation reflect near-infrared (NIR) light intensely while absorbing red light, and why is this optical contrast the foundation of all satellite crop health monitoring?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Plant physiology! Chlorophyll pigments in leaf chloroplasts absorb red light (0.66 µm) to fuel photosynthesis. Simultaneously, the spongy mesophyll cell structure inside healthy leaves reflects near-infrared radiation (0.85 µm) to prevent leaf solar overheating. When a plant experiences drought or pathogen attack, mesophyll cells collapse and chlorophyll degrades, causing red reflection to rise and NIR to collapse—a dramatic optical shift measured by NDVI.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does NDVI saturate (flatten out) in dense canopies (e.g., peak growth sugarcane or maize), and what advanced spectral index overcomes this saturation?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Once a crop canopy achieves full closure (Leaf Area Index > 3), red light absorption maxes out at nearly 100%, causing the red reflectance term to stop changing even as biomass increases. Advanced indices like the Normalized Difference Red Edge (NDRE) use the 'RedEdge' transition band (0.705–0.740 µm), which penetrates deeper into dense canopies without saturating.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Calculate Vegetation Indices (NDVI)</li>
                    <li>Interpret spectral signatures</li>
                    <li>Use thresholds to classify health status</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>NDVI = Plant Vital Signs Monitor</strong></p>
                    <p>Healthy plants reflect a lot of Near-Infrared (NIR) light but absorb Red light (for photosynthesis). Stressed plants do the opposite. NDVI measures this difference!</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Spectral Bands:</strong> Near-Infrared (NIR), Red, and Blue reflectances.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>EVI Index:</strong> Compute Enhanced Vegetation Index to resist soil noise.</li>
                            <li><strong>Stress Flag:</strong> Detect canopy drops exceeding 15% in seven days.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Canopy Stress Map:</strong> GPS pin flagged for drone targeted inspection.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import matplotlib.pyplot as plt

# === SIMULATE SATELLITE BANDS ===
# Image size 10x10 pixels
# Healthy plants (High NIR, Low Red)
nir_band = np.random.uniform(0.6, 0.9, (10, 10))
red_band = np.random.uniform(0.05, 0.2, (10, 10))

# Add a "stressed" patch in the middle
nir_band[4:7, 4:7] = 0.3 # Low reflection
red_band[4:7, 4:7] = 0.4 # High absorption failure

# === CALCULATE NDVI ===
# NDVI = (NIR - Red) / (NIR + Red)
ndvi = (nir_band - red_band) / (nir_band + red_band)

print(f"Max NDVI: {np.max(ndvi):.2f}")
print(f"Min NDVI: {np.min(ndvi):.2f}")

# Visualize
plt.figure(figsize=(8, 6))
plt.imshow(ndvi, cmap='RdYlGn', vmin=-1, vmax=1)
plt.colorbar(label='NDVI')
plt.title('Crop Health Map (Green=Healthy, Red=Stressed)')
plt.show()

print("The center patch shows red/yellow, indicating stress!")
                </code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>nir_band = 0.22</code> (simulating insect defoliation). What does the EVI score become? Which alert triggers?</p>
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
                            <h3>Live Demonstration: Multispectral Band Math, NDVI &amp; EVI Calculation &amp; Stress Masking</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates multispectral remote sensing live in Google Colab on the projector:</p>
                            <ul>
                                <li>Ingests Sentinel-2 multispectral tile bands (Red: Band 4, NIR: Band 8, Blue: Band 2) for an agricultural watershed.</li>
                                <li>Demonstrates calculating NDVI ($NDVI = \frac{NIR - Red}{NIR + Red}$) and Enhanced Vegetation Index ($EVI = 2.5 \times \frac{NIR - Red}{NIR + 6 Red - 7.5 Blue + 1}$) to overcome high-biomass canopy saturation.</li>
                                <li>Applies classification thresholds ($NDVI &lt; 0.2$: bare soil/water, $0.2 - 0.4$: severe crop stress, $0.4 - 0.7$: healthy moderate canopy, &gt;0.7: vigorous dense crop).</li>
                                <li>Renders color-coded health maps with <code>RdYlGn</code> colormaps and computes zonal stress acreage.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook computing NDVI and EVI rasters with interactive histogram threshold sliders.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Drone vs Satellite Multispectral Calibration Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on reconciling resolution and atmospheric differences between Sentinel-2 and UAV drone cameras:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"Satellite imagery has 10m spatial resolution and a 5-day revisit time, while a multispectral drone delivers 2cm resolution on demand. How do we build a multi-scale monitoring pipeline that uses satellites for regional scouting and triggers targeted drone flights for localized disease hotspots?"</em></li>
                                <li><strong>Collaborative Architecture:</strong> Faculty and students formulate a tiered remote sensing scouting protocol with automated NDVI drop alerts.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Multi-Resolution Satellite-Drone Agricultural Monitoring Framework document.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Field Anomaly Detection &amp; Crop Stress Classification Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are provided with a multispectral farm grid representing 400 crop management cells:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Compute NDVI, GNDVI (Green NDVI: $\frac{NIR - Green}{NIR + Green}$ for chlorophyll), and NDRE (RedEdge).</li>
                                <li><strong>Task 2:</strong> Segment the field into 4 management zones (Critically Stressed, Nitrogen Deficient, Normal, Vigorous) and calculate the percentage area of each.</li>
                                <li><strong>Peer Audit:</strong> Teams exchange zone maps and evaluate whether nitrogen deficiency was correctly isolated from irrigation water stress.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A precision crop health audit dossier with classified vegetation index maps and targeted agronomic interventions.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Compute NDVI &amp; Zonal Stress Statistics in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent vegetation index calculation script:</p>
                            <ul>
                                <li>Simulate or load a 2D NIR array and Red reflectance array (values 0.0 to 1.0) for a 50&times;50 plot grid with an induced drought anomaly zone.</li>
                                <li>Compute the NDVI raster matrix using vectorized NumPy math.</li>
                                <li>Classify pixels into 3 categories: Bare Soil (&lt;0.2), Stressed (0.2 - 0.5), Healthy (&gt;0.5); calculate the exact percentage of the field in each category.</li>
                                <li>Plot the classified health map with a legend and print an automated advisory summary for the farm manager.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating the NDVI raster matrix, classified health map, and area summary table.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Multispectral Canopy Demo):</strong> In the Teacher's live multispectral demonstration, what formula computed the Normalized Difference Vegetation Index (NDVI) from calibrated Sentinel-2 surface reflectance bands?</p>
                    <ul>
                        <li>A) NDVI = (B8_NIR - B4_Red) / (B8_NIR + B4_Red)</li>
                        <li>B) NDVI = (B4_Red - B8_NIR) / (B4_Red + B8_NIR)</li>
                        <li>C) NDVI = B8_NIR * B4_Red</li>
                        <li>D) NDVI = B8_NIR / 255.0</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>NDVI = (NIR - Red) / (NIR + Red) normalized contrast between cellular reflectance and chlorophyll absorption.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> NDVI computes the normalized ratio of the difference between near-infrared (Sentinel-2 Band 8) and red (Band 4) over their sum, producing values between -1.0 (water/barren) and +1.0 (dense healthy canopy).</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Inverting numerator terms produces negative indices for healthy vegetation.</li>
                                <li><strong>Why C is incorrect:</strong> Multiplying bands scales with solar illumination rather than measuring normalized biological contrast.</li>
                                <li><strong>Why D is incorrect:</strong> Dividing NIR by 255 does not contrast with chlorophyll absorption.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Canopy Saturation & NDRE Studio):</strong> During the Canopy Saturation Studio, why did student teams switch from NDVI to NDRE (Normalized Difference Red Edge) when scouting late-stage commercial sugarcane?</p>
                    <ul>
                        <li>A) Because standard NDVI saturated near 0.85 in dense canopy, while the RedEdge band penetrated deep foliage layers to detect localized sub-canopy nitrogen deficiencies</li>
                        <li>B) Because sugarcane cannot be detected by NIR sensors</li>
                        <li>C) Because NDRE makes the satellite orbit faster</li>
                        <li>D) Because red light travels faster through cane stalks</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>NDRE penetrated dense foliage, avoiding NDVI canopy saturation and revealing sub-canopy nitrogen stress.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In dense, high-biomass crops (sugarcane, maize), red absorption reaches maximum extinction, saturating NDVI. The Red Edge band (705–740nm) has lower absorption, penetrating deeper into multiple canopy layers.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Sugarcane mesophyll cells reflect NIR intensely.</li>
                                <li><strong>Why C is incorrect:</strong> Spectral indices are mathematical calculations and have zero impact on satellite orbital mechanics.</li>
                                <li><strong>Why D is incorrect:</strong> Light speeds in air are constant regardless of crop species.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task calculating Crop Health Indices, how did you handle potential zero-division runtime errors over water or barren soil pixels?</p>
                    <ul>
                        <li>A) np.where((nir + red) == 0, 0, (nir - red) / (nir + red + 1e-8))</li>
                        <li>B) Letting Python crash with a ZeroDivisionError</li>
                        <li>C) Setting all pixels to 1.0</li>
                        <li>D) Deleting the image array</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Added an epsilon denominator term (1e-8) or used np.where() to safely avoid zero division.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Defensive raster algebra adds an infinitesimal epsilon constant (e.g., 1e-8) or uses <code>np.where()</code> to prevent fatal division-by-zero exceptions on completely dark or masked zero-reflectance pixels.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Allowing unhandled crashes halts batch satellite processing pipelines.</li>
                                <li><strong>Why C is incorrect:</strong> Setting to 1.0 falsely classifies water bodies as ultra-dense healthy vegetation.</li>
                                <li><strong>Why D is incorrect:</strong> Deleting arrays discards entire satellite scenes.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>NDVI is the gold standard for crop health</li>
                    <li>Requires multispectral data (NIR band)</li>
                    <li>Enables spotting stress before human eye can see it</li>
                </ul>
            </div>
        </div>
    `,


};

if (typeof window !== 'undefined') {
    window.module3HandoutsPart2 = module3HandoutsPart2;
}
