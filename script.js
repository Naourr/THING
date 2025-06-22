const screen = document.querySelector('.screen');

function display(input) {
    screen.value += input;
}

function clearscreen() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    }
    catch (error) {
        screen.value = "Error";
    }
}