// Module 1 Comprehensive Handouts - AI Fundamentals & Python Programming
// Generated for Agri-LMS - Complete with Farming Analogies, Code, Activities & Quizzes

const module1Handouts = {
    'm1-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Introduction to Artificial Intelligence</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Define Artificial Intelligence and its key characteristics</li>
                    <li>Distinguish between AI, Machine Learning, and Deep Learning</li>
                    <li>Identify types of AI systems and their applications</li>
                    <li>Understand how AI is transforming agriculture</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Think of AI as a Super-Experienced Farm Manager:</strong></p>
                    <p>Imagine you have a farm manager who has worked on thousands of farms, remembers every weather pattern, every pest outbreak, every successful harvest. This manager can instantly recall what worked and what didn't across all those experiences.</p>
                    <p>That's what AI does - it learns from vast amounts of data (like thousands of farm seasons) and uses that knowledge to make smart decisions for YOUR farm!</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Core Concepts</h2>
                
                <h3>1. What is Artificial Intelligence?</h3>
                <p>Artificial Intelligence (AI) is the simulation of human intelligence by machines. It enables computers to:</p>
                <ul>
                    <li><strong>Learn</strong> from data (like recognizing crop diseases from photos)</li>
                    <li><strong>Reason</strong> through problems (like deciding optimal planting time)</li>
                    <li><strong>Perceive</strong> the environment (like detecting soil moisture levels)</li>
                    <li><strong>Take actions</strong> (like triggering irrigation systems)</li>
                </ul>

                <h3>2. AI vs ML vs Deep Learning</h3>
                <div class="concept-comparison">
                    <table>
                        <tr>
                            <th>Concept</th>
                            <th>Definition</th>
                            <th>Farm Example</th>
                        </tr>
                        <tr>
                            <td><strong>AI</strong></td>
                            <td>Broad field of smart machines</td>
                            <td>Smart irrigation system that knows when to water</td>
                        </tr>
                        <tr>
                            <td><strong>Machine Learning</strong></td>
                            <td>AI that learns from data</td>
                            <td>System that learns your crop patterns over seasons</td>
                        </tr>
                        <tr>
                            <td><strong>Deep Learning</strong></td>
                            <td>ML using neural networks</td>
                            <td>App that identifies plant diseases from photos</td>
                        </tr>
                    </table>
                </div>

                <h3>3. Types of AI</h3>
                <ul>
                    <li><strong>Narrow AI (Weak AI):</strong> Specialized in one task - like crop disease detection</li>
                    <li><strong>General AI (Strong AI):</strong> Human-like intelligence - still theoretical</li>
                    <li><strong>Super AI:</strong> Beyond human intelligence - science fiction for now</li>
                </ul>
            </div>

            <div class="code-section">
                <h2>💻 Python Demonstration</h2>
                <p>Let's create a simple AI-like decision system for irrigation:</p>
                <pre><code class="language-python">
# Simple AI Decision System for Irrigation
# This demonstrates how AI "thinks" about farming decisions

def irrigation_advisor(soil_moisture, temperature, forecast_rain):
    """
    A rule-based AI system for irrigation decisions.
    This mimics how AI processes multiple factors.
    
    Parameters:
    - soil_moisture: percentage (0-100)
    - temperature: degrees Celsius
    - forecast_rain: True/False
    """
    
    # AI "reasoning" - considering multiple factors
    if soil_moisture < 30:
        if forecast_rain:
            return "⏳ Wait - Rain expected. Soil is dry but rain will help."
        else:
            return "💧 IRRIGATE NOW - Soil critically dry, no rain expected."
    
    elif soil_moisture < 60:
        if temperature > 35:
            return "💧 IRRIGATE - High temp causing rapid evaporation."
        else:
            return "✅ OKAY - Moisture adequate for now."
    
    else:
        return "🛑 NO IRRIGATION NEEDED - Soil has enough moisture."

# Test the AI advisor
print("=== Smart Irrigation Advisor ===")
print(irrigation_advisor(25, 32, False))  # Dry soil, no rain
print(irrigation_advisor(25, 32, True))   # Dry soil, rain coming
print(irrigation_advisor(45, 38, False))  # Medium moisture, hot day
print(irrigation_advisor(75, 28, False))  # Good moisture
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
                            <h3>Live Farm Decision Engine Simulation & Stress-Testing</h3>
                            <p><strong>Educator Action:</strong> The teacher projects Google Colab and live-codes an interactive rule-based agricultural AI advisor <code>smart_farm_advisor(moisture, temp, rain_prob, crop_stage)</code>. The instructor intentionally inputs conflicting field data (e.g., soil moisture is critically dry at 18%, but forecast rain probability is 95% within 2 hours; or temperature hits 41°C during flowering stage).</p>
                            <ul>
                                <li>Demonstrates live how algorithmic weights prioritize crop survival over operational costs.</li>
                                <li>Polls students in real time: <em>"Should the pump trigger now or hold for rain?"</em></li>
                                <li>Refactors decision thresholds live based on student feedback and agronomic principles.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An interactive decision boundary chart mapped on the classroom whiteboard with live-calibrated moisture and temperature thresholds.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>Smart Agro-Ecosystem AI Architecture Co-Design</h3>
                            <p><strong>Studio Workshop:</strong> Faculty facilitates a collaborative co-creation studio where cohorts of students represent 4 distinct agricultural production ecosystems (Sugarcane in Mandya, Coffee in Chikmagalur, Ragi in Tumakuru, and Cotton in Raichur).</p>
                            <ul>
                                <li><strong>Faculty Role:</strong> Challenges student teams with real-world rural bottlenecks (intermittent 3-phase grid power, patchy 2G/4G bandwidth, regional language constraints).</li>
                                <li><strong>Student Groups:</strong> Brainstorm and sketch the four functional layers: <em>Perception (Sensors/Cameras) &rarr; Edge Processing &rarr; Reasoning (AI Engine) &rarr; Farmer Advisory (Voice/SMS/Actuation)</em>.</li>
                                <li>Joint review session where faculty refines each team's architecture for technical feasibility and smallholder cost viability.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A finalized, faculty-vetted System Architecture Blueprint poster showing end-to-end data pipelines for regional crops.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Farm Automation Feasibility & Failure-Mode Analysis</h3>
                            <p><strong>Team Syndicate:</strong> Student teams of 3&ndash;4 assign internal industry roles: (1) Lead Agronomist, (2) IoT & AI Systems Engineer, (3) Smallholder Farmer Advocate, (4) Agricultural Financial Analyst.</p>
                            <ul>
                                <li>Teams analyze 4 common farm operations: <em>(a) Weed eradication, (b) Night-time drip fertigation, (c) Early blight diagnosis, (d) Grain moisture verification</em>.</li>
                                <li>Evaluate each task on three metrics: <em>Data Availability (1-5)</em>, <em>AI Technical Readiness (1-5)</em>, and <em>Cost-Benefit Ratio</em>.</li>
                                <li>Identify one catastrophic failure mode for each (e.g., AI misclassifies cash crop seedlings as broadleaf weeds) and formulate safety guardrails.</li>
                                <li>Swap matrices with a peer group for cross-team stress testing and peer grading.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A completed 4x4 Feasibility & Risk-Mitigation Matrix signed off through peer review.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code & Run Your Own Crop Stress Decision Engine</h3>
                            <p><strong>Hands-on Coding Task:</strong> Open Google Colab and build a standalone Python function <code>diagnose_crop_stress(leaf_color, soil_moisture, ambient_temp, wilting_index)</code> that implements multi-criteria evaluation.</p>
                            <ul>
                                <li>Implement nested logical branches accounting for drought stress, heat stress, and waterlogging.</li>
                                <li>Return a structured Python dictionary containing: <code>stress_level</code> ("None", "Moderate", "Critical"), <code>probable_cause</code>, and <code>immediate_recommendation</code>.</li>
                                <li>Test the function across 5 synthetic field edge cases and print formatted alert banners.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A self-tested, runnable Colab notebook containing code, test assertions, and structured execution outputs.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> What is the main characteristic that defines Artificial Intelligence?</p>
                    <ul>
                        <li>A) It uses electricity to function</li>
                        <li>B) It simulates human intelligence in machines</li>
                        <li>C) It is always connected to the internet</li>
                        <li>D) It replaces all human workers</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - AI is defined by its ability to simulate human intelligence, including learning, reasoning, and problem-solving.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> An app that identifies plant diseases by analyzing leaf photos is an example of:</p>
                    <ul>
                        <li>A) General AI</li>
                        <li>B) Deep Learning</li>
                        <li>C) Super AI</li>
                        <li>D) Manual computation</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Image recognition typically uses Deep Learning (neural networks) to analyze visual patterns in photos.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3:</strong> Which type of AI exists today and is used in agriculture?</p>
                    <ul>
                        <li>A) Super AI</li>
                        <li>B) General AI</li>
                        <li>C) Narrow AI</li>
                        <li>D) Conscious AI</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Narrow AI (also called Weak AI) is specialized for specific tasks and is what we use today, like crop disease detection or yield prediction.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>AI enables machines to learn, reason, and make decisions like humans</li>
                    <li>Machine Learning is a subset of AI that learns from data</li>
                    <li>Deep Learning uses neural networks for complex tasks like image recognition</li>
                    <li>Current AI in agriculture is "Narrow AI" - specialized for specific tasks</li>
                    <li>AI can help farmers make better decisions by processing vast amounts of data</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t2': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Machine Learning Paradigms</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Understand the three main types of machine learning</li>
                    <li>Identify when to use each learning paradigm</li>
                    <li>Apply ML paradigms to agricultural problems</li>
                    <li>Compare supervised vs unsupervised learning with real examples</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>Learning to Farm - Three Different Ways:</strong></p>
                    <p><strong>🏫 Supervised Learning:</strong> Like learning from an experienced farmer who shows you examples: "This leaf is healthy, this one has blight." You learn from labeled examples.</p>
                    <p><strong>🔍 Unsupervised Learning:</strong> Like sorting seeds yourself without anyone telling you the categories. You discover patterns: "These seeds look similar, let me group them together."</p>
                    <p><strong>🎮 Reinforcement Learning:</strong> Like training a puppy to herd sheep. Good behavior (sheep in pen) = treat. Bad behavior (sheep escape) = no treat. Learning through trial and error!</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Core Concepts</h2>
                
                <h3>1. Supervised Learning</h3>
                <p>Learning from labeled data - you provide input-output pairs.</p>
                <div class="example-box">
                    <strong>Agricultural Applications:</strong>
                    <ul>
                        <li>🌿 <strong>Crop Disease Classification:</strong> Input = leaf image, Output = disease name</li>
                        <li>📊 <strong>Yield Prediction:</strong> Input = weather + soil data, Output = expected yield</li>
                        <li>💰 <strong>Price Forecasting:</strong> Input = historical prices, Output = future price</li>
                    </ul>
                </div>

                <h3>2. Unsupervised Learning</h3>
                <p>Finding hidden patterns in unlabeled data - the algorithm discovers structure.</p>
                <div class="example-box">
                    <strong>Agricultural Applications:</strong>
                    <ul>
                        <li>🗺️ <strong>Soil Zoning:</strong> Cluster similar soil regions automatically</li>
                        <li>👥 <strong>Farm Segmentation:</strong> Group farms by characteristics</li>
                        <li>🌡️ <strong>Anomaly Detection:</strong> Find unusual sensor readings</li>
                    </ul>
                </div>

                <h3>3. Reinforcement Learning</h3>
                <p>Learning through interaction - agents take actions and receive rewards.</p>
                <div class="example-box">
                    <strong>Agricultural Applications:</strong>
                    <ul>
                        <li>🤖 <strong>Autonomous Tractors:</strong> Learn optimal routes through fields</li>
                        <li>💧 <strong>Smart Irrigation:</strong> Learn best watering schedules</li>
                        <li>🌱 <strong>Robotic Harvesting:</strong> Learn to pick fruits without damage</li>
                    </ul>
                </div>
            </div>

            <div class="code-section">
                <h2>💻 Python Implementation</h2>
                <pre><code class="language-python">
# Demonstrating ML Paradigms with Agricultural Examples

# 1. SUPERVISED LEARNING - Crop Classification
print("=== Supervised Learning Example ===")

# Training data: [temperature, rainfall] -> crop_suitable
training_data = [
    ([25, 100], "rice"),      # Warm, wet = rice
    ([30, 50], "wheat"),      # Warm, moderate = wheat
    ([20, 150], "rice"),      # Cool, very wet = rice
    ([35, 30], "millet"),     # Hot, dry = millet
]

def simple_crop_classifier(temp, rain):
    """Simple supervised learning model"""
    if rain > 100:
        return "rice"
    elif temp > 32 and rain < 40:
        return "millet"
    else:
        return "wheat"

# Test prediction
print(f"Temp=28, Rain=120mm -> {simple_crop_classifier(28, 120)}")

# 2. UNSUPERVISED LEARNING - Soil Clustering
print("\\n=== Unsupervised Learning Example ===")

soil_samples = [
    {"pH": 6.5, "nitrogen": 80, "organic": 3.2},
    {"pH": 6.8, "nitrogen": 75, "organic": 3.0},
    {"pH": 5.2, "nitrogen": 40, "organic": 1.5},
    {"pH": 5.0, "nitrogen": 35, "organic": 1.2},
    {"pH": 7.5, "nitrogen": 90, "organic": 4.0},
]

def simple_soil_clustering(samples):
    """Group soils by pH level (simple clustering)"""
    clusters = {"acidic": [], "neutral": [], "alkaline": []}
    
    for i, sample in enumerate(samples):
        if sample["pH"] < 6.0:
            clusters["acidic"].append(f"Sample_{i}")
        elif sample["pH"] < 7.2:
            clusters["neutral"].append(f"Sample_{i}")
        else:
            clusters["alkaline"].append(f"Sample_{i}")
    
    return clusters

clusters = simple_soil_clustering(soil_samples)
print("Soil Clusters:", clusters)

# 3. REINFORCEMENT LEARNING - Irrigation Simulation
print("\\n=== Reinforcement Learning Concept ===")

class SimpleIrrigationAgent:
    """Learns irrigation timing through rewards"""
    
    def __init__(self):
        self.q_values = {"morning": 0, "afternoon": 0, "evening": 0}
        self.learning_rate = 0.1
    
    def get_action(self):
        # Choose best known action
        return max(self.q_values, key=self.q_values.get)
    
    def learn(self, action, reward):
        # Update knowledge based on reward
        self.q_values[action] += self.learning_rate * reward
        print(f"  Irrigated in {action}: reward = {reward}")

# Simulate learning
agent = SimpleIrrigationAgent()
rewards = {"morning": 10, "afternoon": -5, "evening": 8}

print("Learning optimal irrigation time...")
for episode in range(5):
    for time_slot, reward in rewards.items():
        agent.learn(time_slot, reward)

print(f"Best learned time: {agent.get_action()}")
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
                            <h3>Live Paradigm Interactive Switchboard</h3>
                            <p><strong>Educator Action:</strong> The teacher executes a live interactive coding walkthrough in Google Colab presenting a unified farm dilemma: <em>"Optimizing Greenhouse Capsicum Cultivation"</em>.</p>
                            <ul>
                                <li><strong>Supervised Mode:</strong> Shows live training of a decision tree classifying fruit ripeness (Green, Semi-ripe, Ripe) with labeled RGB images.</li>
                                <li><strong>Unsupervised Mode:</strong> Strips all labels and runs K-Means on raw soil sensors (pH, EC, moisture) to discover 3 unexpected micro-climate clusters without human hints.</li>
                                <li><strong>Reinforcement Mode:</strong> Runs a live Q-learning script where an autonomous misting nozzle receives rewards (+10 for optimal vapor pressure deficit, -15 for leaf wetness causing fungal risk).</li>
                                <li>Instructor modifies reward penalties live to demonstrate how changing feedback reshapes AI behavior.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> Live demonstration summary table contrasting data dependencies, feedback mechanisms, and typical failure modes across the 3 paradigms.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>The Grand Agricultural Paradigm Formulation Lab</h3>
                            <p><strong>Studio Workshop:</strong> Faculty poses 4 complex, high-stakes agricultural problem statements to the class:</p>
                            <ol>
                                <li><em>Automated sorting of cashew nuts on high-speed conveyor belts.</em></li>
                                <li><em>Discovery of unrecorded pest infestation clusters from satellite thermal bands.</em></li>
                                <li><em>Autonomous farm drone solar recharge & spray scheduling across undulating terrain.</em></li>
                                <li><em>Predicting crop yield loss from combined heat-drought compound events.</em></li>
                            </ol>
                            <ul>
                                <li>Faculty challenges student groups to define the formal mathematical components: <em>Features ($X$), Ground Truth ($y$), Distance Metric, or State-Action-Reward tuple ($S, A, R$)</em>.</li>
                                <li>Faculty leads Socratic inquiry on trade-offs: <em>"Why can't we use reinforcement learning for annual crop yield prediction?"</em> (Answer: feedback loop takes a full year!).</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-developed Paradigm Selection Rubric validated by faculty for real-world agricultural projects.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Multi-Modal Farm Dataset Paradigm Dissection</h3>
                            <p><strong>Team Syndicate:</strong> Student teams receive a raw dataset dossier containing 4 distinct real-world agricultural data samples:</p>
                            <ul>
                                <li><strong>Dataset A:</strong> 5,000 labeled leaf images with bacterial wilt tags.</li>
                                <li><strong>Dataset B:</strong> 100,000 continuous time-series rows of unlabelled tractor engine telematics and fuel consumption.</li>
                                <li><strong>Dataset C:</strong> Soil moisture sensor logs mapped to pump switch state and resulting crop health metrics.</li>
                                <li><strong>Dataset D:</strong> 10-year historical Mandi market arrivals and daily clearing prices.</li>
                            </ul>
                            <p>Teams design an integrated ML pipeline specifying: which paradigm to apply, data labeling costs, data cleaning steps, and cross-validate their design through a 5-minute peer defense against another student team.</p>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A technical pitch poster with peer review scorecards evaluating paradigm appropriateness and deployment realism.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Code a Three-Way Agricultural Paradigm Simulator</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a self-contained Python script implementing basic models for each paradigm on agricultural data:</p>
                            <ul>
                                <li><strong>Part 1 (Supervised):</strong> Build a <code>predict_crop_type(temp, rainfall)</code> rule or Scikit-Learn classifier that predicts Wheat, Rice, or Millet with &gt;90% accuracy on sample data.</li>
                                <li><strong>Part 2 (Unsupervised):</strong> Implement a soil sample grouping function that categorizes 6 synthetic soil samples into Acidic, Neutral, and Alkaline without using class labels.</li>
                                <li><strong>Part 3 (Reinforcement):</strong> Complete the <code>SimpleIrrigationAgent</code> class by adding an exploration parameter (&epsilon;-greedy) to balance trying new watering hours vs exploiting the best-known slot.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An executable Colab notebook printing predictions, cluster assignments, and learned Q-values with markdown explanations.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> A model that learns from photos labeled "healthy crop" or "diseased crop" uses:</p>
                    <ul>
                        <li>A) Unsupervised Learning</li>
                        <li>B) Supervised Learning</li>
                        <li>C) Reinforcement Learning</li>
                        <li>D) No learning at all</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - Supervised Learning uses labeled data (input-output pairs) to train models.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> Automatically grouping farm plots based on soil characteristics without predefined categories is:</p>
                    <ul>
                        <li>A) Supervised Learning</li>
                        <li>B) Reinforcement Learning</li>
                        <li>C) Unsupervised Learning</li>
                        <li>D) Semi-supervised Learning</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Unsupervised Learning discovers patterns and groupings in unlabeled data.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3:</strong> An autonomous tractor that learns the best field navigation by receiving positive feedback when it avoids obstacles uses:</p>
                    <ul>
                        <li>A) Supervised Learning</li>
                        <li>B) Unsupervised Learning</li>
                        <li>C) Deep Learning</li>
                        <li>D) Reinforcement Learning</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: D</strong> - Reinforcement Learning involves agents learning through rewards and penalties from their actions.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li><strong>Supervised Learning:</strong> Learns from labeled examples (input → output)</li>
                    <li><strong>Unsupervised Learning:</strong> Discovers hidden patterns in unlabeled data</li>
                    <li><strong>Reinforcement Learning:</strong> Learns through trial, error, and rewards</li>
                    <li>Most agricultural AI applications use Supervised Learning</li>
                    <li>Choosing the right paradigm depends on your data and problem type</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t3': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 History and Evolution of AI/ML</h1>
                <p class="duration">⏱️ Duration: 1 hour</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Trace the major milestones in AI development</li>
                    <li>Understand the "AI winters" and recent resurgence</li>
                    <li>Appreciate how agriculture has adopted AI over time</li>
                    <li>Recognize key figures who shaped the field</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>AI's Growth is Like Crop Development:</strong></p>
                    <p>🌱 <strong>1950s-60s:</strong> Seeds planted (early ideas)</p>
                    <p>🥀 <strong>1970s-80s:</strong> First drought (AI Winter - funding cuts)</p>
                    <p>🌿 <strong>1990s:</strong> Recovery with new varieties (new algorithms)</p>
                    <p>🌾 <strong>2010s+:</strong> Bumper harvest! (Deep Learning revolution)</p>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 AI Timeline</h2>
                
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>🎯 1950 - The Birth</h3>
                        <p>Alan Turing proposes the "Turing Test" - can machines think?</p>
                    </div>
                    <div class="timeline-item">
                        <h3>💡 1956 - AI Gets Its Name</h3>
                        <p>Dartmouth Conference - "Artificial Intelligence" term coined by John McCarthy</p>
                    </div>
                    <div class="timeline-item">
                        <h3>❄️ 1974-1980 - First AI Winter</h3>
                        <p>Overpromised, underdelivered. Funding cuts worldwide.</p>
                    </div>
                    <div class="timeline-item">
                        <h3>🔧 1980s - Expert Systems</h3>
                        <p>Rule-based AI for specific domains (including early agricultural advisors)</p>
                    </div>
                    <div class="timeline-item">
                        <h3>❄️ 1987-1993 - Second AI Winter</h3>
                        <p>Expert systems too expensive and brittle</p>
                    </div>
                    <div class="timeline-item">
                        <h3>🏆 1997 - Deep Blue</h3>
                        <p>IBM's computer beats world chess champion Kasparov</p>
                    </div>
                    <div class="timeline-item">
                        <h3>🚀 2012 - Deep Learning Breakthrough</h3>
                        <p>AlexNet wins ImageNet competition - neural networks are back!</p>
                    </div>
                    <div class="timeline-item">
                        <h3>🌾 2020+ - AI in Every Field</h3>
                        <p>Agricultural AI becomes accessible to farmers worldwide</p>
                    </div>
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
                            <h3>Expert Systems vs Modern Deep Learning Live Face-off</h3>
                            <p><strong>Educator Action:</strong> The instructor live-executes an authentic 1980s-era agricultural expert system (a rigid tree of 15 hardcoded IF-THEN rules for wheat disease diagnosis) alongside a modern statistical model.</p>
                            <ul>
                                <li>The teacher deliberately introduces real-world field messiness: a misspelled symptom, a camera image taken in dim evening light, and an unseen soil pH value.</li>
                                <li>Students observe the catastrophic brittleness of the 1980s expert system (instant crash or silent wrong advice) compared to modern ML's probabilistic confidence score.</li>
                                <li>The teacher uses this live failure to explain the structural causes of the 1974 and 1987 AI Winters.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live comparative diagnostics log demonstrating rule fragility versus continuous representation learning on noisy agricultural inputs.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>AI Winter Forensic Post-Mortem & Rural Resilience Blueprint</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student cohorts to investigate the historical boom-and-bust cycles of AI and extract crucial lessons for 21st-century AgriTech:</p>
                            <ul>
                                <li><strong>Faculty Challenge:</strong> <em>"Why did multi-million dollar agricultural expert systems of the 1980s get abandoned by farming extension officers within two years?"</em></li>
                                <li><strong>Student Investigation:</strong> Groups analyze historical factors: maintenance bottleneck of manual rule updates, lack of rural compute power, absence of smartphone cameras, and over-promising to funding agencies.</li>
                                <li>Faculty and students co-draft the <em>"Rural AI Anti-Fragility Principles"</em>: offline edge capability, explainable recommendations, and low-cost hardware integration.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A co-created "AgriTech Anti-Fragility Charter" signed by faculty and student groups outlining non-negotiable field deployment standards.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>The AgriTech Evolution Time-Capsule & Retrospective</h3>
                            <p><strong>Team Syndicate:</strong> Student teams are assigned one of 4 seminal technological eras in farming automation:</p>
                            <ul>
                                <li><strong>Era 1 (1950&ndash;1970):</strong> Early mechanization, analog sensors, and Turing test principles in agriculture.</li>
                                <li><strong>Era 2 (1975&ndash;1990):</strong> Knowledge-based expert systems (MYCIN derivatives for pest management) & early Landsat satellite imagery.</li>
                                <li><strong>Era 3 (1995&ndash;2010):</strong> Statistical ML, GPS-guided tractors, support vector machines for yield monitoring.</li>
                                <li><strong>Era 4 (2012&ndash;Present):</strong> AlexNet revolution, convolutional neural networks for smartphone disease diagnosis, and transformer-based weather models.</li>
                            </ul>
                            <p>Each team prepares a 4-minute historical pitch presenting their era's breakthrough, hardware constraints, why it failed or succeeded, and peer-evaluates other teams.</p>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A 4-era chronological multimedia display detailing computational barriers and agricultural technology milestones.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Build & Stress-Test a Historical Rule-Based Agro-Advisor</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, build a historical 1985-style forward-chaining rule engine in Python for paddy leaf disease diagnosis:</p>
                            <ul>
                                <li>Write an explicit rule table evaluating symptoms: <code>lesion_shape</code>, <code>lesion_color</code>, <code>humidity_level</code>, and <code>crop_age</code>.</li>
                                <li>Inject 3 realistic real-world edge cases (e.g., conflicting symptoms caused by mixed infection, missing input values, out-of-range humidity).</li>
                                <li>Add an uncertainty handler that returns a fallback message: <em>"Confidence below threshold &mdash; consult GKVK extension agronomist"</em> rather than crashing.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A documented Python notebook demonstrating the rule engine, 3 failure stress-tests, and the graceful fallback mechanism.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Who coined the term "Artificial Intelligence"?</p>
                    <ul>
                        <li>A) Alan Turing</li>
                        <li>B) John McCarthy</li>
                        <li>C) Geoffrey Hinton</li>
                        <li>D) Elon Musk</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: B</strong> - John McCarthy coined the term at the 1956 Dartmouth Conference.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> What event in 2012 marked the beginning of the modern AI boom?</p>
                    <ul>
                        <li>A) Creation of ChatGPT</li>
                        <li>B) Deep Blue beats Kasparov</li>
                        <li>C) AlexNet wins ImageNet</li>
                        <li>D) First smartphone launched</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - AlexNet's victory showed deep neural networks could outperform traditional methods in image recognition.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>AI has had cycles of hype and disappointment ("AI Winters")</li>
                    <li>Modern AI success is driven by big data, computing power, and better algorithms</li>
                    <li>Deep Learning (2012+) revolutionized image and speech recognition</li>
                    <li>Agricultural AI is now practical and accessible to farmers</li>
                </ul>
            </div>
        </div>
    `,

    'm1-t4': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 AI/ML Applications in Agriculture</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

            <div class="learning-objectives">
                <h2>📌 Learning Objectives</h2>
                <ul>
                    <li>Identify major AI/ML applications in modern agriculture</li>
                    <li>Understand precision farming concepts</li>
                    <li>Explore real-world case studies of agricultural AI</li>
                    <li>Evaluate potential benefits and challenges</li>
                </ul>
            </div>

            <div class="farming-analogy">
                <h2>🚜 The Farming Connection</h2>
                <div class="analogy-box">
                    <p><strong>AI is Your Farm's Digital Workforce:</strong></p>
                    <ul>
                        <li>👁️ <strong>The Scout:</strong> Drones + AI detect problems early</li>
                        <li>🧠 <strong>The Analyst:</strong> ML predicts yields and prices</li>
                        <li>💧 <strong>The Manager:</strong> Smart systems optimize resources</li>
                        <li>🤖 <strong>The Worker:</strong> Robots harvest and weed</li>
                    </ul>
                </div>
            </div>

            <div class="core-concepts">
                <h2>📖 Key Applications</h2>
                
                <h3>1. Precision Farming</h3>
                <div class="app-card">
                    <p><strong>What:</strong> Using data to manage crops at micro-level</p>
                    <p><strong>How:</strong> GPS, sensors, drones, and AI algorithms</p>
                    <p><strong>Benefit:</strong> 20-30% reduction in input costs</p>
                    <pre><code class="language-python">
# Variable Rate Application Example
def calculate_fertilizer(soil_zones):
    """AI determines different fertilizer rates per zone"""
    recommendations = {}
    for zone, nitrogen_level in soil_zones.items():
        if nitrogen_level < 30:
            recommendations[zone] = "High fertilizer (100 kg/ha)"
        elif nitrogen_level < 60:
            recommendations[zone] = "Medium fertilizer (60 kg/ha)"
        else:
            recommendations[zone] = "Low fertilizer (30 kg/ha)"
    return recommendations

zones = {"Zone_A": 25, "Zone_B": 55, "Zone_C": 75}
print(calculate_fertilizer(zones))
                    </code></pre>
                </div>

                <h3>2. Crop Disease Detection</h3>
                <div class="app-card">
                    <p><strong>What:</strong> Identifying diseases from leaf images</p>
                    <p><strong>How:</strong> Deep Learning (CNN) analyzes photos</p>
                    <p><strong>Apps:</strong> Plantix, PlantVillage, Agrio</p>
                </div>

                <h3>3. Yield Prediction</h3>
                <div class="app-card">
                    <p><strong>What:</strong> Forecasting harvest quantity</p>
                    <p><strong>Inputs:</strong> Weather, soil, satellite imagery</p>
                    <p><strong>Accuracy:</strong> Up to 90% with good data</p>
                </div>

                <h3>4. Smart Irrigation</h3>
                <div class="app-card">
                    <p><strong>What:</strong> AI-controlled watering</p>
                    <p><strong>How:</strong> Soil sensors + weather data + ML</p>
                    <p><strong>Saves:</strong> 30-50% water usage</p>
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
                            <h3>Precision Variable-Rate Application (VRA) Heatmap Simulator</h3>
                            <p><strong>Educator Action:</strong> The teacher projects a live Python script rendering a simulated 100m &times; 100m farm field divided into a 10&times;10 spatial grid with varying nitrogen and soil electrical conductivity values.</p>
                            <ul>
                                <li>The instructor runs an AI algorithm that calculates localized fertilizer deficit and adjusts virtual spray nozzle rates for each 10m grid cell.</li>
                                <li>Compares live metrics: <strong>Uniform Blanket Application</strong> (120 kg/ha everywhere = high runoff, high cost) versus <strong>AI Variable-Rate Application</strong> (targeted dosing based on need).</li>
                                <li>Shows real-time cost savings (28% reduction) and calculates nitrogen runoff prevented from contaminating groundwater.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A live interactive demonstration output showing spatial fertilizer heatmaps, cost savings graphs, and leaching reduction stats.
                        </div>
                    </div>

                    <!-- Tier 2: Group of students and Faculty -->
                    <div class="lbd-card faculty-group-tier">
                        <div>
                            <span class="lbd-badge badge-faculty-group"><i class="fas fa-handshake"></i> Group of Students & Faculty: Collaborative Studio</span>
                            <h3>End-to-End Precision Agriculture Solution Co-Design</h3>
                            <p><strong>Studio Workshop:</strong> Faculty mentors student groups in a real-world design studio based on GKVK's experimental dryland plots facing dual threats of irregular monsoon showers and leaf-miner infestations.</p>
                            <ul>
                                <li><strong>Faculty Role:</strong> Poses operational trade-offs between battery life of IoT sensor motes, cellular uplink costs, and camera resolution requirements for early pest detection.</li>
                                <li><strong>Student Groups:</strong> Work as multidisciplinary squads (Sensor hardware team, Drone pathing team, AI model team, Farmer interface team).</li>
                                <li>Faculty leads an interactive review of each group's proposed data pipeline: from field image capture to edge inference to automated SMS alert in Kannada/English.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> An end-to-end operational blueprint featuring hardware specs, AI pipeline, and farmer notification protocol verified by faculty.
                        </div>
                    </div>

                    <!-- Tier 3: Group of students -->
                    <div class="lbd-card student-group-tier">
                        <div>
                            <span class="lbd-badge badge-student-group"><i class="fas fa-users"></i> Group of Students: Peer Syndicate Challenge</span>
                            <h3>Commercial AgriTech Platform Reverse-Engineering & Audit</h3>
                            <p><strong>Team Syndicate:</strong> Student teams select one leading agricultural AI application operating in India (e.g., <em>Plantix, Fasal, CropIn, Intello Labs, or DeHaat</em>) and conduct a comprehensive teardown audit:</p>
                            <ul>
                                <li><strong>Algorithm Audit:</strong> Identify the core AI techniques (CNN for images, Random Forest for yield, ARIMA/LSTM for weather).</li>
                                <li><strong>Farmer UX Critique:</strong> Evaluate whether an illiterate or semi-literate farmer can navigate the app using voice prompts and visual cues.</li>
                                <li><strong>Failure Points:</strong> What happens when the farmer has no internet connection in the field?</li>
                                <li>Teams formulate a 3-point feature upgrade proposal and defend it against another team's critique.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A structured teardown presentation and peer assessment scorecard rating usability, reliability, and algorithmic rigor.
                        </div>
                    </div>

                    <!-- Tier 4: Individual Student -->
                    <div class="lbd-card individual-tier">
                        <div>
                            <span class="lbd-badge badge-individual"><i class="fas fa-user-graduate"></i> Individual Student: Hands-on Colab Practice</span>
                            <h3>Implement a Multi-Zone Fertilizer & Irrigation Optimizer</h3>
                            <p><strong>Hands-on Coding Task:</strong> In Google Colab, write a complete Python program that processes spatial field sensor data and generates optimized farm prescriptions:</p>
                            <ul>
                                <li>Accept a list of 5 farm zones, each with <code>moisture_pct</code>, <code>nitrogen_ppm</code>, and <code>crop_stage</code>.</li>
                                <li>Calculate the exact irrigation volume (liters) and urea fertilizer (kg) required per zone using agronomic formulas.</li>
                                <li>Format and print a professional "Tractor Operator Dispatch Log" with clear warnings for zones exhibiting salinity or waterlogging.</li>
                                <li>Compute the total farm water and input cost savings compared to uniform irrigation.</li>
                            </ul>
                        </div>
                        <div class="lbd-task-box">
                            <strong>🎯 Actionable Deliverable:</strong> A completed, executed Python script producing formatted farm dispatch tables and verified cost-saving metrics.
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-section">
                <h2>📝 Knowledge Check</h2>
                
                <div class="quiz-question">
                    <p><strong>Q1:</strong> Precision farming helps farmers by:</p>
                    <ul>
                        <li>A) Applying same treatment to entire field</li>
                        <li>B) Using uniform irrigation everywhere</li>
                        <li>C) Treating different zones based on their specific needs</li>
                        <li>D) Ignoring soil variation</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Precision farming applies variable treatments based on specific zone characteristics.</p>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2:</strong> Which technology enables smartphone apps to identify plant diseases from photos?</p>
                    <ul>
                        <li>A) GPS</li>
                        <li>B) Bluetooth</li>
                        <li>C) Deep Learning / CNN</li>
                        <li>D) 5G networks</li>
                    </ul>
                    <details>
                        <summary>Show Answer</summary>
                        <p><strong>Answer: C</strong> - Convolutional Neural Networks (Deep Learning) analyze image patterns to identify diseases.</p>
                    </details>
                </div>
            </div>

            <div class="summary">
                <h2>📋 Key Takeaways</h2>
                <ul>
                    <li>AI applications span from planting to harvesting to market</li>
                    <li>Precision farming can reduce costs by 20-30%</li>
                    <li>Disease detection apps bring expert knowledge to every farmer</li>
                    <li>Smart irrigation saves water while improving yields</li>
                    <li>The key challenge is data collection and connectivity</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use by lecture system
if (typeof window !== 'undefined') {
    window.module1Handouts = module1Handouts;
}
