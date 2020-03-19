let y=4,x=0;
let temp="jk";
var dir,moveposition;
let currpos=0;
if(y!=0)
{	
  for(y=0;y<=7;y++)
  {
  dir = String.fromCharCode(97+y);
  }
} 
var queen=(y,x);
var input=prompt("Enter 1-moveForward  2-jumpMoveForward");
    if(input==1)
    {
    moveForward();
    }
    if(input==2)
    {
    jumpMoveForward();
    }

function moveForward()
{ 
	moveposition="s";
}
function jumpMoveForward()
{
	var movepostion = prompt("which direction to move");
  	var times = prompt("Enter no of time to move");
}

switch(moveposition)
{
case "s" :
	 x=x+times;
	 y=y;
	currpos=dir+(temp-times);
	break;
case "n" :
	x=x-times;
	y=y;
	currpos=dir+(temp+times);
	break;
case "w" :
	y=y-times;
	x=x;
	currpos=dir+temp;
	break;
case "e":
	x=x;
	y=y+times;
	currpos=dir+temp;
	break;
case "nw" :
	x=x-times;
	y=y-times;
	currpos=(dir-times)+(temp+times);
	break;
case "ne" :
	y=y+times;
	x=x-times;
	currpos=(dir+times)+(temp+times);
	break;
case "sw":
	y=y-times;
	x=x+times;
	currpos=(dir-times)+(temp-times);
	break;
case "se":
	y=y+times;
	x=x+times;
	currpos=(dir+times)+(temp-times);
	break;
deafult:
	var text="No direction";
	break;
}
var result=updatePosition();
function updatePosition()
{
	console.log(currpos);
}