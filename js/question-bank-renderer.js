// Question Bank Renderer - Renders HOT questions on home page
// Supports Units 1, 2, 3

function renderQuestionBank() {
    const container = document.getElementById('questionBankContainer');
    if (!container) return;

    const units = [];
    if (typeof questionBankUnit1 !== 'undefined') units.push(questionBankUnit1);
    if (typeof questionBankUnit2 !== 'undefined') units.push(questionBankUnit2);
    if (typeof questionBankUnit3 !== 'undefined') units.push(questionBankUnit3);
    if (typeof questionBankUnit4 !== 'undefined') units.push(questionBankUnit4);

    if (units.length === 0) {
        container.innerHTML = '<p>No question bank data loaded.</p>';
        return;
    }

    // Build unit tabs
    let tabsHtml = '<div class="qb-unit-tabs">';
    units.forEach((unit, idx) => {
        tabsHtml += `<button class="qb-unit-tab ${idx === 0 ? 'active' : ''}" onclick="switchQBUnit(${idx})" id="qb-tab-${idx}">
            <i class="fas fa-book-open"></i> Unit ${unit.unitId}
        </button>`;
    });
    tabsHtml += '</div>';

    // Build unit content panels
    let panelsHtml = '';
    units.forEach((unit, idx) => {
        panelsHtml += `<div class="qb-unit-panel" id="qb-panel-${idx}" style="display:${idx === 0 ? 'block' : 'none'}">
            <div class="qb-unit-header">
                <h3><i class="fas fa-fire"></i> ${unit.unitTitle}</h3>
                <p class="qb-subtitle">${unit.questions.length} Higher Order Thinking Questions &bull; 10 Marks Each &bull; ${unit.topicsCovered.length} Topics Covered</p>
            </div>
            <div class="qb-questions-list">
                ${unit.questions.map((q, qi) => renderQuestion(q, qi, unit.unitId)).join('')}
            </div>
        </div>`;
    });

    container.innerHTML = tabsHtml + panelsHtml;
}

function renderQuestion(q, index, unitId) {
    const schemeHtml = q.scheme.map(s =>
        `<div class="qb-scheme-item"><span class="qb-marks-badge">${s.points}M</span> ${s.description}</div>`
    ).join('');

    return `
    <div class="qb-question-card" id="${q.id}">
        <div class="qb-question-header" onclick="toggleQBAnswer('${q.id}-answer')">
            <div class="qb-q-number">Q${index + 1}</div>
            <div class="qb-q-content">
                <div class="qb-topic-badge">
                    <a href="#${q.topicId}" class="qb-topic-link" title="Go to ${q.topicTitle}">
                        <i class="fas fa-link"></i> ${q.topicTitle}
                    </a>
                </div>
                <p class="qb-question-text">${q.question}</p>
                <div class="qb-marks-total"><i class="fas fa-star"></i> ${q.marks} Marks</div>
            </div>
            <div class="qb-expand-icon"><i class="fas fa-chevron-down"></i></div>
        </div>
        <div class="qb-answer-section" id="${q.id}-answer" style="display:none">
            <div class="qb-scheme-section">
                <h4><i class="fas fa-clipboard-list"></i> Marking Scheme</h4>
                <div class="qb-scheme-grid">${schemeHtml}</div>
            </div>
            <div class="qb-solution-section">
                <h4><i class="fas fa-lightbulb"></i> Detailed Solution</h4>
                <div class="qb-solution-content">${q.solution}</div>
            </div>
        </div>
    </div>`;
}

function switchQBUnit(idx) {
    document.querySelectorAll('.qb-unit-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.qb-unit-panel').forEach(p => p.style.display = 'none');
    document.getElementById('qb-tab-' + idx).classList.add('active');
    document.getElementById('qb-panel-' + idx).style.display = 'block';
}

function toggleQBAnswer(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const isVisible = el.style.display !== 'none';
    el.style.display = isVisible ? 'none' : 'block';
    const card = el.closest('.qb-question-card');
    if (card) {
        const icon = card.querySelector('.qb-expand-icon i');
        if (icon) icon.className = isVisible ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
    }
}

// Toggle entire Question Bank section visibility
function toggleQuestionBankSection() {
    const section = document.getElementById('questionBankSection');
    const welcome = document.getElementById('welcomeScreen');
    const assignSec = document.getElementById('assignmentSection');
    if (!section) return;
    const isVisible = section.style.display !== 'none';
    if (isVisible) {
        section.style.display = 'none';
        if (welcome) welcome.style.display = 'block';
    } else {
        section.style.display = 'block';
        if (welcome) welcome.style.display = 'none';
        if (assignSec) assignSec.style.display = 'none';
        renderQuestionBank();
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
