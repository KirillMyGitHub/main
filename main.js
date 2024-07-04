const testSwitch = 10;
switch(testSwitch) {
    case 0:
        console.log('ваше число 0');
        break;
    case 1:
        console.log('ваше число 1');
        break;
    default:
        console.log('ничего не подошло');
}

function calcSwitch(a, b, operation) {
    switch(operation) {
        case 'add':
            return(a + b);
        case 'multi':
            return(a * b);
        case 'subtract':
            return(a - b);
        case 'divide':
            return(a / b);
        default:
            return('неизвестная операция')
    }
}

console.log(calcSwitch(1, 2, 'add'));
console.log(calcSwitch(1, 2, 'multi'));
console.log(calcSwitch(3, 2, 'subtract'))
console.log(calcSwitch(6, 2, 'divide'))
console.log(calcSwitch(6, 2, 'nnnn'))