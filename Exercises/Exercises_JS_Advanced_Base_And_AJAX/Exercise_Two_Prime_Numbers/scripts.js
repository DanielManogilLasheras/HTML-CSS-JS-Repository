const calculate = document.getElementById("submit");
submit.addEventListener("click", () => {
    let number = document.getElementById("number");
    let array = [];
    let result = document.getElementById("result");
    if (isNaN(number.value)){
        result.innerHTML = `This is not a number`;
    }else{
        for (let i = 0 ; i <= number.value ; i++){
            if (number.value % i == 0){
                array.push(i);
            }
            };
        result.innerHTML = `The prime numbers of ${number.value} are:`
        array.forEach((element) => {
            if (element == array[array.length -1]) {
               
                result.innerHTML += `${element}.`
            }else{
                result.innerHTML += `${element}, `
            }
        });

    }
})