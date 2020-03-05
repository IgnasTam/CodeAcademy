let arr = [ "a", "b", "c"];
console.log (arr);
document.write(arr[0], arr[1], arr[2]);
document.write(`<hr>`);

let alphab = ["a","b","c","d"];
document.write(alphab[0] + alphab[1]);
document.write(alphab[2] + alphab[3]);
document.write(`<hr>`);

let num = [2, 5, 3, 9];
result = (num[0] * num[1]) + (num[2] *num[3]);
document.write(result);
document.write(`<hr>`);

let obj = {
    a : 1,
    b : 2,
    c : 3
};
document.write(`Skliausteliu: ${obj["c"]} <br>`);
document.write(`Objekto savybė: ${obj.c} <hr>`);

let week = [null, "pirmadienis", "andtradienis", "treciadienis", "ketvirtadienis", "penktadienis", "sestadienis", "sekmadienis"];
let day = new Date();
day = day.getDay(+1);
document.write(`Šiandien yra ${week[day]} <br>`);

let _day = 5;
document.write(`${_day} ==> `);
if (_day>=1 && _day<=7){
    document.write(`${week[_day]} <hr>`);
} else document.write(`Tokios savaitės dienos nėra.<hr>`);

let multi = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
document.write(multi[1][0]);
document.write(`<hr>`);

let lang = {
    js : ['jQuery', 'Angular'],
    php : 'hello',
    css : 'world'
};
document.write(lang.js[0]);
document.write(`<hr>`);

let _week = {
    lt : [null, 'pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis','sekmadienis'],
    en: [null, 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
};
document.write(`${_week.lt[1]}<br>${_week.en[3]}<hr>`);

let _lang = 'en';
day = 4;
if((_lang == 'lt' || _lang == 'en') && (day>=1 && day<=7)){
    if (day == 7);
    document.write(_week[_lang][day]);
}











