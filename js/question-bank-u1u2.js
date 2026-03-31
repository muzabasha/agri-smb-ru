// Question Bank - Units 1 & 2 HOT Questions
// 10 marks each, with scheme and detailed solution

const questionBankUnit1 = {
    unitId: 1,
    unitTitle: "Unit 1: Fundamentals of AI and Python Programming",
    topicsCovered: ["m1-t1","m1-t2","m1-t3","m1-t4","m1-t5","m1-t6","m1-t7","m1-t8","m1-t9","m1-t10","m1-t11","m1-t12","m1-t13","m1-t14","m1-t15","m1-t16","m1-t17","m1-t18","m1-t19"],
    questions: [
        {
            id: "u1-q1",
            topicId: "m1-t1",
            topicTitle: "Introduction to Artificial Intelligence & ML Paradigms",
            question: "Define Artificial Intelligence. Distinguish between AI, Machine Learning, and Deep Learning with examples. Explain three types of Machine Learning paradigms (Supervised, Unsupervised, Reinforcement Learning) with agricultural use cases for each.",
            marks: 10,
            scheme: [
                { points: 2, description: "Definition of AI and distinction between AI, ML, DL" },
                { points: 2, description: "Supervised Learning – definition and agri example" },
                { points: 2, description: "Unsupervised Learning – definition and agri example" },
                { points: 2, description: "Reinforcement Learning – definition and agri example" },
                { points: 2, description: "Comparative summary / diagram" }
            ],
            solution: `<h4>1. Definition and Distinction (2 marks)</h4>
<p><strong>Artificial Intelligence (AI)</strong> is the simulation of human intelligence processes by computer systems, enabling machines to perform tasks that typically require human intelligence (reasoning, learning, problem-solving).</p>
<table class="hot-table"><thead><tr><th>Aspect</th><th>AI</th><th>ML</th><th>DL</th></tr></thead>
<tbody>
<tr><td>Scope</td><td>Broadest – all intelligent systems</td><td>Subset of AI – learns from data</td><td>Subset of ML – uses neural networks</td></tr>
<tr><td>Data Needed</td><td>Rules-based or data</td><td>Structured data</td><td>Large unstructured data</td></tr>
<tr><td>Example</td><td>Expert Systems</td><td>Linear Regression</td><td>CNN for image recognition</td></tr>
</tbody></table>

<h4>2. Supervised Learning (2 marks)</h4>
<p><strong>Definition:</strong> The model learns from labeled training data where input-output pairs are provided. It learns a mapping function f(X)→Y.</p>
<p><strong>Agricultural Example:</strong> Crop yield prediction – historical data of rainfall, temperature, fertilizer (X) is used with known yields (Y) to train a regression model. Disease classification – labeled leaf images (diseased/healthy) train a classifier.</p>

<h4>3. Unsupervised Learning (2 marks)</h4>
<p><strong>Definition:</strong> The model finds hidden patterns in data without labeled outputs. It discovers inherent structure in the data.</p>
<p><strong>Agricultural Example:</strong> Soil segmentation – clustering soil samples by nutrients (N, P, K) without predefined labels to identify distinct soil zones. Market segmentation – grouping farmers by purchasing behavior for targeted recommendations.</p>

<h4>4. Reinforcement Learning (2 marks)</h4>
<p><strong>Definition:</strong> An agent learns by interacting with an environment, taking actions, and receiving rewards or penalties. It optimizes a policy to maximize cumulative reward.</p>
<p><strong>Agricultural Example:</strong> Precision irrigation robot – the agent (robot) takes actions (open/close valve) and receives rewards (optimal moisture level) or penalties (water waste), learning the best irrigation policy over time.</p>

<h4>5. Comparative Summary (2 marks)</h4>
<table class="hot-table"><thead><tr><th>Paradigm</th><th>Data Type</th><th>Output</th><th>Agri Use Case</th></tr></thead>
<tbody>
<tr><td>Supervised</td><td>Labeled</td><td>Prediction/Classification</td><td>Yield Prediction, Disease Detection</td></tr>
<tr><td>Unsupervised</td><td>Unlabeled</td><td>Clusters/Patterns</td><td>Soil Clustering, Market Segmentation</td></tr>
<tr><td>Reinforcement</td><td>Reward signals</td><td>Policy/Action</td><td>Irrigation Robots, Drone Control</td></tr>
</tbody></table>`
        },
        {
            id: "u1-q2",
            topicId: "m1-t3",
            topicTitle: "History of AI/ML & Applications in Agriculture",
            question: "Trace the historical evolution of AI from 1950 to present day, highlighting key milestones. Explain five major AI/ML applications in agriculture with their impact on productivity and sustainability.",
            marks: 10,
            scheme: [
                { points: 3, description: "Timeline of AI evolution with at least 5 milestones" },
                { points: 1, description: "Modern AI era (Deep Learning, LLMs)" },
                { points: 4, description: "Five AI/ML applications in agriculture (0.8 marks each)" },
                { points: 2, description: "Impact on productivity and sustainability" }
            ],
            solution: `<h4>1. Historical Evolution of AI (3 marks)</h4>
<table class="hot-table"><thead><tr><th>Year</th><th>Milestone</th><th>Significance</th></tr></thead>
<tbody>
<tr><td>1950</td><td>Turing Test (Alan Turing)</td><td>First formal definition of machine intelligence</td></tr>
<tr><td>1956</td><td>Dartmouth Conference</td><td>Term "Artificial Intelligence" coined by John McCarthy</td></tr>
<tr><td>1969</td><td>First AI Winter</td><td>Limitations of symbolic AI recognized</td></tr>
<tr><td>1986</td><td>Backpropagation (Rumelhart)</td><td>Enabled training of multi-layer neural networks</td></tr>
<tr><td>1997</td><td>Deep Blue beats Kasparov</td><td>AI demonstrated strategic reasoning superiority</td></tr>
<tr><td>2012</td><td>AlexNet (ImageNet)</td><td>Deep Learning revolution began</td></tr>
<tr><td>2017</td><td>Transformer Architecture</td><td>Foundation for GPT, BERT, modern LLMs</td></tr>
<tr><td>2022-24</td><td>ChatGPT, Gemini</td><td>Generative AI becomes mainstream</td></tr>
</tbody></table>

<h4>2. Modern AI Era (1 mark)</h4>
<p>Today's AI is characterized by Large Language Models (LLMs), Foundation Models, and multimodal AI that can process text, images, and audio simultaneously. Transfer learning enables pre-trained models to be fine-tuned for specific agricultural tasks.</p>

<h4>3. Five AI/ML Applications in Agriculture (4 marks)</h4>
<ul>
<li><strong>Precision Farming:</strong> GPS-guided machinery, variable rate application of fertilizers based on soil maps created by ML models. Reduces input costs by 15–20%.</li>
<li><strong>Crop Disease Detection:</strong> CNNs trained on PlantVillage dataset detect 26+ diseases from smartphone photos with >95% accuracy, enabling early intervention.</li>
<li><strong>Yield Prediction:</strong> Random Forest and LSTM models integrate satellite, weather, and soil data to predict yields 6–8 weeks before harvest, enabling better market planning.</li>
<li><strong>Precision Irrigation:</strong> IoT soil moisture sensors combined with ML models optimize irrigation schedules, reducing water use by 30–40% while maintaining yields.</li>
<li><strong>Market Price Forecasting:</strong> ARIMA and LSTM models analyze historical price data, weather forecasts, and demand patterns to predict commodity prices, helping farmers plan selling strategies.</li>
</ul>

<h4>4. Impact on Productivity & Sustainability (2 marks)</h4>
<p><strong>Productivity:</strong> AI-driven precision agriculture can increase crop yields by 10–20%, reduce labor costs by 25%, and decrease post-harvest losses through better logistics planning.</p>
<p><strong>Sustainability:</strong> Reduced chemical inputs (15–30% less pesticide), optimized water usage, and improved soil health monitoring contribute to meeting UN SDG Goal 2 (Zero Hunger) and SDG 15 (Life on Land).</p>`
        },
        {
            id: "u1-q3",
            topicId: "m1-t5",
            topicTitle: "Career Opportunities in AgriTech & Data Collection",
            question: "Identify six career roles in AgriTech powered by AI/ML. For each role, describe key responsibilities and required skills. Additionally, explain four methods of agricultural data collection used as inputs for ML models.",
            marks: 10,
            scheme: [
                { points: 4, description: "Six career roles (0.5 marks description + 0.2 marks skills each = ~0.7 each)" },
                { points: 4, description: "Four data collection methods with technical details (1 mark each)" },
                { points: 2, description: "Integration of career skills with data collection context" }
            ],
            solution: `<h4>1. Career Roles in AgriTech (4 marks)</h4>
<table class="hot-table"><thead><tr><th>Role</th><th>Responsibilities</th><th>Key Skills</th></tr></thead>
<tbody>
<tr><td>Agricultural Data Scientist</td><td>Build crop yield and disease prediction models</td><td>Python, ML, domain knowledge, statistics</td></tr>
<tr><td>Precision Farming Specialist</td><td>Deploy GPS/IoT systems, analyze field data</td><td>GIS, IoT, remote sensing, GPS technology</td></tr>
<tr><td>Computer Vision Engineer</td><td>Develop image-based disease/pest detection</td><td>CNNs, OpenCV, TensorFlow/PyTorch</td></tr>
<tr><td>AgriTech Product Manager</td><td>Bridge farmers and tech teams, define product roadmap</td><td>Agronomy knowledge, project management, communication</td></tr>
<tr><td>Remote Sensing Analyst</td><td>Process satellite/drone imagery for crop monitoring</td><td>QGIS, Python, satellite platforms (NDVI analysis)</td></tr>
<tr><td>ML Engineer – Supply Chain</td><td>Optimize logistics, demand forecasting, price prediction</td><td>Time series analysis, optimization algorithms, SQL</td></tr>
</tbody></table>

<h4>2. Agricultural Data Collection Methods (4 marks)</h4>
<p><strong>a) IoT Sensors (1 mark):</strong> Deployed in fields to continuously monitor soil moisture, temperature, pH, humidity, and light intensity. Data is transmitted wirelessly (LoRaWAN, cellular) to cloud platforms. Example: Decagon 5TE sensors for soil moisture at multiple depths. Provides real-time, spatially distributed data.</p>
<p><strong>b) Satellite Imagery (1 mark):</strong> Multispectral satellites (Sentinel-2, Landsat) capture images in visible, near-infrared (NIR), and shortwave infrared (SWIR) bands. NDVI (Normalized Difference Vegetation Index) = (NIR - Red)/(NIR + Red) derived from imagery to assess crop health at field scale.</p>
<p><strong>c) Drone-based Collection (1 mark):</strong> UAVs equipped with RGB, multispectral, or thermal cameras perform low-altitude field surveys. Resolution of 1–5 cm/pixel enables detection of individual plant stress, pest damage, or weed patches. Data processed using photogrammetry tools (Agisoft Metashape).</p>
<p><strong>d) Manual/Lab Collection (1 mark):</strong> Soil core sampling for lab analysis of N, P, K, pH, organic matter. Field surveys for pest counts, disease incidence scoring, plant height measurements. Stored in databases for training supervised learning models.</p>

<h4>3. Integration of Career Skills with Data Context (2 marks)</h4>
<p>A Data Scientist uses IoT and satellite data to train yield prediction models. A Computer Vision Engineer processes drone imagery to detect diseases. Remote Sensing Analysts work with satellite platforms (NDVI) to create field health maps used by Precision Farming Specialists. Career paths in AgriTech require both technical ML skills and agricultural domain understanding.</p>`
        },
        {
            id: "u1-q4",
            topicId: "m1-t6",
            topicTitle: "Mathematical Foundations & Statistics for ML",
            question: "Explain the mathematical foundations required for Machine Learning including (a) key statistical concepts—mean, variance, standard deviation, correlation with formulas; (b) probability distributions relevant to ML; and (c) how these concepts apply in evaluating an agricultural ML model.",
            marks: 10,
            scheme: [
                { points: 3, description: "Statistical measures with correct formulas and interpretation" },
                { points: 3, description: "Probability distributions (Normal, Bernoulli, Binomial) with explanations" },
                { points: 2, description: "Application in agricultural ML model evaluation" },
                { points: 2, description: "Numerical examples using agricultural data" }
            ],
            solution: `<h4>1. Key Statistical Concepts (3 marks)</h4>
<p>Given dataset of wheat yield (tons/hectare): X = [3.2, 4.1, 3.8, 5.0, 4.5, 3.9, 4.2, 4.8]</p>
<ul>
<li><strong>Mean (μ):</strong> μ = (ΣXᵢ)/n = (3.2+4.1+3.8+5.0+4.5+3.9+4.2+4.8)/8 = 33.5/8 = <strong>4.1875 t/ha</strong>. Represents the average expected yield.</li>
<li><strong>Variance (σ²):</strong> σ² = Σ(Xᵢ - μ)²/n. Measures spread of data. High variance → more variability in yield (climate unpredictability).</li>
<li><strong>Standard Deviation (σ):</strong> σ = √σ². For our data, σ ≈ 0.56 t/ha. Represents typical deviation from mean.</li>
<li><strong>Correlation (r):</strong> r = Σ[(Xᵢ-μₓ)(Yᵢ-μᵧ)] / [n·σₓ·σᵧ]. Range: -1 to +1. r=0.87 between rainfall and yield indicates strong positive correlation.</li>
</ul>

<h4>2. Probability Distributions (3 marks)</h4>
<p><strong>a) Normal Distribution:</strong> P(x) = (1/σ√2π)·e^(-(x-μ)²/2σ²). Most ML algorithms assume features follow normal distribution. Yield data across many plots approximates a bell curve. Used in z-score normalization for feature scaling.</p>
<p><strong>b) Bernoulli Distribution:</strong> P(X=1)=p, P(X=0)=1-p. Models binary outcomes: disease present (1) or absent (0). Foundation for logistic regression which predicts disease probability in crop health models.</p>
<p><strong>c) Binomial Distribution:</strong> P(X=k) = C(n,k)·pᵏ·(1-p)^(n-k). Models k successes in n trials. Example: probability that exactly 3 out of 10 plants in a row are infected, given infection probability p=0.2.</p>

<h4>3. Application in Agricultural ML Model Evaluation (2 marks)</h4>
<p>When evaluating a yield prediction model: residuals (predicted - actual) should follow a Normal distribution (N(0,σ²)) — checked via QQ-plot. High variance in residuals signals poor model fit. Correlation between features and target helps with feature selection — features with |r| > 0.5 are useful predictors. Standard deviation of predictions indicates model confidence intervals for farmer planning.</p>

<h4>4. Numerical Example (2 marks)</h4>
<p>Soil pH values: [6.2, 6.5, 7.1, 5.8, 6.8, 7.0, 6.3, 6.6]. Mean=6.5375, σ≈0.41. A new soil sample with pH=8.2 has z-score=(8.2-6.5375)/0.41=4.05 → statistical outlier (>3σ), flagged for removal before training. Rainfall-yield correlation r=0.82 → rainfall is a strong predictor variable for the yield model.</p>`
        },
        {
            id: "u1-q5",
            topicId: "m1-t8",
            topicTitle: "Linear Algebra for Machine Learning",
            question: "Explain the role of Linear Algebra in Machine Learning. Discuss vectors, matrices, and matrix operations (multiplication, transpose, inverse) with examples. Show how matrix operations are used in representing and solving a simple linear regression problem for crop yield prediction.",
            marks: 10,
            scheme: [
                { points: 2, description: "Vectors and matrices definition with examples" },
                { points: 3, description: "Matrix operations: multiplication, transpose, inverse with formulas" },
                { points: 3, description: "Application in linear regression: normal equation derivation" },
                { points: 2, description: "Worked numerical example with agricultural data" }
            ],
            solution: `<h4>1. Vectors and Matrices (2 marks)</h4>
<p><strong>Vector:</strong> An ordered array of numbers representing a data point. Feature vector for a crop field: x = [rainfall, temperature, N_level] = [120, 28, 45]ᵀ. Each feature is one dimension.</p>
<p><strong>Matrix:</strong> A 2D array. Design matrix X contains all training examples as rows. For 4 training samples with 2 features: X ∈ ℝ^(4×3) (including bias column of 1s).</p>
<pre>X = [[1, 120, 28],
     [1, 150, 25],
     [1, 90,  30],
     [1, 200, 22]]</pre>

<h4>2. Matrix Operations (3 marks)</h4>
<p><strong>Transpose (Xᵀ):</strong> Rows become columns. (X^T)ᵢⱼ = Xⱼᵢ. Used to compute XᵀX in regression. Shape: (4×3)ᵀ = (3×4).</p>
<p><strong>Matrix Multiplication (AB):</strong> (AB)ᵢⱼ = Σₖ AᵢₖBₖⱼ. Requires inner dimensions to match. Used for predictions: ŷ = Xθ where θ is the weight vector.</p>
<p><strong>Matrix Inverse (A⁻¹):</strong> AA⁻¹ = I. Exists only for square, non-singular matrices. Used in the Normal Equation: θ = (XᵀX)⁻¹Xᵀy. Computationally expensive for large datasets (use gradient descent instead).</p>

<h4>3. Linear Regression via Normal Equation (3 marks)</h4>
<p>Goal: Find θ = [θ₀, θ₁, θ₂] (intercept + coefficients) minimizing Mean Squared Error:</p>
<p>J(θ) = (1/2m)||Xθ - y||² </p>
<p>Taking derivative and setting to zero: ∂J/∂θ = XᵀXθ - Xᵀy = 0</p>
<p><strong>Normal Equation:</strong> θ = (XᵀX)⁻¹Xᵀy</p>
<p>Prediction: ŷ = Xθ = X(XᵀX)⁻¹Xᵀy (projection onto column space of X)</p>
<p>This gives minimum MSE solution without iteration. For new input x_new: ŷ_new = x_new · θ</p>

<h4>4. Numerical Example (2 marks)</h4>
<p>Simple case: 2 data points, rainfall (x) vs yield (y):</p>
<pre>X = [[1, 100], [1, 150]]   y = [[3.5], [4.8]]
XᵀX = [[2, 250],[250, 32500]]
Xᵀy = [[8.3],[1115]]
θ = (XᵀX)⁻¹Xᵀy → θ₀=0.9, θ₁=0.026</pre>
<p>Model: yield = 0.9 + 0.026×rainfall. For 180mm rainfall: ŷ = 0.9 + 0.026×180 = <strong>5.58 t/ha</strong>.</p>`
        },
        {
            id: "u1-q6",
            topicId: "m1-t9",
            topicTitle: "Data Types, Structures & Python Environment",
            question: "Describe four types of data encountered in agricultural machine learning (structured, unstructured, time series, image data) with examples. Explain Python data types (int, float, string, bool, list, dict) with type conversion. Write a Python function to validate and clean a soil dataset entry.",
            marks: 10,
            scheme: [
                { points: 3, description: "Four data types with agricultural examples (0.75 each)" },
                { points: 3, description: "Python data types with type conversion examples" },
                { points: 4, description: "Python function with validation logic and comments" }
            ],
            solution: `<h4>1. Four Types of Agricultural Data (3 marks)</h4>
<table class="hot-table"><thead><tr><th>Data Type</th><th>Description</th><th>Agricultural Example</th><th>ML Use</th></tr></thead>
<tbody>
<tr><td>Structured</td><td>Tabular, rows & columns, well-defined schema</td><td>Soil test reports (pH, N, P, K, OC as columns)</td><td>Regression, Classification</td></tr>
<tr><td>Unstructured</td><td>No predefined format, complex patterns</td><td>Farmer voice notes, field reports in free text</td><td>NLP, Sentiment Analysis</td></tr>
<tr><td>Time Series</td><td>Sequential data with timestamps</td><td>Daily rainfall, weekly NDVI readings, price history</td><td>ARIMA, LSTM forecasting</td></tr>
<tr><td>Image Data</td><td>Pixel arrays (RGB, multispectral)</td><td>Drone leaf images, satellite field maps</td><td>CNN, Object Detection</td></tr>
</tbody></table>

<h4>2. Python Data Types and Conversion (3 marks)</h4>
<ul>
<li><strong>int:</strong> <code>soil_samples = 150</code> – whole numbers</li>
<li><strong>float:</strong> <code>ph_value = 6.8</code> – decimal measurements</li>
<li><strong>string:</strong> <code>crop_name = "Wheat"</code> – text labels</li>
<li><strong>bool:</strong> <code>is_irrigated = True</code> – binary flags</li>
<li><strong>list:</strong> <code>npk = [45, 22, 18]</code> – ordered mutable collection</li>
<li><strong>dict:</strong> <code>soil = {"pH": 6.8, "N": 45, "crop": "Rice"}</code> – key-value pairs</li>
</ul>
<p><strong>Type Conversion:</strong></p>
<pre><code>ph_str = "6.8"         # string input from CSV
ph_float = float(ph_str)   # → 6.8 (float)
sample_id = int("23")      # → 23 (int)
flag = bool(1)             # → True
print(type(ph_float))      # &lt;class 'float'&gt;</code></pre>

<h4>3. Python Function: Soil Data Validation (4 marks)</h4>
<pre><code>def validate_soil_entry(entry):
    """
    Validates and cleans a soil dataset dictionary entry.
    Args: entry (dict) – raw soil record
    Returns: cleaned record or error dict
    """
    errors = []
    cleaned = {}

    # Validate pH (valid range: 3.5 – 9.5)
    try:
        ph = float(entry.get("pH", None))
        if 3.5 <= ph <= 9.5:
            cleaned["pH"] = round(ph, 2)
        else:
            errors.append(f"pH out of range: {ph}")
    except (TypeError, ValueError):
        errors.append("pH missing or non-numeric")

    # Validate Nitrogen (0–300 kg/ha)
    try:
        n = float(entry.get("N", None))
        cleaned["N"] = max(0, min(n, 300))  # clamp to valid range
    except (TypeError, ValueError):
        cleaned["N"] = None
        errors.append("Nitrogen value invalid, set to None")

    # Validate crop name
    valid_crops = ["rice", "wheat", "maize", "sugarcane","cotton"]
    crop = str(entry.get("crop", "")).strip().lower()
    if crop in valid_crops:
        cleaned["crop"] = crop.capitalize()
    else:
        errors.append(f"Unknown crop: {crop}")

    cleaned["valid"] = len(errors) == 0
    cleaned["errors"] = errors
    return cleaned

# Usage
sample = {"pH": "6.8", "N": "250", "crop": "Rice"}
result = validate_soil_entry(sample)
print(result)
# {'pH': 6.8, 'N': 250.0, 'crop': 'Rice', 'valid': True, 'errors': []}</code></pre>`
        },
        {
            id: "u1-q7",
            topicId: "m1-t14",
            topicTitle: "Control Structures & Loops",
            question: "Explain Python control structures (if-elif-else) and loops (for, while) with syntax. Write a Python program that: (a) reads a list of soil pH values, (b) classifies each as Acidic/Neutral/Alkaline using if-elif-else, (c) counts occurrences using a loop, and (d) uses a while loop to prompt re-entry if an invalid pH is entered.",
            marks: 10,
            scheme: [
                { points: 2, description: "Control structures syntax and explanation" },
                { points: 2, description: "Loops (for, while) syntax and explanation" },
                { points: 3, description: "Program: pH classification with if-elif-else and for loop" },
                { points: 3, description: "Input validation while loop with comprehensive logic" }
            ],
            solution: `<h4>1. Control Structures (2 marks)</h4>
<p>Python uses indentation (4 spaces) to define code blocks. Syntax:</p>
<pre><code>if condition1:
    # executes if condition1 True
elif condition2:
    # executes if condition1 False, condition2 True
else:
    # executes if all conditions False</code></pre>
<p>Conditions use comparison operators (==, !=, &lt;, &gt;, &lt;=, &gt;=) and logical operators (and, or, not).</p>

<h4>2. Loops (2 marks)</h4>
<pre><code># for loop – iterate over sequence
for item in collection:
    process(item)

# while loop – repeat while condition True
while condition:
    do_something()
    update_condition()

# Loop control: break (exit), continue (skip)</code></pre>

<h4>3. pH Classification Program (3 marks)</h4>
<pre><code>def classify_ph(ph):
    """Classify soil pH into category."""
    if ph < 6.0:
        return "Acidic"
    elif 6.0 <= ph <= 7.5:
        return "Neutral"
    else:
        return "Alkaline"

# Sample pH readings from 10 soil plots
ph_values = [5.5, 6.2, 7.8, 6.0, 4.9, 7.1, 8.3, 6.8, 5.2, 7.5]

# Count categories
counts = {"Acidic": 0, "Neutral": 0, "Alkaline": 0}
print("Plot-wise pH Classification:")
print("-" * 35)
for i, ph in enumerate(ph_values, start=1):
    category = classify_ph(ph)
    counts[category] += 1
    print(f"Plot {i:2d}: pH={ph:.1f} → {category}")

print("\nSummary:")
for category, count in counts.items():
    bar = "█" * count
    print(f"{category:<10}: {bar} ({count})")</code></pre>
<p><strong>Output:</strong> Acidic: 3 plots, Neutral: 5 plots, Alkaline: 2 plots</p>

<h4>4. Input Validation with While Loop (3 marks)</h4>
<pre><code>def get_valid_ph():
    """Prompt user until valid pH (0-14) is entered."""
    while True:
        user_input = input("Enter soil pH (0.0 – 14.0): ")
        try:
            ph = float(user_input)
            if 0.0 <= ph <= 14.0:
                return ph          # valid input, exit loop
            else:
                print(f"❌ pH {ph} is out of range [0, 14]. Try again.")
        except ValueError:
            print(f"❌ '{user_input}' is not a number. Please enter a numeric value.")

# Interactive session
ph = get_valid_ph()
print(f"✅ Accepted pH: {ph} → {classify_ph(ph)} soil")
# Enter: "abc" → error msg
# Enter: "16.5" → range error
# Enter: "6.5" → Accepted. Neutral</code></pre>`
        },
        {
            id: "u1-q8",
            topicId: "m1-t16",
            topicTitle: "Functions and Modularity",
            question: "Explain the concept of functions in Python: definition, parameters, return values, and scope (local vs global variables). Write a modular Python program with at least three functions to: (a) calculate NPK requirements for a crop, (b) recommend fertilizer type, and (c) generate a soil health report.",
            marks: 10,
            scheme: [
                { points: 2, description: "Function definition, parameters, return values syntax" },
                { points: 2, description: "Scope explanation: local vs global with examples" },
                { points: 3, description: "calculate_npk_requirement function with correct logic" },
                { points: 3, description: "recommend_fertilizer and generate_report functions" }
            ],
            solution: `<h4>1. Function Definition, Parameters, Return Values (2 marks)</h4>
<pre><code># Function definition syntax
def function_name(param1, param2, default_param=value):
    """Docstring: brief description."""
    # function body
    result = param1 + param2
    return result      # return value to caller

# Function call
output = function_name(10, 20)   # positional args
output = function_name(param1=10, param2=20)  # keyword args</code></pre>
<p>Functions promote <strong>DRY principle</strong> (Don't Repeat Yourself), improve reusability, and make code testable in isolation.</p>

<h4>2. Scope: Local vs Global Variables (2 marks)</h4>
<pre><code>crop_db = "Rice"   # Global variable – accessible everywhere

def show_crop():
    local_yield = 5.2    # Local – only inside this function
    print(crop_db)       # Can READ global variable
    print(local_yield)

show_crop()
# print(local_yield)  # ❌ NameError: not accessible outside

# Modifying global variable inside function
counter = 0
def increment():
    global counter
    counter += 1    # global keyword required to MODIFY</code></pre>

<h4>3. NPK Requirement Calculation Function (3 marks)</h4>
<pre><code>def calculate_npk_requirement(crop, area_ha, soil_n, soil_p, soil_k):
    """
    Calculate NPK fertilizer requirement.
    Args: crop (str), area_ha (float), soil_n/p/k (kg/ha current levels)
    Returns: dict with required N, P, K in kg
    """
    # Standard crop NPK recommendations (kg/ha)
    crop_standards = {
        "rice":      {"N": 120, "P": 60, "K": 60},
        "wheat":     {"N": 150, "P": 60, "K": 40},
        "maize":     {"N": 180, "P": 70, "K": 60},
        "sugarcane": {"N": 250, "P": 80, "K": 120}
    }
    crop = crop.lower()
    if crop not in crop_standards:
        return {"error": f"Crop '{crop}' not in database"}

    std = crop_standards[crop]
    required_N = max(0, (std["N"] - soil_n) * area_ha)
    required_P = max(0, (std["P"] - soil_p) * area_ha)
    required_K = max(0, (std["K"] - soil_k) * area_ha)
    return {"N_kg": required_N, "P_kg": required_P, "K_kg": required_K}</code></pre>

<h4>4. Fertilizer Recommendation & Report Functions (3 marks)</h4>
<pre><code>def recommend_fertilizer(npk_req):
    """Recommend fertilizer type based on dominant deficiency."""
    if "error" in npk_req:
        return npk_req["error"]
    dominant = max(npk_req, key=lambda k: npk_req[k])
    recs = {
        "N_kg": "Apply Urea (46% N) at recommended rate",
        "P_kg": "Apply DAP (18% N, 46% P₂O₅) or SSP",
        "K_kg": "Apply MOP (Muriate of Potash, 60% K₂O)"
    }
    return recs.get(dominant, "Balanced NPK fertilizer sufficient")

def generate_report(crop, area_ha, soil_n, soil_p, soil_k):
    """Generate comprehensive soil health and fertilizer report."""
    npk_req = calculate_npk_requirement(crop, area_ha, soil_n, soil_p, soil_k)
    rec = recommend_fertilizer(npk_req)
    report = f"""
╔══════════════════════════════════════╗
║       SOIL HEALTH REPORT             ║
╠══════════════════════════════════════╣
║ Crop: {crop:<30} ║
║ Area: {area_ha} ha                            
║ Current: N={soil_n}, P={soil_p}, K={soil_k} kg/ha
╠══════════════════════════════════════╣
║ REQUIRED INPUTS:
║   Nitrogen : {npk_req.get('N_kg', 0):.1f} kg
║   Phosphorus: {npk_req.get('P_kg', 0):.1f} kg
║   Potassium : {npk_req.get('K_kg', 0):.1f} kg
╠══════════════════════════════════════╣
║ RECOMMENDATION: {rec}
╚══════════════════════════════════════╝"""
    return report

# Main program
print(generate_report("rice", 2.5, 80, 30, 45))</code></pre>`
        },
        {
            id: "u1-q9",
            topicId: "m1-t17",
            topicTitle: "Lists, Tuples, Dictionaries",
            question: "Explain Python's core data structures: Lists, Tuples, and Dictionaries. Compare their properties (mutability, ordering, indexing). Write a Python program that uses all three to store and analyze agricultural field data, including operations like slicing, adding entries, and dictionary comprehension.",
            marks: 10,
            scheme: [
                { points: 3, description: "Comparison of list, tuple, dict with properties and use cases" },
                { points: 2, description: "List operations: slicing, sorting, comprehension" },
                { points: 2, description: "Dictionary operations: update, get, items(), comprehension" },
                { points: 3, description: "Complete agricultural program using all three structures" }
            ],
            solution: `<h4>1. Comparison of Data Structures (3 marks)</h4>
<table class="hot-table"><thead><tr><th>Property</th><th>List</th><th>Tuple</th><th>Dictionary</th></tr></thead>
<tbody>
<tr><td>Syntax</td><td>[1, 2, 3]</td><td>(1, 2, 3)</td><td>{"a":1, "b":2}</td></tr>
<tr><td>Mutable</td><td>✅ Yes</td><td>❌ No</td><td>✅ Yes</td></tr>
<tr><td>Ordered</td><td>✅ Yes</td><td>✅ Yes</td><td>✅ Yes (Python 3.7+)</td></tr>
<tr><td>Indexed</td><td>By integer [0]</td><td>By integer [0]</td><td>By key ["key"]</td></tr>
<tr><td>Duplicate values</td><td>✅ Allowed</td><td>✅ Allowed</td><td>Values allowed; keys unique</td></tr>
<tr><td>Agri use</td><td>Yield readings list</td><td>GPS coordinates (lat,lon)</td><td>Soil profile per plot</td></tr>
</tbody></table>

<h4>2. List & Tuple Operations (2 marks)</h4>
<pre><code># LIST: mutable – crop yield readings
yields = [3.2, 4.5, 2.8, 5.1, 4.0, 3.7]
yields.append(4.9)          # add reading
yields.sort()                # ascending sort
top3 = yields[-3:]           # slicing: last 3
avg = sum(yields)/len(yields) # 4.03 t/ha
high_yield = [y for y in yields if y > 4.0]  # list comprehension

# TUPLE: immutable – fixed GPS coordinates
plot1_gps = (12.9716, 77.5946)   # (latitude, longitude)
lat, lon = plot1_gps             # tuple unpacking
# Cannot modify: plot1_gps[0] = 13.0 → TypeError</code></pre>

<h4>3. Dictionary Operations (2 marks)</h4>
<pre><code># DICT: key-value – soil profile of a plot
soil_plot1 = {
    "plot_id": "F-01",
    "pH": 6.5,
    "N": 180,
    "P": 45,
    "K": 60,
    "organic_carbon": 0.82
}
# Access value
ph = soil_plot1.get("pH", 7.0)   # safe access
# Update
soil_plot1["P"] = 55             # update value
soil_plot1["moisture"] = 0.35    # add new key
# Iterate
for key, val in soil_plot1.items():
    print(f"{key}: {val}")
# Dict comprehension: scale N values by 1.1 (10% buffer)
scaled = {k: v*1.1 if k=="N" else v for k,v in soil_plot1.items()}</code></pre>

<h4>4. Comprehensive Agricultural Program (3 marks)</h4>
<pre><code># Agricultural Field Data Management System
# Fixed metadata as tuples
CROP_SEASONS = ("Kharif", "Rabi", "Zaid")
NUTRIENT_LIMITS = {"N": (0,300), "P": (0,120), "K": (0,150)}

# Field records as list of dicts
field_records = [
    {"id": "F01", "crop": "Rice",  "season": "Kharif", "yield": 4.8, "pH": 6.2, "N": 160},
    {"id": "F02", "crop": "Wheat", "season": "Rabi",   "yield": 5.1, "pH": 7.0, "N": 140},
    {"id": "F03", "crop": "Maize", "season": "Kharif", "yield": 3.8, "pH": 6.8, "N": 200},
    {"id": "F04", "crop": "Rice",  "season": "Kharif", "yield": 4.2, "pH": 5.8, "N": 120},
]

# Analysis using all three structures
def analyze_fields(records):
    # List: extract all yields
    yields = [r["yield"] for r in records]
    avg_yield = sum(yields)/len(yields)

    # Dict: group by season
    by_season = {}
    for r in records:
        season = r["season"]
        by_season.setdefault(season, []).append(r["yield"])

    # Season averages
    season_avg = {s: round(sum(v)/len(v),2) for s,v in by_season.items()}

    # Tuple: find min/max as fixed benchmark
    benchmark = (min(yields), max(yields))

    # Low pH alert list
    low_ph_plots = [r["id"] for r in records if r["pH"] < 6.0]

    return {
        "avg_yield": round(avg_yield, 2),
        "season_yields": season_avg,
        "benchmark": benchmark,
        "low_ph_alert": low_ph_plots
    }

report = analyze_fields(field_records)
for k, v in report.items():
    print(f"{k}: {v}")
# avg_yield: 4.47
# season_yields: {'Kharif': 4.27, 'Rabi': 5.1}
# benchmark: (3.8, 5.1)
# low_ph_alert: ['F04']</code></pre>`
        },
        {
            id: "u1-q10",
            topicId: "m1-t18",
            topicTitle: "String Manipulation & File Handling",
            question: "Explain Python string methods and file handling operations (read, write, CSV). Write a Python program that: (a) reads a CSV file containing soil test results, (b) processes and cleans each row using string methods, (c) applies pH classification using control structures, and (d) writes a formatted summary report to a new file.",
            marks: 10,
            scheme: [
                { points: 2, description: "Key string methods with examples" },
                { points: 2, description: "File handling: open modes, read/write, CSV module" },
                { points: 3, description: "CSV reading and string processing code" },
                { points: 3, description: "Data cleaning, classification, and file write operations" }
            ],
            solution: `<h4>1. String Methods (2 marks)</h4>
<pre><code>s = "  Rice Paddy, Kharif Season  "
s.strip()         # "Rice Paddy, Kharif Season" – remove whitespace
s.lower()         # normalize for comparison
s.upper()         # all caps
s.split(",")      # ["  Rice Paddy", " Kharif Season  "]
s.replace(",",";")# replace substrings
s.startswith("R") # True
f"Crop: {'rice':>10}"  # f-string formatting
"pH:6.8".split(":")[1] # "6.8" – extract value
",".join(["N","P","K"]) # "N,P,K" – join list to string</code></pre>

<h4>2. File Handling (2 marks)</h4>
<pre><code># File open modes
# 'r' – read, 'w' – write (overwrite), 'a' – append, 'rb' – binary read
with open("file.txt", "r") as f:  # context manager auto-closes
    content = f.read()            # entire file as string
    lines = f.readlines()         # list of lines

with open("output.txt", "w") as f:
    f.write("Result: 6.5\n")

import csv
with open("soil.csv", "r") as f:
    reader = csv.DictReader(f)    # rows as dicts with header keys
    for row in reader:
        print(row["pH"])</code></pre>

<h4>3. CSV Reading and String Processing (3 marks)</h4>
<pre><code>import csv

def read_soil_csv(filepath):
    """Read and clean soil CSV data using string methods."""
    records = []
    try:
        with open(filepath, "r", newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                # Clean each field using string methods
                plot_id = row.get("plot_id","").strip().upper()
                crop = row.get("crop","").strip().lower().capitalize()
                ph_str = row.get("pH","").strip().replace(",",".")
                n_str = row.get("N","").strip()

                # Type conversion with error handling
                try:
                    ph = float(ph_str)
                    n  = float(n_str)
                    if not (0 <= ph <= 14): ph = None
                    if not (0 <= n <= 300): n = None
                except ValueError:
                    ph, n = None, None

                records.append({
                    "plot_id": plot_id,
                    "crop": crop,
                    "pH": ph,
                    "N": n
                })
    except FileNotFoundError:
        print(f"File {filepath} not found.")
    return records</code></pre>

<h4>4. Classification and File Write (3 marks)</h4>
<pre><code">def classify_and_report(records, output_file):
    """Classify pH, generate report, write to file."""

    def ph_category(ph):
        if ph is None:    return "Invalid"
        if ph < 5.5:      return "Strongly Acidic"
        if ph < 6.5:      return "Slightly Acidic"
        if ph <= 7.5:     return "Neutral"
        if ph <= 8.5:     return "Alkaline"
        return "Strongly Alkaline"

    # Build report lines
    lines = []
    lines.append("=" * 55)
    lines.append("   SOIL HEALTH CLASSIFICATION REPORT")
    lines.append("=" * 55)
    lines.append(f"{'Plot':<8} {'Crop':<12} {'pH':>6} {'Category':<22} {'N':>8}")
    lines.append("-" * 55)

    summary = {}
    for r in records:
        cat = ph_category(r["pH"])
        ph_disp = f"{r['pH']:.2f}" if r["pH"] else "N/A"
        n_disp  = f"{r['N']:.1f}" if r["N"] else "N/A"
        lines.append(f"{r['plot_id']:<8} {r['crop']:<12} {ph_disp:>6} {cat:<22} {n_disp:>8}")
        summary[cat] = summary.get(cat, 0) + 1

    lines.append("=" * 55)
    lines.append("SUMMARY:")
    for cat, count in summary.items():
        lines.append(f"  {cat}: {count} plots")

    # Write to output file
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Report saved to {output_file}")

# Example usage
# records = read_soil_csv("soil_data.csv")
# classify_and_report(records, "soil_report.txt")</code></pre>`
        }
    ]
};
