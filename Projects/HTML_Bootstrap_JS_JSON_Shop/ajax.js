const url = "https://dummyjson.com/products";
let productsInCart = [];
//Este listener llama a las funciones encargadas de cargar los contenidos de la página
const loadContents = addEventListener('DOMContentLoaded', () => {
    loadCategories(url);
    loadBrands(url);
    filterData();
});
//Esta función se encarga de establecer conexión con la API encargada de proporcionarnos el JSON
async function fetchData(url){
    let response = await fetch(url);
    let json = await response.json();
    json = json.products;
    return json;
}
/*Estas 2 funciones tienen como objetivo cargar las listas "categoria" y "marcas" usadas para filtrar los productos
Esto se ha hecho así para que el contenido de la página se actualice respecto al json en vez de introducir una lista manual
*/
async function loadCategories(url){
    let categorySelect = document.getElementById('categorySelect');
    let categories = [];
    let response = await fetch(url);
    let json = await response.json();
    categories = json.products.map(product => product.category);
    //Creo un set, que me permite filtrar automáticamente los duplicados de mi lista.
    categories = new Set(categories);
    //Añado los elementos de la lista al html
    categories.forEach(category =>{
        categorySelect.innerHTML += `
        <option value="${category}" id="${category}">${category}</option>
        `
    })
}
async function loadBrands(url){
    let brandSelect = document.getElementById('brandSelect');
    let brands = [];
    let response = await fetch(url);
    let json = await response.json();
    brands = json.products.map(product => product.brand);
    brands = new Set(brands);
    brands.forEach(brand =>{
        brandSelect.innerHTML += `
        <option value="${brand}" id="${brand}">${brand}</option>
        `
    })
}
//Esta función carga los objetos del json entrantes en cartas de productos
async function loadContent(dataToLoad){
    if(dataToLoad.length == 0){
        Swal.fire({
            icon: "error",
            title: "No se ha encontrado ningún producto con los filtros aplicados",
          });
    }else{
        let productList = document.getElementById("productList");
        productList.innerHTML = "";
        dataToLoad.forEach(product => {
            productList.innerHTML += `
                <li class="list-group-item border-0">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${product.brand}</h6>
                            <h7 style="text-align:left" class="card-subtitle mb-2 text-body-secondary">Category: ${product.category}</h7>
                        </div>
                            <img src="${product.images[0]}" class="card-img-top"  alt="...">
                        <div class="card-body">
                            <div class="container text-center">
                                <div class="row justify-content-between">
                                    <div class="col-4">
                                        <h6 class="card-subtitle mb-2 text-body-secondary">${product.price} €</h6>
                                    </div>
                                    <div class="col-7">
                                        <button type="button" class="btn btn-outline-primary" onclick="addToCart(${product.id})">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                `;
        });
    }
    
}

//Esta función recoge el json completo, lo filtra bajo los parametros introducidos y ejecuta la función para construir la información a partir de la lista resultante.
async function filterData(){
    let dataToFilter = await fetchData(url);
    let price = document.getElementById("price").value;
    let category = document.getElementById("categorySelect").value;
    let brand = document.getElementById("brandSelect").value;
    let filteredList = dataToFilter;
    if (price !== ""){
       filteredList = filteredList.filter(element => element.price >= price);
    }
    if (category != 0){
        filteredList = filteredList.filter(element => element.category == category);
    }
    if (brand != 0){
        filteredList = filteredList.filter(element => element.brand == brand);
    }
    loadContent(filteredList);
}
//Este listener capta el submit del botón de buscar
const submit = addEventListener("submit", (event) =>{
    event.preventDefault();
    filterData();
})
//Esta función se encarga de filtrar el producto por su id único y añadirlo al carrito.
async function addToCart(productSelected){
    let shoppingCart = document.getElementById("shoppingCart");
   let dataShopping = await fetchData(url);
   dataShopping = dataShopping.filter(element => element.id == productSelected);
   dataShopping.forEach(product => {
    let itemToList = new Item(product.id, product.title, product.category, product.image, product.price)
    productsInCart.push(itemToList);
        shoppingCart.innerHTML += `
            <li id="${product.id}" class="list-group-item border-0">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${product.brand}</h6>
                        <h7 style="text-align:left" class="card-subtitle mb-2 text-body-secondary">Category: ${product.category}</h7>
                    </div>
                        <img src="${product.images[0]}" class="card-img-top"  alt="...">
                    <div class="card-body">
                        <div class="container text-center">
                            <div class="row justify-content-between">
                                <div class="col-4">
                                    <h6 class="card-subtitle mb-2 text-body-secondary">${product.price} €</h6>
                                </div>
                                <div class="col-7">
                                    <button type="button" class="btn btn-outline-primary" onclick="addToCart(${product.id})">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            `;
    });
}

const checkout = document.getElementById("checkout");
let subtotal = 0;
checkout.addEventListener("click", (event) => {
    productsInCart.forEach(product => {
        subtotal += product.price;
    })
    console.log(subtotal);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Estás a punto de completar tu venta",
        text: `Vas a realizar una compra por valor de ${subtotal}, estás seguro?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, finalizar mi compra",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            //Reiniciamos variables para no tener datos incorrectos
            document.getElementById("shoppingCart").innerHTML = "";
            productsInCart = [];
            subtotal = 0;
          swalWithBootstrapButtons.fire({
            title: "Muchas gracias por comprar con nosotros!",
            text: "Tu carrito se ha vaciado",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
        }
      });
})