"use strict";
function simulateTask2(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task finished after ${ms}ms`);
        }, ms);
    });
}
async function runTask() {
    try {
        const result = await simulateTask2(2000);
        console.log(result);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
runTask();
