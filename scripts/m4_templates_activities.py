# Module 4 Activities Templates (matching activities-handouts.js)
# Activities: m4-activity1, m4-activity2, m4-activity3

m4_activity_templates = {
    "m4-activity1": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A student team starts writing Python code before agreeing on the project problem statement.</p>
                <p>After three weeks, each member has built incompatible pieces that cannot connect.</p>
                <p>Creating a structured planning document aligns goals, datasets, and deliverables before coding.</p>
                <p>How do we document project scope, milestones, and datasets in a professional charter?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Fill in your team's crop name and target accuracy in the project planning dictionary. Does every team member know their exact role?</p>
</div>
        """
    },

    "m4-activity2": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A machine learning model achieves high training scores in Colab but crashes on deployment.</p>
                <p>The web server fails because missing value imputation and scaling were not saved.</p>
                <p>An end-to-end pipeline bundles cleaning, scaling, and prediction into a single callable asset.</p>
                <p>How do we develop and export an automated pipeline that runs reliably outside notebooks?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Export your pipeline with <code>joblib.dump()</code> and reload it in a fresh cell. Does it predict crop outcomes without reloading raw data?</p>
</div>
        """
    },

    "m4-activity3": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>External evaluators only have ten minutes to assess eight weeks of hard capstone work.</p>
                <p>Reading dense code files takes too long, so evaluators judge projects by live demos.</p>
                <p>A working Streamlit web interface with real farm sliders delivers high visual impact.</p>
                <p>How do we present a live interactive capstone demonstration that earns top marks?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Rehearse your 2-minute elevator pitch: Problem -> Agronomic Data -> Model -> Farmer Benefit. Can you deliver it clearly in 120 seconds?</p>
</div>
        """
    }
}

print("Loaded Module 4 Activity templates:", len(m4_activity_templates))
