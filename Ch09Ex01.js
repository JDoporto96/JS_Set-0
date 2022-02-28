//Ch09 Ex01
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function dataParse(str){
    try{
        object = JSON.parse(str);
    }
    catch(e){
        try{
            object = eval("("+str+")");
        }catch(e){
            throw 'Invalid Object';
        }
    }
    return object;
}

var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
var obj = dataParse(str);
console.log(obj.myFn(2,3));