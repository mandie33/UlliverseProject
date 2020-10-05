//Bouton apparaît quand hauteur fenêtre > à 120px
window.addEventListener('load', function(){
const backToTopBtn = document.querySelector("#backtotop");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {

    if (window.scrollY > 120) {
        backToTopBtn.style.display = "block"; //faire apparaître le bouton si condition ok
    } else {
        backToTopBtn.style.display = "none"; //le faire disparaître si moins de 200px
    }
}
// et fait remonter en haut de page au clic
backToTopBtn.addEventListener("click", retour);

function retour() {
  window.scrollTo(0, 0); // retour en haut de page
}

})