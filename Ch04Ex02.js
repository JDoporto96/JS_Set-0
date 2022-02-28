//Ch04 Ex02
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
function addRec(array){
    let sum=0;
    for(var element of array){
        sum+=element;
    }
    return sum
}

var arr = [ 1, 3, 5, 7];
var sum = addRec (arr); // 16
console.log(sum);
