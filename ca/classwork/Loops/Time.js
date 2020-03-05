let time = prompt('What is the time?');

if (time >= 6 && time < 12) {
    alert('Rytas');
} else if (time >= 12 && time < 18) {
    alert('Diena');
} else if (time >= 18 && time <24) {
    alert('Vakaras')
} else if (time <= 6 || time >= 24 && time < 25 ) {
    alert('Naktis');
} else if (time >=25) {
    alert('Tokio laiko nera')
} else {
    alert('Klaida');
}