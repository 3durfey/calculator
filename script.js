let number = [];
let ArrayOfNumbers = new Array();
let equationResult;
let firstEquation = false;
let result = document.getElementById("result");
let enteredValue = document.getElementById("input");

//add element to expression
function addToEquation(input) { 
    if (!isNaN(input) || input === '.') {
        number.push(input);
        if(ArrayOfNumbers.length === 2) {
            enteredValue.value = number.join('');
            compute();
            return;
        }
    } else {
        if(firstEquation) {
            ArrayOfNumbers[0] = equationResult;
            ArrayOfNumbers[1] = input;
        }
        else {
            ArrayOfNumbers.push(number.join(''));
            ArrayOfNumbers.push(input);
        }
        number = [];
        enteredValue.value = '';
    }
    number != '' ? result.value = number.join('') : result.value = ArrayOfNumbers.join('');
    !isNaN(input) ? enteredValue.value = input : ArrayOfNumbers[0];
}

//clear equation
function clearAll() {
    document.getElementById("input").value = '';
    ArrayOfNumbers = [];
    number = [];
    firstEquation = false;
    result.value = '';
    enteredValue.value = '0';
}
    
//delete
const deleteEntry = () => {
    if (firstEquation) {
        console.log(1);
        if(number.length === 1) {
            number = ['0'];
            input.value = number.join('');
            console.log(2);
        }
        else {
            number = [];
            enteredValue.value = '';
            console.log(3);
        }
    }
    else if(number.length === 1) {
        number = ['0'];
        input.value = number.join('');
        console.log(2);
    }
    else {
        number = [];
        enteredValue.value = '';
        console.log(3);
    }
}
function equals() {
    if (ArrayOfNumbers.length === 2) {
        compute();
        number = [];
        input.value = '0';
    }
    else {
        return;
    }
}
//find result
function compute()
{
    if (number.length === 1 && number[0] === '.') {
        result.value = ArrayOfNumbers.join('');
        console.log('if', ArrayOfNumbers[0]);
        return;
    }
    firstEquation = true;
    switch(ArrayOfNumbers[1]) {
        case '+':
            equationResult = Number(ArrayOfNumbers[0]) + Number(number.join(''));
            break;
        case '-':
            equationResult = Number(ArrayOfNumbers[0]) - Number(number.join(''));
            break;
        case '*':
            equationResult = Number(ArrayOfNumbers[0]) * Number(number.join(''));
            break;
        case '/':
            equationResult = Number(ArrayOfNumbers[0]) / Number(number.join(''));
            break;
    } 
    result.value = equationResult;
    return equationResult;
}

/*{
    if(number.length != 1) {
        ArrayOfNumbers.push(number.join(''));
    }
    let tempValue = 0;
    let operator = 1;
    do {
        if(elements[operator] == '/') {
           tempValue = Number(elements[operator - 1]) / Number(elements[operator + 1]);
           elements[operator + 1] = tempValue;
           elements.splice(operator - 1, 2);
        }
        else if(elements[operator] == '*') {
            tempValue = Number(elements[operator - 1]) * Number(elements[operator + 1]);
            elements[operator + 1] = tempValue;
            elements.splice(operator - 1, 2);
        }
        if(!(operator + 2 > elements.length)){
            operator += 2;
        } 
        else {
            operator = 1;
        }
    } while (elements.includes('/') || elements.includes('*'));

    if(elements.length === 1) {
        result.value = elements[0];
        return;
    }
    else {
        do {
            if(elements[1] == '+') {
               tempValue = Number(elements[0]) + Number(elements[2]);
               elements[2] = tempValue;
               elements.splice(0, 2);
            }
            else if(elements[1] == '-') {
                tempValue = Number(elements[0]) - Number(elements[2]);
                elements[2] = tempValue;
                elements.splice(0, 2);
            }
        } while (elements.length != 1);
    }
    result.value = elements[0];
}*/
   
  