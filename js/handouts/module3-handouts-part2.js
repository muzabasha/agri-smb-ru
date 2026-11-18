// Module 3 Comprehensive Handouts - Part 2
// Regression, Weather/Soil Data, Crop Health, CV Fundamentals

const module3HandoutsPart2 = {
    'm3-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Regression Techniques for Yield Forecasting</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which regression type helps select features by making coefficients zero?</p>
                    <ul>
                        <li>A) Ridge Regression (L2)</li>
                        <li>B) Lasso Regression (L1)</li>
                        <li>C) Linear Regression</li>
                        <li>D) Polynomial Regression</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Lasso (L1 regularization) tends to shrink less important feature coefficients to exactly zero.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why use rolling averages for weather data?</p>
                    <ul>
                        <li>A) To predict the future</li>
                        <li>B) To capture long-term trends and reduce daily noise</li>
                        <li>C) To save memory</li>
                        <li>D) APIs require it</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Plants respond to trends (accumulated moisture/heat), not just instantaneous values.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What technique turns point data (samples) into a continuous surface (map)?</p>
                    <ul>
                        <li>A) Classification</li>
                        <li>B) Interpolation</li>
                        <li>C) Clustering</li>
                        <li>D) Sampling</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Interpolation estimates values between known points.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which light band is MOST reflected by healthy vegetation?</p>
                    <ul>
                        <li>A) Blue</li>
                        <li>B) Red</li>
                        <li>C) Near-Infrared (NIR)</li>
                        <li>D) Green</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Healthy cell structures reflect NIR strongly.</p>
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
