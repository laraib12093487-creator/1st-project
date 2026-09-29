/* ==========================================================================
   QUIZCRAFT AI — DYNAMIC VARIATION GENERATOR & INTERACTIVE CONTROLLER
   ========================================================================== */

// 1. DEEP DOMAIN KNOWLEDGE POOLS (Extensive Question Banks with Shuffling)
const DOMAIN_QUESTION_POOLS = {
  physics: {
    name: "Physics & Astronomy",
    image: "assets/images/quantum.jpg",
    icon: "fa-atom",
    category: "Physics & Cosmology",
    questions: [
      {
        q: "What principle states that it is impossible to simultaneously measure both the position and momentum of a particle with absolute precision?",
        options: [
          "Pauli Exclusion Principle",
          "Heisenberg Uncertainty Principle",
          "Schrödinger Wave Equation",
          "Planck Radiation Law"
        ],
        correct: 1,
        exp: "Formulated by Werner Heisenberg in 1927, the Uncertainty Principle (Δx · Δp ≥ ℏ/2) sets a fundamental quantum measurement limit."
      },
      {
        q: "Which quantum phenomenon describes two particles remaining entangled so that actions performed on one instantaneously affect the other?",
        options: [
          "Quantum Entanglement",
          "Quantum Tunneling",
          "Photoelectric Effect",
          "Wave-Particle Duality"
        ],
        correct: 0,
        exp: "Quantum Entanglement correlates states of separated particles regardless of spatial separation, famously dubbed 'spooky action at a distance' by Einstein."
      },
      {
        q: "What is the smallest discrete packet of electromagnetic radiation called?",
        options: [
          "Electron",
          "Quark",
          "Photon",
          "Neutrino"
        ],
        correct: 2,
        exp: "A photon is an elementary particle representing a quantum of light or other electromagnetic radiation carrying energy E = hf."
      },
      {
        q: "What does the Schrödinger wave function squared (|Ψ|²) represent in quantum mechanics?",
        options: [
          "Exact classical velocity of the particle",
          "Probability density of finding a particle in space",
          "Total rest-mass conversion energy",
          "Internal magnetic dipole moment"
        ],
        correct: 1,
        exp: "According to Max Born's probabilistic interpretation, |Ψ|² dV gives the probability of finding the particle within volume element dV."
      },
      {
        q: "What is the boundary around a black hole beyond which the escape velocity exceeds the speed of light?",
        options: [
          "Accretion Disk",
          "Event Horizon",
          "Singularity",
          "Ergosphere"
        ],
        correct: 1,
        exp: "The Event Horizon defines the gravitational boundary where spacetime curvature prevents any matter or light from escaping."
      },
      {
        q: "Which cosmological discovery provided the strongest direct evidence for the Big Bang model of the universe?",
        options: [
          "Detection of the Cosmic Microwave Background (CMB)",
          "Discovery of Neptune's rings",
          "Identification of Asteroid 4 Vesta",
          "Measuring solar neutrino oscillations"
        ],
        correct: 0,
        exp: "Discovered by Penzias and Wilson in 1965, the CMB (2.725 K thermal radiation) is the lingering thermal echo of the early universe."
      },
      {
        q: "According to Einstein's General Theory of Relativity, what is gravity fundamentally?",
        options: [
          "An invisible mechanical tether pulling masses together",
          "The geometric curvature of 4-dimensional spacetime caused by mass and energy",
          "An electrostatic imbalance between subatomic nucleons",
          "A friction force produced by the cosmic ether"
        ],
        correct: 1,
        exp: "General Relativity demonstrates that mass-energy dictates spacetime geometry, and curved spacetime dictates how matter moves."
      },
      {
        q: "What is the phenomenon where a subatomic particle passes through a potential energy barrier higher than its kinetic energy?",
        options: [
          "Quantum Decoherence",
          "Quantum Tunneling",
          "Bose-Einstein Condensation",
          "Pair Production"
        ],
        correct: 1,
        exp: "Due to wave function tail penetration, particles have a non-zero probability of tunneling through barriers, crucial in nuclear fusion and flash memory."
      },
      {
        q: "What space observatory launched in December 2021 operates primarily in infrared wavelengths to observe early cosmic dawn galaxies?",
        options: [
          "Hubble Space Telescope",
          "James Webb Space Telescope (JWST)",
          "Kepler Space Telescope",
          "Chandra X-ray Observatory"
        ],
        correct: 1,
        exp: "JWST uses a 6.5-meter gold-coated beryllium mirror to observe high-redshift infrared signals from the earliest stars and galaxies."
      },
      {
        q: "Which conservation law in physics corresponds directly to the time-translation symmetry of physical laws via Noether's theorem?",
        options: [
          "Conservation of Electric Charge",
          "Conservation of Linear Momentum",
          "Conservation of Energy",
          "Conservation of Lepton Number"
        ],
        correct: 2,
        exp: "Emmy Noether proved that every continuous symmetry of nature yields a conservation law; invariance under time shifts yields conservation of energy."
      },
      {
        q: "What subatomic particle was confirmed at CERN's Large Hadron Collider in 2012, explaining how elementary particles acquire mass?",
        options: [
          "Top Quark",
          "Tau Neutrino",
          "Higgs Boson",
          "Gluon"
        ],
        correct: 2,
        exp: "The Higgs Boson is the quantum excitation of the Higgs field, through which fundamental particles acquire rest mass via electroweak symmetry breaking."
      },
      {
        q: "What thermodynamic quantity measures the degree of microscopic disorder or inaccessible thermal energy in a closed system?",
        options: [
          "Enthalpy",
          "Entropy",
          "Gibbs Free Energy",
          "Chemical Potential"
        ],
        correct: 1,
        exp: "The Second Law of Thermodynamics dictates that total entropy (S = k ln Ω) of an isolated system always tends toward a maximum over time."
      }
    ],
    shortQuestions: [
      {
        q: "Explain Wave-Particle Duality and cite an experimental demonstration.",
        a: "Wave-Particle Duality states that matter and radiation display wave characteristics (interference, diffraction in Young's Double Slit experiment) and particle properties (discrete quanta, localized collision in the Photoelectric Effect)."
      },
      {
        q: "What causes Gravitational Lensing in astrophysics?",
        a: "Gravitational lensing occurs when massive celestial objects (like galaxy clusters) warp spacetime, bending and magnifying the paths of light rays travelling from background objects behind them."
      },
      {
        q: "State the First Law of Thermodynamics in equation form and describe each term.",
        a: "ΔU = Q - W (or ΔU = Q + W depending on work convention), where ΔU is the change in internal energy, Q is heat added to the system, and W is thermodynamic work done by the system."
      },
      {
        q: "What is cosmological Redshift and why is it crucial for Hubble's Law?",
        a: "Redshift is the stretching of light wavelengths toward longer (red) frequencies as space expands during transit, confirming Edwin Hubble's discovery that distant galaxies recede proportionally to distance."
      },
      {
        q: "Describe the primary difference between nuclear fission and nuclear fusion.",
        a: "Nuclear fission splits heavy atomic nuclei (e.g., Uranium-235) into lighter fragments, whereas nuclear fusion merges light nuclei (e.g., Hydrogen isotopes into Helium) under extreme heat and pressure, releasing tremendous binding energy."
      }
    ]
  },

  ai: {
    name: "Artificial Intelligence & Computing",
    image: "assets/images/ai.jpg",
    icon: "fa-robot",
    category: "Computer Science",
    questions: [
      {
        q: "What algorithm uses the calculus chain rule backward from the loss function to compute weight gradients in neural networks?",
        options: [
          "K-Means Clustering",
          "Backpropagation",
          "Dijkstra's Shortest Path",
          "Simulated Annealing"
        ],
        correct: 1,
        exp: "Backpropagation efficiently evaluates partial derivatives of the objective loss with respect to each tunable parameter using reverse automatic differentiation."
      },
      {
        q: "Which deep learning architecture relies on multi-head self-attention mechanisms and replaced RNNs in modern language models?",
        options: [
          "Convolutional Neural Network (CNN)",
          "Transformer Architecture",
          "Recurrent Neural Network (RNN)",
          "Restricted Boltzmann Machine"
        ],
        correct: 1,
        exp: "Introduced in 'Attention Is All You Need' (2017), Transformers process token sequences in parallel via multi-head self-attention mechanisms."
      },
      {
        q: "What non-linear activation function maps input real numbers into a probability range strictly between 0 and 1?",
        options: [
          "ReLU",
          "Sigmoid",
          "Leaky ReLU",
          "Linear Identity"
        ],
        correct: 1,
        exp: "The Sigmoid function σ(z) = 1 / (1 + e^-z) squashes inputs into [0, 1], frequently utilized in binary cross-entropy output nodes."
      },
      {
        q: "What pathology occurs when gradients shrink exponentially toward zero across deep network layers during training?",
        options: [
          "Exploding Gradients",
          "Vanishing Gradients",
          "Deadlock Latency",
          "Overfitting Resonance"
        ],
        correct: 1,
        exp: "Repeated multiplication of small derivatives (e.g., saturated sigmoids) causes vanishing gradients, halting early layer weight updates."
      },
      {
        q: "Which regularization technique randomly deactivates a fraction of neurons during training passes to avoid co-adaptation?",
        options: [
          "Batch Normalization",
          "Dropout",
          "Stochastic Gradient Descent",
          "Gradient Clipping"
        ],
        correct: 1,
        exp: "Proposed by Srivastava et al., Dropout randomly zeroes activations with probability p during forward passes to enforce robust feature redundancy."
      },
      {
        q: "In reinforcement learning, what mathematical equation expresses the recursive value function relating current state reward to future discounted returns?",
        options: [
          "Navier-Stokes Equation",
          "Bellman Equation",
          "Maxwell Equation",
          "Hamilton-Jacobi Equation"
        ],
        correct: 1,
        exp: "The Bellman Equation decomposes value functions into immediate reward plus discounted expectation of the successor state's value V(s) = R(s) + γ Σ P(s'|s) V(s')."
      },
      {
        q: "What evaluation metric represents the harmonic mean of precision and recall in classification models?",
        options: [
          "Mean Squared Error (MSE)",
          "F1-Score",
          "Area Under ROC (AUC)",
          "Brier Score"
        ],
        correct: 1,
        exp: "The F1-score equals 2 · (Precision · Recall) / (Precision + Recall), balancing sensitivity and positive predictive accuracy under class imbalance."
      },
      {
        q: "What is the primary function of Embeddings in modern Natural Language Processing (NLP)?",
        options: [
          "Compressing audio into MP3 format",
          "Mapping discrete text tokens into continuous, dense semantic vector spaces",
          "Encrypting user passwords before database storage",
          "Translating source code directly into CPU binary instructions"
        ],
        correct: 1,
        exp: "Embeddings map categorical tokens to high-dimensional continuous vectors where geometric proximity reflects semantic and contextual similarity."
      },
      {
        q: "Which technique aligns Large Language Models (LLMs) with human intent and safety through preference ranking models?",
        options: [
          "Reinforcement Learning from Human Feedback (RLHF)",
          "Unsupervised K-Nearest Neighbors",
          "Principal Component Analysis",
          "Singular Value Decomposition"
        ],
        correct: 0,
        exp: "RLHF trains reward models on human preference annotations, then optimizes the language model via Proximal Policy Optimization (PPO)."
      },
      {
        q: "What Python data structure provides O(1) average time complexity for key lookup, insertion, and deletion?",
        options: [
          "Linked List",
          "Hash Table (Dictionary)",
          "Binary Search Tree",
          "Sorted Array"
        ],
        correct: 1,
        exp: "Dictionaries in Python use open-addressed hash tables with deterministic hash probing, delivering amortized O(1) operations."
      }
    ],
    shortQuestions: [
      {
        q: "Explain the Bias-Variance Tradeoff in machine learning.",
        a: "High bias causes underfitting by failing to capture underlying patterns with overly simplistic assumptions. High variance causes overfitting by modeling noise in training data. Optimal models balance the two to minimize total test generalization error."
      },
      {
        q: "How does Convolutional pooling (e.g. Max Pooling) help computer vision networks?",
        a: "Pooling downsamples spatial feature maps, reducing parameter count and computational complexity while creating translational invariance against minor shifts in visual input."
      },
      {
        q: "What is Retrieval-Augmented Generation (RAG) and why is it used?",
        a: "RAG queries an external vector database for relevant, up-to-date domain documents and prepends them into the LLM prompt context, drastically mitigating hallucinations and enabling private data access."
      },
      {
        q: "What is the difference between Supervised, Unsupervised, and Self-Supervised Learning?",
        a: "Supervised uses human-labeled input-output pairs; Unsupervised finds patterns in unlabeled data without targets (e.g. clustering); Self-supervised generates synthetic supervisory signals directly from raw data (e.g. predicting masked words in text)."
      }
    ]
  },

  history: {
    name: "World History & Civilizations",
    image: "assets/images/egypt.jpg",
    icon: "fa-landmark",
    category: "History",
    questions: [
      {
        q: "Which ancient Egyptian pharaoh commissioned the Great Pyramid of Giza on the Giza plateau around 2560 BCE?",
        options: [
          "Ramses II",
          "Khufu (Cheops)",
          "Tutankhamun",
          "Akhenaten"
        ],
        correct: 1,
        exp: "Pharaoh Khufu constructed the largest Egyptian pyramid, originally standing 146.6 meters tall as an enduring Old Kingdom royal monument."
      },
      {
        q: "What ancient legal code, carved onto a basalt stele in 1754 BCE, is famous for the doctrine of lex talionis ('an eye for an eye')?",
        options: [
          "Justinian Code",
          "Code of Hammurabi",
          "Twelve Tables of Rome",
          "Magna Carta"
        ],
        correct: 1,
        exp: "Babylonian King Hammurabi instituted 282 codified laws establishing standards of conduct, judicial penalties, and commercial contracts."
      },
      {
        q: "What momentous European peace treaty signed in 1648 concluded the Thirty Years' War and established modern state sovereignty?",
        options: [
          "Peace of Westphalia",
          "Treaty of Utrecht",
          "Congress of Vienna",
          "Treaty of Versailles"
        ],
        correct: 0,
        exp: "The Peace of Westphalia established Westphalian sovereignty, recognizing each state's exclusive territorial jurisdiction and non-intervention rights."
      },
      {
        q: "During the Islamic Golden Age in Baghdad, what renowned center of scholarship, translation, and scientific inquiry flourished under the Abbasid Caliphate?",
        options: [
          "House of Wisdom (Bayt al-Hikmah)",
          "Library of Alexandria",
          "Alhambra Palace",
          "Topkapi Academy"
        ],
        correct: 0,
        exp: "Under Caliphs Harun al-Rashid and al-Ma'mun, the House of Wisdom translated Greek, Persian, and Indian treatises into Arabic, sparking major advances."
      },
      {
        q: "In what year did the Fall of Constantinople occur, ending the Byzantine Empire and shifting trade routes toward ocean voyages?",
        options: [
          "1215 CE",
          "1453 CE",
          "1492 CE",
          "1588 CE"
        ],
        correct: 1,
        exp: "Ottoman forces led by Sultan Mehmed II conquered Constantinople on May 29, 1453, ending over 1,000 years of Byzantine imperial rule."
      },
      {
        q: "Which historic document sealed by King John of England at Runnymede in 1215 established that the monarch was subject to the rule of law?",
        options: [
          "English Bill of Rights",
          "Magna Carta",
          "Edict of Nantes",
          "Declaration of the Rights of Man"
        ],
        correct: 1,
        exp: "The Magna Carta granted barons feudal protections, habeas corpus principles, and restricted arbitrary taxation by the Crown."
      },
      {
        q: "What 19th-century invention by James Watt critically catalyzed the Industrial Revolution by converting thermal energy into mechanical rotary power?",
        options: [
          "Spinning Jenny",
          "Separate Condenser Steam Engine",
          "Cotton Gin",
          "Telegraph Machine"
        ],
        correct: 1,
        exp: "Watt's condenser modification radically improved engine thermal efficiency, driving factory automation and locomotive transit globally."
      },
      {
        q: "What global conflict began with the assassination of Archduke Franz Ferdinand in Sarajevo in June 1914?",
        options: [
          "Crimean War",
          "World War I",
          "Franco-Prussian War",
          "Seven Years' War"
        ],
        correct: 1,
        exp: "The assassination triggered an alliance domino effect culminating in World War I (1914–1918) across European and global theaters."
      }
    ],
    shortQuestions: [
      {
        q: "What was the Renaissance and which city was its primary Italian cradle?",
        a: "The Renaissance was a cultural, intellectual, and artistic rebirth bridging the Middle Ages and modernity (14th–17th centuries), centered in Florence, Italy, emphasizing humanism, scientific inquiry, and perspective art."
      },
      {
        q: "Explain the significance of the Silk Road in world history.",
        a: "The Silk Road was an expansive network of overland and maritime trade routes connecting East Asia, the Middle East, and Europe, facilitating the exchange of goods (silk, spices), technologies (papermaking, gunpowder), and philosophies."
      },
      {
        q: "Why was the Rosetta Stone monumental for archaeological linguistics?",
        a: "Discovered in 1799, the Rosetta Stone contained the same decree in three scripts (Ancient Egyptian hieroglyphs, Demotic, and Ancient Greek), allowing Jean-François Champollion to decipher Egyptian hieroglyphs."
      }
    ]
  },

  space: {
    name: "Space Exploration & Solar System",
    image: "assets/images/space.jpg",
    icon: "fa-rocket",
    category: "Astronomy & Aerospace",
    questions: [
      {
        q: "What space telescope launched in 2021 observes in infrared to peer through interstellar dust clouds?",
        options: [
          "Hubble Telescope",
          "James Webb Space Telescope (JWST)",
          "Spitzer Observatory",
          "Kepler Telescope"
        ],
        correct: 1,
        exp: "JWST observes infrared light to resolve high-redshift early galaxies and exoplanetary atmospheric spectra."
      },
      {
        q: "Which planet in our solar system has the highest surface temperature, despite not being closest to the Sun?",
        options: [
          "Mercury",
          "Venus",
          "Mars",
          "Jupiter"
        ],
        correct: 1,
        exp: "Venus suffers a runaway greenhouse effect from its thick 96.5% carbon dioxide atmosphere, driving surface temperatures to ~465°C (869°F)."
      },
      {
        q: "What lunar mission landed humans on the Moon for the first time on July 20, 1969?",
        options: [
          "Apollo 8",
          "Apollo 11",
          "Apollo 13",
          "Gemini 4"
        ],
        correct: 1,
        exp: "Apollo 11 commanded by Neil Armstrong and lunar module pilot Buzz Aldrin touched down at the Sea of Tranquility."
      },
      {
        q: "What icy disc-shaped region beyond Neptune's orbit is home to dwarf planets Pluto, Haumea, and Makemake?",
        options: [
          "Main Asteroid Belt",
          "Kuiper Belt",
          "Oort Cloud",
          "Heliosheath"
        ],
        correct: 1,
        exp: "Extending from 30 to 55 AU from the Sun, the Kuiper Belt contains millions of ancient icy planetesimals."
      },
      {
        q: "Which moon of Jupiter possesses a subsurface saltwater ocean beneath its icy crust, considered a prime candidate for astrobiology?",
        options: [
          "Io",
          "Europa",
          "Callisto",
          "Phobos"
        ],
        correct: 1,
        exp: "Europa's smooth, fractured ice shell conceals a deep global ocean warmed by tidal gravitational heating from Jupiter."
      },
      {
        q: "What is the boundary where the Sun's solar wind is halted by the interstellar medium?",
        options: [
          "Bow Shock",
          "Heliopause",
          "Termination Shock",
          "Van Allen Belt"
        ],
        correct: 1,
        exp: "Voyager 1 crossed the Heliopause in 2012 at ~121 AU, entering pristine interstellar space."
      }
    ],
    shortQuestions: [
      {
        q: "What is the primary objective of NASA's Artemis program?",
        a: "The Artemis program aims to land the first woman and person of color on the Moon, establish a sustainable lunar base camp, and test long-duration technologies for crewed Mars exploration."
      },
      {
        q: "Explain what causes a Total Solar Eclipse.",
        a: "A Total Solar Eclipse happens when the Moon aligns directly between the Earth and Sun, casting its deep shadow (umbra) onto Earth's surface and temporarily blocking the solar disk completely."
      }
    ]
  },

  biology: {
    name: "Biology & Life Sciences",
    image: "assets/images/ai.jpg",
    icon: "fa-dna",
    category: "Biological Sciences",
    questions: [
      {
        q: "Which cellular organelle generates the vast majority of chemical energy in the form of Adenosine Triphosphate (ATP)?",
        options: [
          "Golgi Apparatus",
          "Mitochondria",
          "Endoplasmic Reticulum",
          "Lysosome"
        ],
        correct: 1,
        exp: "Mitochondria produce ATP through oxidative phosphorylation along the inner membrane's electron transport chain."
      },
      {
        q: "What enzyme is responsible for unwinding the double helix during DNA replication in eukaryotic cells?",
        options: [
          "DNA Polymerase",
          "DNA Helicase",
          "RNA Primase",
          "DNA Ligase"
        ],
        correct: 1,
        exp: "DNA Helicase breaks hydrogen bonds between complementary nitrogenous base pairs to separate double-stranded DNA into replication forks."
      },
      {
        q: "What is the process called whereby green plants use sunlight to convert carbon dioxide and water into glucose and oxygen?",
        options: [
          "Fermentation",
          "Photosynthesis",
          "Glycolysis",
          "Transpiration"
        ],
        correct: 1,
        exp: "Photosynthesis occurs in chloroplasts via light-dependent reactions (thylakoids) and light-independent Calvin cycle (stroma)."
      },
      {
        q: "Which gene-editing biotechnology harnesses an adaptive bacterial immune defense mechanism to make targeted cuts in DNA sequences?",
        options: [
          "Gel Electrophoresis",
          "CRISPR-Cas9",
          "Western Blotting",
          "Flow Cytometry"
        ],
        correct: 1,
        exp: "CRISPR-Cas9 uses guide RNA (gRNA) complementary to target genomic DNA sequences, guiding the Cas9 endonuclease to introduce precise double-strand breaks."
      },
      {
        q: "What type of cell division reduces chromosome number by half to produce four genetically distinct haploid gametes?",
        options: [
          "Binary Fission",
          "Meiosis",
          "Mitosis",
          "Cytokinesis"
        ],
        correct: 1,
        exp: "Meiosis consists of two successive division cycles (Meiosis I and II) with homologous crossing-over, generating haploid sperm and egg cells."
      },
      {
        q: "Which blood vessels possess thick muscular walls and elastic fibers to withstand high hydrostatic pressure pumped from the ventricles?",
        options: [
          "Capillaries",
          "Arteries",
          "Veins",
          "Venules"
        ],
        correct: 1,
        exp: "Arteries carry oxygenated blood under arterial systolic pressure away from the heart, featuring thick tunica media layers."
      }
    ],
    shortQuestions: [
      {
        q: "State the Central Dogma of Molecular Biology.",
        a: "The Central Dogma states that genetic information flows directionally from DNA to RNA via transcription, and from RNA to functional protein via translation."
      },
      {
        q: "What is the function of the human immune system's T-cells and B-cells?",
        a: "B-cells produce antigen-specific antibodies that neutralize pathogens, while Cytotoxic T-cells identify and destroy infected host cells and Helper T-cells coordinate the broader immune cascade."
      }
    ]
  },

  chemistry: {
    name: "Chemistry & Molecular Sciences",
    image: "assets/images/quantum.jpg",
    icon: "fa-flask",
    category: "Chemistry",
    questions: [
      {
        q: "Which periodic trend generally increases across a period from left to right and decreases down a group?",
        options: [
          "Atomic Radius",
          "Electronegativity",
          "Metallic Character",
          "Ionic Radius of cations"
        ],
        correct: 1,
        exp: "Electronegativity increases across periods due to increasing effective nuclear charge (Zeff) pulling bonding electron pairs closer."
      },
      {
        q: "What chemical bond involves the electrostatic attraction between oppositely charged ions formed by electron transfer?",
        options: [
          "Covalent Bond",
          "Ionic Bond",
          "Hydrogen Bond",
          "Metallic Bond"
        ],
        correct: 1,
        exp: "Ionic bonds form when elements with large electronegativity differences transfer electrons (e.g. Na+ and Cl- forming crystal lattices)."
      },
      {
        q: "According to Le Chatelier's Principle, what happens to an exothermic equilibrium reaction if the temperature is increased?",
        options: [
          "Equilibrium shifts toward products (forward)",
          "Equilibrium shifts toward reactants (backward)",
          "Reaction rate drops to zero",
          "Equilibrium constant remains unaffected"
        ],
        correct: 1,
        exp: "For exothermic reactions (heat is a product), adding thermal energy drives the system to absorb heat by shifting toward reactants."
      },
      {
        q: "What is a substance that increases the rate of a chemical reaction without being consumed, by lowering activation energy (Ea)?",
        options: [
          "Inhibitor",
          "Catalyst",
          "Reagent",
          "Surfactant"
        ],
        correct: 1,
        exp: "Catalysts provide an alternative reaction pathway with lower activation energy barrier, accelerating forward and reverse rates equally."
      }
    ],
    shortQuestions: [
      {
        q: "Define the pH scale and what determines acidity versus alkalinity.",
        a: "pH = -log10[H+]. A value of 7 is neutral; pH < 7 indicates higher hydronium concentration (acidic), and pH > 7 indicates higher hydroxide concentration (basic/alkaline)."
      },
      {
        q: "What is an isotope in nuclear chemistry?",
        a: "Isotopes are atoms of the same chemical element sharing identical atomic numbers (protons) but differing mass numbers due to different neutron counts."
      }
    ]
  }
};

// 2. STATE MANAGEMENT
let activeQuiz = null;
let currentMcqAnswers = {};
let quizTimerInterval = null;
let secondsElapsed = 0;
let flashcardIndex = 0;
let activeFlashcards = [];
let savedLibrary = JSON.parse(localStorage.getItem("quizcraft_library") || "[]");
let sessionHistory = {}; // Keeps track of question IDs used in this session to prevent repeats
let lastTopicPrompt = "";
let lastPassagePrompt = "";

// 3. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  renderShowcaseGrid();
  updateSavedLibraryBadge();
  setupEventListeners();
}

// 4. EVENT LISTENERS
function setupEventListeners() {
  // Input Mode Tabs (Topic vs Passage)
  const tabTopic = document.getElementById("tabTopicMode");
  const tabPassage = document.getElementById("tabPassageMode");
  const groupTopic = document.getElementById("groupTopic");
  const groupPassage = document.getElementById("groupPassage");

  if (tabTopic && tabPassage) {
    tabTopic.addEventListener("click", () => {
      tabTopic.classList.add("active");
      tabPassage.classList.remove("active");
      groupTopic.classList.remove("hidden");
      groupPassage.classList.add("hidden");
    });

    tabPassage.addEventListener("click", () => {
      tabPassage.classList.add("active");
      tabTopic.classList.remove("active");
      groupPassage.classList.remove("hidden");
      groupTopic.classList.add("hidden");
    });
  }

  // Clear Topic Input
  const clearBtn = document.getElementById("clearTopicBtn");
  const topicInput = document.getElementById("topicInput");
  if (clearBtn && topicInput) {
    clearBtn.addEventListener("click", () => {
      topicInput.value = "";
      topicInput.focus();
    });
  }

  // Popular Chips Click
  const chips = document.querySelectorAll(".chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      if (topicInput) {
        topicInput.value = chip.dataset.topic;
        topicInput.focus();
      }
    });
  });

  // Generate Quiz Button
  const genBtn = document.getElementById("generateQuizBtn");
  if (genBtn) {
    genBtn.addEventListener("click", () => handleQuizGeneration(false));
  }

  // Quick New Quiz Header Button
  const quickBtn = document.getElementById("quickGenBtn");
  if (quickBtn && topicInput) {
    quickBtn.addEventListener("click", () => {
      const createSec = document.getElementById("create");
      if (createSec) createSec.scrollIntoView({ behavior: "smooth" });
      topicInput.focus();
    });
  }

  // Player Header "New Questions" Regenerate Button
  const btnRegenerateHeader = document.getElementById("btnRegenerateHeader");
  if (btnRegenerateHeader) {
    btnRegenerateHeader.addEventListener("click", () => {
      handleQuizGeneration(true); // Force fresh seed & new question set
    });
  }

  // Result Card "Generate Fresh Quiz on this Topic" Button
  const btnFreshQuizSameTopic = document.getElementById("btnFreshQuizSameTopic");
  if (btnFreshQuizSameTopic) {
    btnFreshQuizSameTopic.addEventListener("click", () => {
      handleQuizGeneration(true);
    });
  }

  // Retake Same Questions Button
  const btnRetake = document.getElementById("btnRetakeQuiz");
  if (btnRetake) {
    btnRetake.addEventListener("click", () => {
      if (activeQuiz) {
        retakeCurrentQuiz();
      }
    });
  }

  // Mode Switcher (MCQs vs Short Questions)
  const modeMcq = document.getElementById("modeBtnMcq");
  const modeShort = document.getElementById("modeBtnShort");
  const mcqPart = document.getElementById("mcqPartContainer");
  const shortPart = document.getElementById("shortPartContainer");

  if (modeMcq && modeShort && mcqPart && shortPart) {
    modeMcq.addEventListener("click", () => {
      modeMcq.classList.add("active");
      modeShort.classList.remove("active");
      mcqPart.classList.remove("hidden");
      shortPart.classList.add("hidden");
    });

    modeShort.addEventListener("click", () => {
      modeShort.classList.add("active");
      modeMcq.classList.remove("active");
      shortPart.classList.remove("hidden");
      mcqPart.classList.add("hidden");
    });
  }

  // Flashcard Modal Listeners
  const btnFlashcard = document.getElementById("btnFlashcardMode");
  const closeFlashcardBtn = document.getElementById("closeFlashcardBtn");
  const fcInner = document.getElementById("flashcardInner");
  const fcFlipBtn = document.getElementById("fcFlipBtn");
  const fcPrevBtn = document.getElementById("fcPrevBtn");
  const fcNextBtn = document.getElementById("fcNextBtn");

  if (btnFlashcard) btnFlashcard.addEventListener("click", openFlashcardModal);
  if (closeFlashcardBtn) closeFlashcardBtn.addEventListener("click", closeFlashcardModal);
  if (fcInner) fcInner.addEventListener("click", () => fcInner.classList.toggle("flipped"));
  if (fcFlipBtn) fcFlipBtn.addEventListener("click", () => fcInner && fcInner.classList.toggle("flipped"));

  if (fcPrevBtn) {
    fcPrevBtn.addEventListener("click", () => {
      if (flashcardIndex > 0) {
        flashcardIndex--;
        renderFlashcardCard();
      }
    });
  }

  if (fcNextBtn) {
    fcNextBtn.addEventListener("click", () => {
      if (flashcardIndex < activeFlashcards.length - 1) {
        flashcardIndex++;
        renderFlashcardCard();
      }
    });
  }

  // Print Quiz Button
  const btnPrint = document.getElementById("btnPrintQuiz");
  if (btnPrint) {
    btnPrint.addEventListener("click", () => window.print());
  }

  // Saved Library Drawer
  const navLibBtn = document.getElementById("navLibraryBtn");
  const closeLibBtn = document.getElementById("closeLibraryBtn");
  const libraryDrawer = document.getElementById("libraryDrawerBackdrop");

  if (navLibBtn) navLibBtn.addEventListener("click", (e) => { e.preventDefault(); openLibraryDrawer(); });
  if (closeLibBtn) closeLibBtn.addEventListener("click", closeLibraryDrawer);
  if (libraryDrawer) {
    libraryDrawer.addEventListener("click", (e) => {
      if (e.target === libraryDrawer) closeLibraryDrawer();
    });
  }

  const btnSave = document.getElementById("btnSaveQuiz");
  if (btnSave) btnSave.addEventListener("click", saveActiveQuizToLibrary);
}

// 5. CORE DYNAMIC GENERATION CONTROLLER
async function handleQuizGeneration(forceFresh = false) {
  const topicVal = document.getElementById("topicInput") ? document.getElementById("topicInput").value.trim() : "";
  const passageVal = document.getElementById("passageInput") ? document.getElementById("passageInput").value.trim() : "";
  const mcqCount = parseInt(document.getElementById("mcqCountSelect")?.value || "5", 10);
  const shortCount = parseInt(document.getElementById("shortCountSelect")?.value || "4", 10);
  const difficulty = document.getElementById("difficultySelect")?.value || "Intermediate";
  const engine = document.getElementById("aiEngineSelect")?.value || "dynamic";
  const includeVisual = document.getElementById("visualCardToggle") ? document.getElementById("visualCardToggle").checked : true;

  // If forceFresh is true, use activeQuiz topic or last topic
  let topicName = topicVal;
  if (forceFresh && activeQuiz && activeQuiz.title) {
    topicName = activeQuiz.title;
  }
  if (!topicName && !passageVal) {
    topicName = "General Science & Innovation";
  }

  lastTopicPrompt = topicName;
  lastPassagePrompt = passageVal;

  // Generate a distinct random seed for this run
  const seed = Math.floor(1000 + Math.random() * 9000);

  // Show Toast
  showToast(`Generating ${mcqCount} MCQs for "${topicName}" (Variant #${seed})...`, "fa-wand-magic-sparkles");

  // Try Live Cloud AI if requested
  if (engine === "cloud_ai") {
    try {
      const cloudQuiz = await fetchLiveCloudAIQuiz(topicName, passageVal, mcqCount, shortCount, difficulty, seed);
      if (cloudQuiz && cloudQuiz.mcqs && cloudQuiz.mcqs.length > 0) {
        cloudQuiz.seed = seed;
        cloudQuiz.engine = "Cloud AI";
        loadQuizPlayer(cloudQuiz);
        showToast(`✨ Generated ${cloudQuiz.mcqs.length} fresh AI questions!`, "fa-bolt");
        return;
      }
    } catch (err) {
      console.warn("Cloud AI fallback triggered:", err);
      showToast("Cloud AI busy — instant Dynamic Engine activated!", "fa-microchip");
    }
  }

  // Primary Guaranteed Dynamic Engine (Instant & Guaranteed Variation)
  const generatedQuiz = synthesizeDynamicQuiz(topicName, passageVal, mcqCount, shortCount, difficulty, seed);
  generatedQuiz.seed = seed;
  generatedQuiz.engine = "Dynamic Engine";
  loadQuizPlayer(generatedQuiz);
  showToast(`✨ Fresh quiz variant #${seed} created!`, "fa-sparkles");
}

// 6. SYNTHESIS ENGINE (PRODUCES COMPLETELY DIFFERENT QUESTIONS FOR ANY TOPIC)
function synthesizeDynamicQuiz(topic, passage, mcqCount, shortCount, difficulty, seed) {
  const cleanTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
  const topicKey = cleanTopic.toLowerCase();

  if (!sessionHistory[topicKey]) {
    sessionHistory[topicKey] = new Set();
  }

  // 1. Identify Domain Match (if any)
  let matchedDomain = null;
  for (const [key, domain] of Object.entries(DOMAIN_QUESTION_POOLS)) {
    if (
      topicKey.includes(key) ||
      topicKey.includes(domain.name.toLowerCase()) ||
      domain.name.toLowerCase().includes(topicKey)
    ) {
      matchedDomain = domain;
      break;
    }
  }

  // Additional keyword detection for domain mappings
  if (!matchedDomain) {
    if (/quantum|relativity|gravity|physics|black hole|thermodynamics|laser|optics|atomic|nuclear|mechanics|astronomy|cosmo/i.test(topicKey)) {
      matchedDomain = DOMAIN_QUESTION_POOLS.physics;
    } else if (/ai|artificial intelligence|neural|machine learning|python|code|program|software|algorithm|deep learning|data/i.test(topicKey)) {
      matchedDomain = DOMAIN_QUESTION_POOLS.ai;
    } else if (/history|egypt|war|empire|ancient|civilization|renaissance|revolution|pharaoh|rome|greece|medieval/i.test(topicKey)) {
      matchedDomain = DOMAIN_QUESTION_POOLS.history;
    } else if (/space|solar|planet|mars|moon|nasa|telescope|galaxy|star|orbit|satellite|rocket/i.test(topicKey)) {
      matchedDomain = DOMAIN_QUESTION_POOLS.space;
    } else if (/bio|cell|gene|dna|body|heart|blood|organ|medicine|virus|immune|mitosis|evolution|brain|protein/i.test(topicKey)) {
      matchedDomain = DOMAIN_QUESTION_POOLS.biology;
    } else if (/chem|molecule|atom|bond|reaction|acid|periodic|element|catalyst|electron|compound/i.test(topicKey)) {
      matchedDomain = DOMAIN_QUESTION_POOLS.chemistry;
    }
  }

  let mcqs = [];
  let shortQuestions = [];
  let imagePath = matchedDomain ? matchedDomain.image : "assets/images/quantum.jpg";

  // CASE A: Passage mode provided by user
  if (passage && passage.trim().length > 30) {
    const passageResult = generateFromPassage(cleanTopic, passage, mcqCount, shortCount, seed);
    mcqs = passageResult.mcqs;
    shortQuestions = passageResult.shortQuestions;
  }
  // CASE B: Known Domain with Deep Pool
  else if (matchedDomain && matchedDomain.questions.length >= 4) {
    // Pick questions from the pool with priority given to questions NOT used in this session!
    const pool = matchedDomain.questions;
    const available = pool.filter(q => !sessionHistory[topicKey].has(q.q));
    const candidates = available.length >= mcqCount ? available : pool;

    // Shuffle pool candidates
    const shuffledPool = shuffleArray([...candidates]);
    const selected = shuffledPool.slice(0, mcqCount);

    // If pool has fewer than mcqCount, synthesize additional universal questions
    selected.forEach((item, idx) => {
      sessionHistory[topicKey].add(item.q);
      
      // Shuffle options so correct answer is at a random index (0, 1, 2, or 3)
      const shuffledOptionsData = shuffleOptionsWithCorrect(item.options, item.correct);
      
      mcqs.push({
        id: `pool_q_${seed}_${idx + 1}`,
        question: item.q,
        options: shuffledOptionsData.options,
        correct: shuffledOptionsData.correct,
        explanation: item.exp
      });
    });

    // If we need more questions than available in pool, generate procedurally
    if (mcqs.length < mcqCount) {
      const extraNeeded = mcqCount - mcqs.length;
      const procedural = generateUniversalProceduralMCQs(cleanTopic, extraNeeded, difficulty, seed + 99);
      mcqs.push(...procedural);
    }

    // Pick short questions randomly
    const sqPool = shuffleArray([...matchedDomain.shortQuestions]);
    const selectedSQ = sqPool.slice(0, shortCount);
    selectedSQ.forEach((sq, idx) => {
      shortQuestions.push({
        id: `pool_sq_${seed}_${idx + 1}`,
        question: sq.q,
        answer: sq.a
      });
    });

    if (shortQuestions.length < shortCount) {
      const extraSQ = generateUniversalShortQuestions(cleanTopic, shortCount - shortQuestions.length, seed + 77);
      shortQuestions.push(...extraSQ);
    }
  }
  // CASE C: ANY Custom / Arbitrary Topic (Procedural Universal Synthesizer)
  else {
    mcqs = generateUniversalProceduralMCQs(cleanTopic, mcqCount, difficulty, seed);
    shortQuestions = generateUniversalShortQuestions(cleanTopic, shortCount, seed);
  }

  return {
    id: `quiz_${cleanTopic.replace(/\s+/g, '_').toLowerCase()}_${seed}`,
    title: cleanTopic,
    category: matchedDomain ? matchedDomain.category : "Custom Subject Test",
    image: imagePath,
    difficulty: difficulty,
    seed: seed,
    mcqs: mcqs,
    shortQuestions: shortQuestions
  };
}

// 7. UNIVERSAL PROCEDURAL QUESTION SYNTHESIZER
// Constructs rich, differentiated questions across 15 distinct pedagogical angles
function generateUniversalProceduralMCQs(topic, count, difficulty, seed) {
  // Comprehensive archetype blueprints
  const archetypes = [
    {
      angle: "fundamental_principle",
      q: (t) => `What foundational principle is most essential to understanding the core behavior of ${t}?`,
      correctOpt: (t) => `The systematic governing rules and operational dynamics specific to ${t}`,
      distractors: [
        `Static state variable isolation that completely excludes external interactions`,
        `Complete absence of measurable systemic feedback loops`,
        `Purely arbitrary statistical coincidence without mathematical modeling`
      ],
      exp: (t) => `A solid grounding in ${t} begins with recognizing its core operational dynamics and systematic principles.`
    },
    {
      angle: "primary_mechanism",
      q: (t) => `In practical applications of ${t}, which mechanism is primarily responsible for producing desired outcomes?`,
      correctOpt: (t) => `Adaptive execution workflows and calibrated input-output transformations`,
      distractors: [
        `Unrestricted random variance generation across unindexed registers`,
        `Unmonitored parameter drift with complete manual override`,
        `Static hardcoded lookups that reject runtime variables`
      ],
      exp: (t) => `The functional effectiveness of ${t} relies heavily on adaptive execution and calibrated transformations.`
    },
    {
      angle: "critical_prerequisite",
      q: (t) => `Before implementing or formally evaluating ${t}, which prerequisite condition is indispensable?`,
      correctOpt: (t) => `Establishing verified baseline data, objective metrics, and environmental controls`,
      distractors: [
        `Completely disregarding legacy benchmark records`,
        `Disabling empirical validation to accelerate iteration speed`,
        `Assuming uniform conditions without checking edge-case tolerances`
      ],
      exp: (t) => `Without verified baseline metrics and environmental controls, evaluations in ${t} lack reproducibility and precision.`
    },
    {
      angle: "diagnostic_evaluation",
      q: (t) => `When measuring the efficiency, fidelity, or accuracy of ${t}, which approach yields the most reliable results?`,
      correctOpt: (t) => `Systematic quantitative benchmarking combined with stress testing`,
      distractors: [
        `Informal qualitative conjecture without historical data points`,
        `Testing solely under ideal conditions while bypassing threshold limits`,
        `Extrapolating performance exclusively from a single outlier reading`
      ],
      exp: (t) => `Rigorous quantitative benchmarking against established stress thresholds ensures authentic evaluation of ${t}.`
    },
    {
      angle: "comparative_distinction",
      q: (t) => `How does a modern framework in ${t} fundamentally surpass older, traditional methodologies?`,
      correctOpt: (t) => `Through higher operational scalability, modular flexibility, and reduced systemic latency`,
      distractors: [
        `By deliberately increasing computational overhead and ambiguity`,
        `By rejecting standardized international naming and measurement conventions`,
        `By restricting usability exclusively to theoretical lab environments`
      ],
      exp: (t) => `Modern advances in ${t} prioritize modular flexibility, scalable throughput, and operational efficiency.`
    },
    {
      angle: "common_fallacy",
      q: (t) => `Which of the following represents a widespread misconception regarding ${t}?`,
      correctOpt: (t) => `Assuming that ${t} functions in total isolation without environmental or contextual dependencies`,
      distractors: [
        `Recognizing that ${t} requires structured empirical analysis`,
        `Acknowledging that ${t} benefits from cross-disciplinary integration`,
        `Understanding that parameters in ${t} must be continuously monitored`
      ],
      exp: (t) => `A prevalent error is treating ${t} as a self-contained silo, whereas it continually interfaces with contextual factors.`
    },
    {
      angle: "bottleneck_limitation",
      q: (t) => `Under high scale or extreme operational pressure, what is commonly identified as a critical bottleneck in ${t}?`,
      correctOpt: (t) => `Resource contention, synchronization overhead, and data throughput limits`,
      distractors: [
        `A surplus of computational bandwidth causing idle deadlocks`,
        `Excessive transparency in step-by-step telemetry logs`,
        `Overly standardized protocol documentation`
      ],
      exp: (t) => `Throughput limitations and resource synchronization form the primary pinch-points under high stress in ${t}.`
    },
    {
      angle: "best_practice",
      q: (t) => `Which established best practice is most strongly recommended for practitioners working with ${t}?`,
      correctOpt: (t) => `Continuous iterative verification, rigorous documentation, and clear error-handling protocols`,
      distractors: [
        `Premature optimization without profiling actual system bottlenecks`,
        `Silently swallowing exceptions to maintain perceived uptime`,
        `Relying on tribal knowledge rather than version-controlled specifications`
      ],
      exp: (t) => `Iterative verification and transparent error-handling mitigate cascading failures when managing ${t}.`
    },
    {
      angle: "negative_constraint",
      q: (t) => `Which of the following is explicitly NOT a valid or recognized characteristic of ${t}?`,
      correctOpt: (t) => `Guaranteed zero-cost scaling with 100% immunity to edge-case anomalies`,
      distractors: [
        `Dependence on structured operational inputs`,
        `Susceptibility to parameter misconfiguration`,
        `Measurable correlation between optimization efforts and performance gains`
      ],
      exp: (t) => `No complex system or topic exhibits zero-cost scaling or complete immunity to edge anomalies; trade-offs are universal in ${t}.`
    },
    {
      angle: "modern_evolution",
      q: (t) => `How has modern digital computation and AI integration fundamentally transformed the landscape of ${t}?`,
      correctOpt: (t) => `By enabling real-time predictive modeling, automated pattern detection, and high-dimensional analysis`,
      distractors: [
        `By eliminating the need for foundational theoretical principles`,
        `By slowing down analytical throughput through unnecessary abstraction`,
        `By requiring all calculations to revert to manual paper ledgers`
      ],
      exp: (t) => `Computational modeling and AI automated pattern recognition have expanded discovery speed and analytical depth in ${t}.`
    },
    {
      angle: "tradeoff_analysis",
      q: (t) => `When attempting to maximize throughput or performance in ${t}, which fundamental trade-off must be managed?`,
      correctOpt: (t) => `Speed and responsiveness versus resource consumption and verification overhead`,
      distractors: [
        `Volume of output versus font typography formatting`,
        `User interface aesthetics versus color saturation`,
        `Physical hardware weight versus server cabinet rack spacing`
      ],
      exp: (t) => `Optimizing for raw throughput often trades off against higher energy/compute consumption and validation overhead in ${t}.`
    },
    {
      angle: "future_frontier",
      q: (t) => `What emerging trend is widely anticipated to define the next phase of innovation in ${t}?`,
      correctOpt: (t) => `Hyper-automated synthesis, decentralized verification, and resilient adaptive architectures`,
      distractors: [
        `Complete abandonment of digital collaboration tools`,
        `Reversion to closed-source proprietary silos without public peer review`,
        `Ceasing all empirical research in favor of unverified guesswork`
      ],
      exp: (t) => `The trajectory of ${t} moves toward adaptive resilience, automated telemetry, and decentralized verification.`
    },
    {
      angle: "scenario_diagnostic",
      q: (t) => `If a sudden deviation or degradation in performance is observed during an active implementation of ${t}, what is the first recommended diagnostic step?`,
      correctOpt: (t) => `Isolate recent parameter modifications and cross-reference against baseline telemetry logs`,
      distractors: [
        `Immediately wipe all archival data to clear storage space`,
        `Assume temporary external interference and disregard the alert`,
        `Drastically increase throughput variables without diagnosing the root cause`
      ],
      exp: (t) => `Root-cause analysis in ${t} requires systematically isolating recent changes against historical baselines.`
    },
    {
      angle: "cross_disciplinary",
      q: (t) => `How does ${t} create synergistic value when integrated with adjacent academic or technical fields?`,
      correctOpt: (t) => `By supplying structured analytical frameworks and transferable problem-solving paradigms`,
      distractors: [
        `By preventing neighboring fields from accessing shared experimental tools`,
        `By replacing all specialized domain terminology with generic jargon`,
        `By enforcing strict isolationist development standards`
      ],
      exp: (t) => `Cross-disciplinary power comes from applying ${t}'s structured paradigms to solve analogous challenges elsewhere.`
    },
    {
      angle: "historical_breakthrough",
      q: (t) => `What conceptual milestone historically paved the way for modern standardized practices in ${t}?`,
      correctOpt: (t) => `The transition from ad-hoc subjective heuristics to standardized, reproducible empirical methodologies`,
      distractors: [
        `The total abandonment of mathematical proof systems`,
        `The decision to discontinue formal academic documentation`,
        `The accidental loss of all pre-modern records`
      ],
      exp: (t) => `Standardizing reproducible methodologies transformed ${t} from fragmented heuristics into a rigorous discipline.`
    }
  ];

  // Shuffle the blueprints seeded by Math.random & seed
  const shuffledArchetypes = shuffleArray([...archetypes]);
  const selectedArchetypes = shuffledArchetypes.slice(0, count);

  return selectedArchetypes.map((arch, index) => {
    const rawQuestion = arch.q(topic);
    const correctText = arch.correctOpt(topic);
    const optionsRaw = [correctText, ...arch.distractors];

    // Shuffle options so correct is randomized at A, B, C, or D
    const { options, correct } = shuffleOptionsWithCorrect(optionsRaw, 0);

    return {
      id: `proc_${seed}_${index + 1}`,
      question: rawQuestion,
      options: options,
      correct: correct,
      explanation: arch.exp(topic)
    };
  });
}

// 8. UNIVERSAL SHORT QUESTIONS GENERATOR
function generateUniversalShortQuestions(topic, count, seed) {
  const shortArchetypes = [
    {
      q: `Define ${topic} and explain its primary operational objective.`,
      a: `${topic} refers to the structured study and application of core principles within its respective domain. Its primary objective is to build coherent conceptual models, maximize efficiency, and solve domain-specific challenges through standardized practices.`
    },
    {
      q: `What are three essential components or phases involved in the lifecycle of ${topic}?`,
      a: `1. Input & Baseline Formulation: Gathering parameters and establishing environmental controls.\n2. Core Processing / Execution: Applying domain mechanics and algorithmic transformations.\n3. Evaluation & Feedback: Measuring performance metrics against established benchmarks.`
    },
    {
      q: `Describe a significant challenge or bottleneck frequently encountered when working with ${topic}, and how it can be mitigated.`,
      a: `A primary challenge is managing resource contention, data latency, or conceptual ambiguity under high load. This is mitigated by implementing modular decoupled architectures, comprehensive logging, and iterative verification.`
    },
    {
      q: `How has modern technological progress (such as computation and automation) reshaped our understanding of ${topic}?`,
      a: `Contemporary technologies provide real-time telemetry, predictive analytics, and automated parameter calibration, allowing researchers and practitioners in ${topic} to simulate complex scenarios and detect subtle patterns previously hidden.`
    },
    {
      q: `Explain the crucial difference between theoretical understanding and real-world implementation in ${topic}.`,
      a: `Theoretical models assume idealized parameters and controlled variables, whereas real-world implementations must account for environmental noise, edge cases, hardware constraints, and non-deterministic latency.`
    },
    {
      q: `What emerging horizon or future development is currently anticipated in the field of ${topic}?`,
      a: `Future advancements point toward hyper-scalable modularity, automated self-healing workflows, cross-disciplinary integration, and eco-efficient algorithmic paradigms.`
    }
  ];

  const shuffled = shuffleArray([...shortArchetypes]);
  return shuffled.slice(0, count).map((item, idx) => ({
    id: `proc_sq_${seed}_${idx + 1}`,
    question: item.q,
    answer: item.a
  }));
}

// 9. PASSAGE EXTRACTION ENGINE
function generateFromPassage(title, passage, mcqCount, shortCount, seed) {
  const sentences = passage
    .split(/(?<=[.?!])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 25);

  const mcqs = [];
  const shortQuestions = [];

  const shuffledSentences = shuffleArray([...sentences]);

  for (let i = 0; i < Math.min(mcqCount, shuffledSentences.length); i++) {
    const s = shuffledSentences[i];
    const words = s.split(/\s+/).filter(w => w.length > 4 && !/^(which|there|their|these|those|about|could|would|should)$/i.test(w));
    const targetWord = words[Math.floor(Math.random() * words.length)] || "concept";

    const blankedSentence = s.replace(new RegExp(`\\b${escapeRegExp(targetWord)}\\b`, 'i'), "_________");

    const distractors = [
      `alternative hypothesis`,
      `uncalibrated variable`,
      `inverse relationship`
    ];

    const { options, correct } = shuffleOptionsWithCorrect([targetWord, ...distractors], 0);

    mcqs.push({
      id: `passage_q_${seed}_${i + 1}`,
      question: `According to the provided text: "${blankedSentence}"`,
      options: options,
      correct: correct,
      explanation: `Directly supported by the source excerpt: "${s}"`
    });
  }

  // If we couldn't get enough sentences, fill with procedural
  if (mcqs.length < mcqCount) {
    const extra = generateUniversalProceduralMCQs(title, mcqCount - mcqs.length, "Intermediate", seed + 50);
    mcqs.push(...extra);
  }

  // Generate short questions from passage
  for (let j = 0; j < Math.min(shortCount, shuffledSentences.length); j++) {
    const excerpt = shuffledSentences[j];
    shortQuestions.push({
      id: `passage_sq_${seed}_${j + 1}`,
      question: `Analyze the main insight conveyed in the excerpt: "${excerpt.slice(0, 90)}..."`,
      answer: `Key Insight: ${excerpt}\n\nContextual Application: This statement highlights the core argument and contextual relationship described in the study notes.`
    });
  }

  if (shortQuestions.length < shortCount) {
    const extraSQ = generateUniversalShortQuestions(title, shortCount - shortQuestions.length, seed + 80);
    shortQuestions.push(...extraSQ);
  }

  return { mcqs, shortQuestions };
}

// 10. LIVE CLOUD AI FETCH (POLLINATIONS / LLM INTEGRATION)
async function fetchLiveCloudAIQuiz(topic, passage, mcqCount, shortCount, difficulty, seed) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6500);

  const promptText = `Generate a unique, high-quality educational quiz on "${topic}".
Difficulty: ${difficulty}.
Return ONLY a valid JSON object matching this schema without any markdown formatting or commentary:
{
  "mcqs": [
    {
      "id": "q1",
      "question": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "Detailed explanation here."
    }
  ],
  "shortQuestions": [
    {
      "id": "sq1",
      "question": "Short question here?",
      "answer": "Model answer here."
    }
  ]
}
Generate exactly ${mcqCount} MCQs and ${shortCount} short questions. Seed: ${seed}`;

  try {
    const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(promptText)}?seed=${seed}&json=true`, {
      method: "GET",
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    if (!response.ok) throw new Error("Cloud AI network response not OK");

    const text = await response.text();
    // Parse json out of response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      if (parsed.mcqs && Array.isArray(parsed.mcqs) && parsed.mcqs.length > 0) {
        return {
          id: `cloud_${Date.now()}`,
          title: topic,
          category: "Live AI Quiz",
          image: "assets/images/ai.jpg",
          difficulty: difficulty,
          mcqs: parsed.mcqs.slice(0, mcqCount).map((m, idx) => ({
            id: `cloud_q_${idx + 1}`,
            question: m.question,
            options: m.options,
            correct: typeof m.correct === 'number' ? m.correct : 0,
            explanation: m.explanation || "AI synthesized explanation."
          })),
          shortQuestions: (parsed.shortQuestions || []).slice(0, shortCount).map((s, idx) => ({
            id: `cloud_sq_${idx + 1}`,
            question: s.question,
            answer: s.answer
          }))
        };
      }
    }
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

// 11. LOAD & RENDER QUIZ PLAYER
function loadQuizPlayer(quiz) {
  activeQuiz = quiz;
  currentMcqAnswers = {};
  secondsElapsed = 0;
  clearInterval(quizTimerInterval);

  const section = document.getElementById("quizPlayerSection");
  if (!section) return;

  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth" });

  // Update Header Metadata
  const titleEl = document.getElementById("playerTopicTitle");
  if (titleEl) titleEl.textContent = quiz.title;

  const diffBadge = document.getElementById("playerDifficultyBadge");
  if (diffBadge) diffBadge.textContent = quiz.difficulty;

  const seedBadge = document.getElementById("playerSeedBadge");
  if (seedBadge) seedBadge.innerHTML = `<i class="fa-solid fa-shuffle"></i> Variant #${quiz.seed || 1000}`;

  const freshBadge = document.getElementById("playerFreshBadge");
  if (freshBadge) {
    freshBadge.innerHTML = `<i class="fa-solid fa-sparkles"></i> 100% Unique Set`;
  }

  // Handle Visual Graphic (Dynamic Canvas vs Image)
  renderVisualGraphic(quiz);

  // Reset Result view
  const resCard = document.getElementById("quizResultCard");
  if (resCard) resCard.classList.add("hidden");

  const mcqPart = document.getElementById("mcqPartContainer");
  if (mcqPart) mcqPart.classList.remove("hidden");

  // Start Timer
  startQuizTimer();

  // Render Parts
  renderMcqsPart();
  renderShortPart();
  updateScoreTracker();
}

// 12. RETAKE CURRENT QUIZ (SAME QUESTIONS)
function retakeCurrentQuiz() {
  if (!activeQuiz) return;
  currentMcqAnswers = {};
  secondsElapsed = 0;
  clearInterval(quizTimerInterval);

  const resCard = document.getElementById("quizResultCard");
  if (resCard) resCard.classList.add("hidden");

  const mcqPart = document.getElementById("mcqPartContainer");
  if (mcqPart) mcqPart.classList.remove("hidden");

  startQuizTimer();
  renderMcqsPart();
  updateScoreTracker();

  showToast("Quiz reset! Test your recall on this question set.", "fa-rotate-left");
}

// 13. DYNAMIC VISUAL GRAPHIC RENDERER (CANVAS OR IMAGE)
function renderVisualGraphic(quiz) {
  const imgEl = document.getElementById("quizVisualImg");
  const canvasEl = document.getElementById("quizVisualCanvas");
  const seedTag = document.getElementById("visualSeedTag");

  if (seedTag) seedTag.innerHTML = `<i class="fa-solid fa-dice"></i> Seed #${quiz.seed || 'AI'}`;

  // Check if we should draw procedural high-tech canvas
  const isCustomTopic = !["assets/images/quantum.jpg", "assets/images/ai.jpg", "assets/images/egypt.jpg", "assets/images/space.jpg"].includes(quiz.image);

  if (canvasEl && (isCustomTopic || !imgEl)) {
    if (imgEl) imgEl.classList.add("hidden");
    canvasEl.classList.remove("hidden");
    drawProceduralTopicCanvas(canvasEl, quiz.title, quiz.category, quiz.seed);
  } else if (imgEl) {
    imgEl.classList.remove("hidden");
    if (canvasEl) canvasEl.classList.add("hidden");
    imgEl.src = quiz.image;
  }
}

// Draws a sleek futuristic glowing topic canvas for any custom topic
function drawProceduralTopicCanvas(canvas, title, category, seed) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth || 800 : 800);
  const h = (canvas.height = 220);

  // Gradient background
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#090d1f");
  grad.addColorStop(0.5, "#151b36");
  grad.addColorStop(1, "#0a0c1a");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Draw glowing tech circles
  const circleGrad = ctx.createRadialGradient(w * 0.75, h * 0.4, 10, w * 0.75, h * 0.4, 160);
  circleGrad.addColorStop(0, "rgba(139, 92, 246, 0.45)");
  circleGrad.addColorStop(0.6, "rgba(6, 182, 212, 0.2)");
  circleGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = circleGrad;
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.4, 160, 0, Math.PI * 2);
  ctx.fill();

  // Draw constellation nodes
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 1;
  const nodes = [
    { x: w * 0.65, y: 50 },
    { x: w * 0.78, y: 80 },
    { x: w * 0.88, y: 40 },
    { x: w * 0.72, y: 150 },
    { x: w * 0.85, y: 170 },
    { x: w * 0.94, y: 130 }
  ];

  ctx.beginPath();
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      ctx.moveTo(nodes[i].x, nodes[i].y);
      ctx.lineTo(nodes[j].x, nodes[j].y);
    }
  }
  ctx.stroke();

  nodes.forEach(n => {
    ctx.fillStyle = "#06b6d4";
    ctx.beginPath();
    ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // Category Tag
  ctx.font = "bold 12px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "#8b5cf6";
  ctx.fillText(`TOPIC CATEGORY • ${category.toUpperCase()}`, 32, 70);

  // Large Topic Title
  ctx.font = "bold 28px 'Space Grotesk', sans-serif";
  ctx.fillStyle = "#ffffff";
  const displayTitle = title.length > 36 ? title.substring(0, 33) + "..." : title;
  ctx.fillText(displayTitle, 32, 115);

  // Subtitle
  ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText(`Dynamic AI Exam Set • Variant #${seed || '1084'} • Shuffled Options`, 32, 148);
}

// 14. TIMER & SCORING
function startQuizTimer() {
  const timerEl = document.getElementById("quizTimer");
  if (timerEl) timerEl.textContent = "00:00";

  quizTimerInterval = setInterval(() => {
    secondsElapsed++;
    const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const secs = String(secondsElapsed % 60).padStart(2, '0');
    if (timerEl) timerEl.textContent = `${mins}:${secs}`;
  }, 1000);
}

function renderMcqsPart() {
  const container = document.getElementById("mcqPartContainer");
  if (!container || !activeQuiz) return;

  const optionKeys = ["A", "B", "C", "D"];

  container.innerHTML = activeQuiz.mcqs.map((mcq, idx) => `
    <div class="question-item-card" id="card_${mcq.id}">
      <div class="question-number">Question ${idx + 1} of ${activeQuiz.mcqs.length}</div>
      <div class="question-text">${mcq.question}</div>

      <div class="options-grid">
        ${mcq.options.map((optText, optIdx) => `
          <button class="option-btn" onclick="selectOption('${mcq.id}', ${optIdx})">
            <span class="option-key">${optionKeys[optIdx]}</span>
            <span>${optText}</span>
          </button>
        `).join("")}
      </div>

      <div class="explanation-box hidden" id="exp_${mcq.id}">
        <i class="fa-solid fa-circle-info"></i> <strong>Explanation:</strong> ${mcq.explanation}
      </div>
    </div>
  `).join("");
}

function selectOption(mcqId, selectedIdx) {
  if (currentMcqAnswers[mcqId] !== undefined) return;

  const mcq = activeQuiz.mcqs.find(m => m.id === mcqId);
  if (!mcq) return;

  currentMcqAnswers[mcqId] = selectedIdx;

  const card = document.getElementById(`card_${mcqId}`);
  if (card) {
    const optionBtns = card.querySelectorAll(".option-btn");
    optionBtns.forEach((btn, idx) => {
      btn.classList.add("disabled");
      if (idx === mcq.correct) {
        btn.classList.add("correct");
      } else if (idx === selectedIdx && selectedIdx !== mcq.correct) {
        btn.classList.add("wrong");
      }
    });

    const expBox = document.getElementById(`exp_${mcqId}`);
    if (expBox) expBox.classList.remove("hidden");
  }

  updateScoreTracker();

  if (Object.keys(currentMcqAnswers).length === activeQuiz.mcqs.length) {
    setTimeout(finishQuiz, 1200);
  }
}

function renderShortPart() {
  const container = document.getElementById("shortPartContainer");
  if (!container || !activeQuiz) return;

  container.innerHTML = activeQuiz.shortQuestions.map((sq, idx) => `
    <div class="question-item-card">
      <div class="question-number">Short Question ${idx + 1}</div>
      <div class="question-text">${sq.question}</div>

      <button class="btn btn-outline btn-sm" onclick="toggleShortAnswer('sa_${sq.id}')">
        <i class="fa-solid fa-key"></i> Reveal Model Answer
      </button>

      <div class="short-answer-box hidden" id="sa_${sq.id}">
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-green); margin-bottom: 6px;">MODEL ANSWER & EXPLANATION KEY:</div>
        <div class="model-answer-text">${sq.answer.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  `).join("");
}

function toggleShortAnswer(elemId) {
  const elem = document.getElementById(elemId);
  if (elem) elem.classList.toggle("hidden");
}

function updateScoreTracker() {
  let score = 0;
  Object.keys(currentMcqAnswers).forEach(qId => {
    const mcq = activeQuiz.mcqs.find(m => m.id === qId);
    if (mcq && currentMcqAnswers[qId] === mcq.correct) {
      score++;
    }
  });

  const total = activeQuiz.mcqs.length;
  const scoreText = document.getElementById("quizScoreText");
  if (scoreText) scoreText.textContent = `${score} / ${total}`;
}

function finishQuiz() {
  clearInterval(quizTimerInterval);

  let score = 0;
  Object.keys(currentMcqAnswers).forEach(qId => {
    const mcq = activeQuiz.mcqs.find(m => m.id === qId);
    if (mcq && currentMcqAnswers[qId] === mcq.correct) {
      score++;
    }
  });

  const total = activeQuiz.mcqs.length;
  const accuracy = Math.round((score / total) * 100);
  const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
  const secs = String(secondsElapsed % 60).padStart(2, '0');

  const resScore = document.getElementById("resFinalScore");
  const resAcc = document.getElementById("resAccuracy");
  const resTime = document.getElementById("resTimeTaken");
  const resCard = document.getElementById("quizResultCard");

  if (resScore) resScore.textContent = `${score} / ${total}`;
  if (resAcc) resAcc.textContent = `${accuracy}%`;
  if (resTime) resTime.textContent = `${mins}:${secs}`;
  if (resCard) resCard.classList.remove("hidden");

  showToast(`Quiz Complete! Final Score: ${score}/${total} (${accuracy}%)`, "fa-trophy");
}

// 15. FLASHCARDS SYSTEM
function openFlashcardModal() {
  if (!activeQuiz) return;
  activeFlashcards = [];

  activeQuiz.mcqs.forEach(mcq => {
    const optionKeys = ["A", "B", "C", "D"];
    const correctText = mcq.options[mcq.correct];
    activeFlashcards.push({
      type: "MCQ Concept",
      question: mcq.question,
      answer: `Correct Answer: Option ${optionKeys[mcq.correct]} — ${correctText}`,
      explanation: mcq.explanation
    });
  });

  activeQuiz.shortQuestions.forEach(sq => {
    activeFlashcards.push({
      type: "Short Key Concept",
      question: sq.question,
      answer: sq.answer,
      explanation: "Model Answer Key"
    });
  });

  flashcardIndex = 0;
  renderFlashcardCard();

  const modal = document.getElementById("flashcardModal");
  if (modal) modal.classList.add("active");
}

function closeFlashcardModal() {
  const modal = document.getElementById("flashcardModal");
  if (modal) modal.classList.remove("active");
}

function renderFlashcardCard() {
  const card = activeFlashcards[flashcardIndex];
  if (!card) return;

  const fcInner = document.getElementById("flashcardInner");
  if (fcInner) fcInner.classList.remove("flipped");

  const curIdx = document.getElementById("fcCurrentIndex");
  const totIdx = document.getElementById("fcTotalIndex");
  const frontText = document.getElementById("fcFrontText");
  const backAns = document.getElementById("fcBackAnswer");
  const backExp = document.getElementById("fcBackExplanation");

  if (curIdx) curIdx.textContent = flashcardIndex + 1;
  if (totIdx) totIdx.textContent = activeFlashcards.length;
  if (frontText) frontText.textContent = card.question;
  if (backAns) backAns.textContent = card.answer;
  if (backExp) backExp.textContent = card.explanation;
}

// 16. SAVED QUIZ LIBRARY
function saveActiveQuizToLibrary() {
  if (!activeQuiz) return;

  const exists = savedLibrary.some(q => q.id === activeQuiz.id);
  if (exists) {
    showToast("This specific quiz variation is already saved in your Library!", "fa-bookmark");
    return;
  }

  savedLibrary.push(activeQuiz);
  localStorage.setItem("quizcraft_library", JSON.stringify(savedLibrary));
  updateSavedLibraryBadge();
  renderLibraryDrawer();
  showToast("Quiz Saved to Your Personal Library!", "fa-circle-check");
}

function updateSavedLibraryBadge() {
  const badge = document.getElementById("savedCountBadge");
  if (badge) badge.textContent = savedLibrary.length;
}

function openLibraryDrawer() {
  renderLibraryDrawer();
  const drawer = document.getElementById("libraryDrawerBackdrop");
  if (drawer) drawer.classList.add("active");
}

function closeLibraryDrawer() {
  const drawer = document.getElementById("libraryDrawerBackdrop");
  if (drawer) drawer.classList.remove("active");
}

function renderLibraryDrawer() {
  const body = document.getElementById("libraryBody");
  if (!body) return;

  if (savedLibrary.length === 0) {
    body.innerHTML = `
      <div class="text-center" style="color: var(--text-muted); padding: 40px 0;">
        <i class="fa-regular fa-folder-open" style="font-size: 2.5rem; margin-bottom: 12px; color: rgba(255,255,255,0.1);"></i>
        <h4>No Saved Quizzes Yet</h4>
        <p style="font-size: 0.85rem;">Generate or complete a quiz and click 'Save to My Library' to access it anytime.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = savedLibrary.map((quiz, idx) => `
    <div class="saved-quiz-card">
      <h4>${quiz.title} <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: normal;">(Var #${quiz.seed || 'AI'})</span></h4>
      <div class="saved-quiz-meta">
        <span>${quiz.mcqs.length} MCQs</span> • <span>${quiz.shortQuestions.length} Short Qs</span> • <span>${quiz.difficulty}</span>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="loadQuizFromLibrary(${idx})">
          <i class="fa-solid fa-play"></i> Start
        </button>
        <button class="btn btn-outline btn-sm" onclick="removeQuizFromLibrary(${idx})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join("");
}

function loadQuizFromLibrary(index) {
  const quiz = savedLibrary[index];
  if (quiz) {
    loadQuizPlayer(quiz);
    closeLibraryDrawer();
  }
}

function removeQuizFromLibrary(index) {
  savedLibrary.splice(index, 1);
  localStorage.setItem("quizcraft_library", JSON.stringify(savedLibrary));
  updateSavedLibraryBadge();
  renderLibraryDrawer();
  showToast("Removed from Library", "fa-trash");
}

// 17. FEATURED TOPICS SHOWCASE
function renderShowcaseGrid() {
  const grid = document.getElementById("showcaseGrid");
  if (!grid) return;

  const showcaseTopics = [
    { id: "physics", title: "Quantum Physics & Relativity", image: "assets/images/quantum.jpg", desc: "Uncertainty, wave functions & black holes" },
    { id: "ai", title: "Artificial Intelligence & ML", image: "assets/images/ai.jpg", desc: "Neural networks, transformers & LLM alignment" },
    { id: "history", title: "World Civilizations & History", image: "assets/images/egypt.jpg", desc: "Pyramid builders, empires & landmark treaties" },
    { id: "space", title: "Space Exploration & Cosmos", image: "assets/images/space.jpg", desc: "JWST, solar planets & deep space voyages" }
  ];

  grid.innerHTML = showcaseTopics.map(item => `
    <div class="topic-card">
      <img src="${item.image}" alt="${item.title}" class="topic-card-img" />
      <div class="topic-card-body">
        <span class="topic-badge"><i class="fa-solid fa-fire"></i> Dynamic Practice</span>
        <h3 class="topic-title">${item.title}</h3>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 14px;">${item.desc}</p>
        <button class="btn btn-primary" onclick="startFeaturedQuiz('${item.title}')">
          <i class="fa-solid fa-play"></i> Practice (Fresh Variation)
        </button>
      </div>
    </div>
  `).join("");
}

function startFeaturedQuiz(topicName) {
  const topicInput = document.getElementById("topicInput");
  if (topicInput) topicInput.value = topicName;
  handleQuizGeneration(true);
}

// 18. UTILITY HELPERS
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleOptionsWithCorrect(options, correctIdx) {
  const correctItem = options[correctIdx];
  const items = options.map((opt, i) => ({ opt, isCorrect: i === correctIdx }));
  const shuffled = shuffleArray([...items]);
  const newCorrectIdx = shuffled.findIndex(item => item.isCorrect);
  return {
    options: shuffled.map(item => item.opt),
    correct: newCorrectIdx
  };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 19. TOAST NOTIFICATIONS
function showToast(message, iconClass = "fa-circle-check") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid ${iconClass}" style="color: var(--accent-cyan);"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3800);
}
