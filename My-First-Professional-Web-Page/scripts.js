function focusOnClick(key){
    if (key==="ae"||key==="ss"||key==="ps"||key==="rs"){
        document.getElementById(key).scrollIntoView();
        document.getElementById(key).style.color = "#4d9bbf";
        setTimeout(
            function first_color(){
            document.getElementById(key).style.color = "#000000";
        },300
        );
    }
}