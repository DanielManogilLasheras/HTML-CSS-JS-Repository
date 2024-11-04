numbers();
function numbers(){
    const numOne=prompt("Input first number");
    const numTwo=prompt("Input second number");
    if(confirm("Do you want to peform operations?")){
        setTimeout(() => console.log(sum(numOne,numTwo)),"2000");
        setTimeout(() => console.log(substract(numOne,numTwo)),"4000");
        setTimeout(() => console.log(multiply(numOne,numTwo)),"6000");
        setTimeout(() => console.log(divide(numOne,numTwo)),"8000");

    }else{
    }
}
function sum(numberOne,numberTwo){
    let result=parseInt(numberOne)+parseInt(numberTwo);
    return result;
}
function substract(numberOne,numberTwo){
    let result=numberOne-numberTwo;
    return result;
}
function multiply(numberOne,numberTwo){
    let result=numberOne*numberTwo;
    return result;
}
function divide(numberOne,numberTwo){
    let result=numberOne/numberTwo;
    return result;
}