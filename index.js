// Form validation using JavaScript
const contactForm = document.getElementById("submitbutton");
contactForm.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  let isError = false;
  // Simple email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.value.trim()) {
    name.classList.add("is-invalid");
    isError = true;
  } else {
    name.classList.remove("is-invalid");
  }

  if (!email.value.trim()) {
    email.classList.add("is-invalid");
    isError = true;
  } else if (!emailRegex.test(email.value.trim())) {
    email.classList.add("is-invalid");
    isError = true;
  } else {
    email.classList.remove("is-invalid");
  }

  if (message.value.length < 8) {
    message.classList.add("is-invalid");
    isError = true;
  } else {
    message.classList.remove("is-invalid");
  }

  // Check if any fields have the 'is-invalid' class, indicating validation errors
  if (isError != true) {
    // Form is valid; you can submit it to the server here
    alert("Form submitted successfully");
    contactForm.reset(); // Optional: Clear the form after submission
  }
});
