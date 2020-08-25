var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function selectGradient() {
	var randomColor = {
		r: Math.floor(Math.random() * 255),
		g: Math.floor(Math.random() * 255),
		b: Math.floor(Math.random() * 255)
	};
	var randomColor2 = {
		r: Math.floor(Math.random() * 255),
		g: Math.floor(Math.random() * 255),
		b: Math.floor(Math.random() * 255)
	};
	randomColor.rgb = "rgb("+randomColor.r+", "+randomColor.g+", "+randomColor.b+")";
	randomColor2.rgb = "rgb("+randomColor2.r+", "+randomColor2.g+", "+randomColor2.b+")";
	css.textContent = body.style.background;
	return body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor.rgb 
	+ ", " 
	+ randomColor2.rgb 
	+ ")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", selectGradient);
