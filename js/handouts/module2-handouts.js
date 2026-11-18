// Module 2 Comprehensive Handouts - Part 1 (m2-t1 to m2-t13)
// NumPy, Pandas, and Visualization Topics

const module2Handouts = {
    'm2-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 NumPy: Arrays and Operations</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create NumPy arrays from farm data</li>
                    <li>Perform array indexing and slicing</li>
                    <li>Apply mathematical operations on arrays</li>
                    <li>Understand array shapes and dimensions</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>NumPy Arrays = Organized Seed Trays</strong></p>
                    <p>Just as a seed tray holds seeds in organized rows and columns, NumPy arrays hold numbers in structured formats for efficient processing.</p>
                    <p>Processing 1000 soil samples? NumPy does it in one operation instead of 1000 loops!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np

# === CREATING ARRAYS ===
print("=== Creating NumPy Arrays ===")

# From list
yields = np.array([2500, 2800, 3100, 2900, 2700])
print(f"Yields: {yields}")
print(f"Type: {type(yields)}")

# Using arange (like range, but for arrays)
plot_numbers = np.arange(1, 6)
print(f"Plots: {plot_numbers}")

# Using linspace (evenly spaced)
temperatures = np.linspace(20, 35, 5)
print(f"Temperature range: {temperatures}")

# 2D Array (matrix) - farm grid
farm_grid = np.array([
    [2500, 2600, 2700],
    [2800, 2900, 3000],
    [2400, 2500, 2600]
])
print(f"\\nFarm Grid:\\n{farm_grid}")
print(f"Shape: {farm_grid.shape}")  # 3 rows, 3 columns

# === INDEXING AND SLICING ===
print("\\n=== Indexing and Slicing ===")

# Access elements
print(f"First yield: {yields[0]}")
print(f"Last yield: {yields[-1]}")
print(f"First 3 yields: {yields[:3]}")

# 2D indexing
print(f"Center plot yield: {farm_grid[1, 1]}")
print(f"First row: {farm_grid[0]}")
print(f"Last column: {farm_grid[:, -1]}")

# === ARRAY OPERATIONS ===
print("\\n=== Array Operations ===")

# Math on entire arrays (vectorized!)
yields_tons = yields / 1000
print(f"Yields in tons: {yields_tons}")

# Bonus calculation
bonus = np.where(yields > 2800, 500, 0)
print(f"Bonus per plot: {bonus}")

# Statistics
print(f"\\nTotal yield: {np.sum(yields)} kg")
print(f"Average: {np.mean(yields):.0f} kg")
print(f"Std Dev: {np.std(yields):.0f} kg")
print(f"Max: {np.max(yields)} kg, Min: {np.min(yields)} kg")

# Boolean filtering
high_yield_plots = yields[yields > 2700]
print(f"High yield plots (>2700): {high_yield_plots}")
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
                            <h3>Live Multi-Plot Sensor Array Slicing & Vectorization Benchmark</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates NumPy vectorization live on the projector using an array of 50 plot soil sensors:</p>
                            <ul>
                                <li>Creates 1D and 2D arrays representing volumetric water content and soil electrical conductivity across research plots.</li>
                                <li>Demonstrates boolean masking live: <code>critical_plots = moisture[moisture &lt; 25.0]</code> and updates dry plots instantaneously without loops.</li>
                                <li>Benchmarks execution time: reveals how vectorized array thresholding runs 80&times; faster than standard Python list iteration.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive live demonstration script showing boolean indexing, memory strides, and execution speedup.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>High-Density Sensor Mesh Layout & Indexing Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student cohorts in designing an in-memory NumPy data structure for a 100-node experimental orchard mesh:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we represent multi-depth soil sensors (15cm, 30cm, 60cm) across 25 grid sectors in a single 3D NumPy array?</li>
                                <li><strong>Collaborative Design:</strong> Faculty and student groups determine axis conventions: <code>shape = (sectors, depths, timesteps)</code>, practice multi-dimensional slicing, and compute depth-wise soil moisture gradients.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-designed 3D Sensor Array Architecture Specification with verified slicing syntax.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Soil Sample Vector Comparison & Anomaly Audit</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a raw dataset array of 15 soil test results (pH, Nitrogen ppm, Organic Carbon %):</p>
                            <ul>
                                <li>Use NumPy slicing and boolean masks to isolate acidic plots (pH &lt; 6.0) and low-nitrogen zones (N &lt; 50 kg/ha).</li>
                                <li>Perform min-max normalization: $\mathbf{X}_{\text{norm}} = \frac{\mathbf{X} - \min(\mathbf{X})}{\max(\mathbf{X}) - \min(\mathbf{X})}$.</li>
                                <li>Calculate pairwise Euclidean distance between each plot and a benchmark reference plot, identifying the most stressed management zones.</li>
                                <li>Swap normalization pipelines with a peer team for cross-verification.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative NumPy analysis notebook with verified normalization outputs and peer audit grades.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code an Array Normalization & Thresholding Script</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write an independent Python script using NumPy to analyze a 12-sample farm array:</p>
                            <ul>
                                <li>Create a 1D array of soil pH readings: <code>[6.2, 5.8, 7.1, 6.5, 5.5, 6.8, 7.3, 6.0, 5.9, 6.7, 5.2, 7.6]</code>.</li>
                                <li>Calculate array mean, standard deviation, and median using built-in NumPy methods.</li>
                                <li>Count and extract all acidic samples (pH &lt; 6.5) using boolean masking without writing any <code>for</code> loops.</li>
                                <li>Apply min-max scaling to transform the values into a normalized $[0, 1]$ index.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook displaying array declarations, boolean index selections, and normalized arrays.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the main advantage of NumPy over Python lists?</p>
                    <ul>
                        <li>A) Easier syntax</li>
                        <li>B) Vectorized operations (faster)</li>
                        <li>C) More data types</li>
                        <li>D) Prettier output</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - NumPy performs operations on entire arrays at once, making it much faster than loops.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What does <code>arr[1:4]</code> return?</p>
                    <ul>
                        <li>A) Elements at index 1, 2, 3, 4</li>
                        <li>B) Elements at index 1, 2, 3</li>
                        <li>C) Elements at index 0, 1, 2, 3</li>
                        <li>D) Error</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Slicing is exclusive of the end index (1 to 3 inclusive).</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>NumPy arrays are faster and more memory-efficient than lists</li>
                    <li>Use np.array() to create arrays from lists</li>
                    <li>Indexing: [row, col] for 2D arrays</li>
                    <li>Vectorized operations apply to all elements at once</li>
                    <li>Built-in functions: sum, mean, std, max, min</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Matrix Operations</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Perform matrix multiplication</li>
                    <li>Calculate transpose and determinant</li>
                    <li>Apply matrix operations to farm data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Matrix Operations = Combining Farm Data Layers</strong></p>
                    <p>Imagine overlaying soil maps with water maps and sunlight maps - matrix operations help combine these "layers" mathematically!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np

# === MATRIX CREATION ===
print("=== Matrix Creation ===")

# Farm data: 3 plots, 4 factors each
# Columns: temp, rain, pH, fertilizer
farm_factors = np.array([
    [28, 150, 6.5, 50],
    [30, 120, 6.8, 45],
    [26, 180, 6.2, 60]
])
print(f"Farm Factors (3x4):\\n{farm_factors}")

# Weights for yield prediction
weights = np.array([[10], [5], [100], [20]])  # 4x1
print(f"\\nWeights (4x1):\\n{weights.flatten()}")

# === MATRIX MULTIPLICATION ===
print("\\n=== Matrix Multiplication ===")

# Predicted yields = factors @ weights + base
base_yield = 1000
predicted_yields = farm_factors @ weights + base_yield
print(f"Predicted Yields:\\n{predicted_yields.flatten()}")

# === TRANSPOSE ===
print("\\n=== Transpose ===")
print(f"Original shape: {farm_factors.shape}")
print(f"Transposed shape: {farm_factors.T.shape}")
print(f"Transposed:\\n{farm_factors.T}")

# === ELEMENT-WISE VS MATRIX OPERATIONS ===
print("\\n=== Element-wise vs Matrix ===")
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print(f"A * B (element-wise):\\n{A * B}")
print(f"A @ B (matrix multiply):\\n{A @ B}")

# === PRACTICAL: NUTRIENT CALCULATION ===
print("\\n=== Fertilizer Mix Calculation ===")
# NPK requirements per crop (kg/ha)
npk_needs = np.array([
    [120, 60, 40],   # Wheat
    [100, 50, 50],   # Rice
    [80, 40, 30]     # Millet
])

# Area of each crop (hectares)
areas = np.array([[5], [3], [2]])  # Column vector

# Total NPK needed = crops × areas
total_npk = npk_needs.T @ areas
print(f"Total N needed: {total_npk[0][0]} kg")
print(f"Total P needed: {total_npk[1][0]} kg")
print(f"Total K needed: {total_npk[2][0]} kg")
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
                            <h3>Live Matrix-Vector Nutrient & Economic Allocation Walkthrough</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates matrix multiplication live in Colab to solve multi-crop fertilizer allocation:</p>
                            <ul>
                                <li>Defines a $3 \times 3$ crop requirement matrix (Wheat, Rice, Maize requiring N, P, K kg/ha) and a $3 \times 1$ crop area vector.</li>
                                <li>Live-codes the dot product <code>total_nutrients = npk_matrix.T @ area_vector</code> and shows how inner dimensions must match $(3 \times 3) \times (3 \times 1) = (3 \times 1)$.</li>
                                <li>Demonstrates what happens when dimensions are mismatched (triggers <code>ValueError: shapes not aligned</code>) and how to transpose matrices safely with <code>.T</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive live demonstration script verifying matrix dimension rules and calculating multi-plot nutrient totals.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Multi-Factor Crop Yield Transformation Matrix Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in formalizing multi-factor agricultural yield models using linear algebraic transformations:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we model the combined impact of 4 weather and soil features across 10 distinct farm plots in a single compact matrix equation: $\mathbf{\hat{y}} = \mathbf{X}\mathbf{w} + b$?</li>
                                <li><strong>Collaborative Design:</strong> Faculty and student cohorts define the design matrix $\mathbf{X}$ ($10 \times 4$), initialize weight vectors representing sensitivity coefficients, and compute predicted yield vectors simultaneously.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-designed Agricultural Transformation Matrix Formula Sheet verified by faculty.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Farm Input Cost & Revenue Matrix Calculator Challenge</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a multi-crop enterprise dataset:</p>
                            <ul>
                                <li>Input Requirement Matrix ($4 \times 3$: Seeds, Fertilizer, Water, Labor required for 3 crops: Cotton, Groundnut, Sugarcane).</li>
                                <li>Input Unit Cost Vector ($4 \times 1$: Cost per unit of each input in ₹).</li>
                                <li>Calculate total production cost per hectare for each crop using matrix multiplication.</li>
                                <li>Given market price and expected yield, calculate net profit vectors and cross-verify results with a peer syndicate.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative matrix cost calculator notebook with peer verification sign-off.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a NumPy Matrix Engine for Farm Economics</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone Python program using NumPy matrix operations:</p>
                            <ul>
                                <li>Create a $4 \times 3$ matrix representing fertilizer needs (N, P, K) for 4 farm plots.</li>
                                <li>Multiply by a $3 \times 1$ cost vector <code>[15.0, 32.0, 35.0]</code> (cost per kg of N, P, K) to find total fertilizer expenditure per plot.</li>
                                <li>Compute the transpose of the matrix and find plot-wise and nutrient-wise sums using <code>np.sum(axis=0)</code> and <code>np.sum(axis=1)</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook displaying matrix declarations, dot products, transpositions, and formatted cost summaries.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> For A (3×4) and B (4×2), what is the shape of A @ B?</p>
                    <ul>
                        <li>A) 3×4</li>
                        <li>B) 4×4</li>
                        <li>C) 3×2</li>
                        <li>D) Error - incompatible</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - (3×4) @ (4×2) = (3×2). Inner dimensions must match.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>@ operator for matrix multiplication, * for element-wise</li>
                    <li>.T gives the transpose</li>
                    <li>Matrix ops are core to ML predictions</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t5': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Pandas: Introduction and Series</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand what Pandas is and why it's used</li>
                    <li>Create and manipulate Series objects</li>
                    <li>Access data using labels and positions</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Pandas = Your Farm's Digital Ledger</strong></p>
                    <p>Excel on steroids! Pandas handles all your farm records - crops, yields, costs - with powerful analysis capabilities built in.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# === PANDAS SERIES ===
print("=== Creating Pandas Series ===")

# From list with default index
yields = pd.Series([2500, 2800, 3100, 2900])
print(yields)

# With custom index (plot names)
yields = pd.Series(
    [2500, 2800, 3100, 2900],
    index=['Plot_A', 'Plot_B', 'Plot_C', 'Plot_D'],
    name='Yield_kg'
)
print(f"\\nYields with labels:\\n{yields}")

# From dictionary
soil_ph = pd.Series({
    'Field_1': 6.5,
    'Field_2': 7.1,
    'Field_3': 5.8,
    'Field_4': 6.8
})
print(f"\\nSoil pH:\\n{soil_ph}")

# === ACCESSING DATA ===
print("\\n=== Accessing Data ===")
print(f"Plot_B yield: {yields['Plot_B']}")
print(f"First yield: {yields.iloc[0]}")
print(f"Last two: {yields.iloc[-2:]}")

# Boolean selection
high_yield = yields[yields > 2700]
print(f"\\nHigh yields (>2700):\\n{high_yield}")

# === SERIES OPERATIONS ===
print("\\n=== Operations ===")
print(f"Mean yield: {yields.mean():.0f}")
print(f"Total yield: {yields.sum()}")

# Apply function
yields_tons = yields / 1000
print(f"\\nIn tons:\\n{yields_tons}")

# Modify with condition
bonus = yields.apply(lambda x: 500 if x > 2800 else 0)
print(f"\\nBonus:\\n{bonus}")
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
                            <h3>Live Series Indexing & Temporal Slicing Demonstration</h3>
                            <p><strong>Educator Action:</strong> The instructor live-codes a Pandas Series in Google Colab representing 12 months of rainfall and crop market prices:</p>
                            <ul>
                                <li>Demonstrates custom label indexing versus integer indexing (<code>series.loc['Jul']</code> vs <code>series.iloc[6]</code>).</li>
                                <li>Live-demonstrates vectorized arithmetic: converting mm rainfall to m&sup3;/ha water volume, and calculating percentage deviation from the long-term historical mean.</li>
                                <li>Shows handling of <code>NaN</code> missing values and demonstrates <code>.describe()</code> summary metrics on agricultural series.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive live demonstration script showing Series creation, label indexing, and mathematical transformations.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Mandi Price Trend & Moving Average Series Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in modeling daily wholesale prices for tomato crops across regional APMC markets:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we compute a 7-day rolling moving average series (<code>series.rolling(7).mean()</code>) to smooth out extreme weekend arrival price volatility?</li>
                                <li><strong>Collaborative Design:</strong> Faculty and student cohorts write boolean query masks to detect emergency market collapse flags (daily price &lt; 50% of the 30-day moving average).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-designed Market Price Series Analysis Notebook reviewed by faculty with automated volatility alert rules.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Village Rainfall Series Triage & Drought Flagging Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive monthly rainfall Series data for 8 neighboring villages in an arid taluk:</p>
                            <ul>
                                <li>Identify monsoon months (rainfall &gt; 100mm) and calculate drought deficit percentages for each village.</li>
                                <li>Use <code>.apply()</code> with a custom lambda function to assign drought relief eligibility flags (Eligible if seasonal total &lt; 400mm).</li>
                                <li>Exchange Series pipelines with another syndicate to audit indexing logic and edge cases.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative Pandas Series drought assessment report verified through cross-team auditing.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a 12-Month Agro-Climatic Series in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write an independent script creating a custom-indexed Pandas Series:</p>
                            <ul>
                                <li>Create a Series of 12 monthly rainfall values with month abbreviations as explicit string indices (<code>'Jan'</code> through <code>'Dec'</code>).</li>
                                <li>Query rainfall for peak monsoon months using <code>.loc[['Jun', 'Jul', 'Aug', 'Sep']]</code>.</li>
                                <li>Find the maximum and minimum rainfall months along with their index labels using <code>.idxmax()</code> and <code>.idxmin()</code>.</li>
                                <li>Calculate the cumulative sum across the year using <code>.cumsum()</code> and print a formatted summary report.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook displaying the custom-indexed Series, slice queries, and cumulative statistics.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is a Pandas Series?</p>
                    <ul>
                        <li>A) A 2D table</li>
                        <li>B) A 1D labeled array</li>
                        <li>C) A Python list</li>
                        <li>D) A database</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - A Series is a one-dimensional labeled array.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Pandas is the go-to library for data analysis</li>
                    <li>Series = 1D labeled array (like a column)</li>
                    <li>Access by label or position (.loc vs .iloc)</li>
                    <li>Built-in statistics: mean(), sum(), max(), etc.</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t6': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 DataFrames Manipulation</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create DataFrames from various sources</li>
                    <li>Select, add, and remove columns</li>
                    <li>Filter and sort data</li>
                    <li>Apply operations across rows and columns</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>DataFrame = Complete Farm Record Book</strong></p>
                    <p>A DataFrame is like a spreadsheet with your entire farm data - plots as rows, measurements as columns. Query any combination instantly!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd

# === CREATING DATAFRAMES ===
print("=== Creating DataFrames ===")

# From dictionary
farm_data = pd.DataFrame({
    'plot': ['A', 'B', 'C', 'D', 'E'],
    'area_ha': [2.5, 3.0, 1.8, 2.2, 2.8],
    'crop': ['Wheat', 'Rice', 'Wheat', 'Cotton', 'Rice'],
    'yield_kg': [2500, 3200, 2800, 1800, 3100],
    'irrigated': [True, True, False, True, True]
})
print(farm_data)

# === SELECTING DATA ===
print("\\n=== Selecting Columns ===")
print(farm_data['crop'])
print(farm_data[['plot', 'yield_kg']])

# === FILTERING ROWS ===
print("\\n=== Filtering ===")
wheat_plots = farm_data[farm_data['crop'] == 'Wheat']
print(f"Wheat plots:\\n{wheat_plots}")

high_yield = farm_data[farm_data['yield_kg'] > 2700]
print(f"\\nHigh yield plots:\\n{high_yield}")

# Multiple conditions
irrigated_wheat = farm_data[
    (farm_data['crop'] == 'Wheat') & 
    (farm_data['irrigated'] == True)
]
print(f"\\nIrrigated wheat:\\n{irrigated_wheat}")

# === ADDING COLUMNS ===
print("\\n=== Adding Columns ===")
farm_data['yield_per_ha'] = farm_data['yield_kg'] / farm_data['area_ha']
farm_data['total_yield'] = farm_data['yield_kg'] * farm_data['area_ha']
print(farm_data)

# === SORTING ===
print("\\n=== Sorting ===")
sorted_df = farm_data.sort_values('yield_kg', ascending=False)
print(sorted_df)

# === BASIC STATISTICS ===
print("\\n=== Statistics ===")
print(f"Total area: {farm_data['area_ha'].sum():.1f} ha")
print(f"Average yield: {farm_data['yield_kg'].mean():.0f} kg")
print(f"\\nSummary:\\n{farm_data.describe()}")
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
                            <h3>Live Multi-Column Farm DataFrame Engineering & Filtering</h3>
                            <p><strong>Educator Action:</strong> The instructor live-codes DataFrame operations on a simulated 20-plot agricultural enterprise dataset in Google Colab:</p>
                            <ul>
                                <li>Demonstrates column creation through broadcasting: <code>df['total_revenue'] = df['yield_kg'] * df['price_per_kg']</code> and <code>df['net_profit'] = df['total_revenue'] - df['total_cost']</code>.</li>
                                <li>Live-demonstrates multi-condition filtering: selecting all organic plots producing above-average yield with irrigation costs &lt; ₹5,000.</li>
                                <li>Shows how <code>.assign()</code> and <code>.drop()</code> modify DataFrames cleanly without setting-with-copy warnings.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live demonstration script generating financial columns and filtered subset DataFrames on screen.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Cooperative Farm Production Ledger Schema Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in structuring an end-to-end production ledger for an Agricultural Producer Organization (FPO) with 50 member farmers:</p>
                            <ul>
                                <li><strong>Faculty Guidance:</strong> Directs teams on data types, index choices, and calculated performance indicators: <em>Yield per Hectare, Input Cost Efficiency Ratio, and Water Productivity Index</em>.</li>
                                <li><strong>Collaborative Work:</strong> Groups implement custom column calculations using vectorized operations and lambda expressions, stress-testing with zero-yield and missing cost edge cases.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An audited FPO Production Ledger DataFrame Schema with verified KPI formulas.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Plot Profitability Ranking & Multi-Criteria Selection Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a raw DataFrame of 15 commercial horticulture plots:</p>
                            <ul>
                                <li>Add calculated columns: <code>yield_per_acre</code>, <code>gross_income</code>, <code>production_cost</code>, and <code>net_margin_pct</code>.</li>
                                <li>Rank the top 3 and bottom 3 performing plots using <code>.sort_values(by='net_margin_pct', ascending=False)</code>.</li>
                                <li>Compute group-wise averages by crop type using <code>.groupby('crop')['net_margin_pct'].mean()</code>.</li>
                                <li>Swap DataFrames with another syndicate to audit calculation accuracy and logic integrity.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative plot profitability report with peer verification sign-off.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a 10-Plot Agricultural Management DataFrame</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent agricultural DataFrame modeling 10 diverse farm plots:</p>
                            <ul>
                                <li>Include columns: <code>plot_id</code>, <code>crop</code>, <code>area_ha</code>, <code>yield_kg</code>, <code>irrigation_cost</code>, and <code>fertilizer_cost</code>.</li>
                                <li>Create a new column <code>profit</code> assuming crop prices: Wheat (₹25/kg), Rice (₹30/kg), Cotton (₹65/kg).</li>
                                <li>Filter and display all plots with profit &gt; ₹50,000 using boolean indexing.</li>
                                <li>Export the top 5 most profitable plots to a clean CSV file <code>top_profitable_plots.csv</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook showing DataFrame construction, column engineering, filtering, and CSV export.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> How do you select multiple columns in Pandas?</p>
                    <ul>
                        <li>A) df['col1', 'col2']</li>
                        <li>B) df[['col1', 'col2']]</li>
                        <li>C) df.select('col1', 'col2')</li>
                        <li>D) df.cols(['col1', 'col2'])</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Use double brackets with a list of column names.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>DataFrame = 2D table with labeled rows and columns</li>
                    <li>Select: df['col'] or df[['col1', 'col2']]</li>
                    <li>Filter: df[condition]</li>
                    <li>Add column: df['new'] = values</li>
                    <li>describe() gives quick statistics</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Matplotlib: Basic Plotting</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Create line plots for time series data</li>
                    <li>Build scatter plots for relationships</li>
                    <li>Make bar charts for comparisons</li>
                    <li>Customize plots with labels and colors</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Visualizations = Farm Maps & Charts</strong></p>
                    <p>Just as a picture is worth a thousand words, a good chart reveals patterns invisible in raw numbers!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import matplotlib.pyplot as plt
import numpy as np

# === LINE PLOT ===
print("Creating line plot...")
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
rainfall = [20, 25, 40, 80, 150, 300]

plt.figure(figsize=(10, 5))
plt.plot(months, rainfall, marker='o', color='blue', linewidth=2)
plt.title('Monthly Rainfall - 2024', fontsize=14)
plt.xlabel('Month')
plt.ylabel('Rainfall (mm)')
plt.grid(True, alpha=0.3)
plt.show()

# === SCATTER PLOT ===
print("Creating scatter plot...")
fertilizer = np.array([20, 30, 40, 50, 60, 70, 80])
yield_kg = np.array([2000, 2200, 2600, 2900, 3100, 3200, 3150])

plt.figure(figsize=(10, 5))
plt.scatter(fertilizer, yield_kg, c='green', s=100, alpha=0.7)
plt.title('Fertilizer vs Yield Relationship')
plt.xlabel('Fertilizer (kg/ha)')
plt.ylabel('Yield (kg/ha)')

# Add trend line
z = np.polyfit(fertilizer, yield_kg, 1)
p = np.poly1d(z)
plt.plot(fertilizer, p(fertilizer), "r--", label='Trend')
plt.legend()
plt.show()

# === BAR CHART ===
print("Creating bar chart...")
crops = ['Wheat', 'Rice', 'Cotton', 'Sugarcane']
yields = [2800, 3500, 1500, 8000]
colors = ['gold', 'lightgreen', 'lightblue', 'coral']

plt.figure(figsize=(10, 5))
plt.bar(crops, yields, color=colors, edgecolor='black')
plt.title('Crop Yields Comparison')
plt.xlabel('Crop')
plt.ylabel('Yield (kg/ha)')

# Add value labels
for i, v in enumerate(yields):
    plt.text(i, v + 100, str(v), ha='center')
plt.show()

# === MULTIPLE PLOTS ===
print("Creating subplot...")
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Left plot
axes[0].plot(months, rainfall, 'b-o')
axes[0].set_title('Rainfall')
axes[0].set_ylabel('mm')

# Right plot
axes[1].bar(crops, yields, color=colors)
axes[1].set_title('Yields')
axes[1].set_ylabel('kg/ha')

plt.tight_layout()
plt.show()
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
                            <h3>Live Dual-Axis Agronomic Figure & Subplot Construction</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates building publication-quality agricultural figures live in Colab using Matplotlib:</p>
                            <ul>
                                <li>Constructs a dual-axis chart: rainfall as blue bar chart on the left axis, and temperature as an orange line plot on the right axis using <code>ax1.twinx()</code>.</li>
                                <li>Demonstrates formatting best practices: custom tick labels, gridlines, legends with unified frame, and annotation of drought stress thresholds.</li>
                                <li>Shows how to handle layout clipping with <code>plt.tight_layout()</code> and export vector graphics (PDF/SVG) for research publications.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive dual-axis chart script rendered and explained live on the classroom display.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Smallholder Visual Advisory Dashboard Design Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in designing intuitive, low-literacy agricultural dashboards for rural extension centers:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> How do we display complex irrigation needs, soil test results, and market price trajectories so a semi-literate farmer can make instant decisions?</li>
                                <li><strong>Collaborative Design:</strong> Faculty and student cohorts develop color-coded visual indicator charts (Green/Yellow/Red status bands, clear markers, large readable fonts) and evaluate dashboard layout usability.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-approved Extension Center Visual Dashboard Template with verified visual usability standards.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Panel Agro-Climatic Infographic Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams build a cohesive 4-panel agricultural dashboard using <code>plt.subplots(2, 2, figsize=(12, 10))</code>:</p>
                            <ul>
                                <li><strong>Panel 1 (Top-Left):</strong> Line plot of monthly canopy temperature across 3 crop seasons.</li>
                                <li><strong>Panel 2 (Top-Right):</strong> Bar chart comparing gross revenue per hectare across 4 cash crops.</li>
                                <li><strong>Panel 3 (Bottom-Left):</strong> Scatter plot of irrigation volume vs harvested yield with a linear trendline.</li>
                                <li><strong>Panel 4 (Bottom-Right):</strong> Donut chart of farm land utilization (Cereals, Pulses, Fallow, Agroforestry).</li>
                                <li>Exchange dashboard figures with a peer team to evaluate visual clarity, axis scaling, and color harmony.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A completed 4-panel agricultural dashboard figure with reciprocal peer audit scorecards.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Customized Farm Yield Visualization in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write an independent visualization script using Matplotlib:</p>
                            <ul>
                                <li>Create a horizontal bar chart displaying actual yields for 8 farm plots.</li>
                                <li>Use conditional color logic: green bars for plots exceeding target yield (3,000 kg/ha), and red bars for underperforming plots.</li>
                                <li>Add a vertical dashed line indicating the regional average benchmark with an annotated label.</li>
                                <li>Save the generated figure to disk as a high-resolution 300 DPI PNG file (<code>plt.savefig('farm_yield_report.png', dpi=300)</code>).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating and saving the annotated agricultural yield chart.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which function creates a line plot in Matplotlib?</p>
                    <ul>
                        <li>A) plt.bar()</li>
                        <li>B) plt.scatter()</li>
                        <li>C) plt.plot()</li>
                        <li>D) plt.line()</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - plt.plot() creates line plots by default.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>plt.plot() for lines, plt.scatter() for points, plt.bar() for bars</li>
                    <li>Always add title, xlabel, ylabel for clarity</li>
                    <li>Use subplots() for multiple charts</li>
                    <li>Save with plt.savefig('filename.png')</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 ML Workflow Introduction</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand the complete ML workflow</li>
                    <li>Define problems appropriately for ML</li>
                    <li>Plan data preparation strategies</li>
                    <li>Evaluate and iterate on models</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>ML Workflow = Crop Production Cycle</strong></p>
                    <ol>
                        <li>🌱 <strong>Define Problem:</strong> What crop to grow?</li>
                        <li>🧪 <strong>Collect Data:</strong> Soil tests, weather records</li>
                        <li>🚜 <strong>Prepare Data:</strong> Clear field, prepare soil</li>
                        <li>🌾 <strong>Train Model:</strong> Plant and nurture</li>
                        <li>📊 <strong>Evaluate:</strong> Measure yield</li>
                        <li>🔄 <strong>Iterate:</strong> Improve next season</li>
                    </ol>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Complete ML Workflow Example: Yield Prediction

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# === STEP 1: DEFINE PROBLEM ===
print("=== Step 1: Problem Definition ===")
print("Goal: Predict crop yield based on input factors")
print("Type: Regression (predicting continuous value)")

# === STEP 2: COLLECT DATA ===
print("\\n=== Step 2: Data Collection ===")
np.random.seed(42)
n_samples = 100

data = pd.DataFrame({
    'rainfall': np.random.uniform(100, 400, n_samples),
    'temperature': np.random.uniform(20, 35, n_samples),
    'fertilizer': np.random.uniform(30, 100, n_samples),
    'soil_ph': np.random.uniform(5.5, 7.5, n_samples),
})

# Generate yield based on factors (with noise)
data['yield'] = (
    10 * data['rainfall'] + 
    -50 * data['temperature'] + 
    15 * data['fertilizer'] + 
    200 * data['soil_ph'] + 
    np.random.normal(0, 100, n_samples)
)
print(f"Dataset shape: {data.shape}")
print(data.head())

# === STEP 3: PREPARE DATA ===
print("\\n=== Step 3: Data Preparation ===")
X = data[['rainfall', 'temperature', 'fertilizer', 'soil_ph']]
y = data['yield']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"Training samples: {len(X_train)}")
print(f"Testing samples: {len(X_test)}")

# === STEP 4: TRAIN MODEL ===
print("\\n=== Step 4: Model Training ===")
model = LinearRegression()
model.fit(X_train, y_train)
print("Model trained successfully!")

# === STEP 5: EVALUATE ===
print("\\n=== Step 5: Evaluation ===")
y_pred = model.predict(X_test)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print(f"RMSE: {rmse:.2f} kg")
print(f"R² Score: {r2:.4f}")

# === STEP 6: USE MODEL ===
print("\\n=== Step 6: Make Predictions ===")
new_field = [[250, 28, 60, 6.5]]  # New field data
prediction = model.predict(new_field)
print(f"Predicted yield for new field: {prediction[0]:.0f} kg/ha")
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
                            <h3>Live End-to-End Agri-ML Pipeline Execution & Data Leakage Demo</h3>
                            <p><strong>Educator Action:</strong> The instructor live-codes the complete 6-stage machine learning workflow in Google Colab using real agricultural data:</p>
                            <ul>
                                <li>Stages: <em>Problem Formulation &rarr; Data Ingestion &rarr; Train-Test Splitting &rarr; Feature Scaling &rarr; Model Fitting &rarr; Performance Evaluation</em>.</li>
                                <li>Demonstrates a classic beginner error live: fitting the scaler on the entire dataset before splitting (data leakage) vs properly fitting only on training data (<code>scaler.fit(X_train)</code>).</li>
                                <li>Shows how leakage artificially inflates validation accuracy while causing catastrophic drops in real-field performance.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive live demonstration script executing the complete pipeline and exposing data leakage pitfalls.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agri-ML Problem Scoping & Target Metric Formulation Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty acts as Chief AI Scientist for an Agricultural Insurance Agency designing an automated drought payout model:</p>
                            <ul>
                                <li><strong>Faculty Guidance:</strong> Challenges student groups to formally define the prediction task: Is it regression (predicting continuous crop yield in tons/ha) or classification (payout trigger: Yes/No)?</li>
                                <li><strong>Collaborative Work:</strong> Groups define features ($X$), target variable ($y$), identify temporal correlation hazards (time-series data cannot be shuffled randomly!), and select appropriate evaluation metrics (RMSE vs F1-score).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-approved Machine Learning Project Charter with formal mathematical scoping and evaluation criteria.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Pipeline Forensic Audit & Flaw Detection Challenge</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a pre-written, flawed Python ML pipeline for soil organic carbon prediction:</p>
                            <ul>
                                <li>Audit the script for 4 critical pipeline flaws: <em>(1) Missing random seed (unreproducible splits), (2) Testing on training data, (3) Misinterpreted metrics (using $R^2$ alone without MAE/RMSE), (4) Unchecked feature scaling</em>.</li>
                                <li>Teams refactor the code to fix all pipeline vulnerabilities and swap with a peer syndicate for an adversarial review.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A refactored, robust Python ML pipeline script with written peer audit evaluation sheets.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Complete Miniature ML Workflow in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write an end-to-end Python script implementing all 6 steps of the ML lifecycle on synthetic farm data:</p>
                            <ul>
                                <li>Generate synthetic data for 100 farm plots (features: rainfall, fertilizer, soil pH; target: yield).</li>
                                <li>Split into training (80%) and testing (20%) sets using <code>train_test_split(..., random_state=42)</code>.</li>
                                <li>Train a linear regression model on <code>X_train, y_train</code>.</li>
                                <li>Evaluate on <code>X_test</code> computing RMSE and $R^2$, and make predictions for 2 novel farm field scenarios.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A self-contained Colab notebook displaying execution outputs for every step of the 6-stage ML workflow.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the first step in an ML workflow?</p>
                    <ul>
                        <li>A) Train model</li>
                        <li>B) Collect data</li>
                        <li>C) Define the problem</li>
                        <li>D) Evaluate results</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Always start by clearly defining what problem you're solving.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>ML is a cycle: Define → Collect → Prepare → Train → Evaluate → Deploy</li>
                    <li>Problem definition guides everything else</li>
                    <li>Data quality is more important than model complexity</li>
                    <li>Always evaluate on unseen test data</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t21': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Linear Regression Concepts</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand linear regression fundamentals</li>
                    <li>Implement simple and multiple regression</li>
                    <li>Interpret coefficients for farm insights</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Linear Regression = Finding the Recipe</strong></p>
                    <p>If yield = a×rainfall + b×fertilizer + c, regression finds the exact values of a, b, c from your historical data!</p>
                    <p>It's like discovering the formula that nature uses on your farm.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# === SIMPLE LINEAR REGRESSION ===
print("=== Simple Linear Regression ===")
print("Predicting yield from fertilizer only")

# Data
fertilizer = np.array([20, 30, 40, 50, 60, 70, 80, 90, 100]).reshape(-1, 1)
yield_kg = np.array([1800, 2100, 2400, 2650, 2850, 3000, 3100, 3150, 3180])

# Train model
model = LinearRegression()
model.fit(fertilizer, yield_kg)

print(f"Intercept (base yield): {model.intercept_:.0f} kg")
print(f"Coefficient: {model.coef_[0]:.1f} kg per kg fertilizer")
print(f"Interpretation: Each kg of fertilizer adds {model.coef_[0]:.1f} kg yield")

# Predict
new_fert = [[55]]
pred = model.predict(new_fert)
print(f"\\nPredicted yield at 55kg fertilizer: {pred[0]:.0f} kg")

# === MULTIPLE LINEAR REGRESSION ===
print("\\n=== Multiple Linear Regression ===")

# Multiple features
data = pd.DataFrame({
    'rainfall': [150, 200, 180, 250, 300, 190, 220, 280],
    'fertilizer': [40, 50, 45, 60, 70, 55, 65, 75],
    'temperature': [28, 30, 29, 27, 26, 28, 27, 25],
    'yield': [2200, 2600, 2400, 2900, 3200, 2700, 2850, 3100]
})

X = data[['rainfall', 'fertilizer', 'temperature']]
y = data['yield']

model_multi = LinearRegression()
model_multi.fit(X, y)

print("Feature Importance (Coefficients):")
for feature, coef in zip(X.columns, model_multi.coef_):
    print(f"  {feature}: {coef:.2f}")

# Predict for new conditions
new_conditions = [[230, 58, 27]]
prediction = model_multi.predict(new_conditions)
print(f"\\nPredicted yield: {prediction[0]:.0f} kg/ha")
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
                            <h3>Live Ordinary Least Squares (OLS) Fitting & Residual Diagnostics</h3>
                            <p><strong>Educator Action:</strong> The instructor live-trains a Linear Regression model in Google Colab fitting crop yield against nitrogen fertilizer input:</p>
                            <ul>
                                <li>Plots the scatter points and live-fits the best-fit line: $\hat{y} = \beta_0 + \beta_1 x$.</li>
                                <li>Visualizes residuals (vertical error lines between data points and regression line) and demonstrates how the OLS algorithm mathematically minimizes the Sum of Squared Residuals (SSR).</li>
                                <li>Translates regression coefficients into practical agronomic advice: <em>"Each additional 1 kg of nitrogen yields an extra 15.4 kg of grain until the biological plateau"</em>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive regression visualization displaying best-fit slope, intercept, and vertical residual lines.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Multiple Regression Assumptions & Multicollinearity Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in diagnosing regression model health on agricultural datasets:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> What happens to linear regression when features are highly correlated (e.g., ambient temperature and solar radiation, or soil clay % and water retention)?</li>
                                <li><strong>Collaborative Investigation:</strong> Groups compute Variance Inflation Factor (VIF) and plot residual distribution histograms to verify linear regression assumptions (linearity, independence, homoscedasticity, normality).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-approved Regression Diagnostics Report detailing feature collinearity and residual normality tests.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Crop Yield Prediction & Feature Sensitivity Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams train a multiple linear regression model on 50 field plot records with 3 features (Rainfall mm, Fertilizer kg, Temperature &deg;C):</p>
                            <ul>
                                <li>Standardize features and train <code>LinearRegression()</code> from Scikit-Learn.</li>
                                <li>Extract and rank feature coefficients ($\beta_1, \beta_2, \beta_3$) to establish which input exerts the strongest influence on harvest yield.</li>
                                <li>Formulate 3 economic scenarios (low rainfall season, high fertilizer price season, normal season) and present predicted harvest outcomes to a peer syndicate.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A multiple regression analysis dossier with peer-evaluated scenario forecasts and coefficient interpretations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build & Evaluate a Crop Yield Predictor in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent linear regression prediction script:</p>
                            <ul>
                                <li>Create a DataFrame with 3 agricultural features: <code>rainfall</code>, <code>fertilizer</code>, and <code>soil_moisture</code>.</li>
                                <li>Train a <code>LinearRegression</code> model from Scikit-Learn.</li>
                                <li>Print model parameters: intercept ($\beta_0$) and feature coefficients ($\beta_i$).</li>
                                <li>Compute $R^2$ score and predict yield for a new farm field scenario: <code>[220 mm rain, 60 kg fertilizer, 35% moisture]</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook displaying model training, coefficient extraction, and novel scenario predictions.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> In y = 1500 + 15x, what does 15 represent?</p>
                    <ul>
                        <li>A) Base yield</li>
                        <li>B) Increase in y per unit increase in x</li>
                        <li>C) Total prediction</li>
                        <li>D) Error term</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - The coefficient (15) shows how much y changes when x increases by 1.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Linear regression finds the best-fit line through data</li>
                    <li>Coefficients show feature importance</li>
                    <li>Multiple regression handles many factors</li>
                    <li>Interpret coefficients for actionable insights</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use by lecture system
if (typeof window !== 'undefined') {
    window.module2Handouts = module2Handouts;
}
