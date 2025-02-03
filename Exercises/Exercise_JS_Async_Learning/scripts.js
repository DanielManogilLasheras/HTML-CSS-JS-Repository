const url = "https://dummyjson.com/products";

async function obtenerProductos(url){
    let respuesta = await fetch(url); 
    let json = await respuesta.json();
    console.log(json.products);
}

obtenerProductos(url);