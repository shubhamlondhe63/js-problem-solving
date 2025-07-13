
// Find the largest element in an array

/**
 * Finds the largest number in an array
 * @param {number[]} arr - The input array of numbers
 * @returns {number|null} - The largest number or null if array is empty/invalid
 */
function findLargestNumber(arr) {
    // Check if input is valid
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    
    // Check if all elements are numbers
    if (!arr.every(num => typeof num === 'number' && !isNaN(num))) {
        return null;
    }
    
    let maxNumber = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (maxNumber < arr[i]) {
            maxNumber = arr[i];
        }
    }
    
    return maxNumber;
}

function findSmallestNumber(arr){
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    if (!arr.every(num => typeof num === 'number' && !isNaN(num))) {
        return null;
    }

    let maxNumber = arr[0];

    arr.forEach(num => {
        if (num < maxNumber) {
            maxNumber = num;
        }
    });

    return maxNumber;

}

// Example 1: Basic array
let numbers = [20, 19, 3, 4, 34, 524, 59, 20, 30, 34, 23, 53];
let result1 = findLargestNumber(numbers);
console.log("Example 1 - The maximum number in the array is:", result1);

// Example 2: Array with negative numbers
let negativeNumbers = [-5, -10, -2, -100, -1];
let result2 = findLargestNumber(negativeNumbers);
console.log("Example 2 - The maximum number in the array is:", result2);

// Example 3: Array with decimal numbers
let decimalNumbers = [3.14, 2.718, 1.618, 2.236, 1.414];
let result3 = findLargestNumber(decimalNumbers);
console.log("Example 3 - The maximum number in the array is:", result3);

// Example 4: Single element array
let singleElement = [42];
let result4 = findLargestNumber(singleElement);
console.log("Example 4 - The maximum number in the array is:", result4);

// Example 5: Empty array (error handling)
let emptyArray = [];
let result5 = findLargestNumber(emptyArray);
console.log("Example 5 - Empty array result:", result5);

// Example 6: Invalid input (error handling)
let invalidInput = "not an array";
let result6 = findLargestNumber(invalidInput);
console.log("Example 6 - Invalid input result:", result6);

// Example 7: Array with mixed data types (error handling)
let mixedArray = [1, 2, "three", 4, 5];
let result7 = findLargestNumber(mixedArray);
console.log("Example 7 - Mixed array result:", result7);

