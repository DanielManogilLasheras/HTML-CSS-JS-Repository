iteratingArray();
function iteratingArray(){
    const deck=shuffleFunc(createDeck());
    const deckCheck=[];
        var timer=setInterval(function(){
            let found=true;
            let card={};
            while(found){
                card=drawCard(deck);
                if(deckCheck.includes(card)){
                    found=true;
                }else{
                    found=false;
                    deckCheck.push(card);
                }
            }
            console.log(card);
            if (deck.length == deckCheck.length){
                clearInterval(timer);
                console.log("programa terminado");
                console.log(deckCheck);
            }
        },'5000');
}
function shuffleFunc(deck){
    let shuffleDeck=deck;
    for (let i=0;i<deck.length;i++){
        shuffleDeck=_.shuffle(deck);
    }
    return shuffleDeck;
}
function drawCard(deck){
    let found=true;
    const shuffleDeck=deck;
        card=deck[Math.floor(Math.random() * (shuffleDeck.length))];
    return card;
}
function createDeck(){
        const deck=[];
        let group="";
        let value="";
        let card="";
        for (let i=0;i<4;i++){
            for (let j=1;j<=13;j++){
                switch (i){
                    case 0:
                        group="C";
                        break;
                    case 1:
                        group="D";
                        break;
                    case 2:
                        group="R";
                        break;
                    case 3:
                        group="P";
                        break;
                }
                switch (j){
                    case 11:
                        value="J";
                        break;
                    case 12:
                        value="Q";
                        break;
                    case 13:
                        value="K";
                        break;
                    default:
                        value=j;
                        break;
                }
                card=value+group;
                deck.push({idcard:card,valuecard:j,groupcard:group});
            }
        }
        return deck;
}