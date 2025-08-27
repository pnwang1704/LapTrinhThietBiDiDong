"use strict";
async function tripleAfter1Sec(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
async function run1() {
    const result = await tripleAfter1Sec(5);
    console.log(result);
}
run1();
