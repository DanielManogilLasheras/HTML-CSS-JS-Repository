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
    document.getElementsByTagName("loadingList").appendChild(ul);
    list.forEach((element) =>{
        let li = document.createElement("li");
        let title = document.createElement("h2");
        title.textContent = element.title;
        let description = document.createElement("h3");
        description.textContent = element.description;
        let price = document.createElement("p");
        price.textContent = element.price;
        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(price);
        ul.appendChild(li);
    })
})
.catch(error => {
    console.log(error);
})
.finally(()=>{})
    },2000)
}
