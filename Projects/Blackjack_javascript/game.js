const btnStart=document.querySelector("#btnWelcome");
const btnDraw=document.querySelector("#btnDraw");
const deck=setGame();
const deckCheck=[];
btnStart.addEventListener("click",()=>{
    document.getElementById("welcome").style.display="none";
    initiateGame();
});
btnDraw.addEventListener("click",()=>{
    	let card=drawCard();
        let content=document.querySelector("#player-hand");
        let score=parseInt(document.querySelector("#player-score"));
        content.innerHTML+=`<img src="resources/${card.image}" alt="">`;
        document.querySelector("#player-score").innerHTML=score.value;
});
function initiateGame(){
    //const name=prompt("Introduzca su nombre:");
    console.log(deck);
    setTable();
}
function drawCard(){
    while(true){
        let card=deck[Math.floor(Math.random() * (deck.length))];
        if(deckCheck.includes(card)){
            console.log("found");
        }else{
            console.log(card);
            deckCheck.push(card);
            return card;
        }
    }
}
function setTable(name){
    let board=document.querySelector("#board");
    board.style.display="";
}
function setGame(){
    let deckTypes=["P","C","D","T"];
    let deck=[];
    for (let index = 0; index< deckTypes.length; index++) {
        for (let j = 1 ;j<= 13; j++) {
            switch(j){
                case 11:
                    deck.push(new card("J"+deckTypes[index]));
                    break;
                case 12:
                    deck.push(new card("Q"+deckTypes[index]));
                    break;
                case 13:
                    deck.push(new card("K"+deckTypes[index]));
                    break;
                default:
                    deck.push(new card(j+deckTypes[index]));
                    break;
            }
        }     
    }
    deck=_.shuffle(deck);
    return deck;
}