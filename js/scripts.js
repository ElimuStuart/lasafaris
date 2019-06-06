let MENU = document.querySelector(".menu")
let OVERLAY = document.querySelector(".overlay")
let NAVLINKS = document.querySelectorAll(".nav li");

function toggleActive(){
    this.classList.toggle("active");
    OVERLAY.classList.toggle("menu-open")
}

MENU.addEventListener("click", toggleActive);

function removeActive(){
    OVERLAY.classList.remove("menu-open");
    MENU.classList.remove("active");

}

for ( let i = 0; i < NAVLINKS.length; i++){
    NAVLINKS[i].addEventListener("click", removeActive);
}