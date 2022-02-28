//Ch03 Ex05
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
function printObjProp(obj, bool=false){
    if (bool==false){
        for(let prop in obj){
            console.log(prop);
        }
    }
    else{
        for(let prop in obj){
            if (obj.hasOwnProperty(prop)){
                console.log(prop);
            }
        }
    }

}

function CustomObject (a, b) {
    this.a = a;
    this.b = b;
}
CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);
printObjProp (obj); // output: a, b, c
printObjProp (obj, false); // output: a, b, c
printObjProp (obj, true); // output: a, b

