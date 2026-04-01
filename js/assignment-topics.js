// Assignment Topics - 70 Unique AI/ML/IoT Topics for Agriculture
// Each topic has a problem statement, instructions, and category

const assignmentTopics = {
    title: "AI/ML/IoT Assignment Topics for Agriculture",
    instructions: [
        "Select ONE topic from the list below (first-come-first-served, no duplicates in a batch).",
        "Prepare a detailed report (minimum 15 pages) including: Abstract, Introduction, Literature Review, Methodology, Implementation, Results, Conclusion, and References.",
        "Include working code (Python/Jupyter Notebook) with comments and sample outputs.",
        "Use real or publicly available agricultural datasets (Kaggle, UCI, FAO, ICAR).",
        "Submit a 10-minute presentation (PPT) summarizing your work.",
        "Deadline: As announced by the instructor. Late submissions will attract penalty marks.",
        "Plagiarism above 20% (checked via Turnitin) will result in zero marks.",
        "Evaluation: Report (40%) + Code (30%) + Presentation (20%) + Viva (10%)."
    ],
    categories: [
        {
            id: "crop",
            name: "Crop Intelligence & Yield Optimization",
            icon: "fa-seedling",
            color: "#16a34a",
            topics: [
                {
                    id: 1,
                    title: "Crop Yield Prediction Using Ensemble Learning",
                    description: "Build an ensemble model (Random Forest + XGBoost + LightGBM) to predict crop yield based on weather, soil, and management factors. Compare individual model performance with stacked ensemble. Use Karnataka agricultural statistics data for at least 3 crops across 5 districts."
                },
                {
                    id: 2,
                    title: "Multi-Crop Recommendation System Using Soil and Climate Data",
                    description: "Develop a recommendation engine that suggests the top 3 suitable crops for a given plot based on soil nutrients (N, P, K, pH, EC), rainfall, temperature, and humidity. Train on the Crop Recommendation Dataset from Kaggle. Implement as a web app with user input form."
                },
                {
                    id: 3,
                    title: "Satellite Image-Based Crop Type Classification",
                    description: "Use Sentinel-2 satellite imagery to classify crop types (rice, wheat, sugarcane, cotton) in a selected district. Apply CNN or Random Forest on spectral bands (NDVI, EVI, NDWI). Achieve at least 80% accuracy on a test set of 500+ labeled patches."
                },
                {
                    id: 4,
                    title: "Crop Growth Stage Detection Using Time-Series NDVI",
                    description: "Analyze NDVI time-series data from Google Earth Engine to automatically detect crop growth stages (sowing, vegetative, flowering, maturity, harvest). Use Dynamic Time Warping (DTW) or LSTM to classify growth stages for rice paddies across one growing season."
                },
                {
                    id: 5,
                    title: "Climate-Adaptive Crop Planning Using Reinforcement Learning",
                    description: "Design an RL agent that recommends optimal crop rotation plans considering changing climate patterns. The agent should maximize 3-year cumulative profit while maintaining soil health. Simulate using historical weather data and crop economics from ICAR."
                },
                {
                    id: 6,
                    title: "Intercropping Pattern Optimization Using Genetic Algorithms",
                    description: "Use genetic algorithms to find optimal intercropping combinations that maximize land equivalent ratio (LER). Consider factors like nutrient competition, light interception, and market prices. Evaluate for at least 10 crop combinations in semi-arid conditions."
                },
                {
                    id: 7,
                    title: "Crop Damage Assessment from Drone Imagery Using Object Detection",
                    description: "Train a YOLOv8 model to detect and quantify crop damage (lodging, pest patches, waterlogging) from drone images. Calculate percentage damage per field. Use at least 500 annotated drone images from agricultural fields."
                },
                {
                    id: 8,
                    title: "Seed Quality Classification Using Computer Vision",
                    description: "Build an image classification system to grade seed quality (Grade A, B, C, Reject) based on size, color, shape, and surface defects. Use a custom dataset of 2000+ seed images captured under controlled lighting. Compare CNN vs traditional feature extraction approaches."
                },
                {
                    id: 9,
                    title: "Harvest Time Prediction Using Weather and Phenology Models",
                    description: "Predict optimal harvest date for wheat/rice using accumulated Growing Degree Days (GDD), weather forecasts, and satellite-derived phenology indicators. Compare ML predictions with traditional farmer knowledge. Validate on 3 seasons of data."
                },
                {
                    id: 10,
                    title: "Crop Stress Detection Using Hyperspectral Imaging and ML",
                    description: "Analyze hyperspectral reflectance data to detect early crop stress (water, nutrient, heat) before visible symptoms appear. Use PCA for dimensionality reduction and SVM/Random Forest for classification. Demonstrate on at least 2 stress types."
                }
            ]
        },
        {
            id: "disease",
            name: "Plant Disease & Pest Detection",
            icon: "fa-bug",
            color: "#dc2626",
            topics: [
                {
                    id: 11,
                    title: "Multi-Disease Classification on PlantVillage Dataset Using Transfer Learning",
                    description: "Fine-tune MobileNetV2/ResNet50 on the PlantVillage dataset to classify 38 disease classes across 14 crop species. Implement data augmentation, learning rate scheduling, and achieve >90% test accuracy. Deploy as a Streamlit web app."
                },
                {
                    id: 12,
                    title: "Real-Time Pest Detection Using YOLOv8 on Edge Devices",
                    description: "Train a YOLOv8-nano model to detect 5 common agricultural pests (aphids, whiteflies, bollworms, stem borers, fruit flies) from field images. Optimize for Raspberry Pi deployment with <500ms inference time. Create a labeled dataset of 1000+ images."
                },
                {
                    id: 13,
                    title: "Early Blight vs Late Blight Detection in Tomato Using CNN",
                    description: "Build a binary classifier to distinguish early blight (Alternaria) from late blight (Phytophthora) in tomato leaves. Analyze misclassification patterns using Grad-CAM visualization. Achieve >95% recall since missed detection leads to crop loss."
                },
                {
                    id: 14,
                    title: "Weed Detection and Classification Using Semantic Segmentation",
                    description: "Implement a U-Net or DeepLab model for pixel-level weed segmentation in crop fields. Distinguish between crop, weed, and soil. Use the Plant Seedlings Dataset or create a custom dataset. Calculate IoU and Dice scores."
                },
                {
                    id: 15,
                    title: "Disease Severity Scoring System Using Regression on Leaf Images",
                    description: "Instead of binary disease/healthy classification, build a regression model that predicts disease severity on a 0-100% scale based on lesion area, color change, and spread pattern. Use image processing to extract features and correlate with expert severity scores."
                },
                {
                    id: 16,
                    title: "Fungal vs Bacterial vs Viral Disease Classification",
                    description: "Develop a hierarchical classifier that first identifies the pathogen type (fungal, bacterial, viral) and then the specific disease. Use multi-task learning with shared feature extraction layers. Evaluate on at least 15 diseases across 5 crops."
                },
                {
                    id: 17,
                    title: "Pest Population Forecasting Using Weather-Based Time Series Models",
                    description: "Build ARIMA/LSTM models to forecast pest population dynamics based on temperature, humidity, rainfall, and historical trap catch data. Predict pest outbreaks 2 weeks in advance for at least 3 pest species. Validate with actual field data."
                },
                {
                    id: 18,
                    title: "Smartphone-Based Disease Diagnosis App with Offline Capability",
                    description: "Develop a mobile-friendly disease detection system using TensorFlow Lite. The model should work offline, classify 10+ diseases, and provide treatment recommendations in local language. Test on 100+ field-captured images (not lab images)."
                },
                {
                    id: 19,
                    title: "Integrated Pest Management (IPM) Decision Support System",
                    description: "Build a rule-based + ML hybrid system that recommends IPM strategies based on pest type, severity, crop stage, weather forecast, and economic threshold levels. Include cost-benefit analysis for chemical vs biological control options."
                },
                {
                    id: 20,
                    title: "Nematode Detection in Soil Samples Using Microscopy Image Analysis",
                    description: "Apply image processing and CNN to detect and count plant-parasitic nematodes in soil microscopy images. Automate the traditionally manual counting process. Compare accuracy with expert manual counts on 200+ microscopy slides."
                }
            ]
        },
        {
            id: "soil",
            name: "Soil Analysis & Nutrient Management",
            icon: "fa-mountain",
            color: "#92400e",
            topics: [
                {
                    id: 21,
                    title: "Soil Type Classification Using Multi-Sensor IoT Data",
                    description: "Deploy IoT sensors (pH, moisture, EC, temperature) to collect soil data from 50+ locations. Build a classifier to categorize soil into types (Red, Black, Laterite, Alluvial, Sandy). Compare sensor-based classification with lab analysis results."
                },
                {
                    id: 22,
                    title: "Precision Fertilizer Recommendation Using Soil Test Data and ML",
                    description: "Develop a model that recommends optimal NPK fertilizer quantities based on soil test results, target crop, and expected yield. Use STCR (Soil Test Crop Response) data from ICAR. Minimize fertilizer cost while meeting crop nutrient requirements."
                },
                {
                    id: 23,
                    title: "Soil Organic Carbon Prediction Using Spectroscopy and ML",
                    description: "Use Vis-NIR spectroscopy data to predict soil organic carbon content without wet chemistry. Apply PLS regression, Random Forest, and CNN on spectral data. Validate against lab-measured OC values for 300+ soil samples."
                },
                {
                    id: 24,
                    title: "Digital Soil Mapping Using Kriging and Machine Learning",
                    description: "Create a high-resolution digital soil map for a selected taluk using sparse soil sample points. Compare Ordinary Kriging with Random Forest Kriging for spatial prediction of pH, N, P, K. Use DEM-derived terrain features as covariates."
                },
                {
                    id: 25,
                    title: "Soil Erosion Risk Assessment Using GIS and Neural Networks",
                    description: "Predict soil erosion risk zones using RUSLE factors (rainfall erosivity, soil erodibility, slope, land cover, conservation practices) combined with neural networks. Generate erosion risk maps for a watershed. Propose conservation measures for high-risk zones."
                },
                {
                    id: 26,
                    title: "Soil Moisture Prediction Using IoT Sensors and LSTM Networks",
                    description: "Deploy soil moisture sensors at multiple depths (15cm, 30cm, 60cm) and build an LSTM model to predict moisture levels 24-48 hours ahead using weather data. Achieve RMSE < 2% volumetric water content. Compare with physics-based models."
                },
                {
                    id: 27,
                    title: "Soil Health Card Data Analysis and Visualization Dashboard",
                    description: "Analyze government Soil Health Card data for a district (available on soilhealth.dac.gov.in). Build an interactive dashboard showing nutrient deficiency patterns, temporal trends, and spatial hotspots. Provide crop-specific recommendations per village."
                },
                {
                    id: 28,
                    title: "Heavy Metal Contamination Detection in Agricultural Soils Using ML",
                    description: "Predict heavy metal contamination levels (Pb, Cd, Cr, As) in agricultural soils near industrial areas using soil properties and land use features. Use Random Forest regression. Identify contamination hotspots and recommend safe crops for affected areas."
                },
                {
                    id: 29,
                    title: "Soil Compaction Detection Using Penetrometer Data and Classification Models",
                    description: "Analyze cone penetrometer resistance data to classify soil compaction levels (none, moderate, severe). Correlate with crop root growth and yield. Build a spatial model to map compaction zones in a farm for targeted tillage operations."
                },
                {
                    id: 30,
                    title: "Biochar Effect Prediction on Soil Properties Using Regression Models",
                    description: "Collect data on biochar application rates and resulting changes in soil pH, CEC, water holding capacity, and microbial activity. Build regression models to predict optimal biochar application rates for different soil types and target improvements."
                }
            ]
        },
        {
            id: "water",
            name: "Smart Irrigation & Water Management",
            icon: "fa-tint",
            color: "#0284c7",
            topics: [
                {
                    id: 31,
                    title: "IoT-Based Smart Irrigation System with ML-Driven Scheduling",
                    description: "Design and prototype a smart irrigation system using Arduino/ESP32 with soil moisture, temperature, and humidity sensors. Build an ML model that predicts irrigation timing and duration. Demonstrate 30% water savings compared to fixed-schedule irrigation."
                },
                {
                    id: 32,
                    title: "Evapotranspiration Prediction Using Deep Learning and Weather Data",
                    description: "Predict reference evapotranspiration (ET₀) using LSTM/GRU networks trained on weather station data (temperature, humidity, wind speed, solar radiation). Compare with FAO-56 Penman-Monteith equation. Validate on 5 years of daily data."
                },
                {
                    id: 33,
                    title: "Drip Irrigation Fault Detection Using Anomaly Detection Algorithms",
                    description: "Use IoT flow sensors to monitor drip irrigation lines and detect faults (clogging, leaks, pressure drops) using Isolation Forest and Autoencoder-based anomaly detection. Reduce water waste by identifying faults within 1 hour of occurrence."
                },
                {
                    id: 34,
                    title: "Groundwater Level Prediction Using ARIMA and Neural Networks",
                    description: "Predict groundwater levels for agricultural wells using historical water level data, rainfall, and extraction rates. Compare ARIMA, LSTM, and hybrid models. Forecast 3 months ahead to help farmers plan irrigation water availability."
                },
                {
                    id: 35,
                    title: "Satellite-Based Drought Monitoring and Early Warning System",
                    description: "Build a drought monitoring system using MODIS/Sentinel satellite data (NDVI, LST, soil moisture). Calculate Standardized Precipitation Index (SPI) and Vegetation Condition Index (VCI). Generate weekly drought severity maps for a district."
                },
                {
                    id: 36,
                    title: "Water Quality Assessment for Irrigation Using IoT and ML",
                    description: "Deploy IoT sensors to measure irrigation water quality parameters (pH, EC, TDS, turbidity, dissolved oxygen). Build a classification model to rate water suitability (Excellent, Good, Marginal, Unsuitable) for different crops. Alert farmers via SMS for poor quality."
                },
                {
                    id: 37,
                    title: "Rainwater Harvesting Potential Estimation Using GIS and ML",
                    description: "Estimate rainwater harvesting potential for agricultural farms using terrain analysis (DEM), rainfall data, land use, and soil infiltration rates. Build a spatial model to identify optimal locations for farm ponds and check dams in a watershed."
                },
                {
                    id: 38,
                    title: "Crop Water Stress Index Calculation from Thermal Drone Imagery",
                    description: "Use thermal camera mounted on a drone to capture canopy temperature. Calculate Crop Water Stress Index (CWSI) and correlate with soil moisture and stomatal conductance. Build a regression model to predict irrigation need from CWSI values."
                },
                {
                    id: 39,
                    title: "Canal Water Distribution Optimization Using Linear Programming and ML",
                    description: "Optimize canal water distribution among multiple farms using linear programming combined with ML-predicted crop water requirements. Minimize water deficit across all farms while respecting canal capacity constraints. Simulate for a 20-farm irrigation command area."
                },
                {
                    id: 40,
                    title: "Flood Risk Prediction for Agricultural Lands Using Ensemble Models",
                    description: "Predict flood risk for agricultural areas using topographic features, rainfall intensity, river proximity, soil drainage, and historical flood data. Build an ensemble model (RF + GBM + Logistic Regression). Generate flood risk maps with 100m resolution."
                }
            ]
        },
        {
            id: "market",
            name: "Market Intelligence & Supply Chain",
            icon: "fa-chart-line",
            color: "#7c3aed",
            topics: [
                {
                    id: 41,
                    title: "Agricultural Commodity Price Prediction Using LSTM Networks",
                    description: "Predict weekly prices of 5 agricultural commodities (rice, wheat, onion, tomato, potato) using LSTM networks trained on Agmarknet historical price data. Include features like MSP, rainfall, fuel prices, and international market trends. Forecast 4 weeks ahead."
                },
                {
                    id: 42,
                    title: "Mandi Price Anomaly Detection for Farmer Exploitation Prevention",
                    description: "Analyze mandi (market yard) price data to detect anomalous pricing patterns that may indicate cartel behavior or farmer exploitation. Use Isolation Forest and statistical process control. Alert system for prices deviating >2σ from regional average."
                },
                {
                    id: 43,
                    title: "Demand Forecasting for Perishable Agricultural Products",
                    description: "Build a demand forecasting model for perishable products (vegetables, fruits, flowers) using historical sales, seasonal patterns, festival calendars, and weather data. Minimize wastage by predicting demand 1 week ahead with <15% MAPE."
                },
                {
                    id: 44,
                    title: "Cold Chain Monitoring System Using IoT and Predictive Analytics",
                    description: "Design an IoT-based cold chain monitoring system for fruits/vegetables transport. Use temperature, humidity, and ethylene sensors. Build a predictive model for shelf life estimation based on cold chain conditions. Alert for temperature excursions."
                },
                {
                    id: 45,
                    title: "Farm-to-Fork Traceability System Using Blockchain and IoT",
                    description: "Design a traceability system that tracks agricultural produce from farm to consumer using IoT sensors and blockchain. Record: farm location, pesticide usage, harvest date, transport conditions, storage duration. Build a consumer-facing QR code verification app."
                },
                {
                    id: 46,
                    title: "Optimal Crop Selling Time Prediction Using Price Trend Analysis",
                    description: "Analyze historical price patterns to recommend optimal selling time for farmers to maximize revenue. Use time series decomposition, seasonal ARIMA, and Prophet. Compare predicted optimal time vs actual farmer selling behavior for 5 commodities."
                },
                {
                    id: 47,
                    title: "Agricultural Supply-Demand Gap Analysis Using NLP on News Data",
                    description: "Use NLP techniques to analyze agricultural news articles, government reports, and social media to predict supply-demand gaps. Apply sentiment analysis and named entity recognition to extract crop production estimates and market signals."
                },
                {
                    id: 48,
                    title: "Farmer Income Prediction and Financial Risk Assessment",
                    description: "Build a model to predict annual farmer income based on crop portfolio, land holding, irrigation access, market proximity, and weather patterns. Assess financial risk and recommend crop insurance products. Use NSSO survey data or simulated data."
                },
                {
                    id: 49,
                    title: "E-Marketplace Recommendation Engine for Agricultural Inputs",
                    description: "Build a collaborative filtering + content-based recommendation system for an agricultural e-commerce platform. Recommend seeds, fertilizers, and pesticides based on farmer's crop, soil type, location, and purchase history. Evaluate using precision@k and NDCG."
                },
                {
                    id: 50,
                    title: "Post-Harvest Loss Estimation Using ML and Supply Chain Data",
                    description: "Estimate post-harvest losses at each supply chain stage (harvesting, transport, storage, market) using ML models. Identify key loss factors and recommend interventions. Target: reduce estimated losses by 20% through optimized logistics recommendations."
                }
            ]
        },
        {
            id: "iot",
            name: "IoT & Precision Agriculture",
            icon: "fa-microchip",
            color: "#0891b2",
            topics: [
                {
                    id: 51,
                    title: "IoT-Based Greenhouse Climate Control System",
                    description: "Build a greenhouse monitoring system using ESP32 with sensors for temperature, humidity, CO₂, light intensity, and soil moisture. Implement PID control + ML-based setpoint optimization. Demonstrate automated fan, heater, and irrigation control."
                },
                {
                    id: 52,
                    title: "Precision Agriculture Dashboard Using Multi-Sensor Drone Data",
                    description: "Process drone-captured multispectral imagery to generate field-level maps for NDVI, canopy cover, plant count, and stress zones. Build an interactive web dashboard using Plotly/Dash that helps farmers visualize field variability and plan variable-rate applications."
                },
                {
                    id: 53,
                    title: "Animal Health Monitoring Using Wearable IoT Sensors",
                    description: "Design a wearable IoT device for cattle that monitors body temperature, activity level, rumination, and heart rate. Build an anomaly detection model to identify early signs of illness (mastitis, fever, lameness). Alert farmer via mobile notification."
                },
                {
                    id: 54,
                    title: "Automated Grain Storage Monitoring Using IoT and Fuzzy Logic",
                    description: "Deploy temperature, humidity, and CO₂ sensors in grain storage silos. Build a fuzzy logic + ML system to predict grain spoilage risk and recommend aeration schedules. Demonstrate on a prototype silo with real-time monitoring dashboard."
                },
                {
                    id: 55,
                    title: "Solar-Powered Weather Station with ML-Based Micro-Climate Prediction",
                    description: "Build a solar-powered IoT weather station (temperature, humidity, pressure, rainfall, wind, solar radiation) for farm-level micro-climate monitoring. Train an ML model to predict next-day micro-climate using station data + regional forecasts."
                },
                {
                    id: 56,
                    title: "Automated Poultry Farm Monitoring Using Computer Vision and IoT",
                    description: "Use cameras and IoT sensors to monitor poultry health, feed consumption, water intake, and environmental conditions. Build a CV model to detect abnormal bird behavior (huddling, lethargy) and an ML model to predict egg production rates."
                },
                {
                    id: 57,
                    title: "Precision Spraying System Using GPS and Variable Rate Technology",
                    description: "Design a variable-rate spraying system that adjusts pesticide application based on GPS-mapped pest hotspots. Use drone survey data to create pest density maps. Calculate chemical savings compared to uniform spraying. Simulate using a field grid model."
                },
                {
                    id: 58,
                    title: "Fish Pond Water Quality Monitoring Using IoT and Predictive Models",
                    description: "Monitor aquaculture pond parameters (dissolved oxygen, pH, ammonia, temperature, turbidity) using IoT sensors. Build a predictive model for dissolved oxygen crashes (fish kills). Implement automated aerator control when DO drops below threshold."
                },
                {
                    id: 59,
                    title: "Bee Colony Health Monitoring Using Sound Analysis and IoT",
                    description: "Place microphones and temperature/humidity sensors in beehives. Analyze hive sounds using audio feature extraction (MFCCs, spectrograms) and CNN to detect colony states: healthy, queenless, swarming, diseased. Validate with beekeeper observations."
                },
                {
                    id: 60,
                    title: "LoRaWAN-Based Farm Sensor Network for Remote Area Connectivity",
                    description: "Design a long-range, low-power sensor network using LoRaWAN for farms without WiFi/cellular coverage. Deploy soil moisture, weather, and water level sensors across a 5km radius. Build a cloud dashboard for data visualization and alerts. Evaluate range and battery life."
                }
            ]
        },
        {
            id: "advanced",
            name: "Advanced AI & Emerging Technologies",
            icon: "fa-robot",
            color: "#be185d",
            topics: [
                {
                    id: 61,
                    title: "Generative AI for Synthetic Agricultural Data Augmentation",
                    description: "Use GANs (Generative Adversarial Networks) to generate synthetic crop disease images for data augmentation. Train a DCGAN/StyleGAN on PlantVillage images. Evaluate whether models trained on augmented data outperform those trained on original data alone."
                },
                {
                    id: 62,
                    title: "Federated Learning for Privacy-Preserving Crop Disease Detection",
                    description: "Implement federated learning where multiple farms train a shared disease detection model without sharing raw images. Use Flower framework to simulate 5 farm nodes. Compare federated model accuracy with centralized training. Analyze communication efficiency."
                },
                {
                    id: 63,
                    title: "Explainable AI (XAI) for Agricultural Decision Support",
                    description: "Build a crop yield prediction model and apply XAI techniques (SHAP, LIME, Grad-CAM) to explain predictions. Create farmer-friendly explanations like 'Your yield is predicted low because rainfall was 30% below average.' Evaluate explanation quality with domain experts."
                },
                {
                    id: 64,
                    title: "NLP-Based Agricultural Chatbot for Farmer Advisory",
                    description: "Build a conversational AI chatbot that answers farmer queries about crop management, pest control, weather, and market prices. Use RAG (Retrieval Augmented Generation) with agricultural knowledge base. Support English and one regional language. Evaluate on 200+ test queries."
                },
                {
                    id: 65,
                    title: "Autonomous Crop Scouting Robot Path Planning Using Deep RL",
                    description: "Design a path planning algorithm for an autonomous crop scouting robot using Deep Q-Network (DQN) or PPO. The robot should efficiently cover a field while avoiding obstacles. Simulate in a grid environment with varying field shapes and obstacle patterns."
                },
                {
                    id: 66,
                    title: "Multi-Modal Crop Disease Diagnosis Using Image + Text + Sensor Data",
                    description: "Build a multi-modal model that combines leaf images (CNN), farmer text descriptions (NLP), and sensor data (tabular ML) for more accurate disease diagnosis. Use attention mechanisms to fuse modalities. Show improvement over single-modality models."
                },
                {
                    id: 67,
                    title: "Digital Twin of a Farm Using IoT Data and Simulation Models",
                    description: "Create a digital twin of a small farm that mirrors real-time conditions using IoT sensor data. Simulate crop growth (using DSSAT or simplified models), water balance, and nutrient cycling. Allow what-if scenario testing (e.g., 'What if rainfall is 20% less?')."
                },
                {
                    id: 68,
                    title: "Carbon Footprint Estimation of Farming Practices Using ML",
                    description: "Estimate carbon emissions from different farming practices (tillage type, fertilizer use, irrigation method, crop residue management) using ML regression models. Build a calculator tool that recommends low-carbon alternatives. Use IPCC emission factors as ground truth."
                },
                {
                    id: 69,
                    title: "Crop Insurance Claim Verification Using Satellite Data and ML",
                    description: "Build a system to verify crop insurance claims using satellite imagery (pre and post-disaster NDVI comparison), weather data, and reported damage. Classify claims as valid, suspicious, or fraudulent. Reduce manual field verification by 50%."
                },
                {
                    id: 70,
                    title: "AI-Powered Agricultural Knowledge Graph Construction from Research Papers",
                    description: "Use NLP to extract entities (crops, diseases, chemicals, techniques) and relationships from 500+ agricultural research paper abstracts. Build a knowledge graph using Neo4j. Enable queries like 'What treatments are effective for rice blast in tropical regions?' Visualize the graph interactively."
                }
            ]
        }
    ]
};
