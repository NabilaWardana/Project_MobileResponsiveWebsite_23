// mendapatkan elemen-elemen pada form registrasi
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone-number');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');

// membuat regular expression untuk validasi format email dan phone number
const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^\d{10,}$/;

// mendapatkan data user yang sudah tersimpan di local storage (jika ada)
let users = JSON.parse(localStorage.getItem('users')) || [];

// fungsi untuk melakukan validasi saat tombol "Submit" ditekan
function regist() {
  // validasi setiap input dan menampilkan pesan error jika input tidak valid
  if (nameInput.value.trim() === '') {
      nameError.innerHTML = 'Please enter your name';
      nameInput.focus();
      return;
  } else {
      nameError.innerHTML = '';
  }

  if (!emailRegex.test(emailInput.value)) {
      emailError.innerHTML = 'Please enter a valid email address';
      emailInput.focus();
      return;
  } else {
      emailError.innerHTML = '';
  }

  if (!phoneRegex.test(phoneInput.value)) {
      phoneError.innerHTML = 'Please enter a valid phone number';
      phoneInput.focus();
      return;
  } else {
      phoneError.innerHTML = '';
  }

  if (passwordInput.value.trim() === '') {
      passwordError.innerHTML = 'Please enter a password';
      passwordInput.focus();
      return;
  } else {
      passwordError.innerHTML = '';
  }
  
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passwordInput.value
  };
  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));

  window.location.href = "login.html";
}

//show password
const showPasswordCheckbox = document.getElementById('show-password');

showPasswordCheckbox.addEventListener('change', function() {
  if (this.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

// Mendapatkan elemen-elemen pada form login
const emailLoginInput = document.getElementById('email-login');
const passwordLoginInput = document.getElementById('password-login');
const loginError = document.getElementById('login-error');

function login() {

  // Mengambil nilai input email dan password
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Validasi input email dan password
  var emailError = document.getElementById("login-email-error");
  var passwordError = document.getElementById("login-password-error");
  var isValid = true;
  
  // Validasi input email
  if (email === "") {
    emailError.innerHTML = "Please enter your email";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.innerHTML = "Please enter a valid email";
    isValid = false;
  } else {
    emailError.innerHTML = "";
  }
  
  if (password === "") {
    passwordError.innerHTML = "Please enter your password";
    isValid = false;
  } else {
    passwordError.innerHTML = "";
  }
  
  if (isValid) {
  } else {
    document.getElementById("login-error").innerHTML = "Please fill in all required fields";
  }

  // Mengambil data user dari local storage
  const storedUsers = JSON.parse(localStorage.getItem('users'));

  // Memvalidasi email dan password yang diinputkan
  const foundUser = storedUsers.find(user => user.email === emailInput.value && user.password === passwordInput.value);
  if (foundUser) {
    window.location.href = "index.html";
  } else {
    loginError.innerHTML = 'Incorrect email or password';
    return;
  }
}

// JS BLOG-PAGE
// back button
document.querySelector('.tombol-kembali').addEventListener('click', function() {
  window.history.back();
});




