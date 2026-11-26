import re
import sys

# Dictionary of IPO models, Stories, Python code, and What-If challenges for all topics of Module 1

topic_enhancements = {
    "m1-t1": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agronomist inspects five acres of tomato plants every morning.</p>
                <p>The agronomist spots leaf curling and soil dryness quickly.</p>
                <p>However, one person cannot inspect twenty thousand plants every day.</p>
                <p>Crop diseases spread fast when inspections are delayed.</p>
                <p>How can machines inspect every plant without getting tired?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Field Data:</strong> Soil moisture sensor value (18.0%).</li>
                            <li><strong>Thermal Data:</strong> Leaf temperature reading (34.5°C).</li>
                            <li><strong>Weather Forecast:</strong> 0 mm rain expected today.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Stress Rule:</strong> Check if leaf temperature exceeds 32°C.</li>
                            <li><strong>Moisture Rule:</strong> Check if soil moisture drops below 20%.</li>
                            <li><strong>Decision Logic:</strong> Combine conditions using logical AND.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Status Alert:</strong> Critical heat and moisture stress detected!</li>
                            <li><strong>Action Command:</strong> Turn on drip line motor immediately.</li>
                            <li><strong>Log:</strong> Save timestamped alert to farm notebook.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.1: AI Farm Alert System
leaf_temp = 34.5        # Leaf temperature in Celsius
soil_moisture = 18.0    # Soil moisture percentage

# AI decision rule
if leaf_temp > 32.0 and soil_moisture < 20.0:
    farm_alert = "CRITICAL: Plant heat stress detected! Start drip lines."
elif soil_moisture < 25.0:
    farm_alert = "WARNING: Soil moisture dropping. Plan irrigation today."
else:
    farm_alert = "NORMAL: Crop conditions are healthy."

print("AI Monitor Status:", farm_alert)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>leaf_temp = 28.0</code> and <code>soil_moisture = 35.0</code>. Run the cell again. What status alert appears now?</p>
</div>
        """
    },

    "m1-t2": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A mango packing warehouse receives five thousand fruits daily.</p>
                <p>Workers must separate export quality mangoes from damaged ones quickly.</p>
                <p>New workers make mistakes because grading rules take months to master.</p>
                <p>Export rejections cost the farmer thousands of rupees in penalties.</p>
                <p>How can a computer learn to grade mangoes automatically?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Weight:</strong> Fruit scale reading in grams (260.0 g).</li>
                            <li><strong>Vision:</strong> Percentage of skin surface blemishes (4.0%).</li>
                            <li><strong>Color:</strong> Skin yellowness rating (8 out of 10).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Supervised Rules:</strong> Check weight and skin blemish thresholds.</li>
                            <li><strong>Comparison:</strong> Compare against training dataset standards.</li>
                            <li><strong>Classification:</strong> Assign grade category based on rules.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Grade Category:</strong> Grade A (Premium Export Quality).</li>
                            <li><strong>Belt Action:</strong> Route fruit to packing box number 1.</li>
                            <li><strong>Market Label:</strong> Print export certificate label.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.2: Supervised Fruit Classifier
fruit_weight_grams = 260.0   # Weight of single mango
surface_blemish_pct = 4.0     # Percentage of skin marks

# Supervised grading model
if fruit_weight_grams >= 250.0 and surface_blemish_pct < 5.0:
    export_grade = "Grade A: Premium Export Quality"
elif fruit_weight_grams >= 180.0 and surface_blemish_pct < 15.0:
    export_grade = "Grade B: Local Retail Market"
else:
    export_grade = "Grade C: Send to Juice Processing"

print("Automated Grading Result:", export_grade)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>surface_blemish_pct = 18.0</code>. Run the code. Where is the fruit sent now?</p>
</div>
        """
    },

    "m1-t3": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>For generations, farmers sowed ragi seeds on fixed calendar dates.</p>
                <p>In recent years, monsoon rains have started at unpredictable times.</p>
                <p>Sowing on fixed calendar dates now causes seed drying and losses.</p>
                <p>Farmers need decisions based on live weather data, not fixed calendars.</p>
                <p>How has agricultural technology evolved to solve this problem?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Rain Forecast:</strong> Predicted rain for next 48 hours (42.0 mm).</li>
                            <li><strong>Soil Sensor:</strong> Current topsoil moisture level (21.0%).</li>
                            <li><strong>Seed Type:</strong> Germination moisture requirement.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Moisture Check:</strong> Evaluate current soil water deficit.</li>
                            <li><strong>Rain Check:</strong> Verify incoming rain is safe, not flooding.</li>
                            <li><strong>Risk Scoring:</strong> Balance germination probability vs seed wash risk.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Advisory:</strong> SOW NOW - Ideal soil absorption predicted.</li>
                            <li><strong>SMS Alert:</strong> Send notification in Kannada to registered farmers.</li>
                            <li><strong>Sowing Window:</strong> Optimal window is next 36 hours.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.3: Adaptive Sowing Advisory
forecast_rainfall_mm = 42.0   # Rain forecast for next 48 hours
soil_moisture = 21.0          # Current soil moisture percentage

# Adaptive recommendation
if forecast_rainfall_mm >= 30.0 and soil_moisture < 25.0:
    sowing_advice = "SOW NOW: Upcoming rainfall will trigger ideal germination."
elif forecast_rainfall_mm > 100.0:
    sowing_advice = "DO NOT SOW: Heavy rain will wash seeds away."
else:
    sowing_advice = "WAIT: Insufficient moisture for seed germination."

print("Smart Advisory:", sowing_advice)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>forecast_rainfall_mm = 110.0</code>. Run the code. Why does the advisory warn against sowing?</p>
</div>
        """
    },

    "m1-t4": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer notices leaves turning pale in one corner of ten acres.</p>
                <p>Spraying chemical fertilizer over the entire field wastes expensive bags.</p>
                <p>Over-fertilization also pollutes nearby groundwater and streams.</p>
                <p>The farmer needs to treat only the deficient plants precisely.</p>
                <p>How can multispectral drone cameras spot crop nutrient stress?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Near Infrared (NIR):</strong> Leaf reflection score (0.68).</li>
                            <li><strong>Red Light Band:</strong> Leaf reflection score (0.14).</li>
                            <li><strong>Field Zone:</strong> GPS boundary coordinates for Block C.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Formula:</strong> Calculate NDVI = (NIR - Red) / (NIR + Red).</li>
                            <li><strong>Threshold Check:</strong> Compare NDVI against healthy crop baseline.</li>
                            <li><strong>Dosage Map:</strong> Compute variable fertilizer rate for stressed zones.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>NDVI Score:</strong> 0.66 (Healthy green crop canopy).</li>
                            <li><strong>Sprayer Map:</strong> Skip healthy zones, spray 15 kg/acre on weak zones.</li>
                            <li><strong>Savings:</strong> 40% reduction in chemical fertilizer cost.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.4: Crop Health Index (NDVI) Calculator
near_infrared_reflection = 0.68  # Light reflected by healthy leaves
red_light_reflection = 0.14      # Light absorbed by chlorophyll

# NDVI calculation formula: (NIR - Red) / (NIR + Red)
crop_health_score = (near_infrared_reflection - red_light_reflection) / (near_infrared_reflection + red_light_reflection)

print(f"Calculated Crop Health Score (NDVI): {crop_health_score:.2f}")

if crop_health_score > 0.60:
    print("Fertilizer Action: Canopy healthy. Do not spray.")
elif crop_health_score > 0.30:
    print("Fertilizer Action: Moderate stress. Apply 15 kg/acre urea.")
else:
    print("Fertilizer Action: Severe stress! Inspect soil and apply booster.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>near_infrared_reflection = 0.28</code> and <code>red_light_reflection = 0.22</code>. What does the new low NDVI score indicate?</p>
</div>
        """
    }
}

print("Loaded Part 1 templates:", len(topic_enhancements))
