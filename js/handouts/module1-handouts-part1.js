// Module 1 Comprehensive Handouts - AI Fundamentals & Python Programming
// Generated for Agri-LMS - Complete with Farming Analogies, Code, Activities & Quizzes

const module1Handouts = {
    'm1-t1': `
        <div class="handout-premium">
            <div class="topic-header">
                <h1>🌾 Introduction to Artificial Intelligence</h1>
                <p class="duration">⏱️ Duration: 2 hours</p>
            </div>

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agronomist inspects five acres of tomato plants every morning.</p>
                <p>The agronomist spots leaf curling and soil dryness quickly.</p>
                <p>However, one person cannot inspect twenty thousand plants every day.</p>
                <p>Crop diseases spread fast when inspections are delayed.</p>
                <p>How can machines inspect every plant without getting tired?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> An experienced agronomist can walk through a field, examine leaf curling, sniff the topsoil, and decide when to irrigate without reading a manual. Can a machine ever truly replicate or exceed this organic intuition?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Human intuition is subconscious pattern recognition developed across years of experience. An AI system does not possess biology, but it analyzes millions of spectral, meteorological, and soil telemetry data points simultaneously across entire districts without fatigue. AI excels at micro-scale precision and sub-visual physiological stress detection days before symptoms are visible to the human eye.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> If a basic program turns on a water valve when soil moisture is below 30%, is that truly 'Artificial Intelligence' or simply traditional automation?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> A fixed threshold rule (if moisture < 30: pump_on()) is classical deterministic automation. It cannot adapt to upcoming rainfall forecasts, soil compaction, or crop phenological stages. True AI learns from historical multivariate patterns to make autonomous, adaptive decisions under uncertainty.</p>
                        </div>
                    </details>
                </div>
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

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Field Data:</strong> Soil moisture sensor value (18.0%).</li>
                            <li><strong>Thermal Data:</strong> Leaf temperature reading (34.5°C).</li>
                            <li><strong>Weather Forecast:</strong> 0 mm rain expected today.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Stress Rule:</strong> Check if leaf temperature exceeds 32°C.</li>
                            <li><strong>Moisture Rule:</strong> Check if soil moisture drops below 20%.</li>
                            <li><strong>Decision Logic:</strong> Combine conditions using logical AND.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Status Alert:</strong> Critical heat and moisture stress detected!</li>
                            <li><strong>Action Command:</strong> Turn on drip line motor immediately.</li>
                            <li><strong>Log:</strong> Save timestamped alert to farm notebook.</li>
                        </ul>
                    </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>leaf_temp = 28.0</code> and <code>soil_moisture = 35.0</code>. Run the cell again. What status alert appears now?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Demo):</strong> During the live stress-test of smart_farm_advisor, what decision was reached when soil moisture hit 18% (critical threshold) but rain probability surged to 95% within 2 hours?</p>
                    <ul>
                        <li>A) Trigger emergency flood irrigation unconditionally</li>
                        <li>B) Temporarily defer irrigation and set an automated tracking window to prevent waterlogging and reduce pumping costs</li>
                        <li>C) Halt the Python script with an uncaught exception</li>
                        <li>D) Apply chemical foliar spray immediately</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>Temporarily defer irrigation and set an automated tracking window to prevent waterlogging and reduce pumping costs.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> In the teacher's live simulation, algorithmic weighting demonstrated that irrigating right before a 95% probable downpour creates severe waterlogging, anaerobic root stress, and fertilizer leaching, while wasting pump electricity. The intelligent decision boundary temporarily defers pumping while actively tracking the precipitation timeline.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Unconditional irrigation overrides ignore weather data, causing water wastage and root asphyxiation.</li>
                                <li><strong>Why C is incorrect:</strong> Robust decision systems evaluate compound conditional branches without crashing.</li>
                                <li><strong>Why D is incorrect:</strong> Foliar spray is irrelevant to resolving an acute soil moisture vs precipitation dilemma.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Syndicate Feasibility Challenge):</strong> In the 4x4 Farm Automation Feasibility Matrix, why did automated weed eradication score lower technical readiness and higher operational risk than grain moisture verification?</p>
                    <ul>
                        <li>A) Grain moisture verification requires satellites, while weed eradication uses simple switches</li>
                        <li>B) Autonomous weed eradication requires real-time computer vision in variable outdoor lighting where misclassifying crop seedlings causes irreversible economic loss</li>
                        <li>C) Weeds cannot be photographed under direct sunlight</li>
                        <li>D) Grain moisture sensors require active reinforcement learning loops</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>Autonomous weed eradication requires real-time computer vision in variable outdoor lighting where misclassifying crop seedlings causes irreversible loss.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Robotic weeders operate at the physical edge under dusty, windy, and variable illumination conditions. False positive misclassifications destroy cash crops, whereas grain moisture testing is a low-risk, stationary electrical conductivity reading.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Grain moisture is measured with compact handheld capacitive or resistive sensors, not satellites.</li>
                                <li><strong>Why C is incorrect:</strong> Modern computer vision models detect weeds under sunlight, but outdoor noise makes edge deployment challenging.</li>
                                <li><strong>Why D is incorrect:</strong> Grain moisture sensing is a basic sensor transduction task requiring no RL loops.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> When executing diagnose_crop_stress() in Colab, what structured dictionary return indicated severe drought stress in test case 3?</p>
                    <ul>
                        <li>A) {'stress_level': 'None', 'status': 'Optimal'}</li>
                        <li>B) {'stress_level': 'Critical', 'probable_cause': 'Soil Moisture Deficit & Vapor Pressure Deficit', 'immediate_recommendation': 'Trigger Emergency Drip Cycle'}</li>
                        <li>C) {'status': 500, 'error': 'Timeout'}</li>
                        <li>D) {'action': 'Apply Fungicide'}</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>A dictionary returning Critical stress level, environmental cause, and immediate irrigation action.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The individual Colab activity required implementing a structured diagnostic function returning standardized JSON/dict schemas detailing categorical stress, root causes, and agronomic action steps.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> A 'None' stress level represents healthy crop vigor, not severe drought.</li>
                                <li><strong>Why C is incorrect:</strong> HTTP status codes reflect web server errors, not agronomic diagnostic responses.</li>
                                <li><strong>Why D is incorrect:</strong> Applying fungicide treats fungal pathogens, not moisture-deficit drought stress.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A mango packing warehouse receives five thousand fruits daily.</p>
                <p>Workers must separate export quality mangoes from damaged ones quickly.</p>
                <p>New workers make mistakes because grading rules take months to master.</p>
                <p>Export rejections cost the farmer thousands of rupees in penalties.</p>
                <p>How can a computer learn to grade mangoes automatically?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> When training an apprentice to identify citrus greening disease, you show thousands of labeled photographs. But when zoning an uncharted 1,000-acre agricultural valley, no labels exist. Why must machine learning treat these tasks with distinct paradigms?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Citrus greening detection is Supervised Learning: the model learns an explicit mathematical mapping between inputs (leaf pixels) and ground-truth targets (infected/healthy). Soil zoning has no predefined ground truth; it is Unsupervised Learning, where clustering algorithms group plots based on intrinsic mathematical similarities in soil texture, pH, and electrical conductivity.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> Why can't farmers use Reinforcement Learning to discover the optimal annual nitrogen fertilizer schedule through pure trial-and-error?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Reinforcement Learning requires thousands of rapid reward iterations. A farm field only provides one yield reward signal per year at harvest. Running 10,000 trial-and-error steps in real life would take 10,000 years and bankrupt the farmer on ruined harvests. Therefore, RL in agriculture is confined to computer simulations and rapid greenhouse environments.</p>
                        </div>
                    </details>
                </div>
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

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Weight:</strong> Fruit scale reading in grams (260.0 g).</li>
                            <li><strong>Vision:</strong> Percentage of skin surface blemishes (4.0%).</li>
                            <li><strong>Color:</strong> Skin yellowness rating (8 out of 10).</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Supervised Rules:</strong> Check weight and skin blemish thresholds.</li>
                            <li><strong>Comparison:</strong> Compare against training dataset standards.</li>
                            <li><strong>Classification:</strong> Assign grade category based on rules.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Grade Category:</strong> Grade A (Premium Export Quality).</li>
                            <li><strong>Belt Action:</strong> Route fruit to packing box number 1.</li>
                            <li><strong>Market Label:</strong> Print export certificate label.</li>
                        </ul>
                    </div>
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

<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>surface_blemish_pct = 18.0</code>. Run the code. Where is the fruit sent now?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live Switchboard):</strong> During the Teacher's Live Switchboard demo, when shifting from historical yield data to unlabeled soil electrical conductivity (EC) rasters, how did the loss formulation change?</p>
                    <ul>
                        <li>A) From Mean Squared Error against known harvest targets to minimizing within-cluster inertia (sum of squared distances to cluster centroids)</li>
                        <li>B) From unsupervised clustering to supervised deep learning</li>
                        <li>C) It remained identical because all algorithms use human ground-truth labels</li>
                        <li>D) It switched to reward-based Q-learning</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>From Mean Squared Error against targets to minimizing within-cluster inertia.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Supervised yield prediction minimizes prediction error against actual harvest numbers. Unsupervised clustering has no target labels, so its mathematical objective minimizes inertia—the geometric distance from sample points to cluster centroids.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> The transition demonstrated moving from supervised prediction to unsupervised clustering.</li>
                                <li><strong>Why C is incorrect:</strong> Unsupervised models have no ground-truth labels.</li>
                                <li><strong>Why D is incorrect:</strong> Q-learning is a reinforcement learning technique, not an unsupervised clustering metric.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Syndicate Formulation Lab):</strong> In the Multi-Modal Farm Dataset Dissection, which paradigm was chosen for training an autonomous orchard navigation robot, and why?</p>
                    <ul>
                        <li>A) Unsupervised PCA because navigation is purely about matrix dimensionality reduction</li>
                        <li>B) Supervised Linear Regression because steering angle is a single number</li>
                        <li>C) Reinforcement Learning because the robot learns a dynamic sequential navigation policy through real-time state-action-reward interactions</li>
                        <li>D) Static hardcoded lookup tables</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: C</strong> &mdash; <em>Reinforcement Learning because the robot learns dynamic policies via continuous state-action-reward feedback.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Orchard navigation requires continuous sequential decisions in an uncertain physical environment. The RL agent receives state observations (LiDAR, camera), executes actions (speed, steering), and receives rewards for obstacle-free path completion.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> PCA compresses feature vectors; it cannot navigate a moving vehicle.</li>
                                <li><strong>Why B is incorrect:</strong> Linear regression cannot handle dynamic sequential decision-making in changing terrain.</li>
                                <li><strong>Why D is incorrect:</strong> Hardcoded tables fail instantly when encountering unpredictable moving obstacles like animals or fallen branches.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your three-way agricultural paradigm simulator in Colab, what did the unsupervised K-Means module generate when given unlabeled N-P-K soil samples?</p>
                    <ul>
                        <li>A) Market price predictions in rupees per quintal</li>
                        <li>B) Distinct management zone cluster assignments (Cluster 0, 1, 2) classifying nutrient-deficient vs fertile zones</li>
                        <li>C) Image bounding boxes around weeds</li>
                        <li>D) Diesel consumption rates for tractors</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>Distinct management zone cluster assignments classifying nutrient-deficient vs fertile zones.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> The unsupervised Colab module grouped continuous multidimensional soil nutrient measurements into discrete management clusters without human intervention, defining variable fertilizer management zones.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Price prediction is a supervised regression task.</li>
                                <li><strong>Why C is incorrect:</strong> Bounding box localization is a supervised object detection task.</li>
                                <li><strong>Why D is incorrect:</strong> Fuel consumption tracking is an engineering measurement or supervised regression task.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>For generations, farmers sowed ragi seeds on fixed calendar dates.</p>
                <p>In recent years, monsoon rains have started at unpredictable times.</p>
                <p>Sowing on fixed calendar dates now causes seed drying and losses.</p>
                <p>Farmers need decisions based on live weather data, not fixed calendars.</p>
                <p>How has agricultural technology evolved to solve this problem?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> In the 1980s, millions of dollars were invested into agricultural Expert Systems with thousands of hand-crafted IF-THEN rules. Why did almost all of them collapse when deployed in real farming communities?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Agriculture is biologically diverse, weather-dependent, and non-linear. A rigid rule authored for clay soil in temperate zones failed completely in tropical alluvial or black cotton soils. Expert systems were brittle, unable to ingest real-time sensor streams, and broke whenever an unforeseen biological edge case arose.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> What triggered the historical 'AI Winters', and what makes modern AgriTech fundamentally immune to another total collapse?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Past AI Winters were caused by astronomical hype colliding with slow computers and virtually non-existent digital datasets. Modern AgriTech is anchored in real-world infrastructure: cheap cloud GPUs, high-resolution constellations of Earth observation satellites, low-cost IoT hardware, and proven commercial ROI.</p>
                        </div>
                    </details>
                </div>
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

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Rain Forecast:</strong> Predicted rain for next 48 hours (42.0 mm).</li>
                            <li><strong>Soil Sensor:</strong> Current topsoil moisture level (21.0%).</li>
                            <li><strong>Seed Type:</strong> Germination moisture requirement.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Moisture Check:</strong> Evaluate current soil water deficit.</li>
                            <li><strong>Rain Check:</strong> Verify incoming rain is safe, not flooding.</li>
                            <li><strong>Risk Scoring:</strong> Balance germination probability vs seed wash risk.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>Advisory:</strong> SOW NOW - Ideal soil absorption predicted.</li>
                            <li><strong>SMS Alert:</strong> Send notification in Kannada to registered farmers.</li>
                            <li><strong>Sowing Window:</strong> Optimal window is next 36 hours.</li>
                        </ul>
                    </div>
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

            
            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 1.3: Adaptive Sowing Advisory
forecast_rainfall_mm = 42.0   # Rain forecast for next 48 hours
soil_moisture = 21.0          # Current soil moisture percentage

# Adaptive recommendation
if forecast_rainfall_mm >= 30.0 and soil_moisture < 25.0:
    sowing_advice = "SOW NOW: Upcoming rainfall will trigger ideal germination."
elif forecast_rainfall_mm > 100.0:
    sowing_advice = "DO NOT SOW: Heavy rain will wash seeds away."
else:
    sowing_advice = "WAIT: Insufficient moisture for seed germination."

print("Smart Advisory:", sowing_advice)</code></pre>
            </div>
            <div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>forecast_rainfall_mm = 110.0</code>. Run the code. Why does the advisory warn against sowing?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Expert Systems vs Deep Learning Face-off):</strong> In the live comparison between a 1980s expert system and a modern CNN on shadowed leaf photos, why did the expert system fail immediately?</p>
                    <ul>
                        <li>A) It ran out of cloud GPU memory</li>
                        <li>B) It required rigid symbolic text inputs (e.g., exact lesion diameter) and could not ingest raw spatial pixel matrices or handle lighting variations</li>
                        <li>C) It attempted to download unsupervised datasets</li>
                        <li>D) It required a LoRaWAN connection</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>It required rigid symbolic text inputs and could not parse raw spatial pixel matrices or lighting variations.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> 1980s expert systems operated exclusively on manual symbolic logic (e.g., 'if spot_color == brown and diameter > 2mm'). They possessed zero capability to process raw image tensors or learn invariant spatial features.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Expert systems ran on simple CPUs, not modern GPUs.</li>
                                <li><strong>Why C is incorrect:</strong> Rule engines do not download or train on ML datasets.</li>
                                <li><strong>Why D is incorrect:</strong> LoRaWAN is a modern wireless standard invented decades later.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Forensic Post-Mortem Syndicate):</strong> What historic bottleneck identified in the syndicate audit caused early agricultural decision systems to be abandoned by farm extension services?</p>
                    <ul>
                        <li>A) The Knowledge Acquisition Bottleneck—human specialists could not translate the immense complexity of agricultural ecosystems into rigid IF-THEN rules</li>
                        <li>B) Farmers possessed too many 5G smartphones and refused desktop tools</li>
                        <li>C) Government bans on artificial intelligence in crop production</li>
                        <li>D) Satellite imagery was too inexpensive and flooded computer hard drives</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>The Knowledge Acquisition Bottleneck—human specialists could not codify every micro-climatic exception into rules.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Codifying the intricate, dynamic interactions of plant physiology, pathology, weather, and soil chemistry into deterministic rules proved impossible. Modern ML bypassed this bottleneck by letting models extract patterns directly from sensor and image data.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Smartphones and 5G did not exist in the 1980s.</li>
                                <li><strong>Why C is incorrect:</strong> Governments actively subsidized agricultural computerization; there was no ban.</li>
                                <li><strong>Why D is incorrect:</strong> Commercial satellite imagery was virtually non-existent for civilian farming in that era.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> When you stress-tested your rule-based agricultural advisor with out-of-range sensor values (pH = 9.8, Moisture = 3%), what behavior occurred?</p>
                    <ul>
                        <li>A) The script automatically morphed into a deep neural network</li>
                        <li>B) The program either hit an unhandled branch error or executed an inappropriate default fallback action</li>
                        <li>C) The program calculated an optimal non-linear fertilizer curve</li>
                        <li>D) The program initiated automated cloud model retraining</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>The program either hit an unhandled branch error or executed an inappropriate default fallback action.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Handcrafted rule engines lack generalizability: if an agricultural situation falls outside the pre-programmed conditional logic, the code either crashes or prescribes dangerously inappropriate blanket advice.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Rule scripts cannot autonomously rewrite their architecture into neural nets.</li>
                                <li><strong>Why C is incorrect:</strong> Static rules cannot compute non-linear regression curves without explicit algorithmic code.</li>
                                <li><strong>Why D is incorrect:</strong> Rule engines do not possess training pipelines or automated cloud integration.</li>
                            </ul>
                        </div>
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

<div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer notices leaves turning pale in one corner of ten acres.</p>
                <p>Spraying chemical fertilizer over the entire field wastes expensive bags.</p>
                <p>Over-fertilization also pollutes nearby groundwater and streams.</p>
                <p>The farmer needs to treat only the deficient plants precisely.</p>
                <p>How can multispectral drone cameras spot crop nutrient stress?</p>
            </div>


<!-- 💭 Reflexive Questions (Pre-Topic Discovery) -->
            <div class="reflexive-questions">
                <div class="reflexive-header">
                    <h2><i class="fas fa-brain"></i> 🤔 Reflexive Questions (Think Before You Learn)</h2>
                    <p class="reflexive-subtitle">Pause and ponder these real-world dilemmas before exploring the concepts. Formulate your intuition, then click to reveal the deeper insight.</p>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 1:</strong> Traditional agriculture applies fertilizer uniformly across an entire 20-acre plot. Why is this uniform application both economically wasteful and environmentally harmful?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Farm soils are inherently heterogeneous in organic matter, pH, and historical nutrient retention. Uniform application over-fertilizes naturally fertile zones—wasting costly inputs and causing groundwater nitrate runoff—while under-fertilizing nutrient-deprived zones, suppressing overall yield potential.</p>
                        </div>
                    </details>
                </div>
                <div class="reflexive-card">
                    <p class="reflexive-prompt"><strong>🤔 Reflection 2:</strong> If an AI crop disease model detects early blight from a smartphone photo, why must the app also record GPS coordinates, timestamp, and weather conditions?</p>
                    <details class="reflexive-details">
                        <summary><i class="fas fa-lightbulb"></i> Click to Reveal Perspective &amp; Intuition</summary>
                        <div class="reflexive-answer">
                            <p><strong>Agronomic &amp; Computational Insight:</strong> Disease epidemiology is driven by micro-climatic context. High humidity, warm temperatures, and geographical proximity to previous disease vectors determine whether a fungal spore will trigger an epidemic. Integrating spatial-temporal co-factors transforms a simple photo classifier into an intelligent regional early-warning epidemiological network.</p>
                        </div>
                    </details>
                </div>
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

<div class="ipo-model">
                <h2><i class="fas fa-cogs"></i> Input-Process-Output (IPO) Model</h2>
                <div class="ipo-container">
                    <div class="ipo-section input">
                        <h3>📥 INPUT</h3>
                        <ul>
                            <li><strong>Near Infrared (NIR):</strong> Leaf reflection score (0.68).</li>
                            <li><strong>Red Light Band:</strong> Leaf reflection score (0.14).</li>
                            <li><strong>Field Zone:</strong> GPS boundary coordinates for Block C.</li>
                        </ul>
                    </div>
                    <div class="ipo-section processing">
                        <h3>⚙️ PROCESSING</h3>
                        <ul>
                            <li><strong>Formula:</strong> Calculate NDVI = (NIR - Red) / (NIR + Red).</li>
                            <li><strong>Threshold Check:</strong> Compare NDVI against healthy crop baseline.</li>
                            <li><strong>Dosage Map:</strong> Compute variable fertilizer rate for stressed zones.</li>
                        </ul>
                    </div>
                    <div class="ipo-section output">
                        <h3>📤 OUTPUT</h3>
                        <ul>
                            <li><strong>NDVI Score:</strong> 0.66 (Healthy green crop canopy).</li>
                            <li><strong>Sprayer Map:</strong> Skip healthy zones, spray 15 kg/acre on weak zones.</li>
                            <li><strong>Savings:</strong> 40% reduction in chemical fertilizer cost.</li>
                        </ul>
                    </div>
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

            
            <div class="code-section">
                <h2><i class="fas fa-laptop-code"></i> 💻 Python Implementation (Google Colab Ready)</h2>
                <pre><code class="language-python"># Topic 1.4: Crop Health Index (NDVI) Calculator
near_infrared_reflection = 0.68  # Light reflected by healthy leaves
red_light_reflection = 0.14      # Light absorbed by chlorophyll

# NDVI calculation formula: (NIR - Red) / (NIR + Red)
crop_health_score = (near_infrared_reflection - red_light_reflection) / (near_infrared_reflection + red_light_reflection)

print(f"Calculated Crop Health Score (NDVI): {crop_health_score:.2f}")

if crop_health_score > 0.60:
    print("Fertilizer Action: Canopy healthy. Do not spray.")
elif crop_health_score > 0.30:
    print("Fertilizer Action: Moderate stress. Apply 15 kg/acre urea.")
else:
    print("Fertilizer Action: Severe stress! Inspect soil and apply booster.")</code></pre>
            </div>
            <div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>near_infrared_reflection = 0.28</code> and <code>red_light_reflection = 0.22</code>. What does the new low NDVI score indicate?</p>
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
                <h2>📝 Knowledge Check: Activity-Based Feedback MCQs</h2>
                <p class="quiz-intro">Test your understanding of the simulations, multi-tier architectures, and edge cases examined in this topic's Learn by Doing hub.</p>
                
                <div class="quiz-question">
                    <p><strong>Q1 (Teacher Live VRA Heatmap):</strong> In the Variable-Rate Application (VRA) heatmap simulator, how did the system calculate site-specific fertilizer dosage across distinct management zones?</p>
                    <ul>
                        <li>A) By applying a constant 60 kg/ha blanket rate across all grid cells</li>
                        <li>B) By intersecting multispectral NDVI canopy vigor with baseline soil nutrient grids to generate spatial prescription dosages</li>
                        <li>C) By maximizing fertilizer delivery to zones with highest weed infestation</li>
                        <li>D) By randomly assigning application rates to measure plant stress</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>By intersecting multispectral NDVI canopy vigor with baseline soil nutrient grids to generate spatial prescriptions.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Variable-Rate Application works by fusing vegetative vigor rasters with underlying soil fertility maps to determine precisely where crops can convert supplemental nutrients into yield and where inputs should be moderated.</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Blanket application is the exact opposite of precision VRA technology.</li>
                                <li><strong>Why C is incorrect:</strong> Fertilizing weeds wastes chemicals and chokes cash crops.</li>
                                <li><strong>Why D is incorrect:</strong> Randomized application destroys commercial farm yields and is never used in precision farming.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q2 (Commercial AgriTech Audit Syndicate):</strong> During the commercial platform reverse-engineering audit, what fatal operational flaw caused cloud-based real-time pest diagnosis apps to fail in rural smallholder villages?</p>
                    <ul>
                        <li>A) Dependency on high-bandwidth, low-latency 4G/5G connectivity for cloud image inference, rendering the app unusable in remote fields without cellular reception</li>
                        <li>B) Tractor alternators producing excessive electric voltage for phone charging</li>
                        <li>C) Farmers refusing to take photographs of crops</li>
                        <li>D) Camera sensors being unable to focus on green leaves</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: A</strong> &mdash; <em>Dependency on high-bandwidth cloud connectivity for inference, failing in fields without network reception.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> A major hurdle in AgriTech is the rural connectivity gap. Systems that require streaming high-resolution images to cloud servers fail in remote farm locations. Successful solutions deploy quantized edge-AI models running directly on device hardware.</p>
                            <ul>
                                <li><strong>Why B is incorrect:</strong> Tractor alternators have standard regulated 12V outputs and do not impact app design.</li>
                                <li><strong>Why C is incorrect:</strong> Smallholder farmers readily adopt photo-based advisory tools when functional offline.</li>
                                <li><strong>Why D is incorrect:</strong> Mobile phone camera optics easily focus on foliage.</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <div class="quiz-question">
                    <p><strong>Q3 (Individual Colab Practice):</strong> In your Colab Multi-Zone Optimizer script, which mathematical constraint ensured that the aggregate water delivered to all 4 field zones did not exceed the pump's 10,000-liter capacity?</p>
                    <ul>
                        <li>A) An unbounded exponential expansion function</li>
                        <li>B) A linear inequality constraint: sum(zone_flow_rates * durations) <= daily_pump_limit</li>
                        <li>C) Dividing water equally regardless of individual soil moisture deficits</li>
                        <li>D) Setting irrigation duration to zero when ambient temperature exceeded 25°C</li>
                    </ul>
                    <details>
                        <summary>Show Answer &amp; Feedback</summary>
                        <div class="quiz-feedback">
                            <p><strong>Correct Answer: B</strong> &mdash; <em>A linear inequality constraint ensuring total allocated water remained within the borehole pump capacity.</em></p>
                            <p><strong>Detailed Activity Feedback:</strong> Agricultural resource optimization problems are framed as constrained mathematical programs: an objective function (crop yield) is maximized subject to physical boundary constraints (total available water, pump flow rate limits).</p>
                            <ul>
                                <li><strong>Why A is incorrect:</strong> Unbounded functions violate physical conservation laws and pump capacities.</li>
                                <li><strong>Why C is incorrect:</strong> Equal division ignores soil moisture variations and produces waterlogging in moist zones.</li>
                                <li><strong>Why D is incorrect:</strong> Shutting off irrigation at 25°C causes severe heat stress during normal sunny crop growth conditions.</li>
                            </ul>
                        </div>
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
