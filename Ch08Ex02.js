//Ch08 Ex02
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
function A(time){
    if (time%1==0){
        console.log("A "+ time +" seg have pased")
    }
}
function B(time){
    if (time%2==0){
        console.log("B "+ time +" seg have pased")
    }
}
function C(time){
    if (time%3==0){
        console.log("C "+ time +" seg have pased")
    }
}


var time=0;
function timer(){
    time+=1;
    A(time);
    B(time);
    C(time);

}

setInterval(timer,1000);