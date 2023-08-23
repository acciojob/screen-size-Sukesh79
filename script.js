//your JS code here. If required.

let width = document.getElementById("width");
let height = document.getElementById("height");
width.innerText = window.outerWidth;
height.innerText = window.outerHeight;

window.addEventListener("resize", () => {
	width.innerText = window.outerWidth;
	height.innerText = window.outerHeight;
})
