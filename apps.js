"use strict";

const detailedProjects = [
    {
        title: "MetaExtract - Plateforme ETL & Modélisation Métabolique",
        category: "Data Engineering & Bioinformatique",
        date: "Janv. 2026 - Avril 2026 (En cours)",
        img: "data/acceuil.png", 
        tech: ["Python", "Flask", "Pandas", "Plotly"],
        desc: "Application web d'extraction de paramètres pour la modélisation de systèmes biologiques.",
        details: [
            "Conception d'une interface web permettant l'interrogation de bases de données et le filtrage de variables biologiques.",
            "Développement Backend avec Flask et traitement des données (détection des valeurs manquantes/aberrantes) via Pandas.",
            "Module achevé : Analyse Thermodynamique avec graphiques interactifs (Plotly/Dash) pour évaluer l'énergie libre de Gibbs (Delta G).",
            "Fonctionnalités en cours : Cinétique enzymatique, comparaison de données et export modulable (CSV/JSON/SBML)."
        ],
        rounds: [
            { 
                url: "data/thermo.png", 
                title: "Dashboard Thermodynamique (Achevé)", 
                text: "Visualisation interactive développée avec Plotly. Elle identifie les réactions spontanées (vert,Delta G < 0) et les goulots d'étranglement nécessitant un apport d'énergie (rouge, Delta G > 0)." 
            }
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/lifprojet.git" ,
        title: "Binarisation par Coupe de Graphe (Encrage)",
        category: "Algorithmique & Data",
        date: "Novembre 2025 – Décembre 2025",
        img: "data/baboon.png", // Image montrant l'avant/après
        tech: ["C++", "Théorie des Graphes", "Flot Max/Coupe Min", "PPM/PGM"],
        desc: "Implémentation d'un algorithme d'encrage d'image basé sur l'optimisation de flot maximal, permettant une segmentation plus précise qu'un simple seuillage global.",
        details: [
            "Modélisation de l'image en graphe orienté avec nœuds source (S) et puits (P).",
            "Implémentation de l'algorithme de Ford-Fulkerson avec recherche de chemin par parcours en largeur (BFS).",
            "Calcul des capacités d'arcs basé sur une Gaussienne pour capturer les contrastes locaux.",
            "Partitionnement optimal de l'image en deux composantes (Sombre/Clair) par coupe minimale."
        ],
        rounds: [
            { 
                url: "data/dragon.png", // Image originale (ex: baboon.pgm)
                title: "Image dragon", 
                text: "Chargement de l'image en niveaux de gris. Chaque pixel est converti en nœud de graphe avec 6 capacités et 6 flots (4 voisins + Source + Puits). Calcul itératif du flot maximal. Les arcs sont saturés en fonction de la similarité d'intensité entre pixels voisins (paramètre sigma) et de la propension locale (paramètre alpha)." 
            },
            { 
                url: "data/circle.png", // Schéma du graphe (voir Figure 1 du TP)
                title: "Image", 
                text: "Après saturation, les pixels connectés à S sont encrés en noir (0) et ceux connectés à P en blanc (255), minimisant ainsi l'énergie de section des arcs." 
            },
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/graphe.git" // Lien vers forge
    },
    {
        title: "Galaga Wars - Jeu d'arcade en C++",
        category: "Développement Logiciel (UE LIFAPCD)",
        date: "Fév. 2025 - Avril 2025",
        img: "data/intro_gala.png", 
        tech: ["C++", "SDL2", "OOP", "CMake"],
        desc: "Une réinterprétation moderne du classique Galaga, axée sur une architecture logicielle robuste et découplée (MVC).",
        details: [
            "Architecture découplée : Logique métier (Core) et Rendu graphique (SDL2/WinTXT).",
            "Gestion dynamique des vagues d'ennemis avec trajectoires complexes (DROITE, CERCLE, BOSS).",
            "Mise en œuvre de tests de régression rigoureux pour les classes Vaisseau, Jeu, et Ennemi.",
            "Utilisation d'outils industriels : Git, Doxygen pour la doc, Valgrind pour la mémoire et CMake."
        ],
        rounds: [
            { 
                url: "data/round1_gala.png", 
                title: "Round 1 : Formation Standard (Vague Normale)", 
                text: "Implémentation d'une grille d'ennemis (ajouterVagueNormal) utilisant des trajectoires linéaires. Le système gère les tirs aléatoires via 'setCanShoot' et initialise les mécaniques de collision de base." 
            },
            { 
                url: "data/r2_gala.png", 
                title: "Round 2 : Attaque Circulaire (Vague Circle)", 
                text: "Déploiement de 40 ennemis avec une trajectoire complexe en cercle (CERCLE). Utilisation de 'setSpawnTime' pour créer un flux d'entrée continu, augmentant la densité des projectiles à esquiver." 
            },
            { 
                url: "data/final_gala.png", 
                title: "Combat Final : Le Boss & Rayon Tracteur", 
                text: "Confrontation ultime avec l'entité BOSS. Implémentation du 'Rayon Tracteur' (activerRayonTracteur) : un laser calculé dynamiquement par la distance géométrique entre le boss et le vaisseau." 
            }
        ],
        link: "https://forge.univ-lyon1.fr/p2303609/galagawars.git" 
    },

    {
        title: "Jeu de Placement de Briques (Type Lego™)",
        category: "Full Stack & Bases de Données",
        date: "Oct. 2024 – Déc. 2024",
        img: "data/game.png", // Image de la grille avec cases hachurées 
        tech: ["Python", "SQL (Relationnel)", "MVC", "HTML/CSS"],
        desc: "Développement d'un jeu complet basé sur une base de données relationnelle, où le joueur doit compléter une grille en plaçant des briques stratégiquement.",
        details: [
            "Conception du diagramme Entité/Association et du schéma relationnel SQL.",
            "Implémentation de l'architecture MVC (Modèle-Vue-Contrôleur) avec Python.",
            "Algorithme de génération de grille aléatoire (10% à 20% de cases cibles).",
            "Gestion dynamique de la pioche (4 briques tirées aléatoirement dans la BD).",
            "Calcul des statistiques de jeu (meilleurs scores, nombre moyen de tours)."
        ],
        rounds: [
            { 
                url: "data/play.png", // Image de la grille vide/hachurée 
                title: "Configuration de la Grille et Mécanique de Jeu", 
                text: "Le joueur définit les dimensions. L'algorithme place les cases cibles (hachurées) de manière adjacente pour garantir la jouabilité. Sélection d'une brique dans la pioche. Chaque action (placer ou défausser) est enregistrée en base de données" 
            },
            { 
                url: "data/sql.png", // Image des statistiques SQL
                title: "Statistiques & SQL", 
                text: `La page d'accueil affiche des statistiques générées via des requêtes SQL complexes (agrégations, jointures) :
                <ul style="margin-top: 10px; padding-left: 20px; line-height: 1.6;">
                    <li><strong>Métriques globales :</strong> Nombre d'instances pour les tables principales de la base.</li>
                    <li><strong>Classement :</strong> Top-5 des couleurs ayant le plus de briques.</li>
                    <li><strong>Performances :</strong> Score minimal et maximal pour chaque joueuse.</li>
                    <li><strong>Analyse des actions :</strong> Parties avec le plus petit et plus grand nombre de pièces défaussées et piochées.</li>
                    <li><strong>Suivi temporel :</strong> Le nombre moyen de tours, pour chaque couple (mois, année).</li>
                    <li><strong>Top-3 :</strong> Parties dans lesquelles les plus grandes pièces ont été placées, avec un tri décroissant sur le nombre de pièces.</li>
                </ul>`
            },
        ],
        link: "https://github.com/kateeht/placement-de-briques.git" // Ajoutez votre lien si disponible (ex: GitHub)
    },
    {
        title: "Recherche : Impact de la RSE sur la Dette d'Entreprise",
        category: "Finance & Économétrie (Recherche Académique)",
        date: "2022",
        
        tech: ["Économétrie", "GMM System", "OLS", "Analyse de Données"],
        desc: "Projet de recherche académique réalisé en équipe de 5 personnes. L'étude analyse empiriquement l'impact de la Responsabilité Sociétale des Entreprises (RSE) sur la structure des échéances de la dette au Vietnam.",
        details: [
            "Collecte et traitement de données de panel (220 entreprises cotées sur la période 2014-2018).",
            "Modélisation économétrique : utilisation des régressions OLS et du Système GMM pour résoudre les biais d'endogénéité.",
            "Analyse des théories financières : théorie de l'agence, asymétrie d'information et théorie du signal.",
            "Conclusion : Démonstration d'une corrélation négative entre la performance RSE et la maturité de la dette (favorisant le financement à court terme)."
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
                    <strong>Technologies / Méthodes :</strong><br>
                    ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                ${buttonHtml}
            </div>
        `;
        $container.appendChild($article);
    });
}

document.addEventListener("DOMContentLoaded", renderDetailedProjects);