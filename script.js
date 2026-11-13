var names = [];
var namesIn;
var n = 0;
var win;
var player1, player2;
var p1 = 0;
var p2 = 0;
var winBtn = document.getElementById("winBtn");
var loseBtn = document.getElementById("loseBtn");
var enter = document.getElementById("enter");
var names = new array ();
enter.onclick = function (){
  names.push(document.getElementById("name"));
  n++; 
  document.getElementById("name").textContent = " ";
}
winBtn.onclick = function () {
  //player 1 win
  win = true;
}
loseBtn.onclick = function () {
  //player 1 lose
  win = false;
}
var update = function(){
  document.getElementById("player1").textContent = player1;
  document.getElementById("player2").textContent = player2;
  
}
if(loseBtn.onclick === true || winBtn.onclick === true){
for(int i = -1; i < n; i++) {
  if(winBtn.onclick === true){
    player1 = names[p1];
    p2++;
    player2 = names[p2];
  }
  else{
    player2 = names[p2];
    p1++;
    player1 = names[p1];
  }
  update();
}
}
