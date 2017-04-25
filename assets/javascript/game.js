var lettersGlobal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordsGlobal = ["pig", "cow"];

var cow = lettersGlobal[2] + lettersGlobal[14] + lettersGlobal[22];


	var chances = 6;
	var reset;

	var p = false;
	var i = false;
	var g = false;

/* var resetEquation = function (){
var x = wordsGlobal[Math.floor(wordsGlobal.length * Math.random())];
return x;
}

document.write(resetEquation()); */

//Josh's commit: Resets game by refreshing page
function updatePage(){
	window.location.reload();
}

var pig = lettersGlobal[15] + lettersGlobal[8] + lettersGlobal[6]

	document.onkeydown = function keyUp(event) {



	 if (event.key === lettersGlobal[15]) {
		document.getElementById("spot1").innerHTML = "p";

		p = true;
	}
	else if (event.key === lettersGlobal[8]) {
		document.getElementById("spot2").innerHTML = "i";
		i = true;
	}
	else if(event.key === lettersGlobal[6]) {
		document.getElementById("spot3").innerHTML = "g";
		g = true;
		}
		else {
			chances--;


				if (chances === 5) {
					document.getElementById("wb1").innerHTML = event.key;
					document.getElementById("image1").src = "assets/images/hangman2.jpg";
				}
				if (chances === 4) {
					document.getElementById("wb2").innerHTML = event.key;
					document.getElementById("image1").src = "assets/images/hangman3.jpg";
				}
				if (chances === 3) {
					document.getElementById("wb3").innerHTML = event.key;
					document.getElementById("image1").src = "assets/images/hangman4.jpg";
				}
				if (chances === 2) {
					document.getElementById("wb4").innerHTML = event.key;
					document.getElementById("image1").src = "assets/images/hangman5.jpg";
				}
				if (chances === 1) {
					document.getElementById("wb5").innerHTML = event.key;
					document.getElementById("image1").src = "assets/images/hangman6.jpg";
				}
			if (chances === 0) {
				document.getElementById("wb6").innerHTML = event.key;
				document.getElementById("image1").src = "assets/images/hangman7.jpg";
				document.getElementById("message").innerHTML = "You Lose!";
			}
		}

		if ((p === true)&&(i === true)&&(g === true)) {
			document.getElementById("message").innerHTML = "You Win!";
		}

	}
