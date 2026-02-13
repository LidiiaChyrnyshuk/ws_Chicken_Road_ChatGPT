/* let resizeTimer = null;

export function scaleGame() {
	const container = document.querySelector(".game-container");
	const iframe = document.querySelector(".game-iframe");

	if (!container || !iframe) return;

	
	const isDesktop = window.innerWidth >= 1024;


	const BASE_WIDTH = isDesktop ? 1200 : 390;
	const BASE_HEIGHT = 645;

	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;

	const scaleX = containerWidth / BASE_WIDTH;
	const scaleY = containerHeight / BASE_HEIGHT;

	const scale = Math.min(scaleX, scaleY);

	iframe.style.transform = `translateX(-50%) scale(${scale})`;
}


window.addEventListener("load", scaleGame);


window.addEventListener("resize", () => {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(scaleGame, 100);
}); */

export function scaleGame() {
	const container = document.querySelector(".game-container");
	const iframe = document.querySelector(".game-iframe");

	if (!container || !iframe) return;

	const isDesktop = window.innerWidth >= 1024;

	const baseWidth = isDesktop ? 1200 : 390;
	const baseHeight = isDesktop ? 430 : 645;

	const scaleX = container.clientWidth / baseWidth;
	const scaleY = container.clientHeight / baseHeight;

	const scale = Math.min(scaleX, scaleY);


	iframe.style.transform = `translateX(-50%) scale(${scale})`;
}

window.addEventListener("resize", scaleGame);
window.addEventListener("load", scaleGame);
