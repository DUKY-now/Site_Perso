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
    const accueilSection = document.querySelector('.Accueil');
    if (accueilSection) {
        const scrollY = window.scrollY;
        accueilSection.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});
