var elBurger = document.querySelector(".head__menu");
var elClose = document.querySelector(".head__btn-close");
var elHead = document.querySelector(".head");


elBurger.addEventListener("click", function() {
    elHead.classList.add("head--open")
})

elClose.addEventListener("click", function() {
    elHead.classList.remove("head--open")
})