//for img1
var randomNumber1=Math.floor((Math.random()*6))+1;//generates random numbers from 1 - 6
var randomImg1="images/dice"+randomNumber1+".png";// generates random img form images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImg1);
//for img2
var randomNumber2=Math.floor((Math.random()*6))+1;
var randomImg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

//title
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins⭐"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 wins⭐"
}
else{
    document.querySelector("h1").textContent="Draw🍀"
}