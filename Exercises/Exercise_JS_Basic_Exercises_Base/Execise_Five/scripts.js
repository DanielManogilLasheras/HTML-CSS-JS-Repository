operations();
function operations(){
    let conf=false;
    while(!conf){
        let numOne=prompt("Insert first number");
        let numTwo=prompt("Insert second number");
        if (isNaN(numOne) || isNaN(numTwo)){
            alert("the values are not numbers");
            conf=true;
        } 
        if (numOne<=0 || numTwo<=0) {
            alert("The values are 0 or lower than 0");
            conf=true;
        }
        if (!conf){
            let suma=(parseInt(numOne)+parseInt(numTwo));
            let resta=(numOne-numTwo);
            let multi=(numOne*numTwo);
            let div=(numOne/numTwo);
            if(suma<0 || resta<0){
                conf=true;
            }
            if (!conf){
                let answer=prompt("Type 'yes' if you want to repeat the process or 'no' if you want to terminate it");
            switch (answer){
                case "yes":
                    conf=false;
                    break;
                case "no":
                    conf=true;
                    break;
            }
            }
        }
    } 
}