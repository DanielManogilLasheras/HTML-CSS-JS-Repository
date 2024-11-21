//Declaro e inicializo variables que voy a utilizar en las operaciones.
const btnStart=document.querySelector("#btnWelcome");
const btnDraw=document.querySelector("#btnDraw");
const btnStand=document.querySelector("#btnStand");
//Inicializo una variable que representa una baraja, y otra que representa un array vacío donde guardo las cartas ya sacadas.
const deck=setGame();
const deckCheck=[];
//En cuanto se pulse el boton -jugar-, se inicia el juego.
btnStart.addEventListener("click",()=>{
    document.getElementById("welcome").style.display="none";
    initiateGame();
});
//El juego se inicializa pidiendo un nombre con prompt, se visualiza el tablero, y se procede con el turno de la banca.
function initiateGame(){
    const name=prompt("Introduzca su nombre:");
    setTable(name);
    turnMachine(name);
}
//Esta función visualiza el tablero, y muestra el nombre insertado en el.
function setTable(name){
    let board=document.querySelector("#board");
    board.style.display="";
    document.querySelector("#row-bottom .fs-2").innerHTML=`${name}`;
    document.querySelector("#middle").innerHTML=`Turno de la Banca`;
}
//Esta función crea una baraja de cartas, usando la iteración para darle a cada carta su valor y nombre de archivo.
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
//Este es el turno de la máquina, saca cartas a intervalos de 1 segundo hasta que su puntuación sea igual o mayor a 17.
function turnMachine(name){
    let interval=setInterval(() => {
        //función para sacar una carta no repetida del mazo.
        let card=drawCard();
        //Inicializamos variables para modificar el contenido HTML.
        let contentMachine=document.querySelector("#handler-hand");
        let scoreMachine=document.querySelector("#handler-score");
        //Añadiendo la representación de la carta al tablero.
        contentMachine.innerHTML+=`<img src="resources/${card.image}" alt="">`;
        //Para sacar la puntuación del HTML, he usado la librería Jquery porque me daba una solución sencilla y la sumo a la puntuación actual.
        let res = parseInt($('#handler-score').text())+parseInt(card.value);
        scoreMachine.innerHTML=res;
        if(res>=17&&res<=21){
            //La banca se planta al conseguir una puntuación entre 17 y 21, y se anuncia el turno del jugador.
                btnDraw.style.display="";
                btnStand.style.display="";
                document.getElementById("middle").innerHTML=`Turno de ${name}`;
                clearInterval(interval);
        }else if(res>21){
            //Si la puntuación es mayor a 21, la banca pierde automaticamente. Para evitar que el alert salga antes que la carta, se le ha añadido un timeout.
            clearInterval(interval);
            setTimeout(()=>{
                winner();
            },1000);
        }
    }, 1000);
}
//Cada vez que el jugador hace click en "Sacar Carta" se sacará una carta no repetida, se modificará la puntuación, se mostrará la carta en el tablero, y se revisará el resultado.
//Funciona de manera parecida al turno de la banca
btnDraw.addEventListener("click",()=>{
    let card=drawCard();
    let content=document.querySelector("#player-hand");
    let score=document.querySelector("#player-score");
    let scoreMachine=parseInt($('#handler-score').text());
    content.innerHTML+=`<img src="resources/${card.image}" alt="">`;
    let scorePlayer = parseInt($('#player-score').text())+parseInt(card.value);
    score.innerHTML=scorePlayer;
    setTimeout(()=>{
        //Cada vez que el jugador saca una carta, se valora si hay ganador o empate.
        checkWinner(scorePlayer,scoreMachine,false);
    },100);
});
//De la misma manera, si el jugador se planta, se llamará a la función para decidir el ganador.
btnStand.addEventListener("click",()=>{
    let scorePlayer = parseInt($('#player-score').text());
    let scoreMachine=parseInt($('#handler-score').text());
    checkWinner(scorePlayer,scoreMachine,true);
})
//Para decidir el ganador, uso la puntuación del jugador, de la banca y un valor booleano para saber si el ganador se decide porque el jugador se ha plantado.
function checkWinner(scorePlayer,scoreMachine,stand){
    //He podido utilizar un switch pero he preferido hacer un if anidado por ser más conveniente.
        if(scorePlayer>21){ //Si la puntuación es mayor a 21, el jugador pierde.
            lose();
        }else if(scorePlayer==21 && scorePlayer==scoreMachine){ //Si el jugador y la banca sacan 21, hay empate.
            draw();
        }else if(scorePlayer==scoreMachine && stand===true){ //Si el jugador y la banca están iguales y el jugador se planta, hay empate.
            draw();
        }else if(scorePlayer<21 && scorePlayer>scoreMachine){ //Si el jugador, al sacar carta su puntuación es menor a 21 y mayor que la banca, gana.
            winner();
        }else if(scorePlayer<scoreMachine && stand===true){ //Si el jugador se planta y su puntuación es menor que la banca, pierde.
            lose();
        }else{
            return false; //De lo contrario, se devuelve false y se sigue jugando.
        }
}
//Función para sacar una carta aleatoria y asegurarse que no está repetida.
function drawCard(){
    while(true){
        let card=deck[Math.floor(Math.random() * (deck.length))];
        if(!deckCheck.includes(card)){
            deckCheck.push(card);
            return card;
        }
    }
}
//Para ahorrar código, se utilizan funciones para anunciar el ganador.
function winner(){
    hideButtons()
    alert("Enhorabuena, ha ganado la partida");
}
function draw(){
    hideButtons()
    alert("Ha habido un empate");
}
function lose(){
    hideButtons()   
    alert("Ha perdido la partida");
}
//Esta función impide al jugador seguir jugando cuando el juego ha terminado.
function hideButtons(){
    btnDraw.style.display="none";
    btnStand.style.display="none";
}
