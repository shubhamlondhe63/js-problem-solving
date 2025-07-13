// Question: capitalize the first letter of each word in a string
// return the capitalized string
// if the string is empty or invalid, return null
// Example: "hello world" -> "Hello World"

// ****************************************************************************************************************

// Solution 1:
// Using split and map
function capitalizeWords(str) {
	if (typeof str !== "string" || str.length === 0) {
		return null;
	}

	let words = str.split(" ");
	let capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	return capitalizedWords.join(" ");
}

// Examples
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("")); //
console.log(capitalizeWords(123)); // null
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("hello world")); // "Hello World"

// ****************************************************************************************************************

// Solution 2:
// Using a for loop and checking if the previous character is a space
function capitalizeWords2(str) {
	if (typeof str !== "string" || str.length === 0) {
		return null;
	}

	let result = "";
	for (let i = 0; i < str.length; i++) {
		if (i === 0 || str[i - 1] === " ") {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	return result;
}

// Examples
console.log(capitalizeWords2("hello world")); // "Hello World"
console.log(capitalizeWords2("")); //
console.log(capitalizeWords2(123)); // null
console.log(capitalizeWords2("hello world")); // "Hello World"
console.log(capitalizeWords2("hello world")); // "Hello World"
