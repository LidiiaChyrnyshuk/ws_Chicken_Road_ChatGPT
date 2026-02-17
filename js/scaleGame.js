
/* export function scaleGame() {
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
window.addEventListener("load", scaleGame); */

export function scaleGame() {
	const container = document.querySelector(".game-container");
	const iframe = document.querySelector(".game-iframe");
	if (!container || !iframe) return;

	const width = window.innerWidth;
	let gameFullWidth, gameFullHeight;

	if (width >= 1024) {
	
		gameFullWidth = 1920;
		gameFullHeight = 1080;
	}  else {
		
		gameFullWidth = 450;
		gameFullHeight = 750;
	}

	iframe.style.width = `${gameFullWidth}px`;
	iframe.style.height = `${gameFullHeight}px`;

	const scale = Math.min(
		container.clientWidth / gameFullWidth,
		container.clientHeight / gameFullHeight,
	);

	iframe.style.transform = `translateX(-50%) scale(${scale})`;
}

window.addEventListener("resize", scaleGame);
scaleGame();


