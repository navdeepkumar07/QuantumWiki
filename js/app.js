const App = {
    init: () => {
        App.renderSidebar();
        App.handleRouting();
        App.setupTheme();
        App.setupSidebarToggle();

        // Listen for popstate (back button)
        window.addEventListener('popstate', App.handleRouting);
    },

    setupTheme: () => {
        const themeBtn = document.createElement('button');
        themeBtn.className = 'theme-toggle-btn';
        themeBtn.innerHTML = '<i data-lucide="sun"></i>';
        themeBtn.title = "Toggle Theme";

        // Insert into header
        const headerToggle = document.querySelector('.theme-toggle');
        headerToggle.appendChild(themeBtn);

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        App.updateThemeIcon(savedTheme);

        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            App.updateThemeIcon(next);
        });

        lucide.createIcons();
    },

    updateThemeIcon: (theme) => {
        const btn = document.querySelector('.theme-toggle-btn i');
        if (btn) {
            btn.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
            lucide.createIcons();
        }
    },

    renderSidebar: () => {
        const nav = document.getElementById('navLinks');
        nav.innerHTML = '';

        DATA.topics.forEach(topic => {
            const a = document.createElement('a');
            a.className = 'nav-item';
            a.href = `?topic=${topic.id}`;
            a.innerHTML = `
                <span>${topic.title}</span>
                <i data-lucide="${topic.icon}" style="width:16px; height:16px;"></i>
            `;

            a.addEventListener('click', (e) => {
                e.preventDefault();
                // Update URL without reload
                window.history.pushState({}, '', `?topic=${topic.id}`);
                App.loadTopic(topic.id);

                // Update active state
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                a.classList.add('active');

                // Re-render icons for new elements if any (though sidebar is static usually)
                lucide.createIcons();
            });

            nav.appendChild(a);
        });
        lucide.createIcons();
    },

    handleRouting: () => {
        const params = new URLSearchParams(window.location.search);
        const topicId = params.get('topic');

        if (topicId) {
            App.loadTopic(topicId);
            // Highlight active
            document.querySelectorAll('.nav-item').forEach(el => {
                if (el.getAttribute('href') === `?topic=${topicId}`) el.classList.add('active');
                else el.classList.remove('active');
            });
        }
    },

    loadTopic: (topicId) => {
        const container = document.getElementById('contentArea');
        Renderer.renderTopic(container, topicId);

        // Update Title
        const topicInfo = DATA.topics.find(t => t.id === topicId);
        if (topicInfo) {
            document.title = `${topicInfo.title} - Q-Wiki`;
            const titleEl = document.getElementById('pageTitle');
            if (titleEl) titleEl.textContent = topicInfo.title;
        }

        // Re-run icon generation for new content
        lucide.createIcons();
    },

    setupSidebarToggle: () => {
        const btn = document.getElementById('sidebarToggle');
        const shell = document.querySelector('.app-shell');

        if (btn) {
            btn.addEventListener('click', () => {
                shell.classList.toggle('sidebar-collapsed');
            });
        }
    },

    // Simple search
    setupSearch: () => {
        const input = document.getElementById('searchInput');
        input.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const links = document.querySelectorAll('.nav-item');
            links.forEach(link => {
                const text = link.textContent.toLowerCase();
                link.style.display = text.includes(val) ? 'flex' : 'none';
            });
        });
    }
};

// Start
document.addEventListener('DOMContentLoaded', () => {
    App.init();
    App.setupSearch();
});
