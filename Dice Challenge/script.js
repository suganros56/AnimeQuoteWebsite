var randomNumber1=Math.floor(Math.random()*6) + 1;

var randomNumber2=Math.floor(Math.random()*6) + 1;

var diceImageOne="images/dice"+randomNumber1+".png";
var diceImageTwo="images/dice"+randomNumber2+".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",diceImageOne);
var image2 = document.querySelectorAll("img")[1].setAttribute("src",diceImageTwo);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"//player 1 wins
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"//player 2 wins

}
else{
    document.querySelector("h1").innerHTML="draw"//draw
}