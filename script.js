const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const roleSelect = document.getElementById('role');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const role = roleSelect.value;

    if (username === '' || password === '' || role === '') {
        alert('Please enter all fields');
        return;
    }

    // Submit the form data to the server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            role
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the user's dashboard
            window.location.href = '/dashboard';
        } else {
            alert('Invalid login credentials');
        }
    });
});
