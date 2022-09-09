var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
    var background =
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    body.style.background = background;
    css.textContent =  background;
}

function randomColor() {
    color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    setGradient();
}

setGradient()

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

random.addEventListener("click", randomColor)