// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChildren, partner, city, job) {
	document.write("<p>You will be a " + job + " in " + city + ", and married to " + partner + " with " + numChildren + " kids.</p>");
}

tellFortune(1, "Todd","Ottawa","web developer");
tellFortune(3, "James","Toronto","skydiver");
tellFortune(9, "Maria","Austin","parent");


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear) {
	var thisYear = new Date().getFullYear();
	var possibleAges = [(thisYear-birthYear), (thisYear-1-birthYear)];

	document.write("<p>You are either " + possibleAges[1] + " or " + possibleAges[0] + ".</p>");
}

calculateAge(1985);
calculateAge(1987);
calculateAge(1953);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, dailyConsumption) {
	deathAge = 90;
	document.write("<p>You will need " + Math.ceil((dailyConsumption*365) * (deathAge-age)) + " to last you until the ripe old age of " + deathAge + ".<p>");
}

calculateSupply(26, 3);
calculateSupply(40, 0.5);
calculateSupply(0, 0.25);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

function calcCircumference(radius) {
	var circumference = 2 * Math.PI * radius;

	document.write("<p>The circumference is " + circumference + ".</p>");
}

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

function calcArea(radius) {
	var area = Math.PI * Math.pow(radius, 2);
	document.write("<p>The area is " + area + ".</p>");
}

calcCircumference(5);
calcArea(5);

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

function celsiusToFahrenheit(celTemp) {
	fahrTemp = Math.ceil(celTemp * 9/5 + 32);
	document.write("<p>" + celTemp + " degrees C is " + fahrTemp + " degrees F.</p>");
}

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

function fahrenheitToCelsius(fahrTemp) {
	celTemp = Math.ceil((fahrTemp - 32)*5/9);
	document.write("<p>" + fahrTemp + " degrees F is " + celTemp + " degrees C.</p>");
}

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

celsiusToFahrenheit(26);
fahrenheitToCelsius(80);

