"use strict";
function getRandomNumberAsync() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (num >= 0) {
            resolve(num);
        }
        else {
            reject(new Error("Failed to generate random number"));
        }
    });
}
getRandomNumberAsync()
    .then((number) => {
    console.log("Random number:", number);
})
    .catch((error) => {
    console.error("Error:", error.message);
});
