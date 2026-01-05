
const quotes = ReadifyData.quotes;
let quoteIndex = 0;

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

setInterval(() => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteText.textContent = `“${quotes[quoteIndex].text}”`;
  quoteAuthor.textContent = `– ${quotes[quoteIndex].author}`;
}, 5000);


const authors = ReadifyData.authors;
const todayIndex = new Date().getDate() % authors.length;
const todayAuthor = authors[todayIndex];

document.getElementById("authorName").textContent = todayAuthor.name;
document.getElementById("authorBio").textContent = todayAuthor.bio;


const form = document.getElementById("newsletterForm");
const msg = document.getElementById("newsletterMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  localStorage.setItem("newsletterEmail", email);
  msg.textContent = "Subscribed successfully!";
  form.reset();
});


const books = ReadifyData.books;

function getFeaturedBook() {
  return books.find(book => book.genre === "Classic") || books[0];
}

const featuredBook = getFeaturedBook();

document.getElementById("featuredTitle").textContent = featuredBook.title;
document.getElementById("featuredAuthor").textContent = `by ${featuredBook.author}`;
document.getElementById("featuredDesc").textContent = featuredBook.synopsis;
document.getElementById("featuredGenre").textContent = featuredBook.genre;

const featuredImage = document.getElementById("featuredImage");
featuredImage.src = featuredBook.image;
featuredImage.alt = featuredBook.title;