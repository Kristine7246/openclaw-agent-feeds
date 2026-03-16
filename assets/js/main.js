/**
 * OpenClaw Agent Feeds - Core Logic
 * Author: FlyPig AI
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // 2. State Management
    let allPacks = [];
    let currentCategory = '全部';
    const packModal = new bootstrap.Modal(document.getElementById('packModal'));
    const UNIFIED_SYSTEM_PREFIX = 'projects/4044680601076201931/screens/'; // Placeholder for future expansion

    // 3. Elements
    const grid = document.getElementById('packs-grid');
    const filterNav = document.querySelector('.filter-nav');
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
                        數據載入失敗。如果您是直接開啟 HTML 檔案，請改用 <strong>Live Server</strong> 或任何本地伺服器開啟以支援數據請求。
                    </div>
                </div>
            `;
        });

    // 5. Renderers
    function renderFilters() {
        const categories = ['全部', ...new Set(allPacks.map(p => p.category))];
        filterNav.innerHTML = categories.map(cat => `
            <button class="filter-btn ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">
                ${cat === '全部' ? '全部模組' : cat.replace('包', '')}
            </button>
        `).join('');

        // Re-attach listeners
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cat = e.target.getAttribute('data-category');
                updateFilter(cat);
            });
        });
    }

    function renderPacks() {
        const filtered = currentCategory === '全部' 
            ? allPacks 
            : allPacks.filter(p => p.category === currentCategory);

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="col-12 text-center py-5 text-muted">目前暫無該分類內容。</div>';
            return;
        }

        grid.innerHTML = filtered.map((pack, index) => `
            <div class="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="${(index % 4) * 100}">
                <article class="service-card shadow-sm h-100">
                    <div class="category-badge">${pack.category}</div>
                    <h3 class="h5 fw-bold mb-3">${pack.name}</h3>
                    <p class="text-muted small mb-4 flex-grow-1">${pack.description}</p>
                    <button onclick="window.app.viewDetails('${pack.id}')" class="btn-view-spec w-100">查看技術規格</button>
                </article>
            </div>
        `).join('');
    }

    // 6. Logic Handlers
    function updateFilter(category) {
        currentCategory = category;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.getAttribute('data-category') === category) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        renderPacks();
    }

    async function fetchMarkdown(path) {
        const response = await fetch(`feeds/${path}`);
        if (!response.ok) throw new Error('文件尚未準備就緒。');
        return await response.text();
    }

    function renderMarkdown(md) {
        if (typeof marked !== 'undefined') {
            return marked.parse(md);
        }
        // Fallback to simple parser if marked is not available
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
            
            // Check for installation guide
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
        modalContent.innerHTML = '<div class="loading-overlay"><div class="spinner-border text-primary" role="status"></div></div>';
        installGuideBtn.classList.add('d-none');

        try {
            const md = await fetchMarkdown(`${pack.path}installation_guide.md`);
            modalContent.innerHTML = renderMarkdown(md);
        } catch (err) {
            modalContent.innerHTML = `<div class="alert alert-info py-4 text-center">安裝指南準備中。</div>`;
        }
    }

    // Expose needed functions to global scope for inline onclicks
    window.app = { viewDetails };
});
