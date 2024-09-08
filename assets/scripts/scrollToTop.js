// scrollToTop.js

// Seleciona o botão de rolar para o topo
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Função para exibir ou ocultar o botão baseado na rolagem da página
function handleScroll() {
  if (window.scrollY > 1000) {
    // Exibe o botão se o usuário rolar mais de 300px
    scrollToTopBtn.style.right = "64px";
  } else {
    scrollToTopBtn.style.right = "-64px";
    // scrollToTopBtn.style.display = "none";
  }
}

// Função para rolar de volta ao topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Adiciona um evento para a rolagem da página
window.addEventListener("scroll", handleScroll);

// Adiciona um evento para o clique do botão de rolar para o topo
scrollToTopBtn.addEventListener("click", scrollToTop);
