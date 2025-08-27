const helloAsync = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});

// Example usage:
helloAsync.then((message) => {
    console.log(message); // Output after 2 seconds: Hello Async
});