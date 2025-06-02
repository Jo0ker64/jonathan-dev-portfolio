const words = ["Jonathan", "Développeur", "Codeur", "Jo0ker", "Passionné", "Geek"];
const el = document.getElementById("matrixTypewriter");

let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

// Set de caractères 
const chaosChars = '&é"#\'{([-|è`_\\ç^à@)]°=}+£$¤%µ*!§~<>?./;:,';

function getRandomChar() {
  return chaosChars[Math.floor(Math.random() * chaosChars.length)];
}

function animateMatrixText() {
  currentWord = words[wordIndex];

  if (!isDeleting) {
    const partial = currentWord.substring(0, letterIndex);
    let display = partial;

    if (letterIndex < currentWord.length) {
      // Ajoute une lettre "en mutation"
      for (let i = 0; i < 3; i++) {
        display += `<span class="opacity-30">${getRandomChar()}</span>`;
      }
    }

    el.innerHTML = display;
    letterIndex++;

    if (letterIndex <= currentWord.length) {
      setTimeout(animateMatrixText, 200);
    } else {
      setTimeout(() => {
        isDeleting = true;
        animateMatrixText();
      }, 2000);
    }
  } else {
    letterIndex--;
    el.textContent = currentWord.substring(0, letterIndex);
    if (letterIndex > 0) {
      setTimeout(animateMatrixText, 50);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(animateMatrixText, 700);
    }
  }
}

animateMatrixText();
