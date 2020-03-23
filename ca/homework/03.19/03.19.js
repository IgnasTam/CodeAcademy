let interval;

function load() {
    var Move = document.getElementById("list");
    var pos = 50;
    interval = setInterval(start, 5);

    var dir = 1;
    var pos = 0;

    function start() {
        if (pos > 1400) dir = -1;
        else if (pos < 0) dir = 1;
        pos += dir;
        Move.style.left = pos + 'px';
    }

}

function stop() {
    window.clearInterval(interval);
}

function myFunction() {
    if (document.getElementById('list').value == "1") {
        $("#stylediv").html(document.getElementsByClassName("triangle").style.display = 'block');
    }
    if (document.getElementById('list').value == "2") {
        document.getElementsByClassName('circle').style.display = 'block';
    }
    if (document.getElementById('lsit').value == "3") {
        document.getElementsByClassName('square');
    }
    if (document.getElementById('list').value == "4") {
        document.getElementsByClassName('trapezoid');
    }
    if (document.getElementById('list').value == "5") {
        document.getElementsByClassName('parallelogram');
    }
}