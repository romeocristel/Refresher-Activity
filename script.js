// Dark Mode Toggle
const toggleButton = document.getElementById("toggleThemes");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Simple Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    formMessage.textContent = "Please fill out all required fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    form.reset();
  }
});
