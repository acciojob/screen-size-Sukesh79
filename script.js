function updateWindowSize(){
	let width = window.innerWidth;
	let height = window.innerHeight;

	let sizeElement = document.querySelector("#sizeInfo h1");

	sizeElement.textContent = `Width: ${width} and Height: ${height}`;
}

updateWindowSize();
window.addEventListener("resize", updateWindowSize);