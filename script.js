var timer = 60;
var score =  0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}


function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter ="";
    for(var i = 0; i<=153; i++){
        var rn = Math.floor(Math.random()*10);
        clutter+=  `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML=clutter;
    
}
function runTimer(){
     var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML= "game over";

        }
        
    },1000)

}
document.querySelector("#pbottom").addEventListener("click",function(dets){

     var clicknum = Number(dets.target.textContent);
     console.log(clicknum);

   if(clicknum===hitrn){
    increaseScore();
    hit();
    makeBubble();
   }
    
})

runTimer();
makeBubble();
hit();
