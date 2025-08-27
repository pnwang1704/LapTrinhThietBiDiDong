"use strict";
function rejectWithErrorAsync() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
rejectWithErrorAsync().catch((err) => {
    console.error(err.message);
});
