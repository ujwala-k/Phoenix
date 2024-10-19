document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
        return;
    }

    if (username === "Studen1" && password === "Student1Password") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
});
