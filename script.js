let number = [];
let ArrayOfNumbers = [];
let equationSymbol = true;
let period = 0;
let topInfo = document.getElementById("top");
let bottom = document.getElementById("bottom");


//add element to expression
function addToEquation(input) {
    if ((!isNaN(input) || input === '.')) {
        if(input === '.')
        {
            period++;
        }
        if(period > 1)
        {
            period = 1;
            return;
        }
        number.push(input);
        bottom.innerHTML = number.join('');
        equationSymbol = false;
        return;
    }
    else if(equationSymbol != true) {
        ArrayOfNumbers.push(number.join(''));
        ArrayOfNumbers.push(input);
        topInfo.innerHTML = ArrayOfNumbers.join('');
        bottom.innerHTML = '';
        number = [];
        equationSymbol = true;
        period = 0;
    }
}


//clear equation
function clearAll() {
    ArrayOfNumbers = [];
    number = [];
    topInfo.innerHTML = '';
    bottom.innerHTML = '0';
    period = 0;
}
    
//delete
function deleteEntry() {
        if(number[number.length - 1] === '.')
        {
            period = 0;
        }
        equationSymbol = true;
        number.pop();
        bottom.innerHTML = number.join('');
}


//find result
function compute()
{
    if (!isNaN(ArrayOfNumbers[ArrayOfNumbers.length - 1]) || number.length === 0 || ArrayOfNumbers.length === 0) {
        return;
    }
    ArrayOfNumbers.push(number.join(''));
    topInfo.innerHTML = ArrayOfNumbers.join('') + "=";
    let tempValue = 0;
    let operator = 1;
    do {
        if(ArrayOfNumbers[operator] == '÷') {
           tempValue = Number(ArrayOfNumbers[operator - 1]) / Number(ArrayOfNumbers[operator + 1]);
           ArrayOfNumbers[operator + 1] = tempValue;
           ArrayOfNumbers.splice(operator - 1, 2);
        }
        else if(ArrayOfNumbers[operator] == '×') {
            tempValue = Number(ArrayOfNumbers[operator - 1]) * Number(ArrayOfNumbers[operator + 1]);
            ArrayOfNumbers[operator + 1] = tempValue;
            ArrayOfNumbers.splice(operator - 1, 2);
        }
        if(!(operator + 2 > ArrayOfNumbers.length)){
            operator += 2;
        } 
        else {
            operator = 1;
        }
    } while (ArrayOfNumbers.includes('÷') || ArrayOfNumbers.includes('×'));

    if(ArrayOfNumbers.length === 1) {
        outputResult();
        return;
    }
    else {
        do {
            if(ArrayOfNumbers[1] == '+') {
               tempValue = Number(ArrayOfNumbers[0]) + Number(ArrayOfNumbers[2]);
               ArrayOfNumbers[2] = tempValue;
               ArrayOfNumbers.splice(0, 2);
            }
            else if(ArrayOfNumbers[1] == '-') {
                tempValue = Number(ArrayOfNumbers[0]) - Number(ArrayOfNumbers[2]);
                ArrayOfNumbers[2] = tempValue;
                ArrayOfNumbers.splice(0, 2);
            }
        } while (ArrayOfNumbers.length != 1);
    }
    outputResult();
}

function outputResult()
{
    let decimals = ArrayOfNumbers[0].toString().split('.');
    if(decimals.length > 1 && decimals[1].length > 10)
    {
        ArrayOfNumbers[0] = ArrayOfNumbers[0].toFixed(10);
    }
    bottom.innerHTML = ArrayOfNumbers[0];
    number = [];
    number.push(ArrayOfNumbers[0]);
    ArrayOfNumbers = [];
    period = 0;
}

   
  