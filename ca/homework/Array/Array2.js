// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let first = [1, 2, 3];
let secound = [4, 5, 6];
let together = first.concat(secound);
console.log(together);
// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);
// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
let mass = [1,2,3];
mass.unshift(-1,-2,-3);
mass.push(4,5,6);
console.log(mass);
// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
let arrey = ['html', 'css', 'js'];
document.write(`${arrey[0]} <br>`);
document.write(`${arrey[2]} <hr>`);
// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
let arr2 = [3, 4, 1, 2, 7];
arr2.sort();
// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
let conv = [1,2,3,4,5];
conv=conv.slice(0,3);
console.log(conv);
// Duotas masyvas [1, 2, 3, 4, 5]. Konvertuokite masyvą į [1, 4, 5].
let conv2 = [1,2,3,4,5];
console.log(conv2);
conv2 = conv2.slice(3,5);
console.log(conv2);
conv2.unshift(1);
console.log(conv2);
// Atspausdinkite skaičių stulpelį nuo 1 iki 100.
for (i = 1; i <= 100; i++){
    document.write(`${i}<br>`);
}
document.write(`<hr>`);
// Atspausdinkite skaičių stulpelį nuo 11 iki 33.
for (i = 11; i<=33; i++){
    document.write(`${i}<br>`);
}
document.write(`<hr>`);
// Atspausdinkite stulpelį su lyginiais skaičiais nuo 0 iki 100.
for (i = 2; i<=100; i=i+2){
    document.write(`${i}<br>`);
}
document.write(`<hr>`);
// Naudodami ciklą parodykite sumą nuo 1 iki 100.
let sum = 0;
for (i=1;i<=100;i++){
    sum = sum + i;
}
document.write(sum);
document.write(`<hr>`);
// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.
let arr3 = [1,2,3,4,5];
for (i = 0; i<=arr3.length-1; i++){
    document.write(`${i} = ${arr3[i]}<br> `);
}
document.write(`<hr>`);
// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.
let arr4 = [1,2,3,4,5];
sum=0;
for (i = 0; i<=arr4.length-1; i++){
    sum = sum + arr4[i];
}
document.write(`${sum}<hr>`);
// Duotas objektas green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.
let arr5 = {
    green: 'žalia',
    red: 'raudona',
    blue: 'mėlyna'
};
var n;
for (n in arr5){
    document.write(`${n} => [${arr5[n]}]<br>`);
}
document.write(`<hr>`);
// Duotas objektas su raktais Mantas, Paulius, Mindaugas su reikšmėm 200, 300, 300.
// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
let arr6 = {
    Mantas:200,
    Paulius:300,
    Mindaugas:300
};
var n;
for (n in arr6){
    document.write(`${n} - ${arr6[n]} EUR <br>`);
}
document.write(`<hr>`);
// Duotas masyvas su elementais 2, 5, 9, 15, 0, 4.
// Naudodami for ir if parodykite masyvo elementus kurie yra daugiau nei 3, bet mažiau nei 10
let arr7 = [2,5,9,15,0,4];
document.write(`Masyvas: ${arr7.join()}<br>`);
result = '>3 ir <10 :';
for (i=0;i<=arr7.length-1;i++){
    if (arr7[i]>3 && arr7[i]<10){result = result + `${i} `}
}
document.write(`${result}<hr>`);
// Duotas masyvas su skaičiais. Skaičiai gali būti teigiami ir neigiami. Raskite teigiamų masyvo skaičių sumą.
let arr8 = [7,-2,-6,3,-21,25,44,25,-15];
document.write(`Masyvas: ${arr8.join()}<br>`);
sum = 0;
for (i = 0; i<=arr8.length-1; i++){
    if (arr8[i]>0){sum = sum + arr8[i]}
}
document.write(`Teigiamų skaičių suma: ${sum}<hr>`);
// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus šio masyvo elementus pasinaudoję ciklais for, while
let arr9 = [1,2,3,4,5];
document.write(`For : /`);
for (i = 0; i<=arr9.length-1; i++){
    document.write(` ${arr9[i]} /`);
}
document.write(`<br>`);
i = 0;
document.write(`While : /`);
while (i<=arr9.length-1){
    document.write(` ${arr9[i]} /`);
    i++;
}
document.write(`<hr>`);
// Duotas masyvas su elementais [2, 3, 4, 5]. Parodykite šio masyvo elementų produktą (daugyba), naudokite for ciklą.
let arr10 = [2,3,4,5];
multi=arr10[0];
for (i = 1; i<=arr10.length-1; i++){
    multi = multi * arr10[i];
}
document.write(`Sandauga: ${multi}<hr>`);
// Duotas objektas su raktais Vilnius, Riga, Talinas ir reikšmėm Lietuva, Latvija, Estija.
// Parodykite eilutes tokiu formatu: Vilnius yra Lietuva naudodami for-in ciklą
let arr11 = {
    Vilnius: 'Lietuva',
    Riga: 'Latvija',
    Talinas: 'Estija'
};
for (n in arr11){
    document.write(`${n} yra ${arr11[n]}<br>`);
}
document.write(`<hr>`);




