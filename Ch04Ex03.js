//Ch04 Ex03
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
class ObjVal{
    constructor(n){
        if (typeof(n)=="number"){
            this.value = n;
        }
        else{
            throw new Error("n must be a number"); 
        }
       
    }
}

testobj= new ObjVal(23);
console.log(testobj.value);
