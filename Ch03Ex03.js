//Ch03 Ex03
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
const myMath={
    add: function(...args){
        return args.reduce((a,b)=>(a+b));
    },
    mul: function(...args){
        return args.reduce((a,b)=>(a*b));
    },
    fact: function(n){
        var res = 1;
        if (n==0){
            return res;
        }
        else{
            for(let i = 1;i<=n;i++){
                res*=i;
            }
            return res;    
        }
    }
}


console.log( myMath.add (1, 2, 3)); //6
console.log( myMath.mul (1, 2, 3)); // 6
console.log( myMath.fact (	3)); // 6
