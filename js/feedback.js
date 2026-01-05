const form = document.getElementById("feedbackForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const feedback = {
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  const stored = JSON.parse(localStorage.getItem("readifyFeedback")) || [];
  stored.push(feedback);
  localStorage.setItem("readifyFeedback", JSON.stringify(stored));

  form.reset();
  showToast();
});

function showToast() {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const answer = btn.nextElementSibling;
    answer.style.maxHeight = answer.style.maxHeight
      ? null
      : answer.scrollHeight + "px";
  });
});
