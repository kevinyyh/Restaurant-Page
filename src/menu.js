const menuPage = () => {
    const content = document.querySelector(".content");
    const intro = document.createElement("p");
    intro.textContent = "This is the menu for this restaurant";
    const menuImage = document.createElement("img");
    menuImage.src =
        "/Users/kevin/Desktop/Development/TOP/jspath/Restaurant-Page/src/menu.jpg";
    content.appendChild(intro);
    content.appendChild(menuImage);
};

export { menuPage };
