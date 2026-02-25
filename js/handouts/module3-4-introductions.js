// Module 3 & 4 Topic Introductions
// Comprehensive introductions for all topics in Module 3 (24 topics) and Module 4 (25 topics)

const module3_4_Introductions = {
    // ========================================
    // MODULE 3: AI/ML Applications in Agriculture
    // ========================================

    'm3-t1-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Feature Engineering for Agricultural Data</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Feature engineering is the art and science of transforming raw agricultural data into meaningful inputs that machine learning models can understand and learn from effectively. In this topic, you'll discover how to create powerful features from basic measurements like temperature, humidity, and rainfall that can dramatically improve your model's predictive accuracy.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Raw sensor data from farms is like unprocessed grain - it has potential but needs refinement. A temperature reading of 32°C alone tells us little, but when combined with humidity to create a heat stress index, or compared to historical averages to detect anomalies, it becomes actionable intelligence. Good feature engineering can be the difference between a model that achieves 60% accuracy and one that reaches 95%.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've already learned about data types, pandas DataFrames, and basic statistics in Modules 1 and 2. Now we'll apply those skills specifically to agricultural contexts, creating domain-specific features that capture the unique patterns of farming data.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Transform temporal data into seasonal and cyclical features</li>
                        <li>Create interaction features that capture relationships between variables</li>
                        <li>Apply scaling and normalization techniques appropriately</li>
                        <li>Encode categorical agricultural data (crop types, soil types) for ML models</li>
                        <li>Engineer domain-specific features like Growing Degree Days and heat indices</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t2-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Crop Yield Prediction Models</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Crop yield prediction is one of the most valuable applications of machine learning in agriculture. In this topic, you'll learn to build sophisticated models using Random Forest and Gradient Boosting algorithms that can forecast harvest quantities months in advance, helping farmers make critical decisions about storage, sales, and resource allocation.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Imagine knowing your harvest quantity 3 months before harvest day. You could negotiate better prices with buyers, arrange appropriate storage facilities, plan labor requirements, and make informed financial decisions. Yield prediction models turn historical data and current conditions into actionable forecasts, reducing uncertainty in one of agriculture's most unpredictable aspects.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned about regression models and decision trees in Module 2. Now we'll advance to ensemble methods that combine multiple models for superior accuracy. The feature engineering skills from the previous topic will be crucial here.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Build Random Forest regression models for yield prediction</li>
                        <li>Implement Gradient Boosting for improved accuracy</li>
                        <li>Create ensemble models that combine multiple algorithms</li>
                        <li>Interpret feature importance to understand yield drivers</li>
                        <li>Evaluate model performance using appropriate metrics (RMSE, R²)</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t3-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Regression Techniques for Yield Forecasting</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Beyond basic linear regression, advanced techniques like Polynomial, Ridge, and Lasso regression offer powerful tools for modeling complex agricultural relationships. This topic explores how these methods handle non-linear patterns and prevent overfitting in yield forecasting scenarios.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Agricultural systems rarely follow simple linear patterns. The relationship between fertilizer and yield isn't straight - too little reduces growth, optimal amounts maximize yield, but too much can harm crops. Polynomial regression captures these curves, while Ridge and Lasso help when you have many correlated features (like multiple weather variables).</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've mastered simple linear regression in Module 2. Now we'll extend that foundation to handle more complex real-world scenarios where relationships are curved and features are numerous.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Apply polynomial regression to capture non-linear yield patterns</li>
                        <li>Use Ridge regression to handle multicollinearity in weather data</li>
                        <li>Implement Lasso regression for automatic feature selection</li>
                        <li>Choose the appropriate regression technique for different scenarios</li>
                        <li>Tune regularization parameters to prevent overfitting</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t4-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Weather Data Integration</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Weather is agriculture's most influential external factor. This topic teaches you how to access weather APIs, process meteorological data, and create meaningful features that capture weather's impact on crop growth and yield.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>A crop's success depends heavily on weather patterns - rainfall timing, temperature extremes, humidity levels, and sunshine hours all play critical roles. By integrating real-time and historical weather data into your models, you can account for the single biggest variable in agricultural outcomes.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned about APIs and data preprocessing in earlier modules. Now we'll apply those skills to work with weather services like OpenWeatherMap and create agricultural-specific weather features.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Access weather data through APIs (OpenWeatherMap, Weather.gov)</li>
                        <li>Process and clean meteorological datasets</li>
                        <li>Create derived features like Growing Degree Days and rainfall accumulation</li>
                        <li>Handle missing weather data and outliers</li>
                        <li>Integrate weather features into yield prediction models</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t5-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Soil Data Integration</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Soil is the foundation of agriculture, and understanding its properties through data is essential for precision farming. This topic covers how to collect, process, and integrate soil sensor data, laboratory analysis results, and spatial soil information into your ML models.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Soil properties like pH, nutrient levels, moisture content, and texture directly affect crop health and yield. By integrating soil data, your models can provide field-specific recommendations rather than generic advice, leading to optimized fertilizer use, better irrigation decisions, and improved yields.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>Building on your data integration skills from weather data, you'll now work with soil sensors (IoT devices), laboratory test results, and geospatial soil maps to create a comprehensive soil profile for your models.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Process data from soil moisture sensors and pH meters</li>
                        <li>Integrate laboratory soil test results (NPK, organic matter)</li>
                        <li>Work with spatial soil data and soil type classifications</li>
                        <li>Create soil health indices and composite features</li>
                        <li>Handle temporal variations in soil properties</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t6-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Crop Health Assessment</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Crop health assessment using vegetation indices like NDVI (Normalized Difference Vegetation Index) allows you to monitor plant vigor and detect stress before it's visible to the naked eye. This topic teaches you to calculate and interpret these indices from satellite or drone imagery.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Early detection of crop stress - whether from disease, pests, nutrient deficiency, or water stress - can save entire harvests. Vegetation indices provide objective, quantitative measures of plant health that can be monitored continuously across large areas, enabling timely interventions.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned about image processing basics. Now we'll apply those skills to multispectral imagery, working with near-infrared and red bands to calculate health indices that reveal what's invisible to RGB cameras.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Calculate NDVI from satellite or drone imagery</li>
                        <li>Interpret vegetation index values for crop health</li>
                        <li>Set thresholds for detecting stressed areas</li>
                        <li>Create health maps for precision agriculture</li>
                        <li>Track crop health changes over time</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t7-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Plant Disease Detection Basics</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Plant diseases cause massive crop losses worldwide. This topic introduces you to common crop diseases, their visual symptoms, and the fundamentals of how AI can detect them from leaf images, setting the foundation for building automated disease detection systems.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Early and accurate disease identification is crucial for effective treatment and preventing spread. Traditional methods require expert agronomists, but AI-powered detection can put diagnostic capabilities in every farmer's smartphone, enabling instant identification and treatment recommendations in the field.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>This topic bridges your understanding of image basics with the upcoming deep learning techniques. You'll learn to recognize disease patterns that will later be detected automatically by CNNs.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Identify common crop diseases and their visual symptoms</li>
                        <li>Understand the disease detection pipeline (capture, preprocess, analyze)</li>
                        <li>Recognize which diseases affect which crops</li>
                        <li>Appreciate the role of AI in automated disease detection</li>
                        <li>Use disease detection apps like Plantix effectively</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t8-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Computer Vision Fundamentals</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Computer vision enables machines to "see" and interpret images. This topic covers how computers represent images as numerical arrays, basic image operations using OpenCV, and color space transformations essential for agricultural image analysis.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>From disease detection to weed identification, from fruit counting to maturity assessment, computer vision is revolutionizing agriculture. Understanding how computers process images is fundamental to building any vision-based agricultural AI system.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've worked with numerical arrays in NumPy. Images are just 3D arrays of pixel values! We'll use your array manipulation skills to process and analyze agricultural images.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Understand images as numerical arrays (height × width × channels)</li>
                        <li>Load, display, and manipulate images using OpenCV</li>
                        <li>Convert between color spaces (RGB, HSV, Grayscale)</li>
                        <li>Apply basic image operations (resize, crop, blur)</li>
                        <li>Perform color-based segmentation for object detection</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t9-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Convolutional Neural Networks (CNN)</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Convolutional Neural Networks are the powerhouse behind modern image recognition. This topic introduces CNN architecture - convolutional layers that detect patterns, pooling layers that reduce complexity, and dense layers that make final classifications.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>CNNs have revolutionized agricultural image analysis, achieving human-level accuracy in disease detection, pest identification, and crop classification. Understanding CNN architecture is essential for building, training, and deploying vision-based agricultural AI systems.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned about neural networks and image basics. CNNs are specialized neural networks designed specifically for image data, using convolutional operations instead of fully connected layers to efficiently process spatial information.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Understand CNN architecture (Conv, Pool, Dense layers)</li>
                        <li>Build a simple CNN using TensorFlow/Keras</li>
                        <li>Explain how convolutional filters detect patterns</li>
                        <li>Configure CNN hyperparameters (filters, kernel size, pooling)</li>
                        <li>Train CNNs for agricultural image classification</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t10-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Image Classification with Pre-trained Models</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Transfer learning allows you to leverage powerful pre-trained models like ResNet and MobileNet, adapting them to agricultural tasks without training from scratch. This topic covers how to use these models effectively through fine-tuning and feature extraction.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Training CNNs from scratch requires massive datasets and computational resources. Pre-trained models, already trained on millions of images, can be adapted to agricultural tasks with just hundreds of images and modest computing power, making advanced AI accessible to everyone.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've built basic CNNs. Now you'll learn to use state-of-the-art architectures that took researchers years to develop and train, adapting them to your specific agricultural problems in hours instead of weeks.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Load and use pre-trained models (ResNet, MobileNet, VGG)</li>
                        <li>Apply transfer learning to agricultural image classification</li>
                        <li>Fine-tune models for specific crop disease detection</li>
                        <li>Choose appropriate pre-trained models for different scenarios</li>
                        <li>Optimize models for mobile deployment</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t11-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to PlantVillage Dataset</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>The PlantVillage dataset is the most widely used resource for training plant disease detection models, containing over 50,000 images of healthy and diseased crop leaves. This topic teaches you how to work with this dataset effectively.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Having a standardized, well-labeled dataset is crucial for developing and benchmarking disease detection models. PlantVillage provides this foundation, enabling you to build models that can identify 38 different disease classes across 14 crop species.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned about CNNs and transfer learning. Now you'll apply those skills to a real-world agricultural dataset, handling practical challenges like class imbalance and data augmentation.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Download and organize the PlantVillage dataset</li>
                        <li>Load and preprocess images for training</li>
                        <li>Handle class imbalance in disease categories</li>
                        <li>Apply data augmentation to improve model robustness</li>
                        <li>Build a multi-class disease classifier</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t12-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Pest and Weed Detection Models</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Unlike disease classification which identifies entire images, pest and weed detection requires locating and identifying multiple objects within images. This topic introduces object detection using YOLO (You Only Look Once) for real-time pest and weed identification.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Precision agriculture requires knowing not just "is there a weed?" but "where exactly are the weeds?" Object detection enables targeted herbicide application, reducing chemical use by 90% while maintaining effectiveness. For pests, it enables automated monitoring and early warning systems.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've mastered image classification. Object detection extends this by adding localization - drawing bounding boxes around detected objects. It's classification plus location prediction.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Understand object detection vs classification</li>
                        <li>Use YOLO for real-time weed detection</li>
                        <li>Train custom object detection models</li>
                        <li>Evaluate detection performance (mAP, IoU)</li>
                        <li>Deploy models for field use</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t13-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Soil Health Classification</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Soil health classification uses machine learning to categorize soil into types (clay, loamy, sandy) and health categories based on multiple parameters. This topic teaches you to build classifiers that can assess soil quality from sensor data and visual inspection.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Different crops thrive in different soil types, and soil health directly impacts yield. Automated soil classification enables rapid field assessment, helping farmers make informed decisions about crop selection, amendment needs, and management practices without expensive laboratory testing.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned classification algorithms in Module 2. Now you'll apply them to soil data, handling multi-class problems and working with both numerical sensor data and image-based classification.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Build soil type classifiers (clay, loam, sand)</li>
                        <li>Assess soil health from multiple parameters</li>
                        <li>Use both sensor data and images for classification</li>
                        <li>Evaluate classifier performance with confusion matrices</li>
                        <li>Provide soil management recommendations based on classification</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t14-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Soil Property Prediction</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Beyond classification, regression models can predict continuous soil properties like pH levels, nutrient concentrations, and moisture content. This topic covers building predictive models that estimate these critical parameters from readily available measurements.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Laboratory soil testing is expensive and time-consuming. ML models can predict soil properties from cheaper, faster measurements (like electrical conductivity or color analysis), enabling frequent monitoring and site-specific management at a fraction of the cost.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've built regression models for yield prediction. The same techniques apply to soil properties, but with different features and interpretation requirements specific to soil science.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Predict soil pH from proxy measurements</li>
                        <li>Estimate NPK nutrient levels</li>
                        <li>Model soil moisture dynamics</li>
                        <li>Validate predictions against laboratory results</li>
                        <li>Create soil property maps for precision agriculture</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t15-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Nutrient Requirement Calculation</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Calculating precise nutrient requirements involves understanding crop needs, current soil status, and nutrient dynamics. This topic teaches you to build systems that compute optimal NPK ratios and application rates for specific crops and soil conditions.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Over-fertilization wastes money and harms the environment through runoff, while under-fertilization reduces yields. Precise nutrient calculation optimizes both economic returns and environmental sustainability, applying exactly what crops need, when they need it.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned about soil property prediction. Now you'll use those predictions, combined with crop requirements and agronomic formulas, to calculate actionable fertilizer recommendations.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Calculate NPK requirements for different crops</li>
                        <li>Interpret soil test results for fertilizer planning</li>
                        <li>Account for nutrient availability and crop uptake</li>
                        <li>Generate field-specific fertilizer recommendations</li>
                        <li>Optimize nutrient timing and split applications</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t16-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Fertilizer Optimization Models</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Fertilizer optimization goes beyond basic calculations to find the best balance between yield maximization, cost minimization, and environmental impact. This topic covers optimization algorithms that recommend fertilizer strategies considering multiple objectives.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Fertilizer is often the largest variable cost in farming. Optimization models can reduce fertilizer costs by 15-30% while maintaining or improving yields, and significantly reduce environmental impact by preventing over-application and nutrient runoff.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've calculated nutrient requirements. Now you'll optimize those recommendations considering economic constraints, environmental regulations, and practical application limitations.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Build multi-objective optimization models</li>
                        <li>Balance yield, cost, and environmental goals</li>
                        <li>Create fertilizer recommendation systems</li>
                        <li>Account for fertilizer prices and availability</li>
                        <li>Evaluate optimization results and trade-offs</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t17-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Precision Irrigation Systems</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Precision irrigation uses soil moisture sensors, weather data, and ML models to deliver water exactly when and where crops need it. This topic covers building intelligent irrigation scheduling systems that optimize water use while maximizing crop health.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Water is agriculture's most critical resource, and in many regions, it's increasingly scarce. Precision irrigation can reduce water use by 30-50% while improving yields, making agriculture more sustainable and profitable in water-stressed environments.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've worked with sensor data and time series. Irrigation systems combine these with real-time decision-making, using current conditions and forecasts to schedule optimal watering.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Process soil moisture sensor data</li>
                        <li>Build irrigation scheduling algorithms</li>
                        <li>Integrate weather forecasts into irrigation decisions</li>
                        <li>Calculate water efficiency metrics</li>
                        <li>Design zone-based irrigation systems</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t18-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Water Requirement Prediction</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Predicting crop water requirements involves calculating evapotranspiration (ET), understanding crop coefficients, and building models that forecast water needs based on weather, growth stage, and soil conditions.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Knowing how much water crops will need tomorrow, next week, or next month enables proactive water management, preventing both water stress and over-irrigation. This is crucial for planning in water-limited regions and optimizing irrigation infrastructure.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned about weather data integration and regression models. Water requirement prediction combines these with agronomic formulas and crop-specific parameters.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Calculate reference evapotranspiration (ET₀)</li>
                        <li>Apply crop coefficients for different growth stages</li>
                        <li>Build water requirement prediction models</li>
                        <li>Account for rainfall and soil moisture</li>
                        <li>Generate irrigation schedules based on predictions</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t19-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Time Series Analysis Fundamentals</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Time series analysis deals with data points ordered in time - like daily temperatures, weekly rainfall, or monthly prices. This topic covers fundamental concepts including trends, seasonality, and stationarity that are essential for forecasting agricultural variables.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Agriculture is inherently temporal - crops grow over seasons, weather follows patterns, prices fluctuate with supply and demand. Understanding time series analysis enables you to forecast these patterns, anticipate changes, and make proactive decisions.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've worked with static datasets. Time series adds the temporal dimension, requiring new techniques to handle autocorrelation, trends, and seasonal patterns that don't exist in cross-sectional data.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Identify time series components (trend, seasonality, noise)</li>
                        <li>Test for stationarity using statistical tests</li>
                        <li>Analyze autocorrelation (ACF) and partial autocorrelation (PACF)</li>
                        <li>Decompose time series into components</li>
                        <li>Prepare time series data for forecasting models</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t20-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to ARIMA Models for Weather Prediction</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>ARIMA (AutoRegressive Integrated Moving Average) is a powerful statistical method for time series forecasting. This topic teaches you to build ARIMA models for predicting weather variables like temperature and rainfall, essential for agricultural planning.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>While meteorological services provide forecasts, farm-specific weather prediction using local historical data can improve short-term accuracy. ARIMA models enable you to forecast weather patterns, helping farmers plan irrigation, spraying, and harvesting activities.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned time series fundamentals. ARIMA builds on those concepts, using autoregression (past values predict future), differencing (achieving stationarity), and moving averages (smoothing noise).</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Understand ARIMA components (p, d, q parameters)</li>
                        <li>Select optimal ARIMA parameters using ACF/PACF</li>
                        <li>Build and train ARIMA models for weather forecasting</li>
                        <li>Evaluate forecast accuracy</li>
                        <li>Generate multi-step ahead predictions</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t21-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Weather Pattern Recognition</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Weather pattern recognition uses machine learning to identify recurring weather patterns, detect anomalies, and recognize seasonal cycles. This topic covers clustering and classification techniques for understanding weather behavior relevant to agriculture.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Recognizing weather patterns helps farmers anticipate conditions. Identifying "El Niño patterns" or "monsoon onset signatures" weeks in advance enables proactive crop management, risk mitigation, and resource planning.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned clustering and time series analysis. Pattern recognition combines these to find similar weather sequences and detect unusual conditions that might indicate extreme events.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Identify recurring weather patterns using clustering</li>
                        <li>Detect weather anomalies and extreme events</li>
                        <li>Recognize seasonal patterns and transitions</li>
                        <li>Build early warning systems for adverse weather</li>
                        <li>Classify weather types for agricultural decision support</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t22-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Crop Price Forecasting</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Crop prices fluctuate based on supply, demand, weather, and market dynamics. This topic teaches you to build forecasting models that predict price trends, helping farmers make informed decisions about when to sell and what to plant.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Selling at the right time can mean the difference between profit and loss. Price forecasting helps farmers time their sales, negotiate better contracts, and choose crops with favorable price outlooks, directly impacting farm profitability.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned ARIMA for weather forecasting. The same techniques apply to price data, but with additional considerations for market factors, policy changes, and global trade dynamics.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Collect and process agricultural market data</li>
                        <li>Build price forecasting models using ARIMA</li>
                        <li>Identify price trends and seasonal patterns</li>
                        <li>Account for external factors (weather, policy, exports)</li>
                        <li>Generate actionable price predictions for farmers</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t23-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Demand Prediction Models</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Demand forecasting predicts how much of a crop will be needed in future periods, considering seasonality, population growth, dietary trends, and economic factors. This topic covers building demand models that inform planting decisions.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Planting crops with strong future demand ensures good prices and quick sales. Demand forecasting helps farmers align production with market needs, reducing waste and maximizing returns by growing what consumers will want.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've forecasted prices. Demand prediction adds consumption patterns, demographic trends, and economic indicators to understand the "why" behind price movements.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Build demand forecasting models</li>
                        <li>Incorporate seasonality and trends</li>
                        <li>Account for external factors (population, income, preferences)</li>
                        <li>Predict demand for different crop types</li>
                        <li>Support crop selection decisions with demand insights</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm3-t24-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Agricultural Market Insights</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Agricultural market analysis goes beyond prices to understand supply chains, market structures, price drivers, and trade dynamics. This topic provides a holistic view of how agricultural markets function and how data science can extract actionable insights.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Understanding market dynamics helps farmers make strategic decisions - not just when to sell, but where to sell, how to add value, and which market channels offer the best returns. Market insights transform farmers from price-takers to informed market participants.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned price and demand forecasting. Market insights integrate these with supply chain analysis, competitive dynamics, and value chain understanding for comprehensive market intelligence.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Analyze agricultural supply chains</li>
                        <li>Identify key price drivers and market factors</li>
                        <li>Understand market structures and channels</li>
                        <li>Extract insights from market data</li>
                        <li>Provide strategic market recommendations to farmers</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    // ========================================
    // MODULE 4: Capstone Project & Evaluation
    // ========================================

    'm4-t1-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Problem Definition and Scoping</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Every successful AI project starts with a well-defined problem. This topic teaches you how to identify valid agricultural problems suitable for AI solutions, scope projects to be manageable, and define clear success criteria that guide development.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Many AI projects fail not because of technical issues, but because they solve the wrong problem or tackle problems too broadly. Good problem definition ensures you build something useful, achievable, and valuable - not just technically impressive but practically useless.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned numerous AI techniques throughout Modules 1-3. Now you'll learn when and how to apply them by starting with the problem, not the solution.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Identify problems suitable for AI solutions</li>
                        <li>Scope projects to Minimum Viable Product (MVP)</li>
                        <li>Define measurable success criteria</li>
                        <li>Distinguish between technical feasibility and practical value</li>
                        <li>Write clear problem statements for AI projects</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t2-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Agricultural Problem Identification</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Identifying real agricultural problems requires understanding farmer needs, assessing impact versus effort, and recognizing common pain points around water, pests, labor, and market access. This topic teaches you to find problems worth solving.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>The best AI solutions address real farmer needs, not imagined problems. By learning to identify genuine pain points through stakeholder analysis and field observation, you ensure your projects create actual value rather than impressive demos that nobody uses.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've defined problems abstractly. Now you'll learn to identify them in real agricultural contexts through farmer interviews, field visits, and stakeholder analysis.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Conduct stakeholder interviews with farmers</li>
                        <li>Assess problem impact and solution feasibility</li>
                        <li>Identify common agricultural pain points</li>
                        <li>Use the "5 Whys" technique to find root causes</li>
                        <li>Prioritize problems based on value and achievability</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t3-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Literature Review Methodology</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>A literature review surveys existing research to understand what's been done, what works, and what gaps remain. This topic teaches you to find credible sources, synthesize research on agricultural AI, and identify opportunities for innovation.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Why reinvent the wheel? Literature reviews prevent you from repeating others' mistakes and help you build on proven approaches. They also reveal research gaps - problems that haven't been solved yet - which are opportunities for your project to contribute something new.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned about various AI techniques. Now you'll learn to research how others have applied them, what results they achieved, and what limitations they encountered.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Search academic databases (Google Scholar, arXiv, IEEE)</li>
                        <li>Evaluate paper quality and relevance</li>
                        <li>Synthesize findings from multiple sources</li>
                        <li>Identify research gaps and opportunities</li>
                        <li>Manage citations and references properly</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t4-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Dataset Selection and Validation</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Choosing the right dataset is crucial for project success. This topic covers finding datasets from repositories like Kaggle and PlantVillage, assessing their quality, and understanding licensing requirements for ethical and legal use.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>A model is only as good as its training data. Poor quality data leads to poor models, regardless of algorithm sophistication. Learning to evaluate datasets for size, quality, relevance, and licensing ensures your project starts on solid ground.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've worked with provided datasets. Now you'll learn to find, evaluate, and select datasets independently, considering factors beyond just availability.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Find agricultural datasets on Kaggle, UCI, and specialized repositories</li>
                        <li>Assess dataset quality (size, labels, balance, resolution)</li>
                        <li>Understand licensing (Creative Commons, Open Source)</li>
                        <li>Validate dataset suitability for your problem</li>
                        <li>Document dataset sources and limitations</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t5-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Feasibility Analysis</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Feasibility analysis evaluates whether a project can and should be done. This topic covers assessing technical feasibility (can we build it?), economic feasibility (should we build it?), and resource requirements (do we have what we need?).</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Not every good idea is feasible. A project might be technically possible but economically unviable, or economically attractive but technically beyond current capabilities. Feasibility analysis prevents wasted effort on doomed projects.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've defined problems and reviewed literature. Feasibility analysis combines these with resource assessment to determine if your project is achievable within constraints.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Assess technical feasibility (data, compute, skills)</li>
                        <li>Evaluate economic feasibility (costs, benefits, ROI)</li>
                        <li>Identify resource requirements and constraints</li>
                        <li>Conduct risk analysis</li>
                        <li>Make go/no-go decisions based on feasibility</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t6-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Project Timeline Planning</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Effective project management requires realistic timelines with clear milestones. This topic teaches you to create Gantt charts, set achievable milestones, and build in buffers for inevitable debugging and iteration.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Projects without timelines drift endlessly. Clear schedules with milestones keep you on track, help identify delays early, and ensure you deliver on time. Buffers prevent panic when things don't go perfectly (they never do).</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've planned individual tasks. Now you'll learn to plan entire projects, coordinating multiple activities and managing dependencies between tasks.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Create Gantt charts for project visualization</li>
                        <li>Set realistic milestones (Data Ready, Prototype, Final)</li>
                        <li>Estimate task durations accurately</li>
                        <li>Build in appropriate buffers for debugging</li>
                        <li>Track progress against timeline</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t7-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Resource Allocation</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Resource allocation involves distributing computing resources, data storage, and team roles effectively. This topic covers choosing appropriate tools (Colab, local GPU, cloud), managing storage, and assigning responsibilities in team projects.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Efficient resource use maximizes productivity and minimizes costs. Using free Colab GPUs for training while reserving expensive cloud resources for deployment, or assigning tasks based on team members' strengths, ensures smooth project execution.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've used various tools individually. Now you'll learn to choose and allocate them strategically across project phases and team members.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Choose appropriate computing resources (Colab, local, cloud)</li>
                        <li>Plan data storage requirements</li>
                        <li>Assign team roles (Data Lead, Model Lead, Frontend Lead)</li>
                        <li>Allocate budget across project needs</li>
                        <li>Optimize resource utilization</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t8-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Team Collaboration Basics</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Effective collaboration requires version control (Git/GitHub), clear communication, and good documentation practices. This topic teaches you to work in teams without stepping on each other's toes or losing work.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Most real-world AI projects involve teams. Without proper collaboration tools, teams waste time on conflicts, lost work, and miscommunication. Git, documentation, and communication tools transform chaotic group work into smooth collaboration.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've worked individually. Now you'll learn to coordinate with others, managing code versions, sharing work, and maintaining project coherence across team members.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Use Git for version control (commit, push, pull, branch)</li>
                        <li>Collaborate on GitHub (pull requests, code review)</li>
                        <li>Write clear code comments and documentation</li>
                        <li>Use communication tools effectively (Slack, Discord)</li>
                        <li>Resolve merge conflicts and coordinate changes</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t9-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Data Collection Strategy</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Data collection strategy involves choosing between primary (collect yourself) and secondary (use existing) data, designing collection protocols, and ensuring data quality and diversity. This topic teaches you to plan effective data gathering.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Poor data collection leads to biased, incomplete, or low-quality datasets that doom your model from the start. A good collection strategy ensures you gather representative, high-quality data that enables accurate, generalizable models.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've selected existing datasets. Now you'll learn to collect your own data when needed, designing protocols that ensure quality, diversity, and sufficient quantity.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Choose between primary and secondary data sources</li>
                        <li>Design data collection protocols</li>
                        <li>Determine appropriate sample sizes</li>
                        <li>Ensure data diversity and representativeness</li>
                        <li>Implement quality control measures</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t10-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Exploratory Data Analysis (EDA)</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>EDA is the critical first step after data collection, involving statistical summaries, visualizations, and outlier detection to understand your data's characteristics, patterns, and potential issues before modeling.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Jumping straight to modeling without EDA is like planting without checking the soil. EDA reveals data quality issues, unexpected patterns, and insights that guide feature engineering and model selection, often preventing hours of wasted modeling effort.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned pandas and visualization tools. EDA applies these systematically to understand data before modeling, turning raw data into insights.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Generate statistical summaries (describe(), info())</li>
                        <li>Create informative visualizations (distributions, correlations)</li>
                        <li>Detect outliers and anomalies</li>
                        <li>Identify patterns and relationships</li>
                        <li>Document EDA findings for team communication</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t11-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Data Cleaning and Preprocessing</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Data cleaning transforms messy real-world data into model-ready format by handling missing values, removing outliers, normalizing scales, and correcting errors. This topic covers systematic approaches to data preparation.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Real data is always messy - sensors fail, humans make entry errors, measurements have outliers. Data scientists spend 60-80% of their time on cleaning and preprocessing because models trained on dirty data produce unreliable results.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>EDA revealed data issues. Now you'll learn to fix them systematically, applying appropriate techniques for different types of problems.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Handle missing values (imputation, deletion)</li>
                        <li>Detect and treat outliers appropriately</li>
                        <li>Normalize and standardize features</li>
                        <li>Correct data entry errors</li>
                        <li>Document cleaning decisions and their rationale</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t12-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Feature Engineering for Project</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Feature engineering for your specific project involves creating domain-specific features, applying transformations, and selecting the most relevant features. This topic teaches you to engineer features tailored to your agricultural problem.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Generic features rarely capture domain-specific patterns. Creating features that encode agricultural knowledge - like Growing Degree Days for crops or stress indices for plants - often improves model performance more than algorithm tuning.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned general feature engineering. Now you'll apply it to your specific project, creating features that capture the unique patterns of your problem.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Create domain-specific agricultural features</li>
                        <li>Apply appropriate transformations (log, polynomial)</li>
                        <li>Select relevant features using statistical methods</li>
                        <li>Validate feature importance</li>
                        <li>Document feature engineering decisions</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t13-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Algorithm Selection Justification</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Choosing the right algorithm requires understanding problem characteristics, data properties, and algorithm strengths/weaknesses. This topic teaches you to justify algorithm choices based on objective criteria rather than popularity or familiarity.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Using deep learning for a problem solvable with linear regression wastes resources. Using linear regression for a highly non-linear problem wastes time. Proper algorithm selection balances performance, interpretability, computational cost, and deployment constraints.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've learned many algorithms. Now you'll learn when to use each one, comparing options systematically and justifying your choice with evidence.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Compare algorithms systematically</li>
                        <li>Match algorithms to problem characteristics</li>
                        <li>Consider trade-offs (accuracy vs interpretability vs speed)</li>
                        <li>Justify algorithm selection with evidence</li>
                        <li>Document selection criteria and decision process</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t14-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Model Development and Training</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Model development involves implementing your chosen algorithm, setting up training loops, monitoring training progress, and iterating based on results. This topic covers the practical aspects of building and training models.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Implementation is where theory meets practice. Proper training setup with monitoring, checkpointing, and early stopping prevents wasted compute time and enables systematic improvement through iteration.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've trained models in tutorials. Now you'll implement complete training pipelines for your project, handling real-world complexities like long training times and resource constraints.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Implement complete training pipelines</li>
                        <li>Monitor training progress (loss curves, metrics)</li>
                        <li>Use checkpointing and early stopping</li>
                        <li>Debug training issues (overfitting, underfitting)</li>
                        <li>Iterate systematically to improve performance</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t15-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Hyperparameter Optimization</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Hyperparameter tuning involves finding optimal settings for learning rate, regularization, network architecture, and other parameters that aren't learned during training. This topic covers systematic tuning strategies from grid search to Bayesian optimization.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Default hyperparameters rarely give best results. Proper tuning can improve accuracy by 5-15%, often making the difference between acceptable and excellent performance. Systematic tuning is more efficient than random experimentation.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've trained models with default settings. Now you'll learn to optimize those settings systematically, understanding which parameters matter most and how to tune them efficiently.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Identify important hyperparameters for your model</li>
                        <li>Apply grid search for exhaustive tuning</li>
                        <li>Use random search for efficient exploration</li>
                        <li>Implement Bayesian optimization for complex spaces</li>
                        <li>Validate tuning results properly</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t16-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Model Validation and Testing</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Proper validation ensures your model generalizes to new data. This topic covers test set evaluation, cross-validation, and robustness testing to verify that your model performs well beyond the training data.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>A model that performs perfectly on training data but fails on new data is useless. Rigorous validation reveals whether your model has truly learned patterns or just memorized training examples, preventing deployment of unreliable models.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've split data into train/test sets. Now you'll learn comprehensive validation strategies including cross-validation, stratification, and robustness testing for reliable performance estimates.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Evaluate models on held-out test sets</li>
                        <li>Implement k-fold cross-validation</li>
                        <li>Test model robustness to input variations</li>
                        <li>Identify overfitting and underfitting</li>
                        <li>Report validation results honestly and completely</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t17-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Performance Metrics Analysis</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Choosing and interpreting appropriate metrics is crucial for understanding model performance. This topic covers selecting metrics that align with your problem goals and interpreting them correctly for stakeholder communication.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Accuracy alone can be misleading - a disease detector with 95% accuracy might miss 50% of actual diseases if the dataset is imbalanced. Understanding metrics like precision, recall, F1, and ROC-AUC ensures you measure what actually matters for your application.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've calculated basic metrics. Now you'll learn to choose appropriate metrics for your specific problem and interpret them in context of real-world consequences.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Choose metrics appropriate for your problem type</li>
                        <li>Interpret metrics in agricultural context</li>
                        <li>Understand trade-offs (precision vs recall)</li>
                        <li>Report metrics honestly and completely</li>
                        <li>Communicate results to non-technical stakeholders</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t18-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Cross-Validation and Performance Testing</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Cross-validation provides more reliable performance estimates than single train/test splits by testing on multiple data partitions. This topic covers implementing k-fold CV, interpreting results, and checking consistency across folds.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>A single train/test split might give lucky or unlucky results. Cross-validation averages performance across multiple splits, providing more reliable estimates and revealing whether performance is consistent or varies wildly with data selection.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've validated models on single test sets. Cross-validation extends this to multiple test sets, providing confidence intervals and detecting instability.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Implement k-fold cross-validation</li>
                        <li>Interpret CV results and confidence intervals</li>
                        <li>Check consistency across folds</li>
                        <li>Use stratified CV for imbalanced data</li>
                        <li>Report CV results with appropriate statistics</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t19-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Error Analysis and Troubleshooting</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Error analysis involves examining where and why your model fails, identifying patterns in errors, and using those insights to improve the model. This topic teaches systematic debugging and improvement strategies.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Understanding failures is more valuable than celebrating successes. Error analysis reveals whether your model needs more data, better features, a different algorithm, or just better hyperparameters, guiding efficient improvement efforts.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've evaluated overall performance. Error analysis digs deeper, examining individual predictions to understand failure modes and improvement opportunities.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Identify patterns in model errors</li>
                        <li>Diagnose causes of poor performance</li>
                        <li>Debug training issues systematically</li>
                        <li>Prioritize improvement efforts</li>
                        <li>Document error analysis findings</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t20-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Model Improvement Strategies</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Model improvement is an iterative process involving data augmentation, ensemble methods, architecture changes, and advanced techniques. This topic covers systematic approaches to boosting model performance.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>First models rarely achieve optimal performance. Knowing how to improve systematically - whether through more data, better features, ensemble methods, or architecture changes - is essential for reaching production-quality performance.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>Error analysis revealed weaknesses. Now you'll learn specific techniques to address those weaknesses and push performance toward your target metrics.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Apply data augmentation to increase training data</li>
                        <li>Build ensemble models for improved accuracy</li>
                        <li>Modify architectures based on error analysis</li>
                        <li>Use advanced techniques (transfer learning, attention)</li>
                        <li>Iterate systematically toward performance goals</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t21-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to API Development and Testing</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Deploying models as APIs makes them accessible to applications. This topic covers building REST APIs using Flask or FastAPI, handling requests, and testing API functionality for reliable service.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>A model in a Jupyter notebook helps nobody. APIs make models accessible to web apps, mobile apps, and other services, transforming research code into production services that deliver value.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've built models. Now you'll learn to wrap them in APIs that other applications can use, making your AI accessible beyond Python notebooks.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Build REST APIs with Flask or FastAPI</li>
                        <li>Handle image uploads and JSON requests</li>
                        <li>Serve model predictions through endpoints</li>
                        <li>Test APIs thoroughly</li>
                        <li>Document API usage for developers</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t22-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to User Interface Design</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>User interfaces make AI accessible to end users. This topic covers UI design principles, web frameworks for building interfaces, and mobile considerations for agricultural applications used in the field.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Farmers won't use complex command-line tools. A simple, intuitive interface - whether web or mobile - determines whether your AI solution gets adopted or ignored. Good UI design bridges the gap between technical capability and practical usability.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've built the AI backend. Now you'll create the frontend that farmers actually interact with, making your solution accessible to non-technical users.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Apply UI design principles (simplicity, feedback, consistency)</li>
                        <li>Build web interfaces with HTML/CSS/JavaScript</li>
                        <li>Use frameworks like Streamlit for rapid prototyping</li>
                        <li>Consider mobile-first design for field use</li>
                        <li>Test interfaces with target users</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t23-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Project Documentation Preparation</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Comprehensive documentation includes technical reports, code documentation, and user guides. This topic teaches you to document your project so others can understand, use, and build upon your work.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Undocumented projects die when you leave. Good documentation ensures your work has lasting impact, enables others to reproduce results, and demonstrates professionalism to employers and collaborators.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've documented code snippets. Now you'll create comprehensive project documentation covering problem definition, methodology, results, and usage instructions.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Write clear technical reports</li>
                        <li>Document code with comments and docstrings</li>
                        <li>Create user guides for non-technical users</li>
                        <li>Prepare README files for GitHub</li>
                        <li>Document limitations and future work honestly</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t24-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Presentation Skills for Technical Projects</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>Presenting technical work effectively requires clear slide design, compelling storytelling, and preparation for questions. This topic teaches you to communicate your project's value to both technical and non-technical audiences.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>Great work poorly presented gets ignored. Effective presentation skills ensure your project gets the recognition it deserves, whether you're presenting to professors, employers, or potential users.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've built and documented your project. Now you'll learn to present it compellingly, highlighting key achievements and demonstrating value clearly.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Design clear, effective slides</li>
                        <li>Tell compelling stories about your project</li>
                        <li>Demonstrate your solution effectively</li>
                        <li>Prepare for and handle Q&A sessions</li>
                        <li>Adapt presentations for different audiences</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    'm4-t25-intro': `
        <div class="topic-introduction">
            <h2>🌱 Introduction to Final Project Presentations and Viva</h2>
            <div class="intro-content">
                <div class="intro-section">
                    <h3>📖 What You'll Learn</h3>
                    <p>The final presentation and viva (oral defense) is your opportunity to showcase your complete project, demonstrate your understanding, and defend your design decisions. This topic prepares you for this culminating experience.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🎯 Why This Matters</h3>
                    <p>The viva tests not just what you built, but why you built it that way and what you learned. Strong performance demonstrates mastery of both technical skills and critical thinking, leaving a lasting impression on evaluators.</p>
                </div>
                
                <div class="intro-section">
                    <h3>🔗 Building on Previous Knowledge</h3>
                    <p>You've completed your project and prepared documentation. The viva is your chance to synthesize everything you've learned and demonstrate comprehensive understanding.</p>
                </div>
                
                <div class="intro-section">
                    <h3>✨ By the End of This Topic</h3>
                    <p>You'll be able to:</p>
                    <ul>
                        <li>Present your complete project confidently</li>
                        <li>Demonstrate your solution with live demos</li>
                        <li>Defend design decisions with evidence</li>
                        <li>Discuss limitations and future work honestly</li>
                        <li>Handle challenging questions professionally</li>
                    </ul>
                </div>
            </div>
        </div>
    `
};

// Export for use in handout pages
if (typeof window !== 'undefined') {
    window.module3_4_Introductions = module3_4_Introductions;
}
