
let cards=[] //created my first array!!!
let sum=0;
let blackJack=false;
let isAlive=false;
let Message="";
let messageEL=document.getElementById("message-el");
//let sumEL=document.getElementById("sum-el");
let sumEL=document.querySelector("#sum-el");
let cardsEL=document.getElementById("cards-el");

// let playerName="Vishnu";
// let playerChips=145;
// let playerEL=document.getElementById("player-el");
// playerEL.textContent=playerName+ ": $"+playerChips; The codes from 12 to 15 is normal declaration....but playername and playerchips are related so hence we create an object to make this issue easy!!:)

let player=
{
    name: "Vishnu",
    chips: 145,
    sayHello: function()
    {
        console.log("hellooooo");
    }

}
player.sayHello()
let playerEL=document.getElementById("player-el");
 playerEL.textContent=player.name+ ": $"+player.chips;


//console.log(cards);
function startGame()
{
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum=cards[0]+cards[1];
    renderGame();
}
 function renderGame()
 {
    if(sum<=20)
    {
       // console.log("Do you want to draw a new card?");
        Message="Do you want to draw a new card?";
    }
    else if(sum===21)
    {
      //  console.log("Wohoo! you have got blackjack!!");
        blackJack=true;
        Message="Wohoo! you have got blackjack!!";
        
    }
    else if(sum>21)
    {
      //  console.log("You are out of the game");
        isAlive=false;
        Message="You are out of the game";
    }
    messageEL.textContent=Message;
    sumEL.textContent="SUM: "+sum;
   // cardsEL.textContent="CARDS: "+cards[0]+" "+cards[1]; 
   cardsEL.textContent= "CARDS: "
    for(let i=0;i<cards.length;i++)
    {
        
        cardsEL.textContent+=  cards[i]+" ";
    }
 }

 function newCard()
 {
    if(isAlive && blackJack===false)
    {
     let card=getRandomCard();
     cards.push(card);
    // console.log(cards);
     sum+=card;
     renderGame();
    }
 }

 function getRandomCard()
 {
     let randomNumber= Math.floor(Math.random()*13+1)
     if(randomNumber>1 && randomNumber<11)
     return randomNumber;
     else if(randomNumber===1)
     return 11;
     else
     return 10;
 }
