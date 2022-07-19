var randomNumber1 = Math.round(Math.random()* 5);
var t = Math.ceil(Math.random()* 6);
document.querySelector(".img1").setAttribute("src","images/dice"+t+".png");
var q = Math.ceil(Math.random()* 6);
document.querySelector(".img2").setAttribute("src","images/dice"+q+".png");
if (t===q){
  document.querySelector("h1").textContent = "Draw!";
}
else if(t>q){
  document.querySelector("h1").textContent = "🚩Player 1 wins!";
}
else if(q>t){
  document.querySelector("h1").textContent = "Player 2 wins!🚩";
}
