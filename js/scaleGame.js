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

	const isDesktop = window.innerWidth >= 1024;

	// 1. Встановлюємо "Віртуальну роздільну здатність"
	// Якщо гра на сайті розрахована на великий екран, ставимо 1920
	const gameFullWidth = isDesktop ? 1920 : 500;
	const gameFullHeight = isDesktop ? 1080 : 800;

	// Примусово робимо фрейм величезним, щоб гра всередині розгорнулася без скролів
	iframe.style.width = `${gameFullWidth}px`;
	iframe.style.height = `${gameFullHeight}px`;

	// 2. Рахуємо, у скільки разів треба стиснути цей гігантський фрейм,
	// щоб він вліз у ваш маленький .game-container
	const scale = Math.min(
		container.clientWidth / gameFullWidth,
		container.clientHeight / gameFullHeight,
	);

	// 3. Стискаємо фрейм
	iframe.style.transform = `translateX(-50%) scale(${scale})`;
}

// Додаємо виклик при зміні розміру вікна
window.addEventListener("resize", scaleGame);
// Викликаємо один раз відразу
scaleGame();
