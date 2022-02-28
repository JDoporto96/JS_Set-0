//Ch04 Ex06
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
function distance(x1,y1,z1,x2,y2,z2){
    if(Array.isArray(arguments[0])&& Array.isArray(arguments[1]) && arguments[0].length == arguments[1].length){
        var sum =0;
        for (let i=0; i<arguments[0].length; i++){
            sum+= (arguments[1][i]- arguments[0][i])*(arguments[1][i]- arguments[0][i]);
        }
        return Math.sqrt(sum); 
        }
    
    else if(Array.isArray(arguments[0]) && Array.isArray(arguments[1]) && arguments[0].length != arguments[1].length){
        throw new Error("Incompatible point data: "); 
    }

    else
    {if (arguments.length==6){
        return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1)+ (z2-z1)*(z2-z1))
    }
    else if(arguments.length==4){
        return Math.sqrt((z1-x1)*(z1-x1) + (x2-y1)*(x2-y1))
    }
    else{
        throw new Error("Insufficient parameters: "); 
    }}
}

var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;

console.log(distance (x1, y1, x2, y2)); // delta = 1
console.log(distance (x1, y1, z1, x2, y2, z2)); // delta = 3.1622…
//console.log(distance (x1, x2)); // should throw an error: Insufficient parameters
console.log(distance ([1,2], [2,2])); // returns 1
distance ([1,2], [2,2,4]); // error: incompatible point data

