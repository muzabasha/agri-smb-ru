activity_enhancements = {
    "m1-activity1": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>You join an agricultural research team analyzing satellite imagery across Karnataka.</p>
                <p>You must verify that your cloud computer is ready to process agricultural data.</p>
                <p>Testing your cloud environment first prevents code crashes during live field experiments.</p>
                <p>How do we verify Python, libraries, and cloud storage before starting our project?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>lab_folder = "GKVK_Field_Labs"</code> in your verification cell. Run it again to confirm your custom agricultural lab folder is created!</p>
</div>
        """
    },

    "m1-activity2": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>A seed testing laboratory evaluates whether commercial seed batches qualify for certification.</p>
                <p>Technicians place 100 seeds on moist filter paper in Petri dishes.</p>
                <p>Batches with germination rates below 85% cannot be certified for public sale.</p>
                <p>How do we write Python programs to automate seed certification and area math?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Change <code>seeds_germinated_count = 79</code> in Challenge 1. Does the seed batch pass certification? What action is ordered?</p>
</div>
        """
    },

    "m1-activity3": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>You survey five farmers in your village growing tomatoes, ragi, and maize.</p>
                <p>Each farmer applies different fertilizer amounts and gets different crop yields.</p>
                <p>You need to calculate average yields and identify top-performing farmers.</p>
                <p>How does Python data analysis reveal the most profitable agricultural practices?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> Add a sixth farmer <code>['Basavaraj', 'Ragi', 4.0, 18.0, 6.2, 55]</code> to the dataset. Re-run your analysis to see how the village average yield updates!</p>
</div>
        """
    },

    "m1-activity4": {
        "story": """
            <div class="farm-dilemma-box" style="background:#f0fdf4; border-left:5px solid #16a34a; padding:1.25rem; border-radius:8px; margin:1.5rem 0;">
                <h3 style="color:#166534; margin-top:0;"><i class="fas fa-tractor"></i> 📖 The Farm Dilemma</h3>
                <p>Looking at rows of numbers in spreadsheets makes seasonal patterns hard to see.</p>
                <p>A farmer needs to see when monthly crop water needs exceed local rainfall.</p>
                <p>Visual charts communicate irrigation schedules and drought risks immediately.</p>
                <p>How do Matplotlib bar charts and line curves highlight irrigation danger periods?</p>
            </div>
        """,
        "whatif": """
<div class="interactive-whatif">
    <h4><i class="fas fa-flask"></i> 🔄 Interactive What-If Challenge</h4>
    <p><strong>Try it in Colab:</strong> In your rainfall list, double the monsoon rainfall for July to <code>360 mm</code>. Re-run the plot to see how the rainfall bar surges above crop water demand!</p>
</div>
        """
    }
}

print("Loaded Activity templates:", len(activity_enhancements))
