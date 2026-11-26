# Module 2 Templates: Part 3 (matching module2-handouts-part3.js)
# Topics: m2-t15, m2-t16, m2-t17, m2-t18, m2-t19, m2-t20, m2-t22, m2-t23, m2-t24, m2-t25

m2_templates_p3 = {
    "m2-t15": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A seed processing mill receives thousands of unlabelled heirloom bean seeds.</p>
                <p>The manager wants to group them by seed coat patterns and seed sizes automatically.</p>
                <p>Nobody knows the exact genetic variety names, so supervised training labels do not exist.</p>
                <p>Unsupervised clustering algorithms discover natural groupings from unlabeled physical measurements.</p>
                <p>When should agronomists choose supervised prediction versus unsupervised clustering?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Unlabeled Seeds:</strong> Length (mm), Width (mm), Weight (mg).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>K-Means Clustering:</strong> Measure geometric distances between seeds.</li>
                            <li><strong>Cluster Assignment:</strong> Group similar seeds into natural clusters.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Seed Batches:</strong> 3 distinct physical seed varieties identified.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.15: K-Means Unsupervised Seed Clustering
import numpy as np
from sklearn.cluster import KMeans

# Seed measurements: [length_mm, weight_mg]
seed_physical_data = np.array([
    [5.2, 45.0], [5.0, 42.0], [4.9, 44.0],  # Small seeds
    [8.1, 85.0], [8.4, 88.0], [8.2, 82.0],  # Medium seeds
    [12.0, 150.0], [11.8, 145.0], [12.3, 155.0] # Large seeds
])

# Group into 3 clusters without knowing variety names
seed_clusterer = KMeans(n_clusters=3, random_state=42, n_init=10)
cluster_labels = seed_clusterer.fit_predict(seed_physical_data)

print("Seed Physical Features (Length, Weight):\\n", seed_physical_data)
print("\\nDiscovered Seed Clusters:", cluster_labels)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>n_clusters=2</code>. How does the algorithm merge the seeds into two broader size categories?</p>
</div>
        """
    },

    "m2-t16": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student tests a yield prediction model using the exact same fields it was trained on.</p>
                <p>The model reports 99% accuracy on those familiar training fields in the laboratory.</p>
                <p>When deployed on a neighbor's unfamiliar farm, its predictions fail completely.</p>
                <p>Testing on familiar training data gives a dangerous false illusion of model accuracy.</p>
                <p>How does train-test splitting verify that models work on unseen real-world farms?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Field Matrix:</strong> 100 historical farm records with crop features and yields.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Train Split (80%):</strong> Fit the model using 80 farm records.</li>
                            <li><strong>Test Split (20%):</strong> Lock away 20 records for blind exam testing.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>True Generalization:</strong> Verified test accuracy on unseen farms.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.16: Train-Test Split on Agricultural Data
import numpy as np
from sklearn.model_selection import train_test_split

# Features: [Rainfall_mm, Fertilizer_kg]
soil_climate_features = np.array([
    [400.0, 100.0], [520.0, 140.0], [310.0, 80.0], [600.0, 150.0],
    [450.0, 110.0], [380.0, 95.0],  [500.0, 130.0], [340.0, 85.0]
])
# Actual crop yield (quintals)
harvest_yield_target = np.array([38.0, 46.0, 29.0, 50.0, 41.0, 36.0, 44.0, 31.0])

# Split 75% for training, 25% for blind testing
features_train, features_test, target_train, target_test = train_test_split(
    soil_climate_features, harvest_yield_target, test_size=0.25, random_state=42
)

print(f"Total Farm Records: {len(soil_climate_features)}")
print(f"Training Samples:   {len(features_train)} (Used to teach model)")
print(f"Testing Samples:    {len(features_test)} (Used for final blind exam)")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>test_size=0.50</code>. How many samples remain for training? Why is keeping enough training data critical?</p>
</div>
        """
    },

    "m2-t17": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Agricultural field trials are expensive and yield only twenty total data samples.</p>
                <p>Splitting small datasets into fixed train and test sets wastes scarce training data.</p>
                <p>A single unlucky split might put all flood-damaged fields into the test set.</p>
                <p>K-Fold cross-validation rotates training and test folds so every field gets evaluated.</p>
                <p>How does cross-validation ensure fair model evaluation on small farm trials?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Field Trial Data:</strong> Small sample dataset from research trials.</li>
                            <li><strong>K-Folds:</strong> 5 rotating folds.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Rotation:</strong> Train on 4 folds, test on 1 fold. Repeat 5 times.</li>
                            <li><strong>Average Score:</strong> Compute mean accuracy across all 5 iterations.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Cross-Validation Score:</strong> Unbiased evaluation without wasting trial data.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.17: K-Fold Cross-Validation for Crop Modeling
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score

fertilizer_features = np.array([[50.0], [60.0], [70.0], [80.0], [90.0], 
                                [100.0], [110.0], [120.0], [130.0], [140.0]])
paddy_yield_target = np.array([24.0, 26.5, 30.0, 33.5, 36.0, 
                               40.0, 42.5, 45.0, 47.0, 50.0])

reg_model = LinearRegression()
# 5-Fold cross-validation R-squared scores
fold_scores = cross_val_score(reg_model, fertilizer_features, paddy_yield_target, cv=5)

print("Individual Fold Accuracy Scores (R²):", np.round(fold_scores, 2))
print(f"Mean Cross-Validated Score: {np.mean(fold_scores):.2f}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>cv=3</code>. How many fold scores are printed now? What is the new average score?</p>
</div>
        """
    },

    "m2-t18": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A complex neural network memorizes every pebble and stray weed in five training photos.</p>
                <p>It achieves 100% training score because it memorized noise instead of general patterns.</p>
                <p>When tested on a new field, it mistakes normal crop leaves for weeds.</p>
                <p>This failure is called overfitting: memorizing training noise instead of true biological rules.</p>
                <p>How do we recognize and prevent overfitting in agricultural machine learning?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Training Accuracy:</strong> 99.5% score on familiar training images.</li>
                            <li><strong>Validation Accuracy:</strong> 54.0% score on unseen field images.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Gap Analysis:</strong> Large accuracy gap flags severe overfitting.</li>
                            <li><strong>Regularization:</strong> Prune decision tree depth to simplify rules.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Balanced Model:</strong> Consistent 88% accuracy across both train and test.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.18: Diagnosing Overfitting in Decision Trees
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# Synthetic leaf data: [greenness, spot_count]
leaf_measurements = np.array([[8, 0], [7, 1], [3, 8], [2, 10], [8, 1], [3, 9]])
leaf_health_label = np.array([0, 0, 1, 1, 0, 1]) # 0=Healthy, 1=Diseased

# Overfitted Tree (unlimited depth memorizes all samples)
deep_tree = DecisionTreeClassifier(max_depth=10, random_state=42)
deep_tree.fit(leaf_measurements, leaf_health_label)

# Balanced Pruned Tree (limited depth generalizes rules)
pruned_tree = DecisionTreeClassifier(max_depth=2, random_state=42)
pruned_tree.fit(leaf_measurements, leaf_health_label)

print(f"Deep Tree Depth:   {deep_tree.get_depth()} (Risks overfitting to noise)")
print(f"Pruned Tree Depth: {pruned_tree.get_depth()} (Generalizes clean farm rules)")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Set <code>max_depth=1</code> on <code>pruned_tree</code>. What is the single most important rule it uses to separate healthy from diseased leaves?</p>
</div>
        """
    },

    "m2-t19": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A precision sprayer uses an AI algorithm with dozens of adjustable tuning knobs.</p>
                <p>Tuning settings manually by trial and error wastes hours of field testing time.</p>
                <p>Incorrect settings make sprayers either miss pests or spray excessive pesticide.</p>
                <p>GridSearchCV automatically tests combinations of tuning settings to find the best model.</p>
                <p>How does automated hyperparameter tuning optimize agricultural machine learning models?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Candidate Knobs:</strong> max_depth = [2, 3, 5], min_samples_split = [2, 4].</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Grid Search:</strong> Train and score models for all parameter pairings.</li>
                            <li><strong>Selection:</strong> Rank combinations by cross-validated accuracy.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Best Configuration:</strong> max_depth=3 delivers optimal field accuracy.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.19: Automated Hyperparameter Tuning
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
import numpy as np

features_soil = np.array([[22.0, 6.5], [18.0, 5.2], [28.0, 6.8], [14.0, 4.8], [25.0, 7.1]])
irrigation_class = np.array([0, 1, 0, 1, 0])

# Define parameter grid to search
hyperparameter_grid = {'max_depth': [1, 2, 3]}

grid_searcher = GridSearchCV(DecisionTreeClassifier(random_state=42), 
                             hyperparameter_grid, cv=2)
grid_searcher.fit(features_soil, irrigation_class)

print("Best Parameters Found:", grid_searcher.best_params_)
print(f"Top Validation Score:  {grid_searcher.best_score_:.2f}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add <code>'min_samples_split': [2, 3]</code> to <code>hyperparameter_grid</code>. How many total combinations does GridSearchCV explore now?</p>
</div>
        """
    },

    "m2-t20": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Writing custom machine learning algorithms from scratch requires thousands of lines of math.</p>
                <p>Agronomists need simple, standard tools to fit and test models quickly.</p>
                <p>Scikit-Learn provides a clean, uniform interface for hundreds of algorithms.</p>
                <p>Every algorithm follows the exact same three steps: instantiate, .fit(), and .predict().</p>
                <p>How does Scikit-Learn standardize agricultural machine learning workflows?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>X Matrix:</strong> Feature columns (Soil Moisture, Temperature).</li>
                            <li><strong>y Vector:</strong> Target output (Irrigation Action: 0 or 1).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>.fit(X, y):</strong> Algorithm learns mathematical patterns from data.</li>
                            <li><strong>.predict(X_new):</strong> Model predicts outcomes on new sensor readings.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Action Prediction:</strong> Automated decisions for new field sensors.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.20: Scikit-Learn Standard API Workflow
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

# Training features: [Soil_Moisture_Pct, Leaf_Temp_C]
sensor_training_features = np.array([
    [18.0, 34.0], [16.5, 35.5], [28.0, 26.0], [30.0, 24.5]
])
# Target: 1 = Irrigate immediately, 0 = Do not irrigate
irrigation_labels = np.array([1, 1, 0, 0])

# Step 1: Instantiate model
knn_advisor = KNeighborsClassifier(n_neighbors=1)

# Step 2: Fit model
knn_advisor.fit(sensor_training_features, irrigation_labels)

# Step 3: Predict on new field reading
new_reading = np.array([[17.0, 33.5]])
action_decision = knn_advisor.predict(new_reading)[0]

print(f"New Field Reading: Moisture 17.0%, Temp 33.5°C")
print(f"Scikit-Learn Advice (1=Water, 0=Wait): {action_decision}")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>new_reading = np.array([[32.0, 23.0]])</code>. Does the model recommend irrigation for cool, wet soil?</p>
</div>
        """
    },

    "m2-t22": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Two researchers present competing yield prediction models to a sugarcane factory.</p>
                <p>Model 1 boasts an R² score of 0.85, while Model 2 claims a Mean Absolute Error of 2 tons.</p>
                <p>Without understanding evaluation metrics, managers cannot decide which model to trust.</p>
                <p>MAE, RMSE, and R² scores reveal average error in real farm kilograms and explainable variance.</p>
                <p>How do evaluation metrics measure the real-world accuracy of yield models?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Actual Harvest:</strong> [42, 50, 48, 55, 38] tons per acre.</li>
                            <li><strong>Predicted Yield:</strong> [40, 52, 45, 54, 41] tons per acre.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>MAE:</strong> Average absolute difference between actual and predicted.</li>
                            <li><strong>RMSE:</strong> Square root of mean squared error (penalizes large misses).</li>
                            <li><strong>R² Score:</strong> Percentage of yield variation explained by the model.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Metric Report:</strong> MAE = 2.2 tons, R² = 0.88. Model approved for use.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.22: Regression Metrics for Crop Yield
import numpy as np
from sklearn.metrics import mean_absolute_error, r2_score

actual_yields = np.array([42.0, 50.0, 48.0, 55.0, 38.0])
predicted_yields = np.array([40.0, 52.0, 45.0, 54.0, 41.0])

mae_error = mean_absolute_error(actual_yields, predicted_yields)
r2_variance = r2_score(actual_yields, predicted_yields)

print(f"Mean Absolute Error (MAE): {mae_error:.2f} tons/acre")
print(f"R-squared Score (R²):     {r2_variance:.2f} (Model explains {r2_variance*100:.0f}% of variation)")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Make <code>predicted_yields</code> match <code>actual_yields</code> exactly. What does the R² score and MAE become?</p>
</div>
        """
    },

    "m2-t23": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer wants to predict whether a tomato crop will suffer late blight disease (Yes or No).</p>
                <p>Linear regression produces numbers like 1.4 or -0.3, which do not make sense for probabilities.</p>
                <p>Classification requires a probability between 0% and 100% to assess disease risk.</p>
                <p>Logistic Regression squashes mathematical predictions into clean probabilities using an S-curve.</p>
                <p>How does Logistic Regression predict disease outbreaks from weather conditions?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Weather:</strong> Relative Humidity (%), Leaf Wetness Duration (hours).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Sigmoid Function:</strong> Squash linear combination into 0 to 1 curve.</li>
                            <li><strong>Probability Check:</strong> If risk > 0.50, flag disease outbreak warning.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Blight Probability:</strong> 82% risk. Trigger preventative bio-fungicide spray.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.23: Logistic Regression for Disease Outbreak Probability
import numpy as np
from sklearn.linear_model import LogisticRegression

# Features: [Humidity_Pct, Leaf_Wetness_Hours]
weather_features = np.array([
    [65.0, 2.0], [70.0, 4.0], [85.0, 8.0], [90.0, 10.0], [92.0, 12.0]
])
# Disease Outbreak (1 = Blight Occurred, 0 = Clean Canopy)
blight_outbreak = np.array([0, 0, 1, 1, 1])

disease_classifier = LogisticRegression()
disease_classifier.fit(weather_features, blight_outbreak)

# Predict risk for high-humidity day (88% humidity, 9 hours wetness)
incoming_weather = np.array([[88.0, 9.0]])
disease_prob = disease_classifier.predict_proba(incoming_weather)[0][1]

print(f"Predicted Disease Risk: {disease_prob * 100.0:.1f}%")
if disease_prob > 0.60:
    print("Action Ordered: Spray protective bio-fungicide within 24 hours!")
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>incoming_weather = np.array([[60.0, 1.0]])</code> (dry, sunny day). What does the blight outbreak probability drop to?</p>
</div>
        """
    },

    "m2-t24": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Complex neural networks make accurate farm predictions, but cannot explain why.</p>
                <p>Farmers refuse to follow advisory recommendations if the machine cannot explain its logic.</p>
                <p>Agronomists need explainable rules that mirror human biological reasoning.</p>
                <p>Decision Trees build transparent, question-and-answer flowcharts that anyone can audit.</p>
                <p>How do Decision Trees create transparent diagnostic rules for agricultural decisions?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Soil Parameters:</strong> pH level, Moisture %, Nitrogen level.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Rule 1:</strong> Is soil moisture < 20%?</li>
                            <li><strong>Rule 2:</strong> Is soil pH < 6.0?</li>
                            <li><strong>Split Purity:</strong> Use Gini impurity to select top splitting threshold.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Transparent Path:</strong> Explainable recommendation flowchart.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.24: Decision Tree Flowchart for Crop Selection
import numpy as np
from sklearn.tree import DecisionTreeClassifier, export_text

# Features: [Soil_pH, Annual_Rainfall_mm]
plot_conditions = np.array([
    [5.0, 450], [5.2, 500],  # Ragi (acidic, low rain)
    [6.5, 900], [6.8, 1100], # Paddy (neutral, high rain)
    [7.5, 600], [7.8, 650]   # Cotton (alkaline, medium rain)
])
crop_classes = ['Ragi', 'Ragi', 'Paddy', 'Paddy', 'Cotton', 'Cotton']

crop_tree = DecisionTreeClassifier(max_depth=2, random_state=42)
crop_tree.fit(plot_conditions, crop_classes)

tree_rules_text = export_text(crop_tree, feature_names=['Soil_pH', 'Rainfall_mm'])
print("--- Explainable Crop Selection Rules ---")
print(tree_rules_text)
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Use <code>crop_tree.predict([[6.6, 950]])</code> to predict which crop to grow on a neutral soil plot with 950 mm rainfall!</p>
</div>
        """
    },

    "m2-t25": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A precision agronomist collects twenty different soil and weather sensor variables.</p>
                <p>Maintaining twenty sensors on every acre costs thousands of dollars per season.</p>
                <p>The agronomist needs to know which three variables truly drive crop harvest yield.</p>
                <p>Feature Importance calculates the mathematical contribution of each measurement.</p>
                <p>How does feature importance analysis reduce sensor costs while keeping model accuracy?</p>
            </div>
        """,
        "ipo": """
            <div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Multi-Sensor Data:</strong> Rainfall, Nitrogen, Phosphorus, Potassium, Temp.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Tree Training:</strong> Train Random Forest on all twenty candidate features.</li>
                            <li><strong>Gini Importance:</strong> Measure error increase when each feature is removed.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Ranked Importance:</strong> Rainfall (45%), Nitrogen (35%), Others (<20%).</li>
                            <li><strong>Cost Reduction:</strong> Keep only top sensors, saving 60% hardware budget.</li>
                        </ul>
                    </div>
                </div>
            </div>
        """,
        "code": """
# Topic 2.25: Feature Importance Ranking for Crop Yield
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor

feature_names = ['Rainfall_mm', 'Nitrogen_kg', 'Soil_pH', 'Sunlight_Hours']
farm_inputs = np.array([
    [450, 100, 6.5, 8.0],
    [520, 140, 6.2, 7.5],
    [320, 70,  5.8, 9.0],
    [600, 150, 6.8, 6.5],
    [400, 90,  6.0, 8.5]
])
maize_yield = np.array([40.0, 48.0, 28.0, 52.0, 36.0])

rf_model = RandomForestRegressor(n_estimators=50, random_state=42)
rf_model.fit(farm_inputs, maize_yield)

# Rank features by importance percentage
importance_df = pd.DataFrame({
    'Feature': feature_names,
    'Importance_Pct': rf_model.feature_importances_ * 100.0
}).sort_values(by='Importance_Pct', ascending=False)

print("--- Agricultural Feature Importance Ranking ---")
print(importance_df.to_string(index=False))
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Which single feature has the highest percentage importance in predicting maize harvest?</p>
</div>
        """
    }
}

print("Loaded Module 2 Part 3 templates:", len(m2_templates_p3))
