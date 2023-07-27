const userNumber = parseInt(prompt("scegliere pari o dispari e inserisci un numero da 1 a 5  "));

const pcNumber = parseInt(prompt("premi invio"));

function randomPcNumber() {
	const randomPc = Math.floor(Math.random() * 5) + 1;

	return randomPc;
}
