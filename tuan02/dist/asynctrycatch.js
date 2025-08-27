"use strict";
// Hàm giả lập 1 tác vụ async có thể thất bại
function simulateTask3(ms, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Task failed!");
            }
            else {
                resolve(`Task finished after ${ms}ms`);
            }
        }, ms);
    });
}
// Hàm async với try/catch
async function runTask1() {
    try {
        const result = await simulateTask3(2000, true); // true => sẽ reject
        console.log(result);
    }
    catch (error) {
        console.error("Error caught in async/await:", error);
    }
    finally {
        console.log("Done");
    }
}
// Gọi hàm
runTask1();
