import { openModal } from "./modal.js";
import { LANG, i18n } from "./i18n.js";
import { scaleGame } from "./scaleGame.js";

// TRANSLATE

document.querySelectorAll("[data-i18n]").forEach((el) => {
	const key = el.dataset.i18n;
	if (i18n[LANG][key]) {
		el.textContent = i18n[LANG][key];
	}
});

// ELEMENTS

const chatEl = document.getElementById("chat");
const startBtn = document.getElementById("startBtn");
const gameOverlay = document.getElementById("gameOverlay");
const tipsEl = document.getElementById("tips");
const icon = document.getElementById("icon")

// DATA

const chatMessages = i18n[LANG].chat;
const tips = i18n[LANG].tips;

// TYPEWRITER FUNCTION

function typeWriter(el, text, speed = 35, done) {
	let i = 0;
	el.textContent = "";

	function write() {
		if (i === 0) el.classList.add("visible");

		if (i < text.length) {
			el.textContent += text[i];
			i++;
			setTimeout(write, speed);
		} else if (done) {
			done();
		}
	}

	write();
}

// CHAT SEQUENCE

let chatIndex = 0;

function showNextChat() {
	if (chatIndex >= chatMessages.length) {
		startBtn.textContent = i18n[LANG].start;
		/* startBtn.classList.remove("hidden");
		icon.classList.remove("hidden"); */
		setTimeout(() => {
			icon.classList.remove("hidden");
		}, 200);

		setTimeout(() => {
			startBtn.classList.remove("hidden");
		}, 400);

		return;
	}

	const msg = document.createElement("div");
	msg.className = "chat-msg";
	chatEl.appendChild(msg);

	typeWriter(msg, chatMessages[chatIndex], 35, () => {
		chatIndex++;
		setTimeout(showNextChat, 600);
	});
}

document.addEventListener("DOMContentLoaded", showNextChat);

// TIPS FUNCTION (MAX 2 VISIBLE)

const MAX_VISIBLE_TIPS = 2;
const TIP_HEIGHT = 26;

function pushTip(text) {
	const tip = document.createElement("div");
	tip.className = "tip";
	tipsEl.appendChild(tip);

	typeWriter(tip, text, 30);

	const tipsList = Array.from(tipsEl.querySelectorAll(".tip"));

	// якщо більше 2 — прибираємо першу
	if (tipsList.length > MAX_VISIBLE_TIPS) {
		const first = tipsList[0];
		first.classList.add("tip-exit");

		setTimeout(() => {
			first.remove();
		}, 300);
	}
}

// GAME START

startBtn.addEventListener("click", () => {
	gameOverlay.classList.remove("hidden");
	document.body.classList.add("no-scroll");

	setTimeout(() => {
		scaleGame();
	}, 60);

	let tipIndex = 0;

	const tipInterval = setInterval(() => {
		if (tipIndex >= tips.length) {
			clearInterval(tipInterval);
			return;
		}

		pushTip(tips[tipIndex]);
		tipIndex++;
	}, 2000);

	// через 15 сек відкриваємо модалку і очищаємо поради
	setTimeout(() => {
		clearInterval(tipInterval);

		// видаляємо всі поради
		const existingTips = tipsEl.querySelectorAll(".tip");
		existingTips.forEach((el) => el.remove());

		openModal();
	}, 12000);
});
