function convert(number) {
    const romanN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

let newvalue = 0;
let oldvalue = 0;
let i = number.length - 1;

while (i >= 0) {
        const currentSymbol = number[i];
        const currentValue = romanN[currentSymbol];

        if (currentValue < oldvalue) {
            newvalue = newvalue - currentValue;
        } else {
            newvalue = newvalue + currentValue;
        }

        oldvalue = currentValue;
        i--;
    }
    return newvalue;
}

//Dependencia (Random roman)

const randRoman = require('random-roman');
const n = randRoman();
console.log(n);
const news = convert(n);
console.log(`El numero romano: ${n} en decimales es igual a: ${news}.`);




