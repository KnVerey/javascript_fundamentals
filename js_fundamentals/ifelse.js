// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(a, b) {
	if ( a > b ) {
		return a;
	} else if (b > a) {
		return b;
	} else {
		return "neither";
	}
}

var x = 39;
var y = 39;

document.write("The greater number of " + x + " and " + y + " is <strong>" + greaterNum(x,y) + "</strong>.</p>");

var x = -1;
var y = -893;

document.write("The greater number of " + x + " and " + y + " is <strong>" + greaterNum(x,y) + "</strong>.</p>");


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld (lang) {
	if (lang === "en") {
		return "Hello World";
	} else if (lang == "fr") {
		return "Bonjour";
	} else if (lang == "es") {
		return "Hola";
	} else {
		return "??? :( ";
	}
}

document.write("<p>" + helloWorld("en") + "</p>");
document.write("<p>" + helloWorld("fr") + "</p>");
document.write("<p>" + helloWorld("es") + "</p>");
document.write("<p>" + helloWorld("de") + "</p>");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
	if (score < 50) {
		return "F";
	} else if (score < 60) {
		return "D";
	} else if (score < 70) {
		return "C";
	} else if (score < 80) {
		return "B";
	} else {
		return "A";
	}
}

console.log(assignGrade(35));
console.log(assignGrade(53));
console.log(assignGrade(60));
console.log(assignGrade(78));
console.log(assignGrade(80));
console.log(assignGrade(100));

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(num, noun) {
	if (num===1 || num===-1) {
		return num + " " + noun;
	} else {
		return num + " " + noun + "s";
	}
}

console.log(pluralize(1, "dog"));
console.log(pluralize(0, "dog"));
console.log(pluralize(897, "dog"));
console.log(pluralize(-1, "dog"));
console.log(pluralize(-82, "dog"));

