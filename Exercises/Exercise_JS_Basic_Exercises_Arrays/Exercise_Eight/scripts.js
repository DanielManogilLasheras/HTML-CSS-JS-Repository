
iteratingArray();
function iteratingArray(){
    const deck=[
        ["1C","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"],
        ["1D","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD"],
        ["1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","JR","QR","KR"],
        ["1P","2P","3P","4P","5P","6P","7P","8P","9P","10P","JP","QP","KP"],
    ];
    const shuffleDeck=[[],[],[],[]];
    for (let i=0;i<deck.length;i++){
        shuffleDeck[i]=_.shuffle(deck[i]);
    }
    let count=0;
        var timer=setInterval(function(){
            let posArrayCol=0;
            let posArraySlot=0;
            let found=false;
            while (!found){
                posArrayCol=Math.floor(Math.random() * (shuffleDeck.length));
                posArraySlot=Math.floor(Math.random()*shuffleDeck[posArrayCol].length);
                if(shuffleDeck[posArrayCol][posArraySlot]!=="NA") {
                    found=true;
            }
            }
            found=false;
            let card=shuffleDeck[posArrayCol][posArraySlot];
            let value=0;
            let group=0;
            shuffleDeck[posArrayCol][posArraySlot]="NA";
            switch (posArrayCol){
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
            value=posArraySlot+1;
            console.log("Card: " + card);
            console.log("Value: " + value);
            console.log("Group: " + group);
            count++;
            if (count >=52){
                clearInterval(timer);
                console.log("programa terminado");
                console.log(shuffleDeck);
            }
        },'5000');
        
}