// Parašykite funkciją, kuri grąžina skaičiaus kvadratą. Skaičius perduodamas kaip parametras.
    function Square(number) {
        return number ** 2;
}
console.log(Square(5));
// Parašykite funkciją, kuri grąžina dviejų skaičių sumą. Skaičiai perduodami funkcijos parametrus.
function numb(num1, num2) {
    return num1 + num2;
}
console.log(numb(5,9));
// Parašykite funkciją, kuri iš antro parametro atima pirmą ir padalija iš trečio.
function div(a, b, c) {
    return (b - a) / c;
}
console.log(div(1,9,2));
// Parašykite funkciją, kuri priima kaip parametrą skaičių nuo 1 iki 7, o grąžina savaitės dieną lietuvių kalba.
function Weekdays(day) {
        if (typeof day != 'number') {
            return 'Not a number';
        }
        if(day == 1 ) {
            return 'pirmadienis';
        }
        if(day == 2) {
            return 'antradienis'
        }
        if(day == 3) {
            return 'treciadienis'
        }
        if(day == 4) {
            return 'ketvirtadienis'
        }
        if(day == 5) {
            return 'penktadienis'
        }
        if(day == 6) {
            return 'sestadienis'
        }
        if(day == 7) {
            return 'sekmadienis'
        }
        if(day > 7 || day <= 0) {
            return 'Tokios savaites dienos nera'
        }
}
console.log (Weekdays(5));
