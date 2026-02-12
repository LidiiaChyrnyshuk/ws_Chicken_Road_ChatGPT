

function getCookie(name) {
	return document.cookie
		.split("; ")
		.find((row) => row.startsWith(name + "="))
		?.split("=")[1];
}

export function checkAccessAndRedirect() {
	const hasCompletedFlow =
		getCookie("weiss_registered") === "1" ||
		localStorage.getItem("weiss_registered") === "1";

	if (!hasCompletedFlow) return;

	const redirectUrl =
		getCookie("weiss_product_url") ||
		localStorage.getItem("weiss_product_url") ||
		window.__REDIRECT_LINK;

	if (!redirectUrl) return;

	window.location.replace(redirectUrl);
}
