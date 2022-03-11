//Ch04 Ex04
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function dataType(...args){
    for(var obj of args){
        var type=typeof obj;
        if (type == "number"){
            if(obj%1==0){
                console.log (type);  
            }
            else{
                console.log ("float");}
        }
        else if(type =="object"){
            if(Array.isArray(obj)){
                console.log("array");
            }
            else{console.log(type)};
        }
        else{console.log(type)};
    }
}

dataType (1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); 
	// number, float, string, array, object, function
