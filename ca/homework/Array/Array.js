// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
let arr = [ "a", "b", "c"];
console.log (arr);
document.write(arr[0], arr[1], arr[2]);
document.write(`<hr>`);
// Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
let alphab = ["a","b","c","d"];
document.write(alphab[0] + alphab[1]);
document.write(alphab[2] + alphab[3]);
document.write(`<hr>`);
// Sukurkite masyvą su elementais 2, 5, 3, 9. Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
// Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
let num = [2, 5, 3, 9];
result = (num[0] * num[1]) + (num[2] *num[3]);
document.write(result);
document.write(`<hr>`);
// Sukurkite objektą a = 1, b = 2, c = 3. Parodykite elemento c reikšmę dviem būdais: per skliaustelius ir kaip objekto savybę.
let obj = {
    a : 1,
    b : 2,
    c : 3
};
document.write(`Skliausteliu: ${obj["c"]} <br>`);
document.write(`Objekto savybė: ${obj.c} <hr>`);
// Sukurkite objektą su savaitės dienomis. Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios (pirmadienis - pirmasis ir t.t.).
// Parodykite dabartinę savaitės dieną.
let week = [null, "pirmadienis", "andtradienis", "treciadienis", "ketvirtadienis", "penktadienis", "sestadienis", "sekmadienis"];
let day = new Date();
day = day.getDay(+1);
document.write(`Šiandien yra ${week[day]} <br>`);
// Sukurkite kintamjį day kuriame saugomas savaitės dienos numeris. Atspausdinkite savaitės dieną naudojant sita kintamajį.
let _day = 5;
document.write(`${_day} ==> `);
if (_day>=1 && _day<=7){
    document.write(`${week[_day]} <hr>`);
} else document.write(`Tokios savaitės dienos nėra.<hr>`);
// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let multi = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
document.write(multi[1][0]);
document.write(`<hr>`);
// Duotas objektas {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}. Parodykite žodį jQuery.
let lang = {
    js : ['jQuery', 'Angular'],
    php : 'hello',
    css : 'world'
};
document.write(lang.js[0]);
document.write(`<hr>`);
// Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en. Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai.
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
let _week = {
    lt : [null, 'pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis','sekmadienis'],
    en: [null, 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
};
document.write(`${_week.lt[1]}<br>${_week.en[3]}<hr>`);
// Sukurkite kintamjį lang (reikšmės lt arba en) ir naudojant lang ir day parodykite dieną
let _lang = 'en';
day = 4;
if((_lang == 'lt' || _lang == 'en') && (day>=1 && day<=7)){
    document.write(_week[_lang][day]);
}











