buttons = document.querySelectorAll('button');
let screen = document.getElementById('screen');
let inputs = '';

for (item of buttons) {
    item.addEventListener('click', (event) => {
        inputValue = event.target.innerText;
        switch (inputValue) {
            case 'C':
                inputs = '';
                screen.value = inputs;
                break;
            case '⌫':
                inputs = inputs.slice(0, -1);
                screen.value = inputs;
                break;
            case '√':
                inputs = Math.sqrt(inputs);
                screen.value = inputs;
                break;
            // case '±':
            //     if (screen.value.substring(0, 1) == "-") {
            //         screen.value = screen.value.substring(1, screen.value.length);
            //     } else {
            //         screen.value = "-" + screen.value;
            //     }
            //     break;
            case '^':
                inputs = `${inputs ? `(${inputs})` : ``}` + '**';
                screen.value = inputs;
                break;
            case '÷':
                inputs += '/';
                screen.value = inputs;
                break;
            case '×':
                inputs += '*';
                screen.value = inputs;
                break;
            case '=':
                screen.value = new Function('return ' + inputs)();
                inputs = screen.value;
                screen.value = parseFloat(screen.value).toFixed(9);
                screen.value = ((screen.value) * 10 / 10);
                if ((screen.value).includes('.', -10)) {
                    screen.value = (screen.value).slice(0, 11);
                } else {
                    screen.value = (screen.value).slice(0, 10);
                }
                break;
            default:
                inputs += inputValue;
                screen.value = inputs;
                break;
        }
    })
}

window.onerror = function () {
    inputs = '';
    screen.value = 'Error 🤔';
}
