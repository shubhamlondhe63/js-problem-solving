// Question: find duplicate characters in a string
// return an array of duplicate characters
// if the string is empty or invalid, return null
// Example: "hello" -> ["l"]

// ****************************************************************************************************************

// Solution 1:
// Using a hash table to count the occurrences of each character
function findDuplicateChars(str) {
	if (typeof str !== "string" || str.length === 0) {
		return null;
	}

	str = str.toLowerCase();

	let duplicateChars = [];
	let charCount = {};

	for (let char of str) {
		charCount[char] = (charCount[char] || 0) + 1;
	}

	for (let char in charCount) {
		if (charCount[char] > 1) {
			duplicateChars.push(char);
		}
	}

	return duplicateChars;
}

// Examples
console.log(findDuplicateChars("hello")); // ["l"]
console.log(findDuplicateChars("")); // null
console.log(findDuplicateChars(123)); // null
console.log(findDuplicateChars("abcdefg")); // []
console.log(findDuplicateChars("aabbcc")); // ["a", "b", "c"]
console.log(findDuplicateChars("aAaBbBcCc")); // ["a", "b", "c"]
console.log(findDuplicateChars("hello world")); // ["l"]

// ****************************************************************************************************************

// Solution 2:
// Easy way to find duplicate characters using indexOf and lastIndexOf
function findDuplicateChars2(str) {
	if (typeof str !== "string" || str.length === 0) {
		return null;
	}

	let duplicateChars = [];
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
			duplicateChars.push(str[i]);
		}
	}

	return duplicateChars;
}

// Examples
console.log(findDuplicateChars2("hello")); // ["l"]
console.log(findDuplicateChars2("")); // null
console.log(findDuplicateChars2(123)); // null
console.log(findDuplicateChars2("abcdefg")); // []
console.log(findDuplicateChars2("aabbcc")); // ["a", "b", "c"]
console.log(findDuplicateChars2("aAaBbBcCc")); // ["a", "b", "c"]
console.log(findDuplicateChars2("hello world")); // ["l"]
