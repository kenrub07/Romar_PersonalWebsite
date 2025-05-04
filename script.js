document.getElementById('password-toggle').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.classList.remove('bi-eye-slash');
    eyeIcon.classList.add('bi-eye');
  } else {
    passwordField.type = 'password';
    eyeIcon.classList.remove('bi-eye');
    eyeIcon.classList.add('bi-eye-slash');
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "romar" && password === "romarhaha") {
      document.getElementById('error-message').classList.add('d-none'); 
      window.location.href = "home.html";
  } else {
      document.getElementById('error-message').classList.remove('d-none'); // Show error message
  }
});