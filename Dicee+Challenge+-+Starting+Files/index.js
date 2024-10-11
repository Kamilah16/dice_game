 var r=Math.random();
r=Math.floor((r*6)+1);
if(r==1){
document.lastElementChild.querySelectorAll("img")[0].setAttribute("src","./images/dice1.png");
}
else if(r==2){
  document.lastElementChild.querySelectorAll("img")[0].setAttribute("src","./images/dice2.png");
}
else if(r==3){
  document.lastElementChild.querySelectorAll("img")[0].setAttribute("src","./images/dice3.png");
}
else if(r==4){
  document.lastElementChild.querySelectorAll("img")[0].setAttribute("src","./images/dice4.png");
}
else if(r==5){
  document.lastElementChild.querySelectorAll("img")[0].setAttribute("src","./images/dice5.png");
}
else if(r==6){
  document.lastElementChild.querySelectorAll("img")[0].setAttribute("src","./images/dice6.png");
}
var r1=Math.random();
r1=Math.floor((r1*6)+1);
if(r1==1){
  document.lastElementChild.querySelectorAll("img")[1].setAttribute("src","./images/dice1.png");
}
else if(r1==2){
  document.lastElementChild.querySelectorAll("img")[1].setAttribute("src","./images/dice2.png");
}
else if(r1==3){
  document.lastElementChild.querySelectorAll("img")[1].setAttribute("src","./images/dice3.png");
}
else if(r1==4){
  document.lastElementChild.querySelectorAll("img")[1].setAttribute("src","./images/dice4.png");
}
else if(r1==5){
  document.lastElementChild.querySelectorAll("img")[1].setAttribute("src","./images/dice5.png");
}
else if(r1==6){
  document.lastElementChild.querySelectorAll("img")[1].setAttribute("src","./images/dice6.png");
}
if(r>r1){
  document.lastElementChild.querySelector("h1").innerHTML="i won";
}
else if(r1>r){
  document.lastElementChild.querySelector("h1").innerHTML="u won";

}
else{
  document.lastElementChild.querySelector("h1").innerHTML="tie"; 
}