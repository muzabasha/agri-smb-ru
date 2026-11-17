// Module 1 Comprehensive Handouts - Part 3 (m1-t11 to m1-t19)
// Python Programming Topics

const module1HandoutsPart3 = {
    'm1-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Python Environment Setup</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Set up Google Colab for Python programming</li>
                    <li>Understand notebook interface and cells</li>
                    <li>Write and execute your first Python code</li>
                    <li>Save and share notebooks</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Python Setup = Preparing Your Land Before Sowing</strong></p>
                    <p>Before planting, you prepare the soil. Similarly, before coding, we prepare our environment. Google Colab is like a ready-to-use greenhouse - no installation needed!</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Setting Up Google Colab</h2>
                
                <h3>Step 1: Access Colab</h3>
                <ol>
                    <li>Open browser and go to <code>colab.research.google.com</code></li>
                    <li>Sign in with your Google account</li>
                    <li>Click "New Notebook"</li>
                </ol>

                <h3>Step 2: Understanding the Interface</h3>
                <ul>
                    <li><strong>Code Cells:</strong> Where you write Python code</li>
                    <li><strong>Text Cells:</strong> For notes and documentation</li>
                    <li><strong>Run Button (▶):</strong> Executes the cell</li>
                    <li><strong>Shift+Enter:</strong> Run cell and move to next</li>
                </ul>

                <h3>Step 3: Your First Code</h3>
                <pre><code class="language-python">
# This is a comment - Python ignores it
print("Hello, Smart Farming!")

# Simple calculation
hectares = 5
yield_per_hectare = 2500
total_yield = hectares * yield_per_hectare
print(f"Total expected yield: {total_yield} kg")
                </code></pre>
            </div>

            <div class="code-section">
                <h2>💻 Practice Code</h2>
                <pre><code class="language-python">
# === WELCOME TO PYTHON FOR AGRICULTURE ===

# Print a welcome message
print("🌾 Welcome to Agricultural AI!")
print("=" * 40)

# Basic farm calculation
farm_name = "Green Valley Farm"
area_hectares = 10
crop = "Wheat"

print(f"Farm: {farm_name}")
print(f"Area: {area_hectares} hectares")
print(f"Crop: {crop}")

# Simple yield estimation
expected_yield = area_hectares * 3000  # 3000 kg/ha
print(f"Expected Yield: {expected_yield} kg")

# Check if Colab is working
import sys
print(f"\\n✅ Python version: {sys.version[:5]}")
print("🚀 Your environment is ready!")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Colab Cloud Runtime & GPU Provisioning Demonstration</h3>
                            <p><strong>Educator Action:</strong> The teacher projects Google Colab and leads an end-to-end interactive setup walkthrough for agricultural data science:</p>
                            <ul>
                                <li>Demonstrates selecting and connecting to a free cloud T4 GPU hardware accelerator (Edit &rarr; Notebook settings &rarr; T4 GPU).</li>
                                <li>Executes system diagnostic commands: <code>!nvidia-smi</code>, <code>!cat /etc/os-release</code>, and verifies Python scientific libraries (<code>numpy</code>, <code>pandas</code>, <code>scikit-learn</code>).</li>
                                <li>Intentionally triggers and recovers from common beginner pitfalls: infinite loop cell interruption, runtime restarts, and cell execution order errors.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live cloud runtime audit log displayed on screen verifying Python 3.10+ and GPU accelerator connectivity.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Collaborative Cloud Notebook Troubleshooting & Workflow Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in establishing robust rural cloud coding workflows:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we code on Google Colab when field internet is patchy, high-resolution drone imagery is stored in Google Drive, and team members use different laptops?</li>
                                <li><strong>Collaborative Implementation:</strong> Faculty and student cohorts code persistent Google Drive mounting via <code>from google.colab import drive; drive.mount('/content/drive')</code>, configure git version control, and set up automatic notebook backup routines.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An official "Agri-Data Science Colab Standard Operating Procedure (SOP)" checklist co-signed by faculty and students.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Peer-to-Peer Pair Programming & Notebook Sharing Challenge</h3>
                            <p><strong>Team Syndicate:</strong> Student pairs establish a reciprocal cloud pair-programming workflow:</p>
                            <ul>
                                <li>Student A creates a notebook calculating farm acreage and seed rate, intentionally embeds a hidden syntax error, and shares access with Student B.</li>
                                <li>Student B clones the notebook, diagnoses the error, adds descriptive markdown documentation explaining the fix, and uses Colab comments to document the code review.</li>
                                <li>Partners reverse roles for a fertilizer calculation snippet, testing collaboration and revision tracking.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaboratively debugged and documented shared Colab notebook with reciprocal peer code review comments.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build & Personalize Your Master Agricultural Notebook</h3>
                            <p><strong>Hands-on Coding Task:</strong> Open Google Colab and build your personalized master development environment:</p>
                            <ul>
                                <li>Create a new notebook titled <code>GKVK_AgriAI_Master_Lab.ipynb</code>.</li>
                                <li>Create structured Markdown sections for all Unit 1 topics with custom farm badges and table of contents.</li>
                                <li>Write and run a Python cell verifying RAM, disk space, and key library versions (<code>numpy</code>, <code>pandas</code>, <code>matplotlib</code>).</li>
                                <li>Add an interactive farm header function that prints your custom farm name, location, and date banner.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An initialized, fully executable master Colab notebook with verified cloud environment status.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What keyboard shortcut runs a cell in Colab?</p>
                    <ul>
                        <li>A) Ctrl+C</li>
                        <li>B) Shift+Enter</li>
                        <li>C) Alt+R</li>
                        <li>D) Ctrl+S</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Shift+Enter runs the current cell and moves to the next one.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does the # symbol do in Python?</p>
                    <ul>
                        <li>A) Multiplies numbers</li>
                        <li>B) Creates a comment (ignored by Python)</li>
                        <li>C) Prints output</li>
                        <li>D) Saves the file</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - # starts a comment, which Python ignores. Use comments to explain your code!</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Google Colab is a free, browser-based Python environment</li>
                    <li>No installation required - works on any device</li>
                    <li>Notebooks combine code, text, and output</li>
                    <li>Use Shift+Enter to run cells</li>
                    <li>Start every project by testing your environment</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Variables and Data Types</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create and use variables in Python</li>
                    <li>Work with different data types: int, float, string, bool</li>
                    <li>Convert between data types</li>
                    <li>Apply proper variable naming conventions</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Variables = Labeled Storage Containers</strong></p>
                    <p>Just as farmers use labeled containers for seeds, fertilizer, and harvest:</p>
                    <ul>
                        <li>📦 <code>wheat_seeds = 100</code> (container labeled "wheat_seeds" holding 100)</li>
                        <li>📦 <code>farm_name = "Green Farm"</code> (container holding a name)</li>
                        <li>📦 <code>is_organic = True</code> (container holding yes/no)</li>
                    </ul>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Data Types in Python</h2>
                
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Farm Example</th>
                    </tr>
                    <tr>
                        <td><code>int</code></td>
                        <td>Whole numbers</td>
                        <td><code>num_plots = 5</code></td>
                    </tr>
                    <tr>
                        <td><code>float</code></td>
                        <td>Decimal numbers</td>
                        <td><code>soil_ph = 6.5</code></td>
                    </tr>
                    <tr>
                        <td><code>str</code></td>
                        <td>Text (strings)</td>
                        <td><code>crop = "Rice"</code></td>
                    </tr>
                    <tr>
                        <td><code>bool</code></td>
                        <td>True/False</td>
                        <td><code>needs_water = True</code></td>
                    </tr>
                </table>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === VARIABLES AND DATA TYPES ===

# Integer (whole numbers)
num_hectares = 10
num_workers = 5
seeds_per_hectare = 25000

print(f"Total seeds needed: {num_hectares * seeds_per_hectare}")

# Float (decimal numbers)
soil_ph = 6.5
moisture_percent = 45.7
yield_per_hectare = 2750.5

print(f"Soil pH: {soil_ph}")

# String (text)
farm_name = "Sunrise Agricultural Farm"
crop_type = 'Wheat'  # Single or double quotes work
location = "Karnataka, India"

print(f"Welcome to {farm_name}!")

# Boolean (True/False)
is_irrigated = True
needs_fertilizer = False
is_harvest_ready = True

print(f"Irrigation available: {is_irrigated}")

# Checking data types
print("\\n=== Data Types ===")
print(f"num_hectares is: {type(num_hectares)}")
print(f"soil_ph is: {type(soil_ph)}")
print(f"farm_name is: {type(farm_name)}")
print(f"is_irrigated is: {type(is_irrigated)}")

# Type Conversion
rainfall_str = "125"  # This is text!
rainfall_int = int(rainfall_str)  # Convert to number
print(f"\\nRainfall: {rainfall_int + 10} mm (added 10)")

# Variable naming rules
crop_yield_2024 = 3000  # ✅ Good - descriptive, uses underscore
_private_data = 100     # ✅ OK - starts with underscore
# 2024_yield = 500      # ❌ Error - can't start with number
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Type-Inference & Silent Data Corruption Demonstration</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates live in Colab why understanding data types is a matter of agricultural life and death:</p>
                            <ul>
                                <li>Shows string concatenation disaster: adding harvest yields received as text <code>"2500" + "350"</code> results in <code>"2500350"</code> kg instead of <code>2850</code> kg.</li>
                                <li>Demonstrates floating-point precision traps in soil salinity: <code>0.1 + 0.2 == 0.3</code> evaluates to <code>False</code> due to binary floating-point representation.</li>
                                <li>Live-codes explicit casting patterns: safely converting incoming SMS text strings (<code>"45.8"</code>) to numeric floats with error catching.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive demonstration script highlighting data type coercion pitfalls and safe type-casting patterns.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Standardized Agricultural Variable Naming & Ontology Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in establishing an industry-standard PEP-8 variable naming ontology for a precision smart farm:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we systematically name 50 variables across 10 plots (e.g., soil moisture at 15cm depth in Plot 3 vs ambient canopy temperature in Greenhouse 2)?</li>
                                <li><strong>Collaborative Work:</strong> Student groups debate naming conventions (e.g., <code>plot03_soil_moisture_15cm_pct</code> vs cryptic <code>sm3</code>), enforcing self-documenting code, snake_case standards, and explicit unit suffixes.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-created Agri-Python Variable Naming Styleguide endorsed by faculty for all lab projects.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Farm Record Data-Type Audit & Schema Validation</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive an unformatted, mixed-type agricultural registry containing 12 raw data points:</p>
                            <ul>
                                <li>Farmer Aadhaar/ID, farm area, crop variety, organic status, soil test pH, historical harvest yields, and irrigation valve state.</li>
                                <li>Teams classify each field into its ideal primitive type (<code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>).</li>
                                <li>Write validation functions to verify types (e.g., assert that <code>0.0 &lt;= soil_ph &lt;= 14.0</code> and <code>isinstance(has_drip, bool)</code>).</li>
                                <li>Exchange schemas with a peer team for adversarial testing with intentionally corrupted data inputs.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative data-type validation script and peer audit report verifying 100% schema compliance.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Comprehensive Digital Farm Profile in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an executable Python farm profile modeling a real or simulated Karnataka holding:</p>
                            <ul>
                                <li>Declare at least 10 strongly typed variables covering integers (<code>num_plots</code>, <code>laborers_employed</code>), floats (<code>soil_ph</code>, <code>annual_rainfall_mm</code>, <code>hectares</code>), strings (<code>farm_name</code>, <code>crop_variety</code>, <code>taluk_location</code>), and booleans (<code>has_borewell</code>, <code>is_organic_certified</code>).</li>
                                <li>Perform type conversions (e.g., convert string <code>"18.5"</code> to float and back to string).</li>
                                <li>Print a formatted Farm Executive Summary Dashboard using f-strings with aligned columns and unit symbols.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook containing variable declarations, type checking calls (<code>type()</code>), and the formatted dashboard output.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the type of: <code>temperature = 32.5</code>?</p>
                    <ul>
                        <li>A) int</li>
                        <li>B) float</li>
                        <li>C) str</li>
                        <li>D) bool</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 32.5 has a decimal point, making it a float.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> Which variable name is INVALID in Python?</p>
                    <ul>
                        <li>A) crop_yield</li>
                        <li>B) _temp</li>
                        <li>C) 2024_harvest</li>
                        <li>D) soilPH</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Variable names cannot start with a number.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3:</strong> What does <code>int("50")</code> return?</p>
                    <ul>
                        <li>A) "50"</li>
                        <li>B) 50</li>
                        <li>C) Error</li>
                        <li>D) 50.0</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - int() converts the string "50" to the integer 50.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Variables store data with meaningful names</li>
                    <li>Python has 4 basic types: int, float, str, bool</li>
                    <li>Use <code>type()</code> to check a variable's type</li>
                    <li>Convert types with <code>int()</code>, <code>float()</code>, <code>str()</code></li>
                    <li>Use descriptive, lowercase names with underscores</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Operators and Expressions</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use arithmetic operators for farm calculations</li>
                    <li>Apply comparison operators for decision-making</li>
                    <li>Combine conditions with logical operators</li>
                    <li>Build complex expressions for agricultural analysis</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Operators = Farm Calculation Tools</strong></p>
                    <ul>
                        <li>➕ Addition: Total yield from all plots</li>
                        <li>➖ Subtraction: Profit after costs</li>
                        <li>✖️ Multiplication: Seeds needed per hectare × hectares</li>
                        <li>➗ Division: Average yield per plot</li>
                        <li>⚖️ Comparison: Is yield > target?</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === OPERATORS IN PYTHON ===

# 1. ARITHMETIC OPERATORS
print("=== Arithmetic Operators ===")
hectares = 10
yield_per_ha = 2500
price_per_kg = 25

total_yield = hectares * yield_per_ha        # Multiplication
print(f"Total yield: {total_yield} kg")

revenue = total_yield * price_per_kg          # Revenue
costs = 150000                                # Costs
profit = revenue - costs                      # Subtraction
print(f"Profit: ₹{profit}")

avg_yield = total_yield / hectares            # Division
print(f"Average yield: {avg_yield} kg/ha")

remainder = total_yield % 3                   # Modulo (remainder)
power = 2 ** 10                               # Exponentiation
print(f"2^10 = {power}")

# 2. COMPARISON OPERATORS
print("\\n=== Comparison Operators ===")
target_yield = 25000
actual_yield = 27000

print(f"Exceeded target? {actual_yield > target_yield}")   # True
print(f"Met target exactly? {actual_yield == target_yield}")  # False
print(f"Below target? {actual_yield < target_yield}")      # False
print(f"At least target? {actual_yield >= target_yield}")  # True

# 3. LOGICAL OPERATORS
print("\\n=== Logical Operators ===")
soil_ph = 6.5
moisture = 45
temperature = 28

# Combine conditions with AND, OR, NOT
good_soil = (6.0 <= soil_ph <= 7.0)           # pH in range
good_moisture = (40 <= moisture <= 60)         # Moisture in range
good_conditions = good_soil and good_moisture  # Both must be true

print(f"Good soil pH: {good_soil}")
print(f"Good moisture: {good_moisture}")
print(f"Overall good conditions: {good_conditions}")

# OR - at least one must be true
needs_attention = (moisture < 30) or (temperature > 40)
print(f"Needs attention: {needs_attention}")

# NOT - inverts the condition
is_not_ready = not good_conditions
print(f"Not ready for planting: {is_not_ready}")

# 4. PRACTICAL FARM CALCULATION
print("\\n=== Farm Profitability Calculator ===")
area = 5  # hectares
yield_rate = 3000  # kg/ha
market_price = 30  # ₹/kg
input_cost = 40000  # ₹/hectare

total_revenue = area * yield_rate * market_price
total_cost = area * input_cost
net_profit = total_revenue - total_cost
profit_margin = (net_profit / total_revenue) * 100

print(f"Revenue: ₹{total_revenue:,}")
print(f"Costs: ₹{total_cost:,}")
print(f"Net Profit: ₹{net_profit:,}")
print(f"Profit Margin: {profit_margin:.1f}%")
print(f"Profitable? {net_profit > 0}")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Multi-Condition Agricultural Logic Gate Walkthrough</h3>
                            <p><strong>Educator Action:</strong> The instructor live-codes an interactive automated irrigation and frost alert gate in Colab combining Arithmetic, Comparison, and Logical operators:</p>
                            <ul>
                                <li>Demonstrates operator precedence subtleties: why <code>temp &lt; 4 or moisture &lt; 20 and not is_raining</code> evaluates differently than <code>(temp &lt; 4 or moisture &lt; 20) and not is_raining</code>.</li>
                                <li>Uses floor division <code>//</code> and modulo <code>%</code> to calculate grain bag pallet loading (e.g., 2,750 kg grain = 55 full 50kg bags and 0 kg remainder).</li>
                                <li>Shows real-time boolean evaluation of compound agro-climatic conditions on the classroom display.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live boolean truth table analysis and precedence verification script executed on the classroom screen.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agri-Economic Profit & Subsidy Optimization Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty and student cohorts co-design a mathematical profit equation for smallholder horticulture:</p>
                            <ul>
                                <li><strong>Equation Co-Design:</strong> $\text{Net Profit} = (\text{Hectares} \times \text{Yield} \times \text{Mandi Price}) - (\text{Seed Cost} + \text{Fertilizer} + \text{Irrigation} + \text{Labor}) + \text{Government Subsidy}$.</li>
                                <li><strong>Faculty Challenge:</strong> Add compound boolean expressions for state electricity rules: electricity is free during night hours (10 PM&ndash;6 AM) but billed at ₹4.50/kWh during daytime, with a surcharge if peak load exceeds 15 HP.</li>
                                <li>Teams write and verify algebraic expressions calculating net savings for automated night irrigation.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An economic optimization algorithm verified by faculty with calculated break-even yields.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Fertilizer Formulation & Bag Math Challenge</h3>
                            <p><strong>Team Syndicate:</strong> Student teams calculate commercial fertilizer bag requirements for a 4.5-hectare maize field with soil test deficits of: 135 kg N, 65 kg P, and 50 kg K per hectare.</p>
                            <ul>
                                <li>Commercial fertilizers available: Urea (46% N), DAP (18% N, 46% P_2O_5), and MOP (60% K_2O), sold exclusively in 50 kg bags.</li>
                                <li>Teams use arithmetic and floor division operators (<code>/</code>, <code>//</code>, <code>%</code>) to calculate exact full bags needed and leftover surplus.</li>
                                <li>Write comparison and logical operators checking: <code>(total_cost &lt;= budget) and (p_supplied &gt;= p_required)</code>.</li>
                                <li>Swap calculations with a peer group to audit mathematical accuracy and budget constraints.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A fertilizer requirement report with verified operator expressions and peer validation signatures.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build an Automated Pesticide Spray Window Evaluator</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone Python program that evaluates spraying safety based on 5 environmental readings:</p>
                            <ul>
                                <li>Variables: <code>wind_speed_kmh</code> (safe: 5&ndash;15), <code>temperature_c</code> (safe: 15&ndash;30), <code>humidity_pct</code> (safe: 40&ndash;75), <code>rain_forecast_next_4h</code> (must be <code>False</code>), and <code>pollinator_peak_hours</code> (must be <code>False</code>).</li>
                                <li>Combine these with logical operators to compute boolean flags: <code>drift_risk</code>, <code>washoff_risk</code>, <code>pollinator_risk</code>, and <code>is_spray_window_safe</code>.</li>
                                <li>Test the script across 4 weather scenarios and print clear formatted authorization banners.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A self-tested Python notebook evaluating all boolean conditions and printing formatted safety clearance reports.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the result of <code>15 % 4</code>?</p>
                    <ul>
                        <li>A) 3.75</li>
                        <li>B) 3</li>
                        <li>C) 4</li>
                        <li>D) 1</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 15 ÷ 4 = 3 remainder 3. The % operator returns the remainder.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does <code>True and False</code> evaluate to?</p>
                    <ul>
                        <li>A) True</li>
                        <li>B) False</li>
                        <li>C) Error</li>
                        <li>D) None</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - AND requires both sides to be True. Since one is False, the result is False.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Arithmetic: +, -, *, /, //, %, **</li>
                    <li>Comparison: ==, !=, <, >, <=, >= (return True/False)</li>
                    <li>Logical: and, or, not (combine conditions)</li>
                    <li>Operators are the building blocks of all calculations</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Control Structures (If-Else)</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Write if statements for simple decisions</li>
                    <li>Use if-else for two-way decisions</li>
                    <li>Chain conditions with elif</li>
                    <li>Create nested conditionals for complex logic</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>If-Else = Daily Farming Decisions</strong></p>
                    <p>Every day, farmers make decisions:</p>
                    <ul>
                        <li>IF rain is expected → DON'T irrigate</li>
                        <li>IF soil is dry → irrigate NOW</li>
                        <li>IF pest detected → apply treatment</li>
                        <li>ELSE → continue regular activities</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === CONTROL STRUCTURES: IF-ELSE ===

# 1. Simple IF statement
print("=== Simple IF ===")
soil_moisture = 25  # percentage

if soil_moisture < 30:
    print("⚠️ Soil is dry! Irrigation needed.")

# 2. IF-ELSE (two options)
print("\\n=== IF-ELSE ===")
temperature = 38

if temperature > 35:
    print("🔥 High temperature alert!")
    print("   Consider shade nets for sensitive crops.")
else:
    print("✅ Temperature is normal.")

# 3. IF-ELIF-ELSE (multiple options)
print("\\n=== IF-ELIF-ELSE ===")
soil_ph = 5.5

if soil_ph < 5.5:
    print("⚠️ Soil is too acidic")
    print("   Recommendation: Add lime")
elif soil_ph > 7.5:
    print("⚠️ Soil is too alkaline")
    print("   Recommendation: Add sulfur")
else:
    print("✅ Soil pH is in optimal range (5.5-7.5)")

# 4. Crop Recommendation System
print("\\n=== Crop Recommendation System ===")
rainfall = 150  # mm average
soil_type = "loamy"

if rainfall > 200 and soil_type == "clay":
    crop = "Rice"
elif rainfall > 100 and soil_type in ["loamy", "sandy loam"]:
    crop = "Wheat"
elif rainfall < 80:
    crop = "Millet (drought resistant)"
else:
    crop = "Mixed vegetables"

print(f"Recommended crop: {crop}")

# 5. Nested IF (decisions within decisions)
print("\\n=== Irrigation Decision System ===")
moisture = 35
rain_forecast = True
last_irrigation_days = 3

if moisture < 40:
    if rain_forecast:
        print("💧 Moisture low, but rain expected")
        print("   Action: Wait for rain")
    else:
        if last_irrigation_days > 2:
            print("💧 Irrigate now!")
        else:
            print("💧 Check again tomorrow")
else:
    print("✅ Moisture adequate, no irrigation needed")

# 6. Grade Crop Quality
print("\\n=== Crop Quality Grading ===")
weight = 85  # grams per fruit
blemishes = 0
color_score = 9  # out of 10

if weight >= 80 and blemishes == 0 and color_score >= 8:
    grade = "A (Premium)"
elif weight >= 60 and blemishes <= 2 and color_score >= 6:
    grade = "B (Standard)"
elif weight >= 40:
    grade = "C (Processing)"
else:
    grade = "Reject"

print(f"Crop Grade: {grade}")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Multi-Stage Autonomous Greenhouse Controller</h3>
                            <p><strong>Educator Action:</strong> The teacher live-codes a complete greenhouse environment controller in Google Colab using multi-branch <code>if-elif-else</code> logic:</p>
                            <ul>
                                <li>The instructor inputs live streaming parameters (temperature, relative humidity, light lux level).</li>
                                <li>Demonstrates why condition order is critical: placing general conditions before specific ones creates unreachable dead code blocks (e.g., checking <code>temp &gt; 25</code> before <code>temp &gt; 40</code>).</li>
                                <li>Live-triggers emergency actuation commands: activating exhaust louvers, shading screens, and micro-fogging nozzles in response to extreme compound stress.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive decision tree flowchart and live execution log demonstrating mutually exclusive branching logic.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Disaster Early Warning & Advisory Decision Tree Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty and student cohorts co-design an institutional emergency alert decision tree for Raitha Samparka Kendras (RSKs) across Karnataka:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we evaluate compound events (e.g., unseasonal rainfall coinciding with mature wheat harvest, or severe night frost following irrigation)?</li>
                                <li><strong>Collaborative Design:</strong> Faculty guides student groups to map multi-tiered alert levels (Green: Normal, Yellow: Caution, Orange: High Risk, Red: Imminent Crop Loss) and specify actionable farmer interventions for each branch.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-approved Extreme Agro-Climatic Advisory Matrix with verified non-overlapping condition boundaries.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Crop Variety Recommendation Engine Challenge</h3>
                            <p><strong>Team Syndicate:</strong> Student teams build a nested conditional program recommending specific dryland vs wetland seed varieties (e.g., Ragi GPU-28 vs Paddy Jaya):</p>
                            <ul>
                                <li>Engine factors: <em>Soil Type (Black, Red, Alluvial), Sowing Window (Early Kharif, Late Kharif, Rabi), and Available Water (Rainfed, Borewell, Canal)</em>.</li>
                                <li>Include nested fallback rules for late monsoon arrival (delayed sowing recommendations).</li>
                                <li>Swap scripts with another student syndicate to conduct rigorous edge-case testing, attempting to input boundary values that break the logic tree.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A peer-tested Python decision module with an edge-case audit report documenting zero unhandled conditions.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Implement a Multi-Factor Pest Outbreak Severity Classifier</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone Python program that evaluates pest and fungal blight risks:</p>
                            <ul>
                                <li>Inputs: <code>temperature</code>, <code>leaf_wetness_hours</code>, <code>spore_trap_count</code>, and <code>relative_humidity</code>.</li>
                                <li>Implement a 4-tier <code>if-elif-else</code> ladder classifying risk: Low, Moderate, High, Critical.</li>
                                <li>Return tailored agricultural advisory text including specific biological control agents (e.g., <em>Trichoderma</em>) or chemical thresholds.</li>
                                <li>Execute tests across 4 synthetic weather scenarios and print formatted diagnostic cards.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook containing code, test assertions covering every branch, and printed advisory cards.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What keyword checks additional conditions after if?</p>
                    <ul>
                        <li>A) else if</li>
                        <li>B) elif</li>
                        <li>C) elseif</li>
                        <li>D) otherwise</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Python uses 'elif' (short for else-if).</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What is required after if/elif/else conditions in Python?</p>
                    <ul>
                        <li>A) Semicolon ;</li>
                        <li>B) Colon :</li>
                        <li>C) Curly braces {}</li>
                        <li>D) Nothing</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Python uses a colon : and indentation (spaces) for code blocks.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>if executes code when condition is True</li>
                    <li>else handles the alternative case</li>
                    <li>elif checks additional conditions in sequence</li>
                    <li>Indentation (4 spaces) defines code blocks</li>
                    <li>Conditions can be combined with and/or</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Loops (For and While)</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Use for loops to iterate over sequences</li>
                    <li>Use while loops for condition-based repetition</li>
                    <li>Control loop flow with break and continue</li>
                    <li>Apply loops to process agricultural data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Loops = Repetitive Farm Tasks</strong></p>
                    <ul>
                        <li>🔁 <strong>FOR loop:</strong> "For each of my 10 plots, check soil moisture"</li>
                        <li>🔁 <strong>WHILE loop:</strong> "While soil is dry, keep irrigating"</li>
                    </ul>
                    <p>Loops automate repetitive work!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === LOOPS IN PYTHON ===

# 1. FOR loop with range
print("=== Checking 5 Plots ===")
for plot_num in range(1, 6):
    print(f"Checking Plot {plot_num}...")

# 2. FOR loop with list
print("\\n=== Processing Crops ===")
crops = ["Wheat", "Rice", "Cotton", "Sugarcane"]
for crop in crops:
    print(f"  Processing: {crop}")

# 3. FOR loop with index (enumerate)
print("\\n=== Crop Inventory ===")
for index, crop in enumerate(crops, start=1):
    print(f"  {index}. {crop}")

# 4. Processing farm data
print("\\n=== Plot Yields Analysis ===")
plot_yields = [2500, 2800, 2200, 3100, 2600]
total = 0

for yield_kg in plot_yields:
    total += yield_kg  # Add each yield to total

average = total / len(plot_yields)
print(f"Total yield: {total} kg")
print(f"Average yield: {average} kg")

# 5. WHILE loop - condition-based
print("\\n=== Irrigation Simulation ===")
soil_moisture = 20  # Starting moisture

while soil_moisture < 50:
    print(f"Moisture: {soil_moisture}% - Irrigating...")
    soil_moisture += 10  # Each irrigation adds 10%

print(f"✅ Target reached! Moisture: {soil_moisture}%")

# 6. BREAK - exit loop early
print("\\n=== Pest Search ===")
plants = ["healthy", "healthy", "infected", "healthy", "healthy"]

for i, status in enumerate(plants):
    print(f"Checking plant {i+1}: {status}")
    if status == "infected":
        print("⚠️ ALERT! Infected plant found. Stopping search.")
        break

# 7. CONTINUE - skip current iteration
print("\\n=== Process Only Good Yields ===")
yields = [2500, -1, 2800, 0, 3000]  # -1 and 0 are errors

for y in yields:
    if y <= 0:
        print(f"  Skipping invalid value: {y}")
        continue
    print(f"  Processing valid yield: {y} kg")

# 8. Nested loops - multiple dimensions
print("\\n=== Field Inspection Grid ===")
for row in range(1, 4):
    for col in range(1, 4):
        print(f"  Inspecting Row {row}, Col {col}")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Batch Sensor Processing & Defensive Loop Architecture</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates iterative processing live in Colab on a multi-day agricultural sensor feed:</p>
                            <ul>
                                <li><strong>For Loop with Enumerate & Accumulator:</strong> Iterates across 30 days of weather telemetry, calculating cumulative Growing Degree Days (GDD) with base temperature 10&deg;C.</li>
                                <li><strong>Defensive While Loop:</strong> Simulates an autonomous drip irrigation pump that continues pumping until soil moisture reaches 50%, with a safety timeout guard counter (<code>max_timeout = 60</code> minutes) to prevent disastrous pump burn-out if a pipe bursts.</li>
                                <li>Demonstrates using <code>continue</code> to skip missing sensor reads and <code>break</code> to abort on motor overheating.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive live demonstration script displaying accumulator patterns, timeout guards, and loop control statements.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Spatial Field Grid Traversal & Drone Flight Path Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student groups to conceptualize automated drone surveying across a 2D field grid ($M \times N$ matrix):</p>
                            <ul>
                                <li><strong>Faculty Guidance:</strong> Explains nested loops (outer loop for row scan lines, inner loop for waypoints along each row) and introduces the "boustrophedon" (lawnmower back-and-forth) pathing pattern.</li>
                                <li><strong>Student Groups:</strong> Implement alternating column orders on even vs odd rows to prevent the drone from making wasteful transit flights back to row starts.</li>
                                <li>Faculty leads an optimization review calculating battery savings achieved through optimized loop traversal.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-designed Python 2D Grid Waypoint Generator script verified by faculty with simulated battery consumption stats.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Farm Sensor Anomaly Filter & Clean-Up Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a batch list of 100 hourly farm sensor readings contaminated with transmission noise (-999 error codes, impossible 120&deg;C spikes, and duplicate records):</p>
                            <ul>
                                <li>Teams write a collaborative Python processing loop using <code>continue</code> to discard corrupted readings and compute running averages of valid data.</li>
                                <li>Use a <code>while</code> loop to simulate grain silo drying, stepping through hours until moisture drops from 22% to a safe storage threshold of 12%.</li>
                                <li>Swap scripts with another student syndicate to test against an adversarial noise batch with edge-case sensor failures.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A robust iterative sensor cleaning module and peer assessment report verifying noise rejection accuracy.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a 7-Day Harvest Yield & Cumulative Revenue Tracker</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a complete Python program processing daily harvest records:</p>
                            <ul>
                                <li>Create a list of daily harvest weights: <code>[320, 450, 290, 510, 480, 530, 390]</code>.</li>
                                <li>Use a <code>for</code> loop with <code>enumerate(..., start=1)</code> to calculate cumulative yield and identify peak and lowest harvest days.</li>
                                <li>Calculate total revenue using a fixed Mandi rate of ₹28/kg.</li>
                                <li>Use a nested loop to simulate inspecting 4 crates per day, tagging each crate with a unique serial ID (e.g., <code>"Day2-Crate3"</code>).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook displaying daily harvest summaries, cumulative totals, and generated crate inspection serials.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> How many times does this loop run? <code>for i in range(5):</code></p>
                    <ul>
                        <li>A) 4 times</li>
                        <li>B) 5 times</li>
                        <li>C) 6 times</li>
                        <li>D) Infinite</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - range(5) gives 0,1,2,3,4 = 5 iterations.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does 'break' do in a loop?</p>
                    <ul>
                        <li>A) Pauses the loop</li>
                        <li>B) Exits the loop immediately</li>
                        <li>C) Skips to next iteration</li>
                        <li>D) Restarts the loop</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - break exits the entire loop immediately.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>for loops iterate over sequences (lists, ranges)</li>
                    <li>while loops repeat while condition is True</li>
                    <li>break exits the loop; continue skips to next iteration</li>
                    <li>Loops are essential for processing multiple data points</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Functions and Modularity</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Define and call functions</li>
                    <li>Use parameters and return values</li>
                    <li>Understand variable scope</li>
                    <li>Write reusable code for farm calculations</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Functions = Specialized Farm Equipment</strong></p>
                    <p>Just as you have different tools for different jobs:</p>
                    <ul>
                        <li>🚜 <code>plow(field)</code> - Tractor plows any field you specify</li>
                        <li>💧 <code>irrigate(plot, duration)</code> - Irrigates with specified time</li>
                        <li>📊 <code>calculate_yield(area, rate)</code> - Computes yield</li>
                    </ul>
                    <p>Functions are reusable "tools" in your code!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === FUNCTIONS IN PYTHON ===

# 1. Simple function
def greet_farmer():
    """A simple greeting function"""
    print("🌾 Welcome to Smart Farm Management!")

greet_farmer()  # Call the function

# 2. Function with parameters
def calculate_yield(hectares, yield_per_ha):
    """Calculate total yield"""
    total = hectares * yield_per_ha
    print(f"Total yield: {total} kg")

calculate_yield(5, 3000)
calculate_yield(10, 2500)

# 3. Function with return value
def calculate_profit(revenue, costs):
    """Calculate and return profit"""
    profit = revenue - costs
    return profit

my_profit = calculate_profit(500000, 350000)
print(f"My profit: ₹{my_profit}")

# 4. Function with default parameters
def fertilizer_recommendation(crop, area, organic=False):
    """Recommend fertilizer amount"""
    base_rate = {"wheat": 100, "rice": 120, "cotton": 80}
    rate = base_rate.get(crop.lower(), 100)
    
    if organic:
        rate = rate * 1.5  # Organic needs more
        source = "organic compost"
    else:
        source = "urea"
    
    amount = area * rate
    return f"{amount} kg of {source}"

print(fertilizer_recommendation("wheat", 5))
print(fertilizer_recommendation("rice", 3, organic=True))

# 5. Multiple return values
def analyze_soil(ph, nitrogen, phosphorus):
    """Analyze soil and return recommendations"""
    
    ph_status = "optimal" if 6.0 <= ph <= 7.0 else "needs adjustment"
    nitrogen_status = "good" if nitrogen > 50 else "low"
    
    return ph_status, nitrogen_status

ph_result, n_result = analyze_soil(6.5, 40, 30)
print(f"pH: {ph_result}, Nitrogen: {n_result}")

# 6. Complete Farm Calculator Function
def farm_economics(area, crop, yield_rate, price, cost_per_ha):
    """
    Complete farm economics calculator.
    
    Parameters:
        area: Farm size in hectares
        crop: Crop name
        yield_rate: kg per hectare
        price: ₹ per kg
        cost_per_ha: ₹ cost per hectare
    
    Returns:
        Dictionary with economic analysis
    """
    total_yield = area * yield_rate
    revenue = total_yield * price
    total_cost = area * cost_per_ha
    profit = revenue - total_cost
    profit_margin = (profit / revenue) * 100 if revenue > 0 else 0
    
    return {
        "crop": crop,
        "area": area,
        "yield": total_yield,
        "revenue": revenue,
        "cost": total_cost,
        "profit": profit,
        "margin": round(profit_margin, 1)
    }

# Use the function
result = farm_economics(
    area=10, 
    crop="Wheat", 
    yield_rate=3000, 
    price=25, 
    cost_per_ha=40000
)

print("\\n=== Farm Economics Report ===")
for key, value in result.items():
    print(f"  {key}: {value}")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Refactoring: Monolithic Script to Modular Farm SDK</h3>
                            <p><strong>Educator Action:</strong> The instructor begins with an unorganized 80-line procedural Python script doing tangled calculations for soil health, irrigation timing, and fertilizer dosage:</p>
                            <ul>
                                <li>Live-refactors the script into 4 clean, single-responsibility functions with PEP-257 docstrings, explicit type hints, and default arguments: <code>calc_evapotranspiration()</code>, <code>estimate_yield_loss()</code>, <code>recommend_nutrients()</code>, and <code>generate_executive_summary()</code>.</li>
                                <li>Demonstrates the critical distinction between printing inside a function (side-effect) versus returning values (reusable functional programming).</li>
                                <li>Tests function scope, demonstrating why modifying global variables inside functions is dangerous in production farm systems.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live side-by-side refactoring demonstration showcasing modularity, unit testability, and docstring documentation.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Open-Source Agri-Python Library Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty acts as maintainer of an institutional open-source agricultural Python library: <code>agri_toolkit</code>:</p>
                            <ul>
                                <li><strong>Faculty Guidance:</strong> Establishes clean module boundaries: <code>agri_toolkit.water</code>, <code>agri_toolkit.soil</code>, <code>agri_toolkit.crop_models</code>, and <code>agri_toolkit.economics</code>.</li>
                                <li><strong>Collaborative Design:</strong> Faculty and student cohorts define standard function signatures, input validation decorators, error handling protocols, and standardized return dictionary formats so that functions from different student teams can effortlessly pipe data to one another.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An official API Architecture Specification for the <code>agri_toolkit</code> library vetted and approved by faculty.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Collaborative Farm Micro-Services Integration Challenge</h3>
                            <p><strong>Team Syndicate:</strong> Student teams of 4 assign distinct functional development responsibilities:</p>
                            <ul>
                                <li><strong>Member 1:</strong> Writes <code>water_budget(crop, area_ha, eto_mm)</code> returning irrigation requirement.</li>
                                <li><strong>Member 2:</strong> Writes <code>fertilizer_plan(crop, soil_npk_dict, target_yield)</code> returning kg urea/dap/mop.</li>
                                <li><strong>Member 3:</strong> Writes <code>pest_disease_risk(temp, humidity, spore_count)</code> returning risk score and biocontrol agent.</li>
                                <li><strong>Member 4:</strong> Writes the orchestrator function <code>generate_daily_farm_plan()</code> that imports and executes all three functions, compiling an integrated JSON advisory.</li>
                                <li>Teams execute integration tests and conduct peer code audits with a neighboring team.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A fully integrated, 4-function modular Python file with cross-team unit test assertions and code review signatures.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Production-Ready Agricultural Utility Module</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write 3 professional, fully documented Python functions with type hints and default parameters:</p>
                            <ul>
                                <li><code>calculate_water_requirement(crop: str, area_ha: float, soil_type: str = "loam") -&gt; float</code></li>
                                <li><code>calculate_seed_quantity(crop: str, area_ha: float, germination_rate: float = 0.85) -&gt; dict</code></li>
                                <li><code>predict_harvest_date(planting_date_str: str, duration_days: int) -&gt; str</code></li>
                                <li>Include multi-line Google-style docstrings explaining parameters, returns, and examples. Verify docstring readability with <code>help(calculate_water_requirement)</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook containing all 3 functions, docstrings, and verified test execution calls.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What keyword defines a function in Python?</p>
                    <ul>
                        <li>A) function</li>
                        <li>B) def</li>
                        <li>C) func</li>
                        <li>D) define</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 'def' is the keyword to define functions.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does 'return' do in a function?</p>
                    <ul>
                        <li>A) Prints output</li>
                        <li>B) Exits the program</li>
                        <li>C) Sends a value back to the caller</li>
                        <li>D) Repeats the function</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - return sends a value back and exits the function.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Functions are reusable blocks of code</li>
                    <li>Use 'def' to define, parentheses for parameters</li>
                    <li>'return' sends values back to caller</li>
                    <li>Default parameters make functions flexible</li>
                    <li>Good functions do one thing well</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t17': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Lists, Tuples, and Dictionaries</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create and manipulate lists</li>
                    <li>Understand tuple immutability</li>
                    <li>Use dictionaries for key-value storage</li>
                    <li>Choose the right collection for farm data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Collections = Farm Storage Systems</strong></p>
                    <ul>
                        <li>📋 <strong>List:</strong> Flexible seed bags - add, remove, rearrange</li>
                        <li>🔒 <strong>Tuple:</strong> Sealed packages - can't modify (GPS coordinates)</li>
                        <li>🏷️ <strong>Dictionary:</strong> Labeled containers - find by name instantly</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === LISTS ===
print("=== LISTS (Mutable, Ordered) ===")

# Create a list
crops = ["Wheat", "Rice", "Cotton"]
yields = [2500, 3200, 1800]

# Access elements
print(f"First crop: {crops[0]}")
print(f"Last yield: {yields[-1]}")

# Modify list
crops.append("Sugarcane")      # Add to end
crops.insert(1, "Maize")       # Insert at position
crops.remove("Cotton")         # Remove by value
print(f"Updated crops: {crops}")

# List operations
all_yields = yields + [2000, 2500]  # Combine lists
print(f"Total yield: {sum(all_yields)} kg")
print(f"Average: {sum(all_yields)/len(all_yields):.0f} kg")

# === TUPLES ===
print("\\n=== TUPLES (Immutable, Ordered) ===")

# Create tuple - fixed data
farm_location = (12.9716, 77.5946)  # GPS coordinates
crop_cycle = ("Sow", "Grow", "Harvest", "Rest")

print(f"Farm coordinates: {farm_location}")
print(f"Crop cycle steps: {crop_cycle}")

# Tuple unpacking
lat, lon = farm_location
print(f"Latitude: {lat}, Longitude: {lon}")

# Tuples can't be changed (this would error):
# farm_location[0] = 13.0  # TypeError!

# === DICTIONARIES ===
print("\\n=== DICTIONARIES (Key-Value Pairs) ===")

# Create dictionary
soil_test = {
    "pH": 6.5,
    "nitrogen": 80,
    "phosphorus": 40,
    "potassium": 120,
    "organic_matter": 2.5
}

print(f"Soil pH: {soil_test['pH']}")
print(f"Nitrogen level: {soil_test['nitrogen']} kg/ha")

# Add/update entries
soil_test["zinc"] = 2.0
soil_test["pH"] = 6.8  # Update existing

# Iterate through dictionary
print("\\nComplete Soil Report:")
for nutrient, value in soil_test.items():
    print(f"  {nutrient}: {value}")

# Nested dictionary - farm database
farm_data = {
    "plot_1": {
        "area": 2.5,
        "crop": "Wheat",
        "yield": 3000
    },
    "plot_2": {
        "area": 1.8,
        "crop": "Rice",
        "yield": 4500
    }
}

print(f"\\nPlot 1 crop: {farm_data['plot_1']['crop']}")
print(f"Plot 2 yield: {farm_data['plot_2']['yield']} kg/ha")

# Calculate total farm production
total_production = 0
for plot, data in farm_data.items():
    production = data["area"] * data["yield"]
    total_production += production
    print(f"{plot}: {production} kg")

print(f"Total farm production: {total_production} kg")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live In-Memory Farm Database Querying & Manipulation</h3>
                            <p><strong>Educator Action:</strong> The instructor builds an interactive hierarchical agricultural data registry live in Google Colab combining Lists, Tuples, and Dictionaries:</p>
                            <ul>
                                <li>Models 5 research plots: immutable GPS bounds stored as tuples <code>(lat, lon)</code>, time-series moisture readings stored in mutable lists <code>[22, 25, 29]</code>, and metadata indexed in key-value dictionaries.</li>
                                <li>Demonstrates dictionary lookup efficiency ($O(1)$ constant time) versus scanning lists ($O(N)$ linear time).</li>
                                <li>Live-codes dynamic list comprehensions to query plots in real time: <code>[plot_id for plot_id, d in farm.items() if d['moisture'] &lt; 30]</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive querying demonstration showing nested dictionary updates, tuple unpacking, and list comprehension filtering.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Precision Farm Digital Twin In-Memory Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty challenges student cohorts to design the in-memory data schema for an autonomous hydroponics farm Digital Twin:</p>
                            <ul>
                                <li><strong>Faculty Mentoring:</strong> Guides students in choosing the appropriate data collection for each data entity: why sensor calibration constants must be immutable tuples, why telemetry buffers must be dynamic lists (with max length), and why nutrient dosing tables are best modeled as dictionaries.</li>
                                <li><strong>Collaborative Work:</strong> Groups construct a nested JSON-like dictionary representing water tanks, nutrient pumps, and climate sensors, establishing clear key hierarchy and validation rules.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An in-memory Digital Twin Data Schema Document verified and signed off by faculty.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Agro-Market Inventory Management & Price Query Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams build an in-memory commodities trading and storage registry using nested dictionaries and lists of tuples:</p>
                            <ul>
                                <li>Track 4 crops (Paddy, Maize, Ragi, Groundnut) across 3 regional warehouse facilities with attributes: <code>grade</code>, <code>quantity_bags</code>, and <code>arrival_date</code>.</li>
                                <li>Write query functions to find total stock of Grade-A produce, calculate warehouse capacity utilization %, and update stock when lots are sold.</li>
                                <li>Swap databases with another student syndicate who executes adversarial test queries attempting to cause <code>KeyError</code> or corrupt data structures.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative Python warehouse registry module with peer-reviewed error handling and query outputs.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a Comprehensive Farm Plot Database & Query Suite</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, create a multi-level nested dictionary <code>farm_registry</code> containing at least 4 farm plots:</p>
                            <ul>
                                <li>Include plot keys: <code>crop</code> (str), <code>coordinates</code> (tuple of 2 floats), <code>soil_npk</code> (dict with keys 'N', 'P', 'K'), and <code>weekly_moisture</code> (list of 7 floats).</li>
                                <li>Write code to: (1) Add a new plot dynamically, (2) Update the soil potassium level for Plot 2, (3) Use list comprehension to extract all plots growing cereals, (4) Calculate the overall farm average soil moisture across all 28 readings.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook containing the nested registry, manipulation operations, and printed query results.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which collection can't be modified after creation?</p>
                    <ul>
                        <li>A) List</li>
                        <li>B) Dictionary</li>
                        <li>C) Tuple</li>
                        <li>D) Set</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Tuples are immutable (cannot be changed).</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> How do you access a dictionary value?</p>
                    <ul>
                        <li>A) dict.0</li>
                        <li>B) dict["key"]</li>
                        <li>C) dict(key)</li>
                        <li>D) dict->key</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Use square brackets with the key name.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Lists: ordered, mutable, use for changeable sequences</li>
                    <li>Tuples: ordered, immutable, use for fixed data</li>
                    <li>Dictionaries: key-value pairs, fast lookups</li>
                    <li>Choose based on: mutability needs and access pattern</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t18': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 String Manipulation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Apply common string methods</li>
                    <li>Format strings for reports</li>
                    <li>Parse and clean text data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>String Manipulation = Processing Farm Labels</strong></p>
                    <p>Cleaning crop names, formatting reports, parsing sensor data - all involve text processing!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === STRING MANIPULATION ===

# Basic string operations
crop_name = "  Wheat  "
print(f"Original: '{crop_name}'")
print(f"Stripped: '{crop_name.strip()}'")
print(f"Upper: '{crop_name.strip().upper()}'")
print(f"Lower: '{crop_name.strip().lower()}'")

# String formatting
area = 10.5
yield_kg = 2750.75
report = f"Farm Report: {area} hectares, yield: {yield_kg:.1f} kg"
print(report)

# Split and join
sensor_data = "25.5,60.2,6.8,120"
values = sensor_data.split(",")
print(f"Parsed values: {values}")

crops_list = ["Wheat", "Rice", "Cotton"]
crops_string = ", ".join(crops_list)
print(f"Combined: {crops_string}")

# Search and replace
message = "The wheat yield was excellent"
if "wheat" in message:
    print("Found wheat!")
new_message = message.replace("wheat", "rice")
print(new_message)

# Clean messy data
messy_input = "  WHEAT , 2500KG  "
clean = messy_input.strip().lower().replace("kg", "").replace(",", "")
print(f"Cleaned: {clean}")
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live NMEA GPS Parsing & Multi-Lingual SMS Formatting</h3>
                            <p><strong>Educator Action:</strong> The instructor projects Colab and inputs raw string payloads from agricultural hardware:</p>
                            <ul>
                                <li><strong>Hardware Stream:</strong> A raw NMEA sentence from a tractor GPS guidance unit: <code>"$GPRMC,123519,A,1258.03,N,07735.67,E,022.4,084.4,230324,003.1,W*6A"</code>.</li>
                                <li>Live-codes string tokenization with <code>.split(",")</code>, extracts latitude/longitude strings, and computes decimal degrees with formatting.</li>
                                <li>Demonstrates using advanced f-string format specifiers: padding numbers (<code>{val:05.2f}</code>), adding thousand separators (<code>{cost:,}</code>), and dynamically compiling localized SMS alerts.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive string parsing demonstration parsing raw GPS strings and generating formatted agricultural dispatch alerts.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Farmer NLP & Dialect Text Normalization Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty presents unformatted, messy text queries sent by rural farmers to agricultural call center chatbots (mix of transliterated Kannada, phonetic spellings, and informal slang):</p>
                            <ul>
                                <li><strong>Faculty Mentoring:</strong> Explains tokenization, case-folding (<code>.lower()</code>), whitespace stripping (<code>.strip()</code>), and character replacement for dialect spelling variations (e.g., <em>"tamato"</em>, <em>"thakkali"</em> &rarr; <em>"tomato"</em>).</li>
                                <li><strong>Collaborative Design:</strong> Student groups build a string dictionary mapping common regional crop and pest slang to canonical agronomic terms, tested live under faculty supervision.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-developed Agricultural Text Sanitization Function and Canonical Slang Normalization Dictionary approved by faculty.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Agricultural IoT Log Parser & Sanitizer Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a raw text file containing 50 lines of legacy weather station log data formatted as: <code>"2024-05-18|TEMP:28.5C|HUM:72%|SOIL:45%|STATUS:OK   "</code>:</p>
                            <ul>
                                <li>Write a collaborative parsing script that strips whitespace, splits by delimiters, removes non-numeric characters (<code>"C"</code>, <code>"%"</code>), and casts readings into numeric variables.</li>
                                <li>Reformat the extracted data into a clean CSV string format: <code>"Timestamp,Temperature,Humidity,SoilMoisture"</code>.</li>
                                <li>Swap scripts with another student syndicate who tests with edge-case strings containing missing delimiters and corrupted status tags.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A robust Python string parser script with a peer-reviewed data validation scorecard.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code an Automated Weather Alert & SMS Advisory Generator</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone Python program that transforms raw weather sensor data into clean, formatted farmer notifications:</p>
                            <ul>
                                <li>Take a raw sensor string: <code>"NODE_04#TEMP=38.4#RAIN=0.0#WIND=24.2#CROP=PADDY"</code> and parse the individual key-value pairs using string methods.</li>
                                <li>Use f-strings to dynamically format a professional 160-character farmer SMS advisory with agricultural emojis (🌾, ⚠️, 🚜) warning of high evaporative demand and advising specific irrigation hours.</li>
                                <li>Format prices with currency symbols (₹) and ensure clean text alignment across multiple lines.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook containing string parsing logic, sanitization rules, and printed multi-scenario SMS outputs.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does "hello".upper() return?</p>
                    <ul>
                        <li>A) "hello"</li>
                        <li>B) "HELLO"</li>
                        <li>C) "Hello"</li>
                        <li>D) Error</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - upper() converts all characters to uppercase.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>strip() removes whitespace, split() breaks strings</li>
                    <li>f-strings provide easy formatting</li>
                    <li>String methods are essential for data cleaning</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t19': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 File Handling Basics</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Read data from files</li>
                    <li>Write results to files</li>
                    <li>Work with CSV files for farm data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>File Handling = Farm Record Books</strong></p>
                    <p>Just as farmers keep logbooks, Python keeps data in files - read past records, write new observations!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# === FILE HANDLING ===

# Writing to a file
with open("farm_log.txt", "w") as file:
    file.write("Farm Daily Log\\n")
    file.write("Date: 2024-01-15\\n")
    file.write("Temperature: 28°C\\n")
    file.write("Moisture: 45%\\n")

print("✅ Log file created!")

# Reading from a file
with open("farm_log.txt", "r") as file:
    content = file.read()
    print("File contents:")
    print(content)

# Working with CSV (most common for farm data)
import csv

# Write CSV
crops_data = [
    ["Crop", "Area", "Yield"],
    ["Wheat", 5, 2500],
    ["Rice", 3, 3200],
    ["Cotton", 2, 1800]
]

with open("crops.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(crops_data)

print("✅ CSV file created!")

# Read CSV
with open("crops.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Using pandas (recommended for larger files)
# import pandas as pd
# df = pd.read_csv("crops.csv")
# print(df)
                </code></pre>
            </div>

            <div class="learn-by-doing-hub">
                <div class="lbd-header">
                    <div>
                        <h2><i class="fas fa-tools"></i> Learn by Doing Hub</h2>
                        <p>Action-oriented experiential learning across 4 collaborative tiers</p>
                    </div>
                    <span style="background: rgba(255,255,255,0.2); padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 600; font-size: 0.85rem;">
                        <i class="fas fa-users-cog"></i> 4 Interactive Modalities
                    </span>
                </div>

                <div class="lbd-grid">
                    <!-- Tier 1: Teacher -->
                    <div class="lbd-card teacher-tier">
                        <div>
                            <span class="lbd-badge badge-teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher: Live Demonstration</span>
                            <h3>Live Telemetry File I/O & Safe Context Management</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates robust file I/O live in Google Colab using real-world agricultural scenarios:</p>
                            <ul>
                                <li>Contrasts unsafe legacy file handling (<code>f = open()</code> where power failure leaves file descriptors open and corrupts logs) against Python's <code>with open(...)</code> context manager.</li>
                                <li>Live-codes continuous appending (<code>"a"</code> mode) of incoming sensor telemetry lines into an archival log file.</li>
                                <li>Demonstrates handling missing files using <code>try-except FileNotFoundError</code> to prevent automated farm gateway scripts from terminating abruptly.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live script demonstration showing context manager mechanics, file append operations, and graceful exception handling.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Institutional Agricultural Data Archive Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty acts as Chief Information Officer for an agricultural university research station (like UAS GKVK):</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we organize 10 years of multi-plot sensor logs, daily harvest manifests, and soil chemistry reports so researchers can query them seamlessly without disk space explosion?</li>
                                <li><strong>Collaborative Work:</strong> Student groups and faculty design an archival directory and file naming taxonomy: <code>/archive/{year}/{season}/{plot_id}/telemetry_{YYYYMMDD}.csv</code>, establishing standard header formats and automated file rotation rules.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An official Agricultural File Archive Specification Document approved and signed off by faculty.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Plot CSV Merge & Summary Report Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive 3 separate CSV data logs from an experimental farm:</p>
                            <ul>
                                <li><code>weather_log.csv</code> (Daily rain & temp), <code>irrigation_log.csv</code> (Water applied per plot), and <code>harvest_log.csv</code> (Final yield & quality grade).</li>
                                <li>Teams write a collaborative Python script using the built-in <code>csv</code> module to read all 3 files, join records on matching Plot IDs and dates, and generate an integrated <code>master_farm_analysis.csv</code>.</li>
                                <li>Swap merged output files with another student syndicate to audit data integrity and verify that no rows were dropped during join operations.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative Python CSV ETL script and verified master CSV file with peer sign-off.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build an Automated Daily Farm Journal & CSV Logger</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone Python program that manages an automated agricultural ledger:</p>
                            <ul>
                                <li>Create a CSV file <code>daily_farm_operations.csv</code> with headers: <code>Date,Plot_ID,Activity,Quantity,Input_Cost_INR,Notes</code>.</li>
                                <li>Write a function <code>log_activity(date, plot, activity, qty, cost, notes)</code> that safely appends records using <code>csv.writer</code>.</li>
                                <li>Write a second function <code>summarize_plot_expenditure(plot_id)</code> that reads the CSV line by line, filters by plot, and computes total expenditure.</li>
                                <li>Log 4 sample activities and print a formatted summary report.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A self-tested Colab notebook containing file write/append/read code, generated CSV data, and printed summary outputs.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What does the 'w' mode do when opening a file?</p>
                    <ul>
                        <li>A) Read only</li>
                        <li>B) Write (creates or overwrites)</li>
                        <li>C) Append</li>
                        <li>D) Execute</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - 'w' opens for writing, creating or overwriting the file.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Use 'with' statement for auto file closing</li>
                    <li>Modes: 'r' (read), 'w' (write), 'a' (append)</li>
                    <li>CSV is ideal for tabular farm data</li>
                    <li>pandas library simplifies large file handling</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use by lecture system
if (typeof window !== 'undefined') {
    window.module1HandoutsPart3 = module1HandoutsPart3;
}
