const button = document.getElementById("loadButton");

button.addEventListener("click", loadUsers);

function loadUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(function (response) {

            return response.json();
        })

        .then(function (users) {

            const userList = document.getElementById("users");

            userList.innerHTML = "";

            users.forEach(function (user) {

                const listItem = document.createElement("li");

                listItem.textContent = user.name;

                userList.appendChild(listItem);
            });
        })

        .catch(function (error) {

            console.log(error);
        });
}