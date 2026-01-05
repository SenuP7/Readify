const soundButtons = document.querySelectorAll(".sound-controls button");
const completedSelect = document.getElementById("completedSelect");
const addCompletedBtn = document.getElementById("addCompleted");
const completedList = document.getElementById("completedList");

const books = ReadifyData.books;

let audio = new Audio();
audio.loop = true;

function loadBooks() {
  books.forEach(book => {
    const option = document.createElement("option");
    option.value = book.title;
    option.textContent = book.title;
    completedSelect.appendChild(option);
  });
}

function loadCompleted() {
  const completed =
    JSON.parse(localStorage.getItem("completedBooks")) || [];

  completedList.innerHTML = "";

  completed.forEach(title => {
    const li = document.createElement("li");
    li.textContent = title;
    completedList.appendChild(li);
  });
}

addCompletedBtn.addEventListener("click", () => {
  const selected = completedSelect.value;
  if (!selected) return;

  let completed =
    JSON.parse(localStorage.getItem("completedBooks")) || [];

  if (!completed.includes(selected)) {
    completed.push(selected);
    localStorage.setItem(
      "completedBooks",
      JSON.stringify(completed)
    );
  }

  loadCompleted();
});

soundButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    soundButtons.forEach(b => b.classList.remove("active-sound"));

    const sound = btn.dataset.sound;

    if (sound === "off") {
      audio.pause();
      audio.src = "";
      return;
    }

    btn.classList.add("active-sound");
    audio.src = `items/sounds/${sound}.mp3`;
    audio.play();
  });
});


loadBooks();
loadCompleted();
