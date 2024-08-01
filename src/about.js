const aboutPage = () => {
    const content = document.querySelector(".content");
    const h2 = document.createElement("h2");
    h2.textContent = "This is the about page of this restaurant";
    const p = document.createElement("p");
    p.textContent =
        "asdjfhsklajfks fashjfjsklafjksafjd fskafjjflksjakf sdkjfas;kjfklsd";
    content.appendChild(h2);
    content.appendChild(p);
};

export { aboutPage };
