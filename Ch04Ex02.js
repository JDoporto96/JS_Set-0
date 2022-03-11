//Ch04 Ex02
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
function addRec(array){
    if (array.length === 1) {
        return array[0];
      }
      else {
        return array.pop() + addRec(array);
      }
}

var arr = [ 1, 3, 5, 7];
var sum = addRec (arr); // 16
console.log(sum);
