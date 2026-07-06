// AsyncAwait.js

function fetchData() {

    return new Promise(function (resolve) {

        setTimeout(function () {

            resolve("Data Received");

        }, 2000);
    });
}

async function displayData() {

    const result = await fetchData();

    console.log(result);
}

displayData();