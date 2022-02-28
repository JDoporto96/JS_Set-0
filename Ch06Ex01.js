//Ch06 Ex01
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

class Shape{
    constructor(edges){
        this.pEdges=edges;
    }
    
    fnDisplay(){
        console.log("This object has "+this.pEdges+" edges");
    }
}

class Quadrilateral extends Shape{
    constructor(width,height){
        super(4);
        this.width=width;
        this.height=height;
    }

    fnArea(){
        return this.width*this.height
    }
    fnPerimeter(){
        return 2*this.width+2*this.height
    }
}

class Square extends Quadrilateral{
    constructor(size){
        super(size,size);
    }
}

class Triangle extends Shape{
    constructor(a,b,c,h){
        super(3);
        this.a=a;
        this.b=b;
        this.c=c;
        this.h=h;
      
    }

    fnArea(){
        return (this.b*this.h)/2;
    }
    fnPerimeter(){
        return this.a+this.b + this.c;
    }
}

var shape=new Shape(5);
shape.fnDisplay();

var quad=new Quadrilateral(3,5);
quad.fnDisplay();
console.log(quad.fnArea());
console.log(quad.fnPerimeter());

var square = new Square(10);
square.fnDisplay();
console.log(square.fnArea());
console.log(square.fnPerimeter());

var tri =new Triangle(3,3,3,2.5);
tri.fnDisplay();
console.log(tri.fnArea());
console.log(tri.fnPerimeter());



class Transportation{
    constructor(name){
        this.name = name;
    }
    fnDisplay(){
        console.log("You are traveling via: "+ this.name);
    }
    fnDistance(x1,y1,z1,x2,y2,z2){
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
}

class Vehicle extends Transportation{
    constructor(avgspeed,prsnCapacity){
        this.avgspeed=avgspeed;
        this.capacity = prsnCapacity;
    }

    fnAvgTime(x1,y1,z1,x2,y2,z2){
        return fnDistance(x1,y1,z1,x2,y2,z2)/avgspeed;
    }
    fnCapacity(){
        console.log("This vehicle can fit "+this.capacity+" persons in it");
    }
    
}

class WheeledVehicle extends Vehicle{
    constructor(avgspeed,prsnCapacity,wheelsNum,motor){
        super(avgspeed,prsnCapacity);
        this.wheels=wheelsNum;
        this.motor =motor;
    }
    fnWheels(){
        console.log("This vehicle has "+this.wheels+" wheels");
    }
    Motorized(){ return this.motor}
}

class Car extends WheeledVehicle{
    constructor(model, year){
        super(120,5,4,true);
        this.model=model;
        this.year = year;
    }
    
}
class Bike extends WheeledVehicle{
    constructor(model){
        super(70,1,2,false);
        this.model=model;
    }
}