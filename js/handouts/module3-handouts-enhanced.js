// Module 3 ENHANCED Handouts - AI/ML Applications in Agriculture
// Comprehensive content with deep explanations, code examples, and agricultural context

const module3HandoutsEnhanced = {
    // Enhanced content will be merged with existing handouts

    'm3-t1-enhanced': `
        <div class="real-world-case">
            <h2>🌍 Real-World Application</h2>
            <div class="case-study">
                <h3>Case Study: John Deere's Feature Engineering</h3>
                <p>John Deere's precision agriculture systems use over 200 engineered features from raw sensor data including:</p>
                <ul>
                    <li><strong>Temporal Features:</strong> Growing Degree Days (GDD), Days Since Planting</li>
                    <li><strong>Spatial Features:</strong> Field zones, elevation gradients, proximity to water sources</li>
                    <li><strong>Interaction Features:</strong> Temperature × Humidity, Rainfall × Soil Type</li>
                    <li><strong>Aggregated Features:</strong> 7-day rolling averages, seasonal patterns</li>
                </ul>
                <p><strong>Result:</strong> 15% improvement in yield prediction accuracy</p>
            </div>
        </div>

        <div class="advanced-techniques">
            <h2>🔬 Advanced Feature Engineering Techniques</h2>
            
            <h3>1. Growing Degree Days (GDD)</h3>
            <pre><code class="language-python">
# GDD is crucial for crop development prediction
def calculate_gdd(temp_max, temp_min, base_temp=10, max_temp=30):
    """
    Calculate Growing Degree Days
    Base temp: minimum temperature for growth
    Max temp: maximum effective temperature
    """
    avg_temp = (temp_max + temp_min) / 2
    
    # Cap temperatures
    avg_temp = min(max(avg_temp, base_temp), max_temp)
    
    gdd = max(0, avg_temp - base_temp)
    return gdd

# Example: Wheat crop
dates = pd.date_range('2024-01-01', periods=120, freq='D')
temps_max = np.random.uniform(25, 35, 120)
temps_min = np.random.uniform(15, 22, 120)

df = pd.DataFrame({
    'date': dates,
    'temp_max': temps_max,
    'temp_min': temps_min
})

df['gdd'] = df.apply(lambda row: calculate_gdd(row['temp_max'], row['temp_min']), axis=1)
df['cumulative_gdd'] = df['gdd'].cumsum()

print(f"Total GDD accumulated: {df['cumulative_gdd'].iloc[-1]:.1f}")
print(f"Wheat typically needs 1500-2000 GDD to mature")
            </code></pre>

            <h3>2. Vegetation Indices from Multispectral Data</h3>
            <pre><code class="language-python">
# NDVI (Normalized Difference Vegetation Index)
def calculate_ndvi(nir, red):
    """
    NDVI = (NIR - Red) / (NIR + Red)
    Range: -1 to 1 (healthy vegetation: 0.6-0.9)
    """
    return (nir - red) / (nir + red + 1e-8)  # Add epsilon to avoid division by zero

# EVI (Enhanced Vegetation Index) - more sensitive in high biomass
def calculate_evi(nir, red, blue, G=2.5, C1=6, C2=7.5, L=1):
    """
    EVI is better than NDVI in areas with dense vegetation
    """
    return G * ((nir - red) / (nir + C1 * red - C2 * blue + L))

# Simulate satellite data
np.random.seed(42)
n_pixels = 1000

satellite_data = pd.DataFrame({
    'nir': np.random.uniform(0.4, 0.9, n_pixels),  # Near-infrared
    'red': np.random.uniform(0.1, 0.3, n_pixels),  # Red band
    'blue': np.random.uniform(0.05, 0.15, n_pixels)  # Blue band
})

satellite_data['ndvi'] = calculate_ndvi(satellite_data['nir'], satellite_data['red'])
satellite_data['evi'] = calculate_evi(
    satellite_data['nir'], 
    satellite_data['red'], 
    satellite_data['blue']
)

# Classify vegetation health
satellite_data['health_status'] = pd.cut(
    satellite_data['ndvi'],
    bins=[-1, 0.2, 0.4, 0.6, 1],
    labels=['Bare Soil', 'Sparse Vegetation', 'Moderate', 'Healthy']
)

print(satellite_data['health_status'].value_counts())
            </code></pre>

            <h3>3. Soil Moisture Deficit</h3>
            <pre><code class="language-python">
def calculate_soil_moisture_deficit(rainfall, et, field_capacity=100):
    """
    Track soil moisture over time
    ET: Evapotranspiration
    Field Capacity: Maximum water soil can hold
    """
    moisture = field_capacity
    moisture_history = []
    
    for rain, evap in zip(rainfall, et):
        moisture = moisture + rain - evap
        moisture = max(0, min(moisture, field_capacity))  # Clamp between 0 and FC
        moisture_history.append(moisture)
    
    return np.array(moisture_history)

# Simulate 30 days
days = 30
rainfall = np.random.exponential(5, days)  # Sporadic rain
et = np.random.uniform(3, 7, days)  # Daily evapotranspiration

moisture = calculate_soil_moisture_deficit(rainfall, et)

# Create irrigation trigger feature
irrigation_needed = (moisture < 40).astype(int)  # Trigger at 40% capacity

print(f"Days needing irrigation: {irrigation_needed.sum()}")
            </code></pre>

            <h3>4. Pest Risk Index</h3>
            <pre><code class="language-python">
def calculate_pest_risk(temp, humidity, rainfall, crop_stage):
    """
    Pest risk increases with:
    - Temperature 20-30°C
    - High humidity (>70%)
    - Recent rainfall
    - Vulnerable crop stages
    """
    risk_score = 0
    
    # Temperature factor
    if 20 <= temp <= 30:
        risk_score += 3
    elif 15 <= temp < 20 or 30 < temp <= 35:
        risk_score += 1
    
    # Humidity factor
    if humidity > 80:
        risk_score += 3
    elif humidity > 70:
        risk_score += 2
    
    # Rainfall factor (recent moisture)
    if rainfall > 10:
        risk_score += 2
    elif rainfall > 5:
        risk_score += 1
    
    # Crop stage factor (flowering is most vulnerable)
    stage_risk = {
        'seedling': 1,
        'vegetative': 2,
        'flowering': 4,
        'fruiting': 3,
        'maturity': 1
    }
    risk_score += stage_risk.get(crop_stage, 0)
    
    return min(risk_score, 10)  # Cap at 10

# Example usage
farm_data = pd.DataFrame({
    'date': pd.date_range('2024-06-01', periods=60, freq='D'),
    'temperature': np.random.uniform(22, 32, 60),
    'humidity': np.random.uniform(60, 90, 60),
    'rainfall': np.random.exponential(3, 60),
    'crop_stage': ['vegetative']*20 + ['flowering']*20 + ['fruiting']*20
})

farm_data['pest_risk'] = farm_data.apply(
    lambda row: calculate_pest_risk(
        row['temperature'], 
        row['humidity'], 
        row['rainfall'], 
        row['crop_stage']
    ), 
    axis=1
)

# Alert when risk is high
high_risk_days = farm_data[farm_data['pest_risk'] >= 7]
print(f"High pest risk days: {len(high_risk_days)}")
print(high_risk_days[['date', 'pest_risk', 'crop_stage']].head())
            </code></pre>
        </div>

        <div class="best-practices">
            <h2>✅ Feature Engineering Best Practices</h2>
            <ol>
                <li><strong>Domain Knowledge First:</strong> Talk to agronomists before creating features</li>
                <li><strong>Start Simple:</strong> Basic features often outperform complex ones</li>
                <li><strong>Avoid Data Leakage:</strong> Don't use future information to predict the past</li>
                <li><strong>Feature Selection:</strong> More features ≠ better model. Remove redundant ones</li>
                <li><strong>Document Everything:</strong> Explain why each feature matters</li>
            </ol>
        </div>

        <div class="common-pitfalls">
            <h2>⚠️ Common Mistakes to Avoid</h2>
            <ul>
                <li><strong>Leakage:</strong> Using yield data to predict yield (circular logic)</li>
                <li><strong>Overfitting:</strong> Creating too many specific features that don't generalize</li>
                <li><strong>Ignoring Missing Data:</strong> Features with 50%+ missing values are problematic</li>
                <li><strong>Wrong Scaling:</strong> Scaling before train-test split (data leakage)</li>
                <li><strong>Forgetting Temporal Order:</strong> Shuffling time-series data randomly</li>
            </ul>
        </div>
    `,

    'm3-t2-enhanced': `
        <div class="real-world-case">
            <h2>🌍 Industry Application: Crop Yield Prediction at Scale</h2>
            <div class="case-study">
                <h3>Case Study: Climate Corporation (Bayer)</h3>
                <p>Climate FieldView uses ensemble models to predict corn and soybean yields across millions of acres:</p>
                <ul>
                    <li><strong>Data Sources:</strong> Weather, soil, satellite imagery, historical yields</li>
                    <li><strong>Models:</strong> Random Forest (baseline), XGBoost (primary), Neural Networks (experimental)</li>
                    <li><strong>Accuracy:</strong> Within 5-10% of actual yield for 80% of fields</li>
                    <li><strong>Business Impact:</strong> Helps farmers optimize inputs, insurers price policies</li>
                </ul>
            </div>
        </div>

        <div class="comprehensive-implementation">
            <h2>💻 Complete Yield Prediction Pipeline</h2>
            
            <h3>Step 1: Data Preparation</h3>
            <pre><code class="language-python">
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import matplotlib.pyplot as plt

# Generate realistic agricultural dataset
np.random.seed(42)
n_samples = 1000

# Simulate farm data
data = pd.DataFrame({
    # Weather features
    'avg_temp': np.random.uniform(20, 35, n_samples),
    'total_rainfall': np.random.uniform(300, 1200, n_samples),
    'sunshine_hours': np.random.uniform(1500, 2500, n_samples),
    'humidity': np.random.uniform(50, 85, n_samples),
    
    # Soil features
    'soil_ph': np.random.uniform(5.5, 8.0, n_samples),
    'soil_nitrogen': np.random.uniform(20, 80, n_samples),
    'soil_phosphorus': np.random.uniform(10, 50, n_samples),
    'soil_potassium': np.random.uniform(100, 300, n_samples),
    'organic_matter': np.random.uniform(1, 5, n_samples),
    
    # Management features
    'seed_rate': np.random.uniform(40, 80, n_samples),
    'fertilizer_amount': np.random.uniform(100, 300, n_samples),
    'irrigation_frequency': np.random.randint(0, 20, n_samples),
    
    # Spatial features
    'field_size': np.random.uniform(1, 50, n_samples),
    'elevation': np.random.uniform(100, 800, n_samples),
})

# Create target variable (yield) with realistic relationships
data['yield_kg_per_ha'] = (
    2000 +  # Base yield
    (data['total_rainfall'] - 600) * 2 +  # Rainfall effect
    (data['avg_temp'] - 27.5) * -50 +  # Temperature effect (optimal ~27.5°C)
    data['soil_nitrogen'] * 15 +  # Nitrogen effect
    data['fertilizer_amount'] * 3 +  # Fertilizer effect
    data['irrigation_frequency'] * 50 +  # Irrigation effect
    np.random.normal(0, 300, n_samples)  # Random variation
)

# Ensure realistic yield range
data['yield_kg_per_ha'] = data['yield_kg_per_ha'].clip(1000, 8000)

print("Dataset shape:", data.shape)
print("\\nYield statistics:")
print(data['yield_kg_per_ha'].describe())
            </code></pre>

            <h3>Step 2: Feature Engineering</h3>
            <pre><code class="language-python">
# Create advanced features
data['gdd'] = np.maximum(0, data['avg_temp'] - 10) * 120  # Approximate GDD
data['water_stress_index'] = data['total_rainfall'] / (data['avg_temp'] * 10)
data['nutrient_balance'] = (data['soil_nitrogen'] + data['soil_phosphorus'] + 
                             data['soil_potassium'] / 10) / 3
data['management_intensity'] = (data['fertilizer_amount'] / 100 + 
                                 data['irrigation_frequency'] / 10)

# Interaction features
data['temp_rainfall_interaction'] = data['avg_temp'] * data['total_rainfall'] / 1000
data['nitrogen_fertilizer'] = data['soil_nitrogen'] * data['fertilizer_amount'] / 100

print("\\nEngineered features added")
print(f"Total features: {len(data.columns) - 1}")  # Exclude target
            </code></pre>

            <h3>Step 3: Model Training with Multiple Algorithms</h3>
            <pre><code class="language-python">
# Prepare data
X = data.drop('yield_kg_per_ha', axis=1)
y = data['yield_kg_per_ha']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"Training set: {X_train.shape[0]} samples")
print(f"Test set: {X_test.shape[0]} samples")

# === Model 1: Random Forest ===
print("\\n=== Training Random Forest ===")
rf_model = RandomForestRegressor(
    n_estimators=100,
    max_depth=15,
    min_samples_split=5,
    min_samples_leaf=2,
    random_state=42,
    n_jobs=-1
)

rf_model.fit(X_train, y_train)
rf_pred = rf_model.predict(X_test)

rf_rmse = np.sqrt(mean_squared_error(y_test, rf_pred))
rf_mae = mean_absolute_error(y_test, rf_pred)
rf_r2 = r2_score(y_test, rf_pred)

print(f"Random Forest RMSE: {rf_rmse:.2f} kg/ha")
print(f"Random Forest MAE: {rf_mae:.2f} kg/ha")
print(f"Random Forest R²: {rf_r2:.4f}")

# === Model 2: Gradient Boosting ===
print("\\n=== Training Gradient Boosting ===")
gb_model = GradientBoostingRegressor(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    min_samples_split=5,
    random_state=42
)

gb_model.fit(X_train, y_train)
gb_pred = gb_model.predict(X_test)

gb_rmse = np.sqrt(mean_squared_error(y_test, gb_pred))
gb_mae = mean_absolute_error(y_test, gb_pred)
gb_r2 = r2_score(y_test, gb_pred)

print(f"Gradient Boosting RMSE: {gb_rmse:.2f} kg/ha")
print(f"Gradient Boosting MAE: {gb_mae:.2f} kg/ha")
print(f"Gradient Boosting R²: {gb_r2:.4f}")

# === Ensemble: Average predictions ===
ensemble_pred = (rf_pred + gb_pred) / 2
ensemble_rmse = np.sqrt(mean_squared_error(y_test, ensemble_pred))
ensemble_r2 = r2_score(y_test, ensemble_pred)

print(f"\\nEnsemble RMSE: {ensemble_rmse:.2f} kg/ha")
print(f"Ensemble R²: {ensemble_r2:.4f}")
            </code></pre>

            <h3>Step 4: Feature Importance Analysis</h3>
            <pre><code class="language-python">
# Get feature importance from Random Forest
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf_model.feature_importances_
}).sort_values('importance', ascending=False)

print("\\n=== Top 10 Most Important Features ===")
print(feature_importance.head(10))

# Visualize
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 6))
plt.barh(feature_importance.head(10)['feature'], 
         feature_importance.head(10)['importance'])
plt.xlabel('Importance')
plt.title('Top 10 Features for Yield Prediction')
plt.tight_layout()
plt.savefig('feature_importance.png', dpi=300, bbox_inches='tight')
print("\\nFeature importance plot saved!")
            </code></pre>

            <h3>Step 5: Model Evaluation and Visualization</h3>
            <pre><code class="language-python">
# Prediction vs Actual plot
plt.figure(figsize=(10, 6))
plt.scatter(y_test, rf_pred, alpha=0.5, label='Random Forest')
plt.scatter(y_test, gb_pred, alpha=0.5, label='Gradient Boosting')
plt.plot([y_test.min(), y_test.max()], 
         [y_test.min(), y_test.max()], 
         'r--', lw=2, label='Perfect Prediction')
plt.xlabel('Actual Yield (kg/ha)')
plt.ylabel('Predicted Yield (kg/ha)')
plt.title('Yield Prediction: Actual vs Predicted')
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('prediction_comparison.png', dpi=300, bbox_inches='tight')

# Residual analysis
residuals = y_test - rf_pred
plt.figure(figsize=(10, 6))
plt.scatter(rf_pred, residuals, alpha=0.5)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('Predicted Yield (kg/ha)')
plt.ylabel('Residuals (kg/ha)')
plt.title('Residual Plot - Random Forest')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('residuals.png', dpi=300, bbox_inches='tight')

print("\\nVisualization plots saved!")
            </code></pre>
        </div>

        <div class="deployment-guide">
            <h2>🚀 Deployment Considerations</h2>
            <h3>Making Predictions for New Fields</h3>
            <pre><code class="language-python">
# Save the trained model
import joblib

joblib.dump(rf_model, 'crop_yield_model.pkl')
print("Model saved!")

# Load and use for new predictions
loaded_model = joblib.load('crop_yield_model.pkl')

# New field data
new_field = pd.DataFrame({
    'avg_temp': [28.5],
    'total_rainfall': [850],
    'sunshine_hours': [2100],
    'humidity': [68],
    'soil_ph': [6.8],
    'soil_nitrogen': [55],
    'soil_phosphorus': [28],
    'soil_potassium': [220],
    'organic_matter': [3.2],
    'seed_rate': [60],
    'fertilizer_amount': [200],
    'irrigation_frequency': [12],
    'field_size': [15],
    'elevation': [350]
})

# Add engineered features
new_field['gdd'] = np.maximum(0, new_field['avg_temp'] - 10) * 120
new_field['water_stress_index'] = new_field['total_rainfall'] / (new_field['avg_temp'] * 10)
new_field['nutrient_balance'] = (new_field['soil_nitrogen'] + new_field['soil_phosphorus'] + 
                                  new_field['soil_potassium'] / 10) / 3
new_field['management_intensity'] = (new_field['fertilizer_amount'] / 100 + 
                                      new_field['irrigation_frequency'] / 10)
new_field['temp_rainfall_interaction'] = new_field['avg_temp'] * new_field['total_rainfall'] / 1000
new_field['nitrogen_fertilizer'] = new_field['soil_nitrogen'] * new_field['fertilizer_amount'] / 100

predicted_yield = loaded_model.predict(new_field)
print(f"\\nPredicted yield for new field: {predicted_yield[0]:.2f} kg/ha")
print(f"Expected production for 15 ha: {predicted_yield[0] * 15:.2f} kg")
            </code></pre>
        </div>

        <div class="advanced-topics">
            <h2>🎓 Advanced Topics</h2>
            <ul>
                <li><strong>Spatial Modeling:</strong> Account for field location and neighboring effects</li>
                <li><strong>Temporal Modeling:</strong> Use historical yields to improve predictions</li>
                <li><strong>Multi-output Models:</strong> Predict yield + quality simultaneously</li>
                <li><strong>Uncertainty Quantification:</strong> Provide confidence intervals with predictions</li>
                <li><strong>Online Learning:</strong> Update models as new data arrives during season</li>
            </ul>
        </div>
    `
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = module3HandoutsEnhanced;
}
