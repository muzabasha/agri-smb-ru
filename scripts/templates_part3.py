topic_enhancements_part3 = {
    "m1-t11": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Agriculture students often face computer crashes when installing complex software.</p>
                <p>Different operating systems create confusing error messages and broken installations.</p>
                <p>Field students need a fast way to run Python without installation headaches.</p>
                <p>Google Colab runs Python in any browser without installing anything locally.</p>
                <p>How do we run our first agricultural Python code in Google Colab?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Student Credentials:</strong> Name, University campus, Target crop.</li>
                            <li><strong>Cloud Session:</strong> Free Google account login.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Cloud Execution:</strong> Google server runs code in memory.</li>
                            <li><strong>String Formatting:</strong> Assemble student greeting string.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Terminal Print:</strong> Verified confirmation message in notebook.</li>
                            <li><strong>Status:</strong> Cloud environment ready for agricultural analytics.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.11: First Agri-Python Script
student_name = "Anil Kumar"
college_name = "UAS Bangalore, GKVK"
target_crop = "Maize"

print(f"Student: {student_name}")
print(f"Campus: {college_name}")
print(f"Research Focus: Precision Management for {target_crop}")
print("System Status: Colab environment successfully verified!")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>student_name</code> and <code>target_crop</code> to your own details. Run the cell and verify your personal output!</p>
</div>
        """
    },

    "m1-t12": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>In a farm storeroom, you record bag counts, fertilizer weights, and crop names.</p>
                <p>Mixing text with numbers causes computer software to crash during operations.</p>
                <p>For example, you cannot multiply the word 'Tomato' by five.</p>
                <p>Python data types keep farm numbers, decimals, text, and switches organized.</p>
                <p>How do we represent different farm values using the correct Python types?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Integer (int):</strong> 14 whole seed bags in storeroom.</li>
                            <li><strong>Float (float):</strong> 45.75 kg of chemical fertilizer remaining.</li>
                            <li><strong>String (str):</strong> 'KMR-301 Ragi' crop variety name.</li>
                            <li><strong>Boolean (bool):</strong> True (irrigation pump is running).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Memory Allocation:</strong> Python assigns optimal memory for each type.</li>
                            <li><strong>Type Safety:</strong> Enforces math only on numeric types.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Stock Status:</strong> Verified inventory readout without type errors.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.12: Farm Storeroom Ledger
seed_bags_count = 14          # Integer (whole number)
fertilizer_kg = 45.75         # Float (decimal number)
crop_variety = "KMR-301 Ragi" # String (text)
irrigation_active = True      # Boolean (True or False)

print(f"Stock: {seed_bags_count} bags of {crop_variety}")
print(f"Fertilizer Remaining: {fertilizer_kg} kg")
print(f"Is pump running right now? {irrigation_active}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>fertilizer_kg = 0.0</code> and <code>irrigation_active = False</code>. What does the updated warehouse status show?</p>
</div>
        """
    },

    "m1-t13": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An automated irrigation motor fills your community farm reservoir.</p>
                <p>The motor must start ONLY when electricity is present in the line.</p>
                <p>However, running the pump while it is raining wastes electricity and over-waters crops.</p>
                <p>Combining multiple farm conditions safely requires comparison and logical operators.</p>
                <p>How do boolean operators protect crops and pumps from damage?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Soil Moisture:</strong> 19.5% volumetric water content.</li>
                            <li><strong>Electricity Line:</strong> True (three-phase voltage present).</li>
                            <li><strong>Rain Sensor:</strong> False (no rainfall currently occurring).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Comparison:</strong> Test if soil moisture is below 22.0%.</li>
                            <li><strong>Logical AND:</strong> Confirm power is True AND rain is NOT True.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Decision Result:</strong> True (Safe to start pump).</li>
                            <li><strong>Hardware Signal:</strong> Send HIGH signal to motor relay.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.13: Irrigation Safety Interlock
soil_moisture = 19.5          # Current moisture percentage
power_available = True        # Three-phase power status
raining_currently = False     # Rain sensor status

# All conditions combined
pump_should_start = (soil_moisture < 22.0) and power_available and (not raining_currently)

print("Moisture critically low?", soil_moisture < 22.0)
print("Power line active?", power_available)
print("Safe from rain?", not raining_currently)
print("---------------------------------------")
print("MOTOR SAFETY DECISION: Turn pump ON?", pump_should_start)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>raining_currently = True</code>. Does the pump still start? Why is rain protection critical?</p>
</div>
        """
    },

    "m1-t14": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A precision polyhouse grows English cucumbers for export supermarkets.</p>
                <p>If heat rises above 35°C, flower blossoms abort and yield plummets.</p>
                <p>If temperatures drop below 15°C, plant cell metabolism stops completely.</p>
                <p>Greenhouses require automatic temperature controls across different heat ranges.</p>
                <p>How do if-elif-else branches automate greenhouse fans, foggers, and heaters?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Canopy Sensor:</strong> Leaf temperature reading (36.2°C).</li>
                            <li><strong>Target Comfort Zone:</strong> 20°C to 28°C for cucumber vines.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Branch 1 (Heat Emergency):</strong> Check if temp > 35.0°C.</li>
                            <li><strong>Branch 2 (Ventilation):</strong> Check if temp > 28.0°C.</li>
                            <li><strong>Branch 3 (Chill Warning):</strong> Check if temp < 15.0°C.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Emergency Command:</strong> Turn on roof foggers and exhaust fans!</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.14: Polyhouse Climate Controller
leaf_temp = 36.2  # Leaf surface temperature in Celsius

if leaf_temp > 35.0:
    climate_action = "HEAT ALERT: Turn on roof foggers and exhaust fans!"
elif leaf_temp > 28.0:
    climate_action = "VENTILATION: Open side curtains for gentle airflow."
elif leaf_temp < 15.0:
    climate_action = "COLD ALERT: Close all vents and activate heat lamps."
else:
    climate_action = "OPTIMAL: Temperature is ideal for cucumber growth."

print(f"Current Leaf Temperature: {leaf_temp}°C")
print("Action Ordered:", climate_action)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>leaf_temp = 12.0</code>. What command does the polyhouse controller order now?</p>
</div>
        """
    },

    "m1-t15": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>You receive laboratory soil test reports for five separate field blocks.</p>
                <p>Writing identical code five separate times wastes time and introduces mistakes.</p>
                <p>You need a fast way to evaluate all soil samples automatically in sequence.</p>
                <p>Loops allow computers to repeat decisions across hundreds of samples effortlessly.</p>
                <p>How do for-loops scan farm datasets and recommend treatments instantly?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Soil Test List:</strong> [6.5, 5.1, 6.8, 4.9, 7.2] pH measurements.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Iteration:</strong> Loop through each pH value in order.</li>
                            <li><strong>Acidity Check:</strong> If pH < 5.5, recommend agricultural lime.</li>
                            <li><strong>Alkalinity Check:</strong> If pH > 7.5, recommend agricultural gypsum.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Field Treatment Plan:</strong> Detailed advisory printed for each plot.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.15: Soil Acidity Batch Scanner
# Soil pH values measured from 5 farm plots
soil_ph_readings = [6.5, 5.1, 6.8, 4.9, 7.2]

print("--- Field Soil Analysis Report ---")
for plot_number, soil_ph in enumerate(soil_ph_readings, start=1):
    if soil_ph < 5.5:
        print(f"Plot {plot_number} (pH {soil_ph}): HIGH ACIDITY - Apply agricultural lime.")
    elif soil_ph > 7.5:
        print(f"Plot {plot_number} (pH {soil_ph}): ALKALINE - Apply gypsum.")
    else:
        print(f"Plot {plot_number} (pH {soil_ph}): OPTIMAL - Healthy soil condition.")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a reading of <code>8.2</code> to <code>soil_ph_readings</code>. What treatment does the loop advise for alkaline soil?</p>
</div>
        """
    },

    "m1-t16": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Every planting season, farmers ask how many bags of urea fertilizer to buy.</p>
                <p>Calculating nutrient needs manually for every acre causes errors and delays.</p>
                <p>Agricultural extension workers need a standard calculation tool to reuse every day.</p>
                <p>Python functions package formulas so anyone can reuse them with one click.</p>
                <p>How do reusable functions calculate farm fertilizer requirements cleanly?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Crop Choice:</strong> 'ragi' (finger millet).</li>
                            <li><strong>Land Area:</strong> 4.0 acres of cultivated field.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Look Up:</strong> Retrieve recommended nitrogen dose (25 kg/acre).</li>
                            <li><strong>Nutrient Conversion:</strong> Divide by 0.46 (urea is 46% nitrogen).</li>
                            <li><strong>Bag Packaging:</strong> Divide total kg by 50 kg bag weight.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Fertilizer Total:</strong> 217.4 kg of urea needed.</li>
                            <li><strong>Bags Required:</strong> 4.3 bags (buy 5 bags from cooperative).</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.16: Fertilizer Requirement Tool
def calculate_urea_bags(crop_name, plot_acres):
    # Recommended nitrogen kg per acre
    nitrogen_dose_per_acre = {
        "ragi": 25.0,
        "maize": 50.0,
        "paddy": 40.0
    }
    
    target_nitrogen = nitrogen_dose_per_acre.get(crop_name.lower(), 30.0)
    # Urea contains exactly 46% nitrogen
    total_urea_kg = (target_nitrogen * plot_acres) / 0.46
    bags_50kg = total_urea_kg / 50.0
    return round(total_urea_kg, 1), round(bags_50kg, 1)

# Run calculation for a farmer
farm_crop = "ragi"
farm_size = 4.0

urea_kg, bags_count = calculate_urea_bags(farm_crop, farm_size)
print(f"Crop: {farm_crop.capitalize()} | Area: {farm_size} acres")
print(f"Total Urea Needed: {urea_kg} kg (~{bags_count} bags of 50kg)")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>farm_crop = "maize"</code> and <code>farm_size = 8.0</code>. How many bags of urea are needed?</p>
</div>
        """
    },

    "m1-t17": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farm supervisor records daily market rates, borewell GPS locations, and soil cards.</p>
                <p>Wholesale prices change daily, but borewell coordinates must never be altered accidentally.</p>
                <p>Storing all these diverse items in simple numbers causes data corruption.</p>
                <p>Python provides lists, tuples, and dictionaries to manage farm datasets safely.</p>
                <p>Which data structure should you choose for different types of farm information?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Market List []:</strong> [1800, 1950, 2100, 2250] onion prices.</li>
                            <li><strong>Borewell Tuple ():</strong> (13.0768, 77.5754) permanent GPS coordinates.</li>
                            <li><strong>Soil Dict {}:</strong> Key-value nutrient card measurements.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Indexing:</strong> Retrieve latest price using list index [-1].</li>
                            <li><strong>Protection:</strong> Ensure tuple coordinates cannot be overwritten.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Market Insight:</strong> Latest onion price is ₹2,250 per quintal.</li>
                            <li><strong>Coordinate Safety:</strong> Borewell location verified on GIS map.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.17: Multi-Structure Farm Record
# 1. List of weekly onion wholesale prices (changes daily)
onion_prices_per_quintal = [1800, 1950, 2100, 2250]

# 2. Tuple of permanent borewell GPS coordinates (never changes)
borewell_gps_location = (13.0768, 77.5754)

# 3. Dictionary of soil nutrient status
soil_test_card = {
    "organic_carbon_pct": 0.45,
    "available_nitrogen": "Low",
    "soil_moisture": 21.5
}

print(f"Latest Onion Price: ₹{onion_prices_per_quintal[-1]} per quintal")
print(f"Borewell Latitude: {borewell_gps_location[0]}, Longitude: {borewell_gps_location[1]}")
print(f"Nitrogen Status: {soil_test_card['available_nitrogen']}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a new price <code>2400</code> to <code>onion_prices_per_quintal</code> using <code>.append(2400)</code>. What does the latest price show?</p>
</div>
        """
    },

    "m1-t18": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An automated field telemetry modem sends sensor updates over cellular SMS.</p>
                <p>The text message arrives filled with extra spaces, colons, and hash symbols.</p>
                <p>Python programs cannot perform math on messy raw strings directly.</p>
                <p>We must clean and parse the text to extract usable numeric sensor values.</p>
                <p>How do string methods clean messy field telemetry data?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Raw SMS:</strong> '   #PLOT:02#MOISTURE:18.5#TEMP:33.0#STATUS:DRY   \\n'.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Clean Whitespace:</strong> Strip leading and trailing empty spaces.</li>
                            <li><strong>Tokenize:</strong> Split raw string by delimiter '#'.</li>
                            <li><strong>Key-Value Parsing:</strong> Split each token by ':' separator.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Clean Data:</strong> PLOT=02, MOISTURE=18.5%, TEMP=33.0°C.</li>
                            <li><strong>Numeric Conversion:</strong> Float values ready for automation rules.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.18: Field SMS Text Cleaner
raw_sms_telemetry = "   #PLOT:02#MOISTURE:18.5#TEMP:33.0#STATUS:DRY   \\n"

# Step 1: Strip extra whitespace
clean_text = raw_sms_telemetry.strip()

# Step 2: Split by delimiter '#'
data_parts = clean_text.split("#")
valid_tokens = [item for item in data_parts if len(item) > 0]

print("Cleaned Tokens:", valid_tokens)

for token in valid_tokens:
    label, val = token.split(":")
    print(f"Field Label: {label:<10} -> Value: {val}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>raw_sms_telemetry = " #PLOT:07#MOISTURE:41.2#STATUS:WET "</code>. Does your cleaner parse the new plot number correctly?</p>
</div>
        """
    },

    "m1-t19": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A weather station records rainfall and moisture numbers every thirty minutes.</p>
                <p>If power cuts off, temporary computer memory loses all measurements instantly.</p>
                <p>Long-term agronomic research requires permanent files saved on hard drives.</p>
                <p>File handling writes farm measurements into permanent CSV text files on disk.</p>
                <p>How do we write and read permanent farm log files in Python?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Field Rain Log:</strong> Monday 14.0 mm, Tuesday 0.0 mm, Wednesday 38.5 mm.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>File Writing:</strong> Write comma-separated lines to disk.</li>
                            <li><strong>File Reading:</strong> Open file in read mode and loop line by line.</li>
                            <li><strong>Summation:</strong> Accumulate total rainfall numbers.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Permanent CSV:</strong> 'weekly_field_rain.csv' stored safely on disk.</li>
                            <li><strong>Report:</strong> Total cumulative rainfall calculated as 52.5 mm.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 1.19: Rainfall Ledger Writer and Reader
csv_filename = "weekly_field_rain.csv"

# Step 1: Write rainfall data to disk
with open(csv_filename, "w") as file_handle:
    file_handle.write("Day,Rainfall_mm,Soil_Moisture\\n")
    file_handle.write("Monday,14.0,28.5\\n")
    file_handle.write("Tuesday,0.0,24.0\\n")
    file_handle.write("Wednesday,38.5,35.0\\n")

# Step 2: Read data back and sum rainfall
total_rainfall_mm = 0.0
with open(csv_filename, "r") as file_handle:
    header = file_handle.readline() # Skip column titles
    for line in file_handle:
        day, rain_str, moisture_str = line.strip().split(",")
        total_rainfall_mm += float(rain_str)

print(f"File '{csv_filename}' successfully created and processed.")
print(f"Total Weekly Rainfall Accumulated: {total_rainfall_mm:.1f} mm")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add <code>file_handle.write("Thursday,22.0,31.0\\n")</code> to Step 1. Run the script again. What is the updated total rainfall?</p>
</div>
        """
    }
}

print("Loaded Part 3 templates:", len(topic_enhancements_part3))
