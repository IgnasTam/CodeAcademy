function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Split(spl){
    let words = spl.split(',');
}
function toTitleCase(str) {
    // let words = str.split(' ');
    return Split(spl);
	for (let i in words) {
        words[i] = capitalizeFirstLetter(words[i]);
    }
	return words.join(' ');
	console.log(words);
}
let name = 'petras petraitis';

name = toTitleCase(name);

console.log(`Hello, ${name}`);

let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';

str = toTitleCase(str);

console.log(str);