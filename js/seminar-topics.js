// Seminar Topics - 70 Recent Trendy AI/ML/IoT Topics for Presentations
// Each topic has a title and description of the problem/trend

const seminarTopics = {
    title: "Seminar Presentation Topics – Recent Trends in AI/ML/IoT",
    instructions: [
        "Select ONE topic (first-come-first-served, no duplicates within a batch).",
        "Prepare a 15-minute presentation (PPT/Google Slides) with 15–20 slides.",
        "Cover: Introduction, Current State, Key Technologies, Real-World Applications, Challenges, Future Scope, and References.",
        "Include at least 3 recent research papers or industry reports (2023–2026) as references.",
        "Add diagrams, architecture figures, and real-world case studies — avoid text-heavy slides.",
        "Prepare for a 5-minute Q&A session after the presentation.",
        "Evaluation: Content Depth (30%) + Presentation Quality (25%) + Relevance & Recency (20%) + Q&A (15%) + Time Management (10%)."
    ],
    categories: [
        {
            id: "genai",
            name: "Generative AI & Foundation Models",
            icon: "fa-brain",
            color: "#7c3aed",
            topics: [
                {
                    id: 1,
                    title: "Large Language Models (LLMs) for Agricultural Advisory",
                    description: "How GPT-4, Gemini, and LLaMA-based models are being fine-tuned to provide real-time crop management advice, pest diagnosis, and market intelligence to farmers in local languages. Covers RAG pipelines, domain adaptation, and hallucination mitigation in agriculture."
                },
                {
                    id: 2,
                    title: "Vision-Language Models (VLMs) for Crop Disease Diagnosis",
                    description: "Multimodal AI models like GPT-4V, LLaVA, and Gemini Pro Vision that can analyze leaf images and farmer text descriptions simultaneously to provide accurate disease diagnosis. Explores zero-shot and few-shot capabilities without task-specific training."
                },
                {
                    id: 3,
                    title: "Synthetic Data Generation Using Diffusion Models for Agriculture",
                    description: "Using Stable Diffusion and DALL-E to generate synthetic crop disease images, pest images, and field scenarios for training data augmentation. Addresses the chronic shortage of labeled agricultural image datasets."
                },
                {
                    id: 4,
                    title: "AI Agents and Agentic Workflows in Farm Management",
                    description: "Autonomous AI agents (AutoGPT, CrewAI, LangGraph) that can plan, execute, and monitor multi-step farming tasks — from soil analysis to market selling decisions — with minimal human intervention. Covers tool use, memory, and planning capabilities."
                },
                {
                    id: 5,
                    title: "Small Language Models (SLMs) for Edge Deployment in Rural Areas",
                    description: "Phi-3, Gemma, and TinyLlama models optimized to run on smartphones and edge devices without internet connectivity. Critical for agricultural advisory in remote areas with poor network coverage. Covers quantization, pruning, and distillation techniques."
                },
                {
                    id: 6,
                    title: "Retrieval-Augmented Generation (RAG) for Agricultural Knowledge Systems",
                    description: "Building RAG pipelines that combine LLMs with agricultural knowledge bases (ICAR publications, KVK advisories, soil health cards) to provide accurate, citation-backed farming recommendations without hallucination."
                },
                {
                    id: 7,
                    title: "Text-to-Code AI for Automated Agricultural Data Analysis",
                    description: "Using GitHub Copilot, Claude, and Code Llama to automatically generate Python code for agricultural data analysis from natural language descriptions. Enables non-programmer agronomists to perform complex data analysis."
                },
                {
                    id: 8,
                    title: "Generative AI for Crop Breeding and Genomic Design",
                    description: "Using generative models to design novel crop varieties with desired traits (drought tolerance, pest resistance, higher yield) by generating candidate genomic sequences. Covers protein structure prediction and gene editing target identification."
                },
                {
                    id: 9,
                    title: "AI-Powered Voice Assistants for Farmers in Regional Languages",
                    description: "Whisper, IndicWhisper, and Bhashini-based voice AI systems that allow farmers to interact with agricultural advisory systems in Hindi, Kannada, Tamil, and other Indian languages through voice commands."
                },
                {
                    id: 10,
                    title: "Multimodal Foundation Models for Precision Agriculture",
                    description: "Models that fuse satellite imagery, weather data, soil sensor readings, and text reports into a unified representation for holistic farm decision-making. Covers architectures like ImageBind and unified embedding spaces."
                }
            ]
        },
        {
            id: "cv",
            name: "Computer Vision & Remote Sensing",
            icon: "fa-eye",
            color: "#0284c7",
            topics: [
                {
                    id: 11,
                    title: "Segment Anything Model (SAM) for Agricultural Image Analysis",
                    description: "Meta's SAM and SAM-2 applied to segment crops, weeds, diseases, and field boundaries from drone and satellite imagery with zero-shot prompting. Eliminates the need for task-specific annotation in agricultural computer vision."
                },
                {
                    id: 12,
                    title: "Real-Time Weed Detection Using YOLOv9/v10 on Edge Devices",
                    description: "Latest YOLO architectures optimized for real-time weed detection on Raspberry Pi, Jetson Nano, and smartphone cameras. Covers model compression, TensorRT optimization, and integration with precision spraying systems."
                },
                {
                    id: 13,
                    title: "Hyperspectral Imaging and Deep Learning for Crop Stress Detection",
                    description: "Using hyperspectral cameras on drones to detect water stress, nutrient deficiency, and disease before visible symptoms appear. Covers 3D-CNN and transformer architectures for spectral-spatial feature extraction."
                },
                {
                    id: 14,
                    title: "Satellite-Based Crop Monitoring Using Sentinel-2 and Deep Learning",
                    description: "Free Sentinel-2 satellite data combined with U-Net, DeepLab, and Vision Transformers for large-scale crop type mapping, yield estimation, and growth monitoring. Covers Google Earth Engine integration and cloud-free compositing."
                },
                {
                    id: 15,
                    title: "3D Point Cloud Analysis from LiDAR Drones for Crop Phenotyping",
                    description: "Processing LiDAR point clouds to extract plant height, canopy volume, leaf area index, and biomass estimates. Covers PointNet++ architecture and its application in high-throughput plant phenotyping."
                },
                {
                    id: 16,
                    title: "Vision Transformers (ViT) vs CNNs for Plant Disease Classification",
                    description: "Comparative study of Vision Transformers, Swin Transformers, and traditional CNNs (ResNet, EfficientNet) for plant disease classification. Analyzes accuracy, computational cost, and data efficiency trade-offs."
                },
                {
                    id: 17,
                    title: "Thermal Drone Imaging for Precision Irrigation Management",
                    description: "Using thermal cameras on drones to map canopy temperature, calculate Crop Water Stress Index (CWSI), and generate variable-rate irrigation prescriptions. Covers radiometric calibration and atmospheric correction."
                },
                {
                    id: 18,
                    title: "Video Analytics for Livestock Behavior Monitoring",
                    description: "Using pose estimation (MediaPipe, DeepLabCut) and action recognition models to monitor cattle behavior — detecting lameness, estrus, feeding patterns, and social interactions from CCTV footage in dairy farms."
                },
                {
                    id: 19,
                    title: "Synthetic Aperture Radar (SAR) for All-Weather Crop Monitoring",
                    description: "SAR satellite data (Sentinel-1) that penetrates clouds for crop monitoring in tropical regions with persistent cloud cover. Covers backscatter analysis, polarimetric decomposition, and fusion with optical data."
                },
                {
                    id: 20,
                    title: "Autonomous Drone Swarms for Large-Scale Farm Surveillance",
                    description: "Coordinated multi-drone systems for efficient coverage of large agricultural areas. Covers path planning algorithms, inter-drone communication, collision avoidance, and real-time image stitching for field-level maps."
                }
            ]
        },
        {
            id: "iot",
            name: "IoT, Edge AI & Smart Farming",
            icon: "fa-microchip",
            color: "#059669",
            topics: [
                {
                    id: 21,
                    title: "TinyML for On-Device Agricultural Intelligence",
                    description: "Running ML models on microcontrollers (ESP32, Arduino Nano 33 BLE) for real-time soil moisture prediction, pest sound detection, and crop health monitoring without cloud connectivity. Covers TensorFlow Lite Micro and Edge Impulse."
                },
                {
                    id: 22,
                    title: "LoRaWAN and NB-IoT Networks for Smart Agriculture",
                    description: "Long-range, low-power wireless networks connecting thousands of farm sensors across vast agricultural areas. Compares LoRaWAN, NB-IoT, and Sigfox for range, power consumption, data rate, and cost in Indian farming contexts."
                },
                {
                    id: 23,
                    title: "Digital Twins for Farm Simulation and What-If Analysis",
                    description: "Creating virtual replicas of farms that mirror real-time conditions using IoT sensor data. Enables simulation of scenarios like drought, pest outbreak, or fertilizer changes before implementing them in the real field."
                },
                {
                    id: 24,
                    title: "Federated Learning for Privacy-Preserving Agricultural AI",
                    description: "Training ML models across multiple farms without sharing raw data. Each farm trains locally and shares only model updates. Critical for sensitive agricultural data (yield, income, land records) while building collective intelligence."
                },
                {
                    id: 25,
                    title: "Solar-Powered Autonomous Weather Stations with AI Forecasting",
                    description: "Self-sustaining IoT weather stations with on-device ML for hyperlocal weather prediction. Covers solar energy harvesting, low-power design, and comparison of edge ML forecasts with national weather service predictions."
                },
                {
                    id: 26,
                    title: "Blockchain-IoT Integration for Agricultural Supply Chain Traceability",
                    description: "Combining IoT sensors with blockchain to create tamper-proof records of food journey from farm to fork. Covers Hyperledger Fabric, smart contracts for quality verification, and consumer-facing QR code traceability."
                },
                {
                    id: 27,
                    title: "5G-Enabled Precision Agriculture: Opportunities and Challenges",
                    description: "How 5G's ultra-low latency, massive device connectivity, and high bandwidth enable real-time drone control, autonomous tractors, and AR-guided farming. Covers network slicing for agricultural use cases."
                },
                {
                    id: 28,
                    title: "Robotic Process Automation (RPA) in Agricultural Supply Chains",
                    description: "Automating repetitive tasks in agricultural offices — procurement processing, quality report generation, subsidy application filing, and market price monitoring using UiPath, Automation Anywhere, and custom bots."
                },
                {
                    id: 29,
                    title: "Smart Greenhouse Automation Using Reinforcement Learning",
                    description: "RL agents that learn optimal greenhouse control policies (heating, cooling, lighting, irrigation, CO₂ injection) to maximize crop yield while minimizing energy costs. Covers sim-to-real transfer and safety constraints."
                },
                {
                    id: 30,
                    title: "Underwater IoT Sensors for Aquaculture and Fisheries Monitoring",
                    description: "Submersible sensor networks monitoring dissolved oxygen, pH, ammonia, temperature, and turbidity in fish ponds and shrimp farms. Covers acoustic communication, biofouling prevention, and predictive models for fish health."
                }
            ]
        },
        {
            id: "sustainability",
            name: "Sustainability, Climate & Ethics",
            icon: "fa-leaf",
            color: "#16a34a",
            topics: [
                {
                    id: 31,
                    title: "AI for Climate-Resilient Agriculture and Adaptation Strategies",
                    description: "ML models predicting climate change impacts on crop yields, growing seasons, and pest migration patterns. Covers crop suitability shifting, adaptation recommendations, and integration with IPCC climate scenarios (SSP1-SSP5)."
                },
                {
                    id: 32,
                    title: "Carbon Farming: AI-Driven Measurement, Reporting, and Verification (MRV)",
                    description: "Using satellite imagery, soil sensors, and ML to accurately measure soil carbon sequestration for carbon credit markets. Covers challenges in MRV accuracy, permanence verification, and additionality assessment."
                },
                {
                    id: 33,
                    title: "Explainable AI (XAI) for Trustworthy Agricultural Decision Support",
                    description: "Making black-box ML models interpretable for farmers and policymakers using SHAP, LIME, attention maps, and counterfactual explanations. Critical for building trust in AI-driven crop insurance, loan decisions, and advisory systems."
                },
                {
                    id: 34,
                    title: "AI Bias in Agricultural Systems: Risks and Mitigation",
                    description: "How training data biases (geographic, crop-type, farm-size) lead to unfair AI recommendations that disadvantage smallholder farmers, women farmers, and marginalized communities. Covers fairness metrics and debiasing techniques."
                },
                {
                    id: 35,
                    title: "Methane Emission Monitoring from Rice Paddies Using AI and Satellites",
                    description: "Satellite-based methane detection (TROPOMI, MethaneSAT) combined with ML to map and quantify methane emissions from flooded rice fields. Covers alternate wetting-drying (AWD) technique optimization for emission reduction."
                },
                {
                    id: 36,
                    title: "AI-Optimized Regenerative Agriculture Practices",
                    description: "Using ML to optimize regenerative practices — cover cropping, no-till, composting, agroforestry — for maximum soil health improvement and carbon sequestration. Covers long-term soil health prediction models."
                },
                {
                    id: 37,
                    title: "Water Footprint Optimization Using AI in Agriculture",
                    description: "ML models that minimize blue, green, and grey water footprints of crop production through optimized irrigation scheduling, crop selection, and fertilizer management. Covers virtual water trade implications."
                },
                {
                    id: 38,
                    title: "AI for Biodiversity Conservation in Agricultural Landscapes",
                    description: "Using acoustic monitoring, camera traps, and eDNA analysis with ML to assess biodiversity in farmlands. Covers pollinator monitoring, beneficial insect conservation, and biodiversity-friendly farming practice recommendations."
                },
                {
                    id: 39,
                    title: "Responsible AI Governance Framework for Agricultural Technology",
                    description: "Developing ethical guidelines, data governance policies, and regulatory frameworks for AI deployment in agriculture. Covers data ownership, consent, algorithmic accountability, and the EU AI Act implications for agri-tech."
                },
                {
                    id: 40,
                    title: "AI-Powered Early Warning Systems for Agricultural Disasters",
                    description: "Integrated systems combining weather forecasts, satellite data, soil moisture, and river levels to predict floods, droughts, cyclones, and pest outbreaks 1-4 weeks in advance. Covers ensemble forecasting and uncertainty communication."
                }
            ]
        },
        {
            id: "data",
            name: "Data Science & Advanced ML",
            icon: "fa-chart-bar",
            color: "#dc2626",
            topics: [
                {
                    id: 41,
                    title: "Graph Neural Networks (GNNs) for Agricultural Knowledge Representation",
                    description: "Using GNNs to model complex relationships between crops, diseases, soil types, weather patterns, and management practices as knowledge graphs. Enables reasoning over interconnected agricultural data for better recommendations."
                },
                {
                    id: 42,
                    title: "Self-Supervised Learning for Agricultural Image Analysis with Limited Labels",
                    description: "Techniques like DINO, MAE, and SimCLR that learn useful visual representations from unlabeled farm images. Dramatically reduces the annotation burden for agricultural computer vision tasks."
                },
                {
                    id: 43,
                    title: "Time Series Foundation Models for Agricultural Forecasting",
                    description: "Pre-trained time series models (TimeGPT, Chronos, Lag-Llama) applied to crop yield forecasting, price prediction, and weather forecasting. Covers zero-shot forecasting capabilities and fine-tuning strategies."
                },
                {
                    id: 44,
                    title: "AutoML and Neural Architecture Search for Agricultural Applications",
                    description: "Automated machine learning platforms (AutoGluon, H2O, Google AutoML) that automatically select algorithms, tune hyperparameters, and design neural architectures for agricultural datasets without ML expertise."
                },
                {
                    id: 45,
                    title: "Causal Inference in Agriculture: Beyond Correlation to Causation",
                    description: "Using causal ML methods (DoWhy, CausalML) to determine true cause-effect relationships in agriculture — does this fertilizer actually increase yield, or is it just correlated? Covers A/B testing, instrumental variables, and DAGs."
                },
                {
                    id: 46,
                    title: "Geospatial AI (GeoAI) for Precision Agriculture at Scale",
                    description: "Combining geospatial data (satellite, drone, GPS) with deep learning for field-level crop mapping, yield estimation, and anomaly detection across millions of hectares. Covers GeoAI platforms and spatial transformers."
                },
                {
                    id: 47,
                    title: "Few-Shot and Zero-Shot Learning for Rare Crop Disease Detection",
                    description: "Detecting diseases with very few or zero training examples using meta-learning (MAML, Prototypical Networks) and CLIP-based zero-shot classification. Critical for rare diseases where labeled data is scarce."
                },
                {
                    id: 48,
                    title: "Anomaly Detection in Agricultural IoT Sensor Networks",
                    description: "Detecting sensor malfunctions, unusual crop conditions, and environmental anomalies in real-time IoT data streams using autoencoders, isolation forests, and transformer-based anomaly detectors."
                },
                {
                    id: 49,
                    title: "Transfer Learning Across Geographies for Crop Models",
                    description: "Adapting ML models trained in one region (e.g., US Corn Belt) to work in another (e.g., Indian Deccan Plateau) using domain adaptation, fine-tuning, and multi-task learning. Covers distribution shift challenges."
                },
                {
                    id: 50,
                    title: "MLOps for Agricultural AI: From Prototype to Production",
                    description: "Building production-grade ML pipelines for agriculture using MLflow, Kubeflow, and DVC. Covers model versioning, A/B testing, monitoring for data drift, and continuous retraining with new seasonal data."
                }
            ]
        },
        {
            id: "robotics",
            name: "Robotics, Drones & Automation",
            icon: "fa-robot",
            color: "#b45309",
            topics: [
                {
                    id: 51,
                    title: "Autonomous Agricultural Robots: Weeding, Harvesting, and Planting",
                    description: "State-of-the-art farming robots (FarmWise, Carbon Robotics, Agrobot) that autonomously weed, harvest strawberries, and plant seeds. Covers navigation, manipulation, and economic viability for Indian farming."
                },
                {
                    id: 52,
                    title: "AI-Powered Drone Spraying Systems for Precision Pest Control",
                    description: "DJI Agras and custom drones with AI-guided variable-rate spraying that targets only pest-infested zones. Covers prescription map generation, nozzle control, drift management, and regulatory compliance in India."
                },
                {
                    id: 53,
                    title: "Computer Vision-Guided Robotic Fruit Harvesting",
                    description: "Robots that use depth cameras and instance segmentation to identify ripe fruits, plan grasp strategies, and harvest without damage. Covers soft gripper design, ripeness detection, and bin-packing optimization."
                },
                {
                    id: 54,
                    title: "Autonomous Tractors and GPS-Guided Field Operations",
                    description: "Self-driving tractors (John Deere, Monarch) using RTK-GPS, LiDAR, and computer vision for autonomous plowing, seeding, and spraying. Covers path planning, obstacle avoidance, and farmer override systems."
                },
                {
                    id: 55,
                    title: "Swarm Robotics for Collaborative Farm Tasks",
                    description: "Multiple small robots working together for tasks like planting, weeding, and soil sampling. Covers bio-inspired coordination algorithms, task allocation, and communication protocols for agricultural swarms."
                },
                {
                    id: 56,
                    title: "Underwater Drones for Aquaculture Farm Inspection",
                    description: "ROVs and AUVs equipped with cameras and sensors for inspecting fish cages, monitoring fish health, detecting net damage, and assessing seabed conditions. Covers underwater computer vision challenges."
                },
                {
                    id: 57,
                    title: "AI-Enabled Post-Harvest Sorting and Grading Machines",
                    description: "High-speed conveyor systems with cameras and ML that sort fruits, vegetables, and grains by size, color, ripeness, and defects at 10+ items per second. Covers real-time inference optimization and food safety compliance."
                },
                {
                    id: 58,
                    title: "Soft Robotics for Delicate Crop Handling",
                    description: "Pneumatic and cable-driven soft grippers that can handle delicate produce (tomatoes, berries, mushrooms) without bruising. Covers material science, force sensing, and adaptive grasping strategies."
                },
                {
                    id: 59,
                    title: "Solar-Powered Agricultural Robots for Sustainable Farming",
                    description: "Robots powered entirely by solar energy for continuous field operations — weeding, monitoring, and data collection. Covers energy harvesting, power management, and operational scheduling based on solar availability."
                },
                {
                    id: 60,
                    title: "Human-Robot Collaboration in Semi-Automated Farming",
                    description: "Cobots (collaborative robots) that work alongside farmers — assisting with heavy lifting, repetitive tasks, and precision operations. Covers safety standards, intuitive interfaces, and ergonomic design for agricultural cobots."
                }
            ]
        },
        {
            id: "emerging",
            name: "Emerging & Interdisciplinary Trends",
            icon: "fa-rocket",
            color: "#be185d",
            topics: [
                {
                    id: 61,
                    title: "Vertical Farming and AI-Optimized Indoor Agriculture",
                    description: "AI systems controlling LED lighting spectra, nutrient solutions, and climate in vertical farms to maximize yield per square meter. Covers energy optimization, crop scheduling, and economic comparison with traditional farming."
                },
                {
                    id: 62,
                    title: "CRISPR Gene Editing Guided by AI for Crop Improvement",
                    description: "Using ML to predict CRISPR guide RNA efficiency, off-target effects, and optimal editing sites for developing disease-resistant and climate-tolerant crop varieties. Covers ethical considerations and regulatory landscape."
                },
                {
                    id: 63,
                    title: "Quantum Computing Applications in Agricultural Optimization",
                    description: "Potential of quantum algorithms (QAOA, VQE) for solving complex agricultural optimization problems — crop rotation planning, supply chain logistics, and molecular simulation for pesticide design. Covers current limitations."
                },
                {
                    id: 64,
                    title: "Augmented Reality (AR) for Farmer Training and Field Guidance",
                    description: "AR headsets and smartphone apps that overlay real-time information on farm fields — pest identification, nutrient deficiency diagnosis, irrigation zones, and step-by-step procedure guidance for new farming techniques."
                },
                {
                    id: 65,
                    title: "Neuromorphic Computing for Ultra-Low-Power Agricultural Sensors",
                    description: "Brain-inspired computing chips (Intel Loihi, IBM TrueNorth) that process sensor data with 100x less power than traditional processors. Enables decade-long battery life for remote agricultural IoT sensors."
                },
                {
                    id: 66,
                    title: "AI-Powered Agricultural Insurance: Parametric and Index-Based Models",
                    description: "Satellite-based crop insurance that automatically triggers payouts when weather indices (rainfall, temperature, NDVI) cross thresholds. Eliminates manual claim verification. Covers basis risk and product design."
                },
                {
                    id: 67,
                    title: "Digital Public Infrastructure (DPI) for Agriculture: India Stack for Farmers",
                    description: "How India's digital infrastructure (Aadhaar, UPI, DigiLocker, AgriStack) enables AI-powered agricultural services — credit scoring, insurance, subsidy delivery, and market access for 150 million farmers."
                },
                {
                    id: 68,
                    title: "Metaverse and Virtual Reality for Agricultural Education",
                    description: "Immersive VR environments for teaching farming techniques, equipment operation, and pest management to students and farmers. Covers haptic feedback, multiplayer collaboration, and gamification of agricultural learning."
                },
                {
                    id: 69,
                    title: "AI for Food Safety: Contamination Detection and Traceability",
                    description: "ML models detecting pesticide residues, heavy metals, mycotoxins, and microbial contamination in food products using spectroscopy, e-nose, and imaging. Covers rapid testing devices and regulatory compliance."
                },
                {
                    id: 70,
                    title: "Citizen Science and Crowdsourced AI for Agricultural Pest Surveillance",
                    description: "Mobile apps where farmers photograph pests and diseases, contributing to a crowdsourced dataset that trains continuously improving AI models. Covers data quality control, gamification, active learning, and community-driven pest early warning networks."
                }
            ]
        }
    ]
};
