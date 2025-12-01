document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      let usernameError = "Your username has to be at least 3 characters";
      messages.push(usernameError);
    }
    if (!email.includes("@") || !email.includes(".")) {
      let emailError = "Please enter a valid email address";
      isValid = false;
      messages.push(emailError);
    }

    if (password.length < 8) {
      let passwordError = "Password should be at least 8 characters";
      isValid = false;
      messages.push(passwordError);
    }

    feedbackDiv.style.display = "block";
    if (isValid === true) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      let errorMessages = messages.join("<br>");
      feedbackDiv.innerHTML = errorMessages;
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
