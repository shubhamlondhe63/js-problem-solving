// countVowels.js
// Question: count the number of vowels in a string
// return an object with the vowel as the key and the count as the value
// if the string is empty or invalid, return null
// vowels are a, e, i, o, u
// Example: "Hello, World!" -> {a: 1, e: 1, o: 2}

function countVowels(str){
    if(typeof str !== 'string' || str.length === 0){
        return null;
    }

    let vowels = 'aeiouAEIOU';
    let count = 0;
    let obj = {};

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
            obj[str[i]] = count;
        }
    }

    obj.total = count;
    return obj;
}

// Example 1: Basic string
let str1 = "Hello, World!";
let result1 = countVowels(str1);
console.log("Example 1 - Count of vowels:", result1);

// Example 2: Empty string
let str2 = "";
let result2 = countVowels(str2);
console.log("Example 2 - Count of vowels:", result2);

// Example 3: Invalid input
let str3 = 123;
let result3 = countVowels(str3);
console.log("Example 3 - Count of vowels:", result3);

// Example 4: String with no vowels
let str4 = "bcdfghjklmnpqrstvwxyz";
let result4 = countVowels(str4);