document.querySelector(".no-emergency-tasks").style.background = "yellow";

document.querySelector(".emergency-tasks").style.background = "#ff9f84";
const fundoPrimeiroH3 = document.querySelectorAll(".emergency-tasks h3");
fundoPrimeiroH3.forEach(element => {
    element.style.background = "#a500f3";
});

document.querySelector(".no-emergency-tasks").style.background = "#black";
const fundoSegundoH3 = document.querySelectorAll(".no-emergency-tasks h3");
fundoSegundoH3.forEach(element => {
    element.style.background = "black";
});

document.querySelector("#header-container").style.background = "#00b069"

document.querySelector("#footer-container").style.background = "#003533"


