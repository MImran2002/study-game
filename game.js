randomNumber=Math.random();
randomNumber1=Math.floor(randomNumber*6)+1;
document.querySelector(".dice1").setAttribute("src", "dice" + randomNumber1 + ".png");
randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
document.querySelector(".dice2").setAttribute("src", "dice" + randomNumber2 + ".png");
if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="User wins";
} else if (randomNumber2<randomNumber1){
    document.querySelector("h1").textContent="Bot wins";
} else if (randomNumber2==randomNumber1){
    document.querySelector("h1").textContent="It's a draw!";
}
var refresh = document.getElementById("refresh")
refresh.addEventListener("click", function(){
    window.location.reload();
    console.log("happen")
})