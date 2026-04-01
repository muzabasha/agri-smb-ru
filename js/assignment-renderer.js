// Assignment Topics Renderer

function renderAssignmentTopics() {
    const container = document.getElementById('assignmentContainer');
    if (!container || typeof assignmentTopics === 'undefined') {
        if (container) container.innerHTML = '<p>No assignment data loaded.</p>';
        return;
    }

    const data = assignmentTopics;
    let html = '';

    // Instructions panel
    html += `<div class="at-instructions">
        <h3><i class="fas fa-clipboard-check"></i> Instructions for Students</h3>
        <ol>${data.instructions.map(i => `<li>${i}</li>`).join('')}</ol>
    </div>`;

    // Category filter tabs
    html += `<div class="at-filter-bar">
        <button class="at-filter-btn active" onclick="filterAssignments('all')">
            <i class="fas fa-th"></i> All Topics <span class="at-count">70</span>
        </button>`;
    data.categories.forEach(cat => {
        html += `<button class="at-filter-btn" onclick="filterAssignments('${cat.id}')" style="--cat-color:${cat.color}">
            <i class="fas ${cat.icon}"></i> ${cat.name} <span class="at-count">${cat.topics.length}</span>
        </button>`;
    });
    html += `</div>`;

    // Search bar
    html += `<div class="at-search-bar">
        <i class="fas fa-search"></i>
        <input type="text" id="assignmentSearch" placeholder="Search topics by keyword..." oninput="searchAssignments(this.value)">
    </div>`;

    // Topic cards
    html += '<div class="at-topics-grid" id="assignmentGrid">';
    data.categories.forEach(cat => {
        cat.topics.forEach(topic => {
            html += `<div class="at-topic-card" data-category="${cat.id}" data-title="${topic.title.toLowerCase()}" data-desc="${topic.description.toLowerCase()}">
                <div class="at-topic-header">
                    <span class="at-topic-num" style="background:${cat.color}">${topic.id}</span>
                    <span class="at-cat-badge" style="background:${cat.color}15;color:${cat.color};border:1px solid ${cat.color}30">
                        <i class="fas ${cat.icon}"></i> ${cat.name}
                    </span>
                </div>
                <h4 class="at-topic-title">${topic.title}</h4>
                <p class="at-topic-desc">${topic.description}</p>
            </div>`;
        });
    });
    html += '</div>';

    container.innerHTML = html;
}

function filterAssignments(category) {
    document.querySelectorAll('.at-filter-btn').forEach(b => b.classList.remove('active'));
    event.target.closest('.at-filter-btn').classList.add('active');
    document.querySelectorAll('.at-topic-card').forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
    });
}

function searchAssignments(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll('.at-topic-card').forEach(card => {
        if (!q) { card.style.display = ''; return; }
        const match = card.dataset.title.includes(q) || card.dataset.desc.includes(q);
        card.style.display = match ? '' : 'none';
    });
}

function toggleAssignmentSection() {
    const section = document.getElementById('assignmentSection');
    const welcome = document.getElementById('welcomeScreen');
    const qbSec = document.getElementById('questionBankSection');
    const seminarSec = document.getElementById('seminarSection');
    const reportSec = document.getElementById('reportSection');
    if (!section) return;
    const isVisible = section.style.display !== 'none';
    if (isVisible) {
        section.style.display = 'none';
        if (welcome) welcome.style.display = 'block';
    } else {
        section.style.display = 'block';
        if (welcome) welcome.style.display = 'none';
        if (qbSec) qbSec.style.display = 'none';
        if (seminarSec) seminarSec.style.display = 'none';
        if (reportSec) reportSec.style.display = 'none';
        renderAssignmentTopics();
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
