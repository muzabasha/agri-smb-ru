# Module 2 Activities Templates (matching activities-handouts.js)
# Activities: m2-activity1, m2-activity2, m2-activity3, m2-activity4

m2_activity_templates = {
    "m2-activity1": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A research trial measures moisture, temperature, and bulk density across fifty soil cores.</p>
                <p>Computing soil compaction indexes manually for fifty cores is slow and error-prone.</p>
                <p>NumPy multi-dimensional arrays vectorize soil compaction math in milliseconds.</p>
                <p>How do we apply vector operations to identify compacted root barriers in fields?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> In your NumPy soil matrix, change the moisture reading of Row 2 from <code>14.5</code> to <code>26.0</code>. Observe how the root penetration resistance index updates automatically!</p>
</div>
        """
    },

    "m2-activity2": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer cooperative wants to forecast wheat harvest yield using rainfall and fertilizer logs.</p>
                <p>Overestimating harvest leads to unfulfilled buyer contracts and heavy financial penalties.</p>
                <p>Underestimating harvest causes emergency warehouse shortages and spoiled grain bags.</p>
                <p>How do we build a Scikit-Learn Linear Regression pipeline to predict exact grain yields?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Test your regression model with <code>seasonal_rainfall_mm = 550.0</code> and <code>fertilizer_kg = 135.0</code>. What is the predicted wheat harvest per acre?</p>
</div>
        """
    },

    "m2-activity3": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agricultural bank evaluates loan applications from farmers across Karnataka.</p>
                <p>The bank must verify that recommended crops match local soil pH and annual rainfall.</p>
                <p>Recommending water-hungry paddy for dry, low-rainfall zones guarantees crop failure.</p>
                <p>How do we train a multi-class decision tree classifier to recommend optimal crops?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Feed new soil numbers <code>[Soil_pH: 7.2, Rainfall: 550 mm]</code> into your trained decision tree. Which drought-tolerant crop does your model recommend?</p>
</div>
        """
    },

    "m2-activity4": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A research team builds four competing machine learning models for potato yield forecasting.</p>
                <p>Model A has high R² on training data, but Model B has lower MAE on unseen test data.</p>
                <p>Picking the wrong model causes financial loss when deployed across thousand-acre commercial farms.</p>
                <p>How do we systematically compare MAE, RMSE, and R² across multiple algorithms?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Compare the test MAE between Random Forest and Linear Regression in your evaluation table. Which algorithm achieved lower prediction error on unseen fields?</p>
</div>
        """
    }
}

print("Loaded Module 2 Activity templates:", len(m2_activity_templates))
