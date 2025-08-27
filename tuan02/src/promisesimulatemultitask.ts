function simulateMultiTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time} ms`);
        }, time);
    });
}

Promise.all([
    simulateMultiTask(1000),
    simulateMultiTask(1500),
    simulateMultiTask(2000)
]).then((results) => {
    console.log("All tasks  completed:");
    results.forEach((result, index) => {
        console.log(`Task ${index + 1}: ${result}`);
    });
});