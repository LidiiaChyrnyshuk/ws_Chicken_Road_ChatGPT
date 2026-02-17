
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
		
		gameFullWidth = 780;
		gameFullHeight = 960;
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
