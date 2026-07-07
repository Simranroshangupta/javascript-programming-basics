const name = localStorage.getItem("username");

document.getElementById("message").textContent =
    "Welcome, " + name;