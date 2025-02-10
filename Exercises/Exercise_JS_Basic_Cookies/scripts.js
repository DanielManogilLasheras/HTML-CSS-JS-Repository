let url = "hhtps://dummyjson.com/product"
let guardar = document.querySelector("#guardar")
let cargar = document.querySelector("#cargar");

guardar.addEventListener("click", (e) => {
    /*localStorage.setItem("clase","DAWC");
    localStorage.setItem("contenido","JS");
    localStorage.setItem("profesor","Borja");
    localStorage.setItem("horas",2);*/
    let objeto = {nombre:"Daniel" , apellido:"Manogil", asignaturas: ["1","2","3","4","5"]};
    localStorage.setItem("dato", JSON.stringify(objeto));

})
cargar.addEventListener("click", (e) => {
    let dato  = JSON.parse(localStorage.getItem("dato"));
    console.log(dato.nombre);
    /*let asignatura = localStorage.getItem("clase");
    console.log(asignatura);*/
})
/*
async function obtenerProductos(){
    let respuesta = await fetch (url);
    let json = respuesta.json();
}
*/