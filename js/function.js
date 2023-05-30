function openMenu() {
    let navMenu = document.getElementById("nav-menu-top");
    navMenu.classList.add("d-sm-block", "d-xs-block", "wow", "bounceInDown");
    navMenu.classList.remove("d-lg-block","d-xl-block", "d-none");
    let mobileMenu = document.getElementById("nav-mobile-menu");
    mobileMenu.classList.remove("d-flex");
    mobileMenu.classList.add("d-none");
}

function closeButton() {
    let navMenu = document.getElementById("nav-menu-top");
    navMenu.classList.add("d-none", "d-lg-none", "d-xs-none");
    let mobileMenu = document.getElementById("nav-mobile-menu");
    mobileMenu.classList.remove("d-none");
    mobileMenu.classList.add("d-flex");
}
