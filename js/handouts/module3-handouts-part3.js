// Module 3 Comprehensive Handouts - Part 3
// Advanced Models, Robotics, Weather & Market Analysis

const module3HandoutsPart3 = {
    'm3-t10': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Image Classification with Pre-trained Models</h1>
                <p class="duration">⏱️ Duration: 3 hours</p>
            </div>

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why should an AgriTech startup never train a 50-layer deep neural network for crop disease classification completely from scratch on their own dataset of 1,000 farm photos?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Training from scratch with 1,000 photos guarantees severe overfitting and poor convergence! Deep networks (like ResNet or MobileNet) have tens of millions of parameters and require millions of images to learn general edge and texture filters. Transfer Learning allows you to take a network pre-trained on ImageNet (1.4 million images) and simply fine-tune the final classification head on your 1,000 crop images in minutes with state-of-the-art accuracy.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why is MobileNetV2 preferred over giant models like Vision Transformers (ViT) or ResNet-152 when deploying crop disease models on cheap Android smartphones used by farmers?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Compute and memory constraints! ResNet-152 requires gigabytes of RAM, hundreds of megabytes of storage, and substantial GPU power. MobileNetV2 uses depthwise separable convolutions and inverted residuals, achieving high accuracy with a tiny 14 MB footprint, running inference in 30 milliseconds directly on low-cost smartphone CPUs without needing cloud connectivity.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Transfer Learning Demo):</strong> In the Teacher's live transfer learning demonstration, which layer modification adapted a pre-trained ImageNet MobileNetV2 model (originally 1,000 classes) to detect 5 regional coffee leaf diseases?</p>
                    <ul>
                        <li>A) Replacing the final dense classification head with a new Dense layer with 5 output units and a Softmax activation, while freezing the convolutional base feature extractor</li>
                        <li>B) Retraining all 50 million weights from random initialization</li>
                        <li>C) Deleting all convolutional layers and keeping only the input layer</li>
                        <li>D) Multiplying all weights by 5</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Replaced the top classification layer with a 5-unit Softmax head while freezing base feature weights.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Transfer learning freezes the rich, general-purpose feature representations in the pre-trained convolutional backbone, training only the newly attached final classification layer on specific crop disease classes.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Retraining all weights from scratch on a small agricultural dataset triggers severe overfitting.</li>
                                <li><strong>Why C is incorrect:</strong> Deleting convolutional layers destroys all visual feature extraction capabilities.</li>
                                <li><strong>Why D is incorrect:</strong> Multiplying weights by 5 distorts learned filter representations.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Mobile Farm Edge AI Studio):</strong> During the Edge AI Studio, what post-training optimization technique compressed the PyTorch/TensorFlow crop disease model from 60 MB down to 15 MB for instant mobile app loading?</p>
                    <ul>
                        <li>A) Post-Training INT8 Quantization: converting 32-bit floating-point weights (FP32) to 8-bit integers (INT8) with negligible loss in validation accuracy</li>
                        <li>B) Deleting 75% of the code comments</li>
                        <li>C) Zipping the file with a password</li>
                        <li>D) Converting the model into an Excel spreadsheet</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>INT8 Quantization reduced model size by 75% and boosted mobile CPU inference speed with minimal accuracy drop.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Quantization compresses FP32 weights into 8-bit integers (INT8), slashing memory footprints by 4x and enabling hardware acceleration on mobile ARM NEON/NPU chipsets.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Compiled binary weights do not contain code comments.</li>
                                <li><strong>Why C is incorrect:</strong> Zipping files requires unzipping into RAM at runtime, offering no memory optimization.</li>
                                <li><strong>Why D is incorrect:</strong> Neural network tensors cannot be executed inside Excel spreadsheets.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task fine-tuning MobileNetV2 on crop foliage, what learning rate strategy prevented destroying pre-trained weights during the second-stage fine-tuning phase?</p>
                    <ul>
                        <li>A) Unfreezing the top convolutional blocks and training with a very small learning rate (e.g., 1e-5), an order of magnitude smaller than initial head training</li>
                        <li>B) Increasing the learning rate to 1.0</li>
                        <li>C) Disabling the optimizer completely</li>
                        <li>D) Setting epochs to zero</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Used a very small learning rate (1e-5) during fine-tuning to protect pre-trained feature weights.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Aggressive learning rates destroy pre-trained feature representations ('catastrophic forgetting'). Fine-tuning unfreezes upper layers using a delicate, small learning rate to adapt filters to subtle plant pathology details.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> A large learning rate (1.0) completely destabilizes gradient descent and wipes out pre-trained weights.</li>
                                <li><strong>Why C is incorrect:</strong> Disabling optimizers stops all parameter updates.</li>
                                <li><strong>Why D is incorrect:</strong> Zero epochs skips training completely.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> The PlantVillage dataset contains 54,000+ laboratory photos of diseased leaves against plain gray or black backgrounds. Why does a model trained strictly on PlantVillage often achieve 99% laboratory accuracy but drop to 40% when tested on a real farm?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Domain Shift and Background Bias! In PlantVillage, leaves are detached, flattened on white/gray paper, and illuminated by studio lamps. In real fields, leaves are attached to living bushes with complex backgrounds (soil, weeds, neighboring leaves), moving in wind, and illuminated by harsh sunlight and shadows. The laboratory model learns to associate specific lab background artifacts with classes rather than true disease morphology.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does Data Augmentation (random rotations, horizontal flips, color jitter, CutMix) help bridge the gap between lab datasets and real-world farm conditions?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Data augmentation simulates physical outdoor variability during training. Random brightness/contrast jittering mimics shifting sunlight and passing clouds; random zooming and rotations mimic how a farmer holds a smartphone at various angles and distances; CutMix forces the model to look at multiple leaf regions rather than memorizing a single studio corner.</p>
                        </div>
                    </details>
                </div>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Data Augmentation Demo):</strong> In the Teacher's live demonstration, what visual transformation pipeline simulated the variable outdoor smartphone captures of rural smallholders?</p>
                    <ul>
                        <li>A) Random horizontal/vertical flips, affine rotations (±30°), color jitter (brightness, contrast, saturation), and perspective warping</li>
                        <li>B) Inverting all pixel colors to negatives</li>
                        <li>C) Blurring all images to a solid gray screen</li>
                        <li>D) Renaming the image files</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Random flips, rotations, color jitter, and perspective warping simulated real outdoor camera variability.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Comprehensive data augmentation introduces realistic stochastic perturbations, preventing convolutional networks from overfitting to static lab orientations and studio lighting.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Negative color inversion distorts natural chlorophyll pigments and produces unrealistic samples.</li>
                                <li><strong>Why C is incorrect:</strong> Blurring to solid gray annihilates all spatial lesion signal.</li>
                                <li><strong>Why D is incorrect:</strong> Renaming files does not alter image tensor pixel values.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Domain Shift Stress-Test Studio):</strong> During the Domain Shift Studio, what diagnostic test proved that a model trained on lab leaves had memorized the gray cardboard background rather than the disease lesion?</p>
                    <ul>
                        <li>A) Saliency map / Grad-CAM visualization showing that the neural network's activation heat focused on the cardboard background corners rather than the infected leaf tissue</li>
                        <li>B) The computer monitor turned gray</li>
                        <li>C) The file format changed from PNG to GIF</li>
                        <li>D) Model loss became exactly zero</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Grad-CAM heatmaps highlighted background corners rather than actual biological disease lesions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Explainable AI tools (Grad-CAM) compute gradients of target classes relative to feature maps, visually exposing 'Clever Hans' effects where models rely on spurious background artifacts.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Grad-CAM visualizes network attention; it does not change monitor hardware.</li>
                                <li><strong>Why C is incorrect:</strong> Model explainability does not alter image file formats on disk.</li>
                                <li><strong>Why D is incorrect:</strong> Background memorization can still produce low training loss, but fails validation.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building an Agricultural Data Augmentation Pipeline, which modern Keras/PyTorch layer applied random zoom and rotation transformations dynamically on the GPU during training?</p>
                    <ul>
                        <li>A) tf.keras.layers.RandomRotation(0.2) and RandomZoom(0.2) (or torchvision.transforms.v2)</li>
                        <li>B) tf.keras.layers.Dense(10)</li>
                        <li>C) tf.print()</li>
                        <li>D) np.save()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Dynamic augmentation layers applied random rotations and zooms on GPU tensors during training batches.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Modern preprocessing layers execute directly on GPU memory pipelines during training, generating infinite stochastic variations without expanding physical disk storage.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Dense layers compute fully-connected linear matrix multiplications, not geometric image augmentations.</li>
                                <li><strong>Why C is incorrect:</strong> tf.print is a tensor logging statement.</li>
                                <li><strong>Why D is incorrect:</strong> np.save serializes arrays to disk.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is Object Detection (YOLO) required for real-time robotic weed spraying rather than standard Image Classification?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Image classification answers *what* is in the image (e.g., 'Weed present: Yes'), but provides zero spatial coordinates. A precision robotic sprayer moving at 15 km/h needs to know *where* the weed is located down to the exact millimeter to trigger an ultra-targeted micro-nozzle burst. YOLO outputs precise bounding box coordinates <code>[x_center, y_center, width, height]</code> and class labels in a single 10-millisecond inference pass.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does Non-Maximum Suppression (NMS) prevent a robotic sprayer from spraying the exact same weed 20 times?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> YOLO predicts multiple overlapping candidate bounding boxes for a single object. Non-Maximum Suppression (NMS) sorts candidate boxes by confidence score, selects the highest-scoring box, and discards all other overlapping candidate boxes that share an Intersection-over-Union (IoU) greater than a set threshold (e.g., IoU > 0.45). This guarantees exactly one unified target box per weed.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live YOLO Inference Demo):</strong> In the Teacher's live demonstration of real-time YOLOv8 pest detection on video, what output format was returned for each detected insect in the camera frame?</p>
                    <ul>
                        <li>A) Bounding box coordinates [x, y, w, h], a class identifier string, and a detection confidence score between 0.0 and 1.0</li>
                        <li>B) A single binary boolean True/False</li>
                        <li>C) A 100-page PDF report</li>
                        <li>D) An audio alert tone only</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Bounding box coordinates [x, y, w, h], class ID, and confidence score.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Single-stage object detectors (YOLO) formulate detection as spatial regression and classification, returning bounding box coordinates alongside class IDs and confidence probabilities in a single forward pass.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Binary booleans indicate presence/absence (classification), but provide no spatial coordinate localization.</li>
                                <li><strong>Why C is incorrect:</strong> Real-time edge detectors process 30 frames per second and do not generate static PDF files.</li>
                                <li><strong>Why D is incorrect:</strong> Raw inference outputs numeric tensors, which downstream apps can map to alerts.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Precision Robotic Sprayer Studio):</strong> During the Robotic Sprayer Architecture Studio, how did teams prevent redundant spray bursts when multiple candidate bounding boxes overlapped the same weed?</p>
                    <ul>
                        <li>A) Applying Non-Maximum Suppression (NMS) with an Intersection-over-Union (IoU) threshold of 0.45 to eliminate duplicate candidate boxes</li>
                        <li>B) Turning off the sprayer nozzles permanently</li>
                        <li>C) Averaging the colors of all weeds</li>
                        <li>D) Decreasing tractor speed to zero</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Non-Maximum Suppression (NMS) with IoU thresholding pruned redundant candidate bounding boxes.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> NMS eliminates redundant overlapping candidate boxes by measuring spatial overlap (IoU) against the highest-confidence anchor, ensuring each individual weed receives a single actuation pulse.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Turning off nozzles stops all weed control and destroys crop yield.</li>
                                <li><strong>Why C is incorrect:</strong> Averaging colors does not resolve overlapping bounding box coordinates.</li>
                                <li><strong>Why D is incorrect:</strong> Halting tractor movement stops all commercial field operations.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task running YOLOv8 pest detection, what parameter filtered out low-confidence background false alarms?</p>
                    <ul>
                        <li>A) model.predict(source='crop.jpg', conf=0.50)</li>
                        <li>B) model.predict(source='crop.jpg', speed=100)</li>
                        <li>C) model.delete()</li>
                        <li>D) model.export(format='txt')</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>The conf=0.50 parameter discarded all candidate bounding boxes with confidence below 50%.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Setting the <code>conf</code> confidence threshold filters out weak candidate predictions, suppressing background false positives while retaining high-certainty pest and weed detections.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> speed is not a valid inference parameter in Ultralytics YOLO.</li>
                                <li><strong>Why C is incorrect:</strong> delete() deletes the model object from memory.</li>
                                <li><strong>Why D is incorrect:</strong> exporting to text converts model weights without performing inference.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is classifying soil texture (Sand, Silt, Clay) based on the USDA Soil Textural Triangle the fundamental first step in precision agriculture?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Soil texture dictates hydrological and chemical behavior! Sandy soils drain rapidly, suffer nutrient leaching, and require frequent micro-irrigation. Clay soils hold vast water volumes but risk waterlogging and compaction. A precision fertilizer and irrigation algorithm will fail if it applies the same water schedule to sandy loam as it does to heavy clay.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What is a multi-parameter Soil Health Index (SHI), and why is chemical fertility (N-P-K) only one-third of the health equation?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> True soil health has three interconnected pillars: Chemical (pH, organic carbon, N-P-K, CEC), Physical (aggregate stability, bulk density, water infiltration rate), and Biological (microbial biomass carbon, earthworm activity, respiration). High chemical N-P-K is useless if the soil is severely compacted (poor physical health) with dead microbial ecology (poor biological health).</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Soil Triangle Demo):</strong> In the Teacher's live demonstration of soil texture classification, what mathematical constraint applies to the percentages of Sand, Silt, and Clay for any valid physical soil sample?</p>
                    <ul>
                        <li>A) % Sand + % Silt + % Clay must sum exactly to 100.0%</li>
                        <li>B) Sand must always be greater than Clay</li>
                        <li>C) The product of Sand and Silt must equal zero</li>
                        <li>D) Each component must be an odd number</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Sand, Silt, and Clay are compositional fractions that must sum strictly to 100.0%.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Soil texture represents the physical particle size distribution of the mineral soil fraction; because it is compositional data, Sand + Silt + Clay must equal 100%, defining points within a ternary simplex triangle.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Heavy clay soils have much higher clay fractions than sand.</li>
                                <li><strong>Why C is incorrect:</strong> Loamy soils contain balanced amounts of both sand and silt, so their product is positive.</li>
                                <li><strong>Why D is incorrect:</strong> Fractions are continuous real numbers, not restricted to odd integers.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Soil Health Index (SHI) Studio):</strong> During the Soil Health Index Studio, what non-linear scoring function transformed raw soil pH into a standardized [0, 1] biological health score?</p>
                    <ul>
                        <li>A) A Gaussian bell-shaped scoring curve peaking at optimal neutral pH (6.5–7.0) and penalizing extreme acidity (<5.0) and alkalinity (>8.5)</li>
                        <li>B) A strictly linear upward line where higher pH is always better</li>
                        <li>C) Setting all scores to 1.0 unconditionally</li>
                        <li>D) Multiplying pH by -1</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>A Gaussian scoring function peaking at optimal neutral pH (6.5–7.0) and penalizing extremes.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Biological soil health metrics follow 'more is better' (organic matter), 'less is better' (salinity/heavy metals), or 'optimum is best' (pH). Optimal nutrient availability occurs in neutral pH (6.5–7.0), modeled via Gaussian bell curves.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> High pH (>8.5) causes extreme sodicity and micronutrient lockup; linear upward scoring is agronomic nonsense.</li>
                                <li><strong>Why C is incorrect:</strong> Constant 1.0 scores eliminate diagnostic differentiation.</li>
                                <li><strong>Why D is incorrect:</strong> Negative pH scores are mathematically invalid in soil chemistry.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Soil Texture Classifier, which Scikit-Learn model classified continuous Sand-Silt-Clay ratios into discrete USDA textural classes (e.g., Sandy Loam, Silty Clay)?</p>
                    <ul>
                        <li>A) sklearn.ensemble.RandomForestClassifier(n_estimators=100, max_depth=8)</li>
                        <li>B) sklearn.linear_model.LinearRegression()</li>
                        <li>C) scipy.spatial.distance.cosine()</li>
                        <li>D) np.histogram()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>RandomForestClassifier classified compositional soil particle fractions into USDA texture classes.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Random Forest is ideal for multi-class categorical classification on tabular compositional metrics, capturing non-linear boundary intersections on the USDA textural triangle.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> LinearRegression predicts continuous numbers, not categorical USDA textural classes.</li>
                                <li><strong>Why C is incorrect:</strong> Cosine distance is a distance metric, not a trained classifier estimator.</li>
                                <li><strong>Why D is incorrect:</strong> np.histogram computes bin frequencies, not predictive classification.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> How can shining a visible and near-infrared (Vis-NIR) light beam onto a dry soil sample predict its organic carbon, nitrogen, and clay content in 30 seconds without wet chemistry?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Molecular vibration spectroscopy! Organic carbon and soil minerals contain distinct chemical bonds (C-H, O-H, N-H, Al-OH) that absorb specific wavelengths of light in the Vis-NIR spectrum (350–2500 nm) due to molecular bending and stretching overtones. By recording the reflected spectral curve, machine learning algorithms map spectral absorption dips directly to laboratory soil nutrient concentrations.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does a spectral soil model calibrated in Karnataka often fail when predicting soil nitrogen on farms in Uttar Pradesh?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Calibration Transfer / Domain Shift! Soil spectral signatures are influenced by underlying parent rock minerology, soil moisture, and iron oxide content (e.g., tropical red Alfisols vs northern Indo-Gangetic alluvial Inceptisols). Spectral regression models require local re-calibration or domain adaptation (e.g., Transfer Learning, Memory-Based Learning) to operate across distinct geological soil orders.</p>
                        </div>
                    </details>
                </div>
            </div>
            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Vis-NIR Spectroscopy Demo):</strong> In the Teacher's live demonstration of proximal soil spectroscopy, which spectral absorption band regions were strongly correlated with soil organic carbon (SOC)?</p>
                    <ul>
                        <li>A) Vis-NIR overtones and combination bands in the shortwave infrared region (1400 nm, 1900 nm, and 2200 nm) corresponding to C-H, O-H, and N-H molecular bond vibrations</li>
                        <li>B) FM radio broadcast frequencies (100 MHz)</li>
                        <li>C) Cosmic gamma ray bands</li>
                        <li>D) Pure ultraviolet radiation alone</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>SWIR overtones (1400, 1900, 2200 nm) corresponding to C-H, O-H, and N-H molecular bond absorptions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Soil organic matter and clay minerals exhibit characteristic absorption features in the NIR and SWIR regions due to vibrational overtones of fundamental C-H and O-H stretching modes.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> FM radio waves have meter-scale wavelengths and do not resolve molecular soil chemical bonds.</li>
                                <li><strong>Why C is incorrect:</strong> Gamma rays are ionizing radiation not used in farm optical spectroscopy.</li>
                                <li><strong>Why D is incorrect:</strong> UV radiation causes fluorescence but lacks the characteristic absorption overtones of organic carbon.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Calibration Transfer Studio):</strong> During the Proximal Sensor Fusion Studio, what mathematical preprocessing technique removed baseline spectral scattering drift caused by soil particle size roughness?</p>
                    <ul>
                        <li>A) Standard Normal Variate (SNV) transformation combined with Savitzky-Golay first-derivative filtering</li>
                        <li>B) Deleting all odd-numbered wavelengths</li>
                        <li>C) Multiplying the reflectance spectrum by zero</li>
                        <li>D) Sorting wavelength channels randomly</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Standard Normal Variate (SNV) and Savitzky-Golay derivation eliminated physical scatter drift.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Chemometric preprocessing using SNV centers and scales individual spectra to correct for physical particle scattering, while Savitzky-Golay differentiation removes baseline drift and accentuates subtle absorption peaks.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Deleting odd wavelengths cuts spectral resolution by half without removing physical scatter.</li>
                                <li><strong>Why C is incorrect:</strong> Multiplying by zero erases the entire spectral dataset.</li>
                                <li><strong>Why D is incorrect:</strong> Random sorting destroys continuous spectral absorption geometry.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task predicting soil nitrogen from sensor telemetry, what Scikit-Learn regression algorithm captured complex non-linear spectral interactions while providing feature importances?</p>
                    <ul>
                        <li>A) sklearn.ensemble.RandomForestRegressor(n_estimators=100, random_state=42)</li>
                        <li>B) sklearn.naive_bayes.BernoulliNB()</li>
                        <li>C) sklearn.cluster.DBSCAN()</li>
                        <li>D) sklearn.decomposition.PCA() alone</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>RandomForestRegressor predicted continuous nitrogen ppm while resisting spectral collinearity.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>RandomForestRegressor</code> handles high-dimensional, non-linear sensor arrays without severe collinearity breakdown, producing continuous nutrient concentration estimates with MDI/Permutation importance.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> BernoulliNB is a binary discrete classifier, incapable of predicting continuous nutrient concentrations.</li>
                                <li><strong>Why C is incorrect:</strong> DBSCAN is an unsupervised density-based clustering tool.</li>
                                <li><strong>Why D is incorrect:</strong> PCA performs dimensionality reduction, but requires a downstream regressor to output predictions.</li>
                            </ul>
                        </div>
                    </details>
                </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is prescribing fertilizer based on Soil Test Crop Response (STCR) equations vastly superior to traditional blanket state-level fertilizer recommendations?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Blanket recommendations prescribe an identical generic dose (e.g., '100 kg N/ha') regardless of what is already present in the soil. If a farmer's plot already has 350 kg/ha available nitrogen from previous manure applications, blanket application wastes money and causes lodging. STCR equations calculate nutrient dosage scientifically: <code>Fertilizer Dose = Target Yield Requirement - Soil Nutrient Contribution - Organic Manure Contribution</code>, adjusting application dynamically to achieve a specific target yield.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What is the 'Law of the Minimum' (Liebig's Law), and why will a farmer waste money on expensive Nitrogen fertilizer if soil Zinc is deficient?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Plant growth is controlled not by total resources available, but by the *scarcest* resource (the limiting factor)! If soil zinc is deficient, crop yield will be capped at the zinc ceiling. Adding more nitrogen will not increase yield by even 1 kg; the extra nitrogen remains unabsorbed, leaching into waterways while wasting farmer capital. Precision nutrition requires balanced stoichiometric fertilization.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live STCR Equation Demo):</strong> In the Teacher's live demonstration of Soil Test Crop Response (STCR) calibration for rice, what was the mathematical form of the fertilizer nitrogen prescription equation?</p>
                    <ul>
                        <li>A) Fertilizer_N (kg/ha) = (Nutrient_Required_per_Quintal * Target_Yield) - (Soil_Efficiency_Factor * Available_Soil_N)</li>
                        <li>B) Fertilizer_N = Target_Yield * 1000</li>
                        <li>C) Fertilizer_N = Available_Soil_N / 2</li>
                        <li>D) Fertilizer_N = 50 kg/ha for all farms</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Fertilizer_N = (Requirement * Target_Yield) - (Soil_Contribution) accounting for soil nutrient credits.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> STCR calibration models subtract the indigenous soil nutrient supply (calibrated by nutrient uptake efficiency) from the total nutrient requirement of the desired target yield, calculating the exact fertilizer deficit.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Multiplying target yield by 1000 produces astronomical, crop-lethal chemical dosages.</li>
                                <li><strong>Why C is incorrect:</strong> Dividing soil N by 2 ignores the target yield goal completely.</li>
                                <li><strong>Why D is incorrect:</strong> Constant 50 kg/ha is traditional blanket application, the antithesis of precision STCR.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Target Yield Prescription Studio):</strong> During the Target Yield Studio, why did student teams cap a farmer's target yield goal at 70 quintals/ha instead of allowing an unrealistic target of 150 quintals/ha for rainfed sorghum?</p>
                    <ul>
                        <li>A) Because physiological genetic yield ceilings and regional agro-climatic water limits prevent rainfed sorghum from achieving 150 q/ha, and prescribing fertilizer for unattainable targets wastes inputs and burns crops</li>
                        <li>B) Because the computer algorithm could not calculate numbers over 100</li>
                        <li>C) Because the state government limits farmer profits</li>
                        <li>D) Because fertilizer bags only come in packs of 10</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Capped targets to biological genetic and hydrological limits to prevent toxic over-fertilization.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Target yield models must respect biological and climatic ceilings (water availability, solar radiation, crop genetics). Setting unattainable yield goals results in massive, toxic chemical over-recommendations.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Modern computers calculate arbitrary precision floating-point numbers without integer caps at 100.</li>
                                <li><strong>Why C is incorrect:</strong> Government policies do not restrict biological harvest yields.</li>
                                <li><strong>Why D is incorrect:</strong> Package sizes have zero bearing on agronomic crop physiology limits.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task implementing an STCR Fertilizer Calculator, how did you verify that the function returned zero fertilizer if the soil was already super-saturated with nutrients?</p>
                    <ul>
                        <li>A) Using max(0, calculated_fertilizer_dose) to prevent negative chemical application prescriptions</li>
                        <li>B) Allowing negative fertilizer numbers to be printed</li>
                        <li>C) Multiplying negative numbers by -1 to prescribe positive fertilizer</li>
                        <li>D) Raising a fatal system crash</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Applied max(0, calculated_dose) ensuring nutrient-rich soils received zero fertilizer recommendations.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> If indigenous soil nutrient reserves exceed the target crop demand, the STCR formula yields a negative number. Real-world agronomic controllers clamp the output at zero (<code>max(0, dose)</code>), advising zero application.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Prescribing negative fertilizer confuses farmers and breaks automated spreader machinery.</li>
                                <li><strong>Why C is incorrect:</strong> Inverting negative signs prescribes positive fertilizer to already over-fertilized land.</li>
                                <li><strong>Why D is incorrect:</strong> Fertile soil is a positive agricultural condition and should not crash software.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> A farmer needs to supply 120 kg N, 60 kg P2O5, and 40 kg K2O per hectare. Why is choosing between Urea, DAP, MOP, and complex 20:20:0:13 a complex mathematical optimization problem rather than a simple shopping trip?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Commercial fertilizers are multi-nutrient packages! For example, DAP (Di-Ammonium Phosphate) contains 18% Nitrogen and 46% Phosphorus. If you buy DAP to satisfy phosphorus, you automatically add nitrogen. Determining the exact combination of commercial fertilizer bags that meets all N-P-K constraints at the absolute lowest cost in rupees requires Linear Programming (Simplex method).</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What happens if a fertilizer linear program has contradictory constraints (e.g., minimum nutrient requirements cannot be met without exceeding maximum toxicity bounds)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Infeasible Solution! The linear programming solver (like <code>scipy.optimize.linprog</code>) returns <code>success: False</code> with status 'infeasible'. This alerts the agronomist that no commercial blend of the selected fertilizers can satisfy the requirements, requiring adding supplementary single-nutrient fertilizers (like straight Urea or MOP) or relaxing constraints.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Linear Programming Demo):</strong> In the Teacher's live demonstration of cost-minimized fertilizer blending using scipy.optimize.linprog, what represented the objective function to be minimized?</p>
                    <ul>
                        <li>A) Total procurement cost: minimize c^T * x, where c is the vector of bag prices in rupees and x is the number of bags of each fertilizer type</li>
                        <li>B) The weight of the tractor trailer</li>
                        <li>C) The chemical formula molecular weight of Urea</li>
                        <li>D) Total rainfall in the district</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Total procurement cost: minimize c^T * x subject to linear N-P-K inequality constraints.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In commercial farm economics, fertilizer blending is formulated as a classic linear program: minimizing total purchase expenditure subject to meeting minimum required N, P, and K crop uptake constraints.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Trailer weight is a logistics transport factor, not the chemical nutrient optimization objective.</li>
                                <li><strong>Why C is incorrect:</strong> Molecular weight is a physical chemistry constant, not an economic cost function.</li>
                                <li><strong>Why D is incorrect:</strong> Rainfall is an environmental exogenous variable.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Fertilizer Budget Optimization Studio):</strong> During the Cooperative Budget Studio, what linear inequality constraints ensured that all minimum nutrient requirements were met across 1,000 hectares?</p>
                    <ul>
                        <li>A) A_ub @ x <= -b_ub (negating inequality coefficients to enforce nutrient_delivered >= minimum_nutrient_required)</li>
                        <li>B) x == 0</li>
                        <li>C) sum(x) > 1,000,000</li>
                        <li>D) A_ub @ x == 0</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Negated inequality constraints (A_ub @ x <= -b) to enforce greater-than-or-equal nutrient targets.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Standard linear programming solvers solve minimization subject to <code><=</code>. To enforce minimum lower bounds (<code>A @ x >= b</code>), standard formulation multiplies both sides by -1: <code>-A @ x <= -b</code>.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Setting x == 0 purchases zero fertilizer, starving all crops.</li>
                                <li><strong>Why C is incorrect:</strong> Arbitrary bag sum constraints do not guarantee balanced N-P-K stoichiometry.</li>
                                <li><strong>Why D is incorrect:</strong> Enforcing zero nutrient delivery leads to complete crop failure.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task solving fertilizer cost minimization with SciPy, which method call returned the optimal bag quantities and confirmed mathematical convergence?</p>
                    <ul>
                        <li>A) res = scipy.optimize.linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=bounds, method='highs') with res.success == True</li>
                        <li>B) scipy.fft()</li>
                        <li>C) np.linalg.det()</li>
                        <li>D) res = 'Optimal'</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>linprog(..., method='highs') verified successful convergence and extracted optimal bag quantities.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> SciPy's modern <code>highs</code> solver implements high-performance dual simplex and interior-point algorithms, returning optimal decision variable solutions and convergence verification via <code>res.success</code>.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> fft() is for frequency signal processing, not linear optimization.</li>
                                <li><strong>Why C is incorrect:</strong> det() computes matrix determinants.</li>
                                <li><strong>Why D is incorrect:</strong> Assigning a hardcoded string does not execute numerical mathematical programming.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is irrigating crops based on fixed clock timers (e.g., 'turn pump on every morning at 6:00 AM for 30 minutes') an agronomic and ecological disaster?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Clock timers ignore environmental demand! On a cloudy, cool day following a rainstorm, the soil is already saturated; the timer waters anyway, causing root rot, fungus, electricity waste, and nutrient leaching. On a hot, windy afternoon with high evapotranspiration, the timer provides insufficient water, causing severe plant drought stress. Precision irrigation uses closed-loop IoT soil tension thresholds and weather-aware controllers.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What is 'Soil Water Tension' (measured in centibars/kPa by tensiometers), and why does it represent plant thirst far better than volumetric water percentage (VWC %)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> VWC % tells you how much water is present, but not how tightly the soil holds it! A clay soil at 25% moisture holds water so tightly in tiny micro-pores that plant roots cannot extract it (plants wilt). A sandy soil at 15% moisture releases water freely. Soil water tension measures the physical suction energy required by roots to extract water, providing a universal measure of plant water availability across all soil types.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Closed-Loop Irrigation Demo):</strong> In the Teacher's live demonstration of closed-loop irrigation actuation, what hysteresis mechanism prevented the solenoid valve from rapidly chattering on and off when moisture hovered around the threshold?</p>
                    <ul>
                        <li>A) A dual-threshold deadband: opening the valve when moisture drops below 22% (start), but closing it only after moisture reaches 32% (field capacity)</li>
                        <li>B) Disconnecting the solenoid valve wires</li>
                        <li>C) Turning on the pump permanently</li>
                        <li>D) Rounding all sensor numbers to 100</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Dual-threshold deadband (hysteresis) prevented valve chattering by separating start and stop thresholds.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Hysteresis prevents actuator wear and hydraulic pipe hammer: separating the activation threshold (22% deficit) from the deactivation threshold (32% field capacity) ensures long, stable irrigation cycles.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Disconnecting solenoid wires stops all automated irrigation capability.</li>
                                <li><strong>Why C is incorrect:</strong> Continuous pumping floods fields and burns pump motors.</li>
                                <li><strong>Why D is incorrect:</strong> Rounding to 100 causes the system to believe soil is perpetually soaked, preventing any watering.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Solar Precision Drip Architecture Studio):</strong> During the Solar Precision Irrigation Studio, how did teams synchronize variable-frequency drive (VFD) solar pump speeds with crop water demand?</p>
                    <ul>
                        <li>A) By mapping solar PV irradiance curves to pulse-width modulated (PWM) drip valve zones, prioritizing peak afternoon pumping during maximum solar generation</li>
                        <li>B) By running the solar pump strictly at midnight</li>
                        <li>C) By connecting solar panels directly to ground soil</li>
                        <li>D) By draining the borehole completely every day</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Synchronized VFD solar pump output with diurnal solar generation and peak afternoon crop transpiration.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Solar drip systems match generation with demand: peak solar energy generation coincides with peak afternoon vapor pressure deficit, allowing VFD pumps to deliver maximum water during high evapotranspiration periods.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Solar panels produce zero energy at midnight without expensive grid-scale batteries.</li>
                                <li><strong>Why C is incorrect:</strong> Connecting panels to soil shorts the electrical system and risks electrocution.</li>
                                <li><strong>Why D is incorrect:</strong> Depleting boreholes destroys rural groundwater aquifers.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Crop-Stage Aware Irrigation Controller, how did the decision boundary adjust irrigation thresholds when maize transitioned from vegetative growth to flowering (tasseling)?</p>
                    <ul>
                        <li>A) It raised the moisture trigger threshold from 20% to 30%, prioritizing high moisture during the drought-sensitive flowering pollination stage</li>
                        <li>B) It shut off irrigation completely during flowering</li>
                        <li>C) It doubled the chemical pesticide rate instead of watering</li>
                        <li>D) It deleted the soil sensor records</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Raised soil moisture triggers from 20% to 30% to protect critical reproductive pollination from drought.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Maize is hypersensitive to moisture stress during flowering/silking: a 2-day water deficit during pollination can reduce final grain yield by 50%. The stage-aware controller tightens moisture bounds during critical phenology.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Cutting water during flowering causes complete pollination failure and ear abortion.</li>
                                <li><strong>Why C is incorrect:</strong> Pesticides cannot substitute for physical plant hydration.</li>
                                <li><strong>Why D is incorrect:</strong> Deleting records prevents all automated control.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why does the internationally accepted FAO-56 Penman-Monteith method calculate Reference Evapotranspiration (ET0) from a hypothetical grass surface rather than measuring actual crop transpiration directly?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Standardization! Actual crop water use depends on thousands of variable crop cultivars, planting densities, and stages. FAO-56 standardizes atmospheric evaporative demand into a single universal reference: a hypothetical, well-watered 0.12m grass surface (ET0). Once atmospheric demand (ET0) is known from weather data, actual crop water use is calculated via simple crop coefficients: <code>ETc = Kc * ET0</code>.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How does the crop coefficient (Kc) change over the lifecycle of a wheat crop from germination to maturity, and how does this dictate irrigation volume?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Dynamic biological curve! At initial emergence (germination), Kc is low (~0.3–0.4) because the canopy is tiny and water loss is mostly soil evaporation. During mid-season peak vegetative growth and flowering, Kc spikes to 1.15–1.20 (transpiring 20% *more* water than reference grass). At late-season ripening, leaves senesce and Kc drops to 0.25–0.40 as the crop dries for harvest.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live FAO-56 Penman-Monteith Demo):</strong> In the Teacher's live demonstration calculating Reference Evapotranspiration (ET0), which 4 meteorological variables were required to compute the Penman-Monteith energy balance equation?</p>
                    <ul>
                        <li>A) Net solar radiation, ambient air temperature, relative humidity (or vapor pressure), and wind speed measured at 2m height</li>
                        <li>B) Soil nitrogen, phosphorus, potassium, and soil pH</li>
                        <li>C) Tractor diesel consumption, oil pressure, battery voltage, and tire wear</li>
                        <li>D) Latitude, longitude, and elevation alone without any weather sensors</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Net solar radiation, air temperature, relative humidity, and 2m wind speed.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The Penman-Monteith equation combines radiation energy balance (driving liquid-to-vapor phase change) with aerodynamic vapor transport (wind speed and vapor pressure deficit removing saturated air from the boundary layer).</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Soil chemical nutrients govern plant fertility, but do not dictate atmospheric physical evapotranspiration.</li>
                                <li><strong>Why C is incorrect:</strong> Machinery telemetry is completely irrelevant to atmospheric physics.</li>
                                <li><strong>Why D is incorrect:</strong> Geographic coordinates alone cannot measure instantaneous daily atmospheric weather conditions.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Basin-Scale Water Budgeting Studio):</strong> During the Hydrological Water Budgeting Studio, how did teams calculate daily crop evapotranspiration (ETc) for a 50-hectare potato field during peak tuber bulking stage?</p>
                    <ul>
                        <li>A) ETc = Kc * ET0, multiplying reference ET0 by the potato crop coefficient Kc = 1.15</li>
                        <li>B) ETc = ET0 / Kc</li>
                        <li>C) ETc = ET0 + 100 mm</li>
                        <li>D) ETc = 0 mm</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>ETc = Kc * ET0, scaling atmospheric demand by the specific crop phenology coefficient.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The standard FAO two-step methodology multiplies atmospheric evaporative demand (ET0) by the crop-specific growth stage coefficient (Kc) to determine exact daily crop water consumption.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Dividing ET0 by Kc reverses the biological scaling relationship.</li>
                                <li><strong>Why C is incorrect:</strong> Adding 100mm would drown the potato crop with extreme flooding.</li>
                                <li><strong>Why D is incorrect:</strong> Living crops transpire continuously during sunny days; ETc cannot be zero.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task calculating Daily Crop Evapotranspiration, what conversion factor converted ETc (in millimeters of water depth) into total liters of water required for a 2.5-hectare plot?</p>
                    <ul>
                        <li>A) 1 mm of water over 1 hectare = 10,000 liters, so Total Liters = ETc_mm * 2.5 * 10,000</li>
                        <li>B) Total Liters = ETc_mm * 2.5</li>
                        <li>C) Total Liters = ETc_mm / 1000</li>
                        <li>D) Total Liters = ETc_mm ** 2</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Multiplied ETc_mm * hectares * 10,000 L/ha-mm to compute absolute volumetric water requirement in liters.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Hydraulic volumetric conversion: 1 mm depth across 1 square meter = 1 liter. Since 1 hectare = 10,000 m², 1 mm across 1 ha equals exactly 10,000 liters of water.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Failing to apply the 10,000 area scalar leaves volume underestimated by a factor of 10,000.</li>
                                <li><strong>Why C is incorrect:</strong> Dividing by 1000 reduces volume to near zero.</li>
                                <li><strong>Why D is incorrect:</strong> Squaring millimeters violates volumetric dimensional units.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> What do the three parameters (p, d, q) in an ARIMA(p, d, q) model signify when forecasting daily agricultural temperatures?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> <code>p</code> is the Autoregressive (AR) order: predicting today's temperature using the linear combination of the previous <code>p</code> days' temperatures. <code>d</code> is the Integrated (I) differencing order: how many times the series was differenced to achieve stationarity. <code>q</code> is the Moving Average (MA) order: modeling today's value based on the residual forecast errors of the previous <code>q</code> days.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why does pure ARIMA struggle when forecasting rainfall 30 days into the future compared to temperature?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Rainfall is zero-inflated and highly stochastic (mostly zero on dry days, followed by unpredictable extreme spike events during cloudbursts). Temperature is continuous, smooth, and governed by thermodynamic heat capacity. ARIMA excels on continuous Gaussian-like processes; for intermittent rainfall, models must combine Markov chain transition models (rain/no-rain) with Gamma distribution intensity models.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live ARIMA Demo):</strong> In the Teacher's live demonstration fitting an ARIMA model to minimum daily temperatures for early frost warning, how were optimal (p, d, q) orders identified?</p>
                    <ul>
                        <li>A) Inspecting Autocorrelation (ACF) and Partial Autocorrelation (PACF) plots combined with minimizing Akaike Information Criterion (AIC)</li>
                        <li>B) Selecting random numbers between 1 and 100</li>
                        <li>C) Setting p, d, and q all to zero</li>
                        <li>D) Asking farmers to vote on parameters</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Analyzed ACF/PACF plots and selected model orders that minimized Akaike Information Criterion (AIC).</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> ARIMA model identification analyzes PACF cuts for AR order (p), ACF cuts for MA order (q), and compares AIC scores across candidate configurations to penalize overfitting while maximizing likelihood.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Random parameter guesses lead to divergent, uncalibrated forecasts.</li>
                                <li><strong>Why C is incorrect:</strong> ARIMA(0,0,0) is white noise with zero predictive capability.</li>
                                <li><strong>Why D is incorrect:</strong> Statistical orders are mathematical properties of data, not subjective community votes.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Early Frost Warning Studio):</strong> During the Early Frost Warning Studio, why did teams focus on the lower bound of the ARIMA 95% confidence prediction interval rather than just the point forecast?</p>
                    <ul>
                        <li>A) Because in frost risk management, if the lower 95% prediction interval drops below 0°C, emergency heaters and sprinklers must be staged even if the mean forecast is 2°C</li>
                        <li>B) Because the lower interval is always 100% accurate</li>
                        <li>C) Because temperatures cannot rise above the mean</li>
                        <li>D) To save printer ink</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Used the lower 95% interval bound to trigger defensive frost mitigation against probabilistic downside freeze risk.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Agricultural frost protection is risk-averse: a single freeze kills an orchard. Operating on the lower 95% confidence bound accounts for atmospheric forecast uncertainty, alerting growers before temperatures dip below freezing.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> A 95% interval implies a 5% tail risk; it is not 100% deterministic.</li>
                                <li><strong>Why C is incorrect:</strong> Temperatures fluctuate symmetrically around point forecasts.</li>
                                <li><strong>Why D is incorrect:</strong> Digital monitoring dashboards do not consume printer ink.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task fitting an ARIMA model on temperature, which pmdarima function automated the iterative grid search for optimal seasonal orders (SARIMAX)?</p>
                    <ul>
                        <li>A) pmdarima.auto_arima(series, seasonal=True, m=12, stepwise=True, suppress_warnings=True)</li>
                        <li>B) pmdarima.predict_all()</li>
                        <li>C) pmdarima.clean_weather()</li>
                        <li>D) pmdarima.delete_series()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>pmdarima.auto_arima() performed automated stepwise AIC minimization to select optimal SARIMAX orders.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> <code>auto_arima</code> executes the automated Hyndman-Khandakar algorithm, conducting unit root tests, differencing, and stepwise search across AR, MA, and seasonal components to identify the model with lowest AIC.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> predict_all is a fictitious method.</li>
                                <li><strong>Why C is incorrect:</strong> auto_arima fits statistical models; it does not clean raw weather datasets.</li>
                                <li><strong>Why D is incorrect:</strong> delete_series is an invalid function.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> How does Principal Component Analysis (PCA) combined with K-Means clustering allow meteorologists to discover new agro-climatic zones across thousands of weather stations?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Dimensionality reduction and pattern discovery! 50 weather stations each record 12 monthly temperatures, 12 monthly rainfalls, humidity, and solar radiation (hundreds of variables). PCA compresses these correlated multi-month metrics into 2 or 3 principal climate components (e.g., PC1 = Annual Heat Load, PC2 = Monsoon Intensity). K-Means then clusters stations into distinct agro-climatic zones based on natural climate topography without administrative district borders.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why is identifying 'Climate Shift Zone Migration' critical for long-term farm planning and orchard investments?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Perennial fruit orchards (mango, apple, coffee) take 5–10 years to reach full bearing and live for 30–50 years. Due to climate change, historic weather clusters are shifting (e.g., apple chilling-hour zones migrating up mountains, or semi-arid zones expanding). Recognizing cluster migration allows farmers to plant climate-resilient rootstocks adapted to the climate of 2040 rather than 1990.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Climate Clustering Demo):</strong> In the Teacher's live demonstration clustering 100 weather stations across Karnataka, what technique determined the optimal number of climate clusters (k)?</p>
                    <ul>
                        <li>A) The Elbow Method (inertia inflection point) combined with Silhouette Analysis to evaluate cluster separation</li>
                        <li>B) Picking k = 100 so every station has its own cluster</li>
                        <li>C) Choosing k equal to the number of political parties</li>
                        <li>D) Setting k = 0</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Used the Elbow Method on within-cluster inertia alongside Silhouette Scores to locate optimal k.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Selecting optimal clustering k balances compactness (minimizing inertia on the elbow curve) with separation (maximizing silhouette coefficients), ensuring natural agro-climatic grouping without over-fragmentation.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> k = N trivializes clustering, providing zero generalization or data compression.</li>
                                <li><strong>Why C is incorrect:</strong> Political dynamics have zero scientific connection to meteorology.</li>
                                <li><strong>Why D is incorrect:</strong> k must be an integer >= 1; k = 0 is mathematically invalid in K-Means.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Drought Vulnerability Clustering Studio):</strong> During the Vulnerability Clustering Studio, what unsupervised cluster was flagged as having the highest agricultural drought risk?</p>
                    <ul>
                        <li>A) The cluster exhibiting low total annual precipitation, high coefficient of variation in monsoon onset, and high average vapor pressure deficit (VPD)</li>
                        <li>B) The cluster located in tropical coastal rainforests</li>
                        <li>C) The cluster with zero days of sunlight</li>
                        <li>D) The cluster with continuous snow cover</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>The cluster with low precipitation, erratic monsoon onset variance, and high atmospheric vapor pressure deficit.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Drought vulnerability is multidimensional: low rainfall combined with high temporal volatility (unreliable onset) and high atmospheric evaporative suction (high VPD) creates acute agrarian risk.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Coastal rainforests have high humidity and heavy rainfall, minimizing drought vulnerability.</li>
                                <li><strong>Why C is incorrect:</strong> Continuous zero sunlight does not exist in agricultural farming zones.</li>
                                <li><strong>Why D is incorrect:</strong> Snow cover reflects alpine/polar climates, not tropical drought vulnerability.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task clustering weather stations, which Scikit-Learn pipeline standardized weather metrics, reduced dimensions with PCA, and clustered with K-Means?</p>
                    <ul>
                        <li>A) Pipeline([('scaler', StandardScaler()), ('pca', PCA(n_components=2)), ('kmeans', KMeans(n_clusters=4, random_state=42))])</li>
                        <li>B) Pipeline([('kmeans', KMeans())]) without scaling</li>
                        <li>C) StandardScaler() alone</li>
                        <li>D) PCA(n_components=0)</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Chained StandardScaler, PCA(n_components=2), and KMeans in a Scikit-Learn Pipeline.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Clustering spatial weather stations requires feature standardization (preventing rainfall in mm from dominating temperature in °C), PCA dimensionality reduction, and K-Means partitioning in an integrated pipeline.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Clustering unscaled features allows large-scale variables to distort Euclidean distances completely.</li>
                                <li><strong>Why C is incorrect:</strong> StandardScaler standardizes features, but performs no dimensionality reduction or clustering.</li>
                                <li><strong>Why D is incorrect:</strong> PCA requires at least 1 principal component.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why do agricultural commodity prices at APMC Mandis exhibit the famous 'Cobweb Phenomenon' (violent multi-year boom-and-bust price cycles)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Lagged supply response! When tomato prices spike to Rs. 100/kg due to a shortage, every farmer rushes to plant tomatoes next season. Three months later, a massive supply glut hits the mandi simultaneously. Prices crash to Rs. 2/kg, and farmers dump tomatoes on roads. Discouraged farmers refuse to plant tomatoes next season, causing a supply shortage that triggers the next massive price spike. AI forecasting models help farmers anticipate gluts before planting.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How do Bollinger Bands help a farmer cooperative decide whether to sell their harvested grain immediately or store it in a warehouse?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Bollinger Bands plot a 20-day moving average flanked by upper and lower bands set 2 standard deviations away. If the current mandi price touches or punches through the lower band, the market is temporarily oversold (harvest glut peak). If seasonal forecasts indicate prices will rebound toward the mean within 60 days and storage costs are low, the cooperative profits by holding grain in cold storage rather than panic selling.</p>
                        </div>
                    </details>
                </div>
            </div>
            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Mandi Price Trend Demo):</strong> In the Teacher's live demonstration of APMC Mandi price analysis, what technical indicator signaled that onion prices had entered an oversold harvest glut condition?</p>
                    <ul>
                        <li>A) The daily mandi modal price broke below the lower Bollinger Band (2 standard deviations below the 20-day moving average)</li>
                        <li>B) The price became exactly zero rupees</li>
                        <li>C) The mandi closed permanently</li>
                        <li>D) All onions turned green</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Modal price dropped below the lower Bollinger Band, indicating an extreme statistical oversold condition.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Bollinger Bands measure volatility: prices falling below the lower band (Mean - 2*sigma) represent extreme downward statistical deviations typical of peak post-harvest harvest gluts, signaling potential price recovery.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Commodity prices reflect market value and do not hit zero in organized mandis.</li>
                                <li><strong>Why C is incorrect:</strong> Periodic harvest gluts do not cause permanent market closure.</li>
                                <li><strong>Why D is incorrect:</strong> Onion skin color is unrelated to econometric technical indicators.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Mandi Storage Strategy Studio):</strong> During the Mandi Storage Strategy Studio, how did teams determine the break-even decision between selling harvested maize immediately versus renting warehouse space for 90 days?</p>
                    <ul>
                        <li>A) Net Profit = Predicted_Price_90d - Current_Price - (Monthly_Warehouse_Rent * 3) - Storage_Shrinkage_Loss - Working_Capital_Interest; store only if Net Profit > 0</li>
                        <li>B) Storing indefinitely regardless of storage fees</li>
                        <li>C) Selling immediately regardless of market price</li>
                        <li>D) Guessing based on personal superstition</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Calculated net gain after warehouse rent, physical grain shrinkage loss, and capital financing interest.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Grain post-harvest economics requires accounting for carrying costs: physical warehouse rent, moisture shrinkage (weight loss), spoilage risk, and the opportunity cost/interest on holding inventory.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Indefinite storage incurs compounding rental costs that eventually exceed grain value.</li>
                                <li><strong>Why C is incorrect:</strong> Panic selling during harvest gluts locks in the lowest prices of the entire year.</li>
                                <li><strong>Why D is incorrect:</strong> Agronomic and financial management relies on rigorous quantitative accounting, not superstition.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task building a Moving Average Price Predictor, which Pandas code calculated 20-day and 50-day Simple Moving Averages (SMA) to identify golden crossover trading signals?</p>
                    <ul>
                        <li>A) df['sma_20'] = df['modal_price'].rolling(20).mean(); df['sma_50'] = df['modal_price'].rolling(50).mean()</li>
                        <li>B) df['sma_20'] = df['modal_price'] * 20</li>
                        <li>C) df['modal_price'].cumsum()</li>
                        <li>D) df['modal_price'].mean()</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Computed 20-day and 50-day rolling means using rolling().mean().</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Calculating rolling window means over 20-day (short term) and 50-day (medium term) spans creates technical moving averages; when SMA-20 crosses above SMA-50, it generates a bullish price momentum signal.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Multiplying price by 20 magnifies prices into astronomical numbers.</li>
                                <li><strong>Why C is incorrect:</strong> cumsum computes progressive cumulative totals, not moving averages.</li>
                                <li><strong>Why D is incorrect:</strong> mean() computes a single static scalar average across the entire multi-year dataset.</li>
                            </ul>
                        </div>
                    </details>
                </div>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Why is consumer demand for perishable vegetables (e.g., coriander, spinach, tomatoes) in urban metros far harder to forecast than demand for durable grains (e.g., wheat, rice)?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Perishability and extreme demand inelasticity! Green leafy vegetables have a post-harvest shelf life of only 24–48 hours without cold chains. Durable grains can be stored in silos for years to buffer demand shocks. Vegetable demand spikes wildly on specific festival days (Diwali, Eid, weddings) and collapses during heatwaves when spoilage accelerates, requiring high-frequency predictive logistics.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> How do 'Calendar Regressors' (day-of-week, festival indicators, payday cycles) improve food supply chain machine learning models?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Human food purchasing habits are strongly periodic: supermarket footfall surges on weekends, temple visits increase demand for flowers and coconuts on Tuesdays and Fridays, and monthly salary disbursements drive bulk grocery purchases during the first week of each month. Embedding explicit cyclical calendar indicators allows algorithms to anticipate predictable demand surges.</p>
                        </div>
                    </details>
                </div>
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
        <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Demand Forecasting Demo):</strong> In the Teacher's live demonstration forecasting urban tomato demand with LightGBM, what engineered calendar feature captured the massive surge in restaurant vegetable consumption?</p>
                    <ul>
                        <li>A) A boolean 'is_weekend' indicator (Friday-Sunday) combined with proximity to major public holidays and festive calendar flags</li>
                        <li>B) The name of the delivery truck driver</li>
                        <li>C) The phase of the moon alone</li>
                        <li>D) The color of the vegetable crates</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Engineered weekend indicators and holiday/festival proximity features captured consumer purchasing cycles.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Food demand is heavily influenced by human institutional schedules: weekend dining out and holiday feasts drive predictable commercial kitchen demand surges that calendar features capture cleanly.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Driver identity has zero causal influence on city-wide consumer vegetable consumption.</li>
                                <li><strong>Why C is incorrect:</strong> Lunar phases have minimal impact on modern urban grocery demand.</li>
                                <li><strong>Why D is incorrect:</strong> Crate color is an operational packaging detail with no consumer demand signal.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Supply Chain Waste Reduction Studio):</strong> During the Perishable Food Waste Studio, how did teams balance the penalty of over-ordering (spoilage waste) versus under-ordering (stockout lost sales)?</p>
                    <ul>
                        <li>A) By training models with an Asymmetric Pinball Loss (Quantile Regression) tuned to optimize the 75th percentile of demand, minimizing expensive restaurant stockouts</li>
                        <li>B) By ordering zero vegetables every day</li>
                        <li>C) By ordering 1,000,000 tons of vegetables every day regardless of demand</li>
                        <li>D) By deleting inventory spreadsheets</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Used Quantile Regression (Pinball Loss) to optimize specific percentiles balancing spoilage cost vs stockout penalty.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Standard MSE treats over-prediction and under-prediction symmetrically. In perishable supply chains, stockouts lose customers while over-ordering causes biological rotting. Quantile regression balances these asymmetric business costs.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Ordering zero halts supply chain operations completely.</li>
                                <li><strong>Why C is incorrect:</strong> Ordering 1,000,000 tons guarantees massive rotting waste and catastrophic financial loss.</li>
                                <li><strong>Why D is incorrect:</strong> Deleting spreadsheets destroys inventory management.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task modeling seasonal demand peaks, which Scikit-Learn transformer converted cyclical calendar months (1 to 12) into continuous periodic signals?</p>
                    <ul>
                        <li>A) Sine and Cosine trigonometric encoding: sin(2*pi*month/12) and cos(2*pi*month/12)</li>
                        <li>B) Ordinal integer encoding (1, 2, 3... 12)</li>
                        <li>C) One-hot encoding with 500 dummy columns</li>
                        <li>D) Converting months into random characters</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Cyclical Sine-Cosine encoding preserved the circular temporal continuity between December (12) and January (1).</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Integer encoding treats month 12 (December) and month 1 (January) as maximally distant (distance 11), when biologically they are adjacent winter months. Sine-Cosine encoding maps months onto a circle, preserving continuity.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Integer encoding introduces a false linear distance gap between December and January.</li>
                                <li><strong>Why C is incorrect:</strong> One-hot encoding creates redundant feature dimensions without preserving cyclical distance.</li>
                                <li><strong>Why D is incorrect:</strong> Random characters eliminate all temporal meaning.</li>
                            </ul>
                        </div>
                    </details>
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

<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> What is 'Spatial Price Transmission' between agricultural wholesale markets, and why does a price spike in Delhi's Azadpur Mandi cause tomato prices to surge 1,500 km away in Kolar, Karnataka 48 hours later?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Spatial arbitrage and market integration! Wholesale agri-commodities trade across a national network. When supply drops in North India, wholesale traders dispatch refrigerated trucks to southern production hubs (like Kolar) offering higher prices. This inter-state purchasing pulls local supply out of Kolar, transmitting the price surge along the logistics corridor within the 48-hour transport transit time.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why do smallholder farmers often capture only 20–30% of the retail price paid by urban consumers for vegetables, and how does AI disintermediation alter this equation?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> The traditional agricultural supply chain has 5–7 intermediaries: village aggregators, commission agents, primary wholesale mandis, secondary terminal markets, semi-wholesalers, and street vendors. Each tier incurs transport costs, 10–15% post-harvest spoilage loss, and profit margins. AI-enabled direct Farm-to-Fork platforms use demand forecasting to bypass middlemen, sourcing directly from farmers to deliver 60%+ farmgate realization.</p>
                        </div>
                    </details>
                </div>
            </div>
            <div class="quiz-section">
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Spatial Arbitrage Demo):</strong> In the Teacher's live demonstration of spatial price transmission between regional mandis, what mathematical condition determined whether inter-market arbitrage was economically viable?</p>
                    <ul>
                        <li>A) Spatial Price Spread: Price_Destination - Price_Origin > Freight_Cost + Handling_Fee + In-Transit_Spoilage_Loss</li>
                        <li>B) Destination price is lower than origin price</li>
                        <li>C) The two mandis speak the same regional language</li>
                        <li>D) Freight cost is infinite</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Arbitrage is profitable only when inter-mandi price spread exceeds total logistics, transit spoilage, and handling costs.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Spatial economic equilibrium dictates that commodities flow from surplus to deficit regions only when the price disparity exceeds the physical transaction friction (diesel freight, loading labor, and transit shrinkage/spoilage).</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Dispatching goods to a lower-priced market guarantees immediate trading losses.</li>
                                <li><strong>Why C is incorrect:</strong> Interstate trade flows operate across different linguistic states via common economic incentives.</li>
                                <li><strong>Why D is incorrect:</strong> Infinite freight cost prevents any physical transport.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Value Chain Disintermediation Studio):</strong> During the Value Chain Studio, what primary efficiency driver allowed direct digital B2B farm platforms to deliver higher prices to farmers while lowering costs for urban retailers?</p>
                    <ul>
                        <li>A) Eliminating 4 intermediary handling tiers and utilizing demand forecasting to reduce perishable post-harvest spoilage from 25% down to under 5%</li>
                        <li>B) Forcing farmers to work without payment</li>
                        <li>C) Selling artificial synthetic plastic vegetables</li>
                        <li>D) Evading all transport toll taxes</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Disintermediated 4 handling tiers and leveraged predictive demand to cut post-harvest waste from 25% to <5%.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Traditional physical supply chains destroy value through redundant physical loading/unloading and high spoilage. Direct digital pipelines connect farm harvesting directly to urban distribution centers based on algorithmic pre-orders.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Direct platforms pay farmers higher, guaranteed market-linked prices.</li>
                                <li><strong>Why C is incorrect:</strong> Platforms distribute fresh, certified agricultural produce.</li>
                                <li><strong>Why D is incorrect:</strong> Commercial logistics fleets pay all standard legal national highway tolls.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Individual Colab task analyzing Inter-Mandi Price Disparities, which econometric technique tested whether prices in Kolar and Delhi were cointegrated in long-run equilibrium?</p>
                    <ul>
                        <li>A) Engle-Granger two-step cointegration test: checking if the residuals of regressing Price_Delhi on Price_Kolar are stationary</li>
                        <li>B) Calculating the square root of the price sum</li>
                        <li>C) Checking if both price numbers are even</li>
                        <li>D) Plotting an empty graph</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Engle-Granger cointegration test verified that price residuals were stationary, proving long-run market integration.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Two non-stationary price series are cointegrated if a linear combination of them is stationary, proving that although daily prices wander, spatial arbitrage prevents them from drifting apart indefinitely.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Square roots of sums do not test cointegration relationships.</li>
                                <li><strong>Why C is incorrect:</strong> Even or odd integer values have zero econometric relevance.</li>
                                <li><strong>Why D is incorrect:</strong> Empty graphs display no diagnostic statistical information.</li>
                            </ul>
                        </div>
                    </details>
                </div>
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
