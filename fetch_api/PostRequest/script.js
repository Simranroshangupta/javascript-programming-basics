const button = document.getElementById("sendButton");

button.addEventListener("click", sendData);

function sendData() {

    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            title: "JavaScript",

            body: "Fetch API Example",

            userId: 1
        })
    })

        .then(function (response) {

            return response.json();
        })

        .then(function (data) {

            console.log(data);
        })

        .catch(function (error) {

            console.log(error);
        });
}