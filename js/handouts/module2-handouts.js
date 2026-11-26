// Module 2 Comprehensive Handouts - Part 1 (m2-t1 to m2-t13)
// NumPy, Pandas, and Visualization Topics

const module2Handouts = {
    'm2-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 NumPy: Arrays and Operations</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A smart farm has ten thousand soil moisture sensors reporting every minute.</p>
                <p>Standard Python lists take too much computer memory for large sensor arrays.</p>
                <p>Calculating averages on standard lists slows down automated irrigation valves.</p>
                <p>NumPy arrays store millions of sensor numbers in compact, fast memory blocks.</p>
                <p>How does NumPy speed up math across large grids of agricultural sensors?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why does processing 1,000,000 soil sensor readings in a standard Python list take seconds and drain battery, while a NumPy array finishes in milliseconds?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Python lists store pointers to scattered heap objects, incurring dynamic type checking and memory fragmentation overhead. A NumPy ndarray is stored as a contiguous block of homogeneous C-memory with fixed byte strides, leveraging hardware SIMD vectorization and cache lines for orders-of-magnitude faster computation with minimal power consumption.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> If a soil probe logs moisture at 10cm, 30cm, 60cm, and 100cm across 50 farm plots, how does NumPy indexing simplify extracting only the deep root-zone moisture (60cm and 100cm) across all plots?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> In NumPy, multidimensional array slicing enables <code>sensor_data[:, 2:]</code>—slicing all rows (plots) and selecting columns 2 and 3 (deep root zones) in zero-copy memory views without duplicating data.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change the threshold in <code>soil_moisture_array < 20.0</code> to <code>< 25.0</code>. How many field zones now trigger an irrigation alert?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Slicing & Benchmark Demo):</strong> In the Teacher's live benchmark comparing pure Python lists against NumPy ndarrays over 1,000,000 sensor records, what performance difference was observed?</p>
                    <ul>
                        <li>A) NumPy executed vectorized mathematical operations over 50x faster than pure Python loops due to contiguous C-memory storage and SIMD CPU vectorization</li>
                        <li>B) Python lists were twice as fast because they have dynamic type flexibility</li>
                        <li>C) Both ran at identical speeds</li>
                        <li>D) NumPy crashed because Python cannot allocate contiguous memory</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>NumPy executed over 50x faster due to contiguous memory allocation and vectorized SIMD instructions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> NumPy bypasses Python's interpreter loop overhead by dispatching low-level vectorized C/Fortran routines directly to CPU registers, delivering massive speedups on agricultural sensor arrays.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Dynamic type checking in lists causes massive CPU pointer chasing and slows execution.</li>
                                <li><strong>Why C is incorrect:</strong> NumPy releases the GIL and uses compiled C code, outperforming pure Python loops.</li>
                                <li><strong>Why D is incorrect:</strong> NumPy directly allocates contiguous memory via C-level memory allocators.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Soil Vector Comparison Syndicate):</strong> During the Soil Sample Vector Audit, which NumPy boolean mask isolated all farm plots where soil moisture dropped below 20.0% OR soil pH became critically acidic (< 5.5)?</p>
                    <ul>
                        <li>A) critical_plots = (moisture < 20.0) | (ph_vals < 5.5)</li>
                        <li>B) critical_plots = moisture < 20.0 or ph_vals < 5.5</li>
                        <li>C) critical_plots = moisture && ph_vals</li>
                        <li>D) critical_plots = not (moisture >= 20.0)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>(moisture < 20.0) | (ph_vals < 5.5) using bitwise OR operator with element-wise parentheses.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In NumPy, logical combinations of boolean arrays require bitwise operators (<code>|</code> for OR, <code>&</code> for AND) with parentheses around each condition, because Python's logical <code>or</code>/<code>and</code> evaluate the truth value of the entire array rather than per-element.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Using standard 'or' on a NumPy array throws a ValueError ('truth value of an array is ambiguous').</li>
                                <li><strong>Why C is incorrect:</strong> Syntax '&&' is not a valid Python operator.</li>
                                <li><strong>Why D is incorrect:</strong> Negating moisture alone ignores the pH condition completely.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building an Array Normalization Script, what formula scaled raw nitrogen readings (ranging from 120 to 380 kg/ha) into a normalized [0, 1] range?</p>
                    <ul>
                        <li>A) norm_n = (nitrogen - np.min(nitrogen)) / (np.max(nitrogen) - np.min(nitrogen))</li>
                        <li>B) norm_n = nitrogen / 1000</li>
                        <li>C) norm_n = np.sqrt(nitrogen)</li>
                        <li>D) norm_n = nitrogen - np.mean(nitrogen)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Min-max normalization: (x - min) / (max - min) mapped values strictly between 0.0 and 1.0.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Min-max normalization linearly shifts and scales agricultural feature arrays so the minimum maps to 0.0 and the maximum maps to 1.0, preventing large-scale features from dominating distance-based ML algorithms.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Dividing by an arbitrary 1000 does not guarantee a minimum of 0.0 or maximum of 1.0.</li>
                                <li><strong>Why C is incorrect:</strong> Square root compresses variance but does not bound values to [0, 1].</li>
                                <li><strong>Why D is incorrect:</strong> Subtracting the mean centers data at zero (mean centering), but leaves values unscaled.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A greenhouse manager tracks Nitrogen, Phosphorus, and Potassium across four growing beds.</p>
                <p>Each bed requires a different multiplier based on its crop growth stage.</p>
                <p>Calculating nutrient needs bed by bed by hand causes dosing mistakes.</p>
                <p>Matrix multiplication applies dosage formulas across all beds in a single step.</p>
                <p>How do matrix operations automate fertilizer batch mixing in precision greenhouses?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> How can a farm cooperative calculate the total nitrogen, phosphorus, and potassium required across 20 distinct crop zones in a single matrix multiplication?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Represent the 20 crop zones as an Acreage Matrix <code>A</code> of shape (20, 1) and specific N-P-K nutrient dosage requirements as a Dosage Matrix <code>D</code> of shape (20, 3). Matrix multiplication <code>A.T @ D</code> computes the dot product of acres and nutrient rates simultaneously, yielding total kilograms of N, P, and K in a single microsecond operation.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does multiplying two agricultural matrices with mismatched inner dimensions (e.g., shape (10, 4) and (5, 3)) throw a ValueError?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Matrix multiplication <code>A @ B</code> requires that the number of columns in <code>A</code> matches the number of rows in <code>B</code>. In farm math, if <code>A</code> represents 10 plots each with 4 soil factors, <code>B</code> must have 4 input weights corresponding to those exact 4 soil factors. A shape mismatch means you are attempting to multiply 4 soil properties by 5 weights—a logical impossibility.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change the booster factor from <code>1.2</code> to <code>0.8</code> (simulating water conservation mode). What are the new total fertilizer requirements?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Matrix Allocation Demo):</strong> In the Teacher's live demonstration of matrix nutrient allocation, what NumPy operator performed linear algebraic matrix multiplication between the crop acreage vector and the nutrient dosage matrix?</p>
                    <ul>
                        <li>A) The <code>@</code> operator (or np.matmul())</li>
                        <li>B) The <code>*</code> operator (element-wise multiplication)</li>
                        <li>C) The <code>**</code> exponentiation operator</li>
                        <li>D) The <code>//</code> floor division operator</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>The <code>@</code> operator (np.matmul()) performed true linear algebraic matrix dot products.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In Python 3.5+, the <code>@</code> operator computes matrix multiplication (inner dot products of rows and columns). The <code>*</code> operator performs element-wise Hadamard multiplication, which requires identical shapes and does not compute linear combinations.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> The <code>*</code> operator computes element-wise multiplication, not linear matrix dot products.</li>
                                <li><strong>Why C is incorrect:</strong> The <code>**</code> operator raises matrix elements to exponential powers.</li>
                                <li><strong>Why D is incorrect:</strong> Floor division truncates division results and does not perform matrix math.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Multi-Factor Yield Transformation Studio):</strong> During the Matrix Transformation Studio, when multiplying a farm feature matrix of shape (50, 4) by a weight vector of shape (4, 1), what was the shape of the resulting predicted yield array?</p>
                    <ul>
                        <li>A) (50, 1)</li>
                        <li>B) (4, 4)</li>
                        <li>C) (50, 4)</li>
                        <li>D) (4, 50)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>(50, 1) representing 50 individual plot yield predictions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Multiplying an (m x k) matrix by a (k x n) matrix produces an (m x n) matrix. Here, (50 x 4) @ (4 x 1) collapses the inner dimension 4, producing a (50 x 1) vector of predicted yields for the 50 plots.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> A (4, 4) output ignores the 50 sample plots entirely.</li>
                                <li><strong>Why C is incorrect:</strong> (50, 4) would imply features were not linearly combined.</li>
                                <li><strong>Why D is incorrect:</strong> (4, 50) is the transposed orientation.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Farm Economics Matrix Engine, how did you compute total enterprise revenue given a sales quantity matrix Q and commodity price vector P?</p>
                    <ul>
                        <li>A) total_revenue = np.dot(Q, P)</li>
                        <li>B) total_revenue = Q + P</li>
                        <li>C) total_revenue = np.linalg.inv(Q)</li>
                        <li>D) total_revenue = np.zeros_like(Q)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>np.dot(Q, P) computed the linear dot product summing quantity times price across commodities.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Computing revenue across multi-crop enterprises is a classic dot product: multiplying volumes sold by their corresponding market prices and summing the products across categories in a single vectorized step.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Adding quantities to prices is mathematically meaningless and produces dimensionality errors.</li>
                                <li><strong>Why C is incorrect:</strong> Matrix inversion is an algebraic solve tool, not a revenue summation.</li>
                                <li><strong>Why D is incorrect:</strong> Zeros_like creates an empty array of zeros.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer records daily tomato prices in Yeshwanthpur APMC market on scrap paper.</p>
                <p>Pure Python lists cannot attach calendar dates as labels to daily numbers.</p>
                <p>When dates are separated from prices, market trend analysis becomes prone to errors.</p>
                <p>Pandas Series combines numerical values with real calendar dates as labeled indexes.</p>
                <p>How does Pandas Series simplify historical agricultural price tracking?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is a Pandas Series with a DateTimeIndex vastly superior to a simple Python list or NumPy array for tracking daily rainfall at an agricultural research station?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A pure array has only integer positions (0, 1, 2...). A Pandas Series with a DateTimeIndex enables calendar-aware intelligence: slicing by date ranges (<code>rainfall['2025-06':'2025-09']</code>), resampling to monthly or seasonal aggregates (<code>rainfall.resample('M').sum()</code>), and automatically aligning rainfall on exact dates with irrigation logs.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What happens if you add two Pandas Series with different, unaligned index labels (e.g., Series A indexed by plot IDs 1, 2, 3 and Series B indexed by 2, 3, 4)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Pandas performs automatic index alignment! It matches elements by index label, not numerical position. For plots 2 and 3, it adds values correctly. For plot 1 (missing in B) and plot 4 (missing in A), Pandas safely inserts <code>NaN</code> (Not a Number) to prevent silent data misalignment that occurs in pure Python lists.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a new date <code>'2025-07-05'</code> with price <code>2850</code>. Run the cell again. What is the updated highest price?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Series Indexing Demo):</strong> In the Teacher's live demonstration, how did a Pandas Series with a DateTimeIndex simplify calculating total Kharif season rainfall from daily weather records?</p>
                    <ul>
                        <li>A) By slicing directly with calendar strings: rainfall_series['2025-06-01':'2025-10-31'].sum()</li>
                        <li>B) By manually counting days on a physical calendar and writing a 120-line loop</li>
                        <li>C) By converting all dates into floating-point numbers</li>
                        <li>D) By deleting all non-monsoon months from the hard drive</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Label-based date slicing: series['2025-06-01':'2025-10-31'].sum() computed seasonal precipitation.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Pandas DateTimeIndex supports partial string date slicing, enabling intuitive extraction and summation of agricultural seasons without manual calendar math.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Manual date loops are error-prone and fail to account for leap years or irregular sampling intervals.</li>
                                <li><strong>Why C is incorrect:</strong> Floating-point date representations lose timezone and calendar semantics.</li>
                                <li><strong>Why D is incorrect:</strong> Deleting months destroys year-round climatic history.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Rainfall Series Triage Syndicate):</strong> During the Village Rainfall Triage Syndicate, what Pandas method smoothed day-to-day rainfall noise to identify prolonged 14-day dry spells?</p>
                    <ul>
                        <li>A) rainfall_series.rolling(window=14).mean()</li>
                        <li>B) rainfall_series.drop_duplicates()</li>
                        <li>C) rainfall_series.sort_values(ascending=False)</li>
                        <li>D) rainfall_series.tail(14)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>rolling(window=14).mean() computed a 14-day moving average to identify chronic dry spells.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Rolling window calculations compute moving statistics across sequential time windows, smoothing high-frequency daily fluctuations to highlight underlying drought trends.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> drop_duplicates() removes identical rainfall values, destroying the chronological timeline.</li>
                                <li><strong>Why C is incorrect:</strong> sort_values() breaks the temporal order of dates.</li>
                                <li><strong>Why D is incorrect:</strong> tail(14) merely previews the final 14 days of the series.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a 12-Month Agro-Climatic Series, how did you verify that missing sensor days were populated with forward-filled weather observations?</p>
                    <ul>
                        <li>A) series.ffill() (or series.fillna(method='ffill'))</li>
                        <li>B) series.dropna()</li>
                        <li>C) series.clear()</li>
                        <li>D) series.reset_index(drop=True)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>series.ffill() forward-filled missing observation gaps with the most recent valid measurement.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Forward-filling (<code>ffill()</code>) propagates the last observed valid measurement forward to fill missing temporal gaps, a common meteorological imputation practice for short sensor dropouts.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> dropna() deletes missing dates, creating temporal discontinuities in the time series.</li>
                                <li><strong>Why C is incorrect:</strong> clear() empties the entire data structure.</li>
                                <li><strong>Why D is incorrect:</strong> reset_index() discards the DateTimeIndex.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agricultural extension officer collects farm survey sheets from five villages.</p>
                <p>Each sheet contains farmer names, crop varieties, acreages, and fertilizer amounts.</p>
                <p>Analyzing separate spreadsheets manually takes days of repetitive copying and pasting.</p>
                <p>Pandas DataFrames organize entire agricultural databases into searchable, flexible tables.</p>
                <p>How do DataFrames allow researchers to filter and analyze farm survey data?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is an agricultural DataFrame considered a 2D relational table on steroids compared to an Excel spreadsheet?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Excel spreadsheets are manual, unversioned, prone to silent copy-paste formulas, and collapse at over 1,000,000 rows. A Pandas DataFrame is programmable, vectorized, handles millions of rows in memory, enforces strict schema types (dates, categories, floats), and integrates seamlessly with SQL databases and ML pipelines via automated Python scripts.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> When adding a calculated column to a DataFrame (e.g., <code>df['nitrogen_deficit'] = df['target_n'] - df['actual_n']</code>), why must beginner programmers never use a <code>for index, row in df.iterrows():</code> loop?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Iterrows() converts each row into a new Pandas Series object inside an interpreted Python loop, destroying C-level optimizations and running 500x slower. Pandas column operations are vectorized: subtracting two columns directly performs compiled C-level SIMD operations across the entire column simultaneously in microseconds.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add code <code>print(df_farms[df_farms['Crop_Grown'] == 'Ragi'])</code>. Notice how easily you can filter to view only Ragi farmers!</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Multi-Column Engineering Demo):</strong> In the Teacher's live demonstration, what vectorized statement computed gross plot revenue from 'yield_quintal' and 'price_per_quintal' across 20,000 farm plots?</p>
                    <ul>
                        <li>A) df['gross_revenue'] = df['yield_quintal'] * df['price_per_quintal']</li>
                        <li>B) A for loop using df.iterrows() manually multiplying each row and appending to a list</li>
                        <li>C) df['gross_revenue'] = df.sum()</li>
                        <li>D) df.to_excel()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Vectorized column multiplication: df['gross_revenue'] = df['yield_quintal'] * df['price_per_quintal'].</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Direct vectorized column operations leverage NumPy underlying arrays, executing in compiled C at lightning speed without slow Python loop overhead.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Iterrows loops run up to 500x slower and represent an anti-pattern in Pandas.</li>
                                <li><strong>Why C is incorrect:</strong> df.sum() aggregates all columns together into a single scalar sum.</li>
                                <li><strong>Why D is incorrect:</strong> to_excel() exports data to disk without computing revenue.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Cooperative Production Ledger Studio):</strong> During the Cooperative Ledger Studio, which DataFrame operation merged plot-level soil sensor readings with a separate member farmer demographic table based on a shared 'plot_id' key?</p>
                    <ul>
                        <li>A) pd.merge(sensor_df, farmer_df, on='plot_id', how='inner')</li>
                        <li>B) pd.concat([sensor_df, farmer_df], axis=0)</li>
                        <li>C) sensor_df + farmer_df</li>
                        <li>D) sensor_df.sort_index()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>pd.merge(sensor_df, farmer_df, on='plot_id', how='inner') executed a relational database join.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Relational database joins in Pandas are executed using <code>pd.merge()</code>, matching records between independent tables on a designated foreign key (<code>plot_id</code>).</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> concat along axis 0 stacks rows vertically rather than joining columns on a shared key.</li>
                                <li><strong>Why C is incorrect:</strong> Adding dataframes attempts arithmetic addition, not relational joining.</li>
                                <li><strong>Why D is incorrect:</strong> sort_index() sorts index labels without merging tables.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a 10-Plot Agricultural Management DataFrame, how did you drop an obsolete legacy column 'old_sensor_id' permanently?</p>
                    <ul>
                        <li>A) df.drop(columns=['old_sensor_id'], inplace=True)</li>
                        <li>B) df.delete('old_sensor_id')</li>
                        <li>C) df['old_sensor_id'] = None</li>
                        <li>D) df.pop() without arguments</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>df.drop(columns=['old_sensor_id'], inplace=True) removed the column from memory.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The <code>.drop(columns=[...])</code> method deletes designated columns from a DataFrame, modifying it in place when <code>inplace=True</code> or returning a new DataFrame.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> DataFrames do not have a <code>.delete()</code> method.</li>
                                <li><strong>Why C is incorrect:</strong> Setting to None leaves the column in the DataFrame filled with nulls.</li>
                                <li><strong>Why D is incorrect:</strong> pop() requires the exact column name as an argument.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer reviews a table of daily soil moisture readings across two months.</p>
                <p>Columns of plain numbers make it difficult to spot rapid soil drying trends.</p>
                <p>Without visual graphs, farmers cannot easily see when drought thresholds are crossed.</p>
                <p>Matplotlib converts columns of farm numbers into clear line charts and graphs.</p>
                <p>How do line plots help farmers visualize moisture decline after monsoon rains?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is plotting daily rainfall (bar chart in mm) and daily ambient temperature (line chart in °C) on the same single Y-axis visually misleading, and how do dual-axis subplots solve this?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Rainfall ranges from 0 to 100mm, while temperature ranges from 15°C to 40°C. Plotting both on one Y-axis compresses the temperature curve into an unreadable flat line or distorts rainfall bars. Using Matplotlib's <code>ax.twinx()</code> creates a dual-axis chart with two independent scales (left for rain mm, right for temp °C), allowing farmers to correlate rain events directly with temperature drops.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why should an AgriTech dashboard for smallholder farmers favor high-contrast simple charts with clear annotations over complex, cluttered multi-dimensional plots?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Farmers review advisories in bright sunlight on low-cost smartphones while working in dusty fields. Cluttered 3D graphs with small legends are unreadable in real-world conditions. High-contrast 2D line and bar charts with large threshold danger zones (e.g., a red dotted line at 38°C for heat stress) deliver immediate, life-saving clarity.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change Day 5 moisture from <code>18.0</code> to <code>34.0</code> (simulating an unexpected shower). Re-run the plot to see the curve rise!</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Dual-Axis Demo):</strong> In the Teacher's live demonstration, which Matplotlib method constructed a secondary Y-axis sharing the same X-axis timeline to overlay rainfall bars with temperature lines?</p>
                    <ul>
                        <li>A) ax2 = ax1.twinx()</li>
                        <li>B) plt.copy_axis()</li>
                        <li>C) ax2 = ax1.twiny()</li>
                        <li>D) plt.subplot(2, 2, 2)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>ax1.twinx() created an independent twin Y-axis sharing the common time X-axis.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Matplotlib's <code>.twinx()</code> creates a twin Axes sharing the x-axis with an independent y-axis on the right margin, perfect for dual-metric agronomic visualizations.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> <code>.copy_axis()</code> is a non-existent Matplotlib command.</li>
                                <li><strong>Why C is incorrect:</strong> <code>.twiny()</code> shares the y-axis and creates a twin x-axis along the top.</li>
                                <li><strong>Why D is incorrect:</strong> <code>.subplot(2, 2, 2)</code> generates a separate adjacent grid panel, not an overlaid dual-axis chart.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Smallholder Advisory Dashboard Studio):</strong> During the Advisory Dashboard Studio, how did teams visually highlight the danger zone where soil moisture dropped below the permanent wilting point (15%)?</p>
                    <ul>
                        <li>A) By adding a red horizontal threshold line using ax.axhline(y=15, color='red', linestyle='--', label='Wilting Point')</li>
                        <li>B) By coloring all plot pixels black</li>
                        <li>C) By deleting data points below 15%</li>
                        <li>D) By rotating the chart upside down</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>ax.axhline(y=15, color='red', linestyle='--') drew an immediate visual reference line for crop wilting.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Horizontal span and line annotations (<code>axhline</code>, <code>axhspan</code>) provide critical agronomic context, allowing farmers to instantly see when sensor curves breach physiological safety thresholds.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Coloring pixels black destroys readability.</li>
                                <li><strong>Why C is incorrect:</strong> Deleting low values conceals the drought crisis.</li>
                                <li><strong>Why D is incorrect:</strong> Rotating charts produces unreadable disorientation.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Customized Farm Yield Visualization, what command ensured that date labels on the X-axis did not overlap illegibly?</p>
                    <ul>
                        <li>A) fig.autofmt_xdate() (or plt.xticks(rotation=45))</li>
                        <li>B) plt.xlabel('')</li>
                        <li>C) plt.axis('off')</li>
                        <li>D) plt.clf()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>fig.autofmt_xdate() rotated and formatted date labels cleanly to prevent overlapping text.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> When plotting time series with daily timestamps, date strings collide; <code>fig.autofmt_xdate()</code> automatically slants date labels at 45 degrees and aligns them to tick marks for crisp readability.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Clearing the x-label leaves overlapping date tick labels unchanged.</li>
                                <li><strong>Why C is incorrect:</strong> plt.axis('off') hides the entire coordinate system, labels, and ticks.</li>
                                <li><strong>Why D is incorrect:</strong> plt.clf() clears the entire figure.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A trainee tries to build a crop yield predictor by training directly on messy data.</p>
                <p>The raw data contains missing sensor readings, incorrect units, and unscaled numbers.</p>
                <p>Without a structured machine learning workflow, the prediction model fails completely.</p>
                <p>Every reliable agricultural AI system follows strict steps: clean, split, train, and test.</p>
                <p>What are the essential steps of a professional machine learning workflow?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> What is 'Data Leakage' in an agricultural machine learning pipeline, and why does it cause models that achieve 99% accuracy in Colab to fail completely in the field?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Data leakage occurs when information from the target or test dataset inadvertently leaks into the training pipeline before model training (e.g., scaling the entire dataset with <code>fit_transform</code> before splitting into train/test). The model learns test set statistics during training. When deployed on unseen future crops, accuracy collapses because future data was never truly held out.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why must the agricultural ML workflow always start with Problem Scoping and Agronomic Validation rather than jumping straight into algorithm selection?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A machine learning model can optimize any mathematical loss function, but without agronomic scoping, you may optimize the wrong target! For example, predicting maximum harvest biomass rather than commercial grain yield, or predicting yield without considering cost of inputs. Clear problem scoping defines metrics aligned with real-world farm economics and actionable interventions.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a new field sample <code>[480.0, 120.0]</code> to <code>crop_features</code> and <code>43.0</code> to <code>yield_target</code>. Verify the updated sample count.</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Pipeline Leakage Demo):</strong> In the Teacher's live demonstration of agricultural data leakage, what fatal methodological error artificially inflated test R² from 0.65 to 0.98?</p>
                    <ul>
                        <li>A) Fitting the StandardScaler on the entire dataset before performing the train-test split, leaking test distribution parameters (mean and variance) into the training process</li>
                        <li>B) Using Python 3.10 instead of Python 3.8</li>
                        <li>C) Splitting data 80/20</li>
                        <li>D) Training a linear regression model instead of deep learning</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Fitting the scaler on the full dataset before splitting leaked test statistics into the training fold.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Data preprocessing transformations (imputation, scaling) must learn statistics strictly from the training partition (<code>fit_transform</code> on train) and only transform the test set (<code>transform</code> on test) to prevent data leakage.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Python minor version differences do not cause mathematical data leakage.</li>
                                <li><strong>Why C is incorrect:</strong> An 80/20 split is standard practice; the error was pre-split transformation.</li>
                                <li><strong>Why D is incorrect:</strong> Algorithm choice has no bearing on pre-split scaling leakage.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Pipeline Forensic Audit Syndicate):</strong> During the Pipeline Flaw Detection Challenge, what critical flaw did student teams discover in a model predicting sugarcane harvest maturity?</p>
                    <ul>
                        <li>A) The training dataset included 'mill_delivery_weight', a variable only recorded at the factory days after harvest, making it unavailable during field prediction</li>
                        <li>B) The target variable was numeric</li>
                        <li>C) The features were normalized using min-max scaling</li>
                        <li>D) The model was evaluated using RMSE</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Included 'mill_delivery_weight', a post-harvest feature unavailable at prediction runtime.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> A classic form of target leakage: using features that are collected chronologically after the event being predicted. At inference time in the field, factory delivery weight does not yet exist.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Continuous regression targets are expected to be numeric.</li>
                                <li><strong>Why C is incorrect:</strong> Min-max scaling is valid if fitted strictly on training data.</li>
                                <li><strong>Why D is incorrect:</strong> RMSE is a standard, appropriate evaluation metric for continuous regression.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Miniature ML Workflow, what Scikit-Learn class encapsulated feature scaling and model training into an atomic, leak-free pipeline?</p>
                    <ul>
                        <li>A) sklearn.pipeline.Pipeline</li>
                        <li>B) sklearn.model_selection.GridSearchCV alone</li>
                        <li>C) sklearn.metrics.accuracy_score</li>
                        <li>D) sklearn.preprocessing.OneHotEncoder</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>sklearn.pipeline.Pipeline chained preprocessing transformers and estimators into a single object.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Scikit-Learn's <code>Pipeline</code> guarantees that feature scaling is re-fitted strictly on training folds during cross-validation, mathematically preventing data leakage across all workflow steps.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> GridSearchCV performs hyperparameter tuning, but requires a Pipeline to prevent internal fold leakage.</li>
                                <li><strong>Why C is incorrect:</strong> accuracy_score is a metric function, not a workflow container.</li>
                                <li><strong>Why D is incorrect:</strong> OneHotEncoder is a single categorical transformer.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer wants to estimate how many extra kilograms of maize will grow per kg of nitrogen.</p>
                <p>Guessing fertilizer impact leads to buying too much chemical or getting poor harvests.</p>
                <p>The farmer needs a mathematical line that relates fertilizer input to grain yield.</p>
                <p>Linear Regression finds the exact trendline connecting fertilizer dose to harvest output.</p>
                <p>How does Linear Regression predict crop yields from nutrient application data?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is Ordinary Least Squares (OLS) regression modeled as finding a line that minimizes the sum of *squared* residuals rather than the sum of *absolute* residuals?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Squaring residuals serves two mathematical purposes: First, it treats positive and negative errors equally (canceling sign differences). Second, squaring heavily penalizes large errors (e.g., an error of 10 quintals incurs a penalty of 100, while an error of 2 incurs only 4). Furthermore, squared loss yields a smooth, continuous parabola with a closed-form analytical derivative: <code>(X^T X)^(-1) X^T y</code>.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What does the slope coefficient (m) in a univariate linear regression equation <code>Yield = 2.4 * Fertilizer + 15</code> signify to an agronomist?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> The slope (m = 2.4) represents the marginal response rate: for every additional unit (e.g., kg/ha) of fertilizer applied, crop yield increases by an expected 2.4 quintals/ha. The intercept (15) represents baseline unfertilized soil productivity. If marginal fertilizer cost exceeds the market value of 2.4 quintals, the agronomist knows fertilizer is economically unviable.</p>
                        </div>
                    </details>
                </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>test_fertilizer = np.array([[130.0]])</code>. What is the predicted maize harvest for 130 kg fertilizer?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live OLS Fitting Demo):</strong> In the Teacher's live demonstration fitting Ordinary Least Squares to cotton yield, what diagnostic residual plot confirmed that the linear regression assumptions were satisfied?</p>
                    <ul>
                        <li>A) A residual vs predicted plot showing random scatter around zero with constant variance (homoscedasticity) and no curved patterns</li>
                        <li>B) A residual plot forming a distinct U-shaped curve</li>
                        <li>C) Residuals that increased exponentially with yield</li>
                        <li>D) A plot where all residuals were exactly equal to zero</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Residuals scattered randomly around zero with constant variance (homoscedasticity) and no curvature.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Valid OLS regression requires that residuals are normally distributed with constant variance (homoscedasticity) and exhibit no non-linear patterns. A random horizontal scatter band around zero confirms model adequacy.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> A U-shaped residual pattern indicates unmodeled non-linearity requiring polynomial terms.</li>
                                <li><strong>Why C is incorrect:</strong> Expanding residuals indicate heteroscedasticity, violating OLS assumptions.</li>
                                <li><strong>Why D is incorrect:</strong> Exactly zero residuals indicate pure interpolation or severe overfitting.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Multicollinearity Studio):</strong> During the Regression Assumptions Studio, what diagnostic metric flagged that 'soil_moisture_pct' and 'soil_water_tension_bars' were collinear, causing unstable regression coefficients?</p>
                    <ul>
                        <li>A) Variance Inflation Factor (VIF) exceeding 10.0 for both variables</li>
                        <li>B) The p-value was exactly 0.50</li>
                        <li>C) The R-squared was negative</li>
                        <li>D) The number of observations was odd</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Variance Inflation Factor (VIF) > 10.0 flagged severe multicollinearity between moisture metrics.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> VIF measures how much the variance of an estimated regression coefficient increases when features are correlated. A VIF > 5–10 indicates severe multicollinearity, requiring dropping or combining redundant features.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> A p-value of 0.50 indicates statistical non-significance, not multicollinearity.</li>
                                <li><strong>Why C is incorrect:</strong> Multicollinearity typically inflates R², it does not make it negative.</li>
                                <li><strong>Why D is incorrect:</strong> Odd or even observation counts have zero statistical connection to multicollinearity.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Crop Yield Predictor, which Scikit-Learn attributes extracted the learned feature slope weights and baseline intercept?</p>
                    <ul>
                        <li>A) model.coef_ and model.intercept_</li>
                        <li>B) model.weights_ and model.bias_</li>
                        <li>C) model.slopes_ and model.origin_</li>
                        <li>D) model.parameters_()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>model.coef_ holds the slope coefficient array and model.intercept_ holds the scalar intercept.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Following Scikit-Learn convention, attributes learned during <code>fit()</code> end with a trailing underscore. In <code>LinearRegression</code>, <code>coef_</code> stores feature slopes and <code>intercept_</code> stores the baseline intercept.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> weights_ and bias_ are naming conventions used in deep learning frameworks like PyTorch, not Scikit-Learn linear models.</li>
                                <li><strong>Why C is incorrect:</strong> slopes_ and origin_ are non-existent attributes.</li>
                                <li><strong>Why D is incorrect:</strong> parameters_() is invalid syntax.</li>
                            </ul>
                        </div>
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
