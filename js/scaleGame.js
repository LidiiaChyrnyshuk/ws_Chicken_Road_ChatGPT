export function scaleGame() {
	const container = document.querySelector(".game-container");
	const iframe = document.querySelector(".game-iframe");

	if (!container || !iframe) return;

	const baseWidth = 1200;
	const baseHeight = 645;

	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;

	const scaleX = containerWidth / baseWidth;
	const scaleY = containerHeight / baseHeight;

	const scale = Math.min(scaleX, scaleY);

	iframe.style.transform = `translateX(-50%) scale(${scale})`;
}

window.addEventListener("load", scaleGame);
window.addEventListener("resize", scaleGame);
