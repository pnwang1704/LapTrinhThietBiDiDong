function simulateMultiTask1(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time} ms`);
        }, time);
    });
}

Promise.race([
    simulateMultiTask1(1000),
    simulateMultiTask1(1500),
    simulateMultiTask1(2000)
]).then((result) => {
    console.log("First completed task:", result);
});