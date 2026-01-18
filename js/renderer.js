const Renderer = {
    // Render the specific equation block with definition grid
    renderEquationBlock: (container, equationData) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'equation-wrapper';

        // Main Math Display
        const mathBlock = document.createElement('div');
        mathBlock.className = 'equation-block';
        // Use KaTeX to render
        try {
            katex.render(equationData.latex, mathBlock, {
                displayMode: true,
                throwOnError: false
            });
        } catch (e) {
            mathBlock.textContent = equationData.latex;
        }
        wrapper.appendChild(mathBlock);

        // Symbol Grid (Legend)
        // Since interactive tooltips inside KaTeX are hard, we use a sleek grid below it
        if (equationData.symbols) {
            const grid = document.createElement('div');
            grid.className = 'symbol-grid';

            equationData.symbols.forEach(sym => {
                const item = document.createElement('div');
                item.className = 'symbol-item';

                const symMath = document.createElement('div');
                symMath.className = 'symbol-math';
                katex.render(sym.tex, symMath, { throwOnError: false });

                const symDef = document.createElement('div');
                symDef.className = 'symbol-def';
                symDef.innerHTML = `<strong>${sym.def}</strong><br><span style="font-size:0.8em; opacity:0.7">${sym.unit || ''}</span>`;

                item.appendChild(symMath);
                item.appendChild(symDef);
                grid.appendChild(item);
            });
            wrapper.appendChild(grid);
        }

        container.appendChild(wrapper);
    },

    // Render Derivation List
    renderDerivations: (container, steps) => {
        const div = document.createElement('div');
        div.className = 'derivation-container';
        div.innerHTML = '<h3>Derivation</h3>';

        steps.forEach((step, index) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'derivation-step';

            const desc = document.createElement('div');
            desc.className = 'step-description';
            desc.innerHTML = `${index + 1}. ${step.text}`;

            // Render inline math in text
            if (window.renderMathInElement) {
                renderMathInElement(desc, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false },
                        { left: '\\(', right: '\\)', display: false },
                        { left: '\\[', right: '\\]', display: true }
                    ],
                    throwOnError: false
                });
            }

            const math = document.createElement('div');
            math.className = 'step-math';
            katex.render(step.latex, math, {
                displayMode: false,
                throwOnError: false
            });

            stepDiv.appendChild(desc);
            stepDiv.appendChild(math);
            div.appendChild(stepDiv);
        });

        container.appendChild(div);
    },

    renderScientist: (container, scientistData) => {
        if (!scientistData) return;
        const div = document.createElement('div');
        div.className = 'scientist-card';
        div.innerHTML = `
            <div class="scientist-label">Key Scientist</div>
            <div class="scientist-name">${scientistData.name}</div>
            <div class="scientist-bio">${scientistData.bio}</div>
        `;
        container.appendChild(div);
    },

    renderPractical: (container, text) => {
        if (!text) return;
        const div = document.createElement('div');
        div.className = 'practical-card';
        div.innerHTML = `
            <div class="card-icon"><i data-lucide="book-open"></i></div>
            <div class="card-content">
                <h4>Practical Significance</h4>
                <p>${text}</p>
            </div>
        `;
        container.appendChild(div);
        lucide.createIcons({ root: div });
    },

    renderApplication: (container, text) => {
        if (!text) return;
        const div = document.createElement('div');
        div.className = 'application-card';
        div.innerHTML = `
            <div class="card-icon"><i data-lucide="cog"></i></div>
            <div class="card-content">
                <h4>Real-Life Application</h4>
                <p>${text}</p>
            </div>
        `;
        container.appendChild(div);
        lucide.createIcons({ root: div });
    },

    renderFunFact: (container, factText) => {
        if (!factText) return;
        const div = document.createElement('div');
        div.className = 'fun-fact-card';
        div.innerHTML = `
            <div class="card-icon"><i data-lucide="lightbulb"></i></div>
            <div class="card-content">
                <h4>Did You Know?</h4>
                <p>${factText}</p>
            </div>
        `;
        container.appendChild(div);
        // Initialize icon for this specific element
        lucide.createIcons({
            root: div
        });
    },

    // Main Topic Renderer
    renderTopic: (container, topicId) => {
        container.innerHTML = ''; // Clear current content
        const data = DATA.content[topicId];

        if (!data) {
            container.innerHTML = '<h2>Topic not found</h2>';
            return;
        }

        // Header (Title & Intro)
        const header = document.createElement('div');
        header.className = 'topic-header';
        header.innerHTML = `
            <h1>${data.title}</h1>
            <p class="topic-meta">${data.intro}</p>
        `;
        container.appendChild(header);

        // 2-Column Grid Container
        const grid = document.createElement('div');
        grid.className = 'content-grid';

        // Left Column: Visuals (Image, Scientist, Fact)
        const leftCol = document.createElement('div');
        leftCol.className = 'visual-col';

        if (data.image) {
            leftCol.innerHTML += `<img src="${data.image}" alt="${data.title}" class="topic-image">`;
        }
        if (data.scientist) {
            Renderer.renderScientist(leftCol, data.scientist);
        }
        if (data.practical) {
            Renderer.renderPractical(leftCol, data.practical);
        }
        if (data.application) {
            Renderer.renderApplication(leftCol, data.application);
        }
        if (data.funFact) {
            Renderer.renderFunFact(leftCol, data.funFact);
        }

        // Right Column: Math (Main Eq, Derivations)
        const rightCol = document.createElement('div');
        rightCol.className = 'equation-col';

        if (data.mainEquation) {
            Renderer.renderEquationBlock(rightCol, data.mainEquation);
        }

        // Append columns to grid
        grid.appendChild(leftCol);
        grid.appendChild(rightCol);
        container.appendChild(grid);

        // Derivations (Full Width below grid, or inside right col? User said "side by side with equations". 
        // Let's put derivations BELOW the grid for space, or inside right col if we want everything side-by-side. 
        // Given derivations are long, let's keep them full width below for readability, 
        // OR put them in right col. Let's put them in right col for better flow if not too wide.
        // Actually, derivation steps are text heavy. Let's try putting them in the right column to respect "side by side".
        if (data.derivations) {
            Renderer.renderDerivations(rightCol, data.derivations);
        }
    }
};
