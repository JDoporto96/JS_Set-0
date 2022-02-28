//Ch08 Ex02
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

class Timer{
    constructor(){
        this.functions=[];
        this.times=[];
    }

    addFunc(fn,time){
        this.functions.push(fn);
        this.times.push(time);
    }

    startTimer(){
        for(let i=0;i<this.functions.length;i++){
            setInterval(this.functions[i],this.times[i]);
        }
    }
}

var timer= new Timer();
timer.addFunc(function(){console.log("A")},30000);
timer.addFunc(function(){console.log("B")},60000);
timer.addFunc(function(){console.log("C")},75000);

timer.startTimer();
