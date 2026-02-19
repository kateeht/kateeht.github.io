"use strict";

const detailedProjects = [
    {
        title: "MetaExtract - Plateforme ETL & Modélisation",
        category: "Data Engineering & Bioinformatique",
        date: "Janv. 2026 - Avril 2026 (En cours)",
        img: "data/acceuil.png", 
        tech: ["Python", "Flask", "Pandas", "Plotly"],
        desc: "Application web d'extraction de données biologiques pour la modélisation métabolique.",
        details: [
            "Interface web pour l'interrogation filtrée de bases de données.",
            "Backend Flask et traitement de données via Pandas.",
            "Module Thermodynamique : calcul du $\\Delta G$ et graphiques interactifs (Plotly/Dash).",
            "En cours : Cinétique enzymatique et export (CSV/JSON/SBML)."
        ],
        rounds: [
            { 
                url: "data/thermo.png", 
                title: "Dashboard Thermodynamique", 
                text: "Identification graphique des réactions spontanées (vert) et des goulots d'étranglement (rouge)." 
            }
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/lifprojet.git" 
    },
    {
        title: "Binarisation par Coupe de Graphe",
        category: "Algorithmique & Data",
        date: "Nov. 2025 – Déc. 2025",
        img: "data/baboon.png",
        tech: ["C++", "Théorie des Graphes", "Flot Max/Coupe Min"],
        desc: "Segmentation d'images par optimisation de flot maximal (Max-Flow/Min-Cut).",
        details: [
            "Modélisation de l'image en graphe orienté (Source/Puits).",
            "Algorithme de Ford-Fulkerson avec parcours en largeur (BFS).",
            "Calcul des capacités d'arcs basé sur les contrastes locaux.",
            "Partitionnement optimal de l'image par coupe minimale."
        ],
        rounds: [
            { 
                url: "data/dragon.png",
                title: "Génération du Graphe", 
                text: "Modélisation des pixels en nœuds et calcul itératif du flot maximal selon l'intensité des voisins." 
            },
            { 
                url: "data/circle.png",
                title: "Coupe Minimale", 
                text: "Encrage noir/blanc des pixels minimisant l'énergie de section des arcs." 
            }
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/graphe.git"
    },
    {
        title: "Galaga Wars - Jeu d'arcade (C++)",
        category: "Développement Logiciel (UE LIFAPCD)",
        date: "Fév. 2025 - Avril 2025",
        img: "data/intro_gala.png", 
        tech: ["C++", "SDL2", "MVC", "CMake"],
        desc: "Réinterprétation de Galaga basée sur une architecture logicielle robuste.",
        details: [
            "Architecture découplée (MVC) : Logique (Core) et Rendu (SDL2/WinTXT).",
            "Gestion de vagues d'ennemis aux trajectoires complexes.",
            "Tests de régression rigoureux (Vaisseau, Jeu, Ennemi).",
            "Outils industriels : Git, Valgrind, CMake et Doxygen."
        ],
        rounds: [
            { 
                url: "data/round1_gala.png", 
                title: "Vague Standard", 
                text: "Ennemis à trajectoires linéaires et système de tirs aléatoires." 
            },
            { 
                url: "data/r2_gala.png", 
                title: "Vague Circulaire", 
                text: "Déploiement de 40 ennemis en trajectoire circulaire continue." 
            },
            { 
                url: "data/final_gala.png", 
                title: "Combat de Boss", 
                text: "Implémentation d'un 'Rayon Tracteur' ciblant dynamiquement le vaisseau." 
            }
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/galagawars.git" 
    },
    {
        title: "Jeu de Placement de Briques (BDD)",
        category: "Full Stack & Bases de Données",
        date: "Oct. 2024 – Déc. 2024",
        img: "data/game.png", 
        tech: ["Python", "SQL", "MVC", "HTML/CSS"],
        desc: "Jeu de réflexion adossé à une base de données relationnelle.",
        details: [
            "Modélisation E/A et schéma relationnel SQL.",
            "Architecture MVC (Python) et génération aléatoire de grilles.",
            "Enregistrement des actions joueurs en temps réel (BDD).",
            "Dashboard analytique avec requêtes SQL complexes."
        ],
        rounds: [
            { 
                url: "data/play.png", 
                title: "Mécanique de Jeu", 
                text: "Génération de cases cibles. Chaque action du joueur (piocher, placer) met à jour la BDD." 
            },
            { 
                url: "data/sql.png", 
                title: "Dashboard & SQL", 
                text: "Statistiques générées via requêtes complexes (Jointures, Agrégations) : performances des joueuses, extrêmes de scores et suivi temporel."
            }
        ],
        link: "https://github.com/kateeht/placement-de-briques.git"
    },
    {
        title: "Impact de la RSE sur la Dette d'Entreprise",
        category: "Finance & Économétrie (Recherche)",
        date: "2022",
        tech: ["Économétrie", "GMM System", "OLS", "Data"],
        desc: "Étude économétrique en équipe (5 pers.) sur l'impact de la RSE sur la structure de la dette au Vietnam.",
        details: [
            "Analyse d'un panel de 220 entreprises cotées (2014-2018).",
            "Régressions OLS et Système GMM pour corriger les biais d'endogénéité.",
            "Analyse des théories d'agence, d'asymétrie d'information et du signal.",
            "Conclusion : Démonstration d'une corrélation négative entre RSE et maturité de la dette."
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
                    <i class="fas fa-file-download"></i> Télécharger le Rapport
                </a>
            `;
        } else if (proj.link && proj.link !== "#") {
            buttonHtml = `
                <a href="${proj.link}" target="_blank" class="btn-forge">
                    <i class="fab fa-git-alt"></i> Voir sur la Forge
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
                <img src="${proj.img}" alt="Aperçu du projet" class="main-img">
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