function isPalindrome(str){
    if(typeof str !== 'string' || str.length === 0){
        return null;
    }

    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed === str;
}

// Example 1: Basic palindrome
let str1 = "racecar";
let result1 = isPalindrome(str1);
console.log("Example 1 - Is palindrome:", result1);

// Example 2: Empty string
let str2 = "";  