let MENU = document.querySelector(".menu")
let OVERLAY = document.querySelector(".overlay")

function toggleActive(){
    this.classList.toggle("active");
    OVERLAY.classList.toggle("menu-open")
}

MENU.addEventListener("click", toggleActive);