let timer=false;

let x=document.getElementById("hr");
let y=document.getElementById("min");
let z=document.getElementById("sec");
let w=document.getElementById("count");

let count=0;
let hr=0;
let min=0;
let sec=0;

function start(){
  timer=true;
  stopwatch();  
}
function stop(){
   timer=false;
}
function reset(){
    timer=false;
    z.innerHTML='00';
    y.innerHTML='00';
    x.innerHTML='00';
    w.innerHTML='00';
}
function stopwatch(){
    if(timer==true){
     count=count+1;
     if(count==100){
       sec=sec+1;
       z.innerHTML=sec;
       count=0;
     }
     if(sec==60){
        min=min+1;
        y.innerHTML=min;
        sec=0;
     }
     if(min==60){
        hr=hr+1;
        x.innerHTML=hr;
        min=0;
     }
     w.innerHTML=count;
    setTimeout("stopwatch()",10);
    }
}