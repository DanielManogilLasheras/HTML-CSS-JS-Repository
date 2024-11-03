piramid();
function piramid(){
    let confirm=false;
    let numero;
    while(!confirm){
        numero=prompt("Please input a number greater than 0");
        if(numero<=0){
            alert("Incorrect number, repeat the process");
        }else{
            confirm=true;
        }
    }
    for(let i=0;i<=numero;i++){
        var content=document.getElementById("content");
        let message="";
        for(let j=0;j<i;j++){
            message+="+";
            
        }
        content.innerHTML+=`<p>${message}</p>`;
    }
}