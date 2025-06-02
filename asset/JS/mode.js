const toggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) {
    // On affiche SOLEIL pour pouvoir revenir à clair
    sunIcon.classList.remove("opacity-0");
    moonIcon.classList.add("opacity-0");
  } else {
    // On affiche LUNE pour pouvoir aller vers sombre
    sunIcon.classList.add("opacity-0");
    moonIcon.classList.remove("opacity-0");
  }
});
