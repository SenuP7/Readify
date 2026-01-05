const bookSelect = document.getElementById("bookSelect");
const statusSelect = document.getElementById("statusSelect");
const saveBtn = document.getElementById("saveProgress");
const progressList = document.getElementById("progressList");

const books = ReadifyData.books;

function loadBooks() {
  books.forEach(book => {
    const option = document.createElement("option");
    option.value = book.id;
    option.textContent = book.title;
    bookSelect.appendChild(option);
  });
}

function loadProgress() {
  progressList.innerHTML = "";

  const progressData =
    JSON.parse(localStorage.getItem("readingProgress")) || {};

  Object.keys(progressData).forEach(id => {
    const book = books.find(b => b.id == id);

    if (!book) return;

    const li = document.createElement("li");
    li.textContent = `${book.title} – ${progressData[id]}`;
    progressList.appendChild(li);
  });
}

saveBtn.addEventListener("click", () => {
  const bookId = bookSelect.value;
  const status = statusSelect.value;

  if (!bookId) return;

  const progressData =
    JSON.parse(localStorage.getItem("readingProgress")) || {};

  progressData[bookId] = status;
  localStorage.setItem(
    "readingProgress",
    JSON.stringify(progressData)
  );

  loadProgress();
});

loadBooks();
loadProgress();

