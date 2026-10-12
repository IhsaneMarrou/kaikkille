
console.log("MENU JS LOADED");

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

console.log("Button found:", menuButton);
console.log("Navigation found:", navigation);

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        console.log("MENU BUTTON CLICKED");

        const isOpen = menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute("aria-expanded", String(!isOpen));
        navigation.classList.toggle("menu-open");
    });
}

