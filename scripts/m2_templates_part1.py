# Module 2 Templates: Part 1 (matching module2-handouts.js)
# Topics: m2-t1, m2-t2, m2-t5, m2-t6, m2-t11, m2-t14, m2-t21

m2_templates_p1 = {
    "m2-t1": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A smart farm has ten thousand soil moisture sensors reporting every minute.</p>
                <p>Standard Python lists take too much computer memory for large sensor arrays.</p>
                <p>Calculating averages on standard lists slows down automated irrigation valves.</p>
                <p>NumPy arrays store millions of sensor numbers in compact, fast memory blocks.</p>
                <p>How does NumPy speed up math across large grids of agricultural sensors?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Moisture Array:</strong> [22.4, 18.5, 29.1, 14.8, 25.3] percent readings.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Vector Conversion:</strong> Load Python list into NumPy array.</li>
                            <li><strong>Array Filtering:</strong> Find all sensors reporting moisture under 20.0%.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Drought Zones:</strong> [18.5, 14.8] percent moisture detected.</li>
                            <li><strong>Valve Command:</strong> Trigger irrigation for identified zones.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.1: NumPy Array Soil Moisture Filter
import numpy as np

# Soil moisture readings from 6 field zones
soil_moisture_array = np.array([24.5, 18.2, 28.0, 16.5, 22.1, 19.8])

# Fast vector filter: find dry zones
dry_zones_mask = soil_moisture_array < 20.0
dry_zone_values = soil_moisture_array[dry_zones_mask]

print("All Sensor Readings (%):", soil_moisture_array)
print("Dry Zones Found (%):", dry_zone_values)
print(f"Number of zones needing irrigation: {len(dry_zone_values)}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change the threshold in <code>soil_moisture_array < 20.0</code> to <code>< 25.0</code>. How many field zones now trigger an irrigation alert?</p>
</div>
        """
    },

    "m2-t2": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A greenhouse manager tracks Nitrogen, Phosphorus, and Potassium across four growing beds.</p>
                <p>Each bed requires a different multiplier based on its crop growth stage.</p>
                <p>Calculating nutrient needs bed by bed by hand causes dosing mistakes.</p>
                <p>Matrix multiplication applies dosage formulas across all beds in a single step.</p>
                <p>How do matrix operations automate fertilizer batch mixing in precision greenhouses?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Nutrient Matrix:</strong> 4 rows of [N, P, K] in kg per bed.</li>
                            <li><strong>Scale Multiplier:</strong> Growth stage factor (e.g., 1.25x booster).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Scalar Multiplication:</strong> Multiply entire matrix by 1.25.</li>
                            <li><strong>Column Sums:</strong> Sum total Nitrogen, Phosphorus, Potassium needed.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Fertilizer Order:</strong> Exact total kilograms of N, P, and K to mix.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.2: Matrix Fertilizer Calculations
import numpy as np

# 4 Greenhouse beds: rows = beds, columns = [N, P, K] kg
fertilizer_grid = np.array([
    [10.0, 5.0, 8.0],
    [12.0, 6.0, 9.0],
    [8.0,  4.0, 6.0],
    [15.0, 7.0, 10.0]
])

# Apply a 1.2x vegetative growth booster
boosted_fertilizer = fertilizer_grid * 1.2
total_npk_needed = np.sum(boosted_fertilizer, axis=0)

print("Total Nitrogen Needed:   ", round(total_npk_needed[0], 1), "kg")
print("Total Phosphorus Needed: ", round(total_npk_needed[1], 1), "kg")
print("Total Potassium Needed:  ", round(total_npk_needed[2], 1), "kg")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change the booster factor from <code>1.2</code> to <code>0.8</code> (simulating water conservation mode). What are the new total fertilizer requirements?</p>
</div>
        """
    },

    "m2-t5": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer records daily tomato prices in Yeshwanthpur APMC market on scrap paper.</p>
                <p>Pure Python lists cannot attach calendar dates as labels to daily numbers.</p>
                <p>When dates are separated from prices, market trend analysis becomes prone to errors.</p>
                <p>Pandas Series combines numerical values with real calendar dates as labeled indexes.</p>
                <p>How does Pandas Series simplify historical agricultural price tracking?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Dates:</strong> ['2025-07-01', '2025-07-02', '2025-07-03', '2025-07-04'].</li>
                            <li><strong>Prices:</strong> [2200, 2450, 2100, 2600] rupees per quintal.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Series Construction:</strong> Pair price values with calendar index.</li>
                            <li><strong>Summary Stats:</strong> Compute highest, lowest, and mean price.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Price Summary:</strong> Clean labeled series with market trends.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.5: Pandas Series for Daily Market Prices
import pandas as pd

market_dates = ['2025-07-01', '2025-07-02', '2025-07-03', '2025-07-04']
tomato_prices_per_quintal = [2200, 2450, 2100, 2600]

price_series = pd.Series(data=tomato_prices_per_quintal, index=market_dates, name="Tomato_Price")

print("--- APMC Tomato Price Series ---")
print(price_series)
print(f"\\nHighest Market Price: ₹{price_series.max()} on {price_series.idxmax()}")
print(f"Average Market Price: ₹{price_series.mean():.2f}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a new date <code>'2025-07-05'</code> with price <code>2850</code>. Run the cell again. What is the updated highest price?</p>
</div>
        """
    },

    "m2-t6": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agricultural extension officer collects farm survey sheets from five villages.</p>
                <p>Each sheet contains farmer names, crop varieties, acreages, and fertilizer amounts.</p>
                <p>Analyzing separate spreadsheets manually takes days of repetitive copying and pasting.</p>
                <p>Pandas DataFrames organize entire agricultural databases into searchable, flexible tables.</p>
                <p>How do DataFrames allow researchers to filter and analyze farm survey data?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Survey Columns:</strong> Farmer, Crop, Acreage, Yield_Tons.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>New Column:</strong> Yield_Per_Acre = Yield_Tons / Acreage.</li>
                            <li><strong>Sorting:</strong> Rank farmers by yield productivity.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Productivity Table:</strong> Calculated yields per acre for each farmer.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.6: Pandas DataFrame Farm Survey
import pandas as pd

farm_data = {
    'Farmer_Name': ['Ramesh', 'Suresh', 'Gowramma', 'Anitha'],
    'Crop_Grown': ['Ragi', 'Maize', 'Tomato', 'Ragi'],
    'Land_Acres': [4.0, 6.5, 2.0, 3.5],
    'Yield_Quintals': [48.0, 95.0, 64.0, 44.0]
}

df_farms = pd.DataFrame(farm_data)
# Add calculated productivity column
df_farms['Yield_Per_Acre'] = df_farms['Yield_Quintals'] / df_farms['Land_Acres']

print("--- Agricultural Survey Table ---")
print(df_farms)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add code <code>print(df_farms[df_farms['Crop_Grown'] == 'Ragi'])</code>. Notice how easily you can filter to view only Ragi farmers!</p>
</div>
        """
    },

    "m2-t11": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer reviews a table of daily soil moisture readings across two months.</p>
                <p>Columns of plain numbers make it difficult to spot rapid soil drying trends.</p>
                <p>Without visual graphs, farmers cannot easily see when drought thresholds are crossed.</p>
                <p>Matplotlib converts columns of farm numbers into clear line charts and graphs.</p>
                <p>How do line plots help farmers visualize moisture decline after monsoon rains?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Days:</strong> [1, 2, 3, 4, 5, 6, 7] days after rainfall.</li>
                            <li><strong>Moisture:</strong> [38.0, 32.5, 27.0, 22.5, 18.0, 15.5, 14.0] percent.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Plotting:</strong> Draw line chart with circular data markers.</li>
                            <li><strong>Threshold Line:</strong> Add red dashed warning line at 20.0%.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Visual Chart:</strong> Clear visual plot showing irrigation needed on Day 5.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.11: Matplotlib Soil Moisture Curve
import matplotlib.pyplot as plt

days_after_rain = [1, 2, 3, 4, 5, 6, 7]
soil_moisture_levels = [38.0, 32.5, 27.0, 22.5, 18.0, 15.5, 14.0]

plt.figure(figsize=(7, 4))
plt.plot(days_after_rain, soil_moisture_levels, marker='o', color='green', linewidth=2, label="Soil Moisture %")
plt.axhline(y=20.0, color='red', linestyle='--', label="Drip Trigger (20%)")

plt.title("Field Moisture Depletion - GKVK Farm", fontsize=11)
plt.xlabel("Days After Rainfall Event", fontsize=9)
plt.ylabel("Soil Moisture (%)", fontsize=9)
plt.grid(True, linestyle=':', alpha=0.6)
plt.legend()
plt.tight_layout()
plt.show()
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change Day 5 moisture from <code>18.0</code> to <code>34.0</code> (simulating an unexpected shower). Re-run the plot to see the curve rise!</p>
</div>
        """
    },

    "m2-t14": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A trainee tries to build a crop yield predictor by training directly on messy data.</p>
                <p>The raw data contains missing sensor readings, incorrect units, and unscaled numbers.</p>
                <p>Without a structured machine learning workflow, the prediction model fails completely.</p>
                <p>Every reliable agricultural AI system follows strict steps: clean, split, train, and test.</p>
                <p>What are the essential steps of a professional machine learning workflow?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Raw Records:</strong> Field soil logs, rainfall totals, historical yields.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Step 1: Data Cleaning:</strong> Fix missing values and outliers.</li>
                            <li><strong>Step 2: Train/Test Split:</strong> Separate 80% training and 20% test.</li>
                            <li><strong>Step 3: Training:</strong> Fit algorithm to learn crop yield patterns.</li>
                            <li><strong>Step 4: Validation:</strong> Test accuracy against unseen field test data.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Deployment Model:</strong> Verified model ready for real farm advisory.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.14: Structured Farm ML Workflow Demonstration
import numpy as np

# Step 1: Feature Matrix (Rainfall_mm, Fertilizer_kg)
crop_features = np.array([
    [400.0, 100.0],
    [520.0, 140.0],
    [310.0, 80.0],
    [600.0, 150.0],
    [450.0, 110.0]
])

# Target Yield (quintals per acre)
yield_target = np.array([38.0, 46.0, 29.0, 50.0, 41.0])

print(f"Step 1 Complete: {len(crop_features)} field samples loaded.")
print("Features Shape (Samples, Features):", crop_features.shape)
print("Target Shape:", yield_target.shape)
print("Ready for Train-Test splitting and model fitting.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a new field sample <code>[480.0, 120.0]</code> to <code>crop_features</code> and <code>43.0</code> to <code>yield_target</code>. Verify the updated sample count.</p>
</div>
        """
    },

    "m2-t21": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer wants to estimate how many extra kilograms of maize will grow per kg of nitrogen.</p>
                <p>Guessing fertilizer impact leads to buying too much chemical or getting poor harvests.</p>
                <p>The farmer needs a mathematical line that relates fertilizer input to grain yield.</p>
                <p>Linear Regression finds the exact trendline connecting fertilizer dose to harvest output.</p>
                <p>How does Linear Regression predict crop yields from nutrient application data?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Feature:</strong> Fertilizer applied [60, 80, 100, 120, 140] kg/acre.</li>
                            <li><strong>Target:</strong> Harvested maize yield [28, 34, 40, 45, 51] quintals.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Line Fitting:</strong> Fit linear equation: Yield = Slope * Fertilizer + Base.</li>
                            <li><strong>Slope Interpretation:</strong> Discover yield increase per additional kg fertilizer.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Predictive Tool:</strong> Accurate yield estimate for any planned fertilizer dose.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.21: Linear Regression for Fertilizer vs Yield
import numpy as np
from sklearn.linear_model import LinearRegression

# Fertilizer input (kg per acre) - shaped as 2D column
fertilizer_input_kg = np.array([[60.0], [80.0], [100.0], [120.0], [140.0]])
# Harvested Maize Yield (quintals per acre)
maize_yield_quintals = np.array([28.0, 34.0, 40.0, 45.0, 51.0])

# Fit Linear Regression model
yield_model = LinearRegression()
yield_model.fit(fertilizer_input_kg, maize_yield_quintals)

# Predict yield for 110 kg fertilizer
test_fertilizer = np.array([[110.0]])
predicted_yield = yield_model.predict(test_fertilizer)[0]

print(f"Yield Gain per kg Fertilizer: {yield_model.coef_[0]:.2f} quintals")
print(f"Predicted Maize Yield for 110 kg Fertilizer: {predicted_yield:.1f} quintals")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>test_fertilizer = np.array([[130.0]])</code>. What is the predicted maize harvest for 130 kg fertilizer?</p>
</div>
        """
    }
}

print("Loaded Module 2 Part 1 templates:", len(m2_templates_p1))
