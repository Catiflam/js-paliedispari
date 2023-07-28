const userRoll = document.getElementById("user-roll");
const pcRoll = document.getElementById("pc-roll");
const finalWinner = document.getElementById("winner");

let userChoise = prompt(" scegli pari o dispari");
while (userChoise != "pari" && userChoise != "dispari") {
	alert("dati non validi");
	userChoise = prompt(" scegli pari o dispari");
}
console.log("scelta utente" + userChoise);

let userNumber = parseInt(prompt(" inserisci un numero da 1 a 5 "));
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
	alert("dati non validi");
	userNumber = parseInt(prompt(" inserisci un numero da 1 a 5 "));
}
console.log("numero utente" + userNumber);

const pcNumber = randomPcNumber(1, 5);
console.log("numero pc" + pcNumber);
const sumNumber = userNumber + pcNumber;
console.log("somma" + sumNumber);

const userWinner = winner(sumNumber, userChoise);

if (winner(sumNumber, userChoise)) {
	console.log("il giocatore ha vinto");
} else {
	console.log("il pc ha vinto");
}

function randomPcNumber(max, min) {
	const randomPc = Math.floor(Math.random() * (max - min + 1)) + min;

	return randomPc;
}
function winner(sum, userChoise) {
	const sumEven = sum % 2 == 0;

	if ((userChoise == "pari" && sumEven) || (userChoise == "dispari" && !sumEven)) {
		return true;
	}

	return false;
}

finalWinner.innerText = userWinner;
userRoll.innerText = userNumber;
pcRoll.innerText = pcNumber;
