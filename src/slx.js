
let isExpanding = false;
let ctrlEnabled = false;
let originX, originY;

function addEvents() {

	let baseContainer = document.querySelector(".slx-container");

	baseContainer
		.addEventListener("mousedown", event => {

			if (ctrlEnabled && !isExpanding) {

				isExpanding = true;

				originY = event.y;
				originX = event.x;

				let rect = document.createElement("div");
				rect.classList.add("slx");
				rect.style.cssText = `
						top: ${originY}px;
						left: ${originX}px;
					`;

				document.body.appendChild(rect);

				event.preventDefault();
			}
		});

	baseContainer
		.addEventListener("mousemove", event => {

			if (isExpanding) {

				let rect = document.querySelector(".slx");

				let currentX = event.x,
					currentY = event.y;

				let additionalWidth = currentX - originX,
					additionalHeight = currentY - originY;

				if (additionalWidth < 0) {
					rect.style.left = currentX + "px";
				}
				else {
					rect.style.left = originX + "px";
				}
				if (additionalHeight < 0) {
					rect.style.top = currentY + "px";
				}
				else {
					rect.style.top = originY + "px";
				}

				rect.style.width = Math.abs(additionalWidth) + "px";
				rect.style.height = Math.abs(additionalHeight) + "px";
			}
		});

	baseContainer
		.addEventListener("mouseup", event => {

			if (isExpanding) {
				document.querySelector(".slx").remove();

				isExpanding = false;
			}
		});

}

function init(options = {}) {
	const { key, cursor } = options;
	document.body
		.addEventListener("keyup", event => {

			if ((event.key === (key || "Control")) && !isExpanding) {
				if (ctrlEnabled) {
					document.querySelector(".slx-container").remove();

					ctrlEnabled = false;
				}
				else {
					let baseContainer = document.createElement("div");
					baseContainer.classList.add("slx-container");
					document.body.appendChild(baseContainer);

					ctrlEnabled = true;
					addEvents();
				}
			}
		});
}

module.exports = { init };