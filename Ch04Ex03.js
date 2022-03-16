//Ch04 Ex03
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
class ObjVal{
    #val;
    constructor(n){
        if (typeof(n)=="number"){
            this.#val = n;
        }
        else{
            throw new Error("value must be a number"); 
        }
       
    }
    get value(){
        return this.#val;
    }
    set value(value){
        if (typeof(value)=="number"){
            this.#val = value;
        }
        else{
            throw new Error("value must be a number"); 
        }

    }

}

const o=  new ObjVal(30);

console.log(o.value);

o.value=45;
console.log(o.value);




