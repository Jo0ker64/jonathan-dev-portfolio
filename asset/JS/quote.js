function adjustCenterText() {
    const phrase = document.querySelector("#centralText");
    if (!phrase) return;

    const width = window.innerWidth;

    if (width > 1400) {
        phrase.style.fontSize = "2.2rem";
        phrase.style.display = "block";
    } else if (width > 1300) {
        phrase.style.fontSize = "2rem";
        phrase.style.display = "block";
    } else if (width > 1200) {
        phrase.style.fontSize = "1.8rem";
        phrase.style.display = "block";
    } else if (width > 1100) {
        phrase.style.fontSize = "1.5rem";
        phrase.style.display = "block";
    } else if (width > 1000) {
        phrase.style.fontSize = "1.2rem";
        phrase.style.display = "block";
    } else if (width > 900) {
        phrase.style.fontSize = "1rem";
        phrase.style.display = "block";
    } else if (width > 800) {
        phrase.style.fontSize = "0.7rem";
        phrase.style.display = "block";
    } else if (width > 700) {
        phrase.style.fontSize = "0.6rem";
        phrase.style.display = "block";
    } else if (width > 600) {
        phrase.style.fontSize = "0.5rem";
        phrase.style.display = "block";
    } else if (width > 500) {
        phrase.style.fontSize = "0.4rem";
        phrase.style.display = "block";
    } else {
        phrase.style.display = "none";
    }
}

window.addEventListener("resize", adjustCenterText);
window.addEventListener("DOMContentLoaded", adjustCenterText);