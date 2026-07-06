// Promises.js

const promise = new Promise(function (resolve, reject) {

    const success = true;

    if (success) {

        resolve("Promise Resolved");

    } else {

        reject("Promise Rejected");
    }
});

promise
    .then(function (result) {

        console.log(result);

    })
    .catch(function (error) {

        console.log(error);
    });