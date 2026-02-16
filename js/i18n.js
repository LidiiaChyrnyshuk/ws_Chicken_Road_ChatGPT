const LANG = navigator.language === "fr-CA" ? "fr" : "en";

const i18n = {
	en: {
		chat: [
			"Hi! I’m an AI assistant designed to analyze online games and player behavior in real time.",
			"I help players understand game mechanics, betting patterns, and moments when the odds are statistically more favorable.",
			"If you want to see how this works in practice - start a quick demo below.",
		],
		start: "Start",
		tips: [
			"Now, I’m tracking your playing and volatility patterns in Chicken Road 2 - try it above.",
			"This crash game is highly momentum-based. Short sessions with controlled bets perform better here.",
			"Tip: Medium stakes after 2-3 low outcomes usually give the best risk-to-reward ratio.",
			"If you increase the bet slightly on the next round, the payout curve becomes more favorable…",
		],
		register: "Gain access",
		modalTitle: "Your potential profit during this session",
		modalTitleAccent: "could have reached",
		modalText: "If you were playing with full access",
		modalTextSmall: "to the",
		modalTextWeight: "ChatGPT Gaming platform",
		footerTitle: "Chat GPT Gaming can make mistakes.",
		footerText: "Check important info. See Cookie Preferences.",
	},
	fr: {
		chat: [
			"Salut! Je suis un assistant IA conçu pour analyser les jeux en ligne et le comportement des joueurs en temps réel.",
			"J’aide les joueurs à comprendre les mécaniques de jeu, les schémas de mise et les moments où les probabilités sont statistiquement plus favorables.",
			"Si tu veux voir comment ça fonctionne en pratique - lance une démo rapide ci-dessous.",
		],
		start: "Commencer",
		tips: [
			"Maintenant, je suis en train de suivre tes habitudes de jeu et les schémas de volatilité dans Chicken Road 2 - essaie-le ci-dessus.",
			"Ce jeu crash repose fortement sur le momentum. Les sessions courtes avec des mises contrôlées donnent de meilleurs résultats ici.",
			"Astuce: Des mises moyennes après 2-3 résultats bas offrent généralement le meilleur rapport risque-récompense.",
			"Si tu augmentes légèrement la mise au prochain tour, la courbe de gains devient plus favorable…",
		],

		register: "Obtenir l'accès",
		modalTitle: "Ton profit potentiel durant cette session",
		modalTitleAccent: "aurait pu atteindre",
		modalText: "si tu jouais avec un accès complet à la ",
		modalTextSmall: "plateforme",
		modalTextWeight: "ChatGPT Gaming",
		footerTitle: "ChatGPT Gaming peut se tromper.",
		footerText: "Vérifie les informations importantes. Voir les Préférences de cookies.",
	},
};

export { LANG, i18n };
