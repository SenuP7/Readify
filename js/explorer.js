const bookGrid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("bookModal");
const closeModal = document.getElementById("closeModal");
const books = ReadifyData.books;
const genreFilter = document.getElementById("genreFilter");


function renderBooks(bookList) {
  bookGrid.innerHTML = "";

  bookList.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title} cover">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <span class="genre-tag">${book.genre}</span>
    `;

    card.addEventListener("click", () => openModal(book));
    bookGrid.appendChild(card);
  });
}

function openModal(book) {
  document.getElementById("modalTitle").textContent = book.title;
  document.getElementById("modalAuthor").innerHTML = `<strong>by ${book.author}</strong>`;
  document.getElementById("modalGenre").textContent = `: ${book.genre}`;
  document.getElementById("modalSynopsis").textContent = book.synopsis;

  const image = document.getElementById("modalImage");
  image.src = book.image;
  image.alt = book.title;

  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});


function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  const filteredBooks = books.filter(book => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchValue) ||
      book.author.toLowerCase().includes(searchValue);

    const matchesGenre =
      selectedGenre === "all" ||
      book.genre.toLowerCase() === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  renderBooks(filteredBooks);
}

function populateGenres() {
  const genres = [...new Set(books.map(book => book.genre))];

  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre.toLowerCase();
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

searchInput.addEventListener("input", applyFilters);
genreFilter.addEventListener("change", applyFilters);


populateGenres();
renderBooks(books);
