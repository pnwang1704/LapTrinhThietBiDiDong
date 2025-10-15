"use strict";
// Hàm trả về Promise<string>
function helloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
// Sử dụng async/await
async function run() {
    const message = await helloAsync();
    console.log(message);
}
run();
