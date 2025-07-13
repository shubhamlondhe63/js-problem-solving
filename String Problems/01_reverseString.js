function reverseString(str){
    if(typeof str !== 'string' || str.length === 0){
        return null;
    }

    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

// Example 1: Basic string
let str1 = "Hello, World!";
let result1 = reverseString(str1);
console.log("Example 1 - Reversed string:", result1);

// Example 2: Empty string
let str2 = "";
let result2 = reverseString(str2);
console.log("Example 2 - Reversed string:", result2);

// Example 3: Invalid input
let str3 = 123;
let result3 = reverseString(str3);
console.log("Example 3 - Reversed string:", result3);
