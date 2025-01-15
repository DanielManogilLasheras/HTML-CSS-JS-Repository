loadData();
function loadData(){
    setTimeout(()=>{
        fetch('https://dummyjson.com/products')
.then((response) =>{
    return response.json();
})
.then((responseJson) => {
    list = responseJson.products;
    return list;
})
.then((list) => {
    let ul = document.createElement("ul");
    document.getElementById("result").appendChild(ul);
    list.forEach((element) =>{
        let li = document.createElement("li");
        li.setAttribute("value", element.id);
        let title = document.createElement("h2");
        title.textContent = element.title;
        let description = document.createElement("h3");
        description.textContent = element.description;
        let price = document.createElement("p");
        price.textContent = element.price;
        let button = document.createElement("button");
        button.textContent = "Add to cart";
        button.setAttribute("value", element.id);
        button.setAttribute("onclick", `buy(${element.id})`)
        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(price);
        li.appendChild(button);
        ul.appendChild(li);
    })
})
.catch(error => {
    console.log(error);
})
.finally(()=>{})
    },100)
}
function buy(id){
    let i = 0;
    const idProduct = id;
    setTimeout(()=>{
        fetch('https://dummyjson.com/products')
        .then((response) => {
            return response.json();
        })
        .then ((responseJson) => {
            let list = responseJson.products;
            let productSearch = list.filter(element => element.id === idProduct);
            let product = productSearch[0];
            console.log(product);
            let li = document.createElement("li");
            li.setAttribute("value", product.id);
            let query = document.querySelectorAll("#list li")
            li.setAttribute("id", query.length +1 );
            let title = document.createElement("h2");
            title.textContent = product.title;
            let price = document.createElement("p");
            price.textContent = product.price;
            let button = document.createElement("button");
            button.textContent = "Remove item";
            button.setAttribute("value", product.id);
            button.setAttribute("onclick", `deleteProduct(${product.id})`)
            li.appendChild(title);
            li.appendChild(price);
            li.append(button);
            document.getElementById("list").appendChild(li);
        })
        
        .catch((error)=>{
            console.log("Fetch unsuccessful: " + error);
        })
        .finally(()=>{
            console.log("Ending promise")
        })
    },100)
}
function deleteProduct(id){
    let parent = document.querySelector("#list");
    let query = document.querySelectorAll(`#list li`);
    let array = Array.from(query);
    let product = array.filter((element) => element.value == id);
    console.log (product);
    parent.removeChild(product[0]);
}