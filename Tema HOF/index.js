const numbers = [2, 4, 10, 125, 79, 89, 90];
function checkParity (numbers) {
	return numbers % 2 === 0;
}
console.log("Toate elementele array-ului sunt pare?", (numbers.every(checkParity)));

numbers.forEach((element) => console.log(element));

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Suma tuturor elementelor din array este de:", sum);