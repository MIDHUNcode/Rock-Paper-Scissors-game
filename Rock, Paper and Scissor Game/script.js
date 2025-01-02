var you=0;
var cpu=0;
var gameActive=false
function computer()
{
  var a=['ROCK','PAPER','SCISSOR'];
  var b=(Math.floor(Math.random()*3));
  return a[b];
}
function user(x)
{
  if (!gameActive)
  {
    alert("Please Start the GAME First!");
    return;
  }
  var a="YOU Choose:";
  var b="CPU Choose:";
  document.getElementById("you").innerHTML=a+x;
  var c=computer()
  document.getElementById("cpu").innerHTML=b+c;
  document.getElementById("summary").innerHTML="";
  if(x==c)
  {
    document.getElementById("result").innerHTML="DRAW !!!";
    document.getElementById("result").style.color="grey";
  }
  else if((x=="ROCK" && c=="SCISSOR") || 
          (x=="SCISSOR" && c=="PAPER")||
          (x=="PAPER" && c=="ROCK"))
  {
    document.getElementById("result").innerHTML="YOU WON !!!";
    document.getElementById("result").style.color="green";
    you++;
    document.getElementById("you-point").innerHTML=you;
  }
  else
  {
    document.getElementById("result").innerHTML="YOU LOSE !!!";
    document.getElementById("result").style.color="red";
    cpu++;
    document.getElementById("cpu-point").innerHTML=cpu;
  }
}
function reset()
{
  document.getElementById("you").innerHTML="";
  document.getElementById("cpu").innerHTML="";
  document.getElementById("result").innerHTML="";
  document.getElementById("summary").innerHTML="Start the GAME";
  you=0;
  cpu=0;
  document.getElementById("you-point").innerHTML=0;
  document.getElementById("cpu-point").innerHTML=0;
  gameActive=false
}
function startGame() {
  reset(); 
  gameActive = true;
  document.getElementById("summary").innerHTML = "Game Started! Choose ROCK, PAPER, or SCISSOR.";
}