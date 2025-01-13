let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let acomodacion = document.getElementById("alojamiento");
    let alimentacion = document.getElementById("alimentacion");
    let entretenimiento =  document.getElementById("entretenimiento");

    if (acomodacion.value != "" && alimentacion.value != "" && entretenimiento.value != "")  {
        if (isNaN(acomodacion.value) || isNaN(alimentacion.value) || isNaN(entretenimiento.value)){
            error.innerHTML = `Todos los campos deben ser números`;
            console.log("No es un numero");
        }else{
            let error = document.getElementById("error").innerHTML = ``;
            let resultadoDiv= document.getElementById("resultado");
            let resultado = parseInt(acomodacion.value) + parseInt(alimentacion.value) + parseInt(entretenimiento.value);
            resultadoDiv.innerHTML =  `<h3> El gasto de su viaje asciende a ${resultado} euros</h3>`;
        }
    }else{
        error.innerHTML = `Rellene todos los campos`;
    }
});
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    document.getElementById("alojamiento").value = "";
    document.getElementById("alimentacion").value = "";
    document.getElementById("entretenimiento").value="";
    document.getElementById("resultado").innerHTML = ``;
})