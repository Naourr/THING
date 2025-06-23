const screen = document.querySelector('.screen');
const tago = document.querySelector('.tago');


function back() {
    if (screen.value == "Error") {
        clearscreen();
        screen.value = screen.value.slice(0, -1);
        tago.value = tago.value.slice(0, -1);
    } else {
        screen.value = screen.value.slice(0, -1);
        tago.value = tago.value.slice(0, -1);
    }
}

function display(input) {
    if (screen.value == "Error") {
        clearscreen();
        screen.value += input;
    } else {
        screen.value += input;
    }
}

function tagoonly(input) {
    if (screen.value == "Error") {
        clearscreen();
        tago.value += input;
    } else {
        tago.value += input;
    }
}

function clearscreen() {
    screen.value = "";
    tago.value = "";
}

function calculate() {
    try {
        tago.value = eval(tago.value);
        screen.value = eval(tago.value);
    }
    catch (error) {
        tago.value = "Error";
        screen.value = "Error";
    }
}