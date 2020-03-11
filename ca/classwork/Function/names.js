function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toTitleCase(str, delim = ' ') {
    let words = str.split(delim);

	for (let i in words) {
        words[i] = capitalizeFirstLetter(words[i]);
    }

	return words.join(' ');

	console.log(toTitleCase(str, delim));
}