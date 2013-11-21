// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

function suffix(num) {
	s = num.toString();
	num_end = parseInt(s.slice(s.length-2));

	if (num_end % 10 === 1 && num_end != 11) {
		return "st";
	} else if (num_end % 10 === 2 && num_end != 12) {
		return "nd";
	} else if (num_end % 10 === 3 && num_end != 13) {
		return "rd";
	} else {
		return "th";
	}
}

var favourites = ["red","orange","blue","green","yellow"];

for (var i = 0; i < favourites.length; i++) {
	console.log("My " + (i + 1) + suffix(i+1) + " choice is " + favourites[i]);
}

// for (var x = 100; x <= 200; x++) {
// 	console.log(x + suffix(x));
// }

