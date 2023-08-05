let button = document.querySelector("#click");
let contentBackground = document.querySelector(".content");
let footerBackground = document.querySelector(".footer");
let navBackground = document.querySelector(".nav");
let navContainer = document.querySelectorAll("a");
let content = document.querySelectorAll(".content__box");
let backgroundColor = document.querySelector("*");

button.addEventListener("click", changeColors);

function changeColors() {
    contentBackground.style.background = "#3C3B3C";
    footerBackground.style.background = "WhiteSmoke";
    footerBackground.style.color = "#3C3B3C";
    navBackground.style.background = "WhiteSmoke";
    navContainer.forEach(link => {
        link.style.color = "#3C3B3C";
    });
    content.forEach(content => {
        content.style.color = "WhiteSmoke";
    })
    button.removeEventListener("click", changeColors);
    button.addEventListener("click", changeColorsBack);
}

function changeColorsBack() {
    contentBackground.style.background = "WhiteSmoke";
    footerBackground.style.background = "#3C3B3C";
    footerBackground.style.color = "WhiteSmoke";
    navBackground.style.background = "#3C3B3C";
    navContainer.forEach(link => {
        link.style.color = "WhiteSmoke";
    });
    content.forEach(content => {
        content.style.color = "#3C3B3C";
    })
    button.removeEventListener("click", changeColorsBack);
    button.addEventListener("click", changeColors);
}
