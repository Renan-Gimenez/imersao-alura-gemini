const notFound = document.querySelector(".character-not-found");
const paginationControl = document.querySelector(".pagination-control");

const fetchCharacters = async (inputValue, currentPage) => {
  try {
    const URL =
      inputValue.trim() === ""
        ? `https://rickandmortyapi.com/api/character?page=${currentPage}`
        : `https://rickandmortyapi.com/api/character/?name=${inputValue}&page=${currentPage}`;

    const result = await fetch(URL);
    const data = await result.json();

    totalPages = data.info.pages;

    const rawCharacters = data.results;

    notFound.style.display = "none";
    paginationControl.style.display = "flex";

    const filteredCharacters = rawCharacters.map((item) => {
      return {
        name: item.name,
        status: item.status,
        species: item.species,
        image: item.image,
        origin: item.origin.name,
        lastKnownLocation: item.location.name,
      };
    });

    updatePageCount();

    console.log(filteredCharacters);
    return filteredCharacters;
  } catch (error) {
    notFound.style.display = "flex";
    paginationControl.style.display = "none";

    console.log("Erro ao filtrar usuário");
  }
};
