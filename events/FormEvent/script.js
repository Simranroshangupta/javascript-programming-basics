const form = document.getElementById("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    document.getElementById("message").textContent =
        "Form Submitted Successfully!";
});