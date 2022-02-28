//Ch07 Ex01
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function toRGB(hexNum){
    validHex= /^#([a-f]|\d){6}$/i;
    if (validHex.test(hexNum)){
        var R=hexNum[1]+hexNum[2];
        var G=hexNum[3]+hexNum[4];
        var B=hexNum[5]+hexNum[6];

        return "("+parseInt(R,16)+", "+ parseInt(G,16)+", "+parseInt(B,16)+")";
    }
    else{
        throw "Not a valid Hexadecimal number"
    }
}

var rgb=toRGB("#45bb13");
console.log(rgb);

