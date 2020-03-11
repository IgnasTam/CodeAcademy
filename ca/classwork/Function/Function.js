function isEven (value) {
    return value % 2 == 0;
}
function sumEvenArr (items){
    let sum = 0;
	for (let value of items) {
        // if (value % 2 == 0) {
        if(isEven(value)) {
            sum += value;
        }
    }
	return sum;
}
let arr = [2,4,5,7,8,12,4,7,-2,2,7];
console.log(sumEvenArr(arr));
console.log(isEven(5));
console.log(isEven(6));
