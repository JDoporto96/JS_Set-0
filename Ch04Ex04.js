//Ch04 Ex04
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function dataType(...args){
    for(var obj of args){
        if (typeof obj == "number"){
            if(obj%1==0){
                console.log ("number");  
            }
            else{
                console.log ("float");}
        }
        else if(typeof obj =="object"){
            if(Array.isArray(obj)){
                console.log("array");
            }
            else{console.log(typeof obj)};
        }
        else{console.log(typeof obj)};
    }
}

dataType (1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); 
	// number, float, string, array, object, function
