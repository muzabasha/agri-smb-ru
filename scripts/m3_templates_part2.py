# Module 3 Templates: Part 2 (matching module3-handouts-part2.js)
# Topics: m3-t3, m3-t4, m3-t5, m3-t6

m3_templates_p2 = {
    "m3-t3": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Crop yield does not increase in a straight line forever as fertilizer increases.</p>
                <p>After a certain point, extra fertilizer burns plant roots and causes yield decline.</p>
                <p>Simple linear regression cannot model this classic agronomic law of diminishing returns.</p>
                <p>Polynomial and Ridge regression model curved response curves with high biological accuracy.</p>
                <p>How do non-linear regression techniques model realistic biological crop responses?</p>
            </div>
        """,
        "ipo": """
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
        """,
        "code": """
# Topic 3.3: Polynomial Ridge Regression for Fertilizer Curves
import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import Ridge

# Fertilizer doses (kg/acre) and resulting curved harvest yields (quintals)
fertilizer_kg = np.array([[20], [40], [60], [80], [100], [120], [140]])
crop_yield = np.array([18.0, 28.0, 36.0, 41.0, 43.0, 42.0, 38.0])

# Transform to degree-2 polynomial to capture curve
poly = PolynomialFeatures(degree=2)
features_poly = poly.fit_transform(fertilizer_kg)

ridge_reg = Ridge(alpha=1.0)
ridge_reg.fit(features_poly, crop_yield)

# Predict yield for 90 kg fertilizer
test_dose = poly.transform([[90.0]])
predicted_harvest = ridge_reg.predict(test_dose)[0]

print("--- Polynomial Agronomic Response Model ---")
print(f"Predicted Harvest for 90 kg/acre Fertilizer: {predicted_harvest:.1f} quintals")
print("Insight: Model captures peak yield before over-fertilization toxicity begins.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Predict harvest for <code>160.0 kg</code> fertilizer. Notice how the polynomial model correctly predicts yield drop due to chemical toxicity!</p>
</div>
        """
    },

    "m3-t4": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Online weather APIs provide rainfall and temperature data in nested JSON format.</p>
                <p>Farmers need irrigation warnings, not confusing computer code or raw JSON strings.</p>
                <p>Agricultural programs must extract specific rain and temperature numbers automatically.</p>
                <p>Python parses weather API streams to calculate crop evapotranspiration on the fly.</p>
                <p>How do we integrate live weather APIs into automated farm irrigation schedules?</p>
            </div>
        """,
        "ipo": """
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
        """,
        "code": """
# Topic 3.4: Weather API Stream Parsing & Evapotranspiration
# Simulated OpenWeatherMap API telemetry payload
weather_payload = {
    "location": "GKVK_Bangalore",
    "main": {"temp_c": 31.5, "humidity_pct": 42.0},
    "wind": {"speed_kmh": 12.0},
    "rain_forecast_next_24h_mm": 0.0
}

temp = weather_payload["main"]["temp_c"]
humidity = weather_payload["main"]["humidity_pct"]
rain_forecast = weather_payload["rain_forecast_next_24h_mm"]

# Simplified Hargreaves daily evaporation estimate (mm/day)
daily_water_loss_mm = 0.0023 * (temp + 17.8) * (temp - 18.0)**0.5 * 15.0

print(f"Weather: Temp {temp}°C | Humidity {humidity}% | Rain Forecast: {rain_forecast} mm")
print(f"Estimated Crop Water Evaporation: {daily_water_loss_mm:.1f} mm/day")

if rain_forecast < daily_water_loss_mm:
    irrigation_needed_mm = daily_water_loss_mm - rain_forecast
    print(f"Watering Advisory: Apply {irrigation_needed_mm:.1f} mm water via drip lines.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>rain_forecast_next_24h_mm = 15.0</code>. Does the advisory cancel drip irrigation when rain is coming?</p>
</div>
        """
    },

    "m3-t5": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer combines electronic soil test cards with tractor GPS spatial boundaries.</p>
                <p>Nitrogen and organic carbon levels vary dramatically from the ridge to the valley.</p>
                <p>Treating the whole field uniformly results in over-fertilizing fertile lowlands.</p>
                <p>Integrating soil telemetry maps creates variable-rate fertilizer zones across farm blocks.</p>
                <p>How does spatial soil data integration guide precision nutrient application?</p>
            </div>
        """,
        "ipo": """
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
        """,
        "code": """
# Topic 3.5: Soil Data Integration & Variable Rate Advisory
import pandas as pd

soil_zones_df = pd.DataFrame({
    'Zone_ID': ['Ridge_East', 'Center_Flat', 'Valley_West'],
    'Available_Nitrogen_kg_ha': [180, 240, 320], # Low, Med, High
    'Soil_pH': [5.8, 6.5, 7.1]
})

# Standard agronomic target: 280 kg/ha available nitrogen
target_n = 280

def compute_nitrogen_deficit(current_n):
    return max(0, target_n - current_n)

soil_zones_df['Nitrogen_Deficit_kg_ha'] = soil_zones_df['Available_Nitrogen_kg_ha'].apply(compute_nitrogen_deficit)

print("--- Multi-Zone Soil Integration Table ---")
print(soil_zones_df)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Notice that Valley_West has 320 kg N (surplus). Why does the deficit correctly show <code>0</code> instead of a negative number?</p>
</div>
        """
    },

    "m3-t6": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>In high-density sugarcane, workers cannot walk through dense, razor-sharp mature canopies.</p>
                <p>Hidden pest outbreaks or water leaks inside the field center remain invisible from borders.</p>
                <p>By harvest time, interior damage has destroyed tons of profitable sugar stalk weight.</p>
                <p>Multispectral satellite indices scan deep into crop canopies from space every five days.</p>
                <p>How does multispectral vegetation index tracking monitor crop health non-destructively?</p>
            </div>
        """,
        "ipo": """
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
        """,
        "code": """
# Topic 3.6: Enhanced Vegetation Index (EVI) Calculation
import numpy as np

# Sample multispectral reflectance values from Sentinel-2 satellite
nir_band = 0.65
red_band = 0.12
blue_band = 0.05

# EVI formula resists atmospheric aerosol and soil background noise
# EVI = 2.5 * ((NIR - Red) / (NIR + 6*Red - 7.5*Blue + 1))
evi_score = 2.5 * ((nir_band - red_band) / (nir_band + (6.0 * red_band) - (7.5 * blue_band) + 1.0))

print(f"Sentinel-2 Spectral Bands -> NIR: {nir_band}, Red: {red_band}, Blue: {blue_band}")
print(f"Calculated Enhanced Vegetation Index (EVI): {evi_score:.2f}")

if evi_score > 0.50:
    print("Canopy Health: 🟢 High biomass density and vigorous photosynthesis.")
elif evi_score > 0.25:
    print("Canopy Health: 🟡 Moderate vegetative cover or mild moisture stress.")
else:
    print("Canopy Health: 🔴 Severe crop damage, lodging, or defoliation!")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>nir_band = 0.22</code> (simulating insect defoliation). What does the EVI score become? Which alert triggers?</p>
</div>
        """
    }
}

print("Loaded Module 3 Part 2 templates:", len(m3_templates_p2))
