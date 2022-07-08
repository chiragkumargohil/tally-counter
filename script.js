document.getElementById("display").innerHTML = 0;

var count = 0;

function decreament() {
    count = count - 1;
    document.getElementById("display").innerHTML = count;
}

function increament() {
    count = count + 1;
    document.getElementById("display").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("display").innerHTML = count;
}
