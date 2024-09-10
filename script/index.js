// Quand le burger menu est cliqué, on affiche/ferme le menu mobile
document.getElementById('burger-menu').addEventListener('click', function() {
    let menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');  // Utilisation de toggle pour simplifier le code
});

// Quand un lien du menu mobile est cliqué, on ferme le menu mobile
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        let menu = document.getElementById('mobile-menu');
        menu.classList.add('hidden');  // On ferme le menu après un clic sur un lien
    });
});

// Rendre le scroll des liens smooth
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Empêcher le comportement par défaut
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {  // Vérifier que l'élément cible existe
            targetElement.scrollIntoView({
                behavior: 'smooth',  // Défilement fluide
                block: 'start'
            });
        }
    });
});