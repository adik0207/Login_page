const userDetailsElement = document.getElementById('user-details');

// Retrieve user data from local storage
const userData = JSON.parse(localStorage.getItem('user'));

// Populate the user details element
const userDetailsHTML = `
    <p>Username: ${userData.username}</p>
    <p>Password: ${userData.password}</p>
    <p>Department: ${userData.department}</p>
`;

userDetailsElement.innerHTML = userDetailsHTML;
