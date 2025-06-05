function openPopup(popupId) {
	const popup = document.querySelector(popupId);
	if (!popup) return;
	popup.classList.remove("hidden");
	popup.setAttribute("aria-hidden", "false");
	const closeBtn = popup.querySelector("button[id^='closePopup']");
	if (closeBtn) closeBtn.focus();
}

function closePopup(popupId) {
	const popup = document.querySelector(popupId);
	if (!popup) return;
	popup.classList.add("hidden");
	popup.setAttribute("aria-hidden", "true");
	document.activeElement.blur();
}
