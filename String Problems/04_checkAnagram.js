// Question: check if two strings are anagrams of each other
// return true if they are, false otherwise
// if the strings are empty or invalid, return null
// Example: "listen" and "silent" are anagrams of each other

// Solution 1:
// Using split and sort
function checkAnagram(str1, str2) {
	if (typeof str1 !== "string" || typeof str2 !== "string") {
		return null;
	}

	if (str1.length !== str2.length) {
		return false;
	}

	let sortedStr1 = str1.split("").sort().join("");
	let sortedStr2 = str2.split("").sort().join("");

	return sortedStr1 === sortedStr2;
}

// Examples
console.log(checkAnagram("listen", "silent")); // true
console.log(checkAnagram("", "silent")); // false
console.log(checkAnagram(123, "silent")); // null
console.log(checkAnagram("hello", "world")); // false
console.log(checkAnagram("Listen", "Silent")); // true
console.log(checkAnagram("Hello World", "World Hello")); // true

// ****************************************************************************************************************

// Solution 2:
// Using a hash table to count the occurrences of each character and then compare the counts of each character
function checkAnagram2(str1, str2) {
	if (typeof str1 !== "string" || typeof str2 !== "string") {
		return null;
	}

	if (str1.length !== str2.length) {
		return false;
	}

	let charCount1 = {};
	let charCount2 = {};

	// count the occurrences of each character in both strings
	for (let i = 0; i < str1.length; i++) {
		charCount1[str1[i]] = (charCount1[str1[i]] || 0) + 1;
		charCount2[str2[i]] = (charCount2[str2[i]] || 0) + 1;
	}

	// compare the counts of each character
	for (let char in charCount1) {
		if (charCount1[char] !== charCount2[char]) {
			// if the counts of any character are different, return false
			return false;
		}
	}

	return true;
}
