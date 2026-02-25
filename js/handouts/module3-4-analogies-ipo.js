// Module 3 & 4 Enhanced Content with Analogies and IPO Models
// Analogy-based introductions and Input-Processing-Output interpretations

const module3_4_AnalogiesIPO = {

    // ============================================
    // MODULE 3: AI/ML Applications in Agriculture
    // ============================================

    'm3-t1-analogy-ipo': {
        analogy: `
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: Feature Engineering</h2>
                <div class="analogy-box">
                    <p><strong>Feature Engineering = Preparing Soil Before Planting</strong></p>
                    <p>Just as a farmer prepares soil by:</p>
                    <ul>
                        <li>Testing pH levels (scaling)</li>
                        <li>Adding nutrients (creating new features)</li>
                        <li>Removing rocks and weeds (cleaning data)</li>
                        <li>Mixing different soil types (combining features)</li>
                    </ul>
                    <p>A data scientist prepares raw data by engineering features that help ML models "grow" better predictions!</p>
                </div>
            </div>
        `,
        ipo: `
            <div class="ipo-model">
                <h2>📊 Input-Processing-Output Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li>Raw agricultural data (temperature, humidity, rainfall)</li>
                            <li>Categorical variables (crop type, soil type)</li>
                            <li>Temporal data (dates, seasons)</li>
                            <li>Spatial data (field locations)</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Temporal Features:</strong> Extract month, day_of_year, is_monsoon</li>
                            <li><strong>Aggregated Features:</strong> temp_humidity_ratio, heat_index</li>
                            <li><strong>Scaling:</strong> StandardScaler for numerical features</li>
                            <li><strong>Encoding:</strong> LabelEncoder for ordinal, One-hot for nominal</li>
                            <li><strong>Domain Features:</strong> GDD, NDVI, soil moisture deficit</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li>Engineered feature matrix (scaled, encoded)</li>
                            <li>15+ new features from 5 original columns</li>
                            <li>Ready for ML model training</li>
                            <li>Improved prediction accuracy (15-30% boost)</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ipo-code-example">
                    <h4>💻 Code Flow:</h4>
                    <pre><code>
INPUT: data = pd.DataFrame({temperature, humidity, rainfall, crop_type, soil_type})
       ↓
PROCESSING: 
  1. data['month'] = data['date'].dt.month  # Temporal
  2. data['temp_humidity_ratio'] = data['temperature'] / data['humidity']  # Aggregated
  3. scaler.fit_transform(numerical_cols)  # Scaling
  4. pd.get_dummies(data['soil_type'])  # Encoding
       ↓
OUTPUT: Enhanced dataset with 15+ features, ready for ML
                    </code></pre>
                </div>
            </div>
        `
    },

    'm3-t2-analogy-ipo': {
        analogy: `
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: Crop Yield Prediction</h2>
                <div class="analogy-box">
                    <p><strong>Yield Prediction = Weather Forecasting for Harvest</strong></p>
                    <p>A farmer looks at:</p>
                    <ul>
                        <li>☀️ Weather patterns (like our temperature data)</li>
                        <li>💧 Rainfall history (like our precipitation features)</li>
                        <li>🌱 Soil quality (like our soil features)</li>
                        <li>📅 Past harvests (like our historical yield data)</li>
                    </ul>
                    <p>ML models do the same but with mathematical precision, analyzing thousands of data points to predict harvest outcomes!</p>
                </div>
            </div>
        `,
        ipo: `
            <div class="ipo-model">
                <h2>📊 Input-Processing-Output Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li>Weather: avg_temp, total_rainfall, sunshine_hours, humidity</li>
                            <li>Soil: pH, nitrogen, phosphorus, potassium, organic_matter</li>
                            <li>Management: seed_rate, fertilizer_amount, irrigation_frequency</li>
                            <li>Spatial: field_size, elevation</li>
                            <li>Target: yield_kg_per_ha (historical data)</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Feature Engineering:</strong> GDD, water_stress_index, nutrient_balance</li>
                            <li><strong>Train-Test Split:</strong> 80% training, 20% testing</li>
                            <li><strong>Model Training:</strong>
                                <ul>
                                    <li>Random Forest (n_estimators=100, max_depth=15)</li>
                                    <li>Gradient Boosting (learning_rate=0.1)</li>
                                </ul>
                            </li>
                            <li><strong>Ensemble:</strong> Average predictions from both models</li>
                            <li><strong>Evaluation:</strong> RMSE, MAE, R² score</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li>Predicted yield: 4,500 kg/ha (±300 kg/ha)</li>
                            <li>Model accuracy: R² = 0.85 (85% variance explained)</li>
                            <li>Feature importance ranking</li>
                            <li>Confidence intervals for predictions</li>
                            <li>Actionable insights for farmers</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ipo-code-example">
                    <h4>💻 Code Flow:</h4>
                    <pre><code>
INPUT: X = features (weather, soil, management)
       y = target (yield_kg_per_ha)
       ↓
PROCESSING:
  1. X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
  2. rf_model.fit(X_train, y_train)  # Train Random Forest
  3. gb_model.fit(X_train, y_train)  # Train Gradient Boosting
  4. predictions = (rf_pred + gb_pred) / 2  # Ensemble
  5. rmse = sqrt(mean_squared_error(y_test, predictions))
       ↓
OUTPUT: Yield predictions with 85% accuracy, feature importance, insights
                    </code></pre>
                </div>
            </div>
        `
    },

    'm3-t8-analogy-ipo': {
        analogy: `
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: Computer Vision</h2>
                <div class="analogy-box">
                    <p><strong>Computer Vision = A Farmer's Trained Eye</strong></p>
                    <p>An experienced farmer can:</p>
                    <ul>
                        <li>👁️ Spot diseased leaves from healthy ones</li>
                        <li>🌾 Identify crop maturity by color</li>
                        <li>🐛 Detect pest damage patterns</li>
                        <li>💧 Assess water stress from leaf appearance</li>
                    </ul>
                    <p>Computer vision teaches machines to "see" like an expert farmer, but faster and more consistently across thousands of images!</p>
                </div>
            </div>
        `,
        ipo: `
            <div class="ipo-model">
                <h2>📊 Input-Processing-Output Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li>Images: RGB format (256×256 pixels)</li>
                            <li>Color channels: Red, Green, Blue (0-255 values)</li>
                            <li>Dataset: 10,000 crop images</li>
                            <li>Labels: Healthy, Diseased, Pest-damaged</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Preprocessing:</strong>
                                <ul>
                                    <li>Resize to 224×224</li>
                                    <li>Normalize pixel values (0-1)</li>
                                    <li>Convert RGB to different color spaces (HSV, LAB)</li>
                                </ul>
                            </li>
                            <li><strong>Augmentation:</strong> Rotation, flip, zoom, brightness</li>
                            <li><strong>Feature Extraction:</strong> Edge detection, texture analysis</li>
                            <li><strong>Model:</strong> CNN or pre-trained ResNet50</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li>Classification: "Tomato Blight" (95% confidence)</li>
                            <li>Bounding box: Disease location on leaf</li>
                            <li>Severity score: 7/10</li>
                            <li>Recommendation: "Apply fungicide within 48 hours"</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ipo-code-example">
                    <h4>💻 Code Flow:</h4>
                    <pre><code>
INPUT: image = cv2.imread('tomato_leaf.jpg')  # RGB image
       ↓
PROCESSING:
  1. image = cv2.resize(image, (224, 224))  # Resize
  2. image = image / 255.0  # Normalize
  3. image_hsv = cv2.cvtColor(image, cv2.COLOR_RGB2HSV)  # Color space
  4. features = model.predict(image)  # CNN feature extraction
  5. prediction = classifier.predict(features)  # Classification
       ↓
OUTPUT: "Tomato Blight detected (95% confidence), Severity: High"
                    </code></pre>
                </div>
            </div>
        `
    },

    'm3-t9-analogy-ipo': {
        analogy: `
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: CNN (Convolutional Neural Networks)</h2>
                <div class="analogy-box">
                    <p><strong>CNN = Magnifying Glass with Memory</strong></p>
                    <p>Imagine examining a field with a magnifying glass:</p>
                    <ul>
                        <li>🔍 <strong>Convolution:</strong> Scan small patches (like looking at 3×3 inch sections)</li>
                        <li>📏 <strong>Pooling:</strong> Summarize findings (note the worst damage in each area)</li>
                        <li>🧠 <strong>Learning:</strong> Remember patterns (this brown spot = fungus)</li>
                        <li>🎯 <strong>Classification:</strong> Make decision (this field needs treatment)</li>
                    </ul>
                    <p>CNNs scan images systematically, learning to recognize patterns just like you'd learn to spot crop diseases!</p>
                </div>
            </div>
        `,
        ipo: `
            <div class="ipo-model">
                <h2>📊 Input-Processing-Output Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li>Image tensor: (224, 224, 3) - Height × Width × Channels</li>
                            <li>Pixel values: 0-255 normalized to 0-1</li>
                            <li>Batch size: 32 images at a time</li>
                            <li>Classes: 38 plant disease categories</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Conv Layer 1:</strong> 32 filters (3×3) → Extract edges</li>
                            <li><strong>MaxPooling 1:</strong> (2×2) → Reduce size by half</li>
                            <li><strong>Conv Layer 2:</strong> 64 filters (3×3) → Extract textures</li>
                            <li><strong>MaxPooling 2:</strong> (2×2) → Further reduction</li>
                            <li><strong>Conv Layer 3:</strong> 128 filters (3×3) → Complex patterns</li>
                            <li><strong>Flatten:</strong> Convert to 1D vector</li>
                            <li><strong>Dense Layer:</strong> 256 neurons → Learn combinations</li>
                            <li><strong>Output Layer:</strong> 38 neurons (softmax) → Probabilities</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li>Class probabilities: [0.02, 0.01, 0.93, ...] (38 values)</li>
                            <li>Predicted class: "Tomato Late Blight" (index 2)</li>
                            <li>Confidence: 93%</li>
                            <li>Training accuracy: 96%</li>
                            <li>Validation accuracy: 94%</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ipo-code-example">
                    <h4>💻 Code Flow:</h4>
                    <pre><code>
INPUT: X_train shape: (10000, 224, 224, 3)
       y_train shape: (10000, 38)  # One-hot encoded
       ↓
PROCESSING:
  model = Sequential([
    Conv2D(32, (3,3), activation='relu', input_shape=(224,224,3)),
    MaxPooling2D(2,2),
    Conv2D(64, (3,3), activation='relu'),
    MaxPooling2D(2,2),
    Conv2D(128, (3,3), activation='relu'),
    Flatten(),
    Dense(256, activation='relu'),
    Dense(38, activation='softmax')
  ])
  model.fit(X_train, y_train, epochs=20, batch_size=32)
       ↓
OUTPUT: Trained model with 94% accuracy, ready for disease detection
                    </code></pre>
                </div>
            </div>
        `
    },

    // ============================================
    // MODULE 4: Capstone Project & Evaluation
    // ============================================

    'm4-t1-analogy-ipo': {
        analogy: `
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: Problem Definition</h2>
                <div class="analogy-box">
                    <p><strong>Problem Definition = Diagnosing Crop Issues</strong></p>
                    <p>Before treating a sick crop, a farmer must:</p>
                    <ul>
                        <li>🔍 Identify the exact problem (not just "plants look bad")</li>
                        <li>📊 Measure the scope (how many acres affected?)</li>
                        <li>🎯 Set clear goals (reduce disease by 80%)</li>
                        <li>⏰ Define timeline (within this growing season)</li>
                    </ul>
                    <p>Similarly, ML projects need specific, measurable problem statements before building solutions!</p>
                </div>
            </div>
        `,
        ipo: `
            <div class="ipo-model">
                <h2>📊 Input-Processing-Output Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li>Stakeholder needs: "We need better crop management"</li>
                            <li>Current challenges: Manual disease detection, 30% crop loss</li>
                            <li>Available resources: 5000 images, 3 months timeline</li>
                            <li>Constraints: Must work on mobile devices</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>SMART Analysis:</strong>
                                <ul>
                                    <li>Specific: Detect tomato blight from leaf images</li>
                                    <li>Measurable: Achieve 90% accuracy</li>
                                    <li>Achievable: With available dataset and tools</li>
                                    <li>Relevant: Reduces crop loss by 20%</li>
                                    <li>Time-bound: Deploy within 3 months</li>
                                </ul>
                            </li>
                            <li><strong>Scope Definition:</strong> MVP with 5 disease classes</li>
                            <li><strong>Success Metrics:</strong> Accuracy, F1-score, inference time</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Problem Statement:</strong> "Build a mobile app that detects tomato blight from leaf photos with 90% accuracy within 2 seconds"</li>
                            <li><strong>Success Criteria:</strong> 90% accuracy, <2s inference, works offline</li>
                            <li><strong>Deliverables:</strong> Trained model, mobile app, documentation</li>
                            <li><strong>Timeline:</strong> 12 weeks with weekly milestones</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },

    'm4-t10-analogy-ipo': {
        analogy: `
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: Exploratory Data Analysis (EDA)</h2>
                <div class="analogy-box">
                    <p><strong>EDA = Walking Through Your Field</strong></p>
                    <p>Before planting, a farmer walks the field to check:</p>
                    <ul>
                        <li>🌍 Soil quality (like checking data distributions)</li>
                        <li>💧 Drainage patterns (like finding correlations)</li>
                        <li>🪨 Rocks and obstacles (like detecting outliers)</li>
                        <li>📏 Field boundaries (like understanding data ranges)</li>
                    </ul>
                    <p>EDA is your "field walk" through data - understanding it before building models!</p>
                </div>
            </div>
        `,
        ipo: `
            <div class="ipo-model">
                <h2>📊 Input-Processing-Output Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li>Raw dataset: crop_data.csv (10,000 rows × 15 columns)</li>
                            <li>Features: temperature, rainfall, soil_pH, yield</li>
                            <li>Mixed types: numerical, categorical, dates</li>
                            <li>Unknown quality: may have missing values, outliers</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Statistical Summary:</strong>
                                <ul>
                                    <li>df.describe() → mean, std, min, max</li>
                                    <li>df.info() → data types, null counts</li>
                                </ul>
                            </li>
                            <li><strong>Visualizations:</strong>
                                <ul>
                                    <li>Histograms → distribution shapes</li>
                                    <li>Box plots → outlier detection</li>
                                    <li>Scatter plots → relationships</li>
                                    <li>Correlation heatmap → feature dependencies</li>
                                </ul>
                            </li>
                            <li><strong>Quality Checks:</strong>
                                <ul>
                                    <li>Missing values: 5% in rainfall column</li>
                                    <li>Outliers: 3 extreme yield values</li>
                                    <li>Duplicates: 12 duplicate rows found</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Insights:</strong>
                                <ul>
                                    <li>Yield strongly correlated with rainfall (r=0.75)</li>
                                    <li>Temperature shows bimodal distribution</li>
                                    <li>5% missing data in rainfall column</li>
                                    <li>3 outliers need investigation</li>
                                </ul>
                            </li>
                            <li><strong>Action Items:</strong>
                                <ul>
                                    <li>Impute missing rainfall values</li>
                                    <li>Remove/cap outliers</li>
                                    <li>Feature engineer: rainfall × temperature interaction</li>
                                </ul>
                            </li>
                            <li><strong>Visualizations:</strong> 10 plots saved for report</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ipo-code-example">
                    <h4>💻 Code Flow:</h4>
                    <pre><code>
INPUT: df = pd.read_csv('crop_data.csv')  # 10,000 × 15
       ↓
PROCESSING:
  1. print(df.describe())  # Statistical summary
  2. print(df.isnull().sum())  # Missing values
  3. plt.hist(df['yield'])  # Distribution
  4. sns.heatmap(df.corr())  # Correlations
  5. outliers = df[df['yield'] > df['yield'].quantile(0.99)]
       ↓
OUTPUT: 
  - Insights: "Rainfall is key predictor (r=0.75)"
  - Issues: "5% missing data, 3 outliers"
  - Recommendations: "Impute rainfall, remove outliers"
                    </code></pre>
                </div>
            </div>
        `
    },

    'm4-t14-analogy-ipo': {
        analogy: `
            <div class="farming-analogy">
                <h2>🚜 The Farming Connection: Model Development</h2>
                <div class="analogy-box">
                    <p><strong>Model Training = Teaching a Farmhand</strong></p>
                    <p>Training an ML model is like teaching a new farmhand:</p>
                    <ul>
                        <li>📚 Show examples (training data)</li>
                        <li>✅ Correct mistakes (backpropagation)</li>
                        <li>🔄 Practice repeatedly (epochs)</li>
                        <li>📊 Test knowledge (validation)</li>
                        <li>🎓 Graduate when proficient (model ready)</li>
                    </ul>
                    <p>The model "learns" patterns from data just like a farmhand learns from experience!</p>
                </div>
            </div>
        `,
        ipo: `
            <div class="ipo-model">
                <h2>📊 Input-Processing-Output Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li>Training data: X_train (8000 samples × 20 features)</li>
                            <li>Training labels: y_train (8000 target values)</li>
                            <li>Validation data: X_val (1000 samples)</li>
                            <li>Test data: X_test (1000 samples)</li>
                            <li>Hyperparameters: learning_rate=0.001, epochs=50</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Initialization:</strong> Random weights and biases</li>
                            <li><strong>Training Loop (50 epochs):</strong>
                                <ul>
                                    <li>Forward pass: predictions = model(X_train)</li>
                                    <li>Loss calculation: loss = MSE(predictions, y_train)</li>
                                    <li>Backward pass: gradients = compute_gradients(loss)</li>
                                    <li>Weight update: weights -= learning_rate × gradients</li>
                                </ul>
                            </li>
                            <li><strong>Validation:</strong> Check performance on unseen data</li>
                            <li><strong>Early Stopping:</strong> Stop if validation loss increases</li>
                            <li><strong>Checkpointing:</strong> Save best model weights</li>
                        </ul>
                    </div>
                    
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Trained Model:</strong> model.h5 (saved weights)</li>
                            <li><strong>Training Metrics:</strong>
                                <ul>
                                    <li>Final training loss: 0.023</li>
                                    <li>Final validation loss: 0.031</li>
                                    <li>Training time: 45 minutes</li>
                                </ul>
                            </li>
                            <li><strong>Test Performance:</strong>
                                <ul>
                                    <li>Test accuracy: 92%</li>
                                    <li>Test RMSE: 245 kg/ha</li>
                                    <li>R² score: 0.88</li>
                                </ul>
                            </li>
                            <li><strong>Learning Curves:</strong> Plots showing convergence</li>
                        </ul>
                    </div>
                </div>
                
                <div class="ipo-code-example">
                    <h4>💻 Code Flow:</h4>
                    <pre><code>
INPUT: X_train, y_train, X_val, y_val
       model = create_model()
       ↓
PROCESSING:
  history = model.fit(
    X_train, y_train,
    validation_data=(X_val, y_val),
    epochs=50,
    batch_size=32,
    callbacks=[EarlyStopping(), ModelCheckpoint()]
  )
  
  # Training loop (internal):
  for epoch in range(50):
    for batch in batches:
      predictions = model.forward(batch)
      loss = compute_loss(predictions, targets)
      gradients = compute_gradients(loss)
      update_weights(gradients)
       ↓
OUTPUT: 
  - Trained model saved to 'best_model.h5'
  - Test accuracy: 92%
  - Ready for deployment
                    </code></pre>
                </div>
            </div>
        `
    }
};

// Export for use in handouts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = module3_4_AnalogiesIPO;
}
