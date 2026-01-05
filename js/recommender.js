const genreSelect = document.getElementById("genreSelect");
const recommendBtn = document.getElementById("recommendBtn");
const result = document.getElementById("recommendationResult");

const books = ReadifyData.books;

function populateGenres() {
  const genres = [...new Set(books.map(book => book.genre))];

  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

function recommendBook() {
  const selectedGenre = genreSelect.value;

  const filteredBooks =
    selectedGenre === "all"
      ? books
      : books.filter(book => book.genre === selectedGenre);

  if (filteredBooks.length === 0) {
    result.innerHTML = "<p>No books found for this genre.</p>";
    return;
  }

  const book = getRandomItem(filteredBooks);

  result.innerHTML = `
    <div class="book-card featured">
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <span class="genre-tag">${book.genre}</span>
      <p class="synopsis">${book.synopsis}</p>
    </div>
  `;
}

recommendBtn.addEventListener("click", recommendBook);
populateGenres();
