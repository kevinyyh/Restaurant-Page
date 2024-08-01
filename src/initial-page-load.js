import restaurant from "./restaurant.jpg";

const initialLoad = () => {
    const content = document.querySelector(".content");
    const image = document.createElement("img");
    image.src = restaurant;
    image.style.width = "50%";
    image.style.height = "50%";
    const h2 = document.createElement("h2");
    h2.textContent = "This is your dream restaurant";
    const p = document.createElement("p");
    p.textContent =
        "Give you the restaurant experience you have never experienced before";
    content.appendChild(image);
    content.appendChild(h2);
    content.appendChild(p);
};

export { initialLoad };
