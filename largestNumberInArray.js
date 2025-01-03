
// Find the largest element in an array

let numbers  = [20, 19, 3, 4, 34, 524, 59, 20, 30, 34, 23, 53];

let maxNumber = numbers[0];

for( let i=1; i < numbers.length; i++){
    if(maxNumber < numbers[i]){
        maxNumber = numbers[i];
    
    }
}

console.log("The maximum number in the array is: " + maxNumber);

