topic_enhancements_part2 = {
    "m1-t5": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Software engineers write code, but know very little about farming.</p>
                <p>They do not understand soil nutrients, crop diseases, or farming cycles.</p>
                <p>Agriculture students know plants and farm operations deeply from practical training.</p>
                <p>Learning basic Python makes agriculture students valuable bridge leaders in AgriTech.</p>
                <p>What high-paying career paths exist for digital agriculture graduates?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Agronomy Knowledge:</strong> B.Sc. Agriculture degree foundations.</li>
                            <li><strong>Tech Skills:</strong> Basic Python, data tables, and sensor logs.</li>
                            <li><strong>Personal Preference:</strong> Field research, data analysis, or drones.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Skill Match:</strong> Compare personal interests to market demands.</li>
                            <li><strong>Industry Filter:</strong> Identify active hiring startups and enterprises.</li>
                            <li><strong>Portfolio Check:</strong> Build sample Colab farm code projects.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Career Target:</strong> Precision Agronomist / Agri-Data Analyst.</li>
                            <li><strong>Target Employers:</strong> Fasal, DeHaat, CropIn, John Deere, Bayer.</li>
                            <li><strong>Action Plan:</strong> Complete Hands-On Colab labs for Module 1.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.5: AgriTech Career Role Matcher
enjoys_field_trials = True
enjoys_python_coding = True
enjoys_drone_flying = False

# Career matching logic
if enjoys_field_trials and enjoys_python_coding:
    recommended_role = "Precision Agronomist / Smart Farming Specialist"
    hiring_companies = "Fasal, DeHaat, John Deere, Bayer CropScience"
elif enjoys_python_coding and enjoys_drone_flying:
    recommended_role = "Drone Aerial Surveyor & GIS Specialist"
    hiring_companies = "SatSure, Absolute Foods, Skylark Drones"
elif enjoys_python_coding:
    recommended_role = "Agricultural Data Analyst"
    hiring_companies = "CropIn, WayCool, Ninjacart"
else:
    recommended_role = "Organic Farm Operations Manager"
    hiring_companies = "BigBasket, Namdhari Fresh, ITC Agri"

print("Recommended Career Pathway:", recommended_role)
print("Active Employers in Karnataka:", hiring_companies)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Set <code>enjoys_field_trials = False</code> and <code>enjoys_drone_flying = True</code>. What specialist job role is recommended?</p>
</div>
        """
    },

    "m1-t6": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An AI model predicts your wheat field will yield 45 quintals.</p>
                <p>After threshing, your actual scale weight is 52 quintals.</p>
                <p>The model was off by seven quintals per acre.</p>
                <p>If we do not measure prediction error, the model cannot improve.</p>
                <p>How does math calculate error penalties to train machine learning models?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Actual Harvest:</strong> 52.0 quintals per acre measured on scale.</li>
                            <li><strong>Predicted Yield:</strong> 45.0 quintals per acre estimated by AI.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Error Calculation:</strong> Subtract prediction from actual harvest.</li>
                            <li><strong>Penalty Squaring:</strong> Square error to penalize larger mistakes.</li>
                            <li><strong>Optimization:</strong> Use gradient descent to minimize penalty.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Yield Gap:</strong> +7.0 quintals difference.</li>
                            <li><strong>Loss Penalty Score:</strong> 49.0 squared error units.</li>
                            <li><strong>Model Adjustment:</strong> Shift internal weights to raise future predictions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.6: Harvest Prediction Error Calculator
actual_crop_yield = 52.0      # Actual quintals harvested
predicted_crop_yield = 45.0   # Model estimate before harvest

# Error calculation
yield_error = actual_crop_yield - predicted_crop_yield
squared_error = yield_error ** 2

print(f"Prediction Difference: {yield_error:.1f} quintals")
print(f"Penalty Score (Squared Error): {squared_error:.1f}")
print("Learning Goal: Reduce this penalty score to near zero.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>predicted_crop_yield = 51.5</code>. Run the cell again. How much does the squared error penalty drop?</p>
</div>
        """
    },

    "m1-t7": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Two seed vendors advertise tomato seeds with 15 kg average yield.</p>
                <p>Vendor A seeds produce between 14 kg and 16 kg on all plants.</p>
                <p>Vendor B seeds produce 3 kg on some plants and 27 kg on others.</p>
                <p>Both vendors average 15 kg, but Vendor B risks financial ruin.</p>
                <p>How does statistical variation help farmers pick reliable seed varieties?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Sample Data:</strong> Harvest weights from six tomato plants (kg).</li>
                            <li><strong>Plot A:</strong> [14.8, 15.2, 14.9, 15.1, 15.0, 15.0].</li>
                            <li><strong>Plot B:</strong> [3.0, 26.0, 4.0, 24.0, 5.0, 28.0].</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Mean Calculation:</strong> Sum values and divide by sample count.</li>
                            <li><strong>Deviation Calculation:</strong> Measure individual spread from mean.</li>
                            <li><strong>Standard Deviation:</strong> Compute square root of variance.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Plot A Stats:</strong> Mean = 15.0 kg, Standard Deviation = 0.14 kg.</li>
                            <li><strong>Plot B Stats:</strong> Mean = 15.0 kg, Standard Deviation = 12.39 kg.</li>
                            <li><strong>Agronomic Decision:</strong> Select Plot A seeds for guaranteed consistency.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.7: Field Harvest Statistics and Uniformity
import statistics

# Tomato harvest from 6 sample plants (kg per plant)
plot_a_yield_kg = [14.8, 15.2, 14.9, 15.1, 15.0, 15.0]
plot_b_yield_kg = [3.0, 26.0, 4.0, 24.0, 5.0, 28.0]

avg_yield_a = statistics.mean(plot_a_yield_kg)
var_yield_a = statistics.stdev(plot_a_yield_kg)

avg_yield_b = statistics.mean(plot_b_yield_kg)
var_yield_b = statistics.stdev(plot_b_yield_kg)

print(f"Plot A -> Average: {avg_yield_a:.1f} kg | Variation: {var_yield_a:.2f}")
print(f"Plot B -> Average: {avg_yield_b:.1f} kg | Variation: {var_yield_b:.2f}")
print("Agronomic Insight: Plot A gives high stability, while Plot B is unpredictable.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a diseased plant reading of <code>0.0</code> to <code>plot_a_yield_kg</code>. How does one dead plant affect the average and variation?</p>
</div>
        """
    },

    "m1-t8": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>You install five sensor stations across a ten-acre sugarcane field.</p>
                <p>Each station records moisture, soil temperature, and electrical conductivity.</p>
                <p>Tracking dozens of loose numbers across separate sheets creates confusion.</p>
                <p>Computers need a structured mathematical container to process multi-sensor grids.</p>
                <p>How do vectors and matrices organize thousands of live field readings?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Sensor 1 Vector:</strong> [Moisture 22.5%, Temp 29.0°C, EC 420.0].</li>
                            <li><strong>Sensor 2 Vector:</strong> [Moisture 16.0%, Temp 31.5°C, EC 380.0].</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Vector Subtraction:</strong> Compute difference between zone readings.</li>
                            <li><strong>Threshold Testing:</strong> Check if Zone 2 moisture falls below 18.0%.</li>
                            <li><strong>Matrix Stacking:</strong> Combine zone vectors into field telemetry matrix.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Moisture Deficit:</strong> West Zone is 6.5% drier than East Zone.</li>
                            <li><strong>Valve Signal:</strong> Trigger solenoid valve for West Zone drip line.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.8: Field Sensor Vectors
# Sensor reading format: [soil_moisture_pct, soil_temp_c, fertilizer_ppm]
sensor_zone_east = [22.5, 29.0, 420.0]
sensor_zone_west = [16.0, 31.5, 380.0]

# Calculate moisture difference between zones
moisture_difference = sensor_zone_east[0] - sensor_zone_west[0]

print(f"East Zone Moisture: {sensor_zone_east[0]}%")
print(f"West Zone Moisture: {sensor_zone_west[0]}%")
print(f"Moisture Gap: {moisture_difference:.1f}%")

if sensor_zone_west[0] < 18.0:
    print("Action Required: Open valve for West Zone immediately.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>sensor_zone_west[0] = 23.5</code>. Does the code still order the emergency irrigation valve to open?</p>
</div>
        """
    },

    "m1-t9": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agricultural research farm collects diverse types of data every day.</p>
                <p>They collect seed test sheets, hourly weather readings, and crop photos.</p>
                <p>A computer cannot store a drone image like a simple harvest number.</p>
                <p>Mixing up data structures leads to corrupted farm records and software errors.</p>
                <p>How do we organize tabular, time-series, and image data properly?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Tabular Data:</strong> Farm plot names, crop varieties, acreage numbers.</li>
                            <li><strong>Time Series Data:</strong> Hourly soil moisture records across past week.</li>
                            <li><strong>Image Data:</strong> 12-megapixel smartphone photo of leaf symptoms.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Categorization:</strong> Route tabular data to SQL / Pandas tables.</li>
                            <li><strong>Temporal Sorting:</strong> Organize moisture chronologically.</li>
                            <li><strong>Array Conversion:</strong> Convert image pixels into NumPy RGB arrays.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Unified Digital Ledger:</strong> Standardized digital plot profile.</li>
                            <li><strong>Analytics Ready:</strong> Data formatted for machine learning pipelines.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.9: Digital Farm Ledger
field_record = {
    "crop_name": "Ragi (Finger Millet)",
    "plot_size_acres": 3.5,
    "target_yield_quintals": 42.0,
    "weekly_soil_moisture": [26.0, 24.5, 22.0, 19.5]  # Time series list
}

print("Crop Inspected:", field_record["crop_name"])
print("Plot Area:", field_record["plot_size_acres"], "acres")
print("Latest Moisture Reading:", field_record["weekly_soil_moisture"][-1], "%")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add another moisture reading of <code>17.5</code> to <code>weekly_soil_moisture</code> using <code>.append(17.5)</code>. Check the new latest value!</p>
</div>
        """
    },

    "m1-t10": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A budget soil probe produces raw electronic voltage numbers from 0 to 1023.</p>
                <p>A farmer cannot understand what an electronic number like 580 means.</p>
                <p>The farmer needs to know actual soil moisture percentage to decide watering.</p>
                <p>Without calibration, raw electronics are useless for practical farming decisions.</p>
                <p>How do we translate raw hardware sensor data into reliable farm numbers?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Raw Signal:</strong> 580 units from analog-to-digital converter.</li>
                            <li><strong>Dry Calibration:</strong> 0 units equals bone dry soil.</li>
                            <li><strong>Wet Calibration:</strong> 1023 units equals saturated water pool.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Calibration Math:</strong> Moisture % = (Raw Value / 1023.0) * 100.</li>
                            <li><strong>Threshold Check:</strong> Compare moisture % against 35% trigger line.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Calibrated Moisture:</strong> 56.7% volumetric water content.</li>
                            <li><strong>Automated Decision:</strong> Valve CLOSED (soil water is adequate).</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.10: Soil Moisture Sensor Calibration
raw_sensor_voltage = 580   # Value from electronic sensor (0 to 1023)

# 0 means completely dry soil; 1023 means fully submerged in water
calibrated_soil_moisture = (raw_sensor_voltage / 1023.0) * 100.0

print(f"Raw Electronic Signal: {raw_sensor_voltage}")
print(f"Calibrated Soil Moisture: {calibrated_soil_moisture:.1f}%")

if calibrated_soil_moisture < 35.0:
    print("Valve Command: OPEN (Irrigation Required)")
else:
    print("Valve Command: CLOSED (Moisture Adequate)")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>raw_sensor_voltage = 280</code>. What is the calculated soil moisture? Does the valve open?</p>
</div>
        """
    }
}

print("Loaded Part 2 templates:", len(topic_enhancements_part2))
