// Report Topics Renderer with FAQ accordion

function renderReportTopics() {
    const container = document.getElementById('reportContainer');
    if (!container || typeof reportTopics === 'undefined') {
        if (container) container.innerHTML = '<p>No report data loaded.</p>';
        return;
    }
    const data = reportTopics;
    let html = '';

    // Instructions
    html += `<div class="rt-instructions">
        <h3><i class="fas fa-file-alt"></i> Report Writing Guidelines</h3>
        <ol>${data.instructions.map(i => `<li>${i}</li>`).join('')}</ol>
    </div>`;

    // Category filter
    html += `<div class="at-filter-bar">
        <button class="at-filter-btn active" onclick="filterReports('all')">
            <i class="fas fa-th"></i> All Topics <span class="at-count">70</span>
        </button>`;
    data.categories.forEach(cat => {
        html += `<button class="at-filter-btn" onclick="filterReports('${cat.id}')">
            <i class="fas ${cat.icon}"></i> ${cat.name} <span class="at-count">${cat.topics.length}</span>
        </button>`;
    });
    html += `</div>`;

    // Search
    html += `<div class="at-search-bar">
        <i class="fas fa-search"></i>
        <input type="text" id="reportSearch" placeholder="Search report topics..." oninput="searchReports(this.value)">
    </div>`;

    // Cards with FAQ accordion
    html += '<div class="at-topics-grid" id="reportGrid">';
    data.categories.forEach(cat => {
        cat.topics.forEach(topic => {
            const faqId = 'rt-faq-' + topic.id;
            html += `<div class="at-topic-card" data-category="${cat.id}" data-title="${topic.title.toLowerCase()}" data-desc="${topic.description.toLowerCase()}">
                <div class="at-topic-header">
                    <span class="at-topic-num" style="background:${cat.color}">${topic.id}</span>
                    <span class="at-cat-badge" style="background:${cat.color}15;color:${cat.color};border:1px solid ${cat.color}30">
                        <i class="fas ${cat.icon}"></i> ${cat.name}
                    </span>
                </div>
                <h4 class="at-topic-title">${topic.title}</h4>
                <p class="at-topic-desc">${topic.description}</p>
                <button class="rt-faq-toggle" onclick="toggleReportFaq('${faqId}')">
                    <i class="fas fa-question-circle"></i> View 20 FAQs <i class="fas fa-chevron-down rt-chevron"></i>
                </button>
                <div class="rt-faq-list" id="${faqId}" style="display:none">
                    <ol>${topic.faqs.map(f => `<li>${f}</li>`).join('')}</ol>
                </div>
            </div>`;
        });
    });
    html += '</div>';
    container.innerHTML = html;
}

function toggleReportFaq(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const visible = el.style.display !== 'none';
    el.style.display = visible ? 'none' : 'block';
    const btn = el.previousElementSibling;
    if (btn) {
        const chevron = btn.querySelector('.rt-chevron');
        if (chevron) chevron.className = visible ? 'fas fa-chevron-down rt-chevron' : 'fas fa-chevron-up rt-chevron';
        btn.innerHTML = visible
            ? '<i class="fas fa-question-circle"></i> View 20 FAQs <i class="fas fa-chevron-down rt-chevron"></i>'
            : '<i class="fas fa-question-circle"></i> Hide FAQs <i class="fas fa-chevron-up rt-chevron"></i>';
    }
}

function filterReports(category) {
    document.querySelectorAll('#reportContainer .at-filter-btn').forEach(b => b.classList.remove('active'));
    event.target.closest('.at-filter-btn').classList.add('active');
    document.querySelectorAll('#reportGrid .at-topic-card').forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
    });
}

function searchReports(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll('#reportGrid .at-topic-card').forEach(card => {
        if (!q) { card.style.display = ''; return; }
        card.style.display = (card.dataset.title.includes(q) || card.dataset.desc.includes(q)) ? '' : 'none';
    });
}

function toggleReportSection() {
    const section = document.getElementById('reportSection');
    const welcome = document.getElementById('welcomeScreen');
    const qbSec = document.getElementById('questionBankSection');
    const asSec = document.getElementById('assignmentSection');
    const smSec = document.getElementById('seminarSection');
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
        if (smSec) smSec.style.display = 'none';
        renderReportTopics();
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
