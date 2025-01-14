const loading = document.getElementById("loading");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    loading.innerHTML = "Loading data...";
    setTimeout(() => {
        getData();
    },2000);
})
async function getData(){
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((responseJson)=>{
        let list = []
       responseJson.forEach((element)=>{
        let name = element.name;
        let email = element.email;
        let city =  element.address.city;
        let paragraph = document.createElement("p");
        paragraph.textContent = `Name: ${name} | Email: ${email} | City: ${city}`
        result.appendChild (paragraph);
       })
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(() => {
        loading.innerHTML = ""
    })
}
