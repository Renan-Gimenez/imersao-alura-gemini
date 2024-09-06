document.documentElement.setAttribute("data-theme", "dark");

const root = document.querySelector(".characters-list");
const themeToggle = document.getElementById("themeToggle");
const searchInput = document.querySelector(".search-bar input");
const clearInputButton = document.querySelector(".clear-input-buttom");

let currentPage = 1;

// renderCharacters("", currentPage);

const initialFetch = async () => {
  const filteredCharacters = await fetchCharacters("", currentPage);
  renderCharacters(filteredCharacters);
};

initialFetch();

clearInputButton.addEventListener("click", async () => {
  searchInput.value = "";
  currentPage = 1;
  const filteredCharacters = await fetchCharacters("", currentPage);
  renderCharacters(filteredCharacters);
});

searchInput.addEventListener("input", async () => {
  currentPage = 1;
  const filterText = searchInput.value.toLowerCase();
  console.log(filterText, currentPage);
  const filteredCharacters = await fetchCharacters(filterText, currentPage);

  console.log(filteredCharacters);

  renderCharacters(filteredCharacters);
});

const renderCharacters = (filteredCharacters) => {
  root.innerHTML = "";

  if (!filteredCharacters) return;

  filteredCharacters.map((item) => {
    const characterHTML = `
      <div class="character-div">
          <div class="character-info">
            <h2 class="character-name">${item.name}</h2>
            <p class="character-label">
              Species: <span class="character-value">${item.species}</span>
            </p>
            <p class="character-label">
              Status: <span class="character-value">${item.status}</span>
            </p>

            <div class="separator"></div>

            <p class="character-label">
              Origin: <br /><span class="character-value">${item.origin}</span>
            </p>
            <p class="character-label">
              Last known location: <br />
              <span class="character-value">${item.lastKnownLocation}</span>
            </p>
          </div>
          <img
            src="${item.image}"
            class="character-image"
          />
        </div>
    `;
    root.innerHTML += characterHTML;
  });
};

themeToggle.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");

  if (theme === "dark") {
    // alert("Light");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    // alert("Dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});
