//Ch03 Ex01
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
function base13(n,m){
    var mult = n*m;
    var start = mult;
    let res="";
    while(mult/13>=1){
        if(mult%13==10){
            res="A"+res;
        }
        else if(mult%13==11){
            res="B"+res;
        }
        else if(mult%13==12){
            res="C"+res;
        }
        else{
            res=(mult%13)+res;
        }
        mult= Math.trunc(mult/13)
    }
    
    if (mult ==10){
        res="A"+res; 
    }
    else if (mult ==11){
        res="B"+res; 
    }
    else if (mult ==12){
        res="C"+res; 
    }
    else{
        res=(mult)+res;
    }
    console.log("base10: " + start+ ", base13: " + res);
    return res;
    
    
    
}

base13(90,2);
base13(132,45);
base13(59,23);