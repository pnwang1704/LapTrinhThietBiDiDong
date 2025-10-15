function rejectWithErrorAsync(): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}

rejectWithErrorAsync().catch((err) => {
    console.error(err.message);
});