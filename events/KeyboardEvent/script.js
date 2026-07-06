const keyboard = document.getElementById("keyboard");

keyboard.addEventListener("keydown", function (event) {

    document.getElementById("result").textContent =
        "Key Pressed : " + event.key;
});