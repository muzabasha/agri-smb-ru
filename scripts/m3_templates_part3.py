# Module 3 Templates: Part 3 (matching module3-handouts-part3.js)
# Topics: m3-t10, m3-t11, m3-t12, m3-t13, m3-t14, m3-t15, m3-t16, m3-t17, m3-t18, m3-t20, m3-t21, m3-t22, m3-t23, m3-t24

m3_templates_p3 = {
    "m3-t10": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Training a deep neural network from scratch requires millions of labeled plant photos.</p>
                <p>An agricultural student typically has only two hundred photos from local college fields.</p>
                <p>Training large models on tiny datasets causes severe overfitting and wasted compute time.</p>
                <p>Transfer learning fine-tunes pre-trained vision models like MobileNet on small farm datasets.</p>
                <p>How does transfer learning achieve 95% disease diagnosis accuracy with few photos?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Pre-trained Base:</strong> MobileNetV2 trained on 1.4 million images.</li>
                            <li><strong>New Farm Data:</strong> 150 local photos of groundnut leaf rust.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Freeze Backbone:</strong> Keep general visual edges and textures locked.</li>
                            <li><strong>Fine-Tune Head:</strong> Train only final classification layer on rust photos.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Custom Classifier:</strong> Lightweight mobile model for field scouting.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.10: Transfer Learning Simulation for Mobile Diagnostics
import numpy as np

# Extracted 128-element feature vector from MobileNetV2 backbone
simulated_image_features = np.array([0.85, 0.12, 0.44, 0.91, 0.05])
# Trained classification head weights for Groundnut Rust
rust_detector_weights = np.array([1.2, -0.4, 0.8, 1.5, -0.9])

# Dot product computes activation score
logit_score = np.dot(simulated_image_features, rust_detector_weights)
rust_probability = 1.0 / (1.0 + np.exp(-logit_score))

print(f"Mobile Feature Vector Size: {len(simulated_image_features)}")
print(f"Groundnut Rust Probability: {rust_probability * 100.0:.1f}%")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If a healthy leaf produces low features <code>[0.1, 0.0, 0.1, 0.05, 0.8]</code>, what does the rust probability drop to?</p>
</div>
        """
    },

    "m3-t11": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>AI models trained inside sterile laboratories often fail when tested outdoors in real sunlight.</p>
                <p>The famous PlantVillage dataset contains 54,000 photos of 38 plant diseases on plain grey backgrounds.</p>
                <p>When farmers photograph leaves under bright sun, shadows, and soil backgrounds, models get confused.</p>
                <p>Understanding dataset distribution and field domain gaps is critical for trustworthy AI tools.</p>
                <p>How do we evaluate benchmark crop disease datasets like PlantVillage for field deployment?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>PlantVillage:</strong> 54,306 images across 14 crops and 26 diseases.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Dataset Profiling:</strong> Measure image counts across crop categories.</li>
                            <li><strong>Class Imbalance:</strong> Identify over-represented vs scarce disease classes.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Training Strategy:</strong> Apply image augmentation to balance rare diseases.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.11: PlantVillage Dataset Class Distribution Check
import pandas as pd

plantvillage_sample = pd.DataFrame({
    'Crop': ['Tomato', 'Tomato', 'Potato', 'Potato', 'Apple'],
    'Condition': ['Early_Blight', 'Late_Blight', 'Early_Blight', 'Late_Blight', 'Scab'],
    'Images_Count': [1000, 1909, 1000, 1000, 630]
})

print("--- PlantVillage Benchmark Distribution ---")
print(plantvillage_sample)
print(f"Total Images in Sample: {plantvillage_sample['Images_Count'].sum()}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Which disease in the sample table has the highest number of photos? Why does class imbalance matter in training?</p>
</div>
        """
    },

    "m3-t12": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A tractor boom sprayer travels at twelve kilometers per hour across onion beds.</p>
                <p>Standard whole-image classification cannot tell the sprayer which nozzle to fire.</p>
                <p>The sprayer needs bounding-box coordinates for each specific weed in real time.</p>
                <p>YOLO object detection spots and locates multiple weeds in milliseconds as the tractor drives.</p>
                <p>How do object detection models guide selective spot sprayers in commercial fields?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Camera Feed:</strong> Video frames capturing onion beds and stray weeds.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>YOLO Detection:</strong> Predict bounding boxes [x, y, width, height].</li>
                            <li><strong>Class Confidence:</strong> Verify target is weed (e.g., Parthenium), not onion.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Target Coordinates:</strong> Trigger micro-nozzle #3 directly over weed.</li>
                            <li><strong>Herbicide Savings:</strong> 85% chemical reduction compared to broadcast spraying.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.12: Object Detection Bounding Box Parsing for Spot Spraying
# Detected weed objects from a single camera frame
detected_weeds = [
    {"weed_type": "Parthenium", "confidence": 0.92, "box_xy": (120, 240)},
    {"weed_type": "Cyperus",    "confidence": 0.88, "box_xy": (340, 260)}
]

print(f"Weeds Spotted in Frame: {len(detected_weeds)}")
for weed in detected_weeds:
    print(f"Target: {weed['weed_type']:<12} | Conf: {weed['confidence']*100:.1f}% | Coordinates: {weed['box_xy']}")
    print(f"👉 Solenoid Command: Fire micro-pulse spray at nozzle position {weed['box_xy'][0]} mm")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If an onion seedling is misdetected with low confidence (0.45), add an <code>if weed['confidence'] > 0.80:</code> check to prevent accidental crop spraying!</p>
</div>
        """
    },

    "m3-t13": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Soil health depends on complex biological, physical, and chemical interactions.</p>
                <p>Farmers struggle to interpret raw lab numbers: pH 6.2, EC 1.2, OC 0.45%, N 140 kg.</p>
                <p>They need a simple, overall soil fertility grade: Fertile, Degraded, or Saline.</p>
                <p>Multi-class classification groups multivariate soil test readings into clear health tiers.</p>
                <p>How do classification models grade overall soil fertility from chemical test cards?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Soil Test:</strong> pH 5.2, Organic Carbon 0.38%, Nitrogen 120 kg/ha.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Decision Tree Classifier:</strong> Evaluate multiple soil thresholds.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Soil Grade:</strong> Class 3 - Low Fertility / High Acidity.</li>
                            <li><strong>Prescription:</strong> Apply 300 kg agricultural lime + 2 tons vermicompost.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.13: Multi-Parameter Soil Health Grading
import numpy as np
from sklearn.tree import DecisionTreeClassifier

# Features: [pH, Organic_Carbon_Pct, Nitrogen_kg_ha]
soil_samples = np.array([
    [6.8, 0.75, 280],  # Fertile (Class 0)
    [5.2, 0.35, 120],  # Acidic Degraded (Class 1)
    [8.4, 0.40, 160],  # Saline Alkaline (Class 2)
    [6.5, 0.68, 260]   # Fertile (Class 0)
])
soil_classes = ['Fertile_Healthy', 'Acidic_Degraded', 'Saline_Alkaline', 'Fertile_Healthy']

soil_classifier = DecisionTreeClassifier(random_state=42)
soil_classifier.fit(soil_samples, soil_classes)

# Grade a new farmer's soil sample
new_farmer_sample = np.array([[5.0, 0.32, 110]])
health_verdict = soil_classifier.predict(new_farmer_sample)[0]

print(f"Farmer Sample: pH {new_farmer_sample[0][0]}, Carbon {new_farmer_sample[0][1]}%")
print(f"Soil Health Verdict: {health_verdict}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Test a fertile riverbed sample: <code>new_farmer_sample = np.array([[6.7, 0.80, 310]])</code>. Does the model classify it as Fertile_Healthy?</p>
</div>
        """
    },

    "m3-t14": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Wet laboratory soil chemical analysis takes ten days and costs a thousand rupees per sample.</p>
                <p>Portable handheld spectrometers measure diffuse light reflection from soil in ten seconds.</p>
                <p>However, light reflectance spectra do not directly show soil nitrogen or organic matter percentages.</p>
                <p>Machine learning regression models predict organic carbon percentages directly from optical spectra.</p>
                <p>How does spectral regression predict soil chemical properties in seconds?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Optical Spectra:</strong> Reflectances at 650 nm, 850 nm, 1450 nm, 1950 nm.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Partial Least Squares:</strong> Correlate absorption peaks with carbon bonds.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Predicted Carbon:</strong> 0.62% Soil Organic Carbon estimated instantly.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.14: Predicting Soil Organic Carbon from Spectral Bands
import numpy as np
from sklearn.linear_model import Ridge

# Spectral reflectance features: [Band_650nm, Band_850nm, Band_1450nm]
soil_spectra = np.array([
    [0.15, 0.28, 0.12],
    [0.22, 0.35, 0.18],
    [0.10, 0.20, 0.08],
    [0.18, 0.30, 0.14]
])
# Actual measured Soil Organic Carbon (%)
measured_carbon_pct = np.array([0.72, 0.45, 0.95, 0.60])

spec_model = Ridge(alpha=0.5)
spec_model.fit(soil_spectra, measured_carbon_pct)

# Predict for new soil core
new_core = np.array([[0.12, 0.24, 0.10]])
predicted_carbon = spec_model.predict(new_core)[0]

print(f"Predicted Soil Organic Carbon: {predicted_carbon:.2f}%")
print("Instant Field Spectroscopy vs 10-day Lab Delay!")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Darker soils absorb more light (lower reflectance numbers). Test a dark soil core: <code>[[0.08, 0.16, 0.06]]</code>. Does the predicted carbon percentage rise?</p>
</div>
        """
    },

    "m3-t15": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Commercial fertilizers come in fixed formulas like Urea (46-0-0) and DAP (18-46-0).</p>
                <p>Applying DAP to supply Phosphorus also adds unexpected Nitrogen at the same time.</p>
                <p>Balancing multi-nutrient fertilizers by manual guesswork causes over-spending or crop nutrient burns.</p>
                <p>Mathematical optimization calculates the exact combination of fertilizer bags at lowest cost.</p>
                <p>How do nutrient balancing algorithms calculate optimal commercial fertilizer combinations?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Field Deficit:</strong> 50 kg Nitrogen, 30 kg Phosphorus, 20 kg Potash.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Step 1:</strong> Calculate DAP bags needed to meet 30 kg Phosphorus.</li>
                            <li><strong>Step 2:</strong> Subtract Nitrogen supplied by DAP from Nitrogen target.</li>
                            <li><strong>Step 3:</strong> Calculate Urea bags needed for remaining Nitrogen deficit.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Shopping List:</strong> 65 kg DAP + 83 kg Urea + 33 kg MOP.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.15: Precision Multi-Nutrient Fertilizer Balance
# Target nutrient requirements for 1 acre of Ragi (kg)
target_n = 50.0
target_p = 30.0

# DAP provides 46% P2O5 and 18% N
dap_kg_needed = target_p / 0.46
n_supplied_by_dap = dap_kg_needed * 0.18

remaining_n_deficit = max(0, target_n - n_supplied_by_dap)
# Urea provides 46% N
urea_kg_needed = remaining_n_deficit / 0.46

print(f"Target Nutrient Needs -> Nitrogen: {target_n} kg | Phosphorus: {target_p} kg")
print(f"DAP Required:           {dap_kg_needed:.1f} kg (Supplies {n_supplied_by_dap:.1f} kg Nitrogen)")
print(f"Remaining N Deficit:    {remaining_n_deficit:.1f} kg")
print(f"Additional Urea Needed: {urea_kg_needed:.1f} kg")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If <code>target_p = 60.0</code> (double phosphorus), how much Nitrogen is automatically supplied by the extra DAP?</p>
</div>
        """
    },

    "m3-t16": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Fertilizer prices fluctuate every week across local agricultural cooperative societies.</p>
                <p>Farmers want to supply full crop nutrition at the lowest possible out-of-pocket cash cost.</p>
                <p>Linear programming solves constrained mathematical systems to minimize purchasing costs.</p>
                <p>The optimizer finds the cheapest combination of bags satisfying all crop nutrient targets.</p>
                <p>How does linear optimization minimize farmer fertilizer costs while preserving soil health?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Market Prices:</strong> Urea = ₹6/kg, Complex 20:20:0 = ₹18/kg.</li>
                            <li><strong>Target:</strong> 40 kg Nitrogen.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Cost Comparison:</strong> Calculate cost per kg of pure elemental Nitrogen.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Cost Advisory:</strong> Urea provides Nitrogen at ₹13/kg vs Complex at ₹90/kg.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.16: Cost-Minimization Nutrient Optimizer
# Cost per kilogram of commercial fertilizer (Rupees)
price_per_kg_urea = 6.0       # 46% N
price_per_kg_complex = 18.0   # 20% N

cost_per_kg_n_urea = price_per_kg_urea / 0.46
cost_per_kg_n_complex = price_per_kg_complex / 0.20

print("--- Nitrogen Source Cost Comparison ---")
print(f"Cost per kg Nitrogen via Urea:    ₹{cost_per_kg_n_urea:.2f}")
print(f"Cost per kg Nitrogen via Complex: ₹{cost_per_kg_n_complex:.2f}")

if cost_per_kg_n_urea < cost_per_kg_n_complex:
    savings_pct = ((cost_per_kg_n_complex - cost_per_kg_n_urea) / cost_per_kg_n_complex) * 100.0
    print(f"Recommendation: Use Urea for pure N. Saves {savings_pct:.1f}% on nutrient budget!")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If Urea subsidy is reduced and price rises to <code>price_per_kg_urea = 22.0</code>, how does the cost ranking change?</p>
</div>
        """
    },

    "m3-t17": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Electricity supply in rural agricultural feeders is irregular and often arrives at midnight.</p>
                <p>Farmers must wake up at 2:00 AM to walk dark fields and turn on borewell switches.</p>
                <p>Automated precision irrigation links IoT soil probes to cloud relays over cellular modems.</p>
                <p>Pumps start and stop automatically when electricity is present and soil needs water.</p>
                <p>How do IoT smart irrigation systems automate nighttime field watering safely?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Telemetry:</strong> Soil moisture 18.2%, Voltage present, 0 mm rain.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Relay Controller:</strong> Verify safety interlocks and start timer.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Relay Command:</strong> CLOSE RELAY (Pump ON for 45 minutes).</li>
                            <li><strong>Farmer SMS:</strong> "Field Block 2 irrigation started automatically."</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.17: Precision Irrigation Automation Engine
soil_moisture_pct = 18.2
grid_voltage_ok = True
flow_sensor_active = True

def evaluate_irrigation_state(moisture, power, sensor):
    if not power:
        return "ERROR: No electricity available."
    if not sensor:
        return "SAFETY HALT: Water pipe flow sensor disconnected."
    if moisture < 20.0:
        return "PUMP_ON: Soil water deficit detected. Irrigating field."
    elif moisture > 35.0:
        return "PUMP_OFF: Field capacity reached. Stopping motor."
    else:
        return "STANDBY: Soil moisture within acceptable comfort range."

system_state = evaluate_irrigation_state(soil_moisture_pct, grid_voltage_ok, flow_sensor_active)
print("System Telemetry: Moisture 18.2% | Power ACTIVE")
print("Controller Output:", system_state)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>flow_sensor_active = False</code> (simulating pipe leak or dry borewell). Does the safety halt stop the motor?</p>
</div>
        """
    },

    "m3-t18": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Pumping too much water leaches expensive nutrients past plant roots into deep subsoil.</p>
                <p>Pumping too little water triggers moisture stress and halts fruit expansion.</p>
                <p>Farmers need to know the exact liters of water consumed by crops daily.</p>
                <p>Crop water requirement models multiply reference evapotranspiration by crop growth coefficients (Kc).</p>
                <p>How do Kc crop coefficients calculate daily irrigation water volumes in liters?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>ET0:</strong> 5.2 mm/day baseline weather evaporation.</li>
                            <li><strong>Kc Factor:</strong> 1.15 (Tomato flowering and fruit-setting stage).</li>
                            <li><strong>Plot Size:</strong> 2.0 acres (8,094 square meters).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Crop ET:</strong> ETc = ET0 * Kc = 5.2 * 1.15 = 5.98 mm/day.</li>
                            <li><strong>Liter Conversion:</strong> 1 mm water on 1 sq.m = 1 Liter.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Total Water:</strong> 48,400 Liters needed across 2 acres today.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.18: Daily Crop Water Requirement Calculator (FAO-56)
reference_et0_mm = 5.2       # Daily atmospheric water loss
crop_coefficient_kc = 1.15   # Tomato fruit development stage
plot_area_sqm = 4047.0       # 1 acre in square meters

# Actual Crop Evapotranspiration: ETc = ET0 * Kc
crop_etc_mm = reference_et0_mm * crop_coefficient_kc
# 1 mm of water depth over 1 sq.m equals exactly 1 liter
daily_liters_per_acre = crop_etc_mm * plot_area_sqm

print(f"Reference Evaporation (ET0): {reference_et0_mm} mm/day")
print(f"Crop Factor (Kc):             {crop_coefficient_kc}")
print(f"Actual Crop Water Demand:    {crop_etc_mm:.2f} mm/day")
print(f"Daily Water Requirement:     {daily_liters_per_acre:,.0f} Liters per acre")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> At initial seedling stage, tomato <code>crop_coefficient_kc = 0.45</code>. How much less water does a young seedling require compared to fruiting vines?</p>
</div>
        """
    },

    "m3-t20": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Sudden unseasonal heatwaves cause tomato flowers to abort within forty-eight hours.</p>
                <p>Farmers need forty-eight hours advance warning to spray heat-protective bio-stimulants.</p>
                <p>Simple averages fail because temperatures rise and fall in persistent meteorological waves.</p>
                <p>ARIMA time series models forecast upcoming temperature swings from historical rhythms.</p>
                <p>How do autoregressive moving average models forecast local weather trajectories?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Historical Sequence:</strong> 30 days of consecutive maximum temperatures.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Autoregression:</strong> Correlate tomorrow's heat with past 3 days.</li>
                            <li><strong>Differencing:</strong> Remove seasonal upward trends to ensure stationarity.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>48-Hour Forecast:</strong> Predicted heatwave spike (36.5°C) on Thursday.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.20: Autoregressive Temperature Forecasting Simulation
import numpy as np

# Past 3 days max temperatures: [Day t-2, Day t-1, Day t]
recent_temperatures = np.array([31.0, 32.5, 34.0])
# Learned autoregressive coefficients (AR-3 model)
ar_weights = np.array([0.15, 0.35, 0.50])
intercept = 1.2

# Forecast tomorrow: Intercept + sum(weights * past_temps)
forecast_tomorrow_temp = intercept + np.sum(recent_temperatures * ar_weights)

print("Recent 3-Day Temperature History:", recent_temperatures)
print(f"AR Model Forecast for Tomorrow:   {forecast_tomorrow_temp:.1f}°C")

if forecast_tomorrow_temp > 35.0:
    print("🚨 HEATWAVE ADVISORY: Activate shade nets and misting lines!")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change yesterday's temp to <code>36.0</code>. What is the predicted forecast? Does the heatwave warning trigger?</p>
</div>
        """
    },

    "m3-t21": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Severe monsoon depressions bring sudden windstorms that lodge tall maize and banana crops.</p>
                <p>Single thermometer readings miss broader regional atmospheric pressure drops.</p>
                <p>Detecting storms early requires pattern recognition across pressure, wind, and humidity.</p>
                <p>Classification models recognize storm patterns hours before black clouds appear on horizons.</p>
                <p>How does multivariate pattern recognition predict storm events to protect crops?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Atmospheric Sensors:</strong> Barometer 998 hPa, Wind 38 km/h, Humidity 92%.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Pattern Match:</strong> Rapid pressure drop + high humidity signals cyclone front.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Storm Warning:</strong> 91% thunderstorm probability. Prop up banana stalks!</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.21: Weather Pattern Anomaly Detector
barometric_pressure_hpa = 998.0  # Normal sea-level is 1013.25 hPa
wind_speed_kmh = 38.0
relative_humidity_pct = 92.0

def detect_squall_pattern(pressure, wind, humidity):
    # Rapid pressure drop combined with high wind and moisture
    is_pressure_abnormal = pressure < 1002.0
    is_wind_severe = wind > 30.0
    is_air_saturated = humidity > 85.0
    
    if is_pressure_abnormal and is_wind_severe and is_air_saturated:
        return "CRITICAL_STORM: Severe squall approaching within 3 hours!"
    elif is_pressure_abnormal:
        return "WATCH: Atmospheric depression detected. Monitor weather radar."
    else:
        return "NORMAL: Stable atmospheric conditions."

weather_alert = detect_squall_pattern(barometric_pressure_hpa, wind_speed_kmh, relative_humidity_pct)
print("Barometer: 998 hPa | Wind: 38 km/h | Humidity: 92%")
print("Automated Weather Pattern Alert:", weather_alert)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>barometric_pressure_hpa = 1014.0</code> and <code>wind_speed_kmh = 8.0</code>. Does the storm alert clear?</p>
</div>
        """
    },

    "m3-t22": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer harvests ten tons of onions during a sudden market price crash.</p>
                <p>Selling immediately at fifty paise per kilo causes heavy debt and emotional distress.</p>
                <p>If the farmer had known prices would recover in four weeks, they would have stored them.</p>
                <p>Price forecasting models use arrival volumes and seasonal trends to predict price rebounds.</p>
                <p>How do agricultural price models help farmers choose the best harvest sale timing?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Market Features:</strong> Daily market arrivals (tons), Festival calendar, Fuel rates.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Elasticity Model:</strong> Invert supply volume to calculate price equilibrium.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Price Advisory:</strong> Current price ₹12/kg. Predicted in 30 days: ₹28/kg.</li>
                            <li><strong>Decision:</strong> Store in ventilated warehouse for four weeks before selling.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.22: APMC Market Arrival vs Price Elasticity
import numpy as np

# Daily market arrivals (quintals) vs Wholesale clearing price (₹ per quintal)
market_arrivals_quintals = np.array([500, 800, 1200, 1800, 2500])
clearing_prices_rs = np.array([3200, 2700, 2200, 1600, 1100])

# Fit inverse relationship
slope, intercept = np.polyfit(market_arrivals_quintals, clearing_prices_rs, deg=1)

# Predict price when arrivals drop to 600 quintals next month
forecast_arrival = 600
expected_price = (slope * forecast_arrival) + intercept

print("--- Onion Market Price Elasticity ---")
print(f"Price Drop per 100 quintal arrival glut: ₹{abs(slope)*100:.0f}")
print(f"Predicted Price when arrivals drop to 600 q: ₹{expected_price:.0f} per quintal")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If a harvest glut arrives with <code>forecast_arrival = 3000</code> quintals, what does the predicted wholesale price collapse to?</p>
</div>
        """
    },

    "m3-t23": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agricultural supply chain startup buys five tons of fresh coriander daily.</p>
                <p>If demand drops, unsold fresh coriander rots in crates within twenty-four hours.</p>
                <p>If demand spikes, restaurants run out of herbs and switch to competing suppliers.</p>
                <p>Demand prediction models forecast city-wide vegetable consumption using calendar and weather features.</p>
                <p>How do demand forecasting algorithms prevent agricultural food waste in supply chains?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Context Features:</strong> Day of week (Weekend), Festival holiday (Yes), Rain (No).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Demand Regression:</strong> Apply multiplicative weekend and festival factors.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Procurement Order:</strong> Buy 6,400 kg coriander today (35% surge expected).</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.23: Vegetable Demand Surge Forecasting
baseline_weekday_demand_kg = 4000.0

is_weekend = True
is_festival_holiday = True
rain_forecast_evening = False

# Demand multipliers
weekend_multiplier = 1.30 if is_weekend else 1.0
festival_multiplier = 1.25 if is_festival_holiday else 1.0
rain_penalty = 0.85 if rain_forecast_evening else 1.0

forecast_demand_kg = baseline_weekday_demand_kg * weekend_multiplier * festival_multiplier * rain_penalty

print(f"Base Weekday Demand:  {baseline_weekday_demand_kg} kg")
print(f"Weekend Surge Factor: {weekend_multiplier}x")
print(f"Festival Factor:      {festival_multiplier}x")
print(f"Forecast Procurement: {forecast_demand_kg:,.0f} kg")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>rain_forecast_evening = True</code> (heavy thunderstorm reduces dining out). How does the rain penalty reduce forecasted procurement?</p>
</div>
        """
    },

    "m3-t24": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer sells fresh tomatoes for ten rupees per kilo at the village gate.</p>
                <p>Ten miles away in Bengaluru city, supermarkets sell the exact same tomatoes for fifty rupees.</p>
                <p>Middlemen pocket eighty percent of profit margins because farmers lack market visibility.</p>
                <p>Market intelligence dashboards track wholesale price differences across neighboring APMC centers.</p>
                <p>How does transparent market price analytics empower farmers to negotiate better profits?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>APMC Feeds:</strong> Kolar (₹18/kg), Bangalore (₹32/kg), Mysore (₹22/kg).</li>
                            <li><strong>Transport Cost:</strong> ₹4 per kg freight charge to Bangalore.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Net Profit Calculation:</strong> Market Price - Transport Cost.</li>
                            <li><strong>Arbitrage Ranking:</strong> Identify highest net margin destination.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Optimal Route:</strong> Ship to Bangalore for net ₹28/kg profit (₹10/kg gain).</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 3.24: Multi-Market Arbitrage & Profit Optimizer
import pandas as pd

market_rates = pd.DataFrame({
    'Market_Center': ['Local_Village', 'Kolar_APMC', 'Bangalore_APMC', 'Mysore_APMC'],
    'Wholesale_Price_per_kg': [12.0, 18.0, 32.0, 24.0],
    'Transport_Cost_per_kg': [0.0, 2.5, 4.5, 5.0]
})

market_rates['Net_Farmer_Realization'] = (
    market_rates['Wholesale_Price_per_kg'] - market_rates['Transport_Cost_per_kg']
)

best_market = market_rates.sort_values(by='Net_Farmer_Realization', ascending=False).iloc[0]

print("--- Agricultural Market Realization Comparison ---")
print(market_rates)
print(f"\\nBest Destination: {best_market['Market_Center']}")
print(f"Net Profit Margin: ₹{best_market['Net_Farmer_Realization']:.2f} per kg")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> If fuel prices spike and <code>Transport_Cost_per_kg</code> to Bangalore becomes <code>₹16.0</code>, which market becomes the most profitable choice?</p>
</div>
        """
    }
}

print("Loaded Module 3 Part 3 templates:", len(m3_templates_p3))
