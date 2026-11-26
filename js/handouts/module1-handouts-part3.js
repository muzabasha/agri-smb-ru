// Module 1 Comprehensive Handouts - Part 3 (m1-t11 to m1-t19)
// Python Programming Topics

const module1HandoutsPart3 = {
    'm1-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Python Environment Setup</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Agriculture students often face computer crashes when installing complex software.</p>
                <p>Different operating systems create confusing error messages and broken installations.</p>
                <p>Field students need a fast way to run Python without installation headaches.</p>
                <p>Google Colab runs Python in any browser without installing anything locally.</p>
                <p>How do we run our first agricultural Python code in Google Colab?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why do modern Agri-Data Scientists use cloud environments like Google Colab instead of installing Python and dependencies solely on local desktop machines?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Agricultural datasets involve heavy multi-spectral satellite rasters, high-resolution drone orthomosaics, and deep neural networks that require massive RAM and GPU acceleration. Cloud environments like Colab provide free instant access to GPUs/TPUs, eliminate operating system compatibility issues, and enable instant collaborative sharing between researchers across institutions without complex local environment configuration.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> If a cloud notebook crashes with an 'Out of Memory' (OOM) error while processing drone imagery, what architectural change should be made rather than simply rebooting?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Rebooting will only crash again at the exact same image tensor. In agricultural data engineering, OOM crashes indicate that the entire raster was loaded into RAM at once. The proper computational approach is batch processing or using windowed streaming (e.g., rasterio windowed reads / generator pipelines) to stream spatial tiles sequentially.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>student_name</code> and <code>target_crop</code> to your own details. Run the cell and verify your personal output!</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live GPU Demo):</strong> In the Teacher's Colab Runtime demonstration, what diagnostic bash command verified that the GPU accelerator was active and displayed available VRAM for deep learning?</p>
                    <ul>
                        <li>A) !nvidia-smi</li>
                        <li>B) !ping google.com</li>
                        <li>C) !cat /etc/passwd</li>
                        <li>D) !mkdir farm_data</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>!nvidia-smi verified GPU driver status and memory allocation.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Running !nvidia-smi queries the NVIDIA System Management Interface in Google Colab, displaying the GPU model (e.g., T4/V100), driver version, CUDA toolkit status, and available video RAM.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Ping tests network reachability, not GPU hardware status.</li>
                                <li><strong>Why C is incorrect:</strong> Cat /etc/passwd displays system users, unrelated to GPU acceleration.</li>
                                <li><strong>Why D is incorrect:</strong> Mkdir creates a directory.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Collaborative Cloud Studio):</strong> During the Collaborative Studio, when two researchers executed cells simultaneously in a shared Colab session, what issue was identified and resolved?</p>
                    <ul>
                        <li>A) State conflicts and variable overwriting in the shared runtime, resolved by assigning distinct variable namespaces or using independent runtime instances</li>
                        <li>B) Hardware failure of the researcher's monitor</li>
                        <li>C) Automatic deletion of the Google Drive account</li>
                        <li>D) Python converting all integers to strings</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>State conflicts in shared runtime, resolved by separate namespaces or independent sessions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Colab sessions share a single active Python kernel when multiple users edit concurrently. Simultaneous execution can lead to race conditions and silent variable overwrites, requiring disciplined modular design and individual runtimes.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Software collaboration issues do not damage hardware monitors.</li>
                                <li><strong>Why C is incorrect:</strong> Concurrent execution never deletes Google Drive accounts.</li>
                                <li><strong>Why D is incorrect:</strong> Python's type system is unaffected by multi-user editing.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab notebook setup, which command successfully mounted your Google Drive to store agricultural datasets persistently across runtime restarts?</p>
                    <ul>
                        <li>A) from google.colab import drive; drive.mount('/content/drive')</li>
                        <li>B) import os; os.delete('drive')</li>
                        <li>C) !download all drive files</li>
                        <li>D) google.drive.open_all()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>from google.colab import drive; drive.mount('/content/drive') mounted persistent cloud storage.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Google Colab runtimes are ephemeral (wiped on disconnect). Persistent dataset storage requires mounting Google Drive programmatically using drive.mount().</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> There is no os.delete() function; attempting it throws an AttributeError.</li>
                                <li><strong>Why C is incorrect:</strong> This is invalid shell syntax.</li>
                                <li><strong>Why D is incorrect:</strong> This is a fictitious Python module call.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>In a farm storeroom, you record bag counts, fertilizer weights, and crop names.</p>
                <p>Mixing text with numbers causes computer software to crash during operations.</p>
                <p>For example, you cannot multiply the word 'Tomato' by five.</p>
                <p>Python data types keep farm numbers, decimals, text, and switches organized.</p>
                <p>How do we represent different farm values using the correct Python types?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> If a soil pH sensor transmits the value '6.5' as a string instead of a floating-point number, why does adding 1.0 produce a runtime error in Python, and how does this affect downstream irrigation logic?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Python is strongly typed: it will not implicitly coerce a string '6.5' into a number when using the addition operator (+), raising a TypeError ('can only concatenate str to str'). If left unhandled in automated farm software, this silent type mismatch crashes the telemetry ingestion service and prevents scheduled irrigation valves from firing.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why should agricultural financial figures (e.g., farmer loan repayments in rupees) never be stored using standard 32-bit floating-point numbers?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Standard floating-point numbers (IEEE 754) represent decimal fractions using binary approximations, leading to small representation errors (e.g., 0.1 + 0.2 = 0.30000000000000004). In banking, agricultural subsidies, and cooperative audits, these compounding fractional errors cause legal audit discrepancies. High-precision decimal types (e.g., Python's decimal module) must be used.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>fertilizer_kg = 0.0</code> and <code>irrigation_active = False</code>. What does the updated warehouse status show?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Type Inference Demo):</strong> In the Teacher's live demonstration, what happened when raw sensor telemetry reading = '24.5' was passed into a threshold check if reading < 30 without explicit type casting?</p>
                    <ul>
                        <li>A) Python automatically converted it to float without any error</li>
                        <li>B) Python 3 raised a TypeError because '<' is not supported between instances of 'str' and 'int'</li>
                        <li>C) The threshold check always evaluated to True</li>
                        <li>D) The computer turned off the sensor hardware</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>Python raised a TypeError because comparisons between str and int are disallowed in Python 3.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Unlike weakly typed languages, Python 3 refuses to compare strings with numerical integers, raising a TypeError. In telemetry pipelines, incoming strings must be explicitly cast via float(reading).</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Python 3 does not perform implicit string-to-numeric type coercion in comparisons.</li>
                                <li><strong>Why C is incorrect:</strong> The statement does not evaluate; execution halts immediately with an exception.</li>
                                <li><strong>Why D is incorrect:</strong> Software type errors do not send hardware shutdown signals to physical sensors.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Farm Record Schema Audit Syndicate):</strong> During the Farm Record Schema Audit, which data type mapping correctly represented the attributes: plot_id ('PLT-102'), organic_certified (True), soil_ec (1.45), and tree_count (450)?</p>
                    <ul>
                        <li>A) str, bool, float, int</li>
                        <li>B) int, str, float, bool</li>
                        <li>C) float, bool, int, str</li>
                        <li>D) list, tuple, set, dict</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>str for identifier, bool for certification flag, float for electrical conductivity, and int for discrete tree count.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Agricultural data schemas must rigorously align real-world properties to primitive data types: alphanumeric codes are strings, binary state flags are booleans, continuous physical measurements are floats, and discrete countable units are integers.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Plot IDs contain hyphens and cannot be integers.</li>
                                <li><strong>Why C is incorrect:</strong> Tree counts are discrete whole numbers, not continuous floats.</li>
                                <li><strong>Why D is incorrect:</strong> These are composite collection data structures, not primitive single-value types.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Digital Farm Profile, how did you verify that user-entered yield data was valid prior to computing average production?</p>
                    <ul>
                        <li>A) Using isinstance(yield_val, (int, float)) combined with a positive boundary check yield_val >= 0</li>
                        <li>B) Assuming all user input is automatically correct</li>
                        <li>C) Converting every input to a boolean value</li>
                        <li>D) Wrapping the code in an infinite while loop</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Using isinstance() type verification paired with a domain boundary check (>= 0).</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Defensive agricultural programming requires validating both data types (ensuring inputs are numeric) and domain boundaries (verifying that crop yields are non-negative numbers).</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Assuming valid input leads to silent system crashes when corrupted data enters.</li>
                                <li><strong>Why C is incorrect:</strong> Converting to boolean collapses all non-zero numbers to True, discarding numerical values.</li>
                                <li><strong>Why D is incorrect:</strong> Infinite loops freeze execution without performing validation.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An automated irrigation motor fills your community farm reservoir.</p>
                <p>The motor must start ONLY when electricity is present in the line.</p>
                <p>However, running the pump while it is raining wastes electricity and over-waters crops.</p>
                <p>Combining multiple farm conditions safely requires comparison and logical operators.</p>
                <p>How do boolean operators protect crops and pumps from damage?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is the expression <code>if soil_moisture < 20 or forecast_rain == False and temp > 35:</code> a dangerous trap for beginner AgriTech programmers?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Operator precedence! In Python, <code>and</code> has higher precedence than <code>or</code>. The expression evaluates as <code>if soil_moisture < 20 or (forecast_rain == False and temp > 35)</code>. If soil moisture is 15%, the condition triggers irrigation even if a massive torrential rainstorm is forecasted! Defensive programming requires explicit parentheses: <code>if (soil_moisture < 20 or temp > 35) and not forecast_rain:</code>.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> In drone pesticide spraying, why is calculating spray dosage using floor division <code>//</code> versus standard true division <code>/</code> a matter of life and death for crops?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> True division (<code>/</code>) returns a continuous float (e.g., 5 / 2 = 2.5 liters/ha), allowing precise chemical calibration. Floor division (<code>//</code>) truncates fractional values to the nearest lower integer (e.g., 5 // 2 = 2). In concentrated pesticide delivery, truncating dosage or rounding up can either fail to suppress an insect infestation or burn the foliage from chemical toxicity.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>raining_currently = True</code>. Does the pump still start? Why is rain protection critical?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Live Multi-Condition Logic Walkthrough):</strong> In the Teacher's pesticide spray window evaluator, what compound Boolean expression correctly triggered a 'SAFE_TO_SPRAY' advisory?</p>
                    <ul>
                        <li>A) wind_speed < 15 and rain_prob < 20 and 15 <= temp <= 30</li>
                        <li>B) wind_speed > 40 or rain_prob > 80</li>
                        <li>C) not (temp == 25)</li>
                        <li>D) wind_speed == 0 or temp == 0</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>wind_speed < 15 and rain_prob < 20 and 15 <= temp <= 30 ensured calm winds, dry weather, and moderate temperatures.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Safe agricultural spraying requires meeting multiple physical constraints simultaneously: low wind prevents drift onto neighboring plots, low rain probability prevents wash-off, and moderate temperatures prevent pesticide vaporization.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> High winds and heavy rain guarantee chemical wash-off and environmental contamination.</li>
                                <li><strong>Why C is incorrect:</strong> Restricting spraying to a single exact temperature is agronomically unfeasible.</li>
                                <li><strong>Why D is incorrect:</strong> Zero wind or zero temperature are rare extremes and do not represent safe operational windows.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Fertilizer Bag Math Syndicate):</strong> During the Fertilizer Bag Math Challenge, how did student syndicates compute the exact whole 50kg bags of Urea required plus the leftover kilograms needed for a 4.5-hectare wheat crop requiring 185 kg/ha of Urea?</p>
                    <ul>
                        <li>A) Total bags = total_kg // 50, and remainder = total_kg % 50</li>
                        <li>B) Total bags = total_kg ** 50, and remainder = total_kg / 50</li>
                        <li>C) Total bags = total_kg << 50</li>
                        <li>D) Total bags = total_kg == 50</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Floor division // calculated full 50kg bags, and modulus % calculated remaining kilograms.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Integer floor division (//) computes whole commercial package units, while the modulo operator (%) computes the exact fractional remainder required for spot application.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Exponentiation (**) produces astronomical numbers and destroys fertilizer calculations.</li>
                                <li><strong>Why C is incorrect:</strong> Bitwise left shift (<<) is for binary manipulation, not package unit arithmetic.</li>
                                <li><strong>Why D is incorrect:</strong> Equality comparison (==) returns a boolean True/False.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building an Automated Pesticide Spray Evaluator, how did Python evaluate the chained comparison <code>18 <= temp <= 28</code>?</p>
                    <ul>
                        <li>A) As <code>(18 <= temp) and (temp <= 28)</code> with lazy evaluation</li>
                        <li>B) It threw a SyntaxError because Python does not support chained comparisons</li>
                        <li>C) It evaluated <code>(18 <= temp)</code> to True (1), then checked <code>1 <= 28</code></li>
                        <li>D) As a bitwise bit-shift operation</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Python natively evaluates chained comparisons as <code>(18 <= temp) and (temp <= 28)</code>.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Python uniquely supports mathematical chained comparisons, cleanly expressing environmental tolerance ranges without cumbersome repeated variable names.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Chained comparisons are standard, idiomatic Python syntax.</li>
                                <li><strong>Why C is incorrect:</strong> Unlike C or JavaScript, Python does not coerce the first boolean into an integer to compare with the second operand.</li>
                                <li><strong>Why D is incorrect:</strong> Chained comparison is purely logical, not bitwise manipulation.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A precision polyhouse grows English cucumbers for export supermarkets.</p>
                <p>If heat rises above 35°C, flower blossoms abort and yield plummets.</p>
                <p>If temperatures drop below 15°C, plant cell metabolism stops completely.</p>
                <p>Greenhouses require automatic temperature controls across different heat ranges.</p>
                <p>How do if-elif-else branches automate greenhouse fans, foggers, and heaters?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is an agricultural greenhouse climate control system structured as an <code>if-elif-else</code> ladder rather than a series of independent <code>if</code> statements?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Independent <code>if</code> statements all execute sequentially. If heating and cooling are written as separate <code>if</code> blocks: <code>if temp < 20: heater_on()</code> followed by <code>if temp > 15: cooler_on()</code>, both can evaluate to True at 18°C! The heater and air conditioner would fight each other simultaneously, wasting energy. An <code>if-elif-else</code> ladder guarantees mutual exclusivity—exactly one action branch fires per control cycle.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does an emergency fail-safe in smart farming handle missing sensor data within conditional logic?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> If a sensor wire is severed, the value reads <code>None</code> or <code>NaN</code>. Evaluating <code>if temp > 40:</code> when <code>temp = None</code> throws a fatal TypeError, halting the program. Robust control architectures implement guard clauses: <code>if temp is None: trigger_sensor_fault_alert(); activate_failsafe_irrigation()</code> before executing normal operational thresholds.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>leaf_temp = 12.0</code>. What command does the polyhouse controller order now?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Live Greenhouse Controller Demo):</strong> In the Teacher's live greenhouse simulation, what architectural pattern prevented the heating and ventilation fans from running at the same time?</p>
                    <ul>
                        <li>A) An mutually exclusive if-elif-else ladder with a built-in deadband (hysteresis) zone</li>
                        <li>B) Two separate Python scripts competing for CPU time</li>
                        <li>C) Turning off the greenhouse electrical generator</li>
                        <li>D) Using an infinite recursion loop</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>A mutually exclusive if-elif-else ladder with a built-in deadband (hysteresis) zone.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Deadband hysteresis prevents rapid oscillation (chattering) between heating and cooling. Structuring the logic in a single if-elif-else ladder guarantees that heater and cooling actuators cannot be active concurrently.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Competing scripts cause race conditions and actuator conflicts.</li>
                                <li><strong>Why C is incorrect:</strong> Cutting power disables all climate protection and suffocates plants.</li>
                                <li><strong>Why D is incorrect:</strong> Infinite recursion triggers a RecursionError stack overflow.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Disaster Early Warning Decision Tree Studio):</strong> During the Early Warning Decision Tree Studio, how did student syndicates structure the priority hierarchy for cold wave frost alerts?</p>
                    <ul>
                        <li>A) Checking relative humidity first and ignoring sub-zero temperatures</li>
                        <li>B) Evaluating temperature <= 0°C at the highest priority root node, followed by wind speed and dew point depression to differentiate black frost from hoar frost</li>
                        <li>C) Placing the emergency alert at the very bottom of an optional else block</li>
                        <li>D) Relying solely on manual SMS messages sent by farmers</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>Evaluating lethal sub-zero temperature at the highest priority root node followed by micro-climate co-factors.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In agricultural risk triage, life-threatening conditions (freezing temperatures) must sit at the top of the decision tree so emergency frost protection (sprinklers, heaters) is triggered immediately without being delayed by secondary criteria.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Ignoring temperature during a frost event leads to total crop freezing.</li>
                                <li><strong>Why C is incorrect:</strong> Burying emergency alerts in an optional else block guarantees warnings are never fired.</li>
                                <li><strong>Why D is incorrect:</strong> Manual SMS is too slow to protect crops from rapid nighttime radiative freezing.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task implementing a Multi-Factor Pest Severity Classifier, what Python construct handled invalid pest count inputs (e.g., negative numbers or None values)?</p>
                    <ul>
                        <li>A) An initial guard clause raising or handling ValueError before proceeding to classification logic</li>
                        <li>B) Ignoring the invalid input and classifying it as 'Low Risk'</li>
                        <li>C) Formatting the hard drive</li>
                        <li>D) Multiplying the negative number by zero silently</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>An initial guard clause raising or handling ValueError before classification logic.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Guard clauses at the top of functions validate inputs immediately. If invalid data enters (e.g., negative insect counts), the guard clause catches it cleanly, preventing corrupted classifications.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Treating negative counts as 'Low Risk' creates silent data corruption.</li>
                                <li><strong>Why C is incorrect:</strong> Formatting hard drives is destructive and irrelevant to input validation.</li>
                                <li><strong>Why D is incorrect:</strong> Silent zeroing obscures sensor telemetry failures.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>You receive laboratory soil test reports for five separate field blocks.</p>
                <p>Writing identical code five separate times wastes time and introduces mistakes.</p>
                <p>You need a fast way to evaluate all soil samples automatically in sequence.</p>
                <p>Loops allow computers to repeat decisions across hundreds of samples effortlessly.</p>
                <p>How do for-loops scan farm datasets and recommend treatments instantly?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> When iterating through 10,000 IoT soil sensor readings, why is an unbounded <code>while True:</code> loop dangerous without a defensive timeout or heartbeat break condition?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> In field deployments, if a hardware sensor disconnects or stops sending line breaks, an unbounded <code>while</code> loop with no timeout blocks CPU execution indefinitely. The application freezes, memory leaks accumulate, and downstream safety monitoring stops entirely. Industrial farm software uses watchdog timers, break conditions, and bounded <code>for</code> loops.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does a drone's spatial field scanning algorithm map a 2D agricultural grid into Python loops?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A drone navigates a farm field using nested loops: an outer loop iterates across latitude transect lines (north-to-south flight lines), while an inner loop iterates across longitude waypoints (east-to-west image capture triggers). This spatial serpentine pattern guarantees complete photographic coverage with consistent 80% image overlap.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a reading of <code>8.2</code> to <code>soil_ph_readings</code>. What treatment does the loop advise for alkaline soil?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Batch Sensor Processing):</strong> In the Teacher's live demonstration, how did the loop handle corrupted sensor readings (e.g., None or 'ERR') without crashing the entire batch processing pipeline?</p>
                    <ul>
                        <li>A) Using the continue statement to skip corrupted entries and log a warning while processing the remaining records</li>
                        <li>B) Using the break statement to shut down the script immediately</li>
                        <li>C) Deleting the entire database file</li>
                        <li>D) Multiplying the error string by 10</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Using the continue statement to skip corrupted records and continue processing valid telemetry.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The <code>continue</code> statement skips the current iteration and jumps immediately to the next loop cycle, allowing batch agricultural pipelines to process millions of valid records even if individual packets are corrupted.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> The <code>break</code> statement terminates the entire loop prematurely, leaving remaining records unparsed.</li>
                                <li><strong>Why C is incorrect:</strong> Deleting files destroys valuable historical data.</li>
                                <li><strong>Why D is incorrect:</strong> Multiplying error strings produces longer error strings and does not resolve the data defect.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Drone Flight Path Traversal Studio):</strong> During the Spatial Grid Traversal Studio, which nested loop structure accurately simulated a serpentine (boustrophedon) drone flight path across an orchard?</p>
                    <ul>
                        <li>A) Outer loop over rows; inner loop over columns with columns reversed on alternate rows using list slicing [::-1]</li>
                        <li>B) An infinite while loop with no coordinate increment</li>
                        <li>C) A single for loop that only visits diagonal coordinates</li>
                        <li>D) Randomly selecting coordinates without tracking visited waypoints</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Outer loop over rows; inner loop over columns with alternate rows reversed to minimize flight turns.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Serpentine lawnmower patterns fly down one crop row and up the adjacent row, reversing direction on alternating rows to conserve drone battery and prevent redundant deadhead transit flights.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Infinite loops without increments freeze the simulator at the first coordinate.</li>
                                <li><strong>Why C is incorrect:</strong> Diagonal visits leave large unmapped triangular zones across the orchard.</li>
                                <li><strong>Why D is incorrect:</strong> Random walks waste battery and produce chaotic gaps in aerial mapping.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a 7-Day Cumulative Revenue Tracker, what loop pattern accumulated daily mandi sales into a rolling sum?</p>
                    <ul>
                        <li>A) cumulative_revenue += daily_sales inside a for loop iterating over the weekly sales list</li>
                        <li>B) cumulative_revenue = daily_sales * 7 outside any loop</li>
                        <li>C) An empty loop that repeatedly prints 'Calculating...'</li>
                        <li>D) Overwriting cumulative_revenue = 0 on every line</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>cumulative_revenue += daily_sales inside a for loop accumulating daily receipts.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The accumulator pattern initializes a running total variable to zero before the loop, then uses the <code>+=</code> augmented assignment operator on each iteration to compute rolling sums.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Multiplying by 7 assumes identical sales every day, ignoring market price fluctuations.</li>
                                <li><strong>Why C is incorrect:</strong> Empty loops perform no mathematical accumulation.</li>
                                <li><strong>Why D is incorrect:</strong> Resetting to zero inside the loop discards all prior accumulated days.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Every planting season, farmers ask how many bags of urea fertilizer to buy.</p>
                <p>Calculating nutrient needs manually for every acre causes errors and delays.</p>
                <p>Agricultural extension workers need a standard calculation tool to reuse every day.</p>
                <p>Python functions package formulas so anyone can reuse them with one click.</p>
                <p>How do reusable functions calculate farm fertilizer requirements cleanly?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is a 500-line monolithic agricultural Python script a maintenance nightmare compared to a modular codebase of small, pure functions?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Monolithic scripts couple everything together: a bug in the moisture-reading code can crash the fertilizer billing logic. Small, modular functions follow the Single Responsibility Principle: each function does exactly one thing (e.g., <code>calculate_et0()</code>, <code>check_frost_risk()</code>). They can be independently tested, reused across different farm projects, and debugged without side effects.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What are 'pure functions' in agricultural calculations, and why are they essential for automated decision verification?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A pure function given the same inputs always returns the exact same output and has zero side effects (it does not modify global variables, write to disk, or alter external hardware). Calculating crop water requirement <code>et0(temp, humidity, radiation)</code> should be pure: it enables researchers to verify mathematical formulas with unit tests without worrying that calling the function accidentally triggers a water valve.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>farm_crop = "maize"</code> and <code>farm_size = 8.0</code>. How many bags of urea are needed?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Refactoring Demo):</strong> In the Teacher's live refactoring session, what was the primary architectural benefit of extracting inline irrigation formulas into a dedicated calculate_gdd(t_max, t_min, t_base) function?</p>
                    <ul>
                        <li>A) Code reusability, testability, and isolated unit verification without duplicating formulas across the project</li>
                        <li>B) Making the code run on quantum computers</li>
                        <li>C) Increasing the file size so it looks more impressive</li>
                        <li>D) Forcing Python to run without an operating system</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Code reusability, testability, and isolated unit testing across crop models.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Growing Degree Day (GDD) calculations are needed across phenology models, harvest forecasting, and pest emergence calculators. Encapsulating GDD logic in a single function ensures uniform agronomic math across the entire codebase.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Functions do not convert code for quantum execution.</li>
                                <li><strong>Why C is incorrect:</strong> Good software engineering minimizes unnecessary lines of code.</li>
                                <li><strong>Why D is incorrect:</strong> Python requires an underlying OS runtime regardless of function modularity.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Open-Source Agri-Python SDK Studio):</strong> During the Open-Source Agri-Python Architecture Studio, what design principle ensured that third-party farm developers could import soil utility functions without running test execution scripts accidentally?</p>
                    <ul>
                        <li>A) Encapsulating executable demonstration code inside the <code>if __name__ == '__main__':</code> guard block</li>
                        <li>B) Password protecting the Python .py file</li>
                        <li>C) Renaming all functions to single-letter names</li>
                        <li>D) Deleting all docstrings and comments</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Encapsulating executable test scripts inside the <code>if __name__ == '__main__':</code> block.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> When a Python file is imported as a module, top-level code runs automatically unless protected by the <code>if __name__ == '__main__':</code> idiom. This ensures library functions can be imported cleanly without running demo code.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Python source files cannot be password protected from the import system.</li>
                                <li><strong>Why C is incorrect:</strong> Single-letter function names violate PEP 8 readability standards.</li>
                                <li><strong>Why D is incorrect:</strong> Docstrings are essential for developer documentation and do not affect module importing.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building an Agricultural Utility Module, what docstring standard provided automated parameter types, return descriptions, and usage examples?</p>
                    <ul>
                        <li>A) Standardized docstrings (e.g., Google or NumPy docstring format) containing Parameters, Returns, and Examples sections</li>
                        <li>B) Writing comments in Microsoft Word and pasting screenshots</li>
                        <li>C) Leaving the function body completely blank</li>
                        <li>D) Encrypting docstrings with base64</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Structured Google/NumPy style docstrings defining Parameters, Types, and Returns.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Professional agricultural software libraries use standard docstring conventions (such as Google or NumPy style) to enable automated documentation generation (Sphinx) and IDE intellisense code completion.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Pasted images cannot be parsed by documentation generators or Python's help() function.</li>
                                <li><strong>Why C is incorrect:</strong> Blank docstrings provide zero documentation to downstream developers.</li>
                                <li><strong>Why D is incorrect:</strong> Base64 encryption prevents humans and IDE tools from reading function documentation.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farm supervisor records daily market rates, borewell GPS locations, and soil cards.</p>
                <p>Wholesale prices change daily, but borewell coordinates must never be altered accidentally.</p>
                <p>Storing all these diverse items in simple numbers causes data corruption.</p>
                <p>Python provides lists, tuples, and dictionaries to manage farm datasets safely.</p>
                <p>Which data structure should you choose for different types of farm information?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why would an AgriTech engineer store GPS boundary coordinates of a farm plot as a list of immutable <code>(lat, lon)</code> tuples rather than mutable lists?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Immutability protects data integrity! A farm's legal spatial boundary coordinates should never be modified accidentally during runtime analysis. Tuples <code>(12.9716, 77.5946)</code> cannot be altered, appended, or popped. Furthermore, because tuples are hashable, they can serve as dictionary keys (e.g., mapping exact GPS coordinates to soil test records).</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> When looking up the real-time sensor reading of 'Plot_742' among 100,000 plots, why is a Python dictionary vastly superior to searching through a Python list?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Time complexity! Searching a Python list requires scanning elements sequentially (O(n) linear time)—checking up to 100,000 items. A Python dictionary uses an underlying hash table to achieve O(1) constant-time lookup. Accessing <code>farm_registry['Plot_742']</code> is virtually instantaneous regardless of whether the farm has 10 plots or 10 million plots.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a new price <code>2400</code> to <code>onion_prices_per_quintal</code> using <code>.append(2400)</code>. What does the latest price show?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Live In-Memory Farm Database Demo):</strong> In the Teacher's live demonstration, how did the data structure choice impact the performance of retrieving crop records across 50,000 farm plots?</p>
                    <ul>
                        <li>A) Dictionary key lookups executed in O(1) constant time, while searching an unsorted list required slow O(n) linear scans</li>
                        <li>B) Lists were 1,000x faster than dictionaries because lists have no keys</li>
                        <li>C) Dictionaries crashed the server due to lack of hash functions</li>
                        <li>D) Both structures performed identically at all scales</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Dictionary key lookups operated in O(1) constant time versus O(n) linear list scans.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Hash-based key-value lookups in Python dictionaries provide O(1) time complexity, making them the standard choice for in-memory indexing of large agricultural asset registries.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Lists require sequential linear traversal, making lookups significantly slower on large datasets.</li>
                                <li><strong>Why C is incorrect:</strong> Python dictionaries natively implement robust built-in cryptographic hashing.</li>
                                <li><strong>Why D is incorrect:</strong> At 50,000 elements, O(1) vs O(n) difference is orders of magnitude in execution speed.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Precision Farm Digital Twin Studio):</strong> During the Digital Twin Architecture Studio, which compound Python data structure was chosen to model an entire agricultural cooperative containing multiple farms, plots, and daily sensor streams?</p>
                    <ul>
                        <li>A) A dictionary of farms, where each farm contains a list of plot dictionaries, and each plot contains a list of sensor reading tuples</li>
                        <li>B) A single flat list containing all numbers mixed together</li>
                        <li>C) A tuple of immutable strings with no numeric values</li>
                        <li>D) A set of random floating-point values</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>A nested dictionary hierarchy of farms, plots, and sensor reading tuples.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Agricultural systems have natural physical hierarchies (Cooperative -> Farms -> Plots -> Sensors -> Readings). Nested dictionaries and lists mirror this taxonomy cleanly, facilitating intuitive dot/bracket data access.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Flat unstructured lists lose all relational associations between farms and sensors.</li>
                                <li><strong>Why C is incorrect:</strong> Tuples of strings cannot store multi-level numerical telemetry.</li>
                                <li><strong>Why D is incorrect:</strong> Sets do not preserve order, cannot store duplicates, and lack key-value mapping.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Farm Plot Database, which dictionary method safely retrieved the nitrogen level for 'Plot_99' without throwing a KeyError if the plot was not yet registered?</p>
                    <ul>
                        <li>A) farm_data.get('Plot_99', {'nitrogen': 0, 'status': 'Unregistered'})</li>
                        <li>B) farm_data['Plot_99'] directly without error handling</li>
                        <li>C) farm_data.delete()</li>
                        <li>D) farm_data.keys()[99]</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>farm_data.get('Plot_99', default) returned default values safely without crashing on missing keys.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Direct bracket indexing <code>dict[key]</code> raises an unhandled KeyError when a key is absent. The <code>.get(key, default)</code> method provides defensive access, returning a sensible fallback without halting execution.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Direct bracket indexing throws an immediate KeyError on missing keys.</li>
                                <li><strong>Why C is incorrect:</strong> There is no <code>.delete()</code> method on Python dictionaries; the keyword is <code>del</code>.</li>
                                <li><strong>Why D is incorrect:</strong> In Python 3, <code>dict.keys()</code> returns a view object that does not support integer index slicing.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An automated field telemetry modem sends sensor updates over cellular SMS.</p>
                <p>The text message arrives filled with extra spaces, colons, and hash symbols.</p>
                <p>Python programs cannot perform math on messy raw strings directly.</p>
                <p>We must clean and parse the text to extract usable numeric sensor values.</p>
                <p>How do string methods clean messy field telemetry data?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> A farmer sends an SMS in Kannada or Hindi: 'ನನ್ನ ಹೊಲದಲ್ಲಿ ಎಲೆಗಳು ಹಳದಿಯಾಗುತ್ತಿವೆ' ('Leaves are turning yellow in my field'). Why can't traditional ASCII string methods process this, and how does UTF-8 encoding solve regional AgriTech communication?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> ASCII uses 7 bits and can only represent 128 English characters. Non-Latin Indian languages require Unicode (UTF-8), which uses variable multi-byte sequences (up to 4 bytes per character). AgriTech platforms serving rural smallholders must configure string pipelines with UTF-8 encoding to prevent garbled text ('mojibake') and ensure natural language queries in regional dialects are processed correctly.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why is parsing raw NMEA GPS sentences from tractor telemetry (<code>$GPRMC,123519,A,4807.038,N,01131.000,E...</code>) using string splitting and formatting critical for precision spraying?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Agricultural machinery communicates via standard NMEA text protocols over serial/CAN buses. The raw string contains comma-delimited tokens: fix validity, latitude, longitude, knots, and date. String parsing functions must strip whitespace, split on commas, validate the checksum token, and convert latitude/longitude from degrees-minutes format into decimal degrees for GIS mapping.</p>
                        </div>
                    </details>
                </div>
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

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Raw SMS:</strong> '   #PLOT:02#MOISTURE:18.5#TEMP:33.0#STATUS:DRY   \n'.</li>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>raw_sms_telemetry = " #PLOT:07#MOISTURE:41.2#STATUS:WET "</code>. Does your cleaner parse the new plot number correctly?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live NMEA GPS Parser):</strong> In the Teacher's live NMEA GPS parsing demonstration, how did the script extract decimal latitude from the raw token '1258.4567,N'?</p>
                    <ul>
                        <li>A) By extracting degrees via string slice [:2], converting minutes [2:] to float, dividing by 60, and summing the parts: float(lat[:2]) + float(lat[2:])/60</li>
                        <li>B) By deleting the letter 'N' and treating the rest as a raw integer</li>
                        <li>C) By converting the entire string into uppercase</li>
                        <li>D) By replacing all numbers with zeroes</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Extracted 2-digit degrees, divided remaining minutes by 60, and summed into decimal degrees.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> NMEA GPS sentences format latitude as DDMM.MMMM (Degrees and Decimal Minutes). Converting to standard GIS decimal degrees requires splitting degrees from minutes, dividing minutes by 60, and applying sign based on N/S hemisphere.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Treating DDMM.MMMM as a raw integer produces coordinates hundreds of miles off target.</li>
                                <li><strong>Why C is incorrect:</strong> Uppercase transformation does not perform coordinate math.</li>
                                <li><strong>Why D is incorrect:</strong> Zeroing numbers annihilates the location data.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Farmer NLP & Dialect Normalization Studio):</strong> During the Farmer Text Normalization Studio, what string preprocessing sequence cleaned messy SMS inputs (e.g., '  FERTILIZER  pRiCe??? 
') before routing to the advisory database?</p>
                    <ul>
                        <li>A) text.strip().lower().replace('?', '') to remove whitespace, normalize casing, and strip punctuation</li>
                        <li>B) text.upper() without removing punctuation or trailing whitespace</li>
                        <li>C) Reversing the string backwards</li>
                        <li>D) Multiplying the string by 3</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Chained .strip().lower().replace() to clean whitespace, standardize case, and sanitize punctuation.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Text preprocessing pipelines standardize user input by stripping leading/trailing whitespace and newlines, lowercasing all tokens, and removing extraneous punctuation to enable reliable keyword lookup.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Uppercasing leaves whitespace and punctuation intact, causing database query mismatches.</li>
                                <li><strong>Why C is incorrect:</strong> Reversing strings turns text into unreadable gibberish.</li>
                                <li><strong>Why D is incorrect:</strong> String multiplication repeats errors without cleaning data.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building an Automated Weather Alert & SMS Advisory Generator, what Python feature constructed multi-variable messages cleanly?</p>
                    <ul>
                        <li>A) Formatted string literals (f-strings) like f'Alert: {crop} in plot {plot_id} faces {temp}°C heat stress!'</li>
                        <li>B) Manually concatenating 20 separate string variables using the + operator</li>
                        <li>C) Writing messages on paper and scanning them</li>
                        <li>D) Printing the variable names without their values</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Python f-strings (f'...') interpolating dynamic variables directly into the message template.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> F-strings (formatted string literals) provide readable, performant, and maintainable string interpolation in Python, allowing expressions and variables to be embedded directly within string templates.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Manual + concatenation is brittle, verbose, and requires repetitive str() type casting.</li>
                                <li><strong>Why C is incorrect:</strong> Manual paper scanning cannot be automated in software.</li>
                                <li><strong>Why D is incorrect:</strong> Printing variable names fails to deliver actual sensor values to farmers.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A weather station records rainfall and moisture numbers every thirty minutes.</p>
                <p>If power cuts off, temporary computer memory loses all measurements instantly.</p>
                <p>Long-term agronomic research requires permanent files saved on hard drives.</p>
                <p>File handling writes farm measurements into permanent CSV text files on disk.</p>
                <p>How do we write and read permanent farm log files in Python?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> If a background Python process writes real-time greenhouse sensor data to a CSV file every 10 seconds, what happens if the server loses power while the file is opened with standard <code>open()</code> without a <code>with</code> context manager?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> If power cuts while a file buffer is held in memory, the operating system never writes the buffer to physical disk, resulting in a zero-byte corrupted file and total data loss. Using <code>with open(...) as f:</code> ensures that context managers flush buffers and close file descriptors automatically, even during unexpected power cuts or runtime exceptions.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why do large-scale agricultural monitoring systems prefer appending (<code>mode='a'</code>) to daily rotating log files rather than overwriting (<code>mode='w'</code>) or loading giant single files?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Overwriting (<code>mode='w'</code>) destroys historical records instantly upon opening. Conversely, loading a multi-gigabyte monolithic file into memory just to add one sensor row causes memory exhaustion. Appending (<code>mode='a'</code>) appends new telemetry rows directly to the end of the file on disk in O(1) time without reading previous data, preserving continuous immutable audit logs.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add <code>file_handle.write("Thursday,22.0,31.0\n")</code> to Step 1. Run the script again. What is the updated total rainfall?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Telemetry Context Management):</strong> In the Teacher's live demonstration of telemetry file I/O, what construct guaranteed that the sensor data file closed properly even when an unhandled exception occurred during writing?</p>
                    <ul>
                        <li>A) The with open(...) as file_handle: context manager block</li>
                        <li>B) Calling file_handle.close() at the very end of the script after the error</li>
                        <li>C) Relying on the Windows or Linux OS to close files eventually</li>
                        <li>D) Turning off the computer monitor</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>The with context manager guaranteed automated file flushing and closing under all conditions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Python's <code>with</code> statement implements context management protocols (__enter__ and __exit__). It guarantees that file handles are safely closed and buffers flushed, even if catastrophic exceptions occur inside the block.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> If an exception occurs before reaching .close(), the call is never executed, leaking file handles.</li>
                                <li><strong>Why C is incorrect:</strong> Relying on OS garbage collection risks buffer corruption and file locking conflicts.</li>
                                <li><strong>Why D is incorrect:</strong> Monitor states have zero impact on disk I/O management.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Multi-Plot CSV Merge Syndicate):</strong> During the Multi-Plot CSV Merge Syndicate, how did student teams combine 50 independent plot CSV files into a unified master ledger without duplicating the column header row 50 times?</p>
                    <ul>
                        <li>A) Writing the header line only on the first file (index == 0), then skipping line 1 (header) for all subsequent files using csv_reader or itertools.islice()</li>
                        <li>B) Leaving all 50 header rows throughout the middle of the dataset</li>
                        <li>C) Deleting all text from the files</li>
                        <li>D) Renaming the files to .jpg</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Wrote the header only once from the initial file and stripped headers from all subsequent appends.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Merging batch agricultural CSVs requires defensive header management: writing the schema header once at the start of the master file, then skipping the first line of subsequent files to maintain clean, uninterrupted numerical rows.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Interleaving header strings inside numerical data rows crashes downstream pandas parsers.</li>
                                <li><strong>Why C is incorrect:</strong> Deleting text destroys the experimental data.</li>
                                <li><strong>Why D is incorrect:</strong> Renaming file extensions does not alter underlying text content.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building an Automated Daily Farm Journal Logger, what file open mode ensured new sensor readings were added to the end of today's log without erasing morning data?</p>
                    <ul>
                        <li>A) mode='a' (append mode)</li>
                        <li>B) mode='w' (write mode)</li>
                        <li>C) mode='r' (read-only mode)</li>
                        <li>D) mode='x' (exclusive creation mode)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>mode='a' (append mode) appended new telemetry records without overwriting existing entries.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Open mode 'a' places the file pointer at the end of the file. If the file exists, new write operations append data to the end; if it does not exist, a new file is created. Mode 'w' truncates the file to 0 bytes immediately upon opening.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Write mode ('w') instantly truncates and erases all prior data in the file.</li>
                                <li><strong>Why C is incorrect:</strong> Read-only mode ('r') disallows write operations, throwing an io.UnsupportedOperation error.</li>
                                <li><strong>Why D is incorrect:</strong> Exclusive mode ('x') throws a FileExistsError if the log already exists.</li>
                            </ul>
                        </div>
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
