//Ch08 Ex02
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
class CentralTimer{
    constructor(){
        this.time=0;
        this.callbacks=[];
    }

    addFunc(func,interval){
        this.callbacks.push({"function":func,"interval":interval})
    };
    run(){
        setInterval(()=>{
            this.time++;
            for(let elem of this.callbacks){
                if (this.time%elem.interval==0){
                    elem.function();
                    
                }
            }


        },1)
    };
}

function A(){
    console.log("A ")
}
function B(){
    console.log("B ")
}
function C(){
    console.log("C ")
}

timer= new CentralTimer;
timer.addFunc(A,3000);
timer.addFunc(B,6000);
timer.addFunc(C,7500);

timer.run();


