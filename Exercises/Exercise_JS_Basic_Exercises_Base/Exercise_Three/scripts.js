tablero();
function tablero(){
    const board=document.getElementById("board");
    for (let i=0;i<8;i++){
        if(i%2==0) board.innerHTML+=`&nbsp # # # #</br>`;
        else board.innerHTML+=`# # # # </br>`;
   
    }
}