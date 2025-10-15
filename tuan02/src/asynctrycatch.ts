function simulateTask3(ms: number, shouldFail = false): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Task failed!");
      } else {
        resolve(`Task finished after ${ms}ms`);
      }
    }, ms);
  });
}

async function runTask1() {
  try {
    const result = await simulateTask3(2000, true);
    console.log(result);
  } catch (error) {
    console.error("Error caught in async/await:", error);
  } finally {
    console.log("Done");
  }
}

runTask1();
