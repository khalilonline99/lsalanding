function openMenu() {
    let navMenu = document.getElementById("nav-menu-top");
    navMenu.classList.add("d-sm-block", "d-xs-block");
    navMenu.classList.remove("d-lg-block","d-xl-block", "d-none");
}

function closeButton() {
    let navMenu = document.getElementById("nav-menu-top")
    navMenu.classList.add("d-none", "d-lg-none", "d-xs-none")
}
