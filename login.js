document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const mainContent = document.getElementById('main-content');
    const loginButton = document.getElementById('btn-login');
  
    // Fungsi untuk mengecek login
    function checkLogin() {
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if (isLoggedIn) {
        loginForm.style.display = 'none';
        mainContent.style.display = 'block';
      } else {
        loginForm.style.display = 'flex';
        mainContent.style.display = 'none';
      }
    }
  
    // Event listener untuk tombol login
    loginButton.addEventListener('click', function() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Validasi login sederhana
      if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('isLoggedIn', 'true');
        checkLogin();
      } else {
        alert('Username atau password salah!');
      }
    });
  
    // Periksa status login saat halaman dimuat
    checkLogin();
  });
  