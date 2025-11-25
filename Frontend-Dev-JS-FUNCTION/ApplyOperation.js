function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));  // applying callback to each number
    }
    return result;
}

// Callback functions
const double = (n) => n * 2;
const square = (n) => n * n;

const nums = [1, 2, 3, 4];

console.log("Double:", applyOperation(nums, double));
console.log("Square:", applyOperation(nums, square));



