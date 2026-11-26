# Module 3 Activities Templates (matching activities-handouts.js)
# Activities: m3-activity1, m3-activity2, m3-activity3, m3-activity4

m3_activity_templates = {
    "m3-activity1": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>An agricultural insurance corporation settles crop failure claims across fifty thousand farmers.</p>
                <p>Waiting for manual field loss surveys delays relief payments by six to nine months.</p>
                <p>Satellite NDVI, soil telemetry, and weather data predict field harvest outcomes with high accuracy.</p>
                <p>How do we build an automated crop yield forecasting pipeline to accelerate farmer insurance settlements?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Input severe drought telemetry: <code>ndvi = 0.38, soil_moisture = 14.0%</code>. Observe how the pipeline automatically flags a crop insurance loss event!</p>
</div>
        """
    },

    "m3-activity2": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A farmer sends a blurry smartphone photo of yellowing spots on tomato leaves to an agronomist.</p>
                <p>Misdiagnosing fungal blight as bacterial spot results in spraying the wrong chemical treatment.</p>
                <p>Wrong sprays waste money and allow fungal pathogens to kill the entire tomato crop within days.</p>
                <p>How do we build a multi-class image classifier that outputs trustworthy disease probabilities?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Test a leaf with borderline features between Early Blight and Healthy Canopy. Observe how softmax probabilities expose diagnostic uncertainty!</p>
</div>
        """
    },

    "m3-activity3": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A government agricultural laboratory processes five thousand soil health cards every season.</p>
                <p>Technicians must calculate specific Nitrogen, Phosphorus, and Potassium dosages for each farmer.</p>
                <p>Doing manual calculations for five thousand cards creates calculation fatigue and errors.</p>
                <p>How do we automate soil health classification and fertilizer recommendation scripts in Python?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change the soil test input to highly acidic soil (<code>pH = 4.8</code>). Observe how the system automatically appends an agricultural lime prescription!</p>
</div>
        """
    },

    "m3-activity4": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A precision grape vineyard in Bijapur needs three days advance warning before frost strikes.</p>
                <p>Cold frost freezes sensitive grape berries on the vine, destroying annual export profits.</p>
                <p>Weather stations provide continuous telemetry, but raw numbers alone do not forecast frost.</p>
                <p>How do we build an autoregressive weather forecasting model to protect vineyards from frost?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Test an extreme winter telemetry drop where minimum night temperature hits <code>3.5°C</code>. Verify that the system triggers the emergency sprinkler frost protection alert!</p>
</div>
        """
    }
}

print("Loaded Module 3 Activity templates:", len(m3_activity_templates))
