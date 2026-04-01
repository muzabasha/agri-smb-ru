// Question Bank - Unit 4 HOT Questions
// 10 marks each, with scheme and detailed solution
// Covers 10 key topics from m4-t1 through m4-t25

const questionBankUnit4 = {
    unitId: 4,
    unitTitle: "Unit 4: Capstone Project – AI/ML in Agriculture",
    topicsCovered: ["m4-t1", "m4-t4", "m4-t9", "m4-t10", "m4-t12", "m4-t13", "m4-t14", "m4-t17", "m4-t21", "m4-t23"],
    questions: [
        {
            id: "u4-q1",
            topicId: "m4-t1",
            topicTitle: "Problem Definition and Scoping",
            question: "Explain the process of defining and scoping an AI/ML project for agriculture. Using the example of a 'Crop Disease Early Warning System' for smallholder farmers, demonstrate: (a) problem statement formulation, (b) success criteria definition, (c) scope boundaries (in-scope vs out-of-scope), and (d) stakeholder analysis with a RACI matrix.",
            marks: 10,
            scheme: [
                { points: 2, description: "Clear problem statement with measurable objectives" },
                { points: 2, description: "SMART success criteria (Specific, Measurable, Achievable, Relevant, Time-bound)" },
                { points: 3, description: "Scope boundaries with in-scope/out-of-scope items and justification" },
                { points: 3, description: "Stakeholder analysis with RACI matrix (Responsible, Accountable, Consulted, Informed)" }
            ],
            solution: `<h4>1. Problem Statement (2 marks)</h4>
<p><strong>Context:</strong> Smallholder farmers in Karnataka lose 15–25% of crop yield annually due to late disease detection. Manual scouting covers only 10% of farmland.</p>
<p><strong>Problem Statement:</strong> "Develop an AI-powered mobile application that identifies crop diseases from leaf images within 5 seconds, achieving ≥85% accuracy across 10 common diseases of rice, tomato, and maize, enabling early intervention for 500+ farmers in the pilot region."</p>
<p><strong>Key elements:</strong> Who (smallholder farmers), What (disease identification), How (AI + mobile), Where (Karnataka pilot), Why (reduce crop loss), When (real-time, &lt;5s).</p>

<h4>2. SMART Success Criteria (2 marks)</h4>
<table class="hot-table"><thead><tr><th>Criterion</th><th>Target</th><th>Measurement</th></tr></thead>
<tbody>
<tr><td>Specific</td><td>Classify 10 diseases across 3 crops</td><td>Disease list defined</td></tr>
<tr><td>Measurable</td><td>≥85% classification accuracy</td><td>Test set F1-score</td></tr>
<tr><td>Achievable</td><td>PlantVillage dataset + local data</td><td>Data availability confirmed</td></tr>
<tr><td>Relevant</td><td>Reduce crop loss by 15%</td><td>Farmer feedback survey</td></tr>
<tr><td>Time-bound</td><td>MVP in 12 weeks</td><td>Sprint milestones</td></tr>
</tbody></table>

<h4>3. Scope Boundaries (3 marks)</h4>
<table class="hot-table"><thead><tr><th>In-Scope</th><th>Out-of-Scope</th></tr></thead>
<tbody>
<tr><td>Image-based disease classification</td><td>Soil-borne disease detection</td></tr>
<tr><td>10 diseases (rice, tomato, maize)</td><td>All crops / all diseases</td></tr>
<tr><td>Mobile app with camera input</td><td>Drone/satellite imagery</td></tr>
<tr><td>Treatment recommendations (text)</td><td>Automated pesticide spraying</td></tr>
<tr><td>Offline inference on device</td><td>Cloud-based real-time training</td></tr>
<tr><td>English + Kannada UI</td><td>All Indian languages</td></tr>
</tbody></table>
<p><strong>Justification:</strong> Scope is limited to ensure MVP delivery within 12 weeks. Drone imagery and multi-language support are Phase 2 features.</p>

<h4>4. Stakeholder Analysis – RACI Matrix (3 marks)</h4>
<table class="hot-table"><thead><tr><th>Task</th><th>ML Engineer</th><th>Domain Expert</th><th>Farmer</th><th>Project Lead</th></tr></thead>
<tbody>
<tr><td>Data Collection</td><td>C</td><td>R</td><td>I</td><td>A</td></tr>
<tr><td>Model Development</td><td>R</td><td>C</td><td>I</td><td>A</td></tr>
<tr><td>App UI Design</td><td>C</td><td>C</td><td>C</td><td>R/A</td></tr>
<tr><td>Field Testing</td><td>C</td><td>R</td><td>R</td><td>A</td></tr>
<tr><td>Deployment</td><td>R</td><td>I</td><td>I</td><td>A</td></tr>
</tbody></table>
<p>R=Responsible, A=Accountable, C=Consulted, I=Informed. The domain expert (agronomist) is critical for data labeling accuracy and treatment recommendations.</p>`
        },
        {
            id: "u4-q2",
            topicId: "m4-t4",
            topicTitle: "Dataset Selection and Validation",
            question: "Describe the process of selecting and validating datasets for an agricultural ML project. For a 'Soil Health Prediction' system, demonstrate: (a) criteria for dataset selection, (b) data quality assessment checklist, (c) handling class imbalance in soil categories, and (d) train-validation-test split strategy with stratification.",
            marks: 10,
            scheme: [
                { points: 2, description: "Dataset selection criteria (size, relevance, quality, licensing)" },
                { points: 3, description: "Data quality assessment with checklist and metrics" },
                { points: 3, description: "Class imbalance detection and handling techniques with code" },
                { points: 2, description: "Stratified split strategy with rationale" }
            ],
            solution: `<h4>1. Dataset Selection Criteria (2 marks)</h4>
<table class="hot-table"><thead><tr><th>Criterion</th><th>Requirement</th><th>Our Dataset</th></tr></thead>
<tbody>
<tr><td>Size</td><td>≥500 samples for tabular ML</td><td>800 soil samples ✓</td></tr>
<tr><td>Relevance</td><td>Matches target region/crops</td><td>South India soils ✓</td></tr>
<tr><td>Features</td><td>pH, N, P, K, OC, moisture</td><td>6 features available ✓</td></tr>
<tr><td>Recency</td><td>Collected within 3 years</td><td>2022–2024 data ✓</td></tr>
<tr><td>License</td><td>Open or institutional access</td><td>ICAR open data ✓</td></tr>
<tr><td>Labels</td><td>Expert-verified soil classes</td><td>Agronomist labeled ✓</td></tr>
</tbody></table>

<h4>2. Data Quality Assessment (3 marks)</h4>
<pre><code>import pandas as pd
import numpy as np

df = pd.read_csv("soil_data.csv")

# Quality Checklist
quality_report = {
    "Total samples":    len(df),
    "Features":         df.shape[1],
    "Missing values":   df.isnull().sum().sum(),
    "Missing %":        f"{df.isnull().mean().mean()*100:.1f}%",
    "Duplicates":       df.duplicated().sum(),
    "Numeric cols":     df.select_dtypes(include='number').shape[1],
    "Target classes":   df['soil_class'].nunique(),
    "Class distribution": df['soil_class'].value_counts().to_dict()
}
for k, v in quality_report.items():
    print(f"{k}: {v}")

# Range validation (domain knowledge)
assert df['pH'].between(3.5, 9.5).all(), "pH out of range"
assert df['N_kg_ha'].between(0, 800).all(), "N out of range"
# Flag: 2.5% missing → acceptable (< 5% threshold)</code></pre>

<h4>3. Handling Class Imbalance (3 marks)</h4>
<pre><code># Check imbalance
print(df['soil_class'].value_counts())
# Healthy    320 (40%)
# Moderate   280 (35%)
# Poor       200 (25%)  ← minority class

# Method 1: SMOTE (Synthetic Minority Oversampling)
from imblearn.over_sampling import SMOTE
X = df.drop('soil_class', axis=1)
y = df['soil_class']
smote = SMOTE(random_state=42)
X_res, y_res = smote.fit_resample(X, y)
print("After SMOTE:", pd.Series(y_res).value_counts())
# All classes now 320 samples each

# Method 2: Class weights in model
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier(class_weight='balanced', random_state=42)
# Automatically adjusts weights inversely proportional to class frequency

# Method 3: Stratified sampling during split
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)</code></pre>

<h4>4. Stratified Split Strategy (2 marks)</h4>
<pre><code># 3-way split: 70% train, 15% validation, 15% test
X_temp, X_test, y_temp, y_test = train_test_split(
    X, y, test_size=0.15, stratify=y, random_state=42)
X_train, X_val, y_train, y_val = train_test_split(
    X_temp, y_temp, test_size=0.176, stratify=y_temp, random_state=42)
# 0.176 of 85% ≈ 15% of total

print(f"Train: {len(X_train)}, Val: {len(X_val)}, Test: {len(X_test)}")
# Verify stratification preserved
for name, subset in [("Train",y_train),("Val",y_val),("Test",y_test)]:
    dist = subset.value_counts(normalize=True)
    print(f"{name}: {dist.to_dict()}")
# Each subset should have ~40% Healthy, 35% Moderate, 25% Poor</code></pre>`
        },
        {
            id: "u4-q3",
            topicId: "m4-t9",
            topicTitle: "Data Collection Strategy",
            question: "Design a comprehensive data collection strategy for an AI-based 'Precision Irrigation Advisory System'. Cover: (a) data sources and collection methods (IoT sensors, weather APIs, manual records), (b) sampling strategy and sample size justification, (c) data quality assurance protocols, and (d) data storage schema design with an ER diagram description.",
            marks: 10,
            scheme: [
                { points: 3, description: "Data sources identification with collection methods and frequency" },
                { points: 2, description: "Sampling strategy with statistical justification for sample size" },
                { points: 2, description: "Quality assurance protocols (validation rules, calibration, audits)" },
                { points: 3, description: "Storage schema design with table structure and relationships" }
            ],
            solution: `<h4>1. Data Sources & Collection Methods (3 marks)</h4>
<table class="hot-table"><thead><tr><th>Source</th><th>Data Collected</th><th>Method</th><th>Frequency</th></tr></thead>
<tbody>
<tr><td>Soil Sensors (IoT)</td><td>Moisture (%), Temperature (°C)</td><td>Capacitance probes at 15cm, 30cm depth</td><td>Every 15 min</td></tr>
<tr><td>Weather Station</td><td>Temp, Humidity, Wind, Rainfall</td><td>Automatic weather station (AWS)</td><td>Hourly</td></tr>
<tr><td>Weather API</td><td>Forecast (7-day)</td><td>OpenWeatherMap API</td><td>Every 6 hours</td></tr>
<tr><td>Farmer Records</td><td>Crop type, stage, irrigation applied</td><td>Mobile app form entry</td><td>Daily</td></tr>
<tr><td>Satellite</td><td>NDVI, ET₀ estimates</td><td>Sentinel-2 via Google Earth Engine</td><td>Every 5 days</td></tr>
</tbody></table>

<h4>2. Sampling Strategy (2 marks)</h4>
<pre><code># Stratified sampling across:
# - 3 soil types (Red, Black, Laterite)
# - 4 crop stages (Initial, Development, Mid, Late)
# - 2 seasons (Kharif, Rabi)
# Total strata = 3 × 4 × 2 = 24

# Sample size calculation (Cochran's formula):
# n = (Z² × p × (1-p)) / e²
# Z = 1.96 (95% confidence), p = 0.5 (max variability), e = 0.05
import math
Z, p, e = 1.96, 0.5, 0.05
n = (Z**2 * p * (1-p)) / e**2
print(f"Min samples: {math.ceil(n)}")  # 385
# With 24 strata: ~16 samples per stratum minimum
# Target: 600 samples (25 per stratum) for robustness</code></pre>

<h4>3. Quality Assurance Protocols (2 marks)</h4>
<ul>
<li><strong>Sensor Calibration:</strong> Monthly calibration of soil moisture sensors against gravimetric method (oven-dry). Acceptable drift: ±2%.</li>
<li><strong>Range Validation:</strong> Automated checks — reject soil moisture &lt;0% or &gt;60%, temperature &lt;-5°C or &gt;55°C.</li>
<li><strong>Completeness Check:</strong> Flag any sensor with &gt;10% missing readings in a day for maintenance.</li>
<li><strong>Cross-validation:</strong> Compare IoT soil moisture with manual tensiometer readings weekly (correlation &gt;0.9 required).</li>
<li><strong>Audit Trail:</strong> All manual entries timestamped with GPS location; random 5% audit by field supervisor.</li>
</ul>

<h4>4. Storage Schema Design (3 marks)</h4>
<pre><code># Relational Schema (PostgreSQL)

# Table: plots
# | plot_id (PK) | farm_id (FK) | soil_type | area_ha | crop | crop_stage |

# Table: sensor_readings
# | reading_id (PK) | plot_id (FK) | timestamp | moisture_15cm |
# | moisture_30cm | soil_temp | battery_level |

# Table: weather_data
# | weather_id (PK) | station_id | timestamp | temp_C | humidity |
# | wind_kmh | rainfall_mm | solar_radiation |

# Table: irrigation_events
# | event_id (PK) | plot_id (FK) | timestamp | method |
# | water_applied_mm | duration_min | source |

# Table: predictions
# | pred_id (PK) | plot_id (FK) | date | predicted_water_mm |
# | actual_water_mm | model_version | confidence |

# Relationships:
# plots 1──∞ sensor_readings (one plot, many readings)
# plots 1──∞ irrigation_events
# plots 1──∞ predictions
# weather_data linked by nearest station + timestamp</code></pre>`
        },
        {
            id: "u4-q4",
            topicId: "m4-t10",
            topicTitle: "Exploratory Data Analysis (EDA)",
            question: "Perform a comprehensive EDA on a crop yield dataset with 1000 records and 8 features. Demonstrate: (a) univariate analysis with distribution plots, (b) bivariate analysis with correlation heatmap and scatter plots, (c) outlier detection using IQR and Z-score methods, and (d) key insights summary with actionable recommendations for model building.",
            marks: 10,
            scheme: [
                { points: 2, description: "Univariate analysis: histograms, box plots, descriptive stats" },
                { points: 3, description: "Bivariate analysis: correlation heatmap, scatter plots, pair plots" },
                { points: 3, description: "Outlier detection with IQR and Z-score, handling strategy" },
                { points: 2, description: "Insights summary with feature selection recommendations" }
            ],
            solution: `<h4>1. Univariate Analysis (2 marks)</h4>
<pre><code>import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("crop_yield_data.csv")
print(df.shape)  # (1000, 8)
print(df.describe())

# Distribution of target variable
fig, axes = plt.subplots(1, 3, figsize=(15, 4))
axes[0].hist(df['yield_t_ha'], bins=30, color='green', alpha=0.7, edgecolor='black')
axes[0].set_title('Yield Distribution')
axes[0].axvline(df['yield_t_ha'].mean(), color='red', linestyle='--', label='Mean')

# Box plots for all numeric features
axes[1].boxplot([df[col] for col in df.select_dtypes('number').columns],
                labels=df.select_dtypes('number').columns)
axes[1].set_title('Feature Box Plots')
axes[1].tick_params(axis='x', rotation=45)

# Skewness check
skew = df.select_dtypes('number').skew()
axes[2].barh(skew.index, skew.values, color=['red' if abs(v)>1 else 'green' for v in skew])
axes[2].set_title('Feature Skewness')
axes[2].axvline(0, color='black', linewidth=0.5)
plt.tight_layout(); plt.show()
# Insight: Yield is approximately normal (skew=0.3), N_kg is right-skewed (skew=1.2)</code></pre>

<h4>2. Bivariate Analysis (3 marks)</h4>
<pre><code># Correlation heatmap
corr = df.select_dtypes('number').corr()
plt.figure(figsize=(8, 6))
sns.heatmap(corr, annot=True, fmt='.2f', cmap='RdYlGn', center=0,
            mask=np.triu(np.ones_like(corr, dtype=bool)))
plt.title('Feature Correlation Matrix')
plt.tight_layout(); plt.show()

# Key correlations with yield:
yield_corr = corr['yield_t_ha'].drop('yield_t_ha').sort_values(ascending=False)
print("Correlations with yield:")
print(yield_corr)
# rainfall: 0.82, N_applied: 0.75, soil_OC: 0.68, temp: -0.45

# Scatter plots for top features
fig, axes = plt.subplots(1, 3, figsize=(15, 4))
for ax, feat in zip(axes, ['rainfall_mm', 'N_kg_ha', 'soil_OC']):
    ax.scatter(df[feat], df['yield_t_ha'], alpha=0.4, c='green', s=20)
    ax.set_xlabel(feat); ax.set_ylabel('Yield (t/ha)')
    # Add regression line
    z = np.polyfit(df[feat], df['yield_t_ha'], 1)
    ax.plot(np.sort(df[feat]), np.polyval(z, np.sort(df[feat])), 'r--')
plt.tight_layout(); plt.show()</code></pre>

<h4>3. Outlier Detection (3 marks)</h4>
<pre><code># Method 1: IQR
def detect_outliers_iqr(series):
    Q1, Q3 = series.quantile(0.25), series.quantile(0.75)
    IQR = Q3 - Q1
    lower, upper = Q1 - 1.5*IQR, Q3 + 1.5*IQR
    return series[(series < lower) | (series > upper)]

for col in df.select_dtypes('number').columns:
    outliers = detect_outliers_iqr(df[col])
    if len(outliers) > 0:
        print(f"{col}: {len(outliers)} outliers ({len(outliers)/len(df)*100:.1f}%)")

# Method 2: Z-score
from scipy import stats
z_scores = np.abs(stats.zscore(df.select_dtypes('number')))
outlier_rows = (z_scores > 3).any(axis=1)
print(f"Rows with Z>3 outliers: {outlier_rows.sum()}")

# Handling strategy:
# - Yield outliers (>3σ): investigate, likely data entry errors → remove
# - Rainfall extremes: keep (real weather events)
# - N_kg outliers: cap at 99th percentile (winsorization)
df['N_kg_ha'] = df['N_kg_ha'].clip(upper=df['N_kg_ha'].quantile(0.99))</code></pre>

<h4>4. Key Insights & Recommendations (2 marks)</h4>
<table class="hot-table"><thead><tr><th>Insight</th><th>Action for Model Building</th></tr></thead>
<tbody>
<tr><td>Rainfall has strongest correlation (0.82)</td><td>Must-include feature; consider polynomial terms</td></tr>
<tr><td>Temperature negatively correlated (-0.45)</td><td>Include; may need interaction term with crop_stage</td></tr>
<tr><td>N_kg right-skewed (skew=1.2)</td><td>Apply log transform before training</td></tr>
<tr><td>2.3% missing values in soil_OC</td><td>Impute with median (robust to outliers)</td></tr>
<tr><td>15 outlier rows detected</td><td>Remove 5 data-entry errors, keep 10 genuine extremes</td></tr>
<tr><td>Multicollinearity: rainfall↔humidity (0.78)</td><td>Drop humidity or use PCA to reduce</td></tr>
</tbody></table>`
        },
        {
            id: "u4-q5",
            topicId: "m4-t12",
            topicTitle: "Feature Engineering for Project",
            question: "Explain feature engineering techniques for agricultural ML projects. For a 'Crop Yield Prediction' model, demonstrate: (a) creating domain-specific features from raw data, (b) encoding categorical variables (crop type, soil type, season), (c) feature scaling (standardization vs normalization) with justification, and (d) feature selection using correlation analysis and mutual information.",
            marks: 10,
            scheme: [
                { points: 3, description: "Domain-specific feature creation with agricultural rationale" },
                { points: 2, description: "Categorical encoding (one-hot, label, target encoding) with code" },
                { points: 2, description: "Feature scaling methods with when-to-use justification" },
                { points: 3, description: "Feature selection using correlation and mutual information with code" }
            ],
            solution: `<h4>1. Domain-Specific Feature Creation (3 marks)</h4>
<pre><code>import pandas as pd
import numpy as np

# Raw features: rainfall_mm, temp_C, humidity, N_kg, P_kg, K_kg,
#               sowing_date, harvest_date, soil_pH

# Feature 1: Growing Degree Days (GDD)
# GDD = max(0, (T_max + T_min)/2 - T_base), T_base=10°C for rice
df['GDD'] = np.maximum(0, df['temp_C'] - 10)

# Feature 2: NPK Ratio (agronomic balance)
df['NPK_ratio'] = df['N_kg'] / (df['P_kg'] + df['K_kg'] + 1)

# Feature 3: Crop Duration (days)
df['crop_duration'] = (pd.to_datetime(df['harvest_date']) -
                       pd.to_datetime(df['sowing_date'])).dt.days

# Feature 4: Water Use Efficiency proxy
df['rain_per_day'] = df['rainfall_mm'] / df['crop_duration']

# Feature 5: Soil acidity category
df['pH_category'] = pd.cut(df['soil_pH'],
    bins=[0, 5.5, 6.5, 7.5, 14],
    labels=['Acidic', 'Slightly_Acidic', 'Neutral', 'Alkaline'])

# Feature 6: Interaction term
df['rain_x_temp'] = df['rainfall_mm'] * df['temp_C']
print(f"Features: {df.shape[1]} (added 6 engineered features)")</code></pre>

<h4>2. Categorical Encoding (2 marks)</h4>
<pre><code># One-Hot Encoding (nominal categories, no order)
df_encoded = pd.get_dummies(df, columns=['crop_type', 'soil_type'],
                            drop_first=True)  # drop_first avoids multicollinearity

# Label Encoding (ordinal categories)
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
df['season_encoded'] = le.fit_transform(df['season'])
# Kharif→0, Rabi→1, Summer→2

# Target Encoding (high-cardinality: district with 50+ values)
district_means = df.groupby('district')['yield_t_ha'].mean()
df['district_encoded'] = df['district'].map(district_means)
# Each district replaced by its mean yield → captures district effect</code></pre>

<h4>3. Feature Scaling (2 marks)</h4>
<pre><code>from sklearn.preprocessing import StandardScaler, MinMaxScaler

# Standardization (Z-score): mean=0, std=1
# USE WHEN: Algorithm uses distance (KNN, SVM) or gradient (Neural Net)
scaler_std = StandardScaler()
X_std = scaler_std.fit_transform(df[['rainfall_mm', 'temp_C', 'N_kg']])
# z = (x - μ) / σ → handles outliers better

# Normalization (Min-Max): range [0, 1]
# USE WHEN: Features need bounded range (Neural Networks with sigmoid)
scaler_mm = MinMaxScaler()
X_norm = scaler_mm.fit_transform(df[['rainfall_mm', 'temp_C', 'N_kg']])
# x_norm = (x - min) / (max - min)

# NO SCALING NEEDED: Tree-based models (RF, XGBoost, Decision Tree)
# They split on thresholds, scale-invariant</code></pre>

<h4>4. Feature Selection (3 marks)</h4>
<pre><code># Method 1: Correlation-based (remove highly correlated pairs)
corr_matrix = df.select_dtypes('number').corr().abs()
upper_tri = corr_matrix.where(np.triu(np.ones_like(corr_matrix, dtype=bool), k=1))
high_corr = [(col, row) for col in upper_tri.columns
             for row in upper_tri.index
             if upper_tri.loc[row, col] > 0.85]
print("Highly correlated pairs:", high_corr)
# Drop one from each pair (keep the one with higher target correlation)

# Method 2: Mutual Information (captures non-linear relationships)
from sklearn.feature_selection import mutual_info_regression
X = df.drop('yield_t_ha', axis=1).select_dtypes('number')
y = df['yield_t_ha']
mi_scores = mutual_info_regression(X, y, random_state=42)
mi_df = pd.DataFrame({'Feature': X.columns, 'MI_Score': mi_scores})
mi_df = mi_df.sort_values('MI_Score', ascending=False)
print(mi_df)
# Select top features where MI > 0.1 (meaningful information)

# Final feature set: top 8 features by MI score
selected = mi_df[mi_df['MI_Score'] > 0.1]['Feature'].tolist()
print(f"Selected {len(selected)} features: {selected}")</code></pre>`
        },
        {
            id: "u4-q6",
            topicId: "m4-t13",
            topicTitle: "Algorithm Selection Justification",
            question: "For a 'Plant Disease Classification' project with 3000 labeled leaf images (5 classes), justify the selection of an appropriate ML algorithm. Compare: (a) at least 4 candidate algorithms with pros/cons, (b) selection criteria (accuracy, speed, interpretability, data size), (c) baseline model vs advanced model approach, and (d) provide a decision flowchart for algorithm selection in agricultural ML projects.",
            marks: 10,
            scheme: [
                { points: 3, description: "Comparison of 4+ algorithms with pros, cons, and suitability" },
                { points: 2, description: "Selection criteria matrix with weighted scoring" },
                { points: 3, description: "Baseline vs advanced model strategy with code" },
                { points: 2, description: "Decision flowchart for algorithm selection" }
            ],
            solution: `<h4>1. Algorithm Comparison (3 marks)</h4>
<table class="hot-table"><thead><tr><th>Algorithm</th><th>Pros</th><th>Cons</th><th>Suitability</th></tr></thead>
<tbody>
<tr><td>Random Forest</td><td>Handles tabular features well, interpretable, no scaling needed</td><td>Not ideal for raw images, limited spatial understanding</td><td>Medium (if using extracted features)</td></tr>
<tr><td>SVM (RBF kernel)</td><td>Good with small datasets, effective in high dimensions</td><td>Slow on large data, needs feature extraction from images</td><td>Medium</td></tr>
<tr><td>CNN (Custom)</td><td>Learns spatial features automatically, state-of-art for images</td><td>Needs large data (>10K), long training, GPU required</td><td>High (with augmentation)</td></tr>
<tr><td>Transfer Learning (MobileNet)</td><td>Pre-trained on ImageNet, works with small data, fast fine-tuning</td><td>May not capture domain-specific features perfectly</td><td>Very High ✓</td></tr>
<tr><td>KNN</td><td>Simple, no training phase</td><td>Slow inference, poor with high-dim image data</td><td>Low</td></tr>
</tbody></table>

<h4>2. Selection Criteria Matrix (2 marks)</h4>
<table class="hot-table"><thead><tr><th>Criterion (Weight)</th><th>Random Forest</th><th>SVM</th><th>Custom CNN</th><th>MobileNet TL</th></tr></thead>
<tbody>
<tr><td>Accuracy (0.35)</td><td>7</td><td>7</td><td>9</td><td>9</td></tr>
<tr><td>Training Speed (0.15)</td><td>8</td><td>6</td><td>4</td><td>8</td></tr>
<tr><td>Data Efficiency (0.25)</td><td>6</td><td>7</td><td>4</td><td>9</td></tr>
<tr><td>Interpretability (0.10)</td><td>9</td><td>5</td><td>3</td><td>5</td></tr>
<tr><td>Deployment Size (0.15)</td><td>7</td><td>7</td><td>5</td><td>8</td></tr>
<tr><td><strong>Weighted Score</strong></td><td><strong>7.15</strong></td><td><strong>6.60</strong></td><td><strong>5.55</strong></td><td><strong>8.20 ✓</strong></td></tr>
</tbody></table>
<p><strong>Winner: MobileNet Transfer Learning</strong> — best balance of accuracy, data efficiency (works with 3000 images), and mobile deployment size.</p>

<h4>3. Baseline vs Advanced Model (3 marks)</h4>
<pre><code># STEP 1: Baseline Model (simple, fast, sets minimum bar)
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Using extracted features (color histograms, texture)
rf_baseline = RandomForestClassifier(n_estimators=100, random_state=42)
rf_baseline.fit(X_train_features, y_train)
y_pred_base = rf_baseline.predict(X_test_features)
print("Baseline (RF on features):")
print(classification_report(y_test, y_pred_base))
# Expected: ~72% accuracy

# STEP 2: Advanced Model (Transfer Learning)
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2

base_model = MobileNetV2(weights='imagenet', include_top=False,
                          input_shape=(224, 224, 3))
base_model.trainable = False  # Freeze pre-trained layers

model = tf.keras.Sequential([
    base_model,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(5, activation='softmax')  # 5 disease classes
])
model.compile(optimizer='adam', loss='categorical_crossentropy',
              metrics=['accuracy'])
# Expected: ~91% accuracy (significant improvement over baseline)</code></pre>

<h4>4. Algorithm Selection Flowchart (2 marks)</h4>
<pre><code># Decision Flowchart for Agricultural ML:
#
# START → Is data tabular or image?
#   ├─ TABULAR → Sample size?
#   │    ├─ < 1000 → Try: Logistic Reg → Random Forest → SVM
#   │    └─ > 1000 → Try: Random Forest → XGBoost → Neural Net
#   │
#   └─ IMAGE → Sample size?
#        ├─ < 5000 → Transfer Learning (MobileNet/ResNet)
#        └─ > 5000 → Custom CNN or Fine-tuned Transfer Learning
#
# ALWAYS: Start with simple baseline → compare → justify upgrade
# CONSIDER: Deployment constraints (mobile → MobileNet, server → ResNet)
# AGRICULTURE-SPECIFIC: Prefer interpretable models when farmer trust matters</code></pre>`
        },
        {
            id: "u4-q7",
            topicId: "m4-t14",
            topicTitle: "Model Development and Training",
            question: "Describe the end-to-end model development and training process for a 'Crop Yield Prediction' regression model. Demonstrate: (a) data pipeline setup (loading, splitting, preprocessing), (b) model architecture selection and implementation, (c) training loop with loss monitoring and early stopping, and (d) model serialization (saving/loading) for deployment.",
            marks: 10,
            scheme: [
                { points: 2, description: "Data pipeline with preprocessing and train/test split" },
                { points: 3, description: "Model implementation with scikit-learn Pipeline" },
                { points: 3, description: "Training with cross-validation, loss monitoring, early stopping" },
                { points: 2, description: "Model saving (joblib/pickle) and loading with version tracking" }
            ],
            solution: `<h4>1. Data Pipeline (2 marks)</h4>
<pre><code>import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

# Load and inspect
df = pd.read_csv("karnataka_crop_data.csv")
print(f"Shape: {df.shape}, Target: yield_t_ha")

# Separate features and target
X = df.drop(['yield_t_ha', 'plot_id', 'farmer_name'], axis=1)
y = df['yield_t_ha']

# Handle categorical columns
X = pd.get_dummies(X, columns=['crop', 'season', 'soil_type'], drop_first=True)

# Split: 80% train, 20% test (stratify not needed for regression)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)
print(f"Train: {X_train.shape}, Test: {X_test.shape}")</code></pre>

<h4>2. Model Implementation with Pipeline (3 marks)</h4>
<pre><code>from sklearn.pipeline import Pipeline
from sklearn.ensemble import GradientBoostingRegressor

# Pipeline ensures preprocessing + model are bundled together
pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler()),
    ('model', GradientBoostingRegressor(
        n_estimators=200,
        learning_rate=0.1,
        max_depth=4,
        subsample=0.8,
        random_state=42
    ))
])

# Why GradientBoosting?
# - Handles non-linear relationships (rainfall↔yield)
# - Built-in feature importance
# - Robust to outliers with subsample < 1.0
# - Good performance on tabular agricultural data</code></pre>

<h4>3. Training with CV and Early Stopping (3 marks)</h4>
<pre><code>from sklearn.model_selection import cross_val_score
from sklearn.metrics import mean_squared_error, r2_score

# Cross-validation (5-fold)
cv_scores = cross_val_score(pipeline, X_train, y_train,
                            cv=5, scoring='r2')
print(f"CV R² scores: {cv_scores.round(3)}")
print(f"Mean CV R²: {cv_scores.mean():.3f} ± {cv_scores.std():.3f}")

# Train final model
pipeline.fit(X_train, y_train)

# Evaluate on test set
y_pred = pipeline.predict(X_test)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)
mae = np.mean(np.abs(y_test - y_pred))
print(f"Test RMSE: {rmse:.3f} t/ha")
print(f"Test R²:   {r2:.3f}")
print(f"Test MAE:  {mae:.3f} t/ha")

# Early stopping (for iterative models)
from sklearn.ensemble import GradientBoostingRegressor
model_es = GradientBoostingRegressor(
    n_estimators=500, validation_fraction=0.15,
    n_iter_no_change=20, tol=0.001, random_state=42)
# Stops training when validation score doesn't improve for 20 rounds</code></pre>

<h4>4. Model Serialization (2 marks)</h4>
<pre><code>import joblib
from datetime import datetime

# Save model with version info
version = datetime.now().strftime("%Y%m%d_%H%M")
model_path = f"models/yield_predictor_v{version}.joblib"
joblib.dump(pipeline, model_path)
print(f"Model saved: {model_path}")

# Save metadata
metadata = {
    "version": version,
    "algorithm": "GradientBoostingRegressor",
    "features": list(X_train.columns),
    "metrics": {"rmse": rmse, "r2": r2, "mae": mae},
    "cv_r2_mean": cv_scores.mean(),
    "train_samples": len(X_train)
}
import json
with open(f"models/metadata_v{version}.json", "w") as f:
    json.dump(metadata, f, indent=2)

# Load model for inference
loaded_pipeline = joblib.load(model_path)
sample_pred = loaded_pipeline.predict(X_test[:3])
print(f"Sample predictions: {sample_pred.round(2)}")</code></pre>`
        },
        {
            id: "u4-q8",
            topicId: "m4-t17",
            topicTitle: "Performance Metrics Analysis",
            question: "Explain performance metrics for evaluating ML models in agricultural applications. For both classification (disease detection) and regression (yield prediction) tasks, demonstrate: (a) appropriate metric selection with justification, (b) confusion matrix analysis with precision, recall, F1-score, (c) regression metrics (RMSE, MAE, R², MAPE), and (d) interpreting metrics in agricultural decision-making context.",
            marks: 10,
            scheme: [
                { points: 2, description: "Metric selection rationale for classification vs regression" },
                { points: 3, description: "Confusion matrix with precision, recall, F1 computation and code" },
                { points: 3, description: "Regression metrics computation with interpretation" },
                { points: 2, description: "Agricultural context interpretation and decision thresholds" }
            ],
            solution: `<h4>1. Metric Selection Rationale (2 marks)</h4>
<table class="hot-table"><thead><tr><th>Task</th><th>Primary Metric</th><th>Why</th><th>Secondary</th></tr></thead>
<tbody>
<tr><td>Disease Detection</td><td>Recall (Sensitivity)</td><td>Missing a disease (FN) is costlier than false alarm (FP)</td><td>F1-Score, AUC-ROC</td></tr>
<tr><td>Yield Prediction</td><td>RMSE</td><td>Penalizes large errors more (important for planning)</td><td>R², MAPE</td></tr>
<tr><td>Soil Classification</td><td>Macro F1-Score</td><td>Balanced metric across imbalanced classes</td><td>Per-class recall</td></tr>
<tr><td>Irrigation Advisory</td><td>MAE</td><td>Average error in mm/day directly interpretable</td><td>R², RMSE</td></tr>
</tbody></table>

<h4>2. Confusion Matrix Analysis (3 marks)</h4>
<pre><code>from sklearn.metrics import (confusion_matrix, classification_report,
                              ConfusionMatrixDisplay)
import matplotlib.pyplot as plt

# Disease detection: 5 classes
classes = ['Healthy', 'Blight', 'Rust', 'Mildew', 'Spot']
y_true = [...]  # actual labels
y_pred = [...]  # predicted labels

# Confusion Matrix
cm = confusion_matrix(y_true, y_pred, labels=classes)
disp = ConfusionMatrixDisplay(cm, display_labels=classes)
disp.plot(cmap='Greens', values_format='d')
plt.title('Disease Classification Confusion Matrix')
plt.show()

# Detailed report
report = classification_report(y_true, y_pred, target_names=classes,
                                output_dict=True)
print(classification_report(y_true, y_pred, target_names=classes))

# Manual calculation for 'Blight' class:
# TP=45, FP=5, FN=8, TN=242
TP, FP, FN = 45, 5, 8
precision = TP / (TP + FP)      # 45/50 = 0.90
recall    = TP / (TP + FN)      # 45/53 = 0.849
f1        = 2*precision*recall / (precision+recall)  # 0.874
print(f"Blight → Precision: {precision:.3f}, Recall: {recall:.3f}, F1: {f1:.3f}")
# Recall < 0.90 → 15% of Blight cases missed → needs improvement</code></pre>

<h4>3. Regression Metrics (3 marks)</h4>
<pre><code>from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

y_true_yield = np.array([4.2, 5.1, 3.8, 5.5, 4.0, 6.2, 3.5, 5.8])
y_pred_yield = np.array([4.0, 5.3, 3.5, 5.2, 4.2, 5.9, 3.8, 5.5])

# RMSE: Root Mean Squared Error (penalizes large errors)
rmse = np.sqrt(mean_squared_error(y_true_yield, y_pred_yield))
print(f"RMSE: {rmse:.3f} t/ha")  # 0.274 t/ha

# MAE: Mean Absolute Error (average error magnitude)
mae = mean_absolute_error(y_true_yield, y_pred_yield)
print(f"MAE: {mae:.3f} t/ha")   # 0.250 t/ha

# R²: Coefficient of Determination (variance explained)
r2 = r2_score(y_true_yield, y_pred_yield)
print(f"R²: {r2:.3f}")          # 0.94 → 94% variance explained

# MAPE: Mean Absolute Percentage Error
mape = np.mean(np.abs((y_true_yield - y_pred_yield) / y_true_yield)) * 100
print(f"MAPE: {mape:.1f}%")     # 5.2% → excellent for agriculture</code></pre>

<h4>4. Agricultural Decision Context (2 marks)</h4>
<table class="hot-table"><thead><tr><th>Metric Value</th><th>Agricultural Interpretation</th><th>Decision</th></tr></thead>
<tbody>
<tr><td>Disease Recall = 0.85</td><td>15% of diseased plants missed</td><td>Unacceptable for early warning; target ≥0.95</td></tr>
<tr><td>Yield RMSE = 0.27 t/ha</td><td>Predictions off by ~270 kg/ha on average</td><td>Acceptable for planning (within 5% of mean yield)</td></tr>
<tr><td>Yield R² = 0.94</td><td>Model explains 94% of yield variation</td><td>Strong model; ready for advisory deployment</td></tr>
<tr><td>Irrigation MAE = 0.8 mm/day</td><td>Water recommendation off by 0.8mm</td><td>Good for drip systems (tolerance ±1mm)</td></tr>
<tr><td>Soil F1 = 0.72 (Poor class)</td><td>28% of poor soils misclassified</td><td>Risk of wrong fertilizer advice; needs more Poor samples</td></tr>
</tbody></table>`
        },
        {
            id: "u4-q9",
            topicId: "m4-t21",
            topicTitle: "API Development and Testing",
            question: "Design and implement a REST API for serving an agricultural ML model (crop disease classifier). Demonstrate: (a) API architecture with endpoint design, (b) Flask/FastAPI implementation for image upload and prediction, (c) input validation and error handling, and (d) API testing strategy with sample test cases.",
            marks: 10,
            scheme: [
                { points: 2, description: "API architecture: endpoints, methods, request/response format" },
                { points: 3, description: "FastAPI implementation with image upload and model inference" },
                { points: 3, description: "Input validation, error handling, and response codes" },
                { points: 2, description: "Testing strategy with unit tests and integration tests" }
            ],
            solution: `<h4>1. API Architecture (2 marks)</h4>
<table class="hot-table"><thead><tr><th>Endpoint</th><th>Method</th><th>Description</th><th>Request</th><th>Response</th></tr></thead>
<tbody>
<tr><td>/predict</td><td>POST</td><td>Classify disease from leaf image</td><td>multipart/form-data (image)</td><td>JSON: class, confidence, recommendations</td></tr>
<tr><td>/health</td><td>GET</td><td>API health check</td><td>None</td><td>JSON: status, model_version, uptime</td></tr>
<tr><td>/classes</td><td>GET</td><td>List supported disease classes</td><td>None</td><td>JSON: array of class names</td></tr>
<tr><td>/history</td><td>GET</td><td>Recent predictions</td><td>?limit=10</td><td>JSON: array of past predictions</td></tr>
</tbody></table>

<h4>2. FastAPI Implementation (3 marks)</h4>
<pre><code>from fastapi import FastAPI, UploadFile, File, HTTPException
from PIL import Image
import numpy as np
import tensorflow as tf
import io, time

app = FastAPI(title="Crop Disease Classifier API", version="1.0")

# Load model at startup
model = tf.keras.models.load_model("models/disease_mobilenet_v1.h5")
CLASS_NAMES = ["Healthy", "Bacterial_Blight", "Leaf_Rust",
               "Powdery_Mildew", "Leaf_Spot"]
IMG_SIZE = (224, 224)

def preprocess_image(image_bytes):
    """Convert uploaded bytes to model-ready tensor."""
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = img.resize(IMG_SIZE)
    arr = np.array(img) / 255.0  # Normalize to [0,1]
    return np.expand_dims(arr, axis=0)  # Add batch dim: (1,224,224,3)

@app.post("/predict")
async def predict_disease(file: UploadFile = File(...)):
    # Read image
    contents = await file.read()
    tensor = preprocess_image(contents)

    # Inference
    start = time.time()
    predictions = model.predict(tensor)[0]
    inference_time = time.time() - start

    # Results
    class_idx = int(np.argmax(predictions))
    confidence = float(predictions[class_idx])

    return {
        "prediction": CLASS_NAMES[class_idx],
        "confidence": round(confidence, 4),
        "all_probabilities": {c: round(float(p), 4)
                              for c, p in zip(CLASS_NAMES, predictions)},
        "inference_time_ms": round(inference_time * 1000, 1),
        "model_version": "1.0"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy", "model_loaded": model is not None}</code></pre>

<h4>3. Input Validation & Error Handling (3 marks)</h4>
<pre><code>ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"]
MAX_SIZE_MB = 10

@app.post("/predict")
async def predict_disease(file: UploadFile = File(...)):
    # Validate file type
    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(status_code=400,
            detail=f"Invalid file type: {file.content_type}. "
                   f"Allowed: {ALLOWED_TYPES}")

    # Validate file size
    contents = await file.read()
    if len(contents) > MAX_SIZE_MB * 1024 * 1024:
        raise HTTPException(status_code=413,
            detail=f"File too large. Max: {MAX_SIZE_MB}MB")

    # Validate image can be opened
    try:
        tensor = preprocess_image(contents)
    except Exception as e:
        raise HTTPException(status_code=422,
            detail=f"Cannot process image: {str(e)}")

    # Confidence threshold warning
    predictions = model.predict(tensor)[0]
    class_idx = int(np.argmax(predictions))
    confidence = float(predictions[class_idx])

    result = {
        "prediction": CLASS_NAMES[class_idx],
        "confidence": round(confidence, 4)
    }
    if confidence < 0.6:
        result["warning"] = "Low confidence. Image may be unclear or show an unsupported disease."

    return result

# Global exception handler
@app.exception_handler(Exception)
async def global_handler(request, exc):
    return JSONResponse(status_code=500,
        content={"error": "Internal server error", "detail": str(exc)})</code></pre>

<h4>4. Testing Strategy (2 marks)</h4>
<pre><code>import pytest
from fastapi.testclient import TestClient

client = TestClient(app)

def test_health_endpoint():
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json()["status"] == "healthy"

def test_predict_valid_image():
    with open("test_images/healthy_leaf.jpg", "rb") as f:
        resp = client.post("/predict", files={"file": ("leaf.jpg", f, "image/jpeg")})
    assert resp.status_code == 200
    assert resp.json()["prediction"] in CLASS_NAMES
    assert 0 <= resp.json()["confidence"] <= 1

def test_predict_invalid_file_type():
    resp = client.post("/predict",
        files={"file": ("doc.pdf", b"fake", "application/pdf")})
    assert resp.status_code == 400

def test_predict_corrupted_image():
    resp = client.post("/predict",
        files={"file": ("bad.jpg", b"not_an_image", "image/jpeg")})
    assert resp.status_code == 422

# Run: pytest test_api.py -v</code></pre>`
        },
        {
            id: "u4-q10",
            topicId: "m4-t23",
            topicTitle: "Project Documentation Preparation",
            question: "Explain the importance of documentation in AI/ML projects. For an agricultural ML capstone project, prepare: (a) a project README structure with all essential sections, (b) code documentation standards (docstrings, type hints, inline comments), (c) a model card describing the trained model's capabilities and limitations, and (d) a user guide for non-technical stakeholders (farmers/extension officers).",
            marks: 10,
            scheme: [
                { points: 2, description: "README structure with all essential sections for ML project" },
                { points: 3, description: "Code documentation: docstrings, type hints, examples" },
                { points: 3, description: "Model card with performance, limitations, ethical considerations" },
                { points: 2, description: "Non-technical user guide with screenshots/workflow description" }
            ],
            solution: `<h4>1. Project README Structure (2 marks)</h4>
<pre><code># Crop Disease Detection System
## 🌾 Overview
AI-powered mobile app for identifying plant diseases from leaf images.
Supports 10 diseases across rice, tomato, and maize.

## 📋 Table of Contents
1. Features | 2. Installation | 3. Usage | 4. Model Details
5. Dataset | 6. Results | 7. API Docs | 8. Contributing | 9. License

## ⚡ Features
- Real-time disease classification from camera/gallery images
- 91.2% accuracy across 5 disease classes
- Treatment recommendations in English and Kannada
- Offline inference (no internet required)

## 🔧 Installation
\`\`\`bash
git clone https://github.com/user/crop-disease-detector.git
pip install -r requirements.txt
python app.py
\`\`\`

## 📊 Results
| Metric    | Value  |
|-----------|--------|
| Accuracy  | 91.2%  |
| F1-Score  | 0.89   |
| Inference | 120ms  |

## 📁 Project Structure
├── data/          # Dataset and preprocessing
├── models/        # Trained model files
├── src/           # Source code
├── tests/         # Unit tests
├── docs/          # Documentation
└── README.md</code></pre>

<h4>2. Code Documentation Standards (3 marks)</h4>
<pre><code>from typing import Tuple, List, Optional
import numpy as np

def preprocess_leaf_image(
    image_path: str,
    target_size: Tuple[int, int] = (224, 224),
    normalize: bool = True
) -> np.ndarray:
    """
    Preprocess a leaf image for disease classification model.

    Loads an image, resizes to target dimensions, and optionally
    normalizes pixel values to [0, 1] range.

    Args:
        image_path: Path to the leaf image file (JPEG/PNG).
        target_size: Output dimensions (height, width). Default (224, 224)
                     matches MobileNetV2 input requirements.
        normalize: If True, scale pixel values from [0,255] to [0,1].

    Returns:
        np.ndarray: Preprocessed image array of shape (1, H, W, 3).

    Raises:
        FileNotFoundError: If image_path does not exist.
        ValueError: If image cannot be decoded.

    Example:
        >>> tensor = preprocess_leaf_image("leaf_sample.jpg")
        >>> print(tensor.shape)  # (1, 224, 224, 3)
        >>> print(tensor.max())  # 1.0 (if normalized)
    """
    from PIL import Image
    # Load and convert to RGB (handles grayscale/RGBA)
    img = Image.open(image_path).convert("RGB")
    img = img.resize(target_size)  # Bilinear interpolation
    arr = np.array(img, dtype=np.float32)
    if normalize:
        arr /= 255.0  # Scale to [0, 1] for neural network input
    return np.expand_dims(arr, axis=0)  # Add batch dimension</code></pre>

<h4>3. Model Card (3 marks)</h4>
<pre><code># MODEL CARD: Crop Disease Classifier v1.0

## Model Details
- Architecture: MobileNetV2 (transfer learning from ImageNet)
- Framework: TensorFlow 2.12
- Training data: 3,000 labeled leaf images (PlantVillage + local)
- Fine-tuned layers: Last 20 layers + custom classification head

## Intended Use
- Primary: Identify 5 disease classes from smartphone leaf photos
- Users: Farmers, agricultural extension officers, researchers
- NOT intended for: Soil-borne diseases, nutrient deficiency diagnosis

## Performance
| Class          | Precision | Recall | F1    | Support |
|----------------|-----------|--------|-------|---------|
| Healthy        | 0.94      | 0.96   | 0.95  | 200     |
| Bacterial Blight| 0.90     | 0.85   | 0.87  | 150     |
| Leaf Rust      | 0.88      | 0.91   | 0.89  | 130     |
| Powdery Mildew | 0.86      | 0.83   | 0.84  | 120     |
| Leaf Spot      | 0.91      | 0.88   | 0.89  | 100     |

## Limitations
- Trained on PlantVillage (lab conditions); field accuracy may be lower
- Poor performance on images with multiple diseases on same leaf
- Not tested on crops beyond rice, tomato, maize
- Requires clear, well-lit leaf photos (blurry images reduce accuracy)

## Ethical Considerations
- Misclassification could lead to wrong pesticide application
- Should be used as advisory tool, not sole decision-maker
- Farmers should consult extension officers for critical decisions</code></pre>

<h4>4. Non-Technical User Guide (2 marks)</h4>
<pre><code># 🌿 User Guide: Crop Disease Detector App

## How to Use (3 Simple Steps):

### Step 1: Take a Photo
- Open the app and tap the camera icon
- Hold your phone 15-20 cm from the affected leaf
- Ensure good lighting (natural daylight is best)
- Capture the leaf clearly against a plain background

### Step 2: Get Results
- The app analyzes the image in 2-3 seconds
- You will see:
  ✅ Disease name (or "Healthy" if no disease)
  📊 Confidence level (higher = more certain)
  💊 Recommended treatment

### Step 3: Take Action
- Follow the treatment recommendation
- If confidence is below 60%, take another clearer photo
- For severe cases, contact your local Krishi Vigyan Kendra

## Tips for Best Results:
- Photograph individual leaves, not the whole plant
- Avoid shadows on the leaf
- Clean the camera lens before use
- Works offline — no internet needed!</code></pre>`
        }
    ]
};
