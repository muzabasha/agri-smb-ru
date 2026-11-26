# Module 3 Templates: Part 1 (matching module3-handouts.js)
# Topics: m3-t1, m3-t2, m3-t7, m3-t8, m3-t9, m3-t19

m3_templates_p1 = {
    "m3-t1": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Raw weather station data only logs daily maximum and minimum temperatures.</p>
                <p>Raw temperature alone does not tell plants when to flower or ripen.</p>
                <p>Crops grow based on accumulated biological thermal energy above base temperature.</p>
                <p>Feature engineering computes Growing Degree Days (GDD) to predict harvest dates accurately.</p>
                <p>How do we engineer biological features from raw agricultural sensor streams?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Daily Temperatures:</strong> Max Temp = 32.0°C, Min Temp = 20.0°C.</li>
                            <li><strong>Crop Base:</strong> Maize baseline biological threshold (10.0°C).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Mean Temp:</strong> (32.0 + 20.0) / 2 = 26.0°C.</li>
                            <li><strong>GDD Formula:</strong> Mean Temp - Base Temp = 26.0 - 10.0 = 16.0 units.</li>
                            <li><strong>Accumulation:</strong> Add daily units to seasonal cumulative total.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Daily GDD:</strong> 16.0 thermal degree day units accumulated.</li>
                            <li><strong>Phenology Stage:</strong> Crop enters tassel flowering stage on schedule.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.1: Feature Engineering - Growing Degree Days (GDD)
import numpy as np

# Daily temperature records (Max_C, Min_C) for 5 consecutive days
daily_temperatures = np.array([
    [32.0, 20.0],
    [34.0, 22.0],
    [30.0, 18.0],
    [35.0, 23.0],
    [31.0, 19.0]
])

base_temp_maize = 10.0  # Maize biological growth baseline

# Engineer GDD feature: ((T_max + T_min) / 2) - T_base
mean_temps = np.mean(daily_temperatures, axis=1)
daily_gdd = np.maximum(0, mean_temps - base_temp_maize)
cumulative_gdd = np.cumsum(daily_gdd)

for day, (gdd, total) in enumerate(zip(daily_gdd, cumulative_gdd), start=1):
    print(f"Day {day}: Daily GDD = {gdd:.1f} | Cumulative GDD = {total:.1f}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>base_temp_maize = 12.0</code> (testing wheat or ragi baseline). How does changing baseline temperature alter cumulative heat units?</p>
</div>
        """
    },

    "m3-t2": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A regional food security agency must predict district-wide rice harvest two months early.</p>
                <p>Waiting for manual harvesting cuts delays warehouse storage preparation and price stabilization.</p>
                <p>Early harvest estimates require combining satellite vegetation vigor with soil sensor numbers.</p>
                <p>Ensemble machine learning models forecast crop harvest yields with high precision.</p>
                <p>How do multi-variable regression pipelines forecast crop yield before harvest?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Satellite NDVI:</strong> 0.72 mid-season vegetation vigor index.</li>
                            <li><strong>Soil Moisture:</strong> 28.5% average root-zone moisture.</li>
                            <li><strong>Fertilizer:</strong> 120 kg/acre nitrogen applied.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Random Forest Fit:</strong> Model evaluates complex agronomic interactions.</li>
                            <li><strong>Prediction:</strong> Estimate final grain harvest in quintals per acre.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Predicted Yield:</strong> 48.2 quintals per acre (94% model confidence).</li>
                            <li><strong>Warehouse Alert:</strong> Reserve 500 storage bags for this field.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.2: Multi-Factor Crop Yield Prediction Pipeline
import numpy as np
from sklearn.ensemble import RandomForestRegressor

# Training Features: [NDVI_Index, Soil_Moisture_Pct, Nitrogen_kg]
field_training_features = np.array([
    [0.72, 28.5, 120.0],
    [0.55, 20.0, 90.0],
    [0.80, 32.0, 140.0],
    [0.45, 16.0, 70.0],
    [0.68, 25.0, 110.0]
])
# Target: Grain Yield (quintals per acre)
paddy_yield_target = np.array([48.0, 35.0, 54.0, 28.0, 44.0])

yield_predictor = RandomForestRegressor(n_estimators=50, random_state=42)
yield_predictor.fit(field_training_features, paddy_yield_target)

# Predict for new field block
new_plot_data = np.array([[0.75, 29.0, 130.0]])
forecasted_yield = yield_predictor.predict(new_plot_data)[0]

print(f"Plot Satellite NDVI: 0.75 | Soil Moisture: 29.0% | Nitrogen: 130 kg")
print(f"Forecasted Harvest Yield: {forecasted_yield:.1f} quintals per acre")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Test drought conditions: <code>new_plot_data = np.array([[0.40, 14.0, 70.0]])</code>. What does the yield forecast drop to?</p>
</div>
        """
    },

    "m3-t7": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Early blight disease symptoms start as tiny brown speckles on lower tomato leaves.</p>
                <p>Busy farmers only notice infections when leaves turn completely yellow and dry.</p>
                <p>By that stage, fungal spores have already infected neighboring plants across the field.</p>
                <p>Computer vision algorithms detect microscopic fungal lesions days before human eyes spot them.</p>
                <p>How do image classification models diagnose plant diseases from smartphone photos?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Leaf Photo:</strong> RGB image of diseased tomato foliage.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Feature Extraction:</strong> Scan for circular brown concentric rings.</li>
                            <li><strong>Probability Softmax:</strong> Compute class probabilities across 38 diseases.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Diagnosis:</strong> Tomato Early Blight (94.8% confidence).</li>
                            <li><strong>Recommendation:</strong> Apply copper oxychloride spray within 48 hours.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.7: Plant Disease Detection Diagnostic Simulation
import numpy as np

# Model confidence scores across candidate disease classes
disease_classes = ['Healthy_Canopy', 'Early_Blight', 'Late_Blight', 'Bacterial_Spot']
simulated_probabilities = np.array([0.02, 0.94, 0.03, 0.01])

top_index = np.argmax(simulated_probabilities)
diagnosed_disease = disease_classes[top_index]
confidence_pct = simulated_probabilities[top_index] * 100.0

print(f"Top Diagnosis: {diagnosed_disease}")
print(f"Diagnostic Confidence: {confidence_pct:.1f}%")

if diagnosed_disease != 'Healthy_Canopy' and confidence_pct > 80.0:
    print("Action Ordered: Send mobile prescription alert for immediate fungicide treatment.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>simulated_probabilities = np.array([0.91, 0.05, 0.02, 0.02])</code>. Does the alert trigger when the canopy is diagnosed healthy?</p>
</div>
        """
    },

    "m3-t8": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Digital cameras record field photos as millions of individual color pixel numbers.</p>
                <p>Computers do not possess human biological eyes or innate visual understanding.</p>
                <p>To detect a diseased leaf, a computer must analyze numbers in red, green, and blue grids.</p>
                <p>Computer vision transforms raw color pixel matrices into meaningful agricultural shapes.</p>
                <p>How does computer vision translate raw pixel numbers into crop health diagnoses?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Pixel Array:</strong> Red, Green, and Blue color channel matrices (0 to 255).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Color Thresholding:</strong> Separate green plant canopy from brown background soil.</li>
                            <li><strong>Coverage Ratio:</strong> Calculate percentage of green pixels in the frame.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Canopy Fraction:</strong> 74.2% ground cover estimated by computer vision.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.8: Computer Vision Green Canopy Segmentation
import numpy as np

# Simulating 5x5 pixel patch: Green channel vs Red channel
green_channel = np.array([
    [180, 190, 40, 35, 185],
    [175, 185, 45, 30, 190],
    [30,  35,  40, 30, 35],
    [190, 195, 35, 40, 180],
    [185, 180, 40, 35, 175]
])

# Soil has low green values (< 60); Healthy leaves have high green (> 120)
plant_canopy_mask = green_channel > 120
canopy_pixels_count = np.sum(plant_canopy_mask)
total_pixels = green_channel.size
canopy_cover_percentage = (canopy_pixels_count / total_pixels) * 100.0

print(f"Total Pixels Inspected: {total_pixels}")
print(f"Plant Canopy Pixels:    {canopy_pixels_count}")
print(f"Estimated Crop Cover:   {canopy_cover_percentage:.1f}%")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change the segmentation threshold from <code>> 120</code> to <code>> 150</code>. How does setting a stricter greenness filter affect estimated crop cover?</p>
</div>
        """
    },

    "m3-t9": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Standard machine learning algorithms lose spatial relationships when images are flattened into lists.</p>
                <p>Recognizing leaf veins, fungal edges, and caterpillar bite marks requires spatial filtering.</p>
                <p>Convolutional Neural Networks (CNNs) slide tiny mathematical filters across the image.</p>
                <p>This sliding filter detects edges, textures, and disease lesions regardless of leaf orientation.</p>
                <p>How do convolutional filters extract diagnostic features from plant foliage photos?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Leaf Pixel Region:</strong> 5x5 grayscale patch of leaf blade.</li>
                            <li><strong>Edge Filter:</strong> 3x3 Sobel kernel detecting vertical vein lines.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Convolution:</strong> Slide 3x3 filter across pixels, multiplying and summing.</li>
                            <li><strong>Feature Map:</strong> Generate activation map highlighting sharp edges.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Convolved Feature Map:</strong> Isolated leaf edge contours ready for CNN layers.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.9: 2D Convolution Operation for Leaf Edge Detection
import numpy as np

# 4x4 sample leaf pixel patch
leaf_patch = np.array([
    [10, 10, 80, 80],
    [10, 10, 80, 80],
    [10, 10, 80, 80],
    [10, 10, 80, 80]
])

# 3x3 Vertical Edge Detection Filter
sobel_filter = np.array([
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
])

# Perform manual 2D convolution for the top-left 3x3 window
window = leaf_patch[0:3, 0:3]
convolved_output = np.sum(window * sobel_filter)

print("Leaf Pixel Window:\\n", window)
print("\\nConvolutional Filter:\\n", sobel_filter)
print(f"\\nDetected Edge Activation Strength: {convolved_output}")
print("Insight: High output number signals sharp edge boundary between leaf and background.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If all window numbers are identical (e.g., <code>window = np.ones((3,3)) * 50</code>, flat green leaf with zero edges), what does the convolution output equal?</p>
</div>
        """
    },

    "m3-t19": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Farm weather telemetry readings are linked through time, not independent random events.</p>
                <p>Tomorrow's soil temperature depends strongly on today's heat and yesterday's rain.</p>
                <p>Standard regression models ignore time order and shuffle dates like playing cards.</p>
                <p>Time series analysis models consecutive trends, seasonality, and cyclic weather patterns.</p>
                <p>How do time series models forecast multi-day agricultural weather trends?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Daily Soil Temp:</strong> 7 consecutive days of 8:00 AM soil temperatures.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Lag Features:</strong> Use yesterday's temp (t-1) to predict today (t).</li>
                            <li><strong>Moving Average:</strong> Smooth random fluctuations over 3-day window.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Next-Day Forecast:</strong> Accurate 24-hour ahead soil temperature advisory.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.19: Time Series Lag and Moving Average Analysis
import pandas as pd

temp_series = pd.Series([22.0, 23.5, 25.0, 24.0, 26.5, 27.0, 28.0], 
                        name="Soil_Temp_C")

# Engineer 1-day lag and 3-day rolling moving average
df_time = pd.DataFrame(temp_series)
df_time['Yesterday_Temp'] = df_time['Soil_Temp_C'].shift(1)
df_time['3Day_Rolling_Avg'] = df_time['Soil_Temp_C'].rolling(window=3).mean()

print("--- Agricultural Time Series Analysis ---")
print(df_time)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Compute the correlation between <code>'Soil_Temp_C'</code> and <code>'Yesterday_Temp'</code>. Why is auto-correlation so strong in soil temperatures?</p>
</div>
        """
    }
}

print("Loaded Module 3 Part 1 templates:", len(m3_templates_p1))
