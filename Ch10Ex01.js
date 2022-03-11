//Ch09 Ex01
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

var myLib = {
    math: {
        real: {
            add: function (a, b){ /*code goes here*/},
            sub: function (a, b){ /*code goes here*/},
            mul: function (a, b){ /*code goes here*/}
        },

        complex: {
            Num: function (real, img){/*code goes here*/},
            add: function (a, b){ /*code goes here*/},
            sub: function (a, b){ /*code goes here*/},
            mul: function (a, b){ /*code goes here*/}
        },

        matrix: {
            add: function (a, b){ /*matrix addition*/},
            sub: function (a, b){ /*matrix subtraction*/},
            mul: function (a, b){ /*matrix multiplication*/},
            eye: function (size){ /*identity matrix*/},
            dot: function (m, a){ /*dot product*/},
            times:function(a, b){ /*element-wise multiplication*/}
        }
    }
};

with(myLib.math){
    with(real){
        var answer = sub(add(20,22),mul(2,5));
    }
    var ans = matrix.times(matrix.eye (4), complex.sub (new complex.Num (real.add(5,2),-3), new complex.Num (3,4)));
    
}

var answer2;
var ans2;
const m = myLib.math, r = m.real;
answer2 = r.sub(r.add(20,22),r.mul(2,5));
ans2 = m.matrix.times(m.matrix.eye (4), m.complex.sub (new m.complex.Num (m.real.add(5,2),-3), new m.complex.Num (3,4)));



