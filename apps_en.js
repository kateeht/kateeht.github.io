"use strict";

const detailedProjects = [
    {
        title: "MetaExtract - ETL Platform & Metabolic Modeling",
        category: "Data Engineering & Bioinformatics",
        date: "Jan. 2026 - Apr. 2026 (Ongoing)",
        img: "data/acceuil.png", 
        tech: ["Python", "Flask", "Pandas", "Plotly", "SQL"],
        desc: "Web platform for extracting and filtering biological data for metabolic modeling.",
        details: [
            "Design of a web interface for database querying and biological variable filtering.",
            "Flask backend development and data processing (handling missing/outlier values) via Pandas.",
            "Completed module: Thermodynamic Analysis (Gibbs free energy, $ \\Delta G $) with interactive Plotly/Dash charts.",
            "In progress: Enzyme kinetics, data comparison, and modular export (CSV/SBML)."
        ],
        rounds: [
            { 
                url: "data/thermo.png", 
                title: "Thermodynamic Dashboard (Completed)", 
                text: "Interactive Plotly visualization identifying spontaneous reactions (green) and bottlenecks requiring energy input (red)." 
            }
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/lifprojet.git" 
    },
    {
        title: "Graph Cut Image Binarization",
        category: "Algorithms & Data",
        date: "Nov. 2025 – Dec. 2025",
        img: "data/baboon.png", 
        tech: ["C++", "Graph Theory", "Max-Flow/Min-Cut", "PPM/PGM"],
        desc: "Implementation of an image binarization algorithm based on maximum flow optimization, offering superior segmentation compared to global thresholding.",
        details: [
            "Modeling the image as a directed graph with Source (S) and Sink (P) nodes.",
            "Implementation of the Ford-Fulkerson algorithm using Breadth-First Search (BFS).",
            "Calculation of edge capacities based on a Gaussian function to capture local contrasts.",
            "Optimal partitioning of the image into two components (Dark/Light) via minimum cut."
        ],
        rounds: [
            { 
                url: "data/dragon.png", 
                title: "Graph Generation", 
                text: "Conversion of pixels into nodes. Iterative calculation of the maximum flow based on the intensity similarity between neighboring pixels." 
            },
            { 
                url: "data/circle.png", 
                title: "Minimum Cut Result", 
                text: "Pixels connected to S are inked in black and those to P in white, minimizing the cut energy." 
            }
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/graphe.git"
    },
    {
        title: "Galaga Wars - Arcade Game (C++)",
        category: "Software Development (UE LIFAPCD)",
        date: "Feb. 2025 - Apr. 2025",
        img: "data/intro_gala.png", 
        tech: ["C++", "SDL2", "OOP", "CMake"],
        desc: "A modern reinterpretation of the classic Galaga game, focused on a robust and decoupled software architecture.",
        details: [
            "Strict MVC separation between business logic (Core) and rendering (SDL2/WinTXT).",
            "Dynamic management of enemy waves with complex trajectories (linear, circular).",
            "Implementation of rigorous regression testing for game entities (Ship, Game, Enemy).",
            "Application of industry tools: Git, Valgrind for memory check, CMake, and Doxygen."
        ],
        rounds: [
            { 
                url: "data/round1_gala.png", 
                title: "Standard Wave", 
                text: "Grid of enemies utilizing linear trajectories and a random shooting system." 
            },
            { 
                url: "data/r2_gala.png", 
                title: "Circular Wave", 
                text: "Deployment of 40 enemies with a circular trajectory and a continuous input flow." 
            },
            { 
                url: "data/final_gala.png", 
                title: "Boss Fight", 
                text: "Ultimate confrontation featuring a dynamically calculated 'Tractor Beam' based on the ship's position." 
            }
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/galagawars.git" 
    },
    {
        title: "Brick Placement Game (Database)",
        category: "Full Stack & Databases",
        date: "Oct. 2024 – Dec. 2024",
        img: "data/game.png", 
        tech: ["Python", "SQL", "MVC", "HTML/CSS"],
        desc: "Interactive puzzle game backed by a relational database system.",
        details: [
            "E/R modeling and creation of the SQL relational schema.",
            "MVC architecture (Python) implementation with random grid generation.",
            "Dynamic management of player actions (draw, place, discard) recorded in real-time in the DB.",
            "Development of an analytical dashboard based on complex SQL queries."
        ],
        rounds: [
            { 
                url: "data/play.png", 
                title: "Game Mechanics", 
                text: "Generation of adjacent target cells. Player actions directly interact with the database to ensure state persistence." 
            },
            { 
                url: "data/sql.png", 
                title: "Dashboard & Advanced SQL", 
                text: "Statistics generated via complex queries (Joins, Aggregations, EXTRACT): color ranking, score extremes, and temporal tracking."
            }
        ],
        link: "https://github.com/kateeht/placement-de-briques.git"
    },
    {
        title: "Impact of CSR on Corporate Debt",
        category: "Finance & Econometrics (Research)",
        date: "2022",
        tech: ["Econometrics", "GMM System", "OLS", "Data Analysis"],
        desc: "Team-based academic research (5 members) empirically analyzing the impact of Corporate Social Responsibility (CSR) on debt maturity structure in Vietnam.",
        details: [
            "Panel data collection and processing (220 listed companies, 2014-2018).",
            "Econometric modeling: OLS regressions and System GMM to correct endogeneity bias.",
            "Analysis of financial theories: agency theory, information asymmetry, and signaling theory.",
            "Conclusion: Demonstrated a negative correlation between CSR performance and debt maturity."
        ],
        downloadFile: "data/[SR-ICYREB_2022].pdf"
    }
];


function renderDetailedProjects() {
    const $container = document.querySelector("#gallery");
    if (!$container) return;

    $container.replaceChildren();

    detailedProjects.forEach((proj) => {
        const $article = document.createElement("article");
        $article.className = "project-item-detail";

        let roundsHtml = "";
        if (proj.rounds) {
            roundsHtml = `
                <div class="project-mini-gallery">
                    ${proj.rounds.map(r => `
                        <div class="gallery-item">
                            <img src="${r.url}" alt="${r.title}" onerror="this.src='https://via.placeholder.com/400x250'">
                            <div class="gallery-info">
                                <span>${r.title}</span>
                                <p>${r.text}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        let buttonHtml = "";
        if (proj.downloadFile) {
            buttonHtml = `
                <a href="${proj.downloadFile}" download class="btn-forge">
                    <i class="fas fa-file-download"></i> Download Report
                </a>
            `;
        } else if (proj.link && proj.link !== "#") {
            buttonHtml = `
                <a href="${proj.link}" target="_blank" class="btn-forge">
                    <i class="fab fa-git-alt"></i> View on Forge/GitHub
                </a>
            `;
        }

        $article.innerHTML = `
            <div class="project-content-box">
                <span class="category-tag">${proj.category}</span>
                <h3>${proj.title}</h3>
                <p><em>${proj.date}</em></p>
                <p style="font-weight: 500;">${proj.desc}</p>
                <ul>${proj.details.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>

            ${proj.img ? `
            <div class="project-image-box">
                <img src="${proj.img}" alt="Project preview" class="main-img">
            </div>` : ''}

            ${roundsHtml}
            
            <div class="project-footer" style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                <div>
                    <strong>Technologies :</strong><br>
                    ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                ${buttonHtml}
            </div>
        `;
        $container.appendChild($article);
    });
}

document.addEventListener("DOMContentLoaded", renderDetailedProjects);