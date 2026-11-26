import re
import json

def flesch_kincaid_stats(text):
    # Remove HTML tags and code blocks
    text_clean = re.sub(r'<pre[\s\S]*?</pre>', '', text)
    text_clean = re.sub(r'<code[\s\S]*?</code>', '', text_clean)
    text_clean = re.sub(r'<[^>]+>', ' ', text_clean)
    text_clean = re.sub(r'\s+', ' ', text_clean).strip()
    
    words = [w for w in text_clean.split() if w]
    sentences = [s for s in re.split(r'[.!?]+', text_clean) if len(s.strip()) > 3]
    
    word_count = len(words)
    sentence_count = max(1, len(sentences))
    avg_words_per_sentence = word_count / sentence_count
    
    # Identify jargon words commonly too complex for beginner agri students
    complex_jargon = [
        'phenological', 'multivariate', 'sub-visual', 'telemetry', 'deterministic',
        'subconscious', 'dichotomy', 'paradigms', 'stochastic', 'eigenvalues',
        'orthogonal', 'heterogeneous', 'epistemological', 'heuristic', 'ubiquitous'
    ]
    found_jargon = [j for j in complex_jargon if j in text_clean.lower()]
    
    return {
        'word_count': word_count,
        'sentence_count': sentence_count,
        'avg_sentence_len': round(avg_words_per_sentence, 1),
        'jargon_found': found_jargon,
        'sample_snippet': text_clean[:250]
    }

files = [
    'js/handouts/module1-handouts-part1.js',
    'js/handouts/module1-handouts-part2.js',
    'js/handouts/module1-handouts-part3.js',
    'js/handouts/activities-handouts.js'
]

audit_data = {}
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        raw = fp.read()
    pattern = r"['\"](m1-[a-zA-Z0-9_-]+)['\"]\s*:\s*`([\s\S]*?)`(?=\s*[,}\n])"
    for m in re.finditer(pattern, raw):
        tid = m.group(1)
        content = m.group(2)
        audit_data[tid] = flesch_kincaid_stats(content)

for tid, stats in audit_data.items():
    print(f"{tid:<14} | Words: {stats['word_count']:>4} | Avg Sent: {stats['avg_sentence_len']:>4} w/s | Jargon: {', '.join(stats['jargon_found']) if stats['jargon_found'] else 'None'}")
