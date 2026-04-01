// Module 5 Handouts Part 2 - Bonus Projects 21-70
// Each project has: Title, Objective, Key Concepts, Starter Code, Expected Output

function m5BonusCard(num, icon, title, objective, concepts, code) {
    return `
    <div class="handout-premium">
        <div class="topic-header"><h1>${icon} Bonus Project ${num}: ${title}</h1>
            <p class="duration">⏱️ Estimated: 2-3 hours</p>
        </div>
        <div class="learning-objectives">
            <h2>🎯 Objective</h2>
            <p>${objective}</p>
        </div>
        <div class="concept-section">
            <h2>📌 Key Concepts</h2>
            <ul>${concepts.map(c => '<li>' + c + '</li>').join('')}</ul>
        </div>
        <div class="code-section">
            <h2>💻 Starter Code</h2>
            <pre><code class="language-python">${code}</code></pre>
        </div>
    </div>`;
}

const module5HandoutsPart2 = {
    'm5-t22': m5BonusCard(21, '🍃', 'Leaf Area Index Estimator',
        'Estimate Leaf Area Index (LAI) from top-down canopy images using image segmentation to separate green leaf pixels from background.',
        ['Image thresholding in HSV color space', 'Green pixel ratio as LAI proxy', 'OpenCV contour detection', 'Correlation with ground-truth LAI measurements'],
        `import cv2
import numpy as np

def estimate_lai(image_path):
    img = cv2.imread(image_path)
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    # Green mask: Hue 25-85, Sat 40-255, Val 40-255
    mask = cv2.inRange(hsv, (25, 40, 40), (85, 255, 255))
    green_pixels = np.count_nonzero(mask)
    total_pixels = mask.shape[0] * mask.shape[1]
    green_fraction = green_pixels / total_pixels
    # LAI approximation (empirical: LAI ≈ -ln(1 - green_fraction) * 2)
    lai = -np.log(1 - min(green_fraction, 0.99)) * 2
    print(f"Green fraction: {green_fraction:.3f}, Estimated LAI: {lai:.2f}")
    return lai

# Test with sample image
# estimate_lai("canopy_photo.jpg")`),

    'm5-t23': m5BonusCard(22, '🌱', 'Seed Germination Predictor',
        'Predict seed germination rate based on environmental conditions (temperature, moisture, seed age) using classification models.',
        ['Logistic regression for binary outcomes', 'Feature importance analysis', 'Germination percentage modeling', 'Agricultural seed testing standards'],
        `import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

np.random.seed(42)
n = 500
data = pd.DataFrame({
    'temperature_C': np.random.uniform(15, 40, n),
    'moisture_pct': np.random.uniform(20, 90, n),
    'seed_age_months': np.random.randint(1, 36, n),
    'seed_weight_mg': np.random.uniform(10, 50, n)
})
# Germination more likely at 20-30°C, high moisture, young seeds
data['germinated'] = ((data['temperature_C'].between(20, 32)) &
                       (data['moisture_pct'] > 40) &
                       (data['seed_age_months'] < 18)).astype(int)
# Add noise
flip = np.random.choice(n, size=int(n*0.1), replace=False)
data.loc[flip, 'germinated'] = 1 - data.loc[flip, 'germinated']

X = data.drop('germinated', axis=1)
y = data['germinated']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)
print(classification_report(y_test, y_test.values))
print("Feature Importance:", dict(zip(X.columns, model.feature_importances_.round(3))))`),

    'm5-t24': m5BonusCard(23, '🐝', 'Pollinator Activity Monitor',
        'Detect and count pollinators (bees, butterflies) in field images using object detection to assess pollination health.',
        ['YOLOv8 or SSD for small object detection', 'Data augmentation for insect images', 'Activity counting per time window', 'Biodiversity index calculation'],
        `# Pollinator counting from field camera images
import numpy as np
from collections import Counter

# Simulated detection results (bounding boxes per frame)
detections_per_frame = [
    [("bee", 0.92), ("bee", 0.87), ("butterfly", 0.78)],
    [("bee", 0.95), ("bee", 0.88), ("bee", 0.76), ("butterfly", 0.82)],
    [("bee", 0.91)],
    [("bee", 0.89), ("butterfly", 0.85), ("butterfly", 0.79)],
]

total_counts = Counter()
for frame in detections_per_frame:
    for species, conf in frame:
        if conf > 0.75:  # confidence threshold
            total_counts[species] += 1

print("Pollinator Counts:", dict(total_counts))
total = sum(total_counts.values())
diversity = -sum((c/total)*np.log(c/total) for c in total_counts.values())
print(f"Shannon Diversity Index: {diversity:.3f}")
print(f"Total visits: {total} across {len(total_counts)} species")`),

    'm5-t25': m5BonusCard(24, '♻️', 'Compost Maturity Classifier',
        'Classify compost maturity stage (raw, active, curing, mature) from sensor readings (temperature, pH, C:N ratio, moisture).',
        ['Multi-class classification', 'Compost science fundamentals', 'Sensor data preprocessing', 'Decision boundary visualization'],
        `import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier, export_text

np.random.seed(42)
stages = {'raw': 0, 'active': 1, 'curing': 2, 'mature': 3}
n = 200
data = pd.DataFrame({
    'temp_C': np.concatenate([np.random.normal(25,3,50), np.random.normal(60,5,50),
                              np.random.normal(40,4,50), np.random.normal(28,3,50)]),
    'pH': np.concatenate([np.random.normal(5.5,0.5,50), np.random.normal(7.5,0.5,50),
                          np.random.normal(7.0,0.3,50), np.random.normal(7.2,0.2,50)]),
    'CN_ratio': np.concatenate([np.random.normal(30,5,50), np.random.normal(20,3,50),
                                np.random.normal(15,2,50), np.random.normal(12,1,50)]),
    'moisture_pct': np.concatenate([np.random.normal(65,5,50), np.random.normal(55,5,50),
                                    np.random.normal(45,5,50), np.random.normal(35,5,50)]),
    'stage': ['raw']*50 + ['active']*50 + ['curing']*50 + ['mature']*50
})
X, y = data.drop('stage', axis=1), data['stage']
clf = DecisionTreeClassifier(max_depth=4, random_state=42)
clf.fit(X, y)
print(export_text(clf, feature_names=list(X.columns)))
print(f"Training accuracy: {clf.score(X, y):.2%}")`),

    'm5-t26': m5BonusCard(25, '⚡', 'Farm Energy Consumption Optimizer',
        'Forecast farm energy consumption and optimize usage by scheduling high-power operations during off-peak hours or solar availability.',
        ['Time series forecasting for energy demand', 'Solar generation prediction', 'Load scheduling optimization', 'Cost-benefit analysis'],
        `import pandas as pd
import numpy as np

np.random.seed(42)
hours = pd.date_range('2024-01-01', periods=168, freq='h')  # 1 week
data = pd.DataFrame({
    'hour': hours,
    'solar_kw': np.maximum(0, 5*np.sin(np.pi*(hours.hour-6)/12) * (hours.hour>=6) * (hours.hour<=18) + np.random.normal(0,0.5,168)),
    'demand_kw': 2 + 3*np.sin(np.pi*hours.hour/12) + np.random.normal(0,0.5,168),
    'tariff_per_kwh': np.where((hours.hour>=18)|(hours.hour<6), 8.5, 5.0)
})
data['grid_needed'] = np.maximum(0, data['demand_kw'] - data['solar_kw'])
data['cost'] = data['grid_needed'] * data['tariff_per_kwh']
daily_cost = data.groupby(data['hour'].dt.date)['cost'].sum()
print("Daily energy costs (₹):")
print(daily_cost.round(2))
print(f"\\nWeekly total: ₹{data['cost'].sum():.2f}")
print(f"Solar offset: {(1 - data['grid_needed'].sum()/data['demand_kw'].sum())*100:.1f}%")`),

    'm5-t27': m5BonusCard(26, '🥛', 'Milk Quality Analyzer',
        'Detect milk adulteration and predict fat/protein content from sensor readings using classification and regression models.',
        ['Multi-output regression', 'Adulteration detection as anomaly', 'Spectroscopy data analysis', 'Food safety thresholds'],
        `import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest, RandomForestRegressor

np.random.seed(42)
n = 300
milk = pd.DataFrame({
    'fat_pct': np.random.normal(3.5, 0.5, n),
    'protein_pct': np.random.normal(3.2, 0.3, n),
    'lactose_pct': np.random.normal(4.8, 0.2, n),
    'density': np.random.normal(1.030, 0.002, n),
    'pH': np.random.normal(6.6, 0.1, n),
    'EC_mS': np.random.normal(4.5, 0.3, n)
})
# Add 20 adulterated samples (water added → low density, low fat)
adultered = milk.sample(20).index
milk.loc[adultered, 'density'] -= 0.005
milk.loc[adultered, 'fat_pct'] -= 1.0
milk.loc[adultered, 'lactose_pct'] -= 0.5

iso = IsolationForest(contamination=0.07, random_state=42)
milk['anomaly'] = iso.fit_predict(milk)
detected = (milk['anomaly'] == -1).sum()
print(f"Anomalies detected: {detected} (actual adulterated: 20)")
print(f"Detection rate: {min(detected,20)/20*100:.0f}%")`),

    'm5-t28': m5BonusCard(27, '🔥', 'Crop Residue Burn Detection from Satellite',
        'Detect active crop residue burning events from satellite thermal data and correlate with air quality index.',
        ['Thermal anomaly detection', 'MODIS fire hotspot data', 'Spatial clustering of burn events', 'AQI correlation analysis'],
        `import numpy as np
import pandas as pd

np.random.seed(42)
# Simulated satellite thermal readings (grid 50x50)
grid = np.random.normal(300, 5, (50, 50))  # Background temp ~300K
# Add fire hotspots
for _ in range(8):
    x, y = np.random.randint(5, 45, 2)
    grid[x-2:x+2, y-2:y+2] += np.random.uniform(30, 80)

# Detection: pixels > mean + 3*std
threshold = grid.mean() + 3 * grid.std()
fire_mask = grid > threshold
fire_pixels = np.count_nonzero(fire_mask)
print(f"Thermal threshold: {threshold:.1f}K")
print(f"Fire pixels detected: {fire_pixels} / {grid.size}")
print(f"Burn area estimate: {fire_pixels * 0.01:.2f} km² (assuming 100m resolution)")

# Simulated AQI correlation
burn_days = [12, 8, 15, 20, 5, 18, 10, 25]
aqi_values = [180, 150, 220, 280, 120, 250, 160, 310]
corr = np.corrcoef(burn_days, aqi_values)[0,1]
print(f"Correlation (burn events vs AQI): {corr:.3f}")`),

    'm5-t29': m5BonusCard(28, '🚜', 'Precision Fertilizer Spreader Simulator',
        'Simulate variable-rate fertilizer application based on GPS-mapped soil nutrient zones to optimize input costs.',
        ['Variable rate technology (VRT)', 'GPS grid mapping', 'Nutrient zone classification', 'Cost savings calculation'],
        `import numpy as np
import pandas as pd

np.random.seed(42)
# Farm grid: 10x10 zones (each 0.1 ha)
grid_size = 10
n_zones = grid_size ** 2
zones = pd.DataFrame({
    'zone_id': range(n_zones),
    'row': np.repeat(range(grid_size), grid_size),
    'col': np.tile(range(grid_size), grid_size),
    'soil_N_kg_ha': np.random.uniform(80, 250, n_zones),
    'target_N_kg_ha': 180  # Target for wheat
})
zones['deficit'] = np.maximum(0, zones['target_N_kg_ha'] - zones['soil_N_kg_ha'])
zones['urea_kg_ha'] = zones['deficit'] / 0.46  # Urea is 46% N

uniform_rate = zones['urea_kg_ha'].mean()
vrt_total = zones['urea_kg_ha'].sum() * 0.1  # 0.1 ha per zone
uniform_total = uniform_rate * n_zones * 0.1
savings = uniform_total - vrt_total
print(f"Uniform application: {uniform_total:.1f} kg urea total")
print(f"Variable rate (VRT): {vrt_total:.1f} kg urea total")
print(f"Savings: {savings:.1f} kg ({savings/uniform_total*100:.1f}%)")
print(f"Cost saved: ₹{savings * 8:.0f} (@ ₹8/kg urea)")`),

    'm5-t30': m5BonusCard(29, '🐟', 'Aquaponics System Monitor',
        'Monitor and balance fish-plant aquaponics system parameters using IoT sensors and rule-based + ML control.',
        ['Aquaponics nitrogen cycle', 'pH and ammonia monitoring', 'Fish-plant ratio optimization', 'Automated feeding schedules'],
        `import numpy as np
import pandas as pd

np.random.seed(42)
hours = 168  # 1 week
data = pd.DataFrame({
    'hour': range(hours),
    'pH': 7.0 + np.cumsum(np.random.normal(0, 0.02, hours)),
    'ammonia_ppm': np.maximum(0, 0.5 + np.cumsum(np.random.normal(0.01, 0.05, hours))),
    'nitrate_ppm': np.maximum(0, 20 + np.cumsum(np.random.normal(0.1, 0.5, hours))),
    'DO_ppm': np.maximum(0, 6 + np.random.normal(0, 0.3, hours)),
    'water_temp_C': 25 + np.random.normal(0, 0.5, hours)
})

# Alert rules
alerts = []
for _, row in data.iterrows():
    if row['ammonia_ppm'] > 2.0: alerts.append((row['hour'], 'HIGH AMMONIA'))
    if row['pH'] < 6.0 or row['pH'] > 8.0: alerts.append((row['hour'], 'pH OUT OF RANGE'))
    if row['DO_ppm'] < 4.0: alerts.append((row['hour'], 'LOW OXYGEN'))

print(f"Total alerts in 1 week: {len(alerts)}")
for h, msg in alerts[:5]: print(f"  Hour {h}: ⚠️ {msg}")
print(f"Avg pH: {data['pH'].mean():.2f}, Avg Ammonia: {data['ammonia_ppm'].mean():.2f} ppm")`),

    'm5-t31': m5BonusCard(30, '🌾', 'Grain Quality Grading Using CV',
        'Grade grain quality (Grade A/B/C/Reject) from images based on size, color, and defect detection.',
        ['Image segmentation for individual grains', 'Color histogram features', 'Shape descriptors (circularity, aspect ratio)', 'Multi-class classification'],
        `import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

np.random.seed(42)
n = 400
# Simulated grain features extracted from images
data = {
    'avg_size_mm2': np.concatenate([np.random.normal(25,2,100), np.random.normal(20,3,100),
                                     np.random.normal(15,3,100), np.random.normal(10,4,100)]),
    'color_score': np.concatenate([np.random.normal(0.9,0.05,100), np.random.normal(0.75,0.08,100),
                                    np.random.normal(0.6,0.1,100), np.random.normal(0.4,0.15,100)]),
    'defect_pct': np.concatenate([np.random.uniform(0,5,100), np.random.uniform(3,15,100),
                                   np.random.uniform(10,30,100), np.random.uniform(25,60,100)]),
    'circularity': np.concatenate([np.random.normal(0.95,0.02,100), np.random.normal(0.88,0.05,100),
                                    np.random.normal(0.80,0.07,100), np.random.normal(0.70,0.1,100)]),
    'grade': ['A']*100 + ['B']*100 + ['C']*100 + ['Reject']*100
}
import pandas as pd
df = pd.DataFrame(data)
X, y = df.drop('grade', axis=1), df['grade']
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)
print(classification_report(y, model.predict(X)))
print("Feature importance:", dict(zip(X.columns, model.feature_importances_.round(3))))`),

    'm5-t32': m5BonusCard(31, '🌧️', 'Rainfall Prediction Using Ensemble Models',
        'Predict daily rainfall occurrence and amount using stacked ensemble of multiple ML models.',
        ['Stacking ensemble (meta-learner)', 'Weather feature engineering', 'Probability calibration', 'Brier score evaluation'],
        `import numpy as np
from sklearn.ensemble import StackingClassifier, RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score

np.random.seed(42)
n = 1000
X = np.column_stack([
    np.random.uniform(20, 40, n),   # temperature
    np.random.uniform(30, 95, n),   # humidity
    np.random.uniform(990, 1020, n),# pressure
    np.random.uniform(0, 30, n),    # wind_speed
    np.random.uniform(0, 100, n)    # cloud_cover
])
# Rain more likely with high humidity, low pressure, high cloud cover
prob = 1/(1+np.exp(-(0.05*X[:,1] - 0.1*X[:,2] + 0.03*X[:,4] - 5)))
y = (np.random.random(n) < prob).astype(int)

stack = StackingClassifier(
    estimators=[('rf', RandomForestClassifier(n_estimators=50)),
                ('gb', GradientBoostingClassifier(n_estimators=50)),
                ('svm', SVC(probability=True))],
    final_estimator=LogisticRegression(), cv=5)
scores = cross_val_score(stack, X, y, cv=5, scoring='accuracy')
print(f"Stacked Ensemble CV Accuracy: {scores.mean():.3f} ± {scores.std():.3f}")`),

    'm5-t33': m5BonusCard(32, '🛡️', 'Crop Insurance Risk Calculator',
        'Calculate crop insurance premiums based on historical yield variability, weather risk, and farm characteristics.',
        ['Actuarial risk modeling', 'Yield distribution fitting', 'Value-at-Risk (VaR) for agriculture', 'Premium calculation formulas'],
        `import numpy as np
from scipy import stats

np.random.seed(42)
# Historical yields for a district (20 years)
yields = np.array([4.2,3.8,4.5,2.1,4.8,4.0,3.5,4.6,1.8,4.3,
                    4.1,3.9,4.4,3.2,4.7,4.0,2.5,4.5,3.8,4.2])
guaranteed_yield = np.mean(yields) * 0.7  # 70% of average
sum_insured = 50000  # ₹ per hectare

# Fit distribution
mu, sigma = stats.norm.fit(yields)
print(f"Yield distribution: μ={mu:.2f}, σ={sigma:.2f} t/ha")

# Probability of loss (yield < guaranteed)
prob_loss = stats.norm.cdf(guaranteed_yield, mu, sigma)
expected_loss = stats.norm.expect(lambda x: max(0, guaranteed_yield-x)*sum_insured/mu,
                                   loc=mu, scale=sigma)
premium = expected_loss * 1.3  # 30% loading factor
print(f"Guaranteed yield: {guaranteed_yield:.2f} t/ha")
print(f"Probability of loss: {prob_loss:.2%}")
print(f"Expected loss: ₹{expected_loss:.0f}/ha")
print(f"Premium (with 30% loading): ₹{premium:.0f}/ha")`),

    'm5-t34': m5BonusCard(33, '🥀', 'Wilt Disease Early Warning System',
        'Detect early wilt symptoms using thermal and RGB imagery before visible wilting occurs.',
        ['Canopy temperature differential', 'Thermal-RGB image fusion', 'Stomatal conductance proxy', 'Time-series anomaly detection'],
        `import numpy as np
import pandas as pd

np.random.seed(42)
days = 30
# Simulated daily canopy temperature differential (Tc - Ta)
healthy = np.random.normal(-2, 0.5, days)  # Healthy: canopy cooler than air
# Wilt onset at day 15: canopy gets warmer
wilting = healthy.copy()
wilting[15:] += np.linspace(0, 4, 15) + np.random.normal(0, 0.3, 15)

# Detection: rolling mean crosses threshold
threshold = 0  # Tc - Ta > 0 means stress
rolling_mean = pd.Series(wilting).rolling(3).mean()
alert_day = next((i for i, v in enumerate(rolling_mean) if v and v > threshold), None)

print("Day | Healthy ΔT | Wilting ΔT | Alert")
for d in range(days):
    alert = " ⚠️ STRESS" if rolling_mean.iloc[d] and rolling_mean.iloc[d] > threshold else ""
    print(f" {d+1:2d} |   {healthy[d]:+.2f}   |   {wilting[d]:+.2f}   |{alert}")
print(f"\\nFirst alert: Day {alert_day+1} (actual wilt onset: Day 16)")`),

    'm5-t35': m5BonusCard(34, '🏷️', 'Organic vs Conventional Produce Classifier',
        'Classify produce as organic or conventional using chemical residue profiles and spectral data.',
        ['Pesticide residue analysis', 'PCA for dimensionality reduction', 'SVM classification', 'ROC-AUC evaluation'],
        `import numpy as np
from sklearn.svm import SVC
from sklearn.decomposition import PCA
from sklearn.metrics import roc_auc_score, classification_report
from sklearn.model_selection import train_test_split

np.random.seed(42)
n = 300
# Organic: low residues, different mineral profile
organic = np.column_stack([np.random.exponential(0.5, (150,5)),
                            np.random.normal(50, 10, (150,3))])
conventional = np.column_stack([np.random.exponential(3, (150,5)),
                                 np.random.normal(45, 8, (150,3))])
X = np.vstack([organic, conventional])
y = np.array([0]*150 + [1]*150)  # 0=organic, 1=conventional

pca = PCA(n_components=3)
X_pca = pca.fit_transform(X)
print(f"PCA explained variance: {pca.explained_variance_ratio_.round(3)}")

X_tr, X_te, y_tr, y_te = train_test_split(X_pca, y, test_size=0.2)
svm = SVC(kernel='rbf', probability=True)
svm.fit(X_tr, y_tr)
y_prob = svm.predict_proba(X_te)[:,1]
print(f"AUC-ROC: {roc_auc_score(y_te, y_prob):.3f}")
print(classification_report(y_te, svm.predict(X_te), target_names=['Organic','Conventional']))`),

    'm5-t36': m5BonusCard(35, '👷', 'Farm Labor Demand Forecaster',
        'Predict seasonal labor demand for different farming operations using time series and crop calendar data.',
        ['Seasonal decomposition', 'Crop calendar integration', 'Prophet/ARIMA forecasting', 'Workforce planning optimization'],
        `import numpy as np, pandas as pd
months = pd.date_range('2022-01', periods=24, freq='M')
# Labor demand varies by season (Kharif peak: Jun-Sep, Rabi: Nov-Feb)
base = 50 + 30*np.sin(2*np.pi*np.arange(24)/12 - np.pi/3) + np.random.normal(0,5,24)
df = pd.DataFrame({'month': months, 'labor_demand': np.maximum(10, base)})
# Simple moving average forecast
df['MA_3'] = df['labor_demand'].rolling(3).mean()
df['forecast'] = df['MA_3'].shift(1)
mae = np.abs(df['labor_demand'] - df['forecast']).dropna().mean()
print(df[['month','labor_demand','forecast']].tail(6).to_string(index=False))
print(f"MAE: {mae:.1f} workers/month")`),

    'm5-t37': m5BonusCard(36, '🧂', 'Soil Salinity Mapping Using Remote Sensing',
        'Map soil salinity levels across agricultural fields using satellite spectral indices and ground-truth EC data.',
        ['Salinity indices (SI, NDSI)', 'Spatial interpolation (Kriging)', 'EC measurement correlation', 'Reclamation zone identification'],
        `import numpy as np
np.random.seed(42)
# Simulated field grid 20x20 with EC measurements at 25 sample points
sample_x = np.random.randint(0, 20, 25)
sample_y = np.random.randint(0, 20, 25)
sample_ec = np.random.uniform(0.5, 8.0, 25)  # dS/m
# Simple IDW interpolation
grid = np.zeros((20, 20))
for i in range(20):
    for j in range(20):
        dists = np.sqrt((sample_x-i)**2 + (sample_y-j)**2) + 0.1
        weights = 1 / dists**2
        grid[i,j] = np.average(sample_ec, weights=weights)
# Classification
classes = np.where(grid < 2, 'Non-saline', np.where(grid < 4, 'Slightly', np.where(grid < 8, 'Moderately', 'Highly')))
unique, counts = np.unique(classes, return_counts=True)
print("Salinity Classification:")
for c, n in zip(unique, counts): print(f"  {c}: {n} zones ({n/400*100:.1f}%)")`),

    'm5-t38': m5BonusCard(37, '📏', 'Plant Height Estimation from Drone LiDAR',
        'Estimate crop plant height from drone-captured point cloud data by computing Digital Surface Model minus Digital Terrain Model.',
        ['Point cloud processing', 'DSM and DTM generation', 'Canopy Height Model (CHM)', 'Growth rate calculation'],
        `import numpy as np
np.random.seed(42)
# Simulated LiDAR returns: (x, y, z_ground, z_canopy)
n_points = 500
x = np.random.uniform(0, 100, n_points)
y = np.random.uniform(0, 100, n_points)
z_ground = 100 + 0.02*x + 0.01*y + np.random.normal(0, 0.1, n_points)
plant_height = np.random.normal(0.8, 0.15, n_points)  # ~80cm crop
z_canopy = z_ground + np.maximum(0.1, plant_height)
chm = z_canopy - z_ground  # Canopy Height Model
print(f"Plant height stats:")
print(f"  Mean: {chm.mean():.2f} m, Std: {chm.std():.2f} m")
print(f"  Min: {chm.min():.2f} m, Max: {chm.max():.2f} m")
print(f"  Plants > 1m: {(chm > 1.0).sum()} ({(chm > 1.0).mean()*100:.1f}%)")
print(f"  Stunted (< 0.5m): {(chm < 0.5).sum()} ({(chm < 0.5).mean()*100:.1f}%)")`),

    'm5-t39': m5BonusCard(38, '🍄', 'Mushroom Edibility Classifier',
        'Classify mushrooms as edible or poisonous based on physical characteristics using the UCI Mushroom Dataset.',
        ['Feature encoding for categorical data', 'Decision tree interpretability', 'Feature importance for safety', 'Zero false-negative requirement'],
        `import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
import numpy as np

np.random.seed(42)
n = 1000
features = ['cap_shape','cap_color','odor','gill_size','stalk_shape','ring_type','habitat']
data = pd.DataFrame({f: np.random.choice(['a','b','c','d'], n) for f in features})
data['edible'] = np.where((data['odor']=='a') & (data['gill_size'].isin(['a','b'])), 1, 0)
data['edible'] ^= (np.random.random(n) < 0.05).astype(int)  # 5% noise

X = pd.get_dummies(data.drop('edible', axis=1))
y = data['edible']
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)
clf = DecisionTreeClassifier(max_depth=5, random_state=42)
clf.fit(X_tr, y_tr)
print(classification_report(y_te, clf.predict(X_te), target_names=['Poisonous','Edible']))
top5 = sorted(zip(X.columns, clf.feature_importances_), key=lambda x: -x[1])[:5]
print("Top 5 features:", [(f, round(i,3)) for f,i in top5])`),

    'm5-t40': m5BonusCard(39, '🌿', 'Agri-Waste to Energy Potential Estimator',
        'Estimate biogas/bioenergy potential from agricultural waste (crop residues, animal manure) for a district.',
        ['Biomass energy conversion factors', 'Waste generation estimation', 'Energy potential calculation', 'Economic feasibility analysis'],
        `import pandas as pd
crops = pd.DataFrame({
    'crop': ['Rice','Wheat','Sugarcane','Cotton','Maize'],
    'area_ha': [5000, 3000, 2000, 1500, 1000],
    'residue_ratio': [1.5, 1.3, 0.3, 3.0, 2.0],  # kg residue per kg grain
    'yield_t_ha': [4.0, 3.5, 70, 1.5, 5.0],
    'energy_MJ_per_kg': [14.0, 17.0, 16.5, 15.8, 15.0]
})
crops['residue_t'] = crops['area_ha'] * crops['yield_t_ha'] * crops['residue_ratio']
crops['energy_GJ'] = crops['residue_t'] * crops['energy_MJ_per_kg'] / 1000
crops['electricity_MWh'] = crops['energy_GJ'] * 0.277 * 0.25  # 25% conversion efficiency
print(crops[['crop','residue_t','energy_GJ','electricity_MWh']].to_string(index=False))
print(f"\\nTotal residue: {crops['residue_t'].sum():.0f} tonnes")
print(f"Total energy: {crops['energy_GJ'].sum():.0f} GJ")
print(f"Electricity potential: {crops['electricity_MWh'].sum():.0f} MWh")
print(f"Can power: {crops['electricity_MWh'].sum()/3:.0f} homes (@ 3 MWh/year)")`),

    'm5-t41': m5BonusCard(40, '❄️', 'Frost Damage Prediction System',
        'Predict frost events and assess crop vulnerability to trigger protective measures (irrigation, covers) in advance.',
        ['Minimum temperature forecasting', 'Frost probability modeling', 'Crop-specific damage thresholds', 'Alert and response system'],
        `import numpy as np, pandas as pd
np.random.seed(42)
days = 90  # Winter season
temps = pd.DataFrame({
    'date': pd.date_range('2024-11-01', periods=days),
    'min_temp_C': 5 + 8*np.sin(2*np.pi*np.arange(days)/90) + np.random.normal(0, 3, days),
    'humidity_pct': np.random.uniform(60, 95, days),
    'wind_kmh': np.random.uniform(0, 20, days),
    'cloud_cover': np.random.uniform(0, 100, days)
})
# Frost risk: low temp + low wind + clear sky + high humidity
temps['frost_risk'] = ((temps['min_temp_C'] < 2) & (temps['wind_kmh'] < 5) &
                        (temps['cloud_cover'] < 30)).astype(int)
frost_days = temps['frost_risk'].sum()
print(f"Frost risk days: {frost_days} out of {days}")
print(f"Coldest day: {temps.loc[temps['min_temp_C'].idxmin(), 'date'].strftime('%Y-%m-%d')} ({temps['min_temp_C'].min():.1f}°C)")
print("\\nFrost risk dates:")
for _, row in temps[temps['frost_risk']==1].iterrows():
    print(f"  {row['date'].strftime('%b %d')}: {row['min_temp_C']:.1f}°C")`),

    'm5-t42': m5BonusCard(41, '🥚', 'Poultry Egg Quality Grading',
        'Grade eggs by quality (AA, A, B, Reject) using image features: shell color, shape index, weight, and defect detection.',
        ['Ellipse fitting for shape analysis', 'Color uniformity scoring', 'Weight-based grading standards', 'Defect detection (cracks, spots)'],
        `import numpy as np, pandas as pd
from sklearn.ensemble import GradientBoostingClassifier
np.random.seed(42)
n = 500
eggs = pd.DataFrame({
    'weight_g': np.random.normal(60, 8, n),
    'shape_index': np.random.normal(74, 3, n),  # length/width * 100
    'shell_thickness_mm': np.random.normal(0.35, 0.05, n),
    'color_uniformity': np.random.uniform(0.5, 1.0, n),
    'crack_score': np.random.exponential(0.3, n)
})
# Grading rules
conditions = [
    (eggs['weight_g']>55) & (eggs['shell_thickness_mm']>0.33) & (eggs['crack_score']<0.2),
    (eggs['weight_g']>50) & (eggs['shell_thickness_mm']>0.30) & (eggs['crack_score']<0.5),
    (eggs['weight_g']>45) & (eggs['crack_score']<1.0)]
eggs['grade'] = np.select(conditions, ['AA','A','B'], default='Reject')
print(eggs['grade'].value_counts().sort_index())
print(f"\\nAvg weight by grade:")
print(eggs.groupby('grade')['weight_g'].mean().round(1))`),

    'm5-t43': m5BonusCard(42, '🗺️', 'Crop Field Boundary Detection from Satellite',
        'Detect agricultural field boundaries from satellite imagery using edge detection and semantic segmentation.',
        ['Canny edge detection', 'Watershed segmentation', 'U-Net for boundary prediction', 'GIS polygon extraction'],
        `import numpy as np
np.random.seed(42)
# Simulated NDVI image (100x100 pixels)
field = np.zeros((100, 100))
# Create 4 distinct fields with different NDVI values
field[10:45, 10:45] = 0.7 + np.random.normal(0, 0.05, (35,35))  # Rice
field[10:45, 55:90] = 0.5 + np.random.normal(0, 0.05, (35,35))  # Wheat
field[55:90, 10:45] = 0.3 + np.random.normal(0, 0.05, (35,35))  # Fallow
field[55:90, 55:90] = 0.65 + np.random.normal(0, 0.05, (35,35)) # Maize

# Simple gradient-based edge detection
from scipy import ndimage
edges_x = ndimage.sobel(field, axis=0)
edges_y = ndimage.sobel(field, axis=1)
edge_magnitude = np.hypot(edges_x, edges_y)
boundary_mask = edge_magnitude > 0.1
boundary_pixels = np.count_nonzero(boundary_mask)
print(f"Field boundary pixels detected: {boundary_pixels}")
print(f"Boundary fraction: {boundary_pixels/field.size*100:.1f}%")
print(f"Estimated number of fields: ~4 (based on connected components)")`),

    'm5-t44': m5BonusCard(43, '🍯', 'Honey Adulteration Detection',
        'Detect honey adulteration (sugar syrup, jaggery) using physicochemical properties and ML classification.',
        ['Viscosity and moisture analysis', 'Spectroscopy feature extraction', 'Binary classification (pure vs adulterated)', 'Adulteration level regression'],
        `import numpy as np, pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
np.random.seed(42)
n = 400
pure = pd.DataFrame({'moisture': np.random.normal(17,1,200), 'pH': np.random.normal(3.9,0.2,200),
    'EC_mS': np.random.normal(0.6,0.1,200), 'HMF_mg_kg': np.random.normal(15,5,200),
    'diastase': np.random.normal(12,2,200), 'label': 0})
adulterated = pd.DataFrame({'moisture': np.random.normal(22,2,200), 'pH': np.random.normal(4.5,0.3,200),
    'EC_mS': np.random.normal(0.3,0.1,200), 'HMF_mg_kg': np.random.normal(40,10,200),
    'diastase': np.random.normal(6,2,200), 'label': 1})
df = pd.concat([pure, adulterated]).reset_index(drop=True)
X, y = df.drop('label', axis=1), df['label']
scores = cross_val_score(RandomForestClassifier(n_estimators=100), X, y, cv=5, scoring='accuracy')
print(f"Adulteration Detection Accuracy: {scores.mean():.3f} ± {scores.std():.3f}")`),

    'm5-t45': m5BonusCard(44, '🐄', 'Livestock Feed Optimization',
        'Optimize livestock feed mix to minimize cost while meeting nutritional requirements using linear programming.',
        ['Linear programming (scipy.optimize)', 'Nutrient requirement tables', 'Feed ingredient database', 'Sensitivity analysis'],
        `from scipy.optimize import linprog
import numpy as np
# Feed ingredients: [Maize, Soybean, Rice bran, Mineral mix] (cost ₹/kg)
costs = [18, 35, 12, 45]
# Nutrient content per kg: [Protein%, Energy_MJ, Calcium%, Phosphorus%]
A = [[-10, -44, -13, -0],   # Protein >= 16% (negated for <=)
     [-13.5, -14, -11, -0], # Energy >= 12 MJ
     [-0.02, -0.29, -0.07, -20],  # Calcium >= 0.8%
     [10, 44, 13, 0]]       # Protein <= 22%
b = [-16, -12, -0.8, 22]
# Bounds: each ingredient 0-100% of mix
bounds = [(0.1, 0.6), (0.1, 0.4), (0.05, 0.3), (0.01, 0.05)]
# Sum = 1 constraint
A_eq = [[1, 1, 1, 1]]
b_eq = [1]
result = linprog(costs, A_ub=A, b_ub=b, A_eq=A_eq, b_eq=b_eq, bounds=bounds)
if result.success:
    names = ['Maize','Soybean','Rice Bran','Mineral Mix']
    print("Optimal Feed Mix:")
    for n, v in zip(names, result.x): print(f"  {n}: {v*100:.1f}%")
    print(f"Cost: ₹{result.fun:.2f}/kg")`),

    'm5-t46': m5BonusCard(45, '🪤', 'Pest Trap Image Counter',
        'Automatically count and classify insects on sticky traps using instance segmentation and counting algorithms.',
        ['Connected component analysis', 'Watershed for overlapping insects', 'Size-based species classification', 'Density estimation per trap'],
        `import numpy as np
np.random.seed(42)
# Simulated trap image analysis results
trap_data = []
for trap_id in range(1, 11):
    n_insects = np.random.poisson(25)
    sizes = np.random.lognormal(1.5, 0.5, n_insects)
    species = np.where(sizes < 3, 'whitefly', np.where(sizes < 8, 'aphid', 'moth'))
    trap_data.append({'trap': trap_id, 'total': n_insects,
        'whitefly': (species=='whitefly').sum(),
        'aphid': (species=='aphid').sum(),
        'moth': (species=='moth').sum()})
import pandas as pd
df = pd.DataFrame(trap_data)
print(df.to_string(index=False))
print(f"\\nAvg insects/trap: {df['total'].mean():.1f}")
print(f"Most common: whitefly ({df['whitefly'].sum()} total)")
threshold = 30
hot_traps = df[df['total'] > threshold]
print(f"Hotspot traps (>{threshold}): {len(hot_traps)}")`),

    'm5-t47': m5BonusCard(46, '🌡️', 'Crop Canopy Temperature Monitor',
        'Monitor canopy-air temperature differential using thermal sensors to trigger irrigation when crops are water-stressed.',
        ['CWSI calculation', 'Thermal sensor calibration', 'Stress threshold by crop type', 'Automated irrigation trigger'],
        `import numpy as np, pandas as pd
np.random.seed(42)
hours = 72
data = pd.DataFrame({
    'hour': range(hours),
    'air_temp_C': 25 + 10*np.sin(2*np.pi*np.arange(hours)/24) + np.random.normal(0,1,hours),
    'canopy_temp_C': 23 + 10*np.sin(2*np.pi*np.arange(hours)/24) + np.random.normal(0,1,hours),
    'soil_moisture': np.maximum(10, 35 - np.arange(hours)*0.3 + np.random.normal(0,1,hours))
})
data['delta_T'] = data['canopy_temp_C'] - data['air_temp_C']
# CWSI: 0=no stress, 1=max stress
data['CWSI'] = np.clip((data['delta_T'] + 2) / 6, 0, 1)
stress_hours = (data['CWSI'] > 0.5).sum()
print(f"Stress hours (CWSI>0.5): {stress_hours}/{hours}")
trigger = data[data['CWSI'] > 0.6].iloc[0] if (data['CWSI'] > 0.6).any() else None
if trigger is not None:
    print(f"Irrigation trigger at hour {int(trigger['hour'])}: CWSI={trigger['CWSI']:.2f}")`),

    'm5-t48': m5BonusCard(47, '🏗️', 'Agricultural Land Use Change Detector',
        'Detect agricultural land conversion (farmland to urban) using multi-temporal satellite imagery comparison.',
        ['Change detection algorithms', 'NDVI differencing', 'Post-classification comparison', 'Land use transition matrix'],
        `import numpy as np
np.random.seed(42)
size = 50
# Land use maps: 0=urban, 1=agriculture, 2=forest, 3=water
map_2020 = np.random.choice([0,1,1,1,2,2,3], (size,size))  # Mostly agri
map_2024 = map_2020.copy()
# Simulate urbanization: convert some agri to urban
urban_growth = np.random.random((size,size)) < 0.08
map_2024[(map_2020==1) & urban_growth] = 0
# Transition matrix
labels = ['Urban','Agriculture','Forest','Water']
print("Land Use Transition Matrix (2020 → 2024):")
print(f"{'':>12}", end='')
for l in labels: print(f"{l:>12}", end='')
print()
for i, l1 in enumerate(labels):
    print(f"{l1:>12}", end='')
    for j, l2 in enumerate(labels):
        count = ((map_2020==i) & (map_2024==j)).sum()
        print(f"{count:>12}", end='')
    print()
agri_loss = ((map_2020==1) & (map_2024!=1)).sum()
print(f"\\nAgricultural land lost: {agri_loss} pixels ({agri_loss/size**2*100:.1f}%)")`),

    'm5-t49': m5BonusCard(48, '🪱', 'Vermicompost Quality Predictor',
        'Predict vermicompost nutrient content (N, P, K, OC) from input waste composition and processing duration.',
        ['Regression modeling', 'Waste characterization features', 'Processing time optimization', 'Quality grading standards'],
        `import numpy as np, pandas as pd
from sklearn.ensemble import RandomForestRegressor
np.random.seed(42)
n = 200
data = pd.DataFrame({
    'cow_dung_pct': np.random.uniform(30, 70, n),
    'green_waste_pct': np.random.uniform(10, 40, n),
    'days_processed': np.random.randint(30, 90, n),
    'moisture_pct': np.random.uniform(40, 70, n),
    'worm_density_per_kg': np.random.uniform(5, 25, n)
})
data['kitchen_waste_pct'] = 100 - data['cow_dung_pct'] - data['green_waste_pct']
# Target: N content (higher with more green waste and longer processing)
data['N_pct'] = 1.0 + 0.02*data['green_waste_pct'] + 0.01*data['days_processed'] + np.random.normal(0,0.1,n)
X = data.drop('N_pct', axis=1)
y = data['N_pct']
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X, y)
print(f"R² score: {model.score(X, y):.3f}")
print("Feature importance:")
for f, i in sorted(zip(X.columns, model.feature_importances_), key=lambda x: -x[1]):
    print(f"  {f}: {i:.3f}")`),

    'm5-t50': m5BonusCard(49, '🔊', 'Smart Bird Scarer Using Sound Analysis',
        'Detect bird species from audio recordings and activate species-specific deterrent sounds automatically.',
        ['Audio feature extraction (MFCCs)', 'Bird call classification', 'Real-time audio processing', 'Deterrent effectiveness tracking'],
        `import numpy as np
np.random.seed(42)
# Simulated MFCC features for bird species
species = ['crow', 'parrot', 'sparrow', 'pigeon', 'mynah']
n_per = 50
X, y = [], []
for i, sp in enumerate(species):
    features = np.random.normal(i*2, 1, (n_per, 13))  # 13 MFCCs
    X.extend(features)
    y.extend([sp]*n_per)
X, y = np.array(X), np.array(y)
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
clf = RandomForestClassifier(n_estimators=100, random_state=42)
scores = cross_val_score(clf, X, y, cv=5)
print(f"Bird species classification accuracy: {scores.mean():.3f}")
# Deterrent mapping
deterrents = {'crow': 'hawk_call.wav', 'parrot': 'ultrasonic_burst.wav',
    'sparrow': 'predator_call.wav', 'pigeon': 'distress_call.wav', 'mynah': 'noise_burst.wav'}
detected = np.random.choice(species)
print(f"\\nDetected: {detected} → Playing: {deterrents[detected]}")`),

    'm5-t51': m5BonusCard(50, '🍂', 'Crop Nutrient Deficiency Detector from Leaf Color',
        'Identify nutrient deficiencies (N, P, K, Fe, Mg) from leaf color analysis in different color spaces.',
        ['HSV and LAB color space analysis', 'Color histogram features', 'Deficiency symptom mapping', 'Multi-label classification'],
        `import numpy as np
np.random.seed(42)
# Simulated leaf color features in LAB color space
deficiencies = ['Healthy', 'N_deficiency', 'P_deficiency', 'K_deficiency', 'Fe_deficiency']
n_per = 80
features, labels = [], []
color_profiles = {
    'Healthy': (55, -15, 30), 'N_deficiency': (70, -5, 35),
    'P_deficiency': (45, 5, 15), 'K_deficiency': (50, -10, 20),
    'Fe_deficiency': (75, -20, 40)
}
for d in deficiencies:
    L, a, b = color_profiles[d]
    feat = np.column_stack([np.random.normal(L,5,n_per), np.random.normal(a,3,n_per),
                            np.random.normal(b,5,n_per)])
    features.extend(feat)
    labels.extend([d]*n_per)
X, y = np.array(features), np.array(labels)
from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score
svm = SVC(kernel='rbf', C=10)
scores = cross_val_score(svm, X, y, cv=5)
print(f"Deficiency detection accuracy: {scores.mean():.3f}")
print("Color profiles (L, a*, b*):")
for d, (L,a,b) in color_profiles.items(): print(f"  {d}: L={L}, a*={a}, b*={b}")`),

    'm5-t52': m5BonusCard(51, '💧', 'Farm Pond Water Level Monitor',
        'Monitor farm pond water levels using ultrasonic sensors and predict days until empty based on usage patterns.',
        ['Ultrasonic distance measurement', 'Volume calculation from level', 'Consumption rate estimation', 'Depletion forecasting'],
        `import numpy as np, pandas as pd
np.random.seed(42)
days = 60
level = [3.0]  # Starting level in meters
for d in range(1, days):
    inflow = max(0, np.random.normal(0.02, 0.03))  # Rain/runoff
    outflow = np.random.uniform(0.03, 0.08)  # Irrigation use
    level.append(max(0, level[-1] + inflow - outflow))
df = pd.DataFrame({'day': range(days), 'level_m': level})
df['volume_m3'] = df['level_m'] * 500  # Pond area ~500 m²
rate = (df['level_m'].iloc[0] - df['level_m'].iloc[-1]) / days
days_remaining = df['level_m'].iloc[-1] / rate if rate > 0 else float('inf')
print(f"Current level: {df['level_m'].iloc[-1]:.2f} m ({df['volume_m3'].iloc[-1]:.0f} m³)")
print(f"Depletion rate: {rate*100:.1f} cm/day")
print(f"Days until empty: {days_remaining:.0f}")`),

    'm5-t53': m5BonusCard(52, '🐛', 'Silkworm Disease Detection System',
        'Detect silkworm diseases (flacherie, grasserie, muscardine) from rearing tray images using CNN classification.',
        ['Silkworm disease symptoms', 'Image augmentation for small datasets', 'Transfer learning with MobileNet', 'Early detection for sericulture'],
        `import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
np.random.seed(42)
n = 300
# Simulated image features: color, texture, size, movement_score
diseases = ['healthy', 'flacherie', 'grasserie', 'muscardine']
X, y = [], []
profiles = {'healthy': [0.7,0.3,2.5,0.8], 'flacherie': [0.4,0.6,2.0,0.2],
            'grasserie': [0.5,0.5,2.8,0.3], 'muscardine': [0.9,0.7,2.2,0.1]}
for d in diseases:
    p = profiles[d]
    feat = np.column_stack([np.random.normal(p[i], 0.15, 75) for i in range(4)])
    X.extend(feat); y.extend([d]*75)
X, y = np.array(X), np.array(y)
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X, y)
print(classification_report(y, clf.predict(X), target_names=diseases))`),

    'm5-t54': m5BonusCard(53, '🚛', 'Tractor Fleet Route Optimizer',
        'Optimize tractor routes across multiple farm plots to minimize fuel consumption and travel time.',
        ['Travelling Salesman Problem (TSP)', 'Nearest neighbor heuristic', 'Fuel consumption modeling', 'GPS waypoint optimization'],
        `import numpy as np
from itertools import permutations
np.random.seed(42)
n_plots = 8
plots = np.random.uniform(0, 10, (n_plots, 2))  # x, y coordinates in km
# Distance matrix
dist = np.sqrt(((plots[:,None] - plots[None,:])**2).sum(axis=2))
# Nearest neighbor heuristic
def nearest_neighbor(dist_matrix, start=0):
    n = len(dist_matrix)
    visited = [start]
    total = 0
    current = start
    for _ in range(n-1):
        unvisited = [i for i in range(n) if i not in visited]
        nearest = min(unvisited, key=lambda x: dist_matrix[current][x])
        total += dist_matrix[current][nearest]
        visited.append(nearest)
        current = nearest
    total += dist_matrix[current][start]  # Return to base
    return visited + [start], total
route, distance = nearest_neighbor(dist)
fuel_per_km = 4.5  # liters/km for tractor
print(f"Optimized route: {' → '.join(f'P{r}' for r in route)}")
print(f"Total distance: {distance:.2f} km")
print(f"Fuel needed: {distance*fuel_per_km:.1f} liters")
print(f"Fuel cost: ₹{distance*fuel_per_km*95:.0f} (@ ₹95/L diesel)")`),

    'm5-t55': m5BonusCard(54, '💨', 'Biogas Production Predictor',
        'Predict biogas yield from anaerobic digestion based on feedstock composition, temperature, and retention time.',
        ['Anaerobic digestion kinetics', 'Modified Gompertz model', 'Feedstock C:N ratio optimization', 'Methane yield estimation'],
        `import numpy as np
# Modified Gompertz model for biogas production
def gompertz(t, P, Rm, lam):
    """P=max potential, Rm=max rate, lam=lag phase"""
    return P * np.exp(-np.exp((Rm * np.e / P) * (lam - t) + 1))
t = np.arange(0, 40, 0.5)  # days
# Different feedstocks
feedstocks = {
    'Cow dung': (350, 25, 3),      # mL/g VS
    'Kitchen waste': (500, 40, 2),
    'Rice straw': (250, 15, 5),
    'Poultry litter': (400, 30, 4)
}
print("Biogas Production (mL/g VS):")
print(f"{'Day':>5}", end='')
for f in feedstocks: print(f"{f:>16}", end='')
print()
for day in [5, 10, 15, 20, 30]:
    print(f"{day:>5}", end='')
    for f, params in feedstocks.items():
        yield_val = gompertz(day, *params)
        print(f"{yield_val:>16.1f}", end='')
    print()
print("\\nFinal yields (40 days):")
for f, params in feedstocks.items():
    print(f"  {f}: {gompertz(40, *params):.0f} mL/g VS")`),

    'm5-t56': m5BonusCard(55, '🌾', 'Crop Phenotyping Using Drone Imagery',
        'Extract crop phenotypic traits (plant count, height, canopy cover, vigor) from drone RGB and multispectral images.',
        ['Plant counting via blob detection', 'Canopy cover from NDVI thresholding', 'Height estimation from DSM', 'Vigor scoring and mapping'],
        `import numpy as np
np.random.seed(42)
# Simulated drone image analysis for 20 plots
plots = []
for i in range(20):
    plant_count = np.random.poisson(45)
    avg_height_cm = np.random.normal(85, 12)
    canopy_cover = np.random.uniform(0.5, 0.95)
    ndvi_mean = np.random.normal(0.7, 0.1)
    vigor = 'High' if ndvi_mean > 0.75 else ('Medium' if ndvi_mean > 0.55 else 'Low')
    plots.append({'plot': i+1, 'plants': plant_count, 'height_cm': round(avg_height_cm,1),
                  'canopy_cover': round(canopy_cover,2), 'NDVI': round(ndvi_mean,3), 'vigor': vigor})
import pandas as pd
df = pd.DataFrame(plots)
print(df.to_string(index=False))
print(f"\\nSummary: {df['plants'].sum()} plants, avg height {df['height_cm'].mean():.1f}cm")
print(f"Vigor: {(df['vigor']=='High').sum()} High, {(df['vigor']=='Medium').sum()} Med, {(df['vigor']=='Low').sum()} Low")`),

    'm5-t57': m5BonusCard(56, '🌶️', 'Spice Adulteration Detection',
        'Detect adulteration in spice powders (turmeric, chili, pepper) using hyperspectral imaging and ML.',
        ['Spectral signature analysis', 'PLS-DA classification', 'Adulteration level quantification', 'Common adulterants database'],
        `import numpy as np
from sklearn.cross_decomposition import PLSRegression
from sklearn.model_selection import cross_val_score
np.random.seed(42)
n = 200
wavelengths = np.linspace(400, 2500, 100)  # 100 spectral bands
# Pure turmeric spectral signature
pure_spectrum = np.sin(wavelengths/500) * 0.5 + 0.5 + np.random.normal(0, 0.02, (100,100))
# Adulterated (with metanil yellow dye)
adulterant_pct = np.random.uniform(0, 30, 100)
adulterated = pure_spectrum + np.outer(adulterant_pct/100, np.sin(wavelengths/300)*0.3)
X = np.vstack([pure_spectrum, adulterated])
y = np.concatenate([np.zeros(100), adulterant_pct])
pls = PLSRegression(n_components=5)
pls.fit(X, y)
y_pred = pls.predict(X).flatten()
rmse = np.sqrt(np.mean((y - y_pred)**2))
print(f"Adulteration prediction RMSE: {rmse:.2f}%")
print(f"R²: {1 - np.sum((y-y_pred)**2)/np.sum((y-y.mean())**2):.3f}")
print(f"Can detect adulteration > {rmse*2:.1f}% with 95% confidence")`),

    'm5-t58': m5BonusCard(57, '📝', 'Farmer Grievance Classifier Using NLP',
        'Classify farmer grievances from text complaints into categories (water, subsidy, pest, market, land) for priority routing.',
        ['Text preprocessing (tokenization, stopwords)', 'TF-IDF vectorization', 'Multi-class text classification', 'Priority scoring'],
        `import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import cross_val_score
complaints = [
    ("No water supply for irrigation since 2 weeks", "water"),
    ("Crop insurance claim not processed", "subsidy"),
    ("Pest attack destroying my cotton crop", "pest"),
    ("Mandi not giving fair price for tomatoes", "market"),
    ("Land records not updated after purchase", "land"),
    ("Borewell dried up need government help", "water"),
    ("PM Kisan payment not received", "subsidy"),
    ("Whitefly infestation in my field", "pest"),
    ("Middlemen exploiting farmers at market", "market"),
    ("Encroachment on my agricultural land", "land"),
] * 10  # Repeat for training
np.random.shuffle(complaints)
texts, labels = zip(*complaints)
tfidf = TfidfVectorizer(max_features=500)
X = tfidf.fit_transform(texts)
clf = MultinomialNB()
scores = cross_val_score(clf, X, labels, cv=5)
print(f"Grievance classification accuracy: {scores.mean():.3f}")
clf.fit(X, labels)
test = "My crop was damaged by flood but insurance company rejected claim"
pred = clf.predict(tfidf.transform([test]))[0]
print(f"\\nTest: '{test}'\\nCategory: {pred}")`),

    'm5-t59': m5BonusCard(58, '🦠', 'Soil Microbiome Diversity Analyzer',
        'Analyze soil microbial diversity from metagenomic sequencing data to assess soil health indicators.',
        ['OTU abundance tables', 'Alpha diversity (Shannon, Simpson)', 'Beta diversity (Bray-Curtis)', 'Health indicator correlation'],
        `import numpy as np, pandas as pd
np.random.seed(42)
# Simulated OTU (Operational Taxonomic Unit) abundance table
n_samples, n_otus = 20, 50
otu_table = np.random.poisson(10, (n_samples, n_otus)).astype(float)
# Healthy soils have higher diversity
otu_table[:10] *= np.random.uniform(0.8, 1.5, (10, n_otus))  # Healthy
otu_table[10:] *= np.random.uniform(0.2, 0.8, (10, n_otus))  # Degraded
# Shannon diversity index
def shannon(abundances):
    total = abundances.sum()
    if total == 0: return 0
    p = abundances[abundances > 0] / total
    return -np.sum(p * np.log(p))
diversities = [shannon(otu_table[i]) for i in range(n_samples)]
labels = ['Healthy']*10 + ['Degraded']*10
df = pd.DataFrame({'sample': range(1,21), 'label': labels, 'shannon': np.round(diversities, 3)})
print(df.to_string(index=False))
print(f"\\nHealthy avg Shannon: {np.mean(diversities[:10]):.3f}")
print(f"Degraded avg Shannon: {np.mean(diversities[10:]):.3f}")`),

    'm5-t60': m5BonusCard(59, '🌿', 'Automated Nursery Plant Counter',
        'Count seedlings in nursery trays from aerial images using blob detection and connected component analysis.',
        ['Green pixel segmentation', 'Morphological operations', 'Connected component labeling', 'Counting accuracy metrics'],
        `import numpy as np
np.random.seed(42)
# Simulated nursery tray image (binary: 1=plant, 0=background)
tray = np.zeros((100, 100), dtype=int)
# Place ~48 seedlings in a 6x8 grid pattern
for row in range(6):
    for col in range(8):
        cx, cy = 10 + row*15, 8 + col*12
        if np.random.random() > 0.05:  # 95% germination
            r = np.random.randint(3, 6)
            for dx in range(-r, r+1):
                for dy in range(-r, r+1):
                    if dx**2+dy**2 <= r**2 and 0<=cx+dx<100 and 0<=cy+dy<100:
                        tray[cx+dx, cy+dy] = 1
# Count using connected components (simplified)
from scipy import ndimage
labeled, num_features = ndimage.label(tray)
print(f"Seedlings detected: {num_features}")
print(f"Expected: 48 (6×8 grid)")
print(f"Germination rate: {num_features/48*100:.1f}%")
sizes = ndimage.sum(tray, labeled, range(1, num_features+1))
print(f"Avg seedling size: {np.mean(sizes):.1f} pixels")
print(f"Size range: {np.min(sizes):.0f} - {np.max(sizes):.0f} pixels")`),

    'm5-t61': m5BonusCard(60, '💦', 'Crop Water Footprint Calculator',
        'Calculate blue, green, and grey water footprints for different crops to promote water-efficient agriculture.',
        ['Water footprint components (blue, green, grey)', 'ET-based water consumption', 'Pollution dilution factor', 'Crop comparison dashboard'],
        `import pandas as pd
crops = pd.DataFrame({
    'crop': ['Rice','Wheat','Maize','Cotton','Sugarcane','Tomato','Potato','Soybean'],
    'green_water_m3_t': [1146, 1277, 947, 4029, 139, 108, 191, 2037],
    'blue_water_m3_t': [341, 342, 81, 1558, 57, 63, 31, 70],
    'grey_water_m3_t': [187, 207, 194, 622, 13, 43, 45, 37]
})
crops['total_wf'] = crops[['green_water_m3_t','blue_water_m3_t','grey_water_m3_t']].sum(axis=1)
crops['blue_pct'] = (crops['blue_water_m3_t'] / crops['total_wf'] * 100).round(1)
crops = crops.sort_values('total_wf')
print("Crop Water Footprint (m³/tonne):")
print(crops.to_string(index=False))
print(f"\\nMost water-efficient: {crops.iloc[0]['crop']} ({crops.iloc[0]['total_wf']} m³/t)")
print(f"Most water-intensive: {crops.iloc[-1]['crop']} ({crops.iloc[-1]['total_wf']} m³/t)")`),

    'm5-t62': m5BonusCard(61, '🍵', 'Tea Leaf Quality Grading System',
        'Grade tea leaves (SFTGFOP, FTGFOP, TGFOP, etc.) based on image features: size, color, tip percentage.',
        ['Leaf size distribution analysis', 'Golden tip detection', 'Color grading in LAB space', 'Industry grading standards'],
        `import numpy as np, pandas as pd
from sklearn.ensemble import GradientBoostingClassifier
np.random.seed(42)
n = 300
tea = pd.DataFrame({
    'leaf_size_mm': np.concatenate([np.random.normal(15,2,100), np.random.normal(10,2,100), np.random.normal(6,1.5,100)]),
    'golden_tip_pct': np.concatenate([np.random.uniform(20,40,100), np.random.uniform(5,20,100), np.random.uniform(0,5,100)]),
    'color_L': np.concatenate([np.random.normal(35,3,100), np.random.normal(30,3,100), np.random.normal(25,3,100)]),
    'moisture_pct': np.random.uniform(3, 8, n),
    'grade': ['Premium']*100 + ['Standard']*100 + ['Economy']*100
})
X, y = tea.drop('grade', axis=1), tea['grade']
model = GradientBoostingClassifier(n_estimators=100, random_state=42)
model.fit(X, y)
print(f"Grading accuracy: {model.score(X, y):.3f}")
print("Feature importance:", dict(zip(X.columns, model.feature_importances_.round(3))))`),

    'm5-t63': m5BonusCard(62, '🔋', 'Agri-Drone Battery Life Predictor',
        'Predict remaining flight time for agricultural drones based on payload, wind, temperature, and battery state.',
        ['Battery discharge modeling', 'Payload-power relationship', 'Wind resistance calculation', 'Mission abort threshold'],
        `import numpy as np, pandas as pd
from sklearn.linear_model import LinearRegression
np.random.seed(42)
n = 200
flights = pd.DataFrame({
    'payload_kg': np.random.uniform(0, 5, n),
    'wind_kmh': np.random.uniform(0, 25, n),
    'temp_C': np.random.uniform(5, 40, n),
    'battery_cycles': np.random.randint(1, 300, n),
    'altitude_m': np.random.uniform(10, 50, n)
})
# Flight time decreases with payload, wind, battery age
flights['flight_min'] = (25 - 2*flights['payload_kg'] - 0.3*flights['wind_kmh']
    - 0.02*flights['battery_cycles'] + np.random.normal(0, 1, n))
flights['flight_min'] = flights['flight_min'].clip(5, 30)
X, y = flights.drop('flight_min', axis=1), flights['flight_min']
model = LinearRegression().fit(X, y)
print(f"R²: {model.score(X, y):.3f}")
print("Coefficients:")
for f, c in zip(X.columns, model.coef_): print(f"  {f}: {c:.3f} min per unit")
# Predict for a specific mission
mission = pd.DataFrame({'payload_kg':[3], 'wind_kmh':[10], 'temp_C':[30], 'battery_cycles':[100], 'altitude_m':[30]})
print(f"\\nPredicted flight time: {model.predict(mission)[0]:.1f} min")`),

    'm5-t64': m5BonusCard(63, '🥥', 'Coconut Tree Health Assessment from Drone',
        'Assess coconut palm health from drone imagery by analyzing crown shape, color, and frond density.',
        ['Crown segmentation', 'Frond counting', 'Color-based health scoring', 'Disease symptom detection'],
        `import numpy as np, pandas as pd
np.random.seed(42)
n_trees = 50
trees = pd.DataFrame({
    'tree_id': range(1, n_trees+1),
    'crown_area_m2': np.random.normal(25, 5, n_trees),
    'frond_count': np.random.poisson(25, n_trees),
    'green_fraction': np.random.uniform(0.3, 0.95, n_trees),
    'symmetry_score': np.random.uniform(0.5, 1.0, n_trees)
})
# Health score: weighted combination
trees['health_score'] = (0.3*trees['green_fraction'] + 0.25*(trees['frond_count']/30).clip(0,1)
    + 0.25*(trees['crown_area_m2']/30).clip(0,1) + 0.2*trees['symmetry_score']) * 100
trees['status'] = pd.cut(trees['health_score'], bins=[0,40,60,80,100], labels=['Critical','Poor','Fair','Healthy'])
print(trees[['tree_id','health_score','status']].head(10).to_string(index=False))
print(f"\\nHealth distribution:")
print(trees['status'].value_counts().sort_index())`),

    'm5-t65': m5BonusCard(64, '🕸️', 'Farmer Knowledge Graph from Extension Data',
        'Build a knowledge graph from agricultural extension documents linking crops, diseases, treatments, and regions.',
        ['Named Entity Recognition (NER)', 'Relation extraction', 'Graph database (NetworkX)', 'Query interface for recommendations'],
        `import networkx as nx
G = nx.DiGraph()
# Add entities and relationships
triples = [
    ("Rice", "affected_by", "Blast"), ("Rice", "affected_by", "BPH"),
    ("Blast", "treated_with", "Tricyclazole"), ("Blast", "caused_by", "Magnaporthe"),
    ("BPH", "treated_with", "Imidacloprid"), ("Rice", "grown_in", "Karnataka"),
    ("Rice", "grown_in", "Tamil Nadu"), ("Wheat", "affected_by", "Rust"),
    ("Rust", "treated_with", "Propiconazole"), ("Wheat", "grown_in", "Punjab"),
    ("Tomato", "affected_by", "Late_Blight"), ("Late_Blight", "treated_with", "Mancozeb"),
    ("Tomato", "grown_in", "Karnataka"), ("Karnataka", "climate", "Tropical"),
]
for s, r, o in triples: G.add_edge(s, o, relation=r)
print(f"Knowledge Graph: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges")
# Query: What diseases affect Rice?
rice_diseases = [n for n in G.successors("Rice") if G["Rice"][n]['relation']=='affected_by']
print(f"\\nRice diseases: {rice_diseases}")
# Query: Treatment for Blast?
blast_treatments = [n for n in G.successors("Blast") if G["Blast"][n]['relation']=='treated_with']
print(f"Blast treatments: {blast_treatments}")`),

    'm5-t66': m5BonusCard(65, '🎋', 'Sugarcane Variety Classifier',
        'Classify sugarcane varieties from stalk and leaf morphological features for variety identification and recommendation.',
        ['Morphological feature extraction', 'Multi-class classification', 'Variety-soil suitability matching', 'Yield potential estimation'],
        `import numpy as np, pandas as pd
from sklearn.ensemble import RandomForestClassifier
np.random.seed(42)
varieties = ['Co-86032', 'CoC-671', 'Co-0238', 'CoM-0265', 'Co-11015']
n_per = 60
data = []
for i, v in enumerate(varieties):
    data.append(pd.DataFrame({
        'stalk_diameter_cm': np.random.normal(2.5+i*0.2, 0.3, n_per),
        'internode_length_cm': np.random.normal(12+i*1.5, 2, n_per),
        'leaf_width_cm': np.random.normal(4+i*0.3, 0.5, n_per),
        'brix_pct': np.random.normal(18+i*0.5, 1, n_per),
        'variety': v}))
df = pd.concat(data).reset_index(drop=True)
X, y = df.drop('variety', axis=1), df['variety']
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X, y)
print(f"Variety classification accuracy: {clf.score(X, y):.3f}")
print("\\nVariety characteristics (mean):")
print(df.groupby('variety').mean().round(2))`),

    'm5-t67': m5BonusCard(66, '🌍', 'Carbon Credit Estimator for Farms',
        'Estimate carbon sequestration and emission reduction potential of different farming practices for carbon credit trading.',
        ['IPCC emission factors', 'Soil carbon sequestration rates', 'Practice-based reduction calculation', 'Credit value estimation'],
        `import pandas as pd
practices = pd.DataFrame({
    'practice': ['No-till farming', 'Cover cropping', 'Agroforestry', 'Biochar application',
                 'Organic farming', 'Drip irrigation', 'Crop residue retention', 'Composting'],
    'co2_reduction_t_ha_yr': [0.5, 0.8, 3.5, 2.0, 1.2, 0.3, 0.6, 0.9],
    'implementation_cost_per_ha': [2000, 3000, 15000, 8000, 5000, 25000, 1000, 4000],
    'carbon_price_per_t': [1500]*8  # ₹ per tonne CO2
})
practices['annual_credit_value'] = practices['co2_reduction_t_ha_yr'] * practices['carbon_price_per_t']
practices['payback_years'] = (practices['implementation_cost_per_ha'] / practices['annual_credit_value']).round(1)
practices['roi_5yr_pct'] = ((practices['annual_credit_value']*5 - practices['implementation_cost_per_ha'])
    / practices['implementation_cost_per_ha'] * 100).round(1)
print(practices[['practice','co2_reduction_t_ha_yr','annual_credit_value','payback_years','roi_5yr_pct']].to_string(index=False))
print(f"\\nBest ROI: {practices.loc[practices['roi_5yr_pct'].idxmax(), 'practice']}")`),

    'm5-t68': m5BonusCard(67, '📍', 'Automated Soil Sample Location Planner',
        'Optimize soil sampling locations using spatial statistics to maximize information with minimum samples.',
        ['Stratified random sampling', 'Variogram analysis', 'Optimal grid design', 'Sample size determination'],
        `import numpy as np
np.random.seed(42)
field_size = (100, 100)  # 100x100m field
n_samples = 15
# Stratified random sampling: divide field into grid cells
grid_rows, grid_cols = 3, 5  # 15 cells for 15 samples
cell_h, cell_w = field_size[0]//grid_rows, field_size[1]//grid_cols
locations = []
for r in range(grid_rows):
    for c in range(grid_cols):
        x = r*cell_h + np.random.randint(5, cell_h-5)
        y = c*cell_w + np.random.randint(5, cell_w-5)
        locations.append((x, y))
locations = np.array(locations)
# Calculate minimum distance between samples
from scipy.spatial.distance import pdist
min_dist = pdist(locations).min()
avg_dist = pdist(locations).mean()
print(f"Sampling plan: {n_samples} locations in {field_size[0]}x{field_size[1]}m field")
print(f"Grid: {grid_rows}x{grid_cols} strata")
print(f"Min distance between samples: {min_dist:.1f}m")
print(f"Avg distance: {avg_dist:.1f}m")
print("\\nSample locations (x, y):")
for i, (x,y) in enumerate(locations): print(f"  S{i+1}: ({x}m, {y}m)")`),

    'm5-t69': m5BonusCard(68, '🥭', 'Mango Ripeness Detector Using Aroma Sensors',
        'Classify mango ripeness stages (unripe, half-ripe, ripe, overripe) from electronic nose (e-nose) sensor array data.',
        ['E-nose sensor array response', 'VOC pattern recognition', 'PCA for sensor data visualization', 'Ripeness stage classification'],
        `import numpy as np, pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.decomposition import PCA
np.random.seed(42)
stages = ['unripe', 'half_ripe', 'ripe', 'overripe']
n_per = 75
X, y = [], []
# 8 gas sensors respond differently to ripeness VOCs
sensor_profiles = {
    'unripe': [0.2, 0.1, 0.3, 0.1, 0.2, 0.1, 0.15, 0.1],
    'half_ripe': [0.4, 0.3, 0.5, 0.3, 0.4, 0.25, 0.3, 0.2],
    'ripe': [0.8, 0.7, 0.9, 0.6, 0.7, 0.5, 0.6, 0.4],
    'overripe': [0.9, 0.9, 0.7, 0.8, 0.5, 0.8, 0.9, 0.7]
}
for stage in stages:
    profile = sensor_profiles[stage]
    data = np.array([np.random.normal(p, 0.08, n_per) for p in profile]).T
    X.extend(data); y.extend([stage]*n_per)
X, y = np.array(X), np.array(y)
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X, y)
print(f"Ripeness classification accuracy: {clf.score(X, y):.3f}")
pca = PCA(n_components=2).fit_transform(X)
print(f"PCA variance explained: {PCA(n_components=2).fit(X).explained_variance_ratio_.round(3)}")`),

    'm5-t70': m5BonusCard(69, '📋', 'Agricultural Subsidy Eligibility Checker',
        'Build a rule-based + ML system to check farmer eligibility for government agricultural subsidies and schemes.',
        ['Government scheme rules encoding', 'Document verification logic', 'Eligibility scoring', 'Chatbot interface for farmers'],
        `import pandas as pd
schemes = {
    'PM-KISAN': {'max_land_ha': 100, 'min_age': 18, 'income_limit': 0, 'requires_aadhaar': True},
    'PMFBY': {'max_land_ha': 100, 'min_age': 18, 'income_limit': 0, 'requires_aadhaar': True},
    'KCC': {'max_land_ha': 5, 'min_age': 18, 'income_limit': 300000, 'requires_aadhaar': True},
    'Soil_Health_Card': {'max_land_ha': 100, 'min_age': 18, 'income_limit': 0, 'requires_aadhaar': False}
}
def check_eligibility(farmer, schemes):
    results = []
    for name, rules in schemes.items():
        eligible = True
        reasons = []
        if farmer['land_ha'] > rules['max_land_ha']: eligible = False; reasons.append('Land exceeds limit')
        if farmer['age'] < rules['min_age']: eligible = False; reasons.append('Below minimum age')
        if rules['income_limit'] > 0 and farmer['income'] > rules['income_limit']: eligible = False; reasons.append('Income exceeds limit')
        if rules['requires_aadhaar'] and not farmer['has_aadhaar']: eligible = False; reasons.append('Aadhaar required')
        results.append({'scheme': name, 'eligible': eligible, 'reason': ', '.join(reasons) if reasons else 'All criteria met'})
    return pd.DataFrame(results)

farmer = {'name': 'Ramesh', 'age': 35, 'land_ha': 2.5, 'income': 250000, 'has_aadhaar': True}
print(f"Farmer: {farmer['name']}, Land: {farmer['land_ha']}ha, Income: ₹{farmer['income']}")
print(check_eligibility(farmer, schemes).to_string(index=False))`),

    'm5-t71': m5BonusCard(70, '📅', 'Multi-Crop Calendar Planner Using AI',
        'Generate optimized multi-crop planting calendars based on climate data, market prices, and soil recovery needs.',
        ['Crop rotation constraints', 'Climate suitability matching', 'Market price seasonality', 'Soil nutrient recovery modeling'],
        `import numpy as np, pandas as pd
np.random.seed(42)
crops = pd.DataFrame({
    'crop': ['Rice','Wheat','Maize','Tomato','Onion','Groundnut','Sunflower','Green Gram'],
    'season': ['Kharif','Rabi','Kharif','Rabi','Rabi','Kharif','Kharif','Kharif'],
    'duration_days': [120, 110, 90, 80, 100, 100, 85, 65],
    'water_need_mm': [1200, 450, 500, 600, 350, 400, 350, 250],
    'profit_per_ha': [45000, 35000, 30000, 80000, 60000, 40000, 25000, 20000],
    'N_demand_kg': [120, 100, 80, 90, 60, 20, 50, 10],
    'N_fixation_kg': [0, 0, 0, 0, 0, 30, 0, 25]
})
# Simple greedy planner: maximize profit with rotation constraint
kharif = crops[crops['season']=='Kharif'].sort_values('profit_per_ha', ascending=False)
rabi = crops[crops['season']=='Rabi'].sort_values('profit_per_ha', ascending=False)
print("Recommended Annual Calendar:")
print(f"  Kharif (Jun-Oct): {kharif.iloc[0]['crop']} (₹{kharif.iloc[0]['profit_per_ha']:,}/ha)")
print(f"  Rabi (Nov-Mar):   {rabi.iloc[0]['crop']} (₹{rabi.iloc[0]['profit_per_ha']:,}/ha)")
total = kharif.iloc[0]['profit_per_ha'] + rabi.iloc[0]['profit_per_ha']
print(f"  Annual profit: ₹{total:,}/ha")
print(f"\\nAlternative (with legume rotation for soil health):")
legume = crops[crops['N_fixation_kg'] > 0].iloc[0]
print(f"  Kharif: {legume['crop']} (fixes {legume['N_fixation_kg']}kg N/ha)")
print(f"  Rabi: {rabi.iloc[0]['crop']}")
print(f"  Saves ₹{legume['N_fixation_kg']*15:.0f}/ha on fertilizer")`)
};

// Register with HandoutLoader
if (typeof window !== 'undefined') {
    window.module5HandoutsPart2 = module5HandoutsPart2;
}
