

    /*
    let promise = new Promise(resolve, reject, ()=>{
        setTimeout(()=>{
            let num = Math.random() * 10;

            if (num > 5){
                resolve(num);
            }
            else{
                reject("Small number");
            }
        },5000);
    });
    promise.then((resolve)=>{
        console.log(`Number is: ${resolve}`);
    })
    .catch((error)=>{
        console.log("Error");
    })
*/
fetch("https://dummyjson.com/products")
    .then((response)=>{
        return response.json();
    })
    .then((response1)=>{
        let products = response1.products;
        return products;
    })
    .then((response2)=>{
        let filter = response2.filter(element => element.price < 100);
        filter.forEach(element => {
            console.log(`${element.title} ${element.price}`);            
        });
    })
    .catch(()=>{
        console.log("Fetch unsuccessful");
    })
    .finally(()=>{
        console.log("Ending promise")
    })