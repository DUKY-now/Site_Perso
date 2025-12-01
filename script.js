// Animation de la navbar au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Animation des liens de la navbar
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Animation du titre et du contenu à l'apparition
const titre = document.querySelector('.titre');
const contenue = document.querySelector('.contenue');

// Ajouter une animation fade-in au chargement
window.addEventListener('load', () => {
    titre.style.opacity = '0';
    titre.style.transform = 'translateY(-20px)';
    contenue.style.opacity = '0';
    contenue.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        titre.style.transition = 'all 0.8s ease';
        titre.style.opacity = '1';
        titre.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        contenue.style.transition = 'all 0.8s ease';
        contenue.style.opacity = '1';
        contenue.style.transform = 'translateY(0)';
    }, 300);
});

// Animation de scroll fluide pour les liens d'ancre
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Effet de parallaxe au scroll
window.addEventListener('scroll', () => {
    const accueilSection = document.querySelector('.titre');
    if (accueilSection) {
        const scrollY = window.scrollY;
        accueilSection.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// Charger les images de la galerie dynamiquement
async function loadGalleryImages() {
    const galerieContainer = document.getElementById('galerie');
    
    if (!galerieContainer) return;
    
    try {
        // Récupérer la liste des fichiers du dossier style/Images
        const response = await fetch('style/Images');
        const html = await response.text();
        
        // Parser le HTML pour récupérer les noms des fichiers
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const links = doc.querySelectorAll('a');
        
        // Extraire les noms de fichiers image
        const imageFiles = [];
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && /\.(jpg|jpeg|png|gif|webp)$/i.test(href)) {
                imageFiles.push(href);
            }
        });
        
        // Limiter à 5 images (les plus récentes)
        const maxImages = 5;
        const imagesToDisplay = imageFiles.slice(-maxImages);
        
        // Afficher les images
        galerieContainer.innerHTML = '';
        imagesToDisplay.forEach(file => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = 'style/Images/' + file;
            img.alt = file;
            img.loading = 'lazy';
            
            div.appendChild(img);
            galerieContainer.appendChild(div);
        });
        
        console.log(`${imagesToDisplay.length} images chargées dans la galerie`);
        
    } catch (error) {
        // Fallback: charger les images directement s'il y a une erreur CORS
        console.log('Utilisation de la méthode alternative pour charger les images');
        loadGalleryImagesAlternative();
    }
}

// Méthode alternative si fetch échoue (utilise une liste de fichiers)
function loadGalleryImagesAlternative() {
    const galerieContainer = document.getElementById('galerie');
    
    if (!galerieContainer) return;
    
    // Vous devez créer un fichier images.json ou spécifier manuellement les images
    const images = [
        // Ajouter vos images ici: 'image1.jpg', 'image2.png', etc.
    ];
    
    const maxImages = 5;
    const imagesToDisplay = images.slice(-maxImages);
    
    galerieContainer.innerHTML = '';
    imagesToDisplay.forEach(file => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = 'style/Images/' + file;
        img.alt = file;
        img.loading = 'lazy';
        
        div.appendChild(img);
        galerieContainer.appendChild(div);
    });
}

// Charger les images quand la page est prête
document.addEventListener('DOMContentLoaded', loadGalleryImages);
