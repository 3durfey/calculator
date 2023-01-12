let equationString = "";
let bracketLeft = false;
let brackets = '()';

document.getElementById("input").value = equationString;

//add element to expression
function addToEquation(input)
{
    let length = equationString.length;
    //determine which bracket to insert
    if(input === brackets){
        if(length === 0 
        || equationString[length - 1] === subtract 
        || equationString[length - 1] === multiply 
        || equationString[length - 1] === divide 
        || equationString[length - 1] === add){
            equationString += '(';
            bracketLeft = true;
        }
        else if(bracketLeft === true){
            equationString += ')';
            bracketLeft = false;
        }
    }
    else {
        equationString += input;
    }
    display();
}
//display function
const display = () => document.getElementById("input").value = equationString;
//clear equation
const clearAll = () => {
    equationString = "";
    display();}
//find result
function compute()
{
    const elements = Array.from(equationString);
    let ArrayOfNumbers = new Array();
    let indexOfArrayOfNumbers = 0;
    for(let x = 0; x < elements.length; x++) {
        if(isNaN(elements[x])) {
            indexOfArrayOfNumbers++;
            ArrayOfNumbers[indexOfArrayOfNumbers] = elements[x];
            indexOfArrayOfNumbers++;
            ArrayOfNumbers[indexOfArrayOfNumbers] = "";
        }
        else if(x === 0) {
            ArrayOfNumbers[indexOfArrayOfNumbers] = elements[x];
        }
        else {
            ArrayOfNumbers[indexOfArrayOfNumbers] += elements[x];
        }
    }
    let tempNumber = 0;
    for(let x = 0; x < ArrayOfNumbers.length; x++) {
        let sumOfEquation = 0;
        switch(ArrayOfNumbers[x]) {
            case ('/'):
                tempNumber = Number(ArrayOfNumbers[x-1]) / Number(ArrayOfNumbers[x+1]);
                break;
            case ('*'):
                tempNumber = Number(ArrayOfNumbers[x-1]) * Number(ArrayOfNumbers[x+1]);
                break;
            case ('-'):
                tempNumber = Number(ArrayOfNumbers[x-1]) - Number(ArrayOfNumbers[x+1]);
                break;
            case ('+'):
                tempNumber = Number(ArrayOfNumbers[x-1]) + Number(ArrayOfNumbers[x+1]);
                break;
        }
        sumOfEquation += tempNumber;
        document.getElementById("input").value = sumOfEquation;
    }
}
