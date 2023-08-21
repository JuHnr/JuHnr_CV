//masquer menu après le clic

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("nav a");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            closeMenu();
        });
    });

    function closeMenu() {
        const menuCheckbox = document.getElementById("menu_deroulant");
        menuCheckbox.checked = false;
    }
});

//circle progress bar dynamique

function animateProgressBar(language, endValue, color, speed) {
    let progressStartValue = 0;
    const progressBar = document.querySelector(language);

    const progressInterval = setInterval(() => {
        progressStartValue++;
        progressBar.style.background = `conic-gradient(${color} ${progressStartValue * 3.6}deg, rgb(255, 255, 255) 0deg)`; // 360/100 = 3.6  (donc 3.6deg = 1%)

        if (progressStartValue === endValue) {
            clearInterval(progressInterval);
        }
    }, speed);
}

// Vérifie si l'element passé en paramètre est affiché sur l'écran
function checkVisible(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// Vérifie toutes les 250ms si #competences est affiché. Si vrai, anime la barre de progression et désactive l'intervalle


function startAnimationWhenVisible(selector, endValue, color, speed) {
    const interval = setInterval(() => {
        if (checkVisible(document.getElementById('competences'))) {
            animateProgressBar(selector, endValue, color, speed);
            clearInterval(interval);
        }
    }, 250);
}

startAnimationWhenVisible(".html", 90, "rgb(255, 145, 0)", 25);
startAnimationWhenVisible(".css", 70, "rgb(0, 162, 255)", 40);
startAnimationWhenVisible(".js", 20, "rgb(255, 255, 0)", 60);
startAnimationWhenVisible(".php", 30, "rgb(141, 142, 180)", 60);



