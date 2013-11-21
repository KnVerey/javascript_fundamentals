// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var children = 2;
var partner = "Todd";
var place = "Ottawa";
var job = "Rails Dev";

document.write("<p>You will be a " + job + " in " + place + ", and married to " + partner + " with " + children + " kids.</p>");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var thisYear = 2013;
var birthYear = 1985;
var possibleAges = [(thisYear-birthYear), (thisYear-1-birthYear)];

document.write("<p>They are either " + possibleAges[1] + " or " + possibleAges[0] + ".</p>");

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = 26;
var deathAge = 90;
var dailyConsumption = 0.5;

document.write("<p>You will need " + ((dailyConsumption*365) * (deathAge-age)) + " to last you until the ripe old age of " + deathAge + ".<p>");

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 30;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

document.write("<p>The circumference is " + circumference + ".</p>");
document.write("<p>The area is " + area + ".</p>");

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celTemp = 35;
var fahrTemp = 80;

var cToF = Math.ceil(celTemp * 9/5 + 32);
var fToC = Math.ceil((fahrTemp - 32)*5/9);

document.write("<p>" + celTemp + " degrees C is " + cToF + " degrees F.</p>");
document.write("<p>" + fahrTemp + " degrees F is " + fToC + " degrees C.</p>");


