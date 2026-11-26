// Module 4 Comprehensive Handouts - Part 2
// Capstone Execution: Cleaning, Modeling, Testing, Deployment & Viva
// Complete with Farm Stories, IPO Models, Code & Interactive What-Ifs

const module4HandoutsPart2 = {

    'm4-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Data Cleaning and Preprocessing</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer survey dataset contains blank cells, inconsistent names, and text in numeric columns.</p>
                <p>One row says 'Ragi', another says 'ragi_millet', and another says 'FINGER MILLET'.</p>
                <p>Machine learning models treat these three identical crops as completely different categories.</p>
                <p>Data cleaning standardizes text categories, handles missing cells, and scales numeric ranges.</p>
                <p>How does structured preprocessing prepare agricultural survey data for training?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Messy Table:</strong> Inconsistent crop names, trailing spaces, missing yields.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Standardize:</strong> Convert crop names to lowercase and strip whitespace.</li>
                            <li><strong>Impute:</strong> Fill missing yield numbers with district median.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Clean Matrix:</strong> Standardized table ready for machine learning algorithms.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.11: Agricultural Data Cleaning & Normalization
import pandas as pd

raw_survey = pd.DataFrame({
    'Farmer_ID': ['F1', 'F2', 'F3', 'F4'],
    'Crop': ['RAGI ', 'ragi', ' Finger Millet', 'Ragi'],
    'Harvest_Yield': [14.0, 15.5, None, 13.8]
})

# Standardize text and fill missing yield with median
clean_survey = raw_survey.copy()
clean_survey['Crop'] = clean_survey['Crop'].str.strip().str.lower().replace({'finger millet': 'ragi'})
clean_survey['Harvest_Yield'] = clean_survey['Harvest_Yield'].fillna(clean_survey['Harvest_Yield'].median())

print("--- Standardized Farm Survey Table ---")
print(clean_survey)</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Notice how all four rows now belong to category <code>'ragi'</code>. Why does text standardization prevent duplicate categories?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Feature Engineering for Project</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Feeding raw rainfall totals alone into models misses whether rain arrived during flowering.</p>
                <p>Ten millimeters of rain during flowering stage protects harvest more than sixty millimeters on bare soil.</p>
                <p>Feature engineering combines crop phenology stages with weather totals to create biological indicators.</p>
                <p>Engineered biological features raise model prediction accuracy by twenty to thirty percent.</p>
                <p>How do we engineer agronomic features tailored to our specific capstone crop?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Raw Weather:</strong> Rain during vegetative stage (120 mm), Rain during flowering (45 mm).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Critical Stage Ratio:</strong> Flowering Rain / Total Seasonal Rain.</li>
                            <li><strong>Stress Index:</strong> Check if flowering moisture met minimum threshold.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Engineered Feature:</strong> Flowering moisture sufficiency index.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.12: Engineering Phenological Moisture Ratios
import pandas as pd

crop_phenology_data = pd.DataFrame({
    'Plot_ID': ['Plot_A', 'Plot_B', 'Plot_C'],
    'Vegetative_Rain_mm': [140.0, 180.0, 90.0],
    'Flowering_Rain_mm':  [45.0,  10.0,  50.0]
})

# Engineer critical-stage moisture ratio
total_rain = crop_phenology_data['Vegetative_Rain_mm'] + crop_phenology_data['Flowering_Rain_mm']
crop_phenology_data['Flowering_Moisture_Share'] = crop_phenology_data['Flowering_Rain_mm'] / total_rain

print("--- Engineered Phenological Features ---")
print(crop_phenology_data[['Plot_ID', 'Flowering_Moisture_Share']])</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Plot B had high total rain, but low flowering moisture (10 mm). Why does Plot B risk yield collapse?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Algorithm Selection Justification</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A project team selects a massive deep learning network for a dataset of fifty farmers.</p>
                <p>The academic evaluation committee asks why a simpler Random Forest was not chosen instead.</p>
                <p>Students lose marks when they cannot justify why their algorithm fits dataset size and hardware limits.</p>
                <p>Algorithm selection justification compares data scale, interpretability needs, and deployment targets.</p>
                <p>How do we defend algorithm choices scientifically during capstone viva defenses?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Dataset Profile:</strong> 250 rows, Tabular, Needs high explainability for farmers.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Tradeoff Analysis:</strong> Compare Neural Net vs Random Forest vs Linear Model.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Justification Defense:</strong> Random Forest selected for superior tabular handling and explainability.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.13: Algorithm Selection Comparison Rubric
import pandas as pd

algo_comparison = pd.DataFrame({
    'Algorithm': ['Linear Regression', 'Random Forest', 'Deep Neural Net'],
    'Small_Data_Performance': ['Good', 'Excellent', 'Poor (Overfits)'],
    'Explainability': ['High', 'High (Feature Importance)', 'Low (Black Box)'],
    'Hardware_Needs': ['Very Low', 'Low', 'High (Requires GPU)']
})

print("--- Algorithm Selection Defense Matrix ---")
print(algo_comparison.to_string(index=False))</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If your project runs on a budget smartphone with no GPU, which algorithm is easiest to defend during viva?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Model Development and Training</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student trains a model but forgets to save the trained weights to a file.</p>
                <p>When closing the Google Colab tab, all trained model memory disappears into thin air.</p>
                <p>Retraining takes hours of compute time and delays live capstone demonstrations.</p>
                <p>Joblib serialization exports trained models into compact binary files for instant deployment.</p>
                <p>How do we save, export, and reload trained agricultural models without retraining?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Trained Estimator:</strong> Fitted Scikit-Learn crop yield model.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Serialization:</strong> Save model weights to 'crop_yield_model.pkl'.</li>
                            <li><strong>Deserialization:</strong> Reload model in seconds on web server.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Deployment Asset:</strong> Portable model file ready for web and mobile apps.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.14: Model Training and Joblib Export
from sklearn.ensemble import RandomForestRegressor
import numpy as np
import joblib

# Train simple yield predictor
soil_inputs = np.array([[22.0, 100], [28.0, 140], [18.0, 80], [32.0, 150]])
crop_yields = np.array([38.0, 48.0, 28.0, 52.0])

trained_model = RandomForestRegressor(n_estimators=10, random_state=42)
trained_model.fit(soil_inputs, crop_yields)

# Save to disk
model_filename = "capstone_yield_model.pkl"
joblib.dump(trained_model, model_filename)
print(f"Model successfully saved to '{model_filename}'")

# Reload and predict without retraining
reloaded_model = joblib.load(model_filename)
prediction = reloaded_model.predict([[25.0, 120]])[0]
print(f"Prediction from reloaded file: {prediction:.1f} quintals")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Inspect file size on disk using <code>import os; print(os.path.getsize(model_filename), 'bytes')</code>. Notice how lightweight the saved model file is!</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Hyperparameter Optimization</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Default machine learning models perform moderately well, but miss peak potential accuracy.</p>
                <p>Adjusting tree counts and maximum depths randomly wastes hours of manual testing.</p>
                <p>Systematic optimization searches combinations of hyperparameters to unlock top accuracy.</p>
                <p>GridSearchCV automates parameter search and guarantees the best possible model configuration.</p>
                <p>How does hyperparameter optimization squeeze maximum accuracy from capstone models?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Parameter Candidates:</strong> n_estimators = [10, 30, 50], max_depth = [2, 4].</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Exhaustive Search:</strong> Train model on all combinations with cross-validation.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Best Model:</strong> Top configuration tuned for peak field accuracy.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.15: Automated Parameter Optimization
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import GridSearchCV
import numpy as np

features = np.array([[20, 80], [25, 110], [30, 140], [18, 70], [28, 130]])
targets = np.array([32.0, 42.0, 50.0, 29.0, 47.0])

param_grid = {'n_estimators': [10, 20], 'max_depth': [2, 3]}
grid_search = GridSearchCV(RandomForestRegressor(random_state=42), param_grid, cv=2)
grid_search.fit(features, targets)

print("Best Parameters:", grid_search.best_params_)
print(f"Optimized R² Score: {grid_search.best_score_:.2f}")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add <code>'min_samples_split': [2, 4]</code> to <code>param_grid</code>. How many models does the grid search evaluate now?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Model Validation and Testing</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An evaluator asks if your model works during an unseasonal drought year.</p>
                <p>If your testing data only came from mild monsoon seasons, you cannot answer honestly.</p>
                <p>Rigorous validation tests models against stress cases and different soil conditions.</p>
                <p>Out-of-sample testing confirms that capstone models generalize reliably in real farming.</p>
                <p>How do we design stress-test validation sets for agricultural capstones?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Stress Test Set:</strong> Data collected from extreme drought and heat conditions.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Out-of-Distribution Test:</strong> Evaluate model error under harsh weather.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Robustness Report:</strong> Model maintains 88% accuracy under weather stress.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.16: Stress-Testing Model Generalization
import numpy as np
from sklearn.linear_model import LinearRegression

# Normal training data
normal_features = np.array([[400, 100], [450, 120], [500, 140]])
normal_yields = np.array([38.0, 42.0, 46.0])

model = LinearRegression().fit(normal_features, normal_yields)

# Stress case: Severe drought (only 180 mm rain)
stress_case = np.array([[180, 80]])
predicted_stress_yield = model.predict(stress_case)[0]

print("--- Harsh Climate Stress Test ---")
print(f"Predicted Yield under Severe Drought: {predicted_stress_yield:.1f} quintals")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If predicted yield drops below <code>10.0 quintals</code>, add a safety warning flag for farm loan insurers!</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t17': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Performance Metrics Analysis</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A disease detector predicts 98% accuracy by simply guessing 'Healthy' for every leaf.</p>
                <p>Because only 2% of leaves in the field had disease, guessing healthy scored high accuracy.</p>
                <p>However, the model missed every single diseased leaf, letting blight destroy the crop.</p>
                <p>Precision, Recall, and F1-score reveal whether rare diseases are actually detected.</p>
                <p>Why is Recall more important than raw accuracy for agricultural disease detection?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Ground Truth:</strong> Actual disease status of 100 field leaves.</li>
                            <li><strong>Predictions:</strong> Diagnostic labels predicted by the model.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Confusion Matrix:</strong> Compute True Positives, False Positives, False Negatives.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Recall Score:</strong> 96.0% of true diseased leaves caught successfully.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.17: Precision, Recall, and F1-Score Analysis
from sklearn.metrics import classification_report
import numpy as np

# 10 field leaves: 1=Blight Infected, 0=Healthy
actual_status =    np.array([1, 1, 1, 0, 0, 0, 0, 0, 0, 0])
model_prediction = np.array([1, 1, 0, 0, 0, 0, 0, 0, 0, 0])

report = classification_report(actual_status, model_prediction, 
                               target_names=['Healthy', 'Blight'], zero_division=0)
print("--- Agricultural Diagnostic Performance Report ---")
print(report)</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Notice that the model missed 1 diseased leaf (False Negative). What is the Blight Recall score?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t18': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Cross-Validation and Performance Testing</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student team claims their capstone model achieves 96% accuracy on a single test run.</p>
                <p>When evaluated on another split of the same data, accuracy drops to 78%.</p>
                <p>Single test splits depend on lucky or unlucky sampling and hide performance instability.</p>
                <p>Repeated stratified cross-validation reports mean accuracy and confidence intervals.</p>
                <p>How does cross-validation prove capstone model stability to academic review panels?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Full Dataset:</strong> Complete experimental trial dataset.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>5-Fold CV:</strong> Train on 4 parts, evaluate on 1 part. Repeat 5 times.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Stability Metric:</strong> Mean accuracy = 91.2% with low variance (±1.8%).</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.18: Cross-Validation Stability Verification
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
import numpy as np

features = np.array([[6.5, 22], [5.2, 18], [6.8, 28], [4.8, 14], [7.1, 25], 
                     [6.0, 20], [5.5, 16], [6.9, 27], [5.0, 15], [7.2, 26]])
classes = np.array([0, 1, 0, 1, 0, 0, 1, 0, 1, 0])

model = RandomForestClassifier(n_estimators=10, random_state=42)
scores = cross_val_score(model, features, classes, cv=5)

print("Individual Fold Scores:", np.round(scores, 2))
print(f"Mean Stability Score:   {scores.mean():.2f} (+/- {scores.std():.2f})")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If standard deviation is below <code>0.05</code>, the model is highly stable across all farm blocks!</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t19': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Error Analysis and Troubleshooting</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A yield prediction model consistently underestimates harvest in sandy riverbed plots.</p>
                <p>Instead of randomly retraining, the team inspects which specific samples failed.</p>
                <p>They discover that riverbed plots have higher percolation rates not captured in features.</p>
                <p>Error analysis investigates mispredicted samples to uncover missing agronomic factors.</p>
                <p>How does systematic error analysis diagnose weaknesses in agricultural models?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Residuals:</strong> Differences between actual and predicted yields.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Residual Sorting:</strong> Isolate top 5% largest prediction errors.</li>
                            <li><strong>Pattern Audit:</strong> Check if large errors share common soil properties.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Diagnostic Insight:</strong> Add percolation rate feature to fix riverbed errors.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.19: Residual Error Analysis
import pandas as pd

error_audit = pd.DataFrame({
    'Plot_ID': ['Plot_1', 'Plot_2', 'Plot_3', 'Plot_4'],
    'Soil_Type': ['Clay', 'Loam', 'Sandy Riverbed', 'Loam'],
    'Actual_Yield': [45.0, 48.0, 32.0, 46.0],
    'Predicted_Yield': [44.0, 47.5, 45.0, 45.0]
})

error_audit['Error_Quintals'] = error_audit['Actual_Yield'] - error_audit['Predicted_Yield']
worst_prediction = error_audit.loc[error_audit['Error_Quintals'].abs().idxmax()]

print("--- Error Audit Table ---")
print(error_audit[['Plot_ID', 'Soil_Type', 'Error_Quintals']])
print(f"\nWorst Failure: {worst_prediction['Plot_ID']} ({worst_prediction['Soil_Type']})")
print("Diagnosis: Model failed on sandy soil due to unmeasured drainage.")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Notice the -13 quintal error on Sandy Riverbed. Why does error auditing teach us what features to add next?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t20': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Model Improvement Strategies</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A single decision tree model hits a plateau of 82% diagnostic accuracy.</p>
                <p>Tuning hyperparameters further yields no meaningful performance improvement.</p>
                <p>Ensembling combines multiple diverse trees into a Random Forest or Gradient Booster.</p>
                <p>A committee of diverse models corrects individual mistakes and boosts accuracy to 94%.</p>
                <p>How do ensemble methods push capstone project models past accuracy plateaus?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Baseline Model:</strong> Single Decision Tree (82% accuracy).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Ensemble Voting:</strong> Combine 50 diverse decision trees with bagging.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Ensemble Model:</strong> Boosted 93.5% accuracy achieved for capstone submission.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.20: Upgrading from Single Tree to Random Forest Ensemble
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
import numpy as np

features = np.array([[6.5, 22], [5.2, 18], [6.8, 28], [4.8, 14], [7.1, 25]])
targets = np.array([0, 1, 0, 1, 0])

single_tree = DecisionTreeClassifier(random_state=42).fit(features, targets)
ensemble_forest = RandomForestClassifier(n_estimators=30, random_state=42).fit(features, targets)

print("Baseline Single Tree Model: Trained")
print("Upgraded Random Forest:     Trained (30 Estimators Combined)")
print("Strategy: Ensembling combines multiple decision votes to eliminate individual bias.")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Compare <code>single_tree.score(features, targets)</code> with the ensemble. Why do ensembles perform better on new data?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t21': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 API Development and Testing</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A trained model sitting in a Jupyter notebook cannot help a farmer standing in a field.</p>
                <p>The model must connect to mobile apps or IoT valve controllers across the internet.</p>
                <p>REST APIs act as digital bridges that receive sensor numbers and return predictions.</p>
                <p>FastAPI builds lightweight web endpoints so any phone can query the capstone model.</p>
                <p>How do we wrap agricultural machine learning models into web APIs?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>JSON Request:</strong> {"soil_moisture": 18.5, "temp": 32.0}.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>API Endpoint:</strong> Parse JSON, run model.predict(), format response.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>JSON Response:</strong> {"status": "PUMP_ON", "confidence": 0.94}.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.21: FastAPI Endpoint Simulation
def api_predict_irrigation(request_json):
    moisture = request_json.get("soil_moisture", 25.0)
    temp = request_json.get("leaf_temp", 28.0)
    
    # Decision logic
    action = "PUMP_ON" if (moisture < 20.0 and temp > 30.0) else "STANDBY"
    return {"status": "SUCCESS", "action": action, "moisture": moisture}

# Simulate mobile app calling the API
mobile_request = {"soil_moisture": 17.5, "leaf_temp": 33.0}
response = api_predict_irrigation(mobile_request)

print("Incoming Mobile Request:", mobile_request)
print("API Response Payload:   ", response)</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Send <code>{"soil_moisture": 28.0, "leaf_temp": 24.0}</code>. What does the API response payload return?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t22': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 User Interface Design</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Farmers will not use command-line terminal code or type Python syntax into terminals.</p>
                <p>They need intuitive sliders, color-coded health badges, and local language labels.</p>
                <p>If the user interface is confusing, even the most accurate AI project will be rejected.</p>
                <p>Streamlit builds interactive web dashboards in pure Python with sliders and live charts.</p>
                <p>How do we design farmer-friendly dashboard interfaces for capstone presentations?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>UI Controls:</strong> Slider for soil moisture (10% to 50%), Dropdown for crop.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Live Update:</strong> Streamlit updates charts instantly as user moves sliders.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Visual Dashboard:</strong> Green/red status card and harvest forecast.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.22: Streamlit Dashboard Code Structure
streamlit_ui_script = '''
import streamlit as st
import joblib

st.title("🌾 GKVK Smart Crop Advisor")
crop = st.selectbox("Select Target Crop:", ["Ragi", "Maize", "Tomato"])
moisture = st.slider("Soil Moisture Level (%):", 10.0, 50.0, 22.0)

if moisture < 20.0:
    st.error("🚨 Critical Moisture Stress! Start Drip Line.")
else:
    st.success("🟢 Soil Moisture is Optimal.")
'''
print("Streamlit UI App Template:")
print(streamlit_ui_script)
print("Deploy with command: 'streamlit run app.py'")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a <code>st.number_input("Nitrogen Applied (kg):")</code> widget to the app template code. How easily does Streamlit add widgets?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t23': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Project Documentation Preparation</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A brilliant technical project receives poor grades because the report is disorganized.</p>
                <p>Missing dataset sources, unexplained formulas, and blurry charts frustrate university reviewers.</p>
                <p>Professional documentation explains the problem, methodology, results, and limitations clearly.</p>
                <p>Standard IEEE thesis structures ensure students showcase their technical rigor persuasively.</p>
                <p>How do we structure an academic thesis report for agricultural AI capstones?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Raw Notes:</strong> Code notebooks, trial datasets, evaluation charts.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Standard Formatting:</strong> Abstract, Intro, Literature, Methods, Results.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Final Thesis:</strong> Complete academic capstone documentation ready for library.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.23: Capstone Thesis Chapter Structure
thesis_outline = [
    {"Chapter": 1, "Title": "Introduction & Agronomic Problem Statement", "Target_Pages": 6},
    {"Chapter": 2, "Title": "Literature Review & Prior State-of-the-Art",  "Target_Pages": 10},
    {"Chapter": 3, "Title": "Dataset Acquisition & Preprocessing Pipeline", "Target_Pages": 8},
    {"Chapter": 4, "Title": "Machine Learning Model Architecture",          "Target_Pages": 12},
    {"Chapter": 5, "Title": "Experimental Results & Error Analysis",        "Target_Pages": 10},
    {"Chapter": 6, "Title": "Conclusion & Future Research Directions",      "Target_Pages": 4}
]

total_pages = sum(ch['Target_Pages'] for ch in thesis_outline)
print("--- Standard Academic Thesis Blueprint ---")
for ch in thesis_outline:
    print(f"Chapter {ch['Chapter']}: {ch['Title']:<45} ({ch['Target_Pages']} pages)")
print(f"\nEstimated Report Length: {total_pages} pages")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Which chapter receives the largest target page allocation? Why is detailing methodology and architecture so critical?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t24': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Presentation Skills for Technical Projects</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student team fills twenty PowerPoint slides with tiny text and long Python code blocks.</p>
                <p>Evaluators cannot read small fonts from the back row and lose interest after three minutes.</p>
                <p>Presenting capstone work requires clean diagrams, large numbers, and live software demos.</p>
                <p>The 10-20-30 presentation rule ensures slide decks communicate technical value clearly.</p>
                <p>How do we deliver compelling technical presentations to university evaluators?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Capstone Findings:</strong> 8 weeks of agronomy data and machine learning code.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>10-20-30 Rule:</strong> 10 slides, 20 minutes maximum, 30-point font minimum.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Executive Pitch Deck:</strong> High-impact slide presentation engaging reviewers.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.24: Presentation Timing & Slide Planner
presentation_timing = {
    "Slide 1-2: Problem & Agricultural Context": 3,  # Minutes
    "Slide 3-4: Dataset & Field Sampling":       4,
    "Slide 5-6: Model Architecture & Tuning":    5,
    "Slide 7-8: Live Streamlit Dashboard Demo":  5,
    "Slide 9-10: Error Analysis & Conclusion":   3
}

total_minutes = sum(presentation_timing.values())
print("--- 20-Minute Technical Defense Timeline ---")
for section, mins in presentation_timing.items():
    print(f"{section:<42}: {mins} mins")
print(f"\nTotal Defense Duration: {total_minutes} minutes (+ 10 mins Q&A)")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Notice that 5 full minutes are reserved for the live app demo. Why do evaluators value seeing a live working demo?</p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `,

    'm4-t25': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Final Project Presentations and Viva</h1>
                <p class="duration">⏱️ Duration: 2 hours | Capstone Phase</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>During the viva defense, a professor asks: 'Why did your model fail on Plot 4?'</p>
                <p>Students who say 'I do not know' lose credibility and top distinction grades.</p>
                <p>Students who explain soil percolation differences and model boundaries impress the jury.</p>
                <p>Defending project limitations honestly demonstrates mature scientific and engineering rigor.</p>
                <p>How do we master the capstone viva voce examination with confidence and distinction?</p>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Capstone Milestone in Practice:</strong></p>
                    <p>Every agricultural technology project must connect technical algorithms directly to field agronomy.</p>
                    <p>We build transparent tools that farmers can trust and easily use in their daily operations.</p>
                </div>
            </div>

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Examiner Questions:</strong> Model limitations, data collection biases, edge cases.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Structured Defense:</strong> Acknowledge limitation, cite agronomic cause, explain mitigation.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Distinction Grade:</strong> Successful project defense and B.Sc. graduation honor.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 4.25: Viva Defense Question-Answer Simulator
common_viva_qa = [
    {
        "Question": "Why did you choose Random Forest over Deep Learning?",
        "Top_Answer": "Our dataset has 300 field samples. Deep learning overfits small tabular data, while Random Forest provides explainable feature importances."
    },
    {
        "Question": "What is the single biggest limitation of your project?",
        "Top_Answer": "The model was trained in Alfisol soils. Generalizing to Vertisols requires recalibration on clay moisture characteristics."
    }
]

print("--- Capstone Viva Defense Drill ---")
for i, qa in enumerate(common_viva_qa, start=1):
    print(f"\nQ{i}: {qa['Question']}")
    print(f"A{i}: {qa['Top_Answer']}")</code></pre>
            </div>

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Draft your own 2-sentence answer for: <em>'How would you deploy this model to 10,000 farmers in Karnataka?'</em></p>
</div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Clear scoping and data cleaning protect project timelines.</li>
                    <li>Always evaluate models using multiple agronomic metrics, not raw accuracy alone.</li>
                    <li>Packaging models into clean APIs and Streamlit dashboards ensures practical farmer adoption.</li>
                </ul>
            </div>
        </div>
    `
};
