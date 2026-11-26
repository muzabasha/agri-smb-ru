# Module 2 Templates: Part 2 (matching module2-handouts-part2.js)
# Topics: m2-t3, m2-t4, m2-t7, m2-t8, m2-t9, m2-t10, m2-t12, m2-t13

m2_templates_p2 = {
    "m2-t3": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>You have five experimental plots with four soil sensor stations each.</p>
                <p>All twenty sensors have a 2.5% calibration offset error that must be subtracted.</p>
                <p>Writing nested loops to adjust each reading takes too many lines of code.</p>
                <p>NumPy broadcasting automatically stretches single offset numbers across entire matrices.</p>
                <p>How does broadcasting calibrate multi-zone sensor grids in a single step?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Raw Grid:</strong> 5x4 matrix of raw soil sensor readings.</li>
                            <li><strong>Offset Scalar:</strong> 2.5% sensor drift error.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Broadcasting:</strong> Subtract 2.5 from every cell simultaneously.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Calibrated Grid:</strong> Accurate 5x4 matrix ready for analysis.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.3: NumPy Broadcasting for Sensor Calibration
import numpy as np

# 3 plots with 4 sensors each (raw moisture readings)
raw_sensor_grid = np.array([
    [24.5, 26.0, 22.8, 25.1],
    [19.0, 18.5, 21.2, 20.0],
    [28.2, 27.5, 29.0, 26.8]
])

# Hardware drift offset to subtract from all sensors
calibration_drift = 2.5

# Broadcasting subtracts scalar from every grid cell instantly
calibrated_grid = raw_sensor_grid - calibration_drift

print("Raw Sensor Grid (Plot x Sensors):\\n", raw_sensor_grid)
print("\\nCalibrated Grid (Offset Removed):\\n", np.round(calibrated_grid, 1))
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>calibration_drift = 1.0</code>. Observe how broadcasting instantly re-adjusts all twelve sensor readings!</p>
</div>
        """
    },

    "m2-t4": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A weather station records hourly solar radiation numbers across thirty days.</p>
                <p>Farmers need quick summary metrics: median sunlight, peak heat, and total light.</p>
                <p>Computing these statistics manually for 720 hours wastes valuable time.</p>
                <p>NumPy statistical functions compute medians, standard deviations, and percentiles in milliseconds.</p>
                <p>How do fast statistical functions help agronomists analyze microclimate trends?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Daily Sunshine:</strong> Array of daily solar radiation totals (MJ/m²).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>np.mean & np.median:</strong> Measure central solar tendency.</li>
                            <li><strong>np.percentile:</strong> Check 90th percentile peak heat days.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Solar Profile:</strong> Complete statistical summary of growing conditions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.4: NumPy Statistical Functions for Solar Radiation
import numpy as np

# 10 days of solar radiation (MegaJoules per sq. meter)
solar_radiation_mj = np.array([16.5, 18.2, 12.0, 22.4, 21.0, 19.5, 14.2, 23.1, 20.0, 17.8])

mean_solar = np.mean(solar_radiation_mj)
median_solar = np.median(solar_radiation_mj)
std_solar = np.std(solar_radiation_mj)
peak_solar = np.max(solar_radiation_mj)

print(f"Average Daily Sunlight: {mean_solar:.1f} MJ/m²")
print(f"Median Daily Sunlight:  {median_solar:.1f} MJ/m²")
print(f"Sunlight Variability:   {std_solar:.2f} MJ/m²")
print(f"Peak Sunshine Recorded: {peak_solar:.1f} MJ/m²")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Replace the rainy day reading of <code>12.0</code> with <code>24.5</code>. How do the average and peak values change?</p>
</div>
        """
    },

    "m2-t7": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A sugar mill receives sugarcane truckloads from three hundred contract farmers.</p>
                <p>Managers must quickly find correlations between irrigation frequency and sucrose percentage.</p>
                <p>Raw text sheets fail to show which irrigation schedule yields sweet cane.</p>
                <p>Pandas combined with visualization reveals hidden relationships between farm inputs and crop quality.</p>
                <p>How does exploratory data analysis uncover profitable agronomic insights?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Farm Table:</strong> Irrigations count, Cane weight, Sucrose %.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Correlation:</strong> Compute correlation between water and sucrose.</li>
                            <li><strong>Ranking:</strong> Sort highest sugar concentration plots.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Advisory:</strong> Farmers watering every 10 days achieve top sucrose.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.7: Cane Quality Exploratory Analysis
import pandas as pd

sugarcane_data = {
    'Plot_ID': ['Plot_1', 'Plot_2', 'Plot_3', 'Plot_4'],
    'Irrigations_Count': [12, 18, 15, 22],
    'Yield_Tons_Per_Acre': [42.0, 58.0, 50.0, 54.0],
    'Sucrose_Pct': [11.2, 13.8, 12.5, 11.9]
}

df_cane = pd.DataFrame(sugarcane_data)
# Summary correlation
corr_water_yield = df_cane['Irrigations_Count'].corr(df_cane['Yield_Tons_Per_Acre'])

print("Sugarcane Dataset:\\n", df_cane)
print(f"\\nCorrelation between water and yield: {corr_water_yield:.2f}")
print("Insight: Higher irrigation strongly correlates with increased cane tonnage.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Compute correlation between <code>'Irrigations_Count'</code> and <code>'Sucrose_Pct'</code>. Does excessive irrigation always increase sweetness?</p>
</div>
        """
    },

    "m2-t8": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An organic certification inspector audits a farm database with a thousand field beds.</p>
                <p>The inspector must find beds where soil pH is dangerously acidic (below 5.5).</p>
                <p>Scanning thousands of rows by eye is slow and guarantees missed violations.</p>
                <p>Pandas boolean filtering selects all qualifying farm rows in one line of code.</p>
                <p>How does boolean indexing filter agricultural data tables instantly?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Field Data:</strong> Bed ID, Crop, Soil pH, Organic Carbon %.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Filter Condition:</strong> Soil pH < 5.5 AND Organic Carbon < 0.5%.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Action List:</strong> Flagged field beds requiring agricultural lime and compost.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.8: Boolean Filtering on Soil Health Records
import pandas as pd

soil_records = pd.DataFrame({
    'Bed_ID': ['B1', 'B2', 'B3', 'B4', 'B5'],
    'Crop': ['Ragi', 'Maize', 'Groundnut', 'Ragi', 'Sunflower'],
    'Soil_pH': [6.2, 5.1, 6.8, 4.8, 7.0],
    'Organic_Carbon_Pct': [0.65, 0.42, 0.70, 0.38, 0.55]
})

# Filter beds needing lime treatment (pH < 5.5)
acidic_beds = soil_records[soil_records['Soil_pH'] < 5.5]

print("--- Beds Requiring Immediate Lime Treatment ---")
print(acidic_beds[['Bed_ID', 'Crop', 'Soil_pH']])
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change the filter to find low carbon beds: <code>soil_records[soil_records['Organic_Carbon_Pct'] < 0.5]</code>. Which beds need compost?</p>
</div>
        """
    },

    "m2-t9": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A wireless soil telemetry network drops battery power during night hours.</p>
                <p>Several hourly moisture records appear as blank missing values (NaN) in the morning.</p>
                <p>Feeding missing values into machine learning algorithms causes programs to crash.</p>
                <p>Pandas provides methods to detect, drop, or intelligently impute missing farm numbers.</p>
                <p>How do we handle missing sensor readings without losing valuable farm history?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Telemetry Stream:</strong> [22.0, NaN, 21.5, NaN, 20.8] percent moisture.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Detection:</strong> Locate missing values using .isna().</li>
                            <li><strong>Imputation:</strong> Forward-fill (.ffill) or substitute mean value.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Complete Dataset:</strong> Gap-free sensor table ready for analytics.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.9: Handling Missing Sensor Data
import pandas as pd
import numpy as np

sensor_log = pd.DataFrame({
    'Hour': ['08:00', '09:00', '10:00', '11:00', '12:00'],
    'Soil_Moisture_Pct': [24.0, np.nan, 23.5, np.nan, 21.0]
})

print("Raw Sensor Log with Missing Gaps:\\n", sensor_log)

# Impute missing moisture using forward-fill (use previous valid reading)
clean_log = sensor_log.copy()
clean_log['Soil_Moisture_Pct'] = clean_log['Soil_Moisture_Pct'].ffill()

print("\\nCleaned Sensor Log (Forward-Filled):\\n", clean_log)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Replace <code>.ffill()</code> with <code>.fillna(clean_log['Soil_Moisture_Pct'].mean())</code>. How does mean imputation handle missing data?</p>
</div>
        """
    },

    "m2-t10": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer cooperative collects crop yield figures from four distinct districts.</p>
                <p>The director needs average ragi yield and average maize yield per district.</p>
                <p>Writing separate loops for each combination of crop and district takes hours.</p>
                <p>Pandas .groupby() splits data by categories and aggregates statistics in seconds.</p>
                <p>How does grouping simplify multi-crop regional yield comparisons?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>District Records:</strong> District, Crop, Yield_Quintals.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Group by Crop:</strong> Split records into Ragi and Maize subsets.</li>
                            <li><strong>Compute Mean:</strong> Calculate average yield for each crop group.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Regional Report:</strong> Clean summary table comparing crop performance.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.10: Aggregating Farm Harvests with GroupBy
import pandas as pd

district_harvests = pd.DataFrame({
    'District': ['Mandya', 'Mandya', 'Kolar', 'Kolar', 'Tumkur', 'Tumkur'],
    'Crop': ['Ragi', 'Paddy', 'Ragi', 'Tomato', 'Ragi', 'Groundnut'],
    'Yield_Quintals_Acre': [14.5, 32.0, 12.0, 85.0, 13.8, 8.5]
})

# Calculate average yield by crop across all districts
crop_summary = district_harvests.groupby('Crop')['Yield_Quintals_Acre'].agg(['mean', 'max', 'count'])

print("--- Crop Performance Summary ---")
print(crop_summary)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Group by <code>'District'</code> instead of <code>'Crop'</code>: <code>district_harvests.groupby('District')['Yield_Quintals_Acre'].mean()</code>. Which district has the highest average harvest?</p>
</div>
        """
    },

    "m2-t12": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agronomy student wants to compare yield distributions across four fertilizer treatments.</p>
                <p>Simple bar charts only show averages and hide whether some plants failed completely.</p>
                <p>Researchers need to see minimums, maximums, and outlier plants at a single glance.</p>
                <p>Box plots and histograms display full statistical spreads and reveal crop variability.</p>
                <p>How do advanced chart types expose hidden variations in agricultural trials?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Trial Data:</strong> Yields from Control, Organic, and Chemical plots.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Distribution Charting:</strong> Generate box plots showing medians and quartiles.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Visual Distribution:</strong> Clear comparison of treatment consistency.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.12: Advanced Box Plot for Field Trial Yields
import matplotlib.pyplot as plt

# Harvest yields from 3 treatments (kg per plot)
control_yields = [12.0, 13.5, 11.8, 12.2, 14.0]
organic_yields = [15.2, 16.0, 15.8, 14.9, 16.5]
chemical_yields = [18.5, 19.2, 17.8, 22.0, 14.5]

plt.figure(figsize=(7, 4.5))
plt.boxplot([control_yields, organic_yields, chemical_yields], 
            labels=['Control', 'Organic Bio', 'Chemical NPK'])

plt.title("Yield Spread by Treatment - GKVK Research Trial", fontsize=11)
plt.ylabel("Plot Yield (kg)", fontsize=9)
plt.grid(True, linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add an outlier value of <code>28.0</code> to <code>organic_yields</code>. Re-run the plot to see how the box plot visually highlights outliers!</p>
</div>
        """
    },

    "m2-t13": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A soil testing laboratory measures eight different chemical properties across fifty plots.</p>
                <p>Creating individual graphs for every pair of nutrients takes dozens of lines of code.</p>
                <p>Researchers need to see how all nutrients correlate with crop yield at once.</p>
                <p>Seaborn heatmaps display full multi-nutrient correlation grids using intuitive color shades.</p>
                <p>How do statistical correlation heatmaps guide balanced soil fertilization plans?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Soil Nutrient Matrix:</strong> Nitrogen, Phosphorus, Potassium, Yield.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Correlation Matrix:</strong> Compute pairwise Pearson correlations.</li>
                            <li><strong>Color Heatmap:</strong> Map correlation strengths to green-to-red color gradients.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Correlation Heatmap:</strong> Visual matrix highlighting key yield drivers.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.13: Seaborn Correlation Heatmap for Soil Nutrients
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

soil_study = pd.DataFrame({
    'Nitrogen_ppm': [120, 145, 90, 160, 110],
    'Phosphorus_ppm': [35, 42, 28, 48, 30],
    'Potassium_ppm': [180, 210, 160, 240, 190],
    'Grain_Yield_Quintals': [38.0, 46.5, 29.0, 51.0, 36.0]
})

plt.figure(figsize=(6, 4.5))
sns.heatmap(soil_study.corr(), annot=True, cmap='YlGnBu', fmt=".2f", linewidths=0.5)
plt.title("Soil Nutrients vs Grain Yield Correlation", fontsize=11)
plt.tight_layout()
plt.show()
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Which soil nutrient shows the highest positive correlation with Grain_Yield_Quintals? Look at the numbers inside the heatmap!</p>
</div>
        """
    }
}

print("Loaded Module 2 Part 2 templates:", len(m2_templates_p2))
