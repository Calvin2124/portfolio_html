// Quand le burger menu est cliqué, on affiche le menu mobile si un lien est cliqué le menu se ferme
document.getElementById('burger-menu').addEventListener('click', function() {
    let menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

// Quand le lien du menu mobile est cliqué, on affiche le menu mobile si un lien est cliqué le menu se ferme
document.getElementById('mobile-menu').addEventListener('click', function() {
    let menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

// Rendre smooth scroll sur les liens
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});