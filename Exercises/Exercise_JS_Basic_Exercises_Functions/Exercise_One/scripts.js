userInput();
function userInput(){
    let numberOne=prompt("Input first number");
    let numberTwo=prompt("Input second number", 0);
    sum(numberOne,numberTwo);
    substract(numberOne,numberTwo);
    divide(numberOne,numberTwo);
    multiply(numberOne,numberTwo);

}
function sum(numberOne, numberTwo){
    let result=parseInt(numberOne)+parseInt(numberTwo);
    alert ("sum: " + result);
}
function substract(numberOne, numberTwo){
    let result=parseInt(numberOne)-parseInt(numberTwo);
    alert ("substract: " + result);
}
function multiply(numberOne, numberTwo){
    let result=parseInt(numberOne)*parseInt(numberTwo);
    alert ("multiply: " + result);
}
function divide(numberOne, numberTwo){
    let result=parseInt(numberOne)/parseInt(numberTwo);
    alert ("divide: " + result);
}