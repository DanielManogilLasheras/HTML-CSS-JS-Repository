let fahren = document.getElementById("fahren");
let celsius = document.getElementById("celsius");
let resultOne = document.getElementById("resultOne");
let resultTwo = document.getElementById("resultTwo");
let submit= document.getElementById("submitOne");
let submitTwo= document.getElementById("submitTwo");
submit.addEventListener("click",() =>{
    let fahrenToCelsius = (fahren.value - 32) * (5/9);
    resultOne.value=fahrenToCelsius;
})
submitTwo.addEventListener("click",() =>{
    let celsiusToFahren = celsius.value * (9/5) + 32;
    resultTwo.value=celsiusToFahren;
})