/**
 * OpenClaw Agent Feeds - Core Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // 2. State Management
    let allPacks = [];
    let currentCategory = '全部';
    let currentLevel = '全部';
    const packModal = new bootstrap.Modal(document.getElementById('packModal'));

    // 3. Elements
    const grid = document.getElementById('packs-grid');
    const categoryNav = document.getElementById('category-filters');
    const levelNav = document.getElementById('level-filters');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modalTitle');
    const installGuideBtn = document.getElementById('installGuideBtn');

    // 4. Load Data
    fetch('feeds/packs.json')
        .then(res => {
            if (!res.ok) throw new Error('無法讀取模組清單。');
            return res.json();
        })
        .then(data => {
            allPacks = data;
            renderFilters();
            renderPacks();
        })
        .catch(err => {
            console.error("Error loading packs:", err);
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-warning d-inline-block">
                        <i class="fas fa-exclamation-triangle me-2"></i> 
                        數據載入失敗。請檢查網絡或使用伺服器環境開啟。
                    </div>
                </div>
            `;
        });

    // 5. Renderers
    function renderFilters() {
        // Category Filters
        const categories = ['全部', ...new Set(allPacks.map(p => p.category))];
        if (categoryNav) {
            categoryNav.innerHTML = categories.map(cat => `
                <button class="filter-btn category-btn ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">
                    ${cat === '全部' ? '全部模組' : cat.replace('包', '')}
                </button>
            `).join('');
        }

        // Level Filters
        const levels = ['全部', '入門', '進階', '專家'];
        if (levelNav) {
            levelNav.innerHTML = levels.map(lvl => `
                <button class="filter-btn level-btn ${lvl === currentLevel ? 'active' : ''}" data-level="${lvl}">
                    ${lvl === '全部' ? '所有等級' : lvl}
                </button>
            `).join('');
        }

        // Listeners for Categories
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentCategory = e.target.getAttribute('data-category');
                updateFilterUI();
                renderPacks();
            });
        });

        // Listeners for Levels
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentLevel = e.target.getAttribute('data-level');
                updateFilterUI();
                renderPacks();
            });
        });
    }

    function updateFilterUI() {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === currentCategory);
        });
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-level') === currentLevel);
        });
    }

    function renderPacks() {
        const filtered = allPacks.filter(p => {
            const matchesCat = currentCategory === '全部' || p.category === currentCategory;
            const matchesLvl = currentLevel === '全部' || p.level === currentLevel;
            return matchesCat && matchesLvl;
        });

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="col-12 text-center py-5 text-muted">目前暫無符合條件的內容。</div>';
            return;
        }

        grid.innerHTML = filtered.map((pack, index) => `
            <div class="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="${(index % 4) * 100}">
                <article class="service-card shadow-sm h-100">
                    <div class="d-flex justify-content-between align-items-start">
                        <span class="category-badge">${pack.category}</span>
                        <span class="badge ${getLevelClass(pack.level)}">${pack.level}</span>
                    </div>
                    <h3 class="h5 fw-bold mb-3">${pack.name}</h3>
                    <p class="text-muted small mb-4 flex-grow-1">${pack.description}</p>
                    <button onclick="window.app.viewDetails('${pack.id}')" class="btn-view-spec w-100">查看技術規格</button>
                </article>
            </div>
        `).join('');
    }

    function getLevelClass(level) {
        switch(level) {
            case '專家': return 'bg-danger';
            case '進階': return 'bg-warning text-dark';
            default: return 'bg-info text-dark';
        }
    }

    // 6. Logic Handlers
    async function fetchMarkdown(path) {
        const response = await fetch(`feeds/${path}`);
        if (!response.ok) throw new Error('文件尚未準備就緒。');
        const text = await response.text();
        
        // Safety check: if the server returns index.html instead of MD
        if (text.trim().toLowerCase().startsWith('<!doctype') || text.trim().toLowerCase().startsWith('<html')) {
            throw new Error('該模組文件仍在撰寫中。');
        }
        
        return text;
    }

    function renderMarkdown(md) {
        if (typeof marked !== 'undefined') {
            return marked.parse(md);
        }
        return md.replace(/\n\n/g, '<p></p>').replace(/\n/g, '<br>');
    }

    async function viewDetails(packId) {
        const pack = allPacks.find(p => p.id === packId);
        if (!pack) return;

        modalTitle.innerText = pack.name;
        modalContent.innerHTML = '<div class="loading-overlay"><div class="spinner-border text-primary" role="status"></div></div>';
        installGuideBtn.classList.add('d-none');
        
        packModal.show();

        try {
            const md = await fetchMarkdown(`${pack.path}overview.md`);
            modalContent.innerHTML = renderMarkdown(md);
            
            installGuideBtn.onclick = () => loadInstallGuide(packId);
            installGuideBtn.classList.remove('d-none');
        } catch (err) {
            modalContent.innerHTML = `<div class="alert alert-warning py-4 text-center">
                <i class="fas fa-exclamation-triangle mb-3 d-block fs-3"></i>
                ${err.message}
            </div>`;
        }
    }

    async function loadInstallGuide(packId) {
        const pack = allPacks.find(p => p.id === packId);
        if (!pack) return;
        
        modalContent.innerHTML = '<div class="loading-overlay"><div class="spinner-border text-primary" role="status"></div></div>';
        installGuideBtn.classList.add('d-none');

        try {
            const md = await fetchMarkdown(`${pack.path}installation_guide.md`);
            modalContent.innerHTML = renderMarkdown(md);
        } catch (err) {
            modalContent.innerHTML = `<div class="alert alert-info py-4 text-center">安裝指南準備中。</div>`;
        }
    }

    // Expose needed functions to global scope
    window.app = { viewDetails, loadInstallGuide };
});
