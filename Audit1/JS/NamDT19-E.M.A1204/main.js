const form = document.getElementById("registration-form");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;

  // Validate username field
  if (usernameInput.value === "") {
    usernameError.innerText = "Username is required";
    valid = false;
  } else {
    usernameError.innerText = "";
  }

  // Validate password field
  if (passwordInput.value === "") {
    passwordError.innerText = "Password is required";
    valid = false;
  } else {
    passwordError.innerText = "";
  }

  // Validate confirm password field
  if (confirmPasswordInput.value === "") {
    confirmPasswordError.innerText = "Confirm password is required";
    valid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.innerText = "Passwords do not match";
    valid = false;
  } else {
    confirmPasswordError.innerText = "";
  }

  if (valid) {
    // Display success message
    const message = document.getElementById("message");
    message.innerText = "User registered successfully!";
  }
});

// Display error messages on input change
usernameInput.addEventListener("input", function () {
  if (usernameInput.value === "") {
    usernameError.innerText = "Username is required";
  } else {
    usernameError.innerText = "";
  }
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.value === "") {
    passwordError.innerText = "Password is required";
  } else {
    passwordError.innerText = "";
  }
});

confirmPasswordInput.addEventListener("input", function () {
  if (confirmPasswordInput.value === "") {
    confirmPasswordError.innerText = "Confirm password is required";
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.innerText = "Passwords do not match";
  } else {
    confirmPasswordError.innerText = "";
  }
});
