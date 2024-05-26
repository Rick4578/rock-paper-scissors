
//reset function bring everything to default value


function re()
{
document.getElementById("demo").innerHTML="--------------";
document.getElementById("userData").innerHTML="please press ArrowUp for stone ArrowLeft for paper and ArrowRight for scissors";
document.getElementById("computercount").innerHTML= 0;
document.getElementById("usercount").innerHTML= 0;
document.getElementById("winner").innerHTML= "--------------";
}


//the main working function taht workes when an arrow key is pressed as an input 
//it generate a random value for computer among stone apaper and scissors
//and compare it with the value of user input and winner is decided 

function onKeyPress()
{
let key = event.key;
   let k= Math.floor(Math.random() * 3);
   if (k==0)
   {
    k="stone"
   }
   else if(k==1)
   {
    k="paper" 
   } 
   else {
   k="scissors"
   }
  document.getElementById("demo").innerHTML = k ;


if (key=="ArrowUp")
{
document.getElementById("demo").innerHTML = k ;
document.getElementById("userData").innerHTML ="stone"

}
else if (key=="ArrowLeft")
{
 document.getElementById("demo").innerHTML = k ;
 document.getElementById("userData").innerHTML ="paper"
}
else if(key=="ArrowRight")
{
document.getElementById("demo").innerHTML = k ;
document.getElementById("userData").innerHTML ="scissors"
}
else 
{
document.getElementById("userData").innerHTML ="please press ArrowUp for stone ArrowLeft for paper and ArrowRight for scissors "
}
{
 
}
let dataColl=document.getElementById("userData").innerHTML
if (dataColl==k)
{
document.getElementById("winner").innerHTML="it's a draw"
}
else if (dataColl=="stone"& k=="scissors")
{
document.getElementById("terms").innerHTML="user own"
}
else if (dataColl=="paper"& k=="stone")
{
document.getElementById("winner").innerHTML="user own"
}
else if (dataColl=="scissors"& k=="paper")
{
document.getElementById("winner").innerHTML="user own"
}
else
{
document.getElementById("winner").innerHTML="Computer own"
}
}


//var is used beacause variable is declared outside the function and used inside the function to make it use as a loop 
//it counts computer and user winning count and gives the result after 5 matches

var datacounter=[ ];
var clickcount=0;
var compcounter=0;
var usercounter=0;
function click()
{
clickcount=clickcount+1
if (document.getElementById("winner").innerHTML=="user own")
{
usercounter=usercounter+1
document.getElementById("usercount").innerHTML=usercounter;
}
else if(document.getElementById("winner").innerHTML=="Computer own")
{
compcounter=compcounter+1
document.getElementById("computercount").innerHTML=compcounter;
}
if(usercounter+compcounter==5)
{ 
 if(usercounter>compcounter)
  {
   document.getElementById("term").innerHTML="after 5 matches the winner is User";
   re();
   usercounter=0;
   compcounter=0;
  }
 else
  {
    document.getElementById("term").innerHTML="after 5 matches the winner is Computer";
    re();
    usercounter=0;
    compcounter=0;
  }
} 

}


//rather then calling multiple function when on click they are bundle together 

function mo()
{
onKeyPress()
click()
}


