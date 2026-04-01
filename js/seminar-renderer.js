// Seminar Topics Renderer

function renderSeminarTopics() {
    const container = document.getElementById('seminarContainer');
    if (!container || typeof seminarTopics === 'undefined') {
        if (container) container.innerHTML = '<p>No seminar data loaded.</p>';
        return;
    }
    const data = seminarTopics;
    let html = '';

    // Instructions
    html += `<div class="st-instructions">
        <h3><i class="fas fa-chalkboard-teacher"></i> Presentation Guidelines</h3>
        <ol>${data.instructions.map(i => `<li>${i}</li>`).join('')}</ol>
    </div>`;

    // Category filter
    html += `<div class="at-filter-bar">
        <button class="at-filter-btn active" onclick="filterSeminars('all')">
            <i class="fas fa-th"></i> All Topics <span class="at-count">70</span>
        </button>`;
    data.categories.forEach(cat => {
        html += `<button class="at-filter-btn" onclick="filterSeminars('${cat.id}')">
            <i class="fas ${cat.icon}"></i> ${cat.name} <span class="at-count">${cat.topics.length}</span>
        </button>`;
    });
    html += `</div>`;

    // Search
    html += `<div class="at-search-bar">
        <i class="fas fa-search"></i>
        <input type="text" id="seminarSearch" placeholder="Search seminar topics..." oninput="searchSeminars(this.value)">
    </div>`;

    // Cards
    html += '<div class="at-topics-grid" id="seminarGrid">';
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

function filterSeminars(category) {
    document.querySelectorAll('#seminarContainer .at-filter-btn').forEach(b => b.classList.remove('active'));
    event.target.closest('.at-filter-btn').classList.add('active');
    document.querySelectorAll('#seminarGrid .at-topic-card').forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
    });
}

function searchSeminars(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll('#seminarGrid .at-topic-card').forEach(card => {
        if (!q) { card.style.display = ''; return; }
        card.style.display = (card.dataset.title.includes(q) || card.dataset.desc.includes(q)) ? '' : 'none';
    });
}

function toggleSeminarSection() {
    const section = document.getElementById('seminarSection');
    const welcome = document.getElementById('welcomeScreen');
    const qbSec = document.getElementById('questionBankSection');
    const asSec = document.getElementById('assignmentSection');
    if (!section) return;
    const isVisible = section.style.display !== 'none';
    if (isVisible) {
        section.style.display = 'none';
        if (welcome) welcome.style.display = 'block';
    } else {
        section.style.display = 'block';
        if (welcome) welcome.style.display = 'none';
        if (qbSec) qbSec.style.display = 'none';
        if (asSec) asSec.style.display = 'none';
        renderSeminarTopics();
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
