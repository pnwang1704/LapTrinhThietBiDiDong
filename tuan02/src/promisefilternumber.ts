function filterEvenNumbers(arr: number[]): Promise<number[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr.length === 0) {
        reject("Array is empty!");
      } else {
        const evenNumbers = arr.filter((num) => num % 2 === 0);
        resolve(evenNumbers);
      }
    }, 1000); // 1 giây
  });
}

// Ví dụ chạy thành công
filterEvenNumbers([1, 2, 3, 4, 5, 6])
  .then((result) => {
    console.log("Even numbers:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Done");
  });

// Ví dụ chạy thất bại
filterEvenNumbers([])
  .then((result) => {
    console.log("Even numbers:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Done");
  });
