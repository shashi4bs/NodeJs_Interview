let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(numbers){
	return numbers.reduce((a, b)=>a+b, 0);
}

console.log(sum(numArray));
