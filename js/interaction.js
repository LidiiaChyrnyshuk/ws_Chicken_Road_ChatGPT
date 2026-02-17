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
const icon = document.getElementById("icon");

// DATA

const chatMessages = i18n[LANG].chat;
const tips = i18n[LANG].tips;

// TYPEWRITER FUNCTION

function typeWriter(el, html, speed = 35, done) {
	el.innerHTML = html;
	el.classList.add("visible");
	const walker = document.createTreeWalker(
		el,
		NodeFilter.SHOW_TEXT,
		null,
		false,
	);
	const textNodes = [];
	let node;
	while ((node = walker.nextNode())) {
		textNodes.push(node);
	}
  
	textNodes.forEach((n) => { n._fullText = n.nodeValue; n.nodeValue = ""; });
	let nodeIndex = 0;
	let charIndex = 0;
	function write() {
		if (nodeIndex >= textNodes.length) {
			done && done();
			return;
		}
		const current = textNodes[nodeIndex];
		current.nodeValue += current._fullText[charIndex];
		charIndex++;
		if (charIndex >= current._fullText.length) {
			nodeIndex++;
			charIndex = 0;
		}
		setTimeout(write, speed);
	}
	write();
}

// CHAT SEQUENCE

let chatIndex = 0;
function showNextChat() {
	if (chatIndex >= chatMessages.length) {
		startBtn.textContent = i18n[LANG].start;
		/* startBtn.classList.remove("hidden"); icon.classList.remove("hidden"); */
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

// TIPS FUNCTION

function pushTip(text, done) {
	const tip = document.createElement("div");
	tip.className = "tip";
	tipsEl.appendChild(tip);
	typeWriter(tip, text, 30, done);
}
function startTipsSequence(index = 0) {
	if (index >= tips.length) return;
	pushTip(tips[index], () => {
		setTimeout(() => {
			startTipsSequence(index + 1);
		}, 800);
	});
}

// GAME START

startBtn.addEventListener("click", () => {
	gameOverlay.classList.remove("hidden");
	document.body.classList.add("no-scroll");
	setTimeout(() => {
		scaleGame();
	}, 60);
	startTipsSequence();
	setTimeout(() => {
		openModal();
	}, 13500);
});
