const DATA = {
    topics: [
        {
            id: 'relativity',
            title: 'Theory of Relativity',
            icon: 'orbit', // Lucide icon name
            description: 'The fundamental theory of space and time.'
        },
        {
            id: 'photoelectric',
            title: 'Photoelectric Effect',
            icon: 'zap',
            description: 'Emission of electrons when electromagnetic radiation hits a material.'
        },
        {
            id: 'compton',
            title: 'Compton Effect',
            icon: 'waves',
            description: 'Scattering of a photon by a charged particle.'
        },
        {
            id: 'radioactivity',
            title: 'Radioactivity',
            icon: 'radiation',
            description: 'Spontaneous emission of radiation.'
        },
        { id: 'schrodinger', title: 'Schrödinger Eq', icon: 'activity' },
        { id: 'heisenberg', title: 'Uncertainty Principle', icon: 'help-circle' },
        { id: 'debroglie', title: 'De Broglie Wave', icon: 'wind' },
        { id: 'planck', title: 'Planck\'s Law', icon: 'flame' },
        { id: 'bohr', title: 'Bohr Model', icon: 'orbit' }
    ],
    content: {
        'relativity': {
            title: 'Special Theory of Relativity',
            intro: 'Einstein\'s theory describing the relationship between space, time, mass, and energy.',
            image: 'images/relativity.png',
            funFact: 'Did you know? Special Relativity predicts that if you travel fast enough, you would age slower than people on Earth. This is known as "Time Dilation".',
            scientist: {
                name: 'Albert Einstein',
                bio: 'A German-born theoretical physicist who developed the theory of relativity. He is best known for his mass–energy equivalence formula E = mc².'
            },
            mainEquation: {
                latex: 'E = mc^2',
                symbols: [
                    { tex: 'E', def: 'Total Energy', unit: 'Joules (J)' },
                    { tex: 'm', def: 'Mass', unit: 'Kilograms (kg)' },
                    { tex: 'c', def: 'Speed of Light', unit: '3 × 10^8 m/s' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: The Work-Energy Theorem</strong><br>We begin with the definition of kinetic energy ($K$) as the work done ($W$) by a force ($F$) acting over a distance ($x$). In calculus, this is the integral of force with respect to position.',
                    latex: 'K = \\int F \\, dx = \\int \\frac{dp}{dt} \\, dx'
                },
                {
                    text: '<strong>Step 2: Relativistic Momentum</strong><br>In classical mechanics, $p=mv$. However, relativity requires the Lorentz factor $\\gamma = 1/\\sqrt{1-v^2/c^2}$. The relativistic momentum is $p = \\gamma mv$.',
                    latex: 'p = \\frac{mv}{\\sqrt{1 - \\frac{v^2}{c^2}}}'
                },
                {
                    text: '<strong>Step 3: Change of Variable</strong><br>Using the chain rule, we can rewrite $dx = v dt$. Thus, the integral becomes an integral over velocity ($v$).',
                    latex: 'K = \\int v \\, dp = \\int v \\, d(\\gamma mv)'
                },
                {
                    text: '<strong>Step 4: Integration by Parts</strong><br>Using $\\int u dv = uv - \\int v du$, or simply evaluating the differential $d(\\gamma mv)$, we perform the integration from velocity $0$ to $v$.',
                    latex: 'K = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}} - mc^2 = \\gamma mc^2 - mc^2'
                },
                {
                    text: '<strong>Step 5: Total Energy</strong><br>We define the <em>Total Energy</em> ($E$) as the sum of Kinetic Energy ($K$) and Rest Energy ($E_0 = mc^2$).',
                    latex: 'E = K + mc^2 = (\\gamma mc^2 - mc^2) + mc^2 = \\gamma mc^2'
                },
                {
                    text: '<strong>Step 6: The Rest Frame</strong><br>If the object is at rest ($v=0$), then $\\gamma=1$. The equation simplifies to the most famous equation in physics.',
                    latex: 'E = mc^2'
                }
            ]
        },
        'photoelectric': {
            title: 'Photoelectric Effect',
            intro: 'The observation that many metals emit electrons when light shines upon them.',
            image: 'images/photoelectric.png',
            funFact: 'Did you know? Einstein won the Nobel Prize in 1921 not for Relativity, but for his explanation of the Photoelectric Effect, which proved light acts as a particle.',
            scientist: {
                name: 'Albert Einstein',
                bio: 'While famous for relativity, his work on the photoelectric effect was pivotal in establishing quantum theory.'
            },
            mainEquation: {
                latex: 'K_{max} = hf - \\Phi',
                symbols: [
                    { tex: 'K_{max}', def: 'Max Kinetic Energy', unit: 'Joules (J)' },
                    { tex: 'h', def: 'Planck Constant', unit: '6.626 × 10^-34 J·s' },
                    { tex: 'f', def: 'Frequency', unit: 'Hertz (Hz)' },
                    { tex: '\\Phi', def: 'Work Function', unit: 'Joules (J)' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: The Failure of Classical Wave Theory</strong><br>Classically, the energy of a light wave depends on its <em>amplitude</em> (brightness), not its frequency. However, experiments showed that red light (low frequency) never ejected electrons, no matter how bright, while faint UV light (high frequency) did.',
                    latex: 'E_{classical} \\propto Amplitude^2'
                },
                {
                    text: '<strong>Step 2: The Photon Hypothesis</strong><br>Einstein proposed that light consists of discrete "packets" of energy called photons. The energy of a single photon is proportional to its frequency.',
                    latex: 'E_{photon} = hf'
                },
                {
                    text: '<strong>Step 3: Conservation of Energy</strong><br>When a photon hits an electron, it transfers all its energy to it. The electron uses some energy to escape the metal (Work Function, $\\Phi$) and the rest becomes Kinetic Energy ($K$).',
                    latex: 'E_{photon} = \\Phi + K_{electron}'
                },
                {
                    text: '<strong>Step 4: Rearranging for Kinetic Energy</strong><br>Solving for the kinetic energy of the ejected electron gives us the photoelectric equation.',
                    latex: 'K_{max} = hf - \\Phi'
                },
                {
                    text: '<strong>Conclusion:</strong><br>This simple equation implies light acts as a particle. If $hf < \\Phi$, $K_{max}$ is negative, which is impossible—hence no emission happens below a threshold frequency.',
                    latex: 'f_{threshold} = \\frac{\\Phi}{h}'
                }
            ]
        },
        'compton': {
            title: 'Compton Effect',
            intro: 'The scattering of a photon by a charged particle, usually an electron.',
            image: 'images/compton.png',
            funFact: 'Did you know? The Compton Effect was the final proof that convinced physicists that light behaves as a particle (photon) with momentum, not just as a wave.',
            scientist: {
                name: 'Arthur Compton',
                bio: 'An American physicist who won the Nobel Prize in Physics in 1927 for his discovery of the Compton effect.'
            },
            mainEquation: {
                latex: '\\lambda\' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)',
                symbols: [
                    { tex: '\\lambda\'', def: 'Scattered Wavelength', unit: 'Meters (m)' },
                    { tex: '\\lambda', def: 'Initial Wavelength', unit: 'Meters (m)' },
                    { tex: 'h', def: 'Planck Constant', unit: '6.626 × 10^-34 J·s' },
                    { tex: 'm_e', def: 'Electron Mass', unit: '9.11 × 10^-31 kg' },
                    { tex: 'c', def: 'Speed of Light', unit: '3 × 10^8 m/s' },
                    { tex: '\\theta', def: 'Scattering Angle', unit: 'Degrees/Radians' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: Setup</strong><br>Consider a photon with energy $E = hf$ and momentum $p = E/c$ hitting a stationary electron (rest energy $mc^2$). After collision, the photon scatters at angle $\\theta$ with new energy $E\'$.',
                    latex: 'p_i = \\frac{hf}{c}, \\quad p_f = \\frac{hf\'}{c}'
                },
                {
                    text: '<strong>Step 2: Conservation of Energy</strong><br>Total energy before equals total energy after. The electron gains kinetic energy, moving with relativistic energy $E_e$.',
                    latex: 'hf + m_e c^2 = hf\' + E_e'
                },
                {
                    text: '<strong>Step 3: Conservation of Momentum</strong><br>Momentum is a vector. We must conserve it in both X and Y directions. The algebra is complex, but we use the Law of Cosines for the photon momentum vectors.',
                    latex: 'p_e^2 = p_i^2 + p_f^2 - 2p_i p_f \\cos\\theta'
                },
                {
                    text: '<strong>Step 4: Relativistic Energy-Momentum Relation</strong><br>For the scattered electron, $E_e^2 = (p_e c)^2 + (m_e c^2)^2$. We substitute $E_e$ from Step 2 into this.',
                    latex: '(hf + m_e c^2 - hf\')^2 = (p_e c)^2 + (m_e c^2)^2'
                },
                {
                    text: '<strong>Step 5: Solving for Wavelength</strong><br>After expanding terms and substituting $c = f\\lambda$, most terms cancel out, leaving a relationship between the change in wavelength and the scattering angle.',
                    latex: '\\Delta \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)'
                }
            ]
        },
        'radioactivity': {
            title: 'Radioactivity',
            intro: 'The process by which an unstable atomic nucleus loses energy by radiation.',
            image: 'images/radioactivity.png',
            funFact: 'Did you know? Marie Curie, who coined the term "radioactivity", is the only person to win Nobel Prizes in two different scientific fields (Physics and Chemistry).',
            scientist: {
                name: 'Marie Curie',
                bio: 'A Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity.'
            },
            mainEquation: {
                latex: 'N(t) = N_0 e^{-\\lambda t}',
                symbols: [
                    { tex: 'N(t)', def: 'Quantity at time t', unit: 'Count' },
                    { tex: 'N_0', def: 'Initial Quantity', unit: 'Count' },
                    { tex: '\\lambda', def: 'Decay Constant', unit: 's^-1' },
                    { tex: 't', def: 'Time', unit: 'Seconds (s)' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: The Decay Hypothesis</strong><br>The fundamental assumption is that the probability of decay per unit time is constant ($\\lambda$). Therefore, the rate at which nuclei decay ($dN/dt$) is proportional to the number of nuclei present ($N$) at that instant.',
                    latex: '\\frac{dN}{dt} = -\\lambda N'
                },
                {
                    text: '<strong>Step 2: Separation of Variables</strong><br>To solve this differential equation, we rearrange terms to group $N$ and $t$. We divide both sides by $N$ and multiply by $dt$.',
                    latex: '\\frac{1}{N} dN = -\\lambda dt'
                },
                {
                    text: '<strong>Step 3: Integration</strong><br>We integrate both sides. The integral of $1/N$ is the natural logarithm $\\ln(N)$. The integral of a constant $-\\lambda$ is $-\\lambda t$. We add an integration constant $C$.',
                    latex: '\\int \\frac{dN}{N} = \\int -\\lambda dt \\implies \\ln(N) = -\\lambda t + C'
                },
                {
                    text: '<strong>Step 4: Solving for N</strong><br>We exponentiate both sides to remove the logarithm. $e^{\\ln(N)} = N$.',
                    latex: 'N(t) = e^{-\\lambda t + C} = e^C \\cdot e^{-\\lambda t}'
                },
                {
                    text: '<strong>Step 5: Initial Conditions</strong><br>At time $t=0$, the number of nuclei is $N_0$. Substituting $t=0$ into the equation gives $N(0) = e^C \\cdot 1 = N_0$. Thus, $e^C = N_0$.',
                    latex: 'N(t) = N_0 e^{-\\lambda t}'
                },
                {
                    text: '<strong>Step 6: Half-Life (Optional)</strong><br>The time $t_{1/2}$ required for $N$ to drop to $N_0/2$ is found by setting $N(t) = N_0/2$. This leads to $t_{1/2} = \\ln(2)/\\lambda$.',
                    latex: 't_{1/2} = \\frac{0.693}{\\lambda}'
                }
            ]
        },
        'schrodinger': {
            title: 'Schrödinger Equation',
            intro: 'A linear partial differential equation that governs the wave function of a quantum-mechanical system.',
            image: 'images/schrodinger.png',
            funFact: 'Did you know? Schrödinger devised his famous "Cat" thought experiment to show the absurdity of the Copenhagen interpretation of quantum mechanics applied to everyday objects.',
            scientist: {
                name: 'Erwin Schrödinger',
                bio: 'An Austrian physicist who developed a number of fundamental results in quantum theory, forming the basis of wave mechanics.'
            },
            mainEquation: {
                latex: 'i\\hbar \\frac{\\partial}{\\partial t}\\Psi(r,t) = \\hat{H}\\Psi(r,t)',
                symbols: [
                    { tex: 'i', def: 'Imaginary Unit', unit: '√-1' },
                    { tex: '\\hbar', def: 'Reduced Planck Constant', unit: 'J·s' },
                    { tex: '\\Psi', def: 'Wave Function', unit: 'Probability Amplitude' },
                    { tex: '\\hat{H}', def: 'Hamiltonian Operator', unit: 'Energy Operator' },
                    { tex: 't', def: 'Time', unit: 's' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: Classical Energy Conservation</strong><br>We start with the classical Hamiltonian (Total Energy) for a particle of mass $m$, which is the sum of Kinetic Energy ($T$) and Potential Energy ($V$).',
                    latex: 'E = p^2/2m + V'
                },
                {
                    text: '<strong>Step 2: The Wave Function Hypothesis</strong><br>De Broglie suggested matter behaves like a wave. A standard plane wave is described by $\\Psi(\\mathbf{r}, t) = Ae^{i(\\mathbf{k}\\cdot\\mathbf{r} - \\omega t)}$. Using Einstein ($E=\\hbar\\omega$) and De Broglie ($p=\\hbar k$) relations, we rewrite this.',
                    latex: '\\Psi = A e^{i(p x - E t)/\\hbar}'
                },
                {
                    text: '<strong>Step 3: Finding the Operators</strong><br>If we take the time derivative of $\\Psi$, we get factors of $E$. <br>$\\frac{\\partial \\Psi}{\\partial t} = -\\frac{iE}{\\hbar}\\Psi$. Thus, $E \\to i\\hbar \\frac{\\partial}{\\partial t}$.<br>Similarly for position, $\\frac{\\partial \\Psi}{\\partial x} = \\frac{ip}{\\hbar}\\Psi$. Thus, $p \\to -i\\hbar \\nabla$.',
                    latex: '\\hat{E} = i\\hbar\\frac{\\partial}{\\partial t}, \\quad \\hat{p} = -i\\hbar\\nabla'
                },
                {
                    text: '<strong>Step 4: Substituting Operators</strong><br>We substitute these operators back into the classical energy equation from Step 1. This "quantization" procedure turns the algebraic equation into a differential equation.',
                    latex: 'i\\hbar \\frac{\\partial}{\\partial t} \\Psi = \\left( \\frac{(-i\\hbar\\nabla)^2}{2m} + V \\right) \\Psi'
                },
                {
                    text: '<strong>Step 5: The Final Equation</strong><br>Simplifying the momentum term gives the Time-Dependent Schrödinger Equation.',
                    latex: 'i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\nabla^2\\Psi + V\\Psi'
                }
            ]
        },
        'heisenberg': {
            title: 'Uncertainty Principle',
            intro: 'Fundamental limit to the precision with which certain pairs of physical properties, such as position and momentum, can be known.',
            image: 'images/heisenberg.png',
            funFact: 'Did you know? Heisenberg was awarded the Nobel Prize "for the creation of quantum mechanics". His principle implies the observer significantly alters the observed in the quantum realm.',
            scientist: {
                name: 'Werner Heisenberg',
                bio: 'A German theoretical physicist and one of the key pioneers of quantum mechanics.'
            },
            mainEquation: {
                latex: '\\sigma_x \\sigma_p \\geq \\frac{\\hbar}{2}',
                symbols: [
                    { tex: '\\sigma_x', def: 'Std Dev of Position', unit: 'm' },
                    { tex: '\\sigma_p', def: 'Std Dev of Momentum', unit: 'kg·m/s' },
                    { tex: '\\hbar', def: 'Reduced Planck Constant', unit: 'J·s' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: Commutators</strong><br>In quantum mechanics, if two operators $A$ and $B$ do not commute ($[A,B] \\neq 0$), they cannot be simultaneously measured with arbitrary precision. We check position ($x$) and momentum ($p$).',
                    latex: '[\\hat{x}, \\hat{p}]\\Psi = x(-i\\hbar\\partial_x)\\Psi - (-i\\hbar\\partial_x)(x\\Psi)'
                },
                {
                    text: '<strong>Step 2: Calculating the Global Commutator</strong><br>Using the product rule $\\partial_x(x\\Psi) = \\Psi + x\\partial_x\\Psi$, we find that terms having derivatives cancel out, leaving a constant.',
                    latex: '[\\hat{x}, \\hat{p}] = i\\hbar'
                },
                {
                    text: '<strong>Step 3: The Robertson-Schrödinger Inequality</strong><br>A general theorem states that for any two observables $A$ and $B$, the product of their standard deviations is bounded by their commutator.',
                    latex: '\\sigma_A \\sigma_B \\geq \\left| \\frac{1}{2i} \\langle [\\hat{A}, \\hat{B}] \\rangle \\right|'
                },
                {
                    text: '<strong>Step 4: Substitution</strong><br>Substituting $A=x$, $B=p$, and the commutator value $i\\hbar$ into the inequality.',
                    latex: '\\sigma_x \\sigma_p \\geq \\left| \\frac{1}{2i} (i\\hbar) \\right| = \\frac{\\hbar}{2}'
                }
            ]
        },
        'debroglie': {
            title: 'De Broglie Wavelength',
            intro: 'Describes the wave-particle duality, showing that all matter has wave-like properties.',
            image: 'images/debroglie.png',
            funFact: 'Did you know? Louis de Broglie presented his theory of electron waves in his PhD thesis. The examiners were unsure, but Einstein praised it, leading to its acceptance.',
            scientist: {
                name: 'Louis de Broglie',
                bio: 'A French physicist who made groundbreaking contributions to quantum theory. In his 1924 PhD thesis, he postulated the wave nature of electrons.'
            },
            mainEquation: {
                latex: '\\lambda = \\frac{h}{p}',
                symbols: [
                    { tex: '\\lambda', def: 'Wavelength', unit: 'm' },
                    { tex: 'h', def: 'Planck Constant', unit: 'J·s' },
                    { tex: 'p', def: 'Momentum', unit: 'kg·m/s' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: Equating Energies</strong><br>For a photon, we have two fundamental equations: relativity ($E = mc^2$, or for photons $E=pc$) and quantum theory ($E = hf$). Equating them:',
                    latex: 'pc = hf'
                },
                {
                    text: '<strong>Step 2: Frequency and Wavelength</strong><br>The speed of light is related to frequency and wavelength by $c = f\\lambda$. Therefore, $f = c/\\lambda$.',
                    latex: 'pc = h\\frac{c}{\\lambda}'
                },
                {
                    text: '<strong>Step 3: Solving for Wavelength</strong><br>We can cancel $c$ from both sides ($pc = hc/\\lambda \\implies p = h/\\lambda$). Solving for $\\lambda$ gives the photon wavelength.',
                    latex: '\\lambda = \\frac{h}{p}'
                },
                {
                    text: '<strong>Step 4: The Generalization</strong><br>Louis de Broglie proposed that this equation, derived for photons, applies to <em>all</em> matter. Thus, any particle with momentum $p=mv$ has an associated wavelength.',
                    latex: '\\lambda_{matter} = \\frac{h}{mv}'
                }
            ]
        },
        'planck': {
            title: 'Planck\'s Law',
            intro: 'Describes the spectral density of electromagnetic radiation emitted by a black body in thermal equilibrium.',
            image: 'images/planck.png',
            funFact: 'Did you know? Planck initially considered his own quantization assumption a "mathematical trick" and struggled to accept its physical reality for years.',
            scientist: {
                name: 'Max Planck',
                bio: 'A German theoretical physicist whose discovery of energy quanta won him the Nobel Prize in Physics in 1918.'
            },
            mainEquation: {
                latex: 'B_\\nu(T) = \\frac{2h\\nu^3}{c^2} \\frac{1}{e^{h\\nu/k_BT} - 1}',
                symbols: [
                    { tex: 'B_\\nu', def: 'Spectral Radiance', unit: 'W·sr⁻¹·m⁻²·Hz⁻¹' },
                    { tex: '\\nu', def: 'Frequency', unit: 'Hz' },
                    { tex: 'T', def: 'Temperature', unit: 'K' },
                    { tex: 'k_B', def: 'Boltzmann Constant', unit: 'J/K' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: Density of States</strong><br>We first calculate the number of modes (standing waves) of frequency $\\nu$ per unit volume in a cavity. This comes from solving the electromagnetic wave equation with boundary conditions.',
                    latex: 'N(\\nu)d\\nu = \\frac{8\\pi \\nu^2}{c^3} d\\nu'
                },
                {
                    text: '<strong>Step 2: The Ultraviolet Catastrophe</strong><br>Classically, each mode gets $k_B T$ energy (Equipartition Theorem). This leads to infinite energy at high frequencies ($E \\propto \\nu^2$). Planck realized this was wrong.',
                    latex: 'E_{classical} = \\int_0^\\infty N(\\nu) k_B T d\\nu \\to \\infty'
                },
                {
                    text: '<strong>Step 3: Quantization Hypothesis</strong><br>Planck assumed energy is not continuous but comes in discrete packets $E_n = nh\\nu$. The probability of being in state $n$ follows the Boltzmann distribution $P(n) \\propto e^{-E_n/k_B T}$.',
                    latex: '\\langle E \\rangle = \\frac{\\sum n h \\nu e^{-n h \\nu / k_B T}}{\\sum e^{-n h \\nu / k_B T}}'
                },
                {
                    text: '<strong>Step 4: Average Energy</strong><br>Evaluating the geometric series sums gives the average energy per mode, which vanishes at high frequencies.',
                    latex: '\\langle E \\rangle = \\frac{h\\nu}{e^{h\\nu/k_BT} - 1}'
                },
                {
                    text: '<strong>Step 5: Final Result</strong><br>Multiplying the density of states (Step 1) by the average energy (Step 4) gives the spectral energy density. Dividing by $4\\pi/c$ converts it to Radiance $B_\\nu$.',
                    latex: 'u(\\nu) = \\frac{8\\pi h\\nu^3}{c^3} \\frac{1}{e^{h\\nu/k_BT} - 1}'
                }
            ]
        },
        'bohr': {
            title: 'Bohr Model',
            intro: 'Description of the energy levels of electrons in a hydrogen atom.',
            image: 'images/bohr.png',
            funFact: 'Did you know? Niels Bohr debated extensively with Einstein about quantum mechanics. Einstein said "God does not play dice", to which Bohr replied "Stop telling God what to do".',
            scientist: {
                name: 'Niels Bohr',
                bio: 'A Danish physicist who made foundational contributions to understanding atomic structure and quantum theory.'
            },
            mainEquation: {
                latex: 'E_n = -\\frac{13.6 \\text{ eV}}{n^2}',
                symbols: [
                    { tex: 'E_n', def: 'Energy Level', unit: 'eV' },
                    { tex: 'n', def: 'Principal Quantum Number', unit: 'Integer' },
                    { tex: '13.6', def: 'Rydberg Energy', unit: 'eV' }
                ]
            },
            derivations: [
                {
                    text: '<strong>Step 1: Classical Forces</strong><br>An electron orbits the nucleus due to electrostatic attraction (Coulomb force) acting as the centripetal force.',
                    latex: 'F_e = F_c \\implies \\frac{ke^2}{r^2} = \\frac{mv^2}{r}'
                },
                {
                    text: '<strong>Step 2: Kinetic Energy</strong><br>Rearranging Step 1, we find the kinetic energy $K = \\frac{1}{2}mv^2$. Multiplying the force equation by $r/2$ gives $K = ke^2/2r$.',
                    latex: 'K = \\frac{ke^2}{2r}'
                },
                {
                    text: '<strong>Step 3: Total Energy</strong><br>Total Energy $E = K + V$. The potential energy is $V = -ke^2/r$. Thus, $E = ke^2/2r - ke^2/r = -ke^2/2r$.',
                    latex: 'E = -\\frac{ke^2}{2r}'
                },
                {
                    text: '<strong>Step 4: Quantization of Angular Momentum</strong><br>Bohr postulated that angular momentum is quantized: $L = mvr = n\\hbar$. Solving for $v = n\\hbar/mr$ and substituting into Step 1 gives the quantized radius $r_n$.',
                    latex: 'r_n = \\frac{n^2 \\hbar^2}{m k e^2}'
                },
                {
                    text: '<strong>Step 5: Energy Levels</strong><br>Substituting $r_n$ back into the energy equation (Step 3) gives the energy levels proportional to $1/n^2$. Grouping the constants yields $-13.6$ eV.',
                    latex: 'E_n = -\\frac{mk^2e^4}{2\\hbar^2} \\cdot \\frac{1}{n^2} \\approx -\\frac{13.6}{n^2} \\text{ eV}'
                }
            ]
        }
    }
};
