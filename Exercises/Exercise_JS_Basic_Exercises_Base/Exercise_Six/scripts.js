sentence();
function sentence(){
    let conf=false;
    let array=[];
    while(true){
        let sentence=prompt("Insert a phrase of more than  10 letters");
        let words=sentence.split(" ");
        let replacedSpace=sentence.replace(/\s/g,'');
        replacedSpace=replacedSpace.split(" ");
        array=sentence.split("");
        if (array.length<10){
            return false;
        }
        console.log("Numero de palabras: " + words.length);
        console.log("Numero de letras: " + array.length);
        console.log("Numero de frases " + replacedSpace.length);
        return false;
        
        
    }
    

}