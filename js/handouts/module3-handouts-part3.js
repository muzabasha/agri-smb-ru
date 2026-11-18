// Module 3 Comprehensive Handouts - Part 3
// Advanced Models, Robotics, Weather & Market Analysis

const module3HandoutsPart3 = {
    'm3-t10': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Image Classification with Pre-trained Models</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand Transfer Learning concepts</li>
                    <li>Use MobileNetV2 for crop disease classification</li>
                    <li>Fine-tune pre-trained models for agricultural data</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Transfer Learning = Hiring an Experienced Farm Manager</strong></p>
                    <p>Training a model from scratch is like hiring a novice and teaching them what a "leaf" is. Transfer Learning is like hiring an expert botanist who already knows plants generally; you just need to teach them your specific crop diseases!</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras import layers, models

# === LOAD PRE-TRAINED MODEL ===
print("=== Loading MobileNetV2 ===")
# Include_top=False removes the final classification layer (which was for 1000 generic objects)
base_model = MobileNetV2(input_shape=(224, 224, 3),
                         include_top=False,
                         weights='imagenet')

# Freeze the base model (don't retrain the "expert" knowledge yet)
base_model.trainable = False

# === ADD CUSTOM LAYERS ===
model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.2),
    layers.Dense(5, activation='softmax') # 5 crop disease classes
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

model.summary()
print("\\nModel ready to learn your specific crops!")
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
                            <h3>Live Transfer Learning &amp; Fine-Tuning Demonstration</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates transfer learning live in Google Colab on the projector:</p>
                            <ul>
                                <li>Loads <code>MobileNetV2</code> pre-trained on ImageNet, freezes base layers (<code>base_model.trainable = False</code>), and attaches a custom classification head.</li>
                                <li>Fine-tunes the top 20 convolutional layers with a low learning rate ($10^{-5}$) to adapt filters to leaf vein and lesion patterns.</li>
                                <li>Projects live training loss curves and displays a confusion matrix comparing frozen vs unfrozen accuracy.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook demonstrating frozen feature extraction vs fine-tuning convergence curves.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Mobile Farm Edge AI Architecture &amp; Model Compression Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on deploying vision models to budget farmer smartphones without cellular internet:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we compress a 15MB vision model to under 3MB using INT8 quantization (TFLite) so that inference runs in under 120ms on low-cost rural Android devices?"</em></li>
                                <li><strong>Collaborative Architecture:</strong> Faculty and students evaluate post-training quantization, pruning, and latency benchmarking across mobile hardware profiles.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Mobile Agri-Vision Deployment Specification with quantization benchmark targets.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Pre-trained Model Showdown Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams fine-tune 3 candidate architectures (MobileNetV2, ResNet50, EfficientNet-B0) on 500 crop disease photos:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Compare validation accuracy, training duration, and total parameter counts.</li>
                                <li><strong>Task 2:</strong> Benchmark inference latency per image on CPU runtimes to assess battery drain impact.</li>
                                <li><strong>Peer Audit:</strong> Teams present their model selection trade-off matrices to a peer syndicate for field deployment approval.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A model selection dossier with size-vs-accuracy trade-off scatter plots and mobile recommendations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Fine-Tune MobileNetV2 on Crop Foliage in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an end-to-end transfer learning script:</p>
                            <ul>
                                <li>Instantiate <code>MobileNetV2(include_top=False, weights='imagenet')</code> and freeze its base weights.</li>
                                <li>Append a <code>GlobalAveragePooling2D</code>, a <code>Dropout(0.2)</code>, and a 4-class <code>Dense</code> softmax classification layer.</li>
                                <li>Compile with Adam optimizer and train on sample leaf arrays; unfreeze the top 10 layers and run 2 fine-tuning epochs with learning rate $10^{-5}$.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating training loss curves and fine-tuned test accuracy outputs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t11': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 PlantVillage Dataset Overview</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Explore the structure of agricultural datasets</li>
                    <li>Load and preprocess image data</li>
                    <li>Understand data augmentation</li>
                </ul>
            </div>
            <div class="core-concepts">
                <h2>📖 About the Dataset</h2>
                <p>The PlantVillage dataset is the "Hello World" of Agri-AI. It contains roughly 54,000 images across 38 classes (e.g., Apple Scab, Tomato Blight).</p>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import tensorflow as tf
import matplotlib.pyplot as plt

# === DATA AUGMENTATION ===
# Increase dataset size by creating variations
data_augmentation = tf.keras.Sequential([
  tf.keras.layers.RandomFlip("horizontal_and_vertical"),
  tf.keras.layers.RandomRotation(0.2),
])

print("Agumentation pipeline ready. This helps the model generalize better!")

# === LOADING DATA ===
# Assuming 'dataset/' directory structure
# train_ds = tf.keras.utils.image_dataset_from_directory(
#   'dataset/',
#   validation_split=0.2,
#   subset="training",
#   seed=123,
#   image_size=(224, 224),
#   batch_size=32)

print("Note: In Colab, we will download the dataset directly using kaggle API.")
                </code></pre>
            </div>
            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Why do we use Data Augmentation?</p>
                    <ul>
                        <li>A) To fix broken images</li>
                        <li>B) To artifically increase dataset diversity and prevent overfitting</li>
                        <li>C) To reduce file size</li>
                        <li>D) To change the color of crops</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - It helps the model handle rotated or flipped versions of leaves it might see in real life.</p>
                    </details>
                </div>
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
                            <h3>Live Demonstration: Data Augmentation &amp; Imbalance Balancing</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates augmentation pipelines live in Google Colab on the projector:</p>
                            <ul>
                                <li>Loads PlantVillage tomato leaf samples and applies affine rotations, zooms, and random contrast adjustments to simulate harsh sunlight.</li>
                                <li>Demonstrates handling acute class imbalance (e.g., 2,000 Healthy vs 120 Early Blight samples) using weighted loss functions and synthetic oversampling.</li>
                                <li>Visualizes an 8-panel batch of augmented leaf variations rendered in real-time.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script displaying augmented leaf transformations in an interactive 8-panel grid.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Synthetic vs Real-World Field Pathology Domain Shift Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student cohorts through overcoming laboratory background bias in agricultural vision:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"PlantVillage images have clean uniform gray backgrounds, but field deployment photos contain soil, shadows, and farmer fingers. Why does lab accuracy drop 40% in field trials, and how do we engineer domain-invariant augmentations?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate background-replacement and CutMix augmentation strategies to force models to learn leaf lesions rather than background cues.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Vision Data Quality &amp; Field Robustness Protocol document.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Augmentation Recipe &amp; Generalization Stress-Test Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams test competing augmentation pipelines on a 5-class foliar dataset:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Compare standard geometric transforms against advanced techniques (MixUp, Random Erasing).</li>
                                <li><strong>Task 2:</strong> Evaluate trained models on a hidden stress-test set of outdoor farm photos with shadows and soil clutter.</li>
                                <li><strong>Peer Audit:</strong> Teams audit each other's test error matrices to determine which augmentation recipe maximized field generalization.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A data augmentation benchmark dossier with generalization scores on outdoor farm photos.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build an Agricultural Data Augmentation Pipeline in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent data augmentation script:</p>
                            <ul>
                                <li>Construct a <code>tf.keras.Sequential</code> augmentation pipeline with <code>RandomFlip</code>, <code>RandomRotation(0.2)</code>, <code>RandomZoom(0.2)</code>, and <code>RandomContrast(0.2)</code>.</li>
                                <li>Pass a single crop leaf image through the pipeline and generate 8 distinct augmented variations.</li>
                                <li>Plot the original image alongside the 8 augmented variants in a 3&times;3 matplotlib subplot grid with titles.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating the 3&times;3 augmentation visualization grid.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t12': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Pest and Weed Detection (YOLO)</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Difference between Classification and Detection</li>
                    <li>How YOLO (You Only Look Once) works</li>
                    <li>Annotating data for detection</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Object Detection = The Scout with a Map</strong></p>
                    <p>Classification says "This field has weeds." Object Detection says "There is a weed at coordinate (X,Y) and a pest at (A,B)." This allows robots to spray <em>only</em> the target!</p>
                </div>
            </div>
             <div class="code-section">
                <h2>💻 Python Implementation (Concept)</h2>
                <pre><code class="language-python">
# Pseudo-code for YOLO usage (requires Ultralytics library)
# from ultralytics import YOLO

# Load a pre-trained YOLO model
# model = YOLO("yolov8n.pt")  # n for nano (fastest)

# Predict on an image
# results = model("field_image.jpg")

# for result in results:
    # boxes = result.boxes  # Bounding boxes
    # for box in boxes:
        # print(f"Detected {result.names[int(box.cls)]} with confidence {box.conf:.2f}")

print("YOLO divides the image into a grid and predicts bounding boxes for each grid cell simultaneously.")
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
                            <h3>Live Demonstration: Real-Time YOLO Inference &amp; Bounding Box Decoding</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates real-time YOLO object detection live in Google Colab on the projector:</p>
                            <ul>
                                <li>Loads a pre-trained YOLOv8 model and runs inference on a high-resolution canopy photo containing whiteflies, bollworms, and broadleaf weeds.</li>
                                <li>Demystifies the bounding box coordinate array: $[x_c, y_c, w, h]$ normalized against image dimensions, confidence scores, and class IDs.</li>
                                <li>Demonstrates Non-Maximum Suppression (NMS) intersection-over-union (IoU) thresholding to eliminate redundant overlapping boxes.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook rendering bounding-box annotated weed detection images with latency prints.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Precision Robotic Sprayer Actuation Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on integrating YOLO bounding box outputs with robotic solenoid spray nozzles:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we translate pixel coordinates $(u, v)$ from a boom-mounted camera moving at 8 km/h into physical field coordinates $(X, Y)$ in millimeters to trigger micro-dosed herbicide pulses without overspray?"</em></li>
                                <li><strong>Collaborative Calibration:</strong> Faculty and students formulate homography transformation matrices and latency compensation offsets to sync vision detection with valve actuation.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Computer-Vision-to-Actuator Spatial Calibration Specification.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Weed &amp; Pest Bounding Box Benchmark Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams annotate and train a lightweight YOLO model on a 100-image pest and weed dataset:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Annotate bounding boxes for 3 weed species and 2 insect pests with strict IoU quality standards.</li>
                                <li><strong>Task 2:</strong> Train a nano-YOLO model and benchmark Mean Average Precision ($mAP_{50}$ and $mAP_{50-95}$) across classes.</li>
                                <li><strong>Peer Defense:</strong> Teams present precision-recall curves to a peer syndicate, defending their detection thresholds for robotic weeders.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An annotated YOLO agricultural dataset manifest and $mAP$ evaluation benchmark dossier.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Run YOLOv8 Pest Detection &amp; Box Filtering in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a standalone object detection script:</p>
                            <ul>
                                <li>Install Ultralytics and instantiate <code>YOLO('yolov8n.pt')</code>.</li>
                                <li>Run prediction on a sample farm photo and iterate through <code>result.boxes</code> to extract coordinates, confidence, and class names.</li>
                                <li>Filter detections with confidence $\ge 0.40$ and print total target counts and coordinates.</li>
                                <li>Save the annotated image using OpenCV and display it in a matplotlib figure.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating annotated pest/weed detections with bounding box summary counts.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t13': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Soil Health Classification</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Classify soil types (Loam, Clay, Sand)</li>
                    <li>Use SVM or Random Forest for classification</li>
                    <li>Feature selection for soil data</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pandas as pd

# Mock Data: Texture features
# Features: [Sand%, Silt%, Clay%, OrganicMatter%]
data = pd.DataFrame({
    'sand': [80, 10, 40, 30],
    'clay': [10, 80, 30, 30],
    'silt': [10, 10, 30, 40],
    'type': ['Sandy', 'Clay', 'Loam', 'Loam']
})

X = data[['sand', 'clay', 'silt']]
y = data['type']

# Train Model
clf = RandomForestClassifier(n_estimators=10)
clf.fit(X, y)

# Predict
new_soil = [[45, 25, 30]] # 45% Sand, 25% Clay, 30% Silt
print(f"Predicted Soil Type: {clf.predict(new_soil)[0]}")
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
                            <h3>Live Demonstration: Soil Textural Triangle Classification &amp; Random Forest</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates soil texture classification live in Google Colab on the projector:</p>
                            <ul>
                                <li>Projects the USDA Soil Texture Triangle (Sand, Silt, Clay percentages summing to 100%).</li>
                                <li>Generates 100 soil physical records, trains a <code>RandomForestClassifier</code> to assign USDA texture classes (Loam, Clay Loam, Sandy Loam).</li>
                                <li>Extracts tree feature importances and plots a ternary decision boundary map illustrating textural class regions.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script plotting ternary decision boundaries overlaid on USDA soil texture zones.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Multi-Parameter Soil Health Index (SHI) Framework Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts in combining physical, chemical, and biological soil indicators:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we integrate soil physical traits (bulk density, texture), chemical traits (pH, CEC, available NPK), and biological traits (microbial biomass carbon) into an unified Soil Health Index (SHI) score from 0 to 100?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate non-linear scoring curves (more-is-better, less-is-better, optimum-range) and establish weighted index rubrics.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Integrated Soil Health Index Scoring Protocol with weighted indicator matrices.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Soil Health Tier Classification &amp; Land Capability Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive 150 soil profile records from diverse agricultural zones:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Train a multi-class Random Forest or SVM to predict Land Capability Classification (LCC Classes I through IV).</li>
                                <li><strong>Task 2:</strong> Evaluate model confusion matrices and calculate the economic and ecological risk of misclassifying marginal lands as prime arable land.</li>
                                <li><strong>Peer Defense:</strong> Teams defend their soil health tier boundaries before a peer audit syndicate.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A land capability classification dossier with confusion matrices and soil conservation recommendations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a Soil Texture Classifier in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write an independent soil classification pipeline:</p>
                            <ul>
                                <li>Create a DataFrame of 60 soil samples with sand, silt, and clay percentages.</li>
                                <li>Train a <code>RandomForestClassifier(n_estimators=50, random_state=42)</code> with 5-fold cross-validation.</li>
                                <li>Test on 3 novel soil samples and print the predicted soil class along with class probability distributions.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook predicting USDA soil types with probability estimates.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t14': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Soil Property Prediction</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Goal</h2>
                <p>Predicting continuous values like pH and NPK levels using regression models. This is crucial for Determining variable rate fertilizer application.</p>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.linear_model import LinearRegression
import numpy as np

# Data: Electrical Conductivity (EC) vs Nitrogen
X_ec = np.array([[0.5], [1.0], [1.5], [2.0], [2.5]])
y_nitrogen = np.array([20, 45, 60, 85, 95])

model = LinearRegression()
model.fit(X_ec, y_nitrogen)

print(f"Prediction for EC=1.8: {model.predict([[1.8]])[0]:.1f} kg/ha N")
print("We use easy-to-measure proxies (like EC) to predict hard-to-measure nutrients!")
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
                            <h3>Live Demonstration: Vis-NIR Proximal Spectroscopy &amp; Random Forest Regression</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates proxy soil property regression live in Google Colab on the projector:</p>
                            <ul>
                                <li>Predicts soil organic carbon (SOC) and available nitrogen from rapid proximal sensor features (Vis-NIR reflectance bands + electrical conductivity $EC_a$).</li>
                                <li>Trains a <code>RandomForestRegressor</code>, plots the predicted vs laboratory measured regression line ($R^2 &gt; 0.85$), and visualizes spectral feature importance wavelengths.</li>
                                <li>Demonstrates error tolerance bands for field-scale variable-rate fertigation mapping.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook predicting continuous soil nutrient concentrations with residual analysis.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Proximal Sensor Fusion &amp; Calibration Transfer Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on sensor fusion and calibration transfer across variable field conditions:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"Field soil moisture interferes heavily with spectral reflectance curves, attenuating absorption bands. How do we calibrate regression models to decouple soil moisture effects from true organic carbon signals?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate External Parameter Orthogonalization (EPO) and spectral derivative transforms to achieve moisture-invariant nutrient predictions.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Proximal Sensor Fusion Specification Document for on-the-go tractor soil testing.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Continuous Soil Fertility Regression Benchmark Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive 100 spectral soil records and evaluate candidate regression models:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Compare Support Vector Regressor (SVR), Ridge Regression, and Random Forest for predicting available nitrogen (kg/ha).</li>
                                <li><strong>Task 2:</strong> Evaluate models using cross-validated RMSE, Mean Absolute Percentage Error (MAPE), and residual normality checks.</li>
                                <li><strong>Peer Defense:</strong> Teams present their regression performance tables to a peer syndicate for field deployment sign-off.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A comparative regression benchmark dossier with residual normality checks and performance rankings.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Predict Soil Nitrogen from EC and Moisture in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent regression pipeline:</p>
                            <ul>
                                <li>Create a DataFrame of 40 field entries with features <code>electrical_conductivity</code> and <code>soil_moisture</code> and target <code>nitrogen_kg_ha</code>.</li>
                                <li>Train a <code>LinearRegression</code> and a <code>RandomForestRegressor</code>; compare $R^2$ scores.</li>
                                <li>Predict nitrogen content for a new plot scenario: <code>[EC = 1.6 dS/m, Moisture = 24%]</code>.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating regression parameters and novel plot nutrient predictions.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t15': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Nutrient Requirement Calculation</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Automate NPK calculations</li>
                    <li>Balance soil supply vs crop demand</li>
                    <li>Generate fertilizer recommendations</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
def recommend_fertilizer(current_n, target_yield_tons):
    # Rule of thumb: Wheat needs 25kg N per ton of grain
    n_demand = target_yield_tons * 25
    
    # Soil efficiency (only 40% of soil N is available)
    available_n = current_n * 0.40
    
    deficit = n_demand - available_n
    
    if deficit <= 0:
        return "No N fertilizer needed.", 0
    else:
        # Urea is 46% Nitrogen
        urea_needed = deficit / 0.46
        return f"Apply {urea_needed:.1f} kg/ha of Urea", urea_needed

print(recommend_fertilizer(current_n=50, target_yield_tons=4))
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
                            <h3>Live Demonstration: Soil Test Crop Response (STCR) Equations</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates scientific Soil Test Crop Response equations live in Google Colab on the projector:</p>
                            <ul>
                                <li>Formulates targeted yield equations: $F_N = a \cdot T - b \cdot S_N$, where $T$ is target yield (tons/ha), $S_N$ is soil available nitrogen (kg/ha), and $a, b$ are crop coefficients.</li>
                                <li>Converts elemental nutrient deficits into commercial fertilizer quantities (Urea: 46% N, DAP: 18% N + 46% P, MOP: 60% K).</li>
                                <li>Interprets soil nutrient buffering capacity and nutrient use efficiencies live on screen.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook computing crop-specific fertilizer recommendations based on STCR equations.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Smallholder Fertilizer Recommendation Engine Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on building automated advisory engines incorporating real-world farming constraints:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we incorporate farmer purchasing budget limits, farmyard manure (FYM) organic substitution credits, and soil pH correction factors into an automated prescription engine?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students construct credit-offset formulas for organic inputs and split-dose scheduling rules aligned with crop growth stages.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Smallholder Nutrient Recommendation Rule Engine blueprint.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Crop Target Yield Prescription Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive soil health test reports for 10 smallholder plots:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Calculate customized NPK prescriptions for 3 target yield scenarios across Rice, Maize, and Groundnut.</li>
                                <li><strong>Task 2:</strong> Evaluate risks of soil nutrient mining (under-application) vs environmental eutrophication (over-application).</li>
                                <li><strong>Peer Defense:</strong> Teams cross-examine each other's split-application timelines and fertilizer cost estimates.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A personalized farm fertilizer prescription dossier with economic cost comparisons.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Implement an STCR Fertilizer Calculator in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent fertilizer calculator function:</p>
                            <ul>
                                <li>Write a Python function <code>calculate_stcr_fertilizer(crop, target_yield, soil_n, soil_p, soil_k)</code> returning required kilograms of Urea, DAP, and MOP.</li>
                                <li>Incorporate fertilizer application efficiencies (e.g., 40% for N, 25% for P, 60% for K).</li>
                                <li>Test the function across 3 contrasting soil scenarios and print a formatted farmer advisory table.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with tested STCR fertilizer calculation functions and output tables.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t16': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Fertilizer Optimization Models</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Optimization = The Diet Plan</strong></p>
                    <p>You want to maximize yield (health) while minimizing cost (calories/money). Linear Programming finds the perfect mix of Urea, DAP, and Potash to hit nutrient targets cheaply.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from scipy.optimize import linprog

# Goal: Minimize Cost
# Fertilizer Costs ($/kg): Urea=0.5, DAP=0.8
c = [0.5, 0.8]

# Constraints (Must provide at least 100kg N, 50kg P)
# Urea: 46% N, 0% P
# DAP: 18% N, 46% P
# Inequality: -A_ub * x <= -b_ub (Scipy Form)
A = [[-0.46, -0.18],  # Nitrogen
     [-0.00, -0.46]]  # Phosphorus
b = [-100, -50]       # Requirements

bounds = [(0, None), (0, None)] # Cannot apply negative fertilizer

res = linprog(c, A_ub=A, b_ub=b, bounds=bounds, method='highs')

print(f"Optimal Urea: {res.x[0]:.1f} kg")
print(f"Optimal DAP: {res.x[1]:.1f} kg")
print(f"Total Cost: \${res.fun: .2f}")
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
                            <h3>Live Demonstration: Linear Programming for Cost-Minimized Fertilizer Blending</h3>
                            <p><strong>Educator Action:</strong> The instructor formulates the fertilizer diet optimization problem live using <code>scipy.optimize.linprog</code>:</p>
                            <ul>
                                <li>Formulates the cost objective function $C = c_{\text{urea}} x_1 + c_{\text{dap}} x_2 + c_{\text{mop}} x_3$ subject to multi-nutrient constraints ($N \ge 120, P \ge 60, K \ge 40$).</li>
                                <li>Explains shadow prices and binding constraints live on screen, revealing which nutrient target drives the largest marginal cost.</li>
                                <li>Demonstrates handling upper bounds to avoid toxic fertilizer salt build-up.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab optimization script generating optimal blend proportions and total minimum expenditure.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Multi-Nutrient Commercial Blend Optimization Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student cohorts through incorporating commercial market constraints into linear programs:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"Commercial fertilizer bags are sold in fixed 50kg units with localized retail shortages. How do we incorporate Mixed-Integer Linear Programming (MILP) to find integer bag combinations while satisfying micro-nutrient needs (Zinc, Boron)?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate MILP models using <code>scipy.optimize.milp</code> with integer constraints on 50kg bag quantities.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Economic Multi-Nutrient Integer Optimization Framework document.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Farmer Cooperative Fertilizer Budget Optimization Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams optimize fertilizer procurement for a 50-farmer cooperative with a fixed budget constraint:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Formulate linear programming bounds for 5 distinct crop nutrient requirements.</li>
                                <li><strong>Task 2:</strong> Compare traditional blanket application costs vs LP-optimized custom blends, calculating total financial savings.</li>
                                <li><strong>Peer Defense:</strong> Teams present their procurement schedules to a peer syndicate for validation against real regional fertilizer prices.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A cooperative fertilizer cost-optimization dossier showing financial savings and nutrient compliance.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Solve Fertilizer Cost Minimization with Scipy Linprog in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, set up and solve a linear program using <code>scipy.optimize.linprog(method='highs')</code>:</p>
                            <ul>
                                <li>Define 3 fertilizer options: Urea (\$0.40/kg), DAP (\$0.75/kg), and MOP (\$0.55/kg).</li>
                                <li>Set constraints to supply at least 100 kg N, 50 kg P, and 60 kg K per hectare.</li>
                                <li>Run optimization and print the optimal kilograms of each fertilizer and the minimum total cost per hectare.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook solving the constrained optimization problem with printed solution status.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'm3-t17': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Precision Irrigation Systems</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand soil moisture sensors</li>
                    <li>Automate irrigation scheduling based on data</li>
                    <li>Calculate water use efficiency</li>
                </ul>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Smart Irrigation = Drinking When Thirsty</strong></p>
                    <p>Old irrigation is like drinking 8 glasses of water at 8am regardless. Smart irrigation drinks sips exactly when the body (plant) needs it, saving water and preventing root rot.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Logic for Smart Irrigation Controller

def check_irrigation_need(soil_moisture_percent, crop_stage):
    """
    Decide if we need to water.
    Thresholds change based on crop stage.
    """
    thresholds = {
        'seeding': 60,    # Needs moist soil
        'vegetative': 50, # Moderate
        'flowering': 70,  # Critical Water Period
        'ripening': 30    # Needs dry soil
    }
    
    target = thresholds.get(crop_stage, 50)
    
    if soil_moisture_percent < target:
        return True, f"Moisture {soil_moisture_percent}% < Target {target}%. Pump ON."
    else:
        return False, f"Moisture {soil_moisture_percent}% >= Target {target}%. Pump OFF."

# Simulate
print(check_irrigation_need(45, 'flowering'))
print(check_irrigation_need(45, 'ripening'))
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
                            <h3>Live Demonstration: IoT Soil Moisture Thresholding &amp; Valve Actuation</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates closed-loop precision irrigation control in Google Colab on the projector:</p>
                            <ul>
                                <li>Ingests volumetric water content (VWC %) sensor streams across 4 root zone depths in real-time.</li>
                                <li>Implements dynamic stage-dependent threshold rules (Field Capacity vs Management Allowed Depletion - MAD).</li>
                                <li>Simulates automated pump relay triggers with safety interlocks (preventing pumping during power grid outages or forecasted rainfall &gt; 15 mm).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab simulation of IoT soil sensor feedback loops and automated pump actuation logs.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Closed-Loop Solar Precision Drip Irrigation Architecture Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on designing solar-powered IoT drip irrigation control systems:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we balance solar battery charging cycles, solar pump flow rates ($m^3/\text{hr}$), and soil infiltration capacity to prevent runoff and optimize night-time vs day-time transpiration efficiency?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate solar-irrigation co-scheduling logic incorporating solar radiation curves and crop transpiration windows.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Solar-Powered Smart Irrigation Hardware-Software Architecture Blueprint.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Variable-Rate Precision Irrigation Scheduling Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive 30 days of hourly soil moisture and weather forecast data for a 20-hectare orchard:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Design a dynamic scheduling algorithm and measure water savings compared to traditional flood irrigation.</li>
                                <li><strong>Task 2:</strong> Test algorithm response during simulated sensor communication dropout and rainfall forecast false alarms.</li>
                                <li><strong>Peer Audit:</strong> Teams evaluate each other's valve duty cycles and water productivity metrics ($kg/\text{m}^3$).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A precision irrigation scheduling dossier with simulated water consumption savings and pump duty cycle logs.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a Crop-Stage Aware Irrigation Controller in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write an independent irrigation controller class:</p>
                            <ul>
                                <li>Write a Python class <code>SmartIrrigationController</code> with methods <code>update_sensor(vwc)</code> and <code>evaluate_trigger(crop_stage, rain_prob)</code>.</li>
                                <li>Set moisture trigger thresholds: Seeding (60%), Vegetative (50%), Flowering (70%), Ripening (30%).</li>
                                <li>Simulate across 5 days of varying weather and print pump state decisions with agronomic rationales.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook with tested controller logic and simulated irrigation runtime logs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t18': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Water Requirement Prediction (ET)</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="core-concepts">
                <h2>📖 Evapotranspiration (ET)</h2>
                <p><strong>ETc = ETo × Kc</strong></p>
                <ul>
                    <li><strong>ETo:</strong> Reference ET (Weather dependent: Sun, Wind, Temp)</li>
                    <li><strong>Kc:</strong> Crop Coefficient (Crop dependent: Corn vs Cactus)</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
def calculate_water_need_mm(eto_mm, kc):
    return eto_mm * kc

# Example: Hot day (ETo=6mm), Corn in mid-season (Kc=1.2)
water_needed = calculate_water_need_mm(6, 1.2)
print(f"Water needed today: {water_needed} mm")

# Convert mm to Liters per Hectare (1 mm = 10,000 L/ha)
liters_needed = water_needed * 10000
print(f"Total volume: {liters_needed:,.0f} Liters/ha")
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
                            <h3>Live Demonstration: FAO-56 Penman-Monteith ET0 &amp; Crop Coefficients</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates evapotranspiration modeling live in Google Colab on the projector:</p>
                            <ul>
                                <li>Implements the FAO-56 Penman-Monteith equation calculating reference evapotranspiration ($ET_0$) from solar radiation, wind speed, vapor pressure deficit, and air temperature.</li>
                                <li>Applies dynamic crop coefficients $K_c$ across growth stages for maize (Initial 0.3, Mid-season 1.2, Late 0.6) to compute $ET_c = ET_0 \times K_c$.</li>
                                <li>Converts crop water depth in mm/day into field volumetric totals in cubic meters and liters per hectare.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook calculating FAO-56 Penman-Monteith daily irrigation requirements.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Basin-Scale Hydrological Water Budgeting Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on basin-scale water accounting and deficit irrigation:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In water-scarce catchments, how do we integrate effective precipitation ($P_{\text{eff}}$), soil capillary rise, and deep percolation into a net irrigation requirement ($IN = ET_c - P_{\text{eff}}$) to prevent aquifer depletion?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate daily water balance equations and regulated deficit irrigation (RDI) strategies to save water during drought-tolerant vegetative phases.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Agro-Hydrological Water Budget Protocol document with deficit irrigation thresholds.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Seasonal Irrigation Volume Forecasting Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive 90 days of weather forecasts for a 50-hectare command area:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Compute dynamic daily $ET_c$ for two contrasting crops (Rice vs Sorghum).</li>
                                <li><strong>Task 2:</strong> Calculate the cumulative seasonal volumetric water demand ($m^3$) and design a 10-day rotational canal water release schedule.</li>
                                <li><strong>Peer Audit:</strong> Teams audit each other's schedules to ensure no crop experiences water stress beyond the management allowed depletion (MAD) limit.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A seasonal irrigation demand dossier with daily water draw schedules and canal release plans.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Calculate Daily Crop Evapotranspiration in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent evapotranspiration calculator:</p>
                            <ul>
                                <li>Write a Python function <code>daily_crop_water_need(temp_c, solar_rad, wind_speed, humidity, kc)</code>.</li>
                                <li>Compute $ET_0$ and $ET_c$ in mm/day; convert to total liters per hectare ($1\text{ mm} = 10,000\text{ L/ha}$).</li>
                                <li>Calculate total irrigation required for a 5-hectare tomato farm at flowering ($K_c = 1.15$) on a sunny summer day ($ET_0 = 6.2\text{ mm}$).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating daily water demand in mm and Liters/ha.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t20': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 ARIMA Models for Weather Prediction</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Forecasting = Looking at the horizon</strong></p>
                    <p>Predicting prices or storms allows the farmer to harvest early or hold stock. It converts uncertainty into calculated risk.</p>
                </div>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from statsmodels.tsa.arima.model import ARIMA
import pandas as pd
import numpy as np

# Mock Temperature Data (Time Series)
data = [20, 21, 22, 23, 22, 21, 20, 19, 18, 19, 21, 23]

# Fit ARIMA(1,1,1) Model
model = ARIMA(data, order=(1, 1, 1))
model_fit = model.fit()

# Forecast next 3 days
forecast = model_fit.forecast(steps=3)
print(f"Next 3 days temp forecast: {forecast}")
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
                            <h3>Live Demonstration: ARIMA Order Selection &amp; Prediction Intervals</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates seasonal time series forecasting live in Google Colab on the projector:</p>
                            <ul>
                                <li>Loads daily minimum temperature records from an agricultural research station and plots ACF and PACF correlograms.</li>
                                <li>Walks through selecting AR order $p$, differencing order $d$, and MA order $q$ to minimize AIC and BIC criteria.</li>
                                <li>Fits an <code>ARIMA(order=(2,1,1))</code> model, generates 7-day future predictions with 95% confidence bands, and runs Ljung-Box white noise tests on residuals.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook displaying ACF/PACF plots, ARIMA forecasts, and confidence bands.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Early Frost &amp; Heatwave Warning Time Series Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on setting up operational forecast alerts for high-value orchard crops:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"How do we configure a 48-hour early warning system using ARIMA prediction lower confidence bounds ($T_{\text{pred}} - 1.96 \times \text{SE} &lt; 0^\circ\text{C}$) to alert orchardists to turn on frost protection sprinklers with zero missed frost events?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate threshold decision rules balancing False Alarm costs against catastrophic crop freezing losses.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An Extreme Weather Early Warning Protocol based on ARIMA prediction intervals.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Step Weather Forecast Benchmark Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams forecast 14-day rainfall and temperature on real weather station records:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Train and compare ARIMA, Exponential Smoothing (Holt-Winters), and seasonal naive baselines.</li>
                                <li><strong>Task 2:</strong> Evaluate test set Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) across 1-day, 3-day, and 7-day forecast horizons.</li>
                                <li><strong>Peer Audit:</strong> Teams present their forecast fan charts to a peer syndicate for validation against real atmospheric ground truths.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A multi-model forecasting dossier with forecast error curves and operational lead-time recommendations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Fit and Forecast Weather Series with ARIMA in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent time series forecasting script:</p>
                            <ul>
                                <li>Create a 60-day temperature series, verify stationarity with differencing, and fit <code>ARIMA(data, order=(1,1,1))</code>.</li>
                                <li>Generate a 5-day out-of-sample forecast and extract standard error confidence bounds.</li>
                                <li>Plot the historical data, forecast points, and shaded 95% confidence interval in a single formatted chart.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating ARIMA forecasts with plotted confidence intervals.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t21': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Weather Pattern Recognition</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Identify seasonal patterns vs anomalies</li>
                    <li>Detect drought onset signals</li>
                    <li>Use clustering (K-Means) for climate zones</li>
                </ul>
            </div>
            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
from sklearn.cluster import KMeans
import numpy as np

# Data: [AnnualRainfall, AvgTemperature]
regions = np.array([
    [1200, 25], [1100, 24], # Wet & Warm (Tropical)
    [300, 35], [250, 34],   # Dry & Hot (Arid)
    [800, 15], [750, 14]    # Moderate & Cool (Temperate)
])

kmeans = KMeans(n_clusters=3, random_state=0).fit(regions)

print("Cluster Centers (Climate Types):")
# 0: Temperate, 1: Arid, 2: Tropical (Order may vary)
print(kmeans.cluster_centers_)
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
                            <h3>Live Demonstration: Agro-Climatic K-Means Clustering &amp; PCA Projection</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates multivariate agro-climatic pattern clustering live on the projector:</p>
                            <ul>
                                <li>Loads 20 years of annual precipitation, monsoon onset dates, and summer heat indices across 50 regional weather stations.</li>
                                <li>Applies Principal Component Analysis (PCA) to reduce dimensionality to 2 principal components while retaining 92% of variance.</li>
                                <li>Fits <code>KMeans(n_clusters=4)</code> to delineate agro-climatic zones and plots radar charts of cluster centroids.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script projecting 2D PCA agro-climatic clusters with centroid radar profiles.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Climate Shift Zone Migration Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student cohorts through detecting spatial migration of agro-climatic zones over 3 decades:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In semi-arid peninsular India, historical crop suitability zones are shifting due to erratic monsoons. How do we compare 1990-2005 vs 2006-2025 cluster boundaries to quantify arid zone expansion?"</em></li>
                                <li><strong>Collaborative Analysis:</strong> Faculty and students formulate cluster migration distance vectors and document shifting cropping suitability boundaries.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Climate Zone Spatial Shift Assessment Report with boundary migration maps.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Drought Vulnerability Clustering Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams analyze meteorological data across 30 agricultural districts:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Cluster districts into Severe, Moderate, and Low drought vulnerability based on consecutive dry spell counts and soil moisture deficits.</li>
                                <li><strong>Task 2:</strong> Evaluate cluster silhouette scores across $K = 2$ to $K = 6$ to identify the most natural grouping.</li>
                                <li><strong>Peer Defense:</strong> Teams defend their drought vulnerability boundaries before a peer audit syndicate.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A regional drought vulnerability clustering dossier with risk ranking maps.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Cluster Weather Stations by Climate Type in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent climate clustering pipeline:</p>
                            <ul>
                                <li>Create a DataFrame of 30 weather stations with annual rainfall, mean temperature, and humidity.</li>
                                <li>Standardize features using <code>StandardScaler</code> and fit <code>KMeans(n_clusters=3, random_state=42)</code>.</li>
                                <li>Generate a scatter plot of Rainfall vs Temperature with points colored by cluster label and annotate cluster centroids.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating the standardized climate cluster plot.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t22': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Crop Price Forecasting</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Goal</h2>
                <p>Help farmers sell at the right time by predicting market trends using historical price data.</p>
            </div>
             <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Simple Moving Average (SMA) Strategy
prices = pd.Series([20, 22, 24, 25, 24, 22, 20, 18, 19, 21]) # Daily prices

w = 3 # 3-day window
sma = prices.rolling(w).mean()

print(f"Price Today: {prices.iloc[-1]}")
print(f"3-Day SMA: {sma.iloc[-1]:.2f}")

if prices.iloc[-1] < sma.iloc[-1]:
    print("Trend is DOWN -> Consider selling now.")
else:
    print("Trend is UP -> Hold for better price.")
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
                            <h3>Live Demonstration: APMC Mandi Price Trends, Moving Averages &amp; Bollinger Bands</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates agricultural commodity price forecasting live on the projector:</p>
                            <ul>
                                <li>Loads 3 years of daily wholesale mandi prices for onion and tomato from government Agmarknet telemetry.</li>
                                <li>Computes 7-day and 21-day moving averages alongside Bollinger Bands to identify seasonal harvest supply gluts and price spike anomalies.</li>
                                <li>Extracts momentum indicators to generate automated sell-now vs hold-in-cold-storage recommendations.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab notebook plotting mandi price time series with dynamic trend bands and trade signals.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Market Inelasticity &amp; Cobweb Phenomenon Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student cohorts through the agricultural Cobweb Theorem:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"When onion prices spike to \$1.50/kg, farmers collectively over-plant next season, causing a market glut where prices collapse to \$0.10/kg. How do we build price-forecast advisory dashboards that mitigate this cyclical boom-and-bust cycle?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate supply-elasticity models incorporating acreage intentions to forecast post-harvest market crashes.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Market Volatility &amp; Farmer Advisory Specification document.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Mandi Price Forecasting &amp; Storage Strategy Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams build predictive models for wholesale tomato prices:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Train a Random Forest or SARIMA model with lag prices, fuel transportation costs, and festival calendars.</li>
                                <li><strong>Task 2:</strong> Simulate cooperative revenue comparing immediate post-harvest selling vs model-guided 3-week cold storage retention.</li>
                                <li><strong>Peer Defense:</strong> Teams defend their storage economics, deducting electricity and shrinkage costs to prove net profit gain.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A mandi price forecasting dossier with simulated cold-storage revenue gain calculations.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build a Moving Average Price Predictor in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent commodity price analysis script:</p>
                            <ul>
                                <li>Create a 60-day daily price series, compute 7-day and 21-day rolling moving averages.</li>
                                <li>Generate a buy/sell indicator based on moving average crossovers (Golden Cross / Death Cross).</li>
                                <li>Plot the daily prices, MA curves, and buy/sell signals on a formatted matplotlib figure.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating the crossover chart and automated trade recommendations.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t23': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Demand Prediction Models</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand seasonality in food demand</li>
                    <li>Predict peak demand periods (festivals, seasons)</li>
                    <li>Optimize supply chain logistics</li>
                </ul>
            </div>
             <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Demand Prediction = Planting for the Future Plate</strong></p>
                    <p>Farmers plant today for a market 3 months away. Knowing that tomato demand peaks in summer helps them time their harvest perfectly.</p>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

# Simulate weekly agricultural demand (tons) across 52 weeks
np.random.seed(42)
weeks = np.arange(1, 53)
# Seasonal sine wave + festival spikes around weeks 40-44 (Diwali/Dasara)
base_demand = 120 + 30 * np.sin(2 * np.pi * weeks / 52)
festivals = np.array([1 if w in [41, 42, 43] else 0 for w in weeks])
demand = base_demand + festivals * 50 + np.random.normal(0, 5, 52)

df = pd.DataFrame({'week': weeks, 'is_festival': festivals, 'demand_tons': demand})
# Lag feature: previous week's demand
df['lag_demand'] = df['demand_tons'].shift(1).bfill()

X = df[['week', 'is_festival', 'lag_demand']]
y = df['demand_tons']

model = RandomForestRegressor(n_estimators=50, random_state=42).fit(X, y)
pred = model.predict(X)
print(f"Mean Absolute Demand Error: {mean_absolute_error(y, pred):.2f} tons")

# Predict for upcoming festival week
upcoming = pd.DataFrame({'week': [42], 'is_festival': [1], 'lag_demand': [145]})
print(f"Predicted Festival Week Demand: {model.predict(upcoming)[0]:.1f} tons")
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
                            <h3>Live Demonstration: Food Demand Forecasting with Calendar Regressors</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates demand forecasting live in Google Colab on the projector:</p>
                            <ul>
                                <li>Loads 2 years of weekly vegetable retail demand logs across wholesale distribution hubs.</li>
                                <li>Engineers exogenous festival calendar features and rolling historical consumption averages.</li>
                                <li>Trains a Random Forest regressor to anticipate demand surges 4 weeks in advance, plotting demand peaks and safety inventory buffers.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script predicting seasonal demand spikes with confidence interval fan charts.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Perishable Agri-Food Supply Chain Waste Reduction Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts on aligning cold-chain logistics with forecasted demand:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"In perishable tomato supply chains, stockouts lose customers but over-ordering causes 30% spoilage waste. How do we balance safety stock margins against cold-storage depreciation?"</em></li>
                                <li><strong>Collaborative Design:</strong> Faculty and students formulate asymmetric inventory loss functions penalizing spoilage higher than stockouts for perishable produce.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Perishable Supply Chain Demand Planning Blueprint with waste minimization metrics.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Urban Agro-Commodity Demand Forecasting Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive retail grocery demand records across 4 metro regions:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Train competing regression models (XGBoost vs Prophet vs Random Forest) on weekly consumption data.</li>
                                <li><strong>Task 2:</strong> Test demand forecast accuracy under simulated supply disruptions and festive demand surges.</li>
                                <li><strong>Peer Audit:</strong> Teams evaluate each other's MAPE scores and determine optimal safety stock buffer recommendations.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A demand forecasting dossier with supply buffer recommendations and peer-evaluated rankings.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Model Seasonal Demand Peaks in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build an independent demand prediction pipeline:</p>
                            <ul>
                                <li>Create a 52-week demand series with sinusoidal summer peaks and festival spikes.</li>
                                <li>Train a <code>RandomForestRegressor</code> with <code>week</code>, <code>is_festival</code>, and <code>lag_demand</code>.</li>
                                <li>Predict demand for an upcoming festival week and compute Mean Absolute Error on test records.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook generating demand forecasts and residual error tables.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    'm3-t24': `
    <div class="handout-premium" >
            <div class="topic-header">
                <h1>🌾 Agricultural Market Insights</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>
            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>Markets are driven by Supply (Weather/Yield) and Demand (Pop/Trends)</li>
                    <li>Global events (Export bans, wars) cause volatility</li>
                    <li>Data-driven farmers don't gamble; they manage risk.</li>
                </ul>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
import pandas as pd
import numpy as np

# Inter-mandi price disparity and spatial arbitrage analysis
mandi_data = pd.DataFrame({
    'date': pd.date_range('2024-03-01', periods=5, freq='D'),
    'mandi_local_price': [22, 23, 21, 24, 22],     # $/quintal at farm gate mandi
    'mandi_capital_price': [32, 34, 33, 36, 35],   # $/quintal at metro terminal mandi
    'transport_cost_per_q': [6, 6, 6, 6, 6]        # Freight + handling
})

# Spatial Arbitrage Margin = Metro Price - Local Price - Transport Cost
mandi_data['arbitrage_margin'] = (
    mandi_data['mandi_capital_price'] - 
    mandi_data['mandi_local_price'] - 
    mandi_data['transport_cost_per_q']
)
mandi_data['profitable_arbitrage'] = mandi_data['arbitrage_margin'] > 0

print("=== Spatial Arbitrage Analysis ===")
print(mandi_data[['date', 'mandi_local_price', 'mandi_capital_price', 'arbitrage_margin', 'profitable_arbitrage']])
avg_profit = mandi_data['arbitrage_margin'].mean()
print(f"\\nAverage Net Arbitrage Profit: \${avg_profit:.2f}/quintal by dispatching to metro market!")
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
                            <h3>Live Demonstration: Spatial Price Transmission &amp; Regional Arbitrage</h3>
                            <p><strong>Educator Action:</strong> The instructor demonstrates inter-mandi spatial arbitrage analysis live in Google Colab on the projector:</p>
                            <ul>
                                <li>Ingests daily commodity price feeds across 4 neighboring wholesale markets (mandis).</li>
                                <li>Calculates inter-market price spreads, deducts freight and loading costs, and highlights profitable spatial arbitrage corridors.</li>
                                <li>Demonstrates price cointegration tests (Engle-Granger) to prove whether local markets are integrated with national benchmark terminals.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live Colab script plotting spatial price transmission spreads and automated arbitrage margin alerts.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Farm-to-Fork Value Chain Disintermediation Studio</h3>
                            <p><strong>Studio Workshop:</strong> Faculty guides student cohorts through analyzing farmer share in consumer rupee:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"Farmers currently receive only 28% of the urban consumer retail price, with 72% absorbed by multi-tier intermediaries and post-harvest losses. How can Farmer Producer Organizations (FPOs) leverage digital e-market platforms to capture &ge;60% of consumer value?"</em></li>
                                <li><strong>Collaborative Modeling:</strong> Faculty and students design direct-to-consumer aggregation logistics models and spatial price transparency dashboards.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A Digital Agri-Market Disintermediation Strategy Document with value-chain profit breakdown charts.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Regional Mandi Arbitrage &amp; Dispatch Logistics Syndicate</h3>
                            <p><strong>Team Syndicate:</strong> Student teams analyze daily wholesale prices for onion and potato across 5 regional mandis:</p>
                            <ul>
                                <li><strong>Task 1:</strong> Calculate net arbitrage margins across all pairs of markets after subtracting variable truck freight rates.</li>
                                <li><strong>Task 2:</strong> Formulate an optimal multi-market dispatch plan for a 100-ton FPO harvest lot to maximize net revenue.</li>
                                <li><strong>Peer Defense:</strong> Teams defend their dispatch routes against market saturation risks (oversupplying a small local market).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A regional market arbitrage dossier with route optimization maps and net margin tables.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Analyze Inter-Mandi Price Disparities in Colab</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write an independent market disparity analysis script:</p>
                            <ul>
                                <li>Create a DataFrame tracking daily prices of an agricultural commodity across 3 markets (Local Mandi, Regional Hub, Terminal Metro).</li>
                                <li>Compute the price spread between Terminal Metro and Local Mandi; subtract a \$5.00/quintal transport cost to derive net arbitrage profit.</li>
                                <li>Print total profitable trade days and compute the cumulative additional revenue per 100 quintals.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A runnable Colab notebook computing price spreads and spatial arbitrage profitability.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.module3HandoutsPart3 = module3HandoutsPart3;
}
