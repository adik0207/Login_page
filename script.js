const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const departmentSelect = document.getElementById('department');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const department = departmentSelect.value;

    if (username === '' || password === '' || department === '') {
        alert('Please enter all fields');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }

    // Simulate successful login by storing user data in local storage
    localStorage.setItem('user', JSON.stringify({
        username,
        password,
        department
    }));

    window.location.href = 'userdetails.html';
});
