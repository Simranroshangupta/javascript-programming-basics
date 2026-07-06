const input = document.getElementById("name");

input.addEventListener("input", function () {

    document.getElementById("output").textContent =
        "Hello, " + input.value;
});