// themeToggle.js

// Seleciona o botão de alternar tema
const themeToggleBtn = document.getElementById("themeToggle");

// Verifica o tema atual e aplica o tema ao carregar a página
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Alterna entre os temas claro e escuro
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // Salva o tema no localStorage
}

// Adiciona um evento de clique ao botão de alternar tema
themeToggleBtn.addEventListener("click", toggleTheme);

// Aplica o tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", applySavedTheme);
