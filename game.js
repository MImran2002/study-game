var randomNumber=Math.random();
var randomNumber1=Math.floor(randomNumber*6)+1;
document.querySelector(".dice1").setAttribute("src", "dice" + randomNumber1 + ".png");
var randomNumber2=Math.random();
var randomNumber2=Math.floor(randomNumber2*6)+1;
document.querySelector(".dice2").setAttribute("src", "dice" + randomNumber2 + ".png");
if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="User wins";
} else if (randomNumber2<randomNumber1){
    document.querySelector("h1").innerHTML="Bot wins";
    alert("You lose! Bot Wins! Sending you back to Study Room");
    window.location = "https://mimran2002.github.io/study-game/study.html"
} else if (randomNumber2==randomNumber1){
    document.querySelector("h1").innerHTML="It's a draw!";
};
var refresh = document.getElementById("refresh")
refresh.addEventListener("click", function(){
    window.location.reload();
});