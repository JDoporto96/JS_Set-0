//Ch04 Ex03
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
class ObjVal{
    #value;
    constructor(n){
        if (typeof(n)=="number"){
            this.#value = n;
        }
        else{
            throw new Error("n must be a number"); 
        }
       
    }
    get getValue(){return this.#value;}
}

testobj= new ObjVal(23);
console.log(testobj.getValue);

testobj.value=15;
console.log(testobj.getValue);



