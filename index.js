
function onUserPress()
{
  let randomComp = Math.floor(Math.random() * 3);

  
  if (randomComp==0)
    { 
      document.getElementById("display_demo").style.display="none"
      document.getElementById("comp_imgChange").style.display="none"
      document.getElementById("comp_imgChangestatic").style.display= "none" ;
      document.getElementById("comp_imgChangerotate").style.display= "block" ;
      setTimeout(function() 
      { 
        document.getElementById("comp_imgChange").src="assects/R.png";
        document.getElementById("comp_imgChange").style.display="block"
        document.getElementById("comp_imgChangerotate").style.display= "none"
        document.getElementById("display_demo").innerHTML=randomComp
        document.getElementById("display_demo").style.display="block"

      },1000);
      randomComp="Stone"
    } 
  
  if (randomComp==1)
    { 
      document.getElementById("display_demo").style.display="none"
      document.getElementById("comp_imgChange").style.display="none"
      document.getElementById("comp_imgChangestatic").style.display= "none" ;
      document.getElementById("comp_imgChangerotate").style.display= "block" ;
      setTimeout(function() 
      { 
        document.getElementById("comp_imgChange").src="assects/P.png";
        document.getElementById("comp_imgChange").style.display="block"
        document.getElementById("comp_imgChangerotate").style.display= "none"
        document.getElementById("display_demo").innerHTML=randomComp
        document.getElementById("display_demo").style.display="block"

      },1000);
      randomComp="Paper"
      
      
    }

  if (randomComp==2)
    { 
      document.getElementById("display_demo").style.display="none"
      document.getElementById("comp_imgChange").style.display="none"
      document.getElementById("comp_imgChangestatic").style.display= "none" ;
      document.getElementById("comp_imgChangerotate").style.display= "block" ;
      setTimeout(function() 
      { 
        document.getElementById("comp_imgChange").src="assects/S.png";
        document.getElementById("comp_imgChange").style.display="block"
        document.getElementById("comp_imgChangerotate").style.display= "none"
        document.getElementById("display_demo").innerHTML=randomComp
        document.getElementById("display_demo").style.display="block"
      },1000);
      randomComp="Scissor"

      
    
    
    }
  
  document.getElementById("demo").innerHTML=randomComp;

  let userInput=document.getElementById("userData").innerHTML
  
  if(randomComp==userInput)
    {
      document.getElementById("winner").innerHTML="It Is a Draw"
      setTimeout(function(){document.getElementById("display_winner").innerHTML="It Is a Draw"},2000)
    }
  else if(userInput=="Stone" && randomComp=="Scissor")
    {
      document.getElementById("winner").innerHTML="The Winner is User"
      setTimeout(function(){document.getElementById("display_winner").innerHTML="The Winner is User"},2000)
    }
  else if(userInput=="Paper" && randomComp=="Stone")
    {
      document.getElementById("winner").innerHTML="The Winner is User"
      setTimeout(function(){document.getElementById("display_winner").innerHTML="The Winner is User"},2000)
    }
  else if(userInput=="Scissor" && randomComp=="Paper")
    {
      document.getElementById("winner").innerHTML="The Winner is User"
      setTimeout(function(){document.getElementById("display_winner").innerHTML="The Winner is User"},2000)
    }
  else
    {
      document.getElementById("winner").innerHTML="The Winner is Computer"
      setTimeout(function(){document.getElementById("display_winner").innerHTML="The Winner is Computer"},2000)
    }
}
   


function Stone()
{ 
  document.getElementById("display_winner").innerHTML="--------------"
  document.getElementById("display_userData").style.display="none"
  document.getElementById("user_imgChange").style.display="none"
  document.getElementById("user_imgChangestatic").style.display= "none" ;
  document.getElementById("user_imgChangerotate").style.display= "block" ;
  setTimeout(function() 
  {document.getElementById("user_imgChange").src="assects/R.png";
   document.getElementById("user_imgChange").style.display="block"
   document.getElementById("user_imgChangerotate").style.display= "none"
  },2300);
  document.getElementById("userData").innerHTML="Stone"
  setTimeout(function() 
  {
    document.getElementById("display_userData").innerHTML="Stone"
    document.getElementById("display_userData").style.display="block"                 
  },2500) ;
  
  onUserPress();  
  click();
}

function paper()
{  
  document.getElementById("display_winner").innerHTML="--------------"
  document.getElementById("display_userData").style.display="none"
  document.getElementById("user_imgChange").style.display="none"
  document.getElementById("user_imgChangestatic").style.display= "none" ;
  document.getElementById("user_imgChangerotate").style.display= "block" ;
  setTimeout(function() 
  {document.getElementById("user_imgChange").src="assects/P.png";
   document.getElementById("user_imgChange").style.display="block"
   document.getElementById("user_imgChangerotate").style.display= "none"
  },2300);
  document.getElementById("userData").innerHTML="Paper"
  setTimeout(function() 
  {
    document.getElementById("display_userData").innerHTML="Paper"
    document.getElementById("display_userData").style.display="block"
  
  },2500) ;
    
  onUserPress(); 
  click();  
}

function scissor()
{ document.getElementById("display_winner").innerHTML="--------------"
  document.getElementById("display_userData").style.display="none"
  document.getElementById("user_imgChange").style.display="none"
  document.getElementById("user_imgChangestatic").style.display= "none" ;
  document.getElementById("user_imgChangerotate").style.display= "block" ;
  setTimeout(function() 
  {document.getElementById("user_imgChange").src="assects/S.png";
   document.getElementById("user_imgChange").style.display="block"
   document.getElementById("user_imgChangerotate").style.display= "none"
  },2300);
  document.getElementById("userData").innerHTML="Scissor"
  setTimeout(function() 
  {
    document.getElementById("display_userData").innerHTML="Scissor"
    document.getElementById("display_userData").style.display="block"
  
  },2500) ;
  
  onUserPress(); 
  click();   
}





var compcounter=0;
var usercounter=0;
function click()
{

if (document.getElementById("winner").innerHTML=="The Winner is User")
{
usercounter=usercounter+1
setTimeout(function(){document.getElementById("usercount").innerHTML=usercounter;},2000)

}
else if(document.getElementById("winner").innerHTML=="The Winner is Computer")
{
compcounter=compcounter+1
setTimeout (function(){document.getElementById("computercount").innerHTML=compcounter;},2000)

}
if(usercounter+compcounter==5)
{ 
 if(usercounter>compcounter)
  {
   document.getElementById("term").innerHTML="after 5 matches the winner is User";
   half_re();
   usercounter=0;
   compcounter=0;
  }
 else
  {
    document.getElementById("term").innerHTML="after 5 matches the winner is Computer";
   
    half_re();
    usercounter=0;
    compcounter=0;
  }
} 

}

function re()
{
document.getElementById("demo").innerHTML="--------------";
document.getElementById("userData").innerHTML="please choose an input";
document.getElementById("computercount").innerHTML= 0;
document.getElementById("usercount").innerHTML= 0;
document.getElementById("winner").innerHTML= "--------------";
document.getElementById("display_winner").innerHTML= "--------------";
usercounter=0;
compcounter=0;
document.getElementById("user_imgChangestatic").style.display= "block" ;
document.getElementById("user_imgChangerotate").style.display= "none" ;
document.getElementById("user_imgChange").src="";
document.getElementById("user_imgChange").style.display="none";

document.getElementById("comp_imgChangestatic").style.display= "block" ;
document.getElementById("comp_imgChangerotate").style.display= "none" ;
document.getElementById("comp_imgChange").src="";
document.getElementById("comp_imgChange").style.display="none";



document.getElementById("display_demo").style.display="none"
document.getElementById("display_userData").style.display="none"
}


function  half_re()
{
document.getElementById("demo").innerHTML="--------------";
document.getElementById("userData").innerHTML="please choose an input";
document.getElementById("computercount").innerHTML= 0;
document.getElementById("usercount").innerHTML= 0;
document.getElementById("winner").innerHTML= "--------------";
document.getElementById("display_winner").innerHTML= "--------------";
usercounter=0;
compcounter=0;

document.getElementById("user_imgChangerotate").style.display= "none" ;
document.getElementById("user_imgChange").src="";
document.getElementById("user_imgChange").style.display="none";

document.getElementById("comp_imgChangerotate").style.display= "none" ;
document.getElementById("comp_imgChange").src="";
document.getElementById("comp_imgChange").style.display="none";



document.getElementById("display_demo").style.display="none"
document.getElementById("display_userData").style.display="none"
}
