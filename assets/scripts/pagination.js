const firstPageButtom = document.querySelector(".first-page-buttom");
const prevPageButtom = document.querySelector(".prev-page-buttom");
const nextPageButtom = document.querySelector(".next-page-buttom");
const lastPageButtom = document.querySelector(".last-page-buttom");
const pageCount = document.querySelector(".page-count");

const scrollToTopButton = document.querySelector(".scroll-to-top");

let totalPages;

lastPageButtom.disabled = currentPage === totalPages;

const updatePageCount = () => {
  pageCount.textContent = `${currentPage} de ${totalPages}`;
};

const loadPaginatedPage = async (currentPage) => {
  window.scrollTo(0, 0);

  const filterText = searchInput.value.toLowerCase();
  const filteredCharacters = await fetchCharacters(filterText, currentPage);

  console.log(filteredCharacters);
  updateButtonColor();

  renderCharacters(filteredCharacters);
};

firstPageButtom.addEventListener("click", async () => {
  if (currentPage <= 1) {
    return;
  }

  currentPage = 1;

  loadPaginatedPage(currentPage);
});

prevPageButtom.addEventListener("click", async () => {
  if (currentPage <= 1) {
    return;
  }

  currentPage -= 1;

  loadPaginatedPage(currentPage);
});

nextPageButtom.addEventListener("click", async () => {
  if (currentPage === totalPages) {
    return;
  }

  currentPage += 1;

  loadPaginatedPage(currentPage);
});

lastPageButtom.addEventListener("click", async () => {
  if (currentPage === totalPages) {
    return;
  }

  currentPage = totalPages;

  loadPaginatedPage(currentPage);
});

window.onscroll = () => {
  if (window.scrollY > 1000) {
    // scrollToTopButton.classList.add("show");
    scrollToTopButton.style.right = "64px";
  } else {
    // scrollToTopButton.classList.remove("show");
    scrollToTopButton.style.right = "-64px";
  }
};

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const updateButtonColor = () => {
  if (currentPage === 1) {
    firstPageButtom.style.backgroundColor = "var(--color-secondary)";
    firstPageButtom.style.opacity = "0.5";
    firstPageButtom.style.cursor = "not-allowed";
    prevPageButtom.style.backgroundColor = "var(--color-secondary)";
    prevPageButtom.style.opacity = "0.5";
    prevPageButtom.style.cursor = "not-allowed";
  } else {
    firstPageButtom.style.backgroundColor = "var(--color-primary)";
    firstPageButtom.style.opacity = "1";
    firstPageButtom.style.cursor = "pointer";
    prevPageButtom.style.backgroundColor = "var(--color-primary)";
    prevPageButtom.style.opacity = "1";
    prevPageButtom.style.cursor = "pointer";
  }

  if (currentPage === totalPages) {
    lastPageButtom.style.backgroundColor = "var(--color-secondary)";
    lastPageButtom.style.opacity = "0.5";
    lastPageButtom.style.cursor = "not-allowed";
    nextPageButtom.style.backgroundColor = "var(--color-secondary)";
    nextPageButtom.style.opacity = "0.5";
    nextPageButtom.style.cursor = "not-allowed";
  } else {
    lastPageButtom.style.backgroundColor = "var(--color-primary)";
    lastPageButtom.style.opacity = "1";
    lastPageButtom.style.cursor = "pointer";
    nextPageButtom.style.backgroundColor = "var(--color-primary)";
    nextPageButtom.style.opacity = "1";
    nextPageButtom.style.cursor = "pointer";
  }
};

updateButtonColor();
