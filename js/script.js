function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send data to the server for validation and storage
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}