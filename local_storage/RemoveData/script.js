const button = document.getElementById("removeButton");

button.addEventListener("click", function () {

    localStorage.removeItem("username");

    alert("Data Removed Successfully!");
});