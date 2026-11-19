// Module 2 Comprehensive Handouts - Part 3 (m2-t15 to m2-t20, m2-t22 to m2-t25)
// ML Core Concepts: Algorithms, Evaluation, and Tuning

const module2HandoutsPart3 = {
    'm2-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Supervised vs Unsupervised Learning</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is classifying drone imagery into 'Weed vs Crop' a supervised learning task, while segmenting a 5,000-acre farm into 'Management Zones' is an unsupervised task?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Weed classification has explicit ground truth: human agronomists label bounding boxes or pixels as 'Broadleaf Weed' or 'Soybean Seedling'. Management zoning has no predefined true labels; the algorithm performs unsupervised clustering (e.g., K-Means on EC, slope, and organic matter) to discover natural soil boundaries without human preconceptions.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Can you use unsupervised clustering to improve a downstream supervised crop yield predictor? How?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Yes! This is 'Semi-Supervised' or 'Feature Engineering': an unsupervised algorithm (like K-Means or PCA) discovers soil zones or compresses 20 spectral bands into 3 principal components. These cluster IDs or principal components are then fed as input features into a supervised regression model, boosting predictive accuracy.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Distinguish between supervised and unsupervised learning</li>
                    <li>Understand labeled vs unlabeled data</li>
                    <li>Identify when to use clustering vs classification</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Supervised = Teaching with Examples</strong></p>
                    <p>Like showing a new worker: "This is a weed, this is crop." You provide the answers (labels), and they learn.</p>
                    <hr>
                    <p><strong>Unsupervised = Sorting Without Knowing Types</strong></p>
                    <p>Like sorting a mixed basket of unknown fruits by size and color. You don't know the names, but you can group similar ones together!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.linear_model import LogisticRegression
import numpy as np

# === SUPERVISED LEARNING (Classification) ===
print("=== Supervised Learning: Crop Classification ===")
# Features: [Height, Color_Intensity]
X_train = [[10, 1], [12, 1], [30, 8], [32, 9]] 
# Labels: 0 = Weed, 1 = Crop
y_train = [0, 0, 1, 1] 

model = LogisticRegression()
model.fit(X_train, y_train)

new_plant = [[31, 8]]
prediction = model.predict(new_plant)
print(f"Prediction for new plant {new_plant}: {'Crop' if prediction[0]==1 else 'Weed'}")

# === UNSUPERVISED LEARNING (Clustering) ===
print("\\n=== Unsupervised Learning: Soil Zoning ===")
# Soil samples: [pH, Moisture] - No labels!
soil_samples = np.array([
    [5.5, 30], [5.7, 32], [5.6, 28], # Group 1
    [7.2, 50], [7.1, 55], [7.3, 52], # Group 2
    [6.5, 80], [6.4, 82], [6.6, 78]  # Group 3
])

kmeans = KMeans(n_clusters=3, random_state=42)
kmeans.fit(soil_samples)

print("Cluster labels assigned by AI:")
print(kmeans.labels_)
print("Notice how it grouped similar soil samples automatically!")
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
                            <h3>Live Dual-Pipeline Demonstration: Weed Classifier vs Soil Management Zoning</h3>
                            <p><strong>Educator Action:</strong> The instructor live-codes two contrasting ML pipelines side-by-side in Google Colab on the projector:</p>
                            <ul>
                                <li><strong>Pipeline A (Supervised):</strong> Fits a <code>LogisticRegression</code> classifier on labeled multispectral vegetation reflectance data (NDVI &amp; Green Red Vegetation Index) to separate high-value sugarcane crops from invasive Parthenium weeds. Shows how ground truth labels guide the decision boundary.</li>
                                <li><strong>Pipeline B (Unsupervised):</strong> Fits <code>KMeans(n_clusters=3)</code> on unlabeled soil electrical conductivity (EC) and organic carbon sensor data from an unmapped 50-hectare research field, revealing natural micro-nutrient management zones without human labels.</li>
                                <li>Highlights the core philosophical divergence: optimization against ground-truth labels vs discovering latent multivariate geometric clusters.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A side-by-side Colab demonstration comparing supervised classification accuracy vs unsupervised silhouette score and inertia curve.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agricultural Problem Formulation &amp; Learning Paradigm Selection Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student groups through a portfolio of 8 real-world precision agriculture scenarios from Indian agri-tech deployments:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"If a drone captures 10,000 thermal and multispectral orchard images but we have zero labeled disease records, which paradigm must we launch first, and how do we transition to supervised learning?"</em></li>
                                <li><strong>Collaborative Strategy:</strong> Faculty and students formulate hybrid semi-supervised pipelines: using unsupervised clustering to group visual anomalies, having agronomists label representatives from each cluster, and subsequently training a supervised classifier.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A collaborative Agri-AI Problem Taxonomy Matrix classifying 8 precision farming problems with validated justification for Supervised vs Unsupervised paradigms.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Unsupervised Soil Cluster vs Supervised Yield Predictor Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a dual dataset of 80 regional agricultural plots:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Cluster unlabelled soil physical traits (Sand %, Silt %, Clay %, Bulk Density) using K-Means into 3 distinct soil textural zones and produce cluster centroid summaries.</li>
                                <li><strong>Task 2:</strong> Merge the cluster labels as a new categorical feature into a supervised training set with harvest yield labels, training a classifier to predict yield tier (High, Medium, Low).</li>
                                <li><strong>Cross-team evaluation:</strong> Teams swap notebook outputs to critique whether the unsupervised clusters genuinely improved downstream supervised classification accuracy.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A syndicate comparison report verifying whether unsupervised cluster feature engineering boosted supervised model performance.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build &amp; Compare Supervised Classifier and K-Means Clustering in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an end-to-end Python comparative script:</p>
                            <ul>
                                <li>Generate synthetic crop data with features <code>[stem_diameter_mm, leaf_chlorophyll_spad, canopy_temp_c]</code> for 60 plants.</li>
                                <li><strong>Task A:</strong> Train a supervised <code>LogisticRegression</code> to classify plants into <code>Stressed (0)</code> vs <code>Healthy (1)</code> using provided binary labels; print accuracy score and confusion matrix.</li>
                                <li><strong>Task B:</strong> Drop labels and apply <code>KMeans(n_clusters=2)</code> to cluster the exact same feature matrix; compute cross-tabulation between true labels and K-Means cluster IDs to assess unsupervised discovery purity.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook containing both supervised and unsupervised implementations with a written markdown reflection on label dependence.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Dual-Pipeline Demo):</strong> In the Teacher's live demonstration comparing a weed classifier with soil zoning, what was the primary structural difference in how data was formatted for training?</p>
                    <ul>
                        <li>A) The supervised weed classifier required input features X paired with ground-truth target labels y, while the unsupervised soil clustering model received only feature matrix X</li>
                        <li>B) The unsupervised model required labeled target strings</li>
                        <li>C) The supervised model could not use numbers</li>
                        <li>D) The unsupervised model ran only on quantum hardware</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Supervised training required both features X and target labels y; unsupervised clustering required only X.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Supervised learning models learn mathematical functions mapping inputs X to known labels y (<code>model.fit(X, y)</code>). Unsupervised models discover patterns in inputs X without target labels (<code>model.fit(X)</code>).</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Unsupervised models do not use target labels.</li>
                                <li><strong>Why C is incorrect:</strong> Supervised models natively process numerical pixel tensors.</li>
                                <li><strong>Why D is incorrect:</strong> K-Means runs on standard CPUs and GPUs.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Learning Paradigm Selection Studio):</strong> During the Paradigm Selection Studio, a farmer cooperative requested an AI system to group 10,000 member farmers into credit-risk clusters without having historical default records. Which approach was selected?</p>
                    <ul>
                        <li>A) Unsupervised clustering (K-Means / DBSCAN) based on land size, crop diversity, and irrigation assets to segment farmers by structural capability</li>
                        <li>B) Supervised binary logistic regression guessing fake default labels</li>
                        <li>C) Reinforcement learning with cash penalties for farmers</li>
                        <li>D) Deleting the cooperative database</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Unsupervised clustering (K-Means/DBSCAN) based on structural farm assets and diversity.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> When historical ground-truth target labels (default history) do not exist, supervised classification is mathematically impossible. Unsupervised clustering groups members by multivariate asset and operational similarity.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Inventing fake labels invalidates supervised learning and creates legal liability.</li>
                                <li><strong>Why C is incorrect:</strong> RL with real cash penalties is unethical and financially disastrous.</li>
                                <li><strong>Why D is incorrect:</strong> Deleting databases destroys enterprise operations.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building and comparing both paradigms, what Scikit-Learn method generated cluster assignments for the unlabeled soil dataset?</p>
                    <ul>
                        <li>A) kmeans.fit_predict(X_soil)</li>
                        <li>B) kmeans.predict_proba(X_soil)</li>
                        <li>C) kmeans.score_residuals(X_soil)</li>
                        <li>D) kmeans.cross_validate()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>kmeans.fit_predict(X_soil) fitted centroids and returned cluster integer assignments.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>fit_predict()</code> fits cluster centroids on feature matrix X and returns cluster ID assignments (0, 1, 2...) for each row in a single convenient step.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Standard K-Means does not provide class probabilities (<code>predict_proba</code>).</li>
                                <li><strong>Why C is incorrect:</strong> score_residuals is not a Scikit-Learn clustering method.</li>
                                <li><strong>Why D is incorrect:</strong> cross_validate is for supervised model evaluation.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Supervised: Input -> Output maps (Requires labels)</li>
                    <li>Unsupervised: Finding hidden structures (No labels)</li>
                    <li>Classification/Regression are Supervised types</li>
                    <li>Clustering is the main Unsupervised type</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Train-Test Split and Validation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why does a random train-test split (<code>train_test_split(shuffle=True)</code>) cause disastrous spatial data leakage when evaluating a crop disease detection model across adjacent farm plots?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Nearby farm plots share spatial autocorrelation (Tobler's First Law of Geography: 'everything is related to everything else, but near things are more related than distant things'). If plot A is in the train set and adjacent plot B is in the test set, the model memorizes the local soil, lighting, and seed variety. It gets 99% test accuracy but fails completely when deployed on a new farm 20 km away. Spatial block splitting must be used.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> In agricultural yield forecasting, why must the test set always be drawn from future growing seasons rather than random days within the same year?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Temporal autocorrelation! Randomly splitting days leaks future weather into the past (e.g., training on Tuesday, testing on Wednesday, training on Thursday). In production, an AI model trained on historical seasons must predict the *next* unseen year's harvest without knowing future weather.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand why we split data</li>
                    <li>Implement train_test_split using Scikit-Learn</li>
                    <li>Concept of Validation set vs Test set</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Train-Test Split = Trial Plot vs Production</strong></p>
                    <p>You don't test a new fertilizer on your whole farm! You test it on a small "trial plot" (Training Set) first. If it works there, you verify it on another section (Test Set) before full rollout.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np

# Create synthetic dataset
data = pd.DataFrame({
    'feature1': np.random.rand(100),
    'feature2': np.random.rand(100),
    'target': np.random.randint(0, 2, 100)
})

X = data[['feature1', 'feature2']]
y = data['target']

# === TRAIN-TEST SPLIT ===
print("=== Splitting Data ===")
X_train, X_test, y_train, y_test = train_test_split(
    X, y, 
    test_size=0.2,    # 20% for testing
    random_state=42   # Reproducibility
)

print(f"Total samples: {len(data)}")
print(f"Training set: {len(X_train)} samples")
print(f"Testing set: {len(X_test)} samples")

# === TRAIN-VALIDATION-TEST SPLIT ===
print("\\n=== Train-Validation-Test Split ===")
# First split: Train (80%) + Others (20%)
X_train_full, X_temp, y_train_full, y_temp = train_test_split(X, y, test_size=0.2)
# Second split: Validation (10%) + Test (10%)
X_val, X_test_final, y_val, y_test_final = train_test_split(X_temp, y_temp, test_size=0.5)

print(f"Train: {len(X_train_full)}, Val: {len(X_val)}, Test: {len(X_test_final)}")
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
                            <h3>Live Demonstration: Spatial &amp; Temporal Data Leakage in Agricultural Splitting</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates train/validation/test partitioning pitfalls live on the projector using a multi-season Karnataka farm dataset:</p>
                            <ul>
                                <li>Demonstrates why naive <code>train_test_split(shuffle=True)</code> creates disastrous data leakage when sensor readings from the same farm plot or date appear in both train and test sets (spatial pseudo-replication).</li>
                                <li>Implements stratified splitting (<code>stratify=y</code>) on an imbalanced pest outbreak dataset (90% pest-free, 10% severe infestation) to prove how random unstratified splits can leave the test set with zero pest cases.</li>
                                <li>Demonstrates a 3-way split (Train 70%, Validation 15%, Test 15%) using two consecutive calls to <code>train_test_split</code> and explains the distinct role of each partition during hyperparameter selection vs final model audit.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script contrasting standard random split, stratified split, and temporal/block split with class balance verification charts.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Multi-Season &amp; Multi-Location Farm Validation Strategy Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on designing robust data partition protocols for agronomic deployment across variable climate zones:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"If our model predicts wheat rust disease across 5 districts over 3 consecutive monsoon cycles, how should we partition data so our test metrics reflect true generalized performance on future seasons and new districts?"</em></li>
                                <li><strong>Collaborative Strategy:</strong> Faculty and students formulate Leave-One-District-Out and Temporal Split architectures (Training: Seasons 2022-2023, Test: Season 2024), documenting how standard random IID splitting artificially inflates accuracy by up to 25%.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Climatic Data Partitioning Protocol document specifying spatial blocking and temporal holdout rules.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Class Imbalance &amp; Leakage Detection Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are given a realistic 120-row agricultural dataset containing plot ID, date, soil parameters, and crop disease presence:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Perform an unstratified 80/20 split vs a stratified 80/20 split; compare target class distributions (<code>value_counts(normalize=True)</code>) between train and test sets.</li>
                                <li><strong>Task 2:</strong> Intentionally introduce and then detect a data leakage vulnerability (e.g., fitting a scaler on the entire dataset prior to splitting vs fitting strictly on <code>X_train</code>).</li>
                                <li><strong>Audit:</strong> Teams exchange code to audit whether any information from <code>X_test</code> leaked into preprocessing transformers or pipeline estimators.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Peer Data-Leakage Audit Checklist and comparative class-balance distribution plot across train and test partitions.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Implement a 3-Way Stratified Agricultural Dataset Split in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent data partitioning script:</p>
                            <ul>
                                <li>Create a DataFrame of 150 crop entries with features <code>[soil_ec, nitrogen_ppm, organic_matter]</code> and an imbalanced target <code>pest_infestation</code> (120 Healthy <code>0</code>, 30 Infested <code>1</code>).</li>
                                <li>Use <code>train_test_split</code> to create a 70% Training, 15% Validation, and 15% Test partition while preserving exact class proportions using <code>stratify</code>.</li>
                                <li>Print sample sizes and class ratios for all 3 splits; verify that <code>len(train) + len(val) + len(test) == 150</code> and class proportions match within 1%.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A verified Colab notebook showing reproducible 3-way stratified dataset splitting with printed validation assertions.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Spatial Leakage Demo):</strong> In the Teacher's live demonstration, what happened when crop yield data was split using random shuffling versus spatial-block splitting by distinct geographic taluks?</p>
                    <ul>
                        <li>A) Random shuffling achieved an artificially high R² of 0.94 due to spatial autocorrelation leakage, while spatial-block splitting revealed the true generalization R² was only 0.68</li>
                        <li>B) Spatial-block splitting crashed the computer</li>
                        <li>C) Random shuffling was 100% accurate in physical field validation</li>
                        <li>D) Both splits yielded identical performance</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Random shuffling produced inflated R² (0.94) via spatial leakage; spatial splitting exposed true generalization (0.68).</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Spatial autocorrelation leaks information between adjacent training and test plots. Evaluating on geographically separated held-out blocks provides an honest assessment of model generalization to new farms.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Spatial splitting is a grouping method and does not crash hardware.</li>
                                <li><strong>Why C is incorrect:</strong> Models with spatial leakage fail in real-world deployments.</li>
                                <li><strong>Why D is incorrect:</strong> Due to spatial correlation, random splits always overestimate generalization.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Multi-Season Validation Studio):</strong> During the Validation Strategy Studio, how did teams structure the validation split for a 5-year agricultural dataset (2020–2024)?</p>
                    <ul>
                        <li>A) Time-series split: Training on 2020–2023 historical seasons and testing strictly on the held-out 2024 season to evaluate future forecasting</li>
                        <li>B) Randomly shuffling all 5 years together</li>
                        <li>C) Training on 2024 and testing on 2020</li>
                        <li>D) Deleting the 2024 data</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Temporal split: trained on 2020–2023 and tested strictly on the held-out future 2024 season.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Temporal out-of-time validation mirrors real-world deployment: models learn historical multi-season trends and must predict future harvests without hindsight leakage.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Random shuffling across years creates look-ahead temporal leakage.</li>
                                <li><strong>Why C is incorrect:</strong> Predicting past historical data from future training data reverses temporal causality.</li>
                                <li><strong>Why D is incorrect:</strong> Deleting held-out test years eliminates validation rigor.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task implementing a 3-way Stratified Time-Aware Split, what Scikit-Learn parameter preserved the proportion of rare crop disease cases across train and validation sets?</p>
                    <ul>
                        <li>A) stratify=y in train_test_split()</li>
                        <li>B) shuffle=False</li>
                        <li>C) random_state=None</li>
                        <li>D) test_size=0.99</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>stratify=y preserved the exact class proportions across training and test subsets.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Stratification ensures that rare target classes (e.g., a severe crop virus present in only 2% of samples) are represented in identical proportions in both train and test splits, preventing empty test classes.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> shuffle=False maintains chronological order but does not guarantee balanced class representation.</li>
                                <li><strong>Why C is incorrect:</strong> random_state=None creates non-reproducible randomized splits.</li>
                                <li><strong>Why D is incorrect:</strong> test_size=0.99 leaves almost no data for training.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Never train on test data (Data Leakage)</li>
                    <li>Standard split: 80% Train, 20% Test</li>
                    <li>random_state ensures results are reproducible</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t17': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Cross-Validation Techniques</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is standard 5-Fold Cross Validation inadequate for agricultural time series and geospatial data?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Standard K-Fold randomly shuffles samples into folds, guaranteeing spatial and temporal leakage. A training fold will contain plots immediately adjacent to test plots, or days wedged between test days. Agricultural CV requires structured partitioning: GroupKFold (grouped by farm or district) or TimeSeriesSplit (expanding historical windows).</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What is 'Purged Group Time-Series Cross-Validation', and why is it used in commodity mandi price forecasting?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> In financial and mandi price modeling, prices exhibit autocorrelation across days. If an event occurs on day 10, its market shock echoes through day 15. Purging inserts an embargo window (e.g., 5 days) between training folds and test folds to prevent residual autoregressive memory from leaking across boundaries.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand the limitations of a single train-test split</li>
                    <li>Implement K-Fold Cross-Validation</li>
                    <li>Use Stratified K-Fold for imbalanced data</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Cross-Validation = Multi-Season Testing</strong></p>
                    <p>Testing seeds in just one season might be lucky (good weather). Testing across 5 different seasons (folds) gives a much more reliable estimate of performance!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.model_selection import KFold, cross_val_score
from sklearn.linear_model import LinearRegression
import numpy as np

# Mock data
X = np.random.rand(50, 2)
y = 3 * X[:, 0] + 2 * X[:, 1] + np.random.normal(0, 0.1, 50)
model = LinearRegression()

# === K-FOLD CROSS-VALIDATION ===
print("=== K-Fold CV ===")
kf = KFold(n_splits=5, shuffle=True, random_state=42)

scores = cross_val_score(model, X, y, cv=kf, scoring='neg_mean_squared_error')
rmse_scores = np.sqrt(-scores)

print(f"RMSE Scores for each fold: {rmse_scores}")
print(f"Average RMSE: {np.mean(rmse_scores):.4f}")
print(f"Standard Deviation: {np.std(rmse_scores):.4f}")

# === STRATIFIED K-FOLD (Concept) ===
print("\\nNote: For classification with imbalanced classes (e.g., detecting rare diseases), use StratifiedKFold to ensure each fold has enough disease samples!")
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
                            <h3>Live Demonstration: K-Fold vs Stratified K-Fold vs GroupKFold on Soil Sensor Data</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates cross-validation strategies live in Google Colab on the projector:</p>
                            <ul>
                                <li>Sets up a 60-sample crop yield dataset across 6 distinct agricultural research stations (10 plots per station).</li>
                                <li>Runs a single 80/20 split across 10 random seeds to show how validation $R^2$ oscillates wildly between 0.42 and 0.88 depending on which lucky/unlucky plots land in the test set.</li>
                                <li>Demonstrates 5-fold cross-validation (<code>cross_val_score</code>) and calculates the mean and standard error of the score.</li>
                                <li>Demonstrates <code>GroupKFold(groups=station_id)</code> to prove that grouping by farm station prevents cross-fold spatial contamination, providing an honest measure of generalization to new farms.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive Colab notebook comparing single-split variance against 5-Fold and GroupKFold cross-validation distributions.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Field-Scale Cross-Validation Strategy &amp; Protocol Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on matching cross-validation schemes to complex agronomic structures:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"When predicting soil carbon sequestration across multi-year crop rotation trials with repeated measurements from the same GPS coordinates, why will standard K-Fold produce over-optimistic results, and which CV scheme must be enforced?"</em></li>
                                <li><strong>Collaborative Strategy:</strong> Faculty and student groups formulate protocols comparing <code>TimeSeriesSplit</code>, <code>StratifiedKFold</code>, and <code>GroupKFold</code>, creating decision rules for selecting the proper cross-validator based on experimental farm designs.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A comprehensive Cross-Validation Selection Decision Tree for field trials and greenhouse sensor experiments.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Seed Sensitivity &amp; Cross-Fold Stability Benchmark Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are challenged to assess the reliability of a crop yield model on a 50-plot field trial:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Train a <code>LinearRegression</code> model using 10 different random seeds with a single train/test split; plot a histogram of test RMSE scores.</li>
                                <li><strong>Task 2:</strong> Implement 5-fold and 10-fold cross-validation; compute mean RMSE, standard deviation, and 95% confidence intervals.</li>
                                <li><strong>Audit:</strong> Teams cross-examine each other's fold distributions to determine whether 5-fold or 10-fold CV provides the optimal bias-variance tradeoff for small agricultural sample sizes.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A stability benchmarking dossier contrasting single-split volatility against cross-validated error bands with box plots.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Implement 5-Fold and Stratified Cross-Validation in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone script evaluating a farm classifier:</p>
                            <ul>
                                <li>Create a 100-sample dataset representing tomato blossom end rot incidence based on soil calcium, soil pH, and irrigation frequency.</li>
                                <li>Use <code>StratifiedKFold(n_splits=5, shuffle=True, random_state=42)</code> and <code>cross_val_score</code> to evaluate a <code>LogisticRegression</code> classifier with scoring <code>roc_auc</code>.</li>
                                <li>Print the fold-by-fold AUC scores, mean score, and standard deviation; add code to plot the cross-validated score distributions.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook showing fold-by-fold cross-validation scores and a composite 5-fold evaluation report.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Spatial Block CV Demo):</strong> In the Teacher's live demonstration, what Scikit-Learn cross-validator ensured that all sensor readings from the same farm plot remained together in the same fold?</p>
                    <ul>
                        <li>A) GroupKFold(n_splits=5) passing groups=df['plot_id']</li>
                        <li>B) KFold(shuffle=True)</li>
                        <li>C) StratifiedKFold without groups</li>
                        <li>D) LeaveOneOut() with random permutation</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>GroupKFold(n_splits=5) passing groups=df['plot_id'] kept individual plots intact within folds.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>GroupKFold</code> guarantees that no group (e.g., a specific farm plot or village) is split across both train and test partitions in any fold, testing true out-of-farm generalization.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Standard KFold splits rows randomly, mixing readings from the same plot into both train and test.</li>
                                <li><strong>Why C is incorrect:</strong> StratifiedKFold balances class labels but ignores group clustering.</li>
                                <li><strong>Why D is incorrect:</strong> LeaveOneOut without group constraints leaks plot context on repeated measurements.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Spatial Autocorrelation Audit Syndicate):</strong> During the Spatial Leakage Audit, what metric dropped significantly when student teams shifted from standard KFold to spatial GroupKFold across 8 agro-climatic zones?</p>
                    <ul>
                        <li>A) Cross-validated R² dropped from an over-optimistic 0.91 to a realistic 0.72, exposing spatial over-fitting</li>
                        <li>B) Model training time increased to 48 hours</li>
                        <li>C) The number of rows in the dataset decreased by 50%</li>
                        <li>D) All coefficients became negative</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>CV R² dropped from 0.91 to 0.72, exposing spatial over-fitting and revealing genuine generalization.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Spatial GroupKFold exposes the true difficulty of predicting on unseen geographical regions, stripping away the artificial score inflation caused by spatial proximity.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> GroupKFold has the same computational complexity as standard KFold.</li>
                                <li><strong>Why C is incorrect:</strong> Cross-validation partitions data without discarding rows.</li>
                                <li><strong>Why D is incorrect:</strong> Realistic evaluation does not arbitrarily invert model coefficient signs.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task implementing TimeSeriesSplit on daily mandi prices, how did the training window evolve across consecutive folds?</p>
                    <ul>
                        <li>A) It expanded incrementally forward in time (Fold 1: train on month 1, test on month 2; Fold 2: train on months 1-2, test on month 3...)</li>
                        <li>B) It randomly sampled days across all 12 months</li>
                        <li>C) It trained only on the last day of the year</li>
                        <li>D) It moved backwards from December to January</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>The training window expanded forward chronologically (walk-forward validation) without look-ahead bias.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Scikit-Learn's <code>TimeSeriesSplit</code> implements rolling walk-forward validation: each successive fold trains on all available historical data up to time t and evaluates on time t+1.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Random sampling across time series introduces look-ahead bias.</li>
                                <li><strong>Why C is incorrect:</strong> Training on a single day provides insufficient historical data.</li>
                                <li><strong>Why D is incorrect:</strong> Moving backwards violates temporal causality.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>K-Fold splits data into K parts, training on K-1 and testing on 1, rotating K times</li>
                    <li>Provides a robust estimate of model accuracy</li>
                    <li>Essential for smaller datasets</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t18': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Overfitting and Underfitting (Bias vs Variance)</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> A complex deep neural network achieves 99.9% training accuracy on a small dataset of 200 rice disease photos, but drops to 45% on photos taken by farmers in the field. What happened?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Severe Overfitting (High Variance)! With 200 photos, the complex network has millions of parameters and memorized specific background details (e.g., shadows, soil color, fingernails holding leaves) rather than invariant biological lesion features. When shown new farmer photos with different backgrounds, the overfit model fails completely.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why is a simple linear model that underfits crop yield (High Bias) just as dangerous for a farmer as an overfit model?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> An underfit model is too simplistic to capture real biological dynamics (e.g., assuming crop yield grows infinitely with nitrogen fertilizer). It prescribes toxic fertilizer amounts because it cannot represent the curved law of diminishing returns, leading to crop burn and economic waste.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Diagnose overfitting (high variance) and underfitting (high bias)</li>
                    <li>Understand the Bias-Variance Tradeoff using the Bullseye Analogy</li>
                    <li>Analyze real-world agricultural scenarios for each case</li>
                    <li>Learn techniques to balance the two for the "Goldilocks" fit</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: The Bullseye Analogy</h2>
                <div class="analogy-box">
                    <p>Imagine your goal is to hit the center of a target (perfect prediction). Your shots are your model's predictions.</p>
                    <div style="text-align: center; margin: 20px 0;">
                        <img src="assets/images/bias-variance.png" alt="Bias vs Variance Bullseye Diagram" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Figure 1: Visualizing Model Performance</p>
                    </div>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Understanding the Combinations</h2>
                
                <div class="concept-card" style="background: #f0fdf4; border-left: 5px solid #16a34a; padding: 15px; margin-bottom: 15px;">
                    <h3>1. Low Bias, Low Variance (Ideal Model) ✅</h3>
                    <p><strong>The Bullseye:</strong> Your shots are clustered tightly in the center.</p>
                    <p><strong>Scenario:</strong> A crop yield model that accurately predicts 3.5 tons/ha ± 0.1 tons for most fields, matching reality.</p>
                    <p><strong>Verdict:</strong> The model captures the true pattern and generalizes well to new data.</p>
                </div>

                <div class="concept-card" style="background: #eff6ff; border-left: 5px solid #3b82f6; padding: 15px; margin-bottom: 15px;">
                    <h3>2. High Bias, Low Variance (Underfitting) 📉</h3>
                    <p><strong>The "Stubborn" Miss:</strong> Your shots are clustered tightly, but far from the center.</p>
                    <p><strong>Scenario:</strong> A simple model assumes "Yield = 2 tons" for everyone, regardless of rain. It is consistent (Low Variance) but consistently wrong (High Bias).</p>
                    <p><strong>Verdict:</strong> The model is too simple. It fails to capture important relationships (like rain vs yield).</p>
                </div>

                <div class="concept-card" style="background: #fef2f2; border-left: 5px solid #ef4444; padding: 15px; margin-bottom: 15px;">
                    <h3>3. Low Bias, High Variance (Overfitting) 📈</h3>
                    <p><strong>The "Nervous" Scatter:</strong> Your shots are all over the place, centering on the target but with huge spread.</p>
                    <p><strong>Scenario:</strong> A complex model memorizes that "Field A had 3.21 tons because a bird flew over it." It works perfectly for Field A (Low Bias on training) but fails wildly for Field B (High Variance).</p>
                    <p><strong>Verdict:</strong> The model is too sensitive to noise. It memorizes the training data but fails to generalize.</p>
                </div>

                <div class="concept-card" style="background: #fff7ed; border-left: 5px solid #f97316; padding: 15px; margin-bottom: 15px;">
                    <h3>4. High Bias, High Variance (Worst Case) ❌</h3>
                    <p><strong>The Random Mess:</strong> Your shots are scattered and far from the center.</p>
                    <p><strong>Scenario:</strong> A model that guesses random numbers based on irrelevant features like "Farmer's shirt color".</p>
                    <p><strong>Verdict:</strong> The model is fundamentally broken or learning from garbage data.</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📊 Summary Matrix</h2>
                <table>
                    <tr>
                        <th>Problem</th>
                        <th>Bias</th>
                        <th>Variance</th>
                        <th>Training Error</th>
                        <th>Test Error</th>
                        <th>Solution</th>
                    </tr>
                    <tr>
                        <td><strong>Underfitting</strong></td>
                        <td>High</td>
                        <td>Low</td>
                        <td>High</td>
                        <td>High</td>
                        <td>Increase complexity, add features</td>
                    </tr>
                    <tr>
                        <td><strong>Overfitting</strong></td>
                        <td>Low</td>
                        <td>High</td>
                        <td>Extremely Low</td>
                        <td>High</td>
                        <td>Regularization, more data, simplify</td>
                    </tr>
                    <tr>
                        <td><strong>Good Fit</strong></td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Low</td>
                        <td>Maintain & Monitor</td>
                    </tr>
                </table>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Visualizing Overfitting with Polynomial Regression
import numpy as np
import matplotlib.pyplot as plt
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Generate noisy non-linear data
np.random.seed(42)
X = np.sort(np.random.rand(20))
y = np.cos(1.5 * np.pi * X) + np.random.normal(0, 0.1, 20)
X = X[:, np.newaxis]

# Model 1: Underfit (Degree 1 - Line) -> High Bias
model1 = LinearRegression().fit(X, y)

# Model 2: Good Fit (Degree 4) -> Balanced
model4 = make_pipeline(PolynomialFeatures(4), LinearRegression()).fit(X, y)

# Model 3: Overfit (Degree 15) -> High Variance
model15 = make_pipeline(PolynomialFeatures(15), LinearRegression()).fit(X, y)

print("Degree 1 (Underfit): Too simple, misses the curve.")
print("Degree 4 (Good): Captures the cosine wave.")
print("Degree 15 (Overfit): Wiggles to hit every single noise point.")
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
                            <h3>Live Demonstration: Visualizing Polynomial &amp; Decision Tree Overfitting on Crop Curves</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates the bias-variance spectrum live on the projector using real crop growth response data:</p>
                            <ul>
                                <li>Plots nitrogen fertilizer response ($N$ applied kg/ha vs wheat grain yield quintals/ha) which exhibits classical diminishing biological returns.</li>
                                <li>Fits three models live: Degree 1 Linear Regression (High Bias / Underfitting, missing the plateau), Degree 2 Quadratic Regression (Balanced / Low Bias &amp; Low Variance), and Degree 15 Polynomial (High Variance / Overfitting, oscillating wildly between sensor points).</li>
                                <li>Demonstrates Decision Tree overfitting: fits an unconstrained tree (<code>max_depth=None</code>) achieving 0 training error, then prunes it step-by-step (<code>max_depth=3</code>, <code>min_samples_leaf=5</code>) while projecting live training vs test learning curves.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive Colab notebook generating side-by-side regression fit plots and learning curves demonstrating the U-shaped test error curve.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agro-Ecological Model Complexity &amp; Regularization Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student groups in analyzing biological limits to model complexity in agricultural applications:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In a sensor network monitoring greenhouse temperature and relative humidity, an AI model learns that a temporary power glitch at 2:00 PM indicates fungal spore release. How do we distinguish between true biological signal and sensor noise, and what regularization controls prevent this failure?"</em></li>
                                <li><strong>Collaborative Investigation:</strong> Faculty and student groups evaluate L1 (Lasso) vs L2 (Ridge) penalty mathematics, decision tree pruning criteria, and early stopping rules, developing clinical diagnostic checklists for detecting overfitting in production farm models.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A faculty-approved Bias-Variance Agricultural Diagnostic Protocol with mathematical regularization guidelines.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Overfit Rescue &amp; Validation Curve Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student cohorts are given a severely overfitted Decision Tree model trained on a 150-sample sugarcane pest dataset (100% train accuracy, 58% test accuracy):</p>
                            <ul>
                                <li><strong>Task 1:</strong> Generate validation curves across a parameter sweep of <code>max_depth</code> (1 to 20) and <code>min_samples_split</code> (2 to 30) using <code>validation_curve</code> from Scikit-Learn.</li>
                                <li><strong>Task 2:</strong> Locate the inflection point where test error begins to increase while training error continues to decrease (the optimal "Goldilocks" model complexity).</li>
                                <li><strong>Peer Audit:</strong> Teams present their rescued models to a peer syndicate, defending why their chosen pruning threshold minimizes total generalization error without introducing underfitting bias.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A model remediation dossier with generated validation curve charts and statistical evidence of improved test generalization.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Plot Training vs Validation Learning Curves in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent bias-variance diagnostic script:</p>
                            <ul>
                                <li>Generate synthetic nonlinear agricultural sensor data: $y = \sin(X) + \text{noise}$ with 80 samples.</li>
                                <li>Fit a <code>DecisionTreeRegressor</code> across varying depths from 1 to 15; record both training $R^2$ and 5-fold cross-validated $R^2$ at each depth.</li>
                                <li>Plot the two curves on a single chart with labels "Training Score" and "Cross-Validation Score"; identify the exact depth where overfitting begins, and print recommended hyperparameters for deployment.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating a dual-line learning curve with automated identification of the optimal model complexity parameter.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Polynomial Degree Demo):</strong> In the Teacher's live demonstration fitting crop yield response curves, what happened when polynomial feature degree was increased from degree 2 (quadratic) to degree 15?</p>
                    <ul>
                        <li>A) The degree 15 model oscillated wildly between training points, achieving 0.0 training loss but catastrophic test error (severe overfitting)</li>
                        <li>B) The degree 15 model became a straight horizontal line</li>
                        <li>C) The training loss increased to infinity</li>
                        <li>D) The model automatically deleted redundant features</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Degree 15 model oscillated wildly, achieving zero training loss but catastrophic test error.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> High-degree polynomials have extreme variance: they contort to pass through every individual training point (including noise and outliers), producing wild fluctuations that generalize terribly to new data.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Degree 1 (linear) is a straight line; high-degree polynomials are highly curved and oscillatory.</li>
                                <li><strong>Why C is incorrect:</strong> Higher model complexity consistently reduces or zeroes out training loss.</li>
                                <li><strong>Why D is incorrect:</strong> Unregularized high-degree polynomials retain all polynomial terms without pruning.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Learning Curve Diagnostic Studio):</strong> During the Learning Curve Diagnostic Studio, what did a plot showing a large, persistent gap between high training score (98%) and low validation score (62%) diagnose?</p>
                    <ul>
                        <li>A) High Variance (Overfitting) &mdash; the model memorized the training set and failed to generalize to validation data</li>
                        <li>B) High Bias (Underfitting)</li>
                        <li>C) Perfect model convergence</li>
                        <li>D) Data collection completed successfully</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>High Variance (Overfitting) indicated by a wide gap between training score and validation score.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In learning curve diagnostics, a wide divergence between training performance and validation performance is the hallmark of high variance / overfitting. Regularization, pruning, or adding training data is required.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> High bias shows both training and validation curves converging at low accuracy.</li>
                                <li><strong>Why C is incorrect:</strong> Convergence occurs when train and validation curves meet at a high performance plateau.</li>
                                <li><strong>Why D is incorrect:</strong> Learning curves diagnose algorithm bias/variance, not data collection completeness.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Bias-Variance Tradeoff Experiment, how did Ridge (L2) regression cure the overfitting of the high-degree polynomial model?</p>
                    <ul>
                        <li>A) By adding a squared penalty on coefficient weights (alpha * sum(w²)) to the loss function, shrinking weights and smoothing the curve</li>
                        <li>B) By multiplying all feature values by 10</li>
                        <li>C) By deleting all input data columns</li>
                        <li>D) By rounding all predictions to integers</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Added an L2 penalty (alpha * sum(w²)) shrinking weights and curbing wild curve oscillations.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Ridge regularization penalizes large coefficient weights in the loss function, preventing the polynomial from oscillating violently between sample points and restoring generalization balance.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Multiplying features by 10 increases numerical instability without regularizing.</li>
                                <li><strong>Why C is incorrect:</strong> Deleting all data destroys the model.</li>
                                <li><strong>Why D is incorrect:</strong> Integer rounding does not prevent polynomial curve oscillation during training.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li><strong>Bias:</strong> Error from erroneous assumptions (Simplicity).</li>
                    <li><strong>Variance:</strong> Error from sensitivity to small fluctuations (Complexity).</li>
                    <li><strong>Tradeoff:</strong> You must balance bias and variance to minimize total error.</li>
                    <li>More data helps reduce variance (overfitting).</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t19': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Hyperparameter Tuning</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> What is the fundamental difference between a model 'parameter' and a 'hyperparameter' in precision agriculture algorithms?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A *parameter* is learned automatically by the algorithm from data during training (e.g., the slope weights <code>w</code> in linear regression, or split thresholds in decision trees). A *hyperparameter* is an external configuration set by the data scientist *before* training begins (e.g., <code>max_depth</code> in a decision tree, <code>learning_rate</code> in gradient boosting). Hyperparameters dictate *how* the model learns.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why is exhaustive Grid Search (<code>GridSearchCV</code>) computationally infeasible when tuning a Random Forest on a massive national satellite dataset, and why is <code>RandomizedSearchCV</code> or Optuna preferred?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> The 'Curse of Dimensionality'! If you test 5 parameters with 4 values each across 5-fold CV, GridSearchCV trains <code>4^5 * 5 = 5,120</code> full models. On large datasets, this takes days or weeks. RandomizedSearchCV samples a fixed budget of random parameter combinations, exploring broader parameter spaces in a fraction of the time with near-identical optimization quality.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Difference between parameters and hyperparameters</li>
                    <li>Grid Search vs Random Search</li>
                    <li>Using GridSearchCV in Scikit-Learn</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Hyperparameter Tuning = Calibrating Your Sprayer</strong></p>
                    <p>The sprayer (model) works, but you need to tweak the nozzle pressure (learning rate) and speed (batch size) to get perfect coverage. You run test strips with different settings to find the "sweet spot".</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestRegressor
import numpy as np

# Mock Data
X = np.random.rand(100, 5)
y = np.sum(X, axis=1)

# Define Model
rf = RandomForestRegressor(random_state=42)

# Define Hyperparameter Grid
param_grid = {
    'n_estimators': [50, 100, 200],  # Number of trees
    'max_depth': [None, 10, 20],     # Tree depth
    'min_samples_split': [2, 5]      # Minimum samples to split
}

# === GRID SEARCH ===
print("=== Starting Grid Search ===")
grid_search = GridSearchCV(
    estimator=rf, 
    param_grid=param_grid, 
    cv=3,                 # 3-Fold Cross-Validation
    scoring='neg_mean_squared_error',
    verbose=1
)

grid_search.fit(X, y)

print(f"\\nBest Parameters: {grid_search.best_params_}")
print(f"Best RMSE: {np.sqrt(-grid_search.best_score_):.4f}")
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
                            <h3>Live Demonstration: GridSearchCV vs RandomizedSearchCV on Farm Yield Ensemble</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates hyperparameter search live in Google Colab on the projector using a multi-feature agricultural dataset:</p>
                            <ul>
                                <li>Sets up a <code>RandomForestRegressor</code> for predicting maize yield from weather and soil inputs (100 samples, 8 features).</li>
                                <li>Configures an exhaustive parameter grid (<code>n_estimators</code>, <code>max_depth</code>, <code>min_samples_split</code>, <code>max_features</code>) containing 108 candidate combinations.</li>
                                <li>Runs <code>GridSearchCV</code> with 5-fold CV and monitors runtime, explaining why grid search scales exponentially with parameter combinations ($O(k^n)$).</li>
                                <li>Demonstrates <code>RandomizedSearchCV(n_iter=20)</code> as an efficient alternative, proving that exploring 20 random points across a continuous hyperparameter space achieves 98% of the optimum in 1/5th the computation time.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script comparing execution time, memory usage, and final test score between Grid and Randomized searches.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Edge-Deployment Hyperparameter Optimization Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on designing tuning strategies constrained by agricultural compute reality (solar-powered farm servers, mobile agronomist apps, low battery devices):</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"If a farm cooperative runs IoT edge nodes on Raspberry Pi hardware to predict frost risk, how do we tune models to balance predictive accuracy against inference latency and RAM footprints?"</em></li>
                                <li><strong>Collaborative Strategy:</strong> Faculty and students formulate multi-objective optimization protocols evaluating hyperparameter trade-offs: pruning tree depth to reduce inference latency from 120ms to 4ms while maintaining AUC &gt; 0.90.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Resource-Constrained Hyperparameter Tuning Blueprint specifying parameter budgets and inference latency constraints.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The Hyperparameter Tuning Grand Prix Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams compete to tune a <code>RandomForestClassifier</code> on an imbalanced agricultural disease dataset (Cotton Pink Bollworm detection):</p>
                            <ul>
                                <li><strong>Challenge:</strong> Teams define their own parameter distributions and choose between <code>GridSearchCV</code>, <code>RandomizedSearchCV</code>, or <code>HalvingGridSearchCV</code>.</li>
                                <li><strong>Constraints:</strong> Maximum 100 model fits allowed per team; evaluation scored on <code>f1_macro</code> under 5-fold stratified cross-validation.</li>
                                <li><strong>Peer Audit:</strong> Teams present their hyperparameter convergence curves and defend their parameter boundaries (e.g., why <code>min_samples_leaf=4</code> was selected to prevent leaf memorization).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A competitive hyperparameter optimization report ranking search strategies by F1 score, convergence speed, and parameter sensitivity.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Systematic Grid Search for a KNN Crop Recommender in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build a complete hyperparameter tuning pipeline:</p>
                            <ul>
                                <li>Load synthetic crop suitability data with features <code>[N, P, K, pH, rainfall, temperature]</code> and target <code>crop_type</code> (4 classes).</li>
                                <li>Set up a pipeline with <code>StandardScaler</code> and <code>KNeighborsClassifier</code>.</li>
                                <li>Run <code>GridSearchCV</code> testing <code>n_neighbors</code> from 1 to 25 and <code>weights</code> as <code>['uniform', 'distance']</code> using 5-fold cross-validation.</li>
                                <li>Extract <code>best_params_</code> and <code>best_score_</code>, and plot the validation score curve across all values of $k$ with shaded confidence bands.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating an annotated parameter performance plot and printing optimal KNN configuration.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Search Comparison Demo):</strong> In the Teacher's live tuning demonstration on a Random Forest soil classifier, how did RandomizedSearchCV compare with GridSearchCV in runtime and accuracy?</p>
                    <ul>
                        <li>A) RandomizedSearchCV explored 60 diverse hyperparameter combinations in 1/8th the time of GridSearchCV, converging on an F1-score within 0.5% of exhaustive search</li>
                        <li>B) GridSearchCV was 100x faster than RandomizedSearchCV</li>
                        <li>C) RandomizedSearchCV generated negative accuracy scores</li>
                        <li>D) Both methods selected identical default hyperparameters</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>RandomizedSearchCV achieved comparable accuracy in 1/8th the time by sampling parameter distributions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Randomized search samples parameter spaces probabilistically, avoiding wasted compute on unpromising parameter neighborhoods and finding near-optimal configurations dramatically faster than exhaustive grid search.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Exhaustive grid search evaluates every combination and is vastly slower than randomized sampling.</li>
                                <li><strong>Why C is incorrect:</strong> Randomized search optimizes the same valid evaluation metrics.</li>
                                <li><strong>Why D is incorrect:</strong> Hyperparameter search algorithms discover optimal non-default parameters.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Grid Explosion Forensic Studio):</strong> During the Grid Explosion Audit, what mathematical calculation explained why a student group's GridSearchCV took 14 hours to run on Colab?</p>
                    <ul>
                        <li>A) 6 hyperparameters with 5 values each across 5 cross-validation folds = 5^6 * 5 = 78,125 model fits, overwhelming the CPU</li>
                        <li>B) The dataset was saved in CSV format</li>
                        <li>C) Colab disconnected the internet connection immediately</li>
                        <li>D) The target variable had only two classes</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Combinatorial explosion: 5^6 * 5 = 78,125 fits overwhelmed the single-threaded CPU runtime.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Combinatorial explosion occurs when grid spaces multiply exponentially. Tuning 6 parameters across 5 candidate values each requires evaluating 15,625 configurations, multiplied by 5 folds = 78,125 individual training runs.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> CSV loading happens once and does not explain 14-hour model training loops.</li>
                                <li><strong>Why C is incorrect:</strong> If Colab disconnected, execution would halt immediately rather than running for 14 hours.</li>
                                <li><strong>Why D is incorrect:</strong> Binary classification is faster than multiclass, not slower.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task optimizing hyperparameters with Optuna, how did Bayesian Tree-structured Parzen Estimators (TPE) outperform random search?</p>
                    <ul>
                        <li>A) By building a probabilistic model of past trial results to intelligently sample future hyperparameters in regions with highest expected improvement</li>
                        <li>B) By testing every parameter alphabetically</li>
                        <li>C) By running all trials simultaneously on a single CPU core</li>
                        <li>D) By resetting all parameters to zero after every trial</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Used Bayesian probability (TPE) to guide future trials toward promising hyperparameter regions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Optuna's Bayesian optimization uses past trial evaluations to model the objective function landscape, directing computational budget toward hyperparameter regions with high probability of performance gain.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Hyperparameters are numeric/categorical, not searched alphabetically.</li>
                                <li><strong>Why C is incorrect:</strong> Bayesian optimization is sequential, not brute-force concurrent single-core.</li>
                                <li><strong>Why D is incorrect:</strong> Resetting parameters to zero discards accumulated probabilistic optimization history.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Model Parameters: Learned from data (weights)</li>
                    <li>Hyperparameters: Settings for the algorithm (depth, k, learning rate)</li>
                    <li>GridSearch tries every combination (thorough but slow)</li>
                    <li>RandomSearch tries random combinations (faster, often good enough)</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t20': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Scikit-Learn Library Basics</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is Scikit-Learn's consistent three-method API design (<code>fit()</code>, <code>transform()</code>, <code>predict()</code>) considered a masterpiece of machine learning software engineering?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Consistency enables modularity! Every estimator in Scikit-Learn follows the exact same blueprint: <code>fit(X, y)</code> estimates parameters from training data, <code>transform(X)</code> applies learned transformations to features, and <code>predict(X)</code> outputs predictions. This uniformity allows data scientists to swap a Linear Regression for a Random Forest or XGBoost by changing a single line of code without rewriting the pipeline.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does Scikit-Learn's <code>ColumnTransformer</code> solve the problem of processing an agricultural dataset containing mixed data types (e.g., continuous numeric soil pH and categorical village names)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A standard scaler cannot scale text strings, and an encoder cannot scale floats. <code>ColumnTransformer</code> routes specific column subsets to dedicated preprocessing pipelines: continuous numerical features pass through <code>StandardScaler()</code>, while categorical text strings pass through <code>OneHotEncoder()</code>. The transformed arrays are then concatenated side-by-side into a single matrix for modeling.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand the unified API of Scikit-Learn</li>
                    <li>Estimators vs Transformers vs Predictors</li>
                    <li>Building basic Pipelines</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Scikit-Learn (sklearn) = The Universal Farm Tool Attachment</strong></p>
                    <p>Whether you attach a plow, seeder, or harvester, they all connect to the tractor (Python) the same way (fit/predict). Consistent and interchangeable!</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# The inconsistent 3-Step Pattern of Scikit-Learn
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
import numpy as np

# Data
X = np.array([[100], [200], [300], [400]]) # Rainfall
y = np.array([20, 45, 55, 80])             # Yield

# === 1. TRANSFORMER (Data Prep) ===
scaler = StandardScaler()
scaler.fit(X)             # Learn parameters (mean, std)
X_scaled = scaler.transform(X) # Apply transformation
print(f"Scaled X:\\n{X_scaled}")

# === 2. ESTIMATOR (Model) ===
model = LinearRegression()
model.fit(X_scaled, y)    # Train

# === 3. PREDICTOR ===
new_data = np.array([[250]])
new_scaled = scaler.transform(new_data) # MUST scale new data too!
pred = model.predict(new_scaled)
print(f"Prediction for 250mm: {pred[0]:.0f}")

# === PIPELINE (Automation) ===
print("\\n=== Using Pipeline ===")
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LinearRegression())
])

pipe.fit(X, y) # Handles scaling automatically!
print(f"Pipeline Prediction: {pipe.predict(new_data)[0]:.0f}")
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
                            <h3>Live Demonstration: End-to-End Scikit-Learn Pipeline with Preprocessing &amp; Estimators</h3>
                            <p><strong>Educator Action:</strong> The instructor live-codes an enterprise-grade Scikit-Learn pipeline in Google Colab on the projector:</p>
                            <ul>
                                <li>Demonstrates the unified API pattern: Estimator (<code>fit</code>), Transformer (<code>fit_transform</code>, <code>transform</code>), and Predictor (<code>predict</code>, <code>predict_proba</code>).</li>
                                <li>Uses <code>ColumnTransformer</code> to handle heterogeneous agricultural features: numerical columns (soil moisture, pH) scaled via <code>StandardScaler</code>, and categorical columns (soil type, irrigation method) encoded via <code>OneHotEncoder</code>.</li>
                                <li>Chains the transformer directly into a <code>RandomForestClassifier</code> using <code>Pipeline</code>, demonstrating how a single call to <code>pipeline.fit(X_train, y_train)</code> prevents data leakage cleanly.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A production-ready Scikit-Learn pipeline script demonstrated live on real messy farm data with zero data leakage.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Modular ML Architecture &amp; Pipeline Design Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in architecting robust, modular machine learning pipelines for agricultural analytics platforms:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we structure an automated agronomic pipeline that receives uncurated IoT sensor streams with missing values, differing measurement units, and categorical farm metadata, ensuring that production inference identically mirrors training transformations?"</em></li>
                                <li><strong>Collaborative Architecture:</strong> Faculty and students construct custom Scikit-Learn transformer classes inheriting from <code>BaseEstimator</code> and <code>TransformerMixin</code> (e.g., a custom GDD - Growing Degree Days aggregator), testing compatibility within standard pipelines.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A custom <code>CropFeatureTransformer</code> class integrated into an end-to-end Scikit-Learn processing pipeline specification.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The End-to-End Leakage-Proof Pipeline Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are challenged to build a complete pipeline on a raw agricultural dataset containing missing values, categorical labels, and high numerical ranges:</p>
                            <ul>
                                <li><strong>Tasks:</strong> Construct a <code>ColumnTransformer</code> handling numerical imputation (<code>strategy='median'</code>), feature scaling (<code>RobustScaler</code>), categorical encoding (<code>OneHotEncoder(handle_unknown='ignore')</code>), and a downstream regression model (<code>Ridge</code> or <code>RandomForestRegressor</code>).</li>
                                <li><strong>Peer Audit:</strong> Teams swap codebases and inject edge-case test records (missing values, unseen categories) to test whether their peer's pipeline processes unseen production records without raising exceptions or throwing shape mismatches.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A tested Scikit-Learn pipeline dossier with automated stress-testing results on corrupted sensor streams.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build &amp; Validate a Complete Scikit-Learn Pipeline in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build a standalone pipeline script:</p>
                            <ul>
                                <li>Create a sample farm DataFrame with missing values, continuous features (<code>soil_nitrogen</code>, <code>irrigation_liters</code>), categorical feature (<code>crop_variety</code>), and continuous target (<code>harvest_kg</code>).</li>
                                <li>Construct a <code>Pipeline</code> containing <code>SimpleImputer(strategy='mean')</code>, <code>StandardScaler()</code>, and <code>LinearRegression()</code>.</li>
                                <li>Fit the pipeline on training data, evaluate on a holdout test set using <code>mean_squared_error</code>, and demonstrate how to save and export the fitted pipeline using <code>joblib.dump()</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook creating, evaluating, and serializing a Scikit-Learn pipeline object.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Pipeline Demo):</strong> In the Teacher's live demonstration, what Scikit-Learn utility routed numeric columns to StandardScaler and categorical columns to OneHotEncoder in a unified step?</p>
                    <ul>
                        <li>A) sklearn.compose.ColumnTransformer</li>
                        <li>B) sklearn.preprocessing.LabelEncoder</li>
                        <li>C) sklearn.model_selection.train_test_split</li>
                        <li>D) sklearn.decomposition.PCA</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>ColumnTransformer applied distinct preprocessing transformers to specified column subsets.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>ColumnTransformer</code> applies different transformers to designated column slices of an array or DataFrame, combining the outputs into a single numerical feature matrix for downstream estimators.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> LabelEncoder is for 1D target labels, not multi-column feature matrix transformations.</li>
                                <li><strong>Why C is incorrect:</strong> train_test_split partitions rows, not column preprocessing.</li>
                                <li><strong>Why D is incorrect:</strong> PCA performs dimensionality reduction, not mixed-type feature encoding.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Pipeline Architecture Studio):</strong> During the Architecture Studio, why did student teams wrap their preprocessing and classifier inside a Scikit-Learn <code>Pipeline</code> before passing it to <code>cross_val_score()</code>?</p>
                    <ul>
                        <li>A) To guarantee that preprocessing (scaling and imputation) is re-fitted strictly on training folds inside each cross-validation split, completely preventing data leakage</li>
                        <li>B) To make the Python file smaller</li>
                        <li>C) Because Scikit-Learn models cannot run without pipelines</li>
                        <li>D) To convert the model to C++ automatically</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Guaranteed that preprocessing was re-fitted exclusively on training folds during CV, eliminating leakage.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Wrapping transformations and models in a <code>Pipeline</code> ensures that <code>fit()</code> and <code>transform()</code> are applied cleanly within each CV split, mathematically isolating validation data from preprocessing parameter estimation.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Pipelines add software abstraction and do not reduce file size.</li>
                                <li><strong>Why C is incorrect:</strong> Models can be run independently, but doing so manually during CV risks leakage.</li>
                                <li><strong>Why D is incorrect:</strong> Pipelines remain native Python/Cython code and do not transpile to C++.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building an End-to-End Scikit-Learn Pipeline, which method called on the fitted pipeline simultaneously transformed unseen field test data and generated crop yield predictions?</p>
                    <ul>
                        <li>A) pipeline.predict(X_test)</li>
                        <li>B) pipeline.fit_transform(X_test)</li>
                        <li>C) pipeline.score_test()</li>
                        <li>D) pipeline.to_json()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>pipeline.predict(X_test) automatically applied learned transformations before model inference.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Calling <code>.predict()</code> on a fitted pipeline automatically routes raw test inputs through all intermediate <code>transform()</code> steps using previously fitted parameters before passing the array to the final estimator's <code>predict()</code> method.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Calling <code>fit_transform</code> on test data recalculates parameters on the test set, causing data leakage.</li>
                                <li><strong>Why C is incorrect:</strong> <code>.score_test()</code> is a fictitious method name.</li>
                                <li><strong>Why D is incorrect:</strong> to_json() is for serializing text, not executing model inference.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li><strong>fit()</strong>: Learn from data</li>
                    <li><strong>transform()</strong>: Modify data (prep)</li>
                    <li><strong>predict()</strong>: Predict output</li>
                    <li><strong>Pipeline</strong>: Chains steps together to prevent data leakage</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t22': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Regression Model Evaluation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is Root Mean Squared Error (RMSE) more sensitive to catastrophic agricultural prediction errors than Mean Absolute Error (MAE)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> MAE treats all errors linearly (an error of 10 quintals is penalized exactly twice as much as an error of 5). RMSE squares the errors before averaging: an error of 10 is penalized 100, while an error of 5 is penalized 25 (4x higher!). In commercial agriculture, predicting harvest yield off by a massive margin triggers severe supply chain default penalties; RMSE heavily penalizes these disastrous large deviations.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does adding 20 useless, random noise features to a linear regression model cause standard R² to increase, and why does Adjusted R² prevent this delusion?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Mathematical mechanics of OLS! Adding any new feature—even random lottery numbers—gives the optimization slight degrees of freedom to fit random sample noise, mechanically decreasing residual sum of squares and increasing standard R². Adjusted R² penalizes model complexity by dividing by degrees of freedom: if a new feature does not improve the model more than random chance, Adjusted R² decreases.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Calculate MAE, MSE, RMSE, and R²</li>
                    <li>Interpret metrics in agricultural context</li>
                    <li>Compare model performance</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Evaluation Metrics = Weighing the Harvest</strong></p>
                    <ul>
                        <li><strong>MAE:</strong> On average, I'm off by 50kg per acre.</li>
                        <li><strong>RMSE:</strong> Penalizes big mistakes heavily (like losing a whole field).</li>
                        <li><strong>R²:</strong> I can explain 85% of the yield variations (weather, soil), but 15% is still a mystery.</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

# True Yields vs Predicted Yields
y_true = [3000, 2500, 4000, 3200, 2800]
y_pred = [3100, 2400, 3800, 3250, 2900]

# === MAE (Mean Absolute Error) ===
# interpretable: "Average error in kg"
mae = mean_absolute_error(y_true, y_pred)
print(f"MAE: {mae:.0f} kg")

# === MSE & RMSE (Root Mean Squared Error) ===
# RMSE is in same units as target (kg) and penalizes big errors
mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)
print(f"RMSE: {rmse:.0f} kg")

# === R² (Coefficient of Determination) ===
# 0 to 1 scale. 1 = Perfect fit.
r2 = r2_score(y_true, y_pred)
print(f"R² Score: {r2:.3f}")

if r2 > 0.8:
    print("✅ Excellent model!")
elif r2 > 0.5:
    print("⚠️ Decent model, room for improvement.")
else:
    print("❌ Poor model - need better features.")
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
                            <h3>Live Demonstration: Dissecting MAE, RMSE, MAPE &amp; R² on Crop Yield Anomalies</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates regression evaluation diagnostics live in Google Colab on the projector:</p>
                            <ul>
                                <li>Generates true harvest yields across 40 farm plots (range: 2,000 to 5,000 kg/ha).</li>
                                <li>Simulates two contrasting predictive models: Model Alpha (steady errors of &plusmn;200 kg across all plots) and Model Beta (near-perfect on 38 plots, but fails on 2 drought plots by 1,800 kg).</li>
                                <li>Computes MAE, RMSE, and MAPE side-by-side: shows that while both produce similar MAE (&sim;200 kg), Model Beta's RMSE explodes to &gt;450 kg due to quadratic penalization of large errors.</li>
                                <li>Demonstrates plotting predicted vs actual 45&deg; scatter plots and residual plots ($y - \hat{y}$ vs $\hat{y}$) to diagnose heteroscedasticity live.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive Colab regression diagnostic notebook demonstrating residual analysis and metric sensitivity to outliers.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agricultural Loss Functions &amp; Economic Impact Metric Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student teams on mapping statistical evaluation metrics to agricultural economic realities:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In contract farming yield forecasting, under-predicting yield by 20% results in minor storage readjustment, but over-predicting yield by 20% causes contract breach penalties and logistical collapse. Why are standard symmetric loss metrics (MSE, MAE) inadequate, and how do we evaluate asymmetric business risk?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and student groups formulate custom asymmetric loss functions (pinball loss, quantile regression, cost-weighted MAE) and establish threshold standards for production farm deployment.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A comprehensive Agricultural Model Validation Framework balancing statistical fit ($R^2$, RMSE) with agribusiness financial risk metrics.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The Model Showdown: Regression Metrics Audit Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student cohorts receive predictions from 3 competing yield prediction models (Linear Regression, Support Vector Regressor, Random Forest) on 100 historical harvest records:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Calculate MAE, MSE, RMSE, MAPE, and adjusted $R^2$ for all three models; rank the models under each metric.</li>
                                <li><strong>Task 2:</strong> Construct residual distribution plots ($e = y - \hat{y}$) and run the Shapiro-Wilk test to evaluate normality of residuals.</li>
                                <li><strong>Peer Defense:</strong> Teams present their evaluation findings to a peer syndicate, defending why the model with the highest $R^2$ might not be the most robust for farm advisory if its residual errors are heavily skewed.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A comparative model evaluation dossier with residual diagnostic plots and an evidence-backed model recommendation.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Implement Full Regression Evaluation Suite in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent regression evaluation function:</p>
                            <ul>
                                <li>Write a Python function <code>evaluate_farm_regression(y_true, y_pred)</code> that computes and neatly formats MAE, RMSE, Mean Absolute Percentage Error (MAPE), and $R^2$.</li>
                                <li>Test the function on simulated grain harvest data (50 plots).</li>
                                <li>Generate a dual-panel visualization: Panel 1 showing Actual vs Predicted scatter with a 1:1 identity line, and Panel 2 showing a Residual vs Predicted plot with a horizontal zero line.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A reusable Python evaluation module in Colab producing publication-quality residual diagnostic plots and formatted summary tables.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Metric Demonstration):</strong> In the Teacher's live evaluation of potato yield predictions, why was RMSE reported alongside MAE when comparing a baseline linear model against a gradient boosted regressor?</p>
                    <ul>
                        <li>A) RMSE penalizes large outlier errors quadratically, revealing that the baseline model had occasional catastrophic mispredictions that MAE masked</li>
                        <li>B) RMSE is always smaller than MAE</li>
                        <li>C) MAE only works on integer numbers</li>
                        <li>D) RMSE converts yield units from quintals into kilograms</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>RMSE penalizes large errors quadratically, exposing extreme mispredictions that MAE conceals.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Because RMSE squares errors before taking the root, large discrepancies pull RMSE significantly above MAE. A large gap between RMSE and MAE indicates the presence of severe prediction outliers.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Mathematically, RMSE is always greater than or equal to MAE due to Jensen's inequality.</li>
                                <li><strong>Why C is incorrect:</strong> MAE operates seamlessly on continuous floating-point predictions.</li>
                                <li><strong>Why D is incorrect:</strong> RMSE retains the exact same physical measurement units as the target variable (quintals).</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Metric Selection Studio):</strong> During the Metric Trade-off Studio, why did student teams choose Mean Absolute Percentage Error (MAPE) to communicate model performance to cooperative smallholder farmers?</p>
                    <ul>
                        <li>A) MAPE expresses prediction error as an intuitive percentage (e.g., 'on average, predictions are within 8% of actual harvest'), making it understandable without statistical training</li>
                        <li>B) MAPE is the only metric supported by Python</li>
                        <li>C) MAPE guarantees zero prediction errors</li>
                        <li>D) MAPE is immune to division-by-zero errors when yields are 0</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>MAPE communicates errors as an intuitive percentage of actual harvest volume.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> While data scientists rely on RMSE and R², non-technical agricultural stakeholders and farmers intuitively understand percentage error (e.g., 'our forecast is accurate to within ±7% of your final yield').</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Python supports dozens of regression metrics via Scikit-Learn.</li>
                                <li><strong>Why C is incorrect:</strong> No evaluation metric guarantees zero error.</li>
                                <li><strong>Why D is incorrect:</strong> MAPE divides by actual values, making it undefined or explosive when actual yield is zero.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Regression Metrics Calculator, which Scikit-Learn function computed the coefficient of determination (R²)?</p>
                    <ul>
                        <li>A) sklearn.metrics.r2_score(y_true, y_pred)</li>
                        <li>B) sklearn.metrics.accuracy_score(y_true, y_pred)</li>
                        <li>C) sklearn.metrics.f1_score(y_true, y_pred)</li>
                        <li>D) sklearn.metrics.roc_auc_score(y_true, y_pred)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>r2_score(y_true, y_pred) computed the proportion of variance explained by the regression model.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>r2_score</code> calculates the coefficient of determination (1 - SS_res / SS_tot), measuring the proportion of target variance explained by model features.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> accuracy_score is strictly for categorical classification.</li>
                                <li><strong>Why C is incorrect:</strong> f1_score evaluates harmonic precision/recall in classification.</li>
                                <li><strong>Why D is incorrect:</strong> roc_auc_score evaluates binary classification ranking.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Use <strong>MAE</strong> for interpretation</li>
                    <li>Use <strong>RMSE</strong> if big errors are dangerous</li>
                    <li>Use <strong>R²</strong> to see "how much of the pattern" you captured</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t23': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Logistic Regression</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why can't we use standard Linear Regression to predict whether a crop plot is infected with bacterial wilt (Infected = 1, Healthy = 0)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Linear regression fits an unbounded straight line (<code>y = mx + b</code>). For extreme feature values (e.g., very high humidity), it predicts probabilities of 1.4 or -0.3—which are mathematically impossible! Logistic Regression maps the linear combination through the non-linear Sigmoid function, bounding predictions strictly between 0.0 and 1.0 as valid probabilities.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> In agricultural disease quarantine, why should the classification decision threshold be lowered from the default 0.50 to 0.25?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Asymmetric error costs! A False Negative (failing to detect an infected crop) allows an infectious pathogen to spread across the entire district, causing total agricultural quarantine and millions in losses. A False Positive (inspecting a healthy plot) incurs only minor lab testing cost. Lowering the decision threshold to 0.25 prioritizes recall, catching every possible infection.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand Logistic Regression for Classification</li>
                    <li>Sigmoid Function intuition</li>
                    <li>Confusion Matrix and Accuracy</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Logistic Regression = Yes/No Decisions</strong></p>
                    <p>Despite the name "Regression", used for Classification.</p>
                    <p>Example: Will this crop succumb to frost? (Yes/No). It gives a probability: "80% chance of frost damage".</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix
import matplotlib.pyplot as plt
import numpy as np

# Data: [Temperature, Humidity]
# Target: 0 = Healthy, 1 = Diseased
X = [[25, 40], [24, 42], [28, 80], [30, 85], [22, 45], [29, 82]]
y = [0, 0, 1, 1, 0, 1]

# Train
model = LogisticRegression()
model.fit(X, y)

# Predict Probability
new_day = [[29, 78]] # Warm and humid
prob = model.predict_proba(new_day)
print(f"Probability of Disease: {prob[0][1]:.2%}")

# Confusion Matrix
y_pred = model.predict(X)
cm = confusion_matrix(y, y_pred)
print(f"Confusion Matrix:\\n{cm}")
print("(True Neg  False Pos)")
print("(False Neg True Pos)")
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
                            <h3>Live Demonstration: Sigmoid Decision Boundary, Odds Ratios &amp; Threshold Tuning</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates logistic regression dynamics live in Google Colab on the projector using an agricultural disease risk dataset:</p>
                            <ul>
                                <li>Plots a 2D feature space of fungal blight infection based on canopy temperature (&deg;C) and relative humidity (%).</li>
                                <li>Fits <code>LogisticRegression</code> and plots the 2D linear decision boundary together with probability contours using <code>predict_proba</code>.</li>
                                <li>Explains log-odds, logit transformation, and converts model coefficients ($\beta$) into odds ratios ($\exp(\beta)$): explains that <em>"Each 1% increase in canopy humidity increases the odds of blight infection by 1.18 times (+18%)"</em>.</li>
                                <li>Demonstrates probability threshold shifting (from 0.5 down to 0.25) to prioritize sensitivity (recall) in early disease prevention where false negatives lead to field devastation.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive Colab script plotting probability sigmoid curves, decision boundaries, and threshold-dependent confusion matrices.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Precision Agronomic Classification &amp; Threshold Economics Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on tuning classification thresholds based on crop economic loss functions:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In automated sorting of export-grade mangoes, a False Positive (classifying a defective fruit as export-grade) causes a \$10,000 shipment rejection penalty, whereas a False Negative (diverting an export fruit locally) costs only \$0.50. Where should the logistic decision threshold be placed?"</em></li>
                                <li><strong>Collaborative Modeling:</strong> Faculty and students formulate cost-utility matrices, calculating optimal probability cutoffs using ROC curves and precision-recall trade-off frontiers for agribusiness logistics.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Economic Classification Threshold Policy document with ROC operating-point justifications.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Seed Germination &amp; Soil Pathogen Risk Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a field dataset of 120 seed lots with features <code>[storage_age_months, moisture_pct, storage_temp_c, seed_coat_integrity]</code> and binary germination outcome:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Train a <code>LogisticRegression</code> classifier; compute accuracy, precision, recall, and F1-score.</li>
                                <li><strong>Task 2:</strong> Calculate odds ratios for all 4 features and rank features by their inhibitory or promotive impact on germination.</li>
                                <li><strong>Peer Defense:</strong> Teams defend their model's classification matrix against a peer syndicate, demonstrating how adjusting the germination prediction threshold minimizes wasted nursery planting cells.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A seed vigor prediction dossier containing odds-ratio interpretation tables and peer-audited confusion matrices.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Train &amp; Interpret a Crop Frost Risk Classifier in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent logistic regression classifier:</p>
                            <ul>
                                <li>Generate synthetic data for 100 nights with features <code>[min_air_temp_c, wind_speed_kmh, dew_point_c]</code> and binary label <code>frost_damage</code> (0 = No Damage, 1 = Damage).</li>
                                <li>Train a <code>LogisticRegression</code> model from Scikit-Learn.</li>
                                <li>Print intercept and feature coefficients; compute the odds ratio for each feature ($\exp(\beta)$) with human-readable interpretation.</li>
                                <li>Predict frost probability for a critical upcoming night: <code>[-1.5 deg C, 3.0 km/h wind, -2.0 dew point]</code>, and print whether an alert should be triggered at a 0.3 probability threshold.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating odds ratios, predicted probabilities, and a threshold-tuned alert rule.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Sigmoid & Threshold Demo):</strong> In the Teacher's live demonstration of logistic regression on crop fungal stress, what mathematical function compressed the unbounded linear equation z = w*x + b into a [0, 1] probability range?</p>
                    <ul>
                        <li>A) The Sigmoid (logistic) function: σ(z) = 1 / (1 + e^(-z))</li>
                        <li>B) The ReLU function: max(0, z)</li>
                        <li>C) The Tangent function: tan(z)</li>
                        <li>D) The absolute value function: |z|</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>The Sigmoid function σ(z) = 1 / (1 + e^(-z)) mapped real numbers into valid [0, 1] probabilities.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The Sigmoid function creates an S-shaped curve that asymptotically approaches 0 at negative infinity and 1 at positive infinity, converting log-odds into well-calibrated probabilities.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> ReLU outputs unbounded positive values from 0 to infinity, not bounded probabilities.</li>
                                <li><strong>Why C is incorrect:</strong> Tangent has vertical asymptotes and oscillates across negative/positive infinity.</li>
                                <li><strong>Why D is incorrect:</strong> Absolute value is unbounded and cannot model binary probability transitions.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Farm Cost Asymmetry Studio):</strong> During the Farm Cost Asymmetry Studio, why did student teams adjust the logistic regression classification threshold from 0.50 down to 0.20 for detecting locust swarm infestation?</p>
                    <ul>
                        <li>A) Because missing a locust swarm (False Negative) leads to catastrophic crop destruction, so the model was tuned for maximum Recall over Precision</li>
                        <li>B) To increase model execution speed on the CPU</li>
                        <li>C) Because locusts can only be detected at 0.20 probability</li>
                        <li>D) To reduce the number of true positive detections</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Tuned threshold to 0.20 to maximize Recall, prioritizing early swarm detection over false alarms.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In biosecurity and disaster prevention, the cost of a False Negative vastly outweighs a False Positive. Lowering the decision threshold forces the classifier to trigger alerts even on weak warning signs.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Threshold tuning changes decision boundaries on predicted probabilities; it does not change CPU inference speed.</li>
                                <li><strong>Why C is incorrect:</strong> Probabilities are continuous; locusts do not carry fixed probability values.</li>
                                <li><strong>Why D is incorrect:</strong> Lowering thresholds increases true positives and false positives.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Logistic Regression Classifier, which method returned the continuous class probabilities instead of hard binary (0/1) predictions?</p>
                    <ul>
                        <li>A) model.predict_proba(X_test)</li>
                        <li>B) model.predict(X_test)</li>
                        <li>C) model.decision_function(X_test)</li>
                        <li>D) model.score(X_test)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>model.predict_proba(X_test) returned a 2D array of class probabilities for classes 0 and 1.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>predict_proba()</code> returns the raw Sigmoid probability scores (e.g., [0.15, 0.85]), allowing data scientists to evaluate custom decision thresholds and compute ROC-AUC curves.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> <code>predict()</code> applies the fixed default 0.5 threshold and outputs hard categorical labels (0 or 1).</li>
                                <li><strong>Why C is incorrect:</strong> <code>decision_function()</code> returns unscaled log-odds distances to the decision hyperplane.</li>
                                <li><strong>Why D is incorrect:</strong> <code>score()</code> returns overall accuracy.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Used for Binary Classification (0 or 1)</li>
                    <li>Outputs probabilities via Sigmoid function</li>
                    <li>Linear decision boundary</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t24': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Decision Trees for Classification</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why are Decision Trees beloved by field agronomists and agricultural extension officers over 'black-box' deep neural networks?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Interpretability! A decision tree can be drawn as an intuitive flowchart of IF-THEN rules: <code>if soil_ph < 5.5 and drainage == 'poor' -> Waterlogging Acidosis</code>. An agronomist can inspect every branch, verify that the tree's logic aligns with plant physiology, and explain the diagnosis to a farmer in plain local language.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> If an unpruned Decision Tree is allowed to grow to infinite depth on a farm dataset of 500 plots, why will it achieve 100% training accuracy but fail miserably in the field?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> An unconstrained tree will keep splitting until every single training sample occupies its own leaf node, creating complex decision boundaries that isolate individual noisy outliers (e.g., memorizing that Plot 42 with pH 6.1 on a Tuesday had mildew). Pruning (<code>max_depth</code>, <code>min_samples_split</code>) enforces Occam's Razor, keeping only generalizable rules.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand tree structure (Nodes, Leaves, Branches)</li>
                    <li>Splitting criteria (Gini, Entropy)</li>
                    <li>Visualizing decision trees</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Decision Tree = Crop Diagnostic Chart</strong></p>
                    <p>Like a troubleshooting flowchart:</p>
                    <ol>
                        <li>Are leaves yellow? (Yes/No)</li>
                        <li>--> Yes: Are spots present? (Yes/No)</li>
                        <li>----> Yes: <strong>Fungal Disease</strong></li>
                        <li>----> No: <strong>Nutrient Deficiency</strong></li>
                    </ol>
                    <p>It breaks complex decisions into simple questions.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

# Data: [Leaf_Yellowing (0/1), Spots (0/1), Insects (0/1)]
X = [
    [1, 1, 0], # Disease A
    [1, 0, 0], # Nutrient Def
    [0, 0, 1], # Insect Attack
    [0, 0, 0]  # Healthy
]
y = ['Fungus', 'Nutrient', 'Insect', 'Healthy']

clf = DecisionTreeClassifier()
clf.fit(X, y)

# Predict
symptom = [[1, 0, 0]] # Yellow leaves, no spots
print(f"Diagnosis: {clf.predict(symptom)[0]}")

# Visualize
plt.figure(figsize=(10,6))
plot_tree(clf, feature_names=['Yellow', 'Spots', 'Insects'], class_names=clf.classes_, filled=True)
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
                            <h3>Live Demonstration: Tree Node Splitting, Impurity Calculations &amp; Rule Visualization</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates decision tree mechanics live in Google Colab on the projector using an agricultural pest identification dataset:</p>
                            <ul>
                                <li>Walks through the mathematical calculation of Gini Impurity ($1 - \sum p_i^2$) and Information Gain by hand on a whiteboard for 20 leaf samples before showing Scikit-Learn's automated split selection.</li>
                                <li>Fits a <code>DecisionTreeClassifier</code> with <code>criterion='gini'</code> and renders an exportable high-resolution tree graph using <code>plot_tree(filled=True)</code>.</li>
                                <li>Narrates each decision node: explains root split (e.g., <code>leaf_spot_diameter &le; 3.5 mm</code>), internal branch nodes, and leaf node class purity.</li>
                                <li>Demonstrates tree pruning live: contrasts an unconstrained tree with 28 leaves (overfit) against a pruned tree (<code>max_depth=3</code>, <code>min_impurity_decrease=0.02</code>) generating human-readable extension rules.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook rendering annotated decision tree diagrams and exporting plain-text IF-THEN agronomic rules via <code>export_text</code>.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agronomic Expert Knowledge Integration &amp; Tree Pruning Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in aligning AI decision tree logic with established agronomic field extension guidelines:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"If a decision tree trained on drone imagery recommends nitrogen application when leaf yellowing occurs—ignoring whether soil moisture is below wilting point—why is the tree agronomically dangerous, and how do we constrain split logic using domain boundaries?"</em></li>
                                <li><strong>Collaborative Architecture:</strong> Faculty and students formulate domain-constrained tree pipelines, comparing unconstrained data-driven splits against expert decision matrices, testing monotonicity constraints and feature subsets.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agronomic Decision Tree Verification Matrix mapping machine learning split paths to verified university extension pest diagnostic keys.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Irrigation Automation Decision Tree Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams develop an automated irrigation control decision tree for smart solar-powered micro-irrigation systems:</p>
                            <ul>
                                <li><strong>Features:</strong> <code>[soil_moisture_pct, solar_radiation_w_m2, et0_evapotranspiration_mm, weather_rain_forecast_prob, grid_power_status]</code> with binary action <code>pump_trigger</code> (1 = Start Pump, 0 = Inactive).</li>
                                <li><strong>Task 1:</strong> Train a <code>DecisionTreeClassifier</code> and export the full logical rule set using <code>sklearn.tree.export_text</code>.</li>
                                <li><strong>Task 2:</strong> Validate edge cases (e.g., severe drought but rain probability &gt; 85%, or dry soil during peak solar hours when drip irrigation causes high evaporation).</li>
                                <li><strong>Peer Audit:</strong> Teams challenge each other's tree logic with 5 stress-test weather scenarios to identify unsafe pump trigger conditions.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An exported Decision Tree Rule Book with stress-tested irrigation edge case resolutions.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build &amp; Visualize a Crop Pest Diagnostic Tree in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent decision tree classifier:</p>
                            <ul>
                                <li>Create a dataset of 80 plant observations with 4 binary/categorical features: <code>[leaf_wilting, stem_canker, white_pustules, insect_borers]</code> and a 3-class diagnosis <code>[Fungal_Rust, Stem_Borer_Attack, Drought_Stress]</code>.</li>
                                <li>Fit a <code>DecisionTreeClassifier(max_depth=3, criterion='entropy')</code>.</li>
                                <li>Render and export a publication-quality diagram using <code>plot_tree(filled=True)</code> with custom class colors and rounded node boxes.</li>
                                <li>Write a short Python loop testing 3 new diseased plant symptom profiles and printing clear diagnostic advice for each.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating an exportable decision tree diagram with automated diagnostic inference printouts.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Tree Pruning Demo):</strong> In the Teacher's live demonstration, how did pruning a Decision Tree (setting max_depth=4 and min_samples_leaf=10) affect its performance on unlabelled test plots?</p>
                    <ul>
                        <li>A) It eliminated over-complex leaf splits, reducing training accuracy slightly but dramatically increasing test accuracy on unseen farms</li>
                        <li>B) It reduced both training and test accuracy to zero</li>
                        <li>C) It converted the decision tree into a neural network</li>
                        <li>D) It increased tree depth to 100 levels</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Pruning prevented overfitting on noisy outliers, trading slight training drop for higher test generalization.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Unconstrained decision trees overfit by memorizing training noise. Constraining tree growth via <code>max_depth</code> and <code>min_samples_leaf</code> regularizes the tree, enforcing simpler, more robust biological decision rules.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Pruning regularizes models; it does not destroy accuracy.</li>
                                <li><strong>Why C is incorrect:</strong> Pruning restricts tree node expansion and has nothing to do with neural networks.</li>
                                <li><strong>Why D is incorrect:</strong> Setting max_depth=4 caps tree depth at 4, preventing deeper growth.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Decision Rule Extraction Studio):</strong> During the Tree Interpretability Studio, which metric did the Decision Tree algorithm minimize at each node split to evaluate partition purity?</p>
                    <ul>
                        <li>A) Gini Impurity (or Entropy / Information Gain)</li>
                        <li>B) R-squared</li>
                        <li>C) Euclidean distance</li>
                        <li>D) Mean Absolute Percentage Error</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Gini Impurity (or Entropy) measured class label homogeneity across candidate feature splits.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Classification trees evaluate candidate splits by measuring the reduction in impurity (Gini or Entropy), selecting the feature and threshold that produces the purest, most homogeneous child subsets.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> R-squared evaluates continuous regression, not categorical classification splits.</li>
                                <li><strong>Why C is incorrect:</strong> Euclidean distance is used in K-Means clustering and KNN, not decision tree splits.</li>
                                <li><strong>Why D is incorrect:</strong> MAPE evaluates continuous percentage errors.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Pruned Decision Tree, which Scikit-Learn function visualized the trained tree as a graphical flowchart of decision nodes?</p>
                    <ul>
                        <li>A) sklearn.tree.plot_tree(clf, feature_names=features, filled=True)</li>
                        <li>B) clf.show_tree()</li>
                        <li>C) plt.imshow(clf)</li>
                        <li>D) clf.export_flowchart()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>sklearn.tree.plot_tree(clf, filled=True) rendered the hierarchical node flowchart with color coding.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>plot_tree()</code> renders the decision nodes, split criteria, sample counts, and dominant class colors directly onto a Matplotlib figure, providing full visual transparency into model reasoning.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> show_tree() is a fictitious method.</li>
                                <li><strong>Why C is incorrect:</strong> plt.imshow() expects a 2D/3D image pixel array, not an estimator object.</li>
                                <li><strong>Why D is incorrect:</strong> export_flowchart is not a valid Scikit-Learn function.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Easy to interpret and explain</li>
                    <li>Prone to overfitting (limit max_depth!)</li>
                    <li>Non-linear decision boundaries</li>
                </ul>
            </div>
        </div>
    `,

    'm2-t25': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Feature Importance Analysis</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is Mean Decrease in Impurity (MDI / Gini Importance) dangerously biased when analyzing agricultural datasets that contain high-cardinality features (like unique plot IDs or dates)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> MDI evaluates how often a feature is chosen for splitting across tree nodes. High-cardinality features (like unique plot IDs or timestamps) offer countless unique numerical split points, allowing the tree to use them for easy greedy impurity reduction. MDI artificially inflates their importance to the top, even though unique IDs have zero predictive generalization on new farms! Permutation Importance solves this.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does Permutation Importance evaluate whether 'Soil Organic Carbon' is genuinely critical for crop yield prediction?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Permutation Importance evaluates the model on held-out validation data. It takes the 'Soil Organic Carbon' column and randomly shuffles (permutes) its values, breaking its relationship with crop yield while keeping all other columns intact. If model prediction error surges dramatically after shuffling, Soil Organic Carbon is genuinely critical; if error barely changes, the feature was redundant.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Extract feature importance from tree-based models</li>
                    <li>Interpret importance scores</li>
                    <li>Select relevant features for efficiency</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Feature Importance = What Really Matters?</strong></p>
                    <p>You track 50 variables (moon phase, wind, humidity, tractor speed...). The model tells you: "Humidity and Soil Type determine 90% of your yield. Ignore the moon phase."</p>
                    <p>Focus your effort on managing what matters.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.ensemble import RandomForestRegressor
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Data
data = pd.DataFrame({
    'Rainfall': [100, 150, 200, 100],
    'Fertilizer': [50, 50, 50, 150],
    'Worker_Name_ID': [1, 2, 1, 3], # Irrelevant feature
    'Yield': [2000, 2500, 3000, 3500] 
})

X = data.drop('Yield', axis=1)
y = data['Yield']

model = RandomForestRegressor()
model.fit(X, y)

# Get Importance
importances = model.feature_importances_
feature_names = X.columns

# Plot
plt.figure(figsize=(8,4))
sns.barplot(x=importances, y=feature_names)
plt.title("What affects Yield the most?")
plt.xlabel("Importance Score")
plt.show()

print("Notice how Worker ID likely has low importance compared to physical factors.")
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
                            <h3>Live Demonstration: MDI (Gini Importance) vs Permutation Importance vs SHAP</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates feature importance dynamics live in Google Colab on the projector using an agricultural yield dataset:</p>
                            <ul>
                                <li>Trains a <code>RandomForestRegressor</code> on 12 agricultural variables, including continuous soil sensors, categorical crop varieties, and an intentionally injected high-cardinality random ID.</li>
                                <li>Extracts default Mean Decrease in Impurity (<code>model.feature_importances_</code>) and exposes its critical flaw: tree MDI artificially favors high-cardinality numerical noise over true continuous features.</li>
                                <li>Demonstrates Permutation Importance using <code>sklearn.inspection.permutation_importance</code> on holdout test data, showing how shuffling each feature reveals its true contribution to generalization performance.</li>
                                <li>Shows how individual feature values positively or negatively influence harvest yield predictions on specific farms.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script comparing MDI and permutation importance with runtime and bias trade-offs.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Agronomic Variable Reduction &amp; Sensor Deployment Economy Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in leveraging feature importance to reduce IoT sensor suite costs for smallholder farms:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"A commercial precision agriculture station costs \$2,500 because it measures 18 parameters. How can we use permutation importance and recursive feature elimination (RFE) to identify the minimal 4-sensor subset retaining &ge;95% of yield prediction accuracy?"</em></li>
                                <li><strong>Collaborative Strategy:</strong> Faculty and students formulate iterative pruning strategies using <code>RFECV</code> (Recursive Feature Elimination with Cross-Validation), plotting prediction score vs sensor count to find the economic inflection point.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Sensor Cost-Benefit Optimization Dossier justifying the reduction of sensor suites from 18 to 4 parameters.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Noise Inoculation &amp; Feature Attribution Audit Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are challenged to detect and prune spurious features in an agricultural dataset:</p>
                            <ul>
                                <li><strong>Setup:</strong> Teams receive an agricultural dataset with 6 genuine agronomic features and 4 synthetic decoy variables (random uniform noise, duplicate features, high-cardinality farmer ID).</li>
                                <li><strong>Task 1:</strong> Train an ensemble model and calculate both MDI and test-set Permutation Importance.</li>
                                <li><strong>Task 2:</strong> Implement <code>RFECV</code> to automatically eliminate decoy features; document changes in cross-validated $R^2$ as features are dropped.</li>
                                <li><strong>Peer Audit:</strong> Teams present their pruned feature subsets to a peer syndicate, defending why specific borderline features were retained or dropped.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A feature selection audit dossier with permutation importance bar charts and RFECV validation curve plots.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Compute &amp; Plot Permutation Importance for Soil Yield Model in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent feature importance pipeline:</p>
                            <ul>
                                <li>Create a farm DataFrame with 8 features (<code>[soil_nitrogen, soil_phosphorus, soil_potassium, soil_ec, soil_ph, organic_carbon, weed_density, random_tag]</code>) and target <code>crop_yield_quintal</code>.</li>
                                <li>Train a <code>RandomForestRegressor</code> and compute <code>permutation_importance(model, X_test, y_test, n_repeats=10, random_state=42)</code>.</li>
                                <li>Create a horizontal bar chart displaying mean feature importances with standard deviation error bars, sorted in descending order.</li>
                                <li>Print the top 3 most influential soil nutrients and state whether <code>random_tag</code> was correctly attributed negligible importance (&sim;0).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating a sorted permutation importance chart with error bars and written agronomic interpretations.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Importance Demo):</strong> In the Teacher's live demonstration comparing MDI against Permutation Importance, what occurred when a random noise column was added to the farm dataset?</p>
                    <ul>
                        <li>A) Tree-based MDI incorrectly assigned substantial importance to the noise feature, while Permutation Importance correctly scored its importance as zero</li>
                        <li>B) Both methods gave the noise column 100% importance</li>
                        <li>C) Permutation importance crashed the runtime</li>
                        <li>D) The random noise column improved crop yield by 20%</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>MDI over-valued the random noise column, while Permutation Importance correctly gave it near-zero importance.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Default tree feature importance (MDI) is biased toward continuous or high-cardinality noise features. Permutation importance tests real performance drops on validation data, accurately exposing useless noise.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Permutation importance tests on held-out data and rejects noise.</li>
                                <li><strong>Why C is incorrect:</strong> Permutation testing is standard shuffle-and-predict computation and runs reliably.</li>
                                <li><strong>Why D is incorrect:</strong> Adding synthetic noise columns has no biological effect on physical crop yield.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Agronomic Plausibility Studio):</strong> During the Domain Validation Studio, an AI model flagged 'farmer_favorite_color' as the second most important feature predicting harvest yield. What corrective action was taken?</p>
                    <ul>
                        <li>A) Removing the spurious feature immediately and enforcing agronomic domain plausibility screening before model finalization</li>
                        <li>B) Publishing the finding that color directly alters plant photosynthesis</li>
                        <li>C) Painting all tractors with the favorite color to boost harvest</li>
                        <li>D) Multiplying the color column by 100</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Removed the spurious feature and instituted agronomic domain plausibility screening.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Spurious statistical correlations occur regularly in small agricultural datasets. Machine learning models must always undergo domain plausibility validation with agronomists to prune confounding or nonsensical features.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Farmer favorite color has zero causal relationship with plant cellular biology.</li>
                                <li><strong>Why C is incorrect:</strong> Painting tractors based on spurious correlation is wasteful and scientifically absurd.</li>
                                <li><strong>Why D is incorrect:</strong> Scaling spurious features exacerbates model error.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task computing Permutation Importance, which Scikit-Learn function calculated the metric on the validation dataset?</p>
                    <ul>
                        <li>A) sklearn.inspection.permutation_importance(model, X_val, y_val, n_repeats=10, random_state=42)</li>
                        <li>B) model.feature_importances_()</li>
                        <li>C) sklearn.metrics.importance_score()</li>
                        <li>D) model.shuffle_weights()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>permutation_importance(model, X_val, y_val, n_repeats=10) computed empirical performance drops on validation data.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>permutation_importance</code> shuffles each feature column <code>n_repeats</code> times on validation data, measuring the drop in model scoring metric to deliver unbiased feature relevance rankings.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> <code>feature_importances_</code> is an attribute (not a function) and computes biased MDI on training data.</li>
                                <li><strong>Why C is incorrect:</strong> importance_score is not a valid Scikit-Learn metric function.</li>
                                <li><strong>Why D is incorrect:</strong> shuffle_weights is a non-existent method.</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Tree models provide built-in importance mechanics</li>
                    <li>Use this to simplify models</li>
                    <li>High importance = Key driver of the outcome</li>
                </ul>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.module2HandoutsPart3 = module2HandoutsPart3;
}
