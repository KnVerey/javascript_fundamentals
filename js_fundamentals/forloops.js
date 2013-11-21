// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (var i = 0; i <= 20; i++) {
	var result = (i % 2 === 0 ? "even" : "odd");
	console.log(i + " is " + result);
}


// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

document.write("<h2>Multiplication table</h2>")
document.write("<table>");
for (var i = 0; i <= 10; i++) {
	document.write("<tr>");
	for (var x = 0; x <= 10; x++) {
		if (i === 0 || x === 0) {
			document.write("<td style='border: 1px solid black; background-color: grey; width: 25px; height: 25px; text-align:center;'>" + (i+x) + "</td>");
		} else {
			document.write("<td style='text-align:center;'>" + (i * x) + "</td>");
		}
	}
	document.write("</tr>");
}
document.write("</table>");

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

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

for (var grade = 60; grade <= 100; grade ++) {
	console.log("For " + grade + "%, you get: " + assignGrade(grade));
}
