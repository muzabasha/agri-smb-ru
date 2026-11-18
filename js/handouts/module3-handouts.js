// Module 3 Comprehensive Handouts - AI/ML Applications in Agriculture
// Crop Prediction, Disease Detection, Soil Analysis, Weather Forecasting

const module3Handouts = {
    'm3-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Feature Engineering for Agricultural Data</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create meaningful features from raw agricultural data</li>
                    <li>Apply scaling and normalization techniques</li>
                    <li>Encode categorical variables effectively</li>
                    <li>Handle temporal and spatial features</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Feature Engineering = Preparing Ingredients Before Cooking</strong></p>
                    <p>Raw ingredients (data) need to be washed, chopped, and prepared. Similarly, raw farm data needs transformation to become useful for ML "recipes"!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder

# === CREATING FEATURES ===
print("=== Feature Engineering ===")

# Raw farm data
data = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=100, freq='D'),
    'temperature': np.random.uniform(20, 38, 100),
    'humidity': np.random.uniform(40, 90, 100),
    'rainfall': np.random.uniform(0, 50, 100),
    'crop_type': np.random.choice(['wheat', 'rice', 'cotton'], 100),
    'soil_type': np.random.choice(['clay', 'loamy', 'sandy'], 100)
})

# Create temporal features
print("Creating temporal features...")
data['month'] = data['date'].dt.month
data['day_of_year'] = data['date'].dt.dayofyear
data['is_monsoon'] = data['month'].isin([6, 7, 8, 9]).astype(int)

# Create aggregated features
print("Creating aggregated features...")
data['temp_humidity_ratio'] = data['temperature'] / data['humidity']
data['heat_index'] = 0.5 * (data['temperature'] + 61 + 
                            (data['temperature'] - 68) * 1.2)

# === SCALING ===
print("\\n=== Scaling Numerical Features ===")
scaler = StandardScaler()
numerical_cols = ['temperature', 'humidity', 'rainfall']
data[['temp_scaled', 'humidity_scaled', 'rain_scaled']] = scaler.fit_transform(
    data[numerical_cols]
)
print(f"Scaled temperature mean: {data['temp_scaled'].mean():.4f}")
print(f"Scaled temperature std: {data['temp_scaled'].std():.4f}")

# === ENCODING CATEGORICAL ===
print("\\n=== Encoding Categorical Variables ===")

# Label encoding (for ordinal)
le = LabelEncoder()
data['crop_encoded'] = le.fit_transform(data['crop_type'])
print(f"Crop encoding: {dict(zip(le.classes_, range(len(le.classes_))))}")

# One-hot encoding (for nominal)
soil_dummies = pd.get_dummies(data['soil_type'], prefix='soil')
data = pd.concat([data, soil_dummies], axis=1)
print(f"\\nOne-hot columns: {soil_dummies.columns.tolist()}")

print(f"\\nFinal feature count: {len(data.columns)}")
print(data.head())
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
                            <h3>Live Agro-Meteorological Feature Engineering: GDD, CWSI &amp; Rolling Rain Lags</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates live in Google Colab on the projector:</p>
                            <ul>
                                <li>Ingests raw hourly weather station records and computes Growing Degree Days ($GDD = \max(0, \frac{T_{max} + T_{min}}{2} - T_{base})$ with $T_{base} = 10^\circ\text{C}$ for maize).</li>
                                <li>Constructs cumulative rainfall deficit and rolling 7-day Crop Water Stress Index (CWSI).</li>
                                <li>Applies <code>ColumnTransformer</code> with <code>RobustScaler</code> on skewed micro-climate measurements and <code>OneHotEncoder</code> on soil texture categories.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script generating domain-engineered agronomic features with before/after correlation heatmaps.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agronomic Domain Feature Engineering &amp; Leakage Prevention Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on designing predictive features without future information leakage:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"If we predict wheat yield at harvest using seasonal weather, why will a simple full-season average rainfall feature introduce lookahead leakage, and how do we engineer stage-specific (vegetative, anthesis, grain-filling) windows?"</em></li>
                                <li><strong>Collaborative Architecture:</strong> Faculty and students formulate physiological crop-growth phase windows, testing moving window aggregations against known phenological stages.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Phenology-Aligned Agricultural Feature Matrix specification document.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The Feature Engineering Yield Prediction Hackathon Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive raw farm data (temperature, humidity, precipitation, fertilizer dates, soil type):</p>
                            <ul>
                                <li><strong>Task 1:</strong> Create at least 5 new agronomic features (e.g., vapor pressure deficit, dry spell duration, fertilizer-to-rainfall ratio).</li>
                                <li><strong>Task 2:</strong> Train a baseline <code>RandomForestRegressor</code> and compare $R^2$ before vs after feature engineering.</li>
                                <li><strong>Peer Audit:</strong> Teams exchange feature engineering code to audit whether any features caused multicollinearity or target leakage.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A feature engineering dossier with feature importance rankings and validation score lift tables.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Calculate GDD and Water Availability Index in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent feature engineering pipeline:</p>
                            <ul>
                                <li>Load a 90-day daily weather record with $T_{max}$, $T_{min}$, and rainfall.</li>
                                <li>Compute daily GDD using $T_{base} = 10^\circ\text{C}$ and cumulative GDD over the season.</li>
                                <li>Calculate a 10-day rolling sum of rainfall and an indicator for dry spells (consecutive days without rain &gt; 5).</li>
                                <li>Scale all engineered numerical features using <code>StandardScaler</code> and print a summary table.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating engineered phenological features with verification plots.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why do we scale features before training ML models?</p>
                    <ul>
                        <li>A) To make data look prettier</li>
                        <li>B) To ensure all features contribute equally</li>
                        <li>C) To reduce file size</li>
                        <li>D) It's optional and rarely needed</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Scaling ensures features with different ranges contribute equally, preventing dominance by large-value features.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Feature engineering often matters more than model choice</li>
                    <li>Create domain-specific features (GDD, heat index)</li>
                    <li>Scale numerical features with StandardScaler</li>
                    <li>One-hot encode categorical variables</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Crop Yield Prediction Models</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Build yield prediction models using Random Forest</li>
                    <li>Implement Gradient Boosting for improved accuracy</li>
                    <li>Create ensemble models for robust predictions</li>
                    <li>Interpret model predictions for farm decisions</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Yield Prediction = Harvest Crystal Ball</strong></p>
                    <p>Knowing your yield months before harvest helps with:</p>
                    <ul>
                        <li>📦 Storage planning</li>
                        <li>💰 Price negotiation</li>
                        <li>🚚 Logistics arrangement</li>
                        <li>📊 Financial planning</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# === CREATE DATASET ===
print("=== Crop Yield Prediction ===")
np.random.seed(42)
n = 500

data = pd.DataFrame({
    'rainfall': np.random.uniform(200, 600, n),
    'temperature': np.random.uniform(22, 35, n),
    'fertilizer': np.random.uniform(30, 100, n),
    'soil_ph': np.random.uniform(5.5, 7.5, n),
    'irrigation': np.random.uniform(0, 100, n),
    'pest_pressure': np.random.uniform(0, 10, n)
})

# Generate realistic yield
data['yield'] = (
    5 * data['rainfall'] +
    -20 * data['temperature'] +
    15 * data['fertilizer'] +
    100 * data['soil_ph'] +
    10 * data['irrigation'] -
    50 * data['pest_pressure'] +
    np.random.normal(0, 200, n)
)

X = data.drop('yield', axis=1)
y = data['yield']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# === RANDOM FOREST ===
print("\\n=== Random Forest Model ===")
rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

rf_pred = rf_model.predict(X_test)
rf_rmse = np.sqrt(mean_squared_error(y_test, rf_pred))
rf_r2 = r2_score(y_test, rf_pred)

print(f"RMSE: {rf_rmse:.2f}")
print(f"R² Score: {rf_r2:.4f}")

# Feature importance
print("\\nFeature Importance:")
for feat, imp in zip(X.columns, rf_model.feature_importances_):
    print(f"  {feat}: {imp:.3f}")

# === GRADIENT BOOSTING ===
print("\\n=== Gradient Boosting Model ===")
gb_model = GradientBoostingRegressor(n_estimators=100, random_state=42)
gb_model.fit(X_train, y_train)

gb_pred = gb_model.predict(X_test)
gb_rmse = np.sqrt(mean_squared_error(y_test, gb_pred))
gb_r2 = r2_score(y_test, gb_pred)

print(f"RMSE: {gb_rmse:.2f}")
print(f"R² Score: {gb_r2:.4f}")

# === ENSEMBLE (AVERAGE) ===
print("\\n=== Ensemble Prediction ===")
ensemble_pred = (rf_pred + gb_pred) / 2
ens_rmse = np.sqrt(mean_squared_error(y_test, ensemble_pred))
ens_r2 = r2_score(y_test, ensemble_pred)
print(f"Ensemble RMSE: {ens_rmse:.2f}")
print(f"Ensemble R²: {ens_r2:.4f}")

# === MAKE PREDICTION ===
print("\\n=== Predict for New Field ===")
new_field = pd.DataFrame({
    'rainfall': [350],
    'temperature': [28],
    'fertilizer': [60],
    'soil_ph': [6.8],
    'irrigation': [75],
    'pest_pressure': [2]
})

prediction = rf_model.predict(new_field)
print(f"Predicted yield: {prediction[0]:.0f} kg/ha")
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
                            <h3>Live Demonstration: Random Forest vs Gradient Boosting Yield Ensemble</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates ensemble crop yield forecasting live in Google Colab on the projector:</p>
                            <ul>
                                <li>Trains a <code>RandomForestRegressor</code> and a <code>GradientBoostingRegressor</code> on a 500-sample regional harvest dataset with weather, soil, and management inputs.</li>
                                <li>Demonstrates weighted ensemble blending: combines both models ($\hat{y} = 0.5 \hat{y}_{RF} + 0.5 \hat{y}_{GB}$) and demonstrates error variance reduction on cross-validation.</li>
                                <li>Extracts tree feature importances and partial dependence plots (PDP) for rainfall and fertilizer to show nonlinear biological yield plateaus.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook generating ensemble prediction curves and partial dependence response plots.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agronomic Ensemble Model Calibration &amp; Uncertainty Estimation Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on quantifying prediction intervals for crop yield insurance and credit underwriting:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"A farmer needs a yield forecast to secure bank credit. Why is a single point prediction (e.g., 42 quintals/ha) risky, and how do we use quantile regression forests to generate a 90% confidence prediction interval?"</em></li>
                                <li><strong>Collaborative Architecture:</strong> Faculty and students implement quantile random forests, extracting 10th and 90th percentiles to provide risk-bounded harvest forecasts.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Quantile Yield Prediction Framework with probabilistic risk confidence intervals.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The State-Level Yield Forecasting Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are tasked with predicting district-level soybean yield:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Clean, preprocess, and train competing models: ElasticNet, Random Forest, and Gradient Boosting.</li>
                                <li><strong>Task 2:</strong> Evaluate models using 5-fold spatial cross-validation and calculate RMSE, MAE, and $R^2$.</li>
                                <li><strong>Peer Audit:</strong> Teams exchange model code, challenge each other's feature sets, and test model robustness on synthetic extreme drought weather scenarios.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A district yield forecasting dossier with spatial error distribution maps and peer-evaluated rankings.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build &amp; Tune a Multi-Feature Crop Yield Predictor in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent yield prediction pipeline:</p>
                            <ul>
                                <li>Load a farm dataset with rainfall, temperature, fertilizer, soil pH, and irrigation.</li>
                                <li>Train a <code>RandomForestRegressor</code> and perform hyperparameter tuning over <code>n_estimators</code> and <code>max_depth</code>.</li>
                                <li>Print test RMSE and $R^2$ score; write a function <code>predict_yield(rainfall, temp, fert, ph, irrigation)</code> returning predicted yield in quintals/ha for new farm inputs.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating a tuned Random Forest yield model with an interactive prediction function.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is an ensemble model?</p>
                    <ul>
                        <li>A) A very large single model</li>
                        <li>B) Combination of multiple models</li>
                        <li>C) A model that only works on images</li>
                        <li>D) A model without training</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Ensemble models combine predictions from multiple models for better accuracy.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Random Forest: Many decision trees voting together</li>
                    <li>Gradient Boosting: Trees learning from previous errors</li>
                    <li>Ensemble: Combine models for robust predictions</li>
                    <li>Feature importance reveals what matters most</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t7': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Plant Disease Detection Basics</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Identify common crop diseases and symptoms</li>
                    <li>Understand visual detection methods</li>
                    <li>Learn how AI enables automated detection</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>AI Disease Detection = Expert Doctor in Your Pocket</strong></p>
                    <p>Just as you'd show a doctor your symptoms, you can show AI a photo of a sick plant. The AI has "seen" millions of diseased leaves and instantly recognizes patterns!</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Common Crop Diseases</h2>
                
                <h3>1. Leaf Diseases</h3>
                <table>
                    <tr>
                        <th>Disease</th>
                        <th>Symptoms</th>
                        <th>Crops Affected</th>
                    </tr>
                    <tr>
                        <td>Leaf Blight</td>
                        <td>Brown/yellow spots, wilting</td>
                        <td>Wheat, Rice, Tomato</td>
                    </tr>
                    <tr>
                        <td>Powdery Mildew</td>
                        <td>White powdery coating</td>
                        <td>Vegetables, Grapes</td>
                    </tr>
                    <tr>
                        <td>Rust</td>
                        <td>Orange/brown pustules</td>
                        <td>Wheat, Beans</td>
                    </tr>
                    <tr>
                        <td>Bacterial Spot</td>
                        <td>Dark water-soaked spots</td>
                        <td>Tomato, Pepper</td>
                    </tr>
                </table>

                <h3>2. How AI Detection Works</h3>
                <ol>
                    <li>📸 <strong>Capture:</strong> Take photo of affected leaf</li>
                    <li>🔍 <strong>Preprocess:</strong> Resize, normalize image</li>
                    <li>🧠 <strong>Analyze:</strong> CNN extracts visual features</li>
                    <li>📊 <strong>Classify:</strong> Match to known disease patterns</li>
                    <li>💊 <strong>Recommend:</strong> Suggest treatment</li>
                </ol>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Basic structure for disease detection pipeline

import numpy as np

# Simulated disease detection system
class SimpleDiseaseDetector:
    """Rule-based disease detection (before we learn CNNs)"""
    
    def __init__(self):
        self.diseases = {
            'healthy': {'color': 'green', 'spots': 0},
            'blight': {'color': 'brown', 'spots': 'many'},
            'rust': {'color': 'orange', 'spots': 'pustules'},
            'mildew': {'color': 'white', 'spots': 'coating'}
        }
    
    def analyze_leaf(self, dominant_color, spot_count, spot_type):
        """Simple rule-based analysis"""
        
        if dominant_color == 'green' and spot_count < 5:
            return 'healthy', 1.0
        
        if dominant_color in ['brown', 'yellow'] and spot_count > 20:
            return 'blight', 0.8
        
        if spot_type == 'pustules':
            return 'rust', 0.85
        
        if spot_type == 'powdery':
            return 'mildew', 0.9
        
        return 'unknown', 0.5
    
    def get_treatment(self, disease):
        treatments = {
            'healthy': 'No action needed',
            'blight': 'Apply fungicide, remove affected leaves',
            'rust': 'Apply sulfur-based fungicide',
            'mildew': 'Improve air circulation, apply neem oil',
            'unknown': 'Consult agricultural officer'
        }
        return treatments.get(disease, 'Unknown')

# Use the detector
detector = SimpleDiseaseDetector()

# Analyze sample leaves
samples = [
    ('green', 2, 'none'),
    ('brown', 30, 'spots'),
    ('orange', 15, 'pustules'),
    ('white', 10, 'powdery')
]

print("=== Disease Detection Results ===")
for color, spots, spot_type in samples:
    disease, confidence = detector.analyze_leaf(color, spots, spot_type)
    treatment = detector.get_treatment(disease)
    print(f"\\n🌿 Analysis:")
    print(f"   Disease: {disease} (confidence: {confidence:.0%})")
    print(f"   Treatment: {treatment}")
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
                            <h3>Live Demonstration: Visual Pathology Phenotyping &amp; Rule-Based Diagnostic System</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates visual plant pathology analysis live in Google Colab on the projector:</p>
                            <ul>
                                <li>Displays high-resolution field photos of healthy vs early blight, late blight, bacterial spot, and powdery mildew on tomato and potato leaves.</li>
                                <li>Demonstrates feature extraction: quantifies necrotic lesion ratio, chlorotic halo area, and pustule color distribution.</li>
                                <li>Live-codes an expert diagnostic decision system incorporating symptom severity scoring and outputs immediate organic and chemical advisory recommendations.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive disease diagnostic notebook projecting live symptom segmentation and severity tier classification.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Field Pathology Ground-Truthing &amp; Annotation Standard Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in establishing scientific ground-truth labeling standards for agricultural computer vision:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"When farmers upload photos taken under direct sunlight with shadows, dust, and overlapping foliage, how do we distinguish abiotic stress (sunscald, nitrogen deficiency) from biotic pathogen infections to prevent mislabeling?"</em></li>
                                <li><strong>Collaborative Formulation:</strong> Faculty and students create a standardized Pathology Labeling Protocol defining minimum image quality, symptom confirmation keys, and multi-expert consensus criteria.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A University Extension Plant Pathology Annotation Protocol document with visual symptom disambiguation rubrics.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The Field Pathology Diagnostic Tournament Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are challenged to analyze 20 unseen crop leaf anomaly cases:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Identify causal organisms (fungal, bacterial, viral, nutritional) and assign infection severity indices (Scale 1 to 5).</li>
                                <li><strong>Task 2:</strong> Formulate an integrated pest management (IPM) prescription including bio-control agents and chemical interventions.</li>
                                <li><strong>Peer Defense:</strong> Teams cross-examine each other's diagnostic dossiers, defending their diagnosis against alternative differential diagnoses.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A comprehensive crop pathology dossier with severity assessments and peer-audited treatment prescriptions.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a Rule-Based Foliar Disease Classifier in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent pathology diagnostic script:</p>
                            <ul>
                                <li>Define a structured dictionary of 5 foliar diseases with key phenotypic markers: <code>dominant_color</code>, <code>lesion_pattern</code>, <code>leaf_wilting</code>, and <code>halo_present</code>.</li>
                                <li>Write a function <code>diagnose_leaf(symptoms)</code> returning the disease diagnosis, confidence score, and recommended extension treatment.</li>
                                <li>Test the classifier on 4 hypothetical diseased leaf symptom profiles and print formatted diagnostic reports.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating structured plant pathology diagnostic advisory reports.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What type of AI is typically used for image-based disease detection?</p>
                    <ul>
                        <li>A) Linear Regression</li>
                        <li>B) Convolutional Neural Networks (CNN)</li>
                        <li>C) Decision Trees</li>
                        <li>D) K-Means Clustering</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - CNNs are specialized for image analysis and pattern recognition.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Early detection prevents major crop losses</li>
                    <li>AI can detect diseases from leaf photos</li>
                    <li>CNNs are the core technology for image-based detection</li>
                    <li>Apps like Plantix make this accessible to all farmers</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t8': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Computer Vision Fundamentals</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand how computers "see" images (Pixels & Channels)</li>
                    <li>Learn basic operations with OpenCV (Load, Resize, Blur)</li>
                    <li>Understand Color Spaces (RGB vs HSV) for object detection</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Computer Vision = The Digital Agronomist's Eye</strong></p>
                    <p>To a computer, an image of a farm field isn't "crops and soil"—it's a giant spreadsheet of numbers (pixels). By analyzing these numbers, we can teach the computer to spot weeds just like a farmer spots them by their distinct green color against brown soil.</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Key Concepts</h2>
                <div class="concept-card" style="margin-bottom: 20px;">
                    <h3>1. What is an Image?</h3>
                    <p>An image is a grid of pixels. In color images, each pixel has 3 values: <strong>Red, Green, Blue (RGB)</strong>. Each value ranges from 0 (Black) to 255 (Bright).</p>
                </div>
                
                <div class="concept-card">
                    <h3>2. OpenCV Library</h3>
                    <p><strong>OpenCV</strong> is the most popular library for Computer Vision. It helps us manipulate these pixel grids to extract useful information.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import cv2
import numpy as np
import matplotlib.pyplot as plt

# === 1. CREATING A SYNTHETIC IMAGE ===
print("=== Creating and Processing Images ===")

# Create a black image (100x100 pixels, 3 channels for RGB)
# Note: OpenCV uses BGR format mainly
image = np.zeros((100, 100, 3), dtype=np.uint8)

# Draw a brown rectangle (representing Soil)
# BGR for Brown: (30, 70, 120) roughly
cv2.rectangle(image, (0, 0), (100, 100), (30, 70, 120), -1)

# Draw a green circle (representing a Crop)
cv2.circle(image, (50, 50), 30, (0, 255, 0), -1)

print(f"Image Shape: {image.shape} (Height, Width, Channels)")

# === 2. COLOR SPACE CONVERSION ===
print("\\n=== Converting Color Spaces ===")
# Convert BGR to RGB for plotting with Matplotlib
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# Convert to Grayscale (Simpler, just light intensity)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Convert to HSV (Hue, Saturation, Value) - Best for color detection
hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

print("Converted to RGB, Grayscale, and HSV.")

# === 3. SEGMENTATION (WEED DETECTION) ===
print("\\n=== Simple Color Segmentation ===")
# We want to isolate the Green plant from the Brown soil.
# HSV is robust for this. Green hue is around 60.

# Define range of Green color in HSV
lower_green = np.array([35, 50, 50])
upper_green = np.array([85, 255, 255])

# Create a mask: White (255) where green matches, Black (0) otherwise
mask = cv2.inRange(hsv, lower_green, upper_green)

# Calculate area (pixels)
plant_area = np.sum(mask > 0)
total_area = mask.size
coverage = (plant_area / total_area) * 100

print(f"Plant Pixels Detected: {plant_area}")
print(f"Field Coverage: {coverage:.2f}%")

# Visualize (simulated via text since we can't show plot here)
# In lab: plt.imshow(mask, cmap='gray')
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
                            <h3>Live Demonstration: OpenCV HSV Thresholding, Morphological Filtering &amp; Contour Detection</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates agricultural image processing live in Google Colab on the projector:</p>
                            <ul>
                                <li>Loads a drone orthomosaic image of an emerging row-crop field.</li>
                                <li>Demonstrates why RGB color thresholds fail under varying solar illumination and transitions to the HSV color space for robust green leaf segmentation.</li>
                                <li>Applies morphological opening and closing (<code>cv2.morphologyEx</code>) to remove soil background noise and fill canopy pinholes.</li>
                                <li>Extracts connected contours (<code>cv2.findContours</code>), calculates canopy ground cover fraction percentage, and draws bounding boxes around individual crop plants.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive Colab notebook segmenting crop canopy from soil and rendering contour-bounded plant masks.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Optical Calibration &amp; Illumination Invariance Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in solving field lighting variations in computer vision:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"When a tractor camera scans crops from 8:00 AM to 5:00 PM, changing cloud cover and sun angle constantly shift pixel values. How do we design an illumination-invariant preprocessing pipeline using CLAHE and chromatic color indices (Excess Green Index $ExG = 2G - R - B$)?"</em></li>
                                <li><strong>Collaborative Investigation:</strong> Faculty and student groups test normalizations across sunny and overcast field images, validating contrast preservation.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Illumination-Invariant Agricultural Image Preprocessing Benchmark dossier.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Digital Weed Spotter &amp; Canopy Coverage Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are challenged to build a weed-spotting computer vision script for automated spot-spraying:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Segment vegetation from soil using HSV and ExG color indices on 10 field images.</li>
                                <li><strong>Task 2:</strong> Differentiate between broadleaf weeds and narrow-leaf crops based on contour morphological properties (aspect ratio, circularity, solidity).</li>
                                <li><strong>Peer Audit:</strong> Teams exchange processed masks and benchmark their detection precision and false-positive soil detection rates.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A weed segmentation benchmark report with side-by-side binary mask comparisons and coverage calculations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build an OpenCV Crop Canopy Extractor in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent OpenCV image analysis pipeline:</p>
                            <ul>
                                <li>Load a farm field image using OpenCV and convert to HSV color space.</li>
                                <li>Apply <code>cv2.inRange</code> with green color bounds <code>[35, 40, 40]</code> to <code>[85, 255, 255]</code> to create a binary vegetation mask.</li>
                                <li>Compute total green pixel count and canopy coverage percentage; apply <code>cv2.findContours</code> to identify the largest plant contour and draw a green bounding box around it.</li>
                                <li>Display the original image, binary mask, and final annotated image in a 1&times;3 matplotlib subplot.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating binary vegetation masks, contour bounding boxes, and canopy coverage statistics.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> In an RGB image, what does the value (255, 0, 0) represent?</p>
                    <ul>
                        <li>A) Pure Green</li>
                        <li>B) Pure Blue</li>
                        <li>C) Pure Red</li>
                        <li>D) Black</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - RGB stands for Red, Green, Blue. The first channel is Red.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> Why do we use HSV instead of RGB for color detection?</p>
                    <ul>
                        <li>A) It uses fewer bytes</li>
                        <li>B) It separates Color (Hue) from Brightness (Value)</li>
                        <li>C) It is the default for cameras</li>
                        <li>D) It looks better</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - HSV makes it easier to track a color (like green) even if shadows make it darker or lighter.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Images are 3D arrays of numbers (Height, Width, Channels).</li>
                    <li><strong>OpenCV</strong> is the essential library for computer vision in Python.</li>
                    <li><strong>HSV</strong> color space is superior for detecting objects by color (like crops vs soil).</li>
                    <li>Thresholding (Masking) is the simplest form of object detection.</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t9': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 CNN Introduction</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand how CNNs process images</li>
                    <li>Learn about convolutional and pooling layers</li>
                    <li>Build a simple CNN architecture</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>CNN = Experienced Crop Inspector</strong></p>
                    <p>A human expert scans leaves looking for patterns - edges, spots, colors. A CNN does the same, but processes millions of images to learn every possible disease pattern!</p>
                    <ul>
                        <li>🔍 <strong>Convolutional Layer:</strong> Searches for specific patterns (edges, spots)</li>
                        <li>📉 <strong>Pooling Layer:</strong> Summarizes findings (zoom out)</li>
                        <li>🧠 <strong>Dense Layer:</strong> Makes final decision (healthy/diseased)</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import tensorflow as tf
from tensorflow.keras import layers, models

# === BUILD CNN FOR CROP DISEASE DETECTION ===
print("=== Building CNN Model ===")

def create_crop_disease_cnn(input_shape=(224, 224, 3), num_classes=10):
    """
    Create a CNN for crop disease classification.
    
    Architecture:
    - 3 Convolutional blocks (Conv + Pool)
    - Flatten and Dense layers
    - Output layer for classification
    """
    
    model = models.Sequential([
        # First Conv Block
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        layers.MaxPooling2D((2, 2)),
        
        # Second Conv Block
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        # Third Conv Block
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        # Flatten and Dense
        layers.Flatten(),
        layers.Dropout(0.5),  # Prevent overfitting
        layers.Dense(128, activation='relu'),
        
        # Output
        layers.Dense(num_classes, activation='softmax')
    ])
    
    return model

# Create model
model = create_crop_disease_cnn(num_classes=5)  # 5 disease classes

# Compile
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Show architecture
model.summary()

# === UNDERSTANDING LAYERS ===
print("\\n=== Layer Explanation ===")
print("Conv2D: Detects patterns (edges, textures, spots)")
print("MaxPooling2D: Reduces size, keeps important features")
print("Flatten: Converts 2D to 1D for classification")
print("Dense: Makes final classification decision")
print("Softmax: Outputs probabilities for each class")

# === TRAINING (conceptual) ===
print("\\n=== Training Workflow ===")
print("""
1. Load images: train_data = load_images('dataset/')
2. Preprocess: normalize, resize to 224x224
3. Train: model.fit(train_data, epochs=20)
4. Evaluate: model.evaluate(test_data)
5. Predict: model.predict(new_leaf_image)
""")
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
                            <h3>Live Demonstration: CNN Feature Maps, Convolutional Kernels &amp; Feature Hierarchies</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates CNN feature extraction live in Google Colab on the projector using a leaf pathology image:</p>
                            <ul>
                                <li>Builds a compact 3-block convolutional neural network (<code>Conv2D</code> &rarr; <code>ReLU</code> &rarr; <code>MaxPooling2D</code> &rarr; <code>Flatten</code> &rarr; <code>Dense</code>) using TensorFlow/Keras.</li>
                                <li>Extracts activations from intermediate convolutional layers using a feature extraction sub-model.</li>
                                <li>Projects feature map grids: demonstrates how Layer 1 filters detect raw leaf edges and vein orientations, Layer 2 filters assemble spot textures and chlorotic boundaries, and Layer 3 filters detect complete pathogen lesion shapes.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook rendering multi-layer convolutional filter activations and feature map grids.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agronomic Receptive Fields &amp; Network Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in configuring CNN kernel dimensions and pooling strides for microscopic vs drone-scale agricultural imagery:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"When detecting microscopic fungal spore pustules (10 pixels wide) vs canopy-wide drought patches (300 pixels wide), how should we adjust convolutional filter kernel sizes ($3\times3$ vs $7\times7$) and pooling strides to preserve spatial detail?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and student groups formulate multi-scale receptive field guidelines, analyzing how dilated convolutions and skip connections prevent spatial resolution loss.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agricultural Vision Network Architecture Blueprint matching kernel sizes to pathological lesion dimensions.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Custom CNN Foliar Classifier &amp; Overfitting Mitigation Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams construct a custom lightweight CNN for a 3-class crop disease dataset (Healthy, Blight, Rust):</p>
                            <ul>
                                <li><strong>Task 1:</strong> Design a CNN model architecture with under 250,000 trainable parameters suitable for mobile deployment.</li>
                                <li><strong>Task 2:</strong> Implement regularization techniques (<code>Dropout(0.3)</code>, <code>BatchNormalization</code>, data augmentation with random flips/rotations) to prevent overfitting.</li>
                                <li><strong>Peer Audit:</strong> Teams exchange trained models, examine learning curves (training vs validation loss), and test each other's models on blurred or occluded leaf test photos.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A custom CNN architecture dossier with parameter budgets, training/validation loss curves, and test confusion matrices.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build &amp; Visualize a 3-Layer Foliar CNN in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent convolutional network:</p>
                            <ul>
                                <li>Construct a <code>Sequential</code> model in TensorFlow/Keras with two <code>Conv2D</code> layers (16 and 32 filters, $3\times3$), <code>MaxPooling2D(2, 2)</code>, <code>Dropout(0.25)</code>, and a <code>Dense</code> softmax output.</li>
                                <li>Print <code>model.summary()</code> and verify total trainable parameters.</li>
                                <li>Pass a single sample leaf tensor through the model, extract the first convolutional layer's feature maps, and plot 8 filter activation outputs in a 2&times;4 grid.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook creating the CNN model and plotting intermediate feature map activations.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does a convolutional layer do?</p>
                    <ul>
                        <li>A) Classifies images</li>
                        <li>B) Detects patterns like edges and textures</li>
                        <li>C) Reduces image size</li>
                        <li>D) Stores images</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Convolutional layers use filters to detect patterns in images.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>CNNs are designed specifically for image data</li>
                    <li>Conv layers detect features, Pooling reduces size</li>
                    <li>Deeper layers detect more complex patterns</li>
                    <li>Transfer learning (pretrained models) is recommended</li>
                </ul>
            </div>
        </div>
    `,

    'm3-t19': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Time Series Analysis Fundamentals</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand time series components</li>
                    <li>Check for stationarity</li>
                    <li>Apply decomposition techniques</li>
                    <li>Prepare data for forecasting</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Time Series = The Farm's Diary</strong></p>
                    <p>Your farm data has patterns that repeat over time:</p>
                    <ul>
                        <li>📈 <strong>Trend:</strong> Yields improving over years</li>
                        <li>🔄 <strong>Seasonality:</strong> Monsoon rains every year</li>
                        <li>📊 <strong>Noise:</strong> Random daily variations</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose

# === CREATE TIME SERIES DATA ===
print("=== Agricultural Time Series ===")

# 3 years of monthly data
dates = pd.date_range('2021-01-01', periods=36, freq='M')

# Create realistic yield pattern
np.random.seed(42)
trend = np.linspace(2000, 2400, 36)  # Increasing trend
seasonality = 300 * np.sin(np.linspace(0, 6*np.pi, 36))  # Seasonal pattern
noise = np.random.normal(0, 100, 36)  # Random noise

yields = trend + seasonality + noise

ts_data = pd.Series(yields, index=dates, name='monthly_yield')
print(ts_data.head(12))

# === DECOMPOSITION ===
print("\\n=== Decomposing Time Series ===")
decomposition = seasonal_decompose(ts_data, period=12)

# Visualize components
fig, axes = plt.subplots(4, 1, figsize=(12, 10))

decomposition.observed.plot(ax=axes[0], title='Original')
decomposition.trend.plot(ax=axes[1], title='Trend')
decomposition.seasonal.plot(ax=axes[2], title='Seasonality')
decomposition.resid.plot(ax=axes[3], title='Residual (Noise)')

plt.tight_layout()
plt.show()

# === STATIONARITY CHECK ===
print("\\n=== Checking Stationarity ===")
from statsmodels.tsa.stattools import adfuller

result = adfuller(ts_data.dropna())
print(f'ADF Statistic: {result[0]:.4f}')
print(f'p-value: {result[1]:.4f}')

if result[1] < 0.05:
    print("✅ Series is stationary")
else:
    print("⚠️ Series is non-stationary - needs differencing")
    
# Make stationary by differencing
ts_diff = ts_data.diff().dropna()
result2 = adfuller(ts_diff)
print(f'After differencing p-value: {result2[1]:.4f}')
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
                            <h3>Live Demonstration: Agro-Climatic Time Series Decomposition, Stationarity &amp; Differencing</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates temporal agricultural analysis live in Google Colab on the projector:</p>
                            <ul>
                                <li>Loads 5 years of daily temperature and rainfall records from an agro-met observatory.</li>
                                <li>Applies <code>seasonal_decompose</code> from statsmodels to extract multi-year warming trends, annual monsoon cycles, and high-frequency weather shocks.</li>
                                <li>Conducts the Augmented Dickey-Fuller (ADF) test: walks through test statistics and p-values to show why raw non-stationary weather series lead to spurious models.</li>
                                <li>Demonstrates first-order differencing and seasonal lag differencing ($y_t - y_{t-365}$) to achieve stationarity, validating with ACF/PACF plots.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script rendering 4-panel time series decomposition plots and ACF/PACF correlograms.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Multi-Decadal Agro-Climatic Trend &amp; Seasonality Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on isolating long-term climate shift signals from seasonal agricultural noise:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In a 30-year rainfall record for semi-arid Karnataka, monsoon onset dates appear to have shifted by 18 days. How do we distinguish between multi-decadal climate shifts and cyclic El Ni&ntilde;o anomalies using rolling window statistics and Mann-Kendall trend tests?"</em></li>
                                <li><strong>Collaborative Analysis:</strong> Faculty and student groups formulate statistical test protocols for evaluating climate stationarity across dryland farming districts.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Climatic Stationarity &amp; Trend Protocol with rolling statistical test specifications.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Regional Drought &amp; Evapotranspiration Time Series Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are assigned historical daily weather records from distinct agro-climatic zones:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Decompose daily reference evapotranspiration ($ET_0$) into trend, seasonal harmonics, and irregular residuals.</li>
                                <li><strong>Task 2:</strong> Test for stationarity using ADF and KPSS tests; apply necessary transformations (differencing, log scaling).</li>
                                <li><strong>Peer Audit:</strong> Teams swap decomposed series to cross-check whether the seasonal components capture peak summer evaporation spikes accurately.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A comprehensive agro-climatic time series dossier with decomposition figures, ADF test tables, and seasonal anomaly interpretations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Decompose &amp; Stationarize Regional Temperature Series in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent time series analysis script:</p>
                            <ul>
                                <li>Generate a 3-year daily synthetic temperature series with a linear upward warming trend, a 365-day seasonal cycle, and Gaussian noise.</li>
                                <li>Apply <code>seasonal_decompose(period=365)</code> and plot the 4 decomposed components.</li>
                                <li>Run <code>adfuller</code> on the raw series and print the p-value.</li>
                                <li>Apply first-order differencing (<code>diff()</code>), re-run the ADF test, and confirm that the differenced series is strictly stationary ($p &lt; 0.05$).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating time series decomposition plots and printed ADF stationarity test verification.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What are the three components of a time series?</p>
                    <ul>
                        <li>A) Mean, Median, Mode</li>
                        <li>B) Trend, Seasonality, Noise</li>
                        <li>C) X, Y, Z</li>
                        <li>D) Past, Present, Future</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Time series can be decomposed into trend, seasonality, and noise (residual).</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Time series have trend, seasonality, and noise</li>
                    <li>Decomposition separates these components</li>
                    <li>Stationarity is required for many models</li>
                    <li>Differencing can make series stationary</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use by lecture system
if (typeof window !== 'undefined') {
    window.module3Handouts = module3Handouts;
}
