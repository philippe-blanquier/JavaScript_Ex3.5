// Java Script file: js_ex3.5.js
function getRandomNumber()
{
    let answer = math.randomInt(1,10);
    return answer;
}
let firstNumber= getRandomNumber();
let secondNumber= getRandomNumber();
let result= firstNumber * secondNumber;
let pId,textId;
while (result < 250)
{
    pId= document.createElement("P");
    textId= document.createTextNode(`firstNumber: ${firstNumber} * secondNumber: ${secondNumber} = ${result}`);   
    pId.appendChild(textId);
    document.body.appendChild(pId);
    secondNumber= result;
    firstNumber= getRandomNumber();
    result= firstNumber * secondNumber;
}