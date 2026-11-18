// Module 2 Comprehensive Handouts - Part 3 (m2-t15 to m2-t20, m2-t22 to m2-t25)
// ML Core Concepts: Algorithms, Evaluation, and Tuning

const module2HandoutsPart3 = {
    'm2-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Supervised vs Unsupervised Learning</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which type of learning requires labeled data?</p>
                    <ul>
                        <li>A) Reinforcement Learning</li>
                        <li>B) Unsupervised Learning</li>
                        <li>C) Supervised Learning</li>
                        <li>D) Self-Supervised Learning</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Supervised learning relies on input-output pairs (labels).</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why do we need a test set?</p>
                    <ul>
                        <li>A) To train the model faster</li>
                        <li>B) To evaluate performance on unseen data</li>
                        <li>C) To fix bugs in code</li>
                        <li>D) It's required by Python syntax</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - A test set simulates real-world performance on new data the model hasn't seen during training.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the main benefit of Cross-Validation?</p>
                    <ul>
                        <li>A) Faster training</li>
                        <li>B) More reliable performance estimate</li>
                        <li>C) Smaller model size</li>
                        <li>D) Uses less memory</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - It reduces the chance of "lucky" or "unlucky" data splits affecting evaluation.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> If your model does great on training data but fails on real-world data, it is:</p>
                    <ul>
                        <li>A) Underfitting (High Bias)</li>
                        <li>B) Overfitting (High Variance)</li>
                        <li>C) Perfectly fit</li>
                        <li>D) Broken</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Overfitting (High Variance). It has learned the "noise" of the training data.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which parameter is NOT learned by the model during training?</p>
                    <ul>
                        <li>A) Weights (Slopes)</li>
                        <li>B) Bias (Intercept)</li>
                        <li>C) Hyperparameters (e.g., Learning Rate)</li>
                        <li>D) None of the above</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Hyperparameters are set BEFORE training.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which method is used to train a model in Scikit-Learn?</p>
                    <ul>
                        <li>A) train()</li>
                        <li>B) fit()</li>
                        <li>C) learn()</li>
                        <li>D) run()</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - .fit(X, y) is the standard training method.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Which metric is easiest to explain to a non-technical farmer?</p>
                    <ul>
                        <li>A) Mean Squared Error</li>
                        <li>B) Log Loss</li>
                        <li>C) Mean Absolute Error (MAE)</li>
                        <li>D) Huber Loss</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - MAE tells you the average error in actual units (e.g., "We are usually off by 50kg").</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What function squashes the output between 0 and 1 in Logistic Regression?</p>
                    <ul>
                        <li>A) ReLU</li>
                        <li>B) Sigmoid</li>
                        <li>C) Tanh</li>
                        <li>D) Linear</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - The Sigmoid function (S-curve) maps any number to a probability (0-1).</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What creates a new branch in a Decision Tree?</p>
                    <ul>
                        <li>A) A mathematical formula</li>
                        <li>B) splitting data based on a feature value</li>
                        <li>C) Random chance</li>
                        <li>D) User input</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - The tree splits data to minimize impurity (mix of classes) in the resulting groups.</p>
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
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why remove low-importance features?</p>
                    <ul>
                        <li>A) To make the model train faster</li>
                        <li>B) To reduce noise and overfitting</li>
                        <li>C) To simplify data collection</li>
                        <li>D) All of the above</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: D</strong> - All correspond to valid benefits of feature selection.</p>
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
