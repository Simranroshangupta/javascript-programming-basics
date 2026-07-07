const button = document.getElementById("saveButton");

button.addEventListener("click", function () {

    const name = document.getElementById("name").value;

    localStorage.setItem("username", name);

    alert("Data Stored Successfully!");
});