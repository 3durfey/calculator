let number = [];
let ArrayOfNumbers = new Array();
let lastEntry = '';
//output location
let output = document.getElementById("result");
let enteredValue = document.getElementById("input");

//add element to expression
//display function
function addToEquation(input) { 
    console.log('number', number);

    if (!isNaN(input) || input === '.') 
    {
        number.push(input);
    }
    else 
    {
        ArrayOfNumbers.push(number.join('')), ArrayOfNumbers.push(input), number = [];
    }
    lastEntry = input;
    output.value = number.join('');
    enteredValue.value = input;
    console.log('input ', input);
    console.log('number', number);
    console.log('array ', ArrayOfNumbers);
}

//clear equation
const clearAll = () => {
    document.getElementById("input").value = '';
    ArrayOfNumbers = [];
    number = [];}
//delete
const deleteEntry = () => {
    console.log('number in string', number.join(''));
    console.log(output)
    if(number.length === 1)
    {
        ArrayOfNumbers.pop();
    }
    else
    {
        number.pop();
        console.log('number in string', number.join(''));
    }
    output.value = number.join('');
    document.getElementById("input").value -= lastEntry;
    console.log('input ', input);
    console.log('number', number);
    console.log('array ', ArrayOfNumbers);
}

//find result
function compute()
{
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
        output.value = elements[0];
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
    output.value = elements[0];
}
   
  