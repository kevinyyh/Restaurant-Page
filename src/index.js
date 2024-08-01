import { initialLoad } from "./initial-page-load";
import { menuPage } from "./menu";
import { aboutPage } from "./about";

initialLoad();

const content = document.querySelector(".content");
const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    initialLoad();
});
const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuPage();
});
const aboutButton = document.querySelector(".about");
aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    aboutPage();
});
