//Ch03 Ex04
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

class Image{
    constructor(data, width, height,name){
        if (width*height==data.length){
            this.name = name;
            this.width = width;
            this.height = height;
            this.data= data;
        }
        else{
            throw new Error("Data array and image must be of same size")
        }
       
    }
    pixelData(x,y){
        if((0<x && x< this.width) &&(0<y && y<this.height)){
            return this.data[(y*this.height+x)];
        }
        else{
            throw new Error("Incompatible data point. Point out of range")
        }
    }
}

var data = new Array (1600); // 40 x 40 px dummy image data
for(let i =0; i<data.length;i++){
    data[i]=i;
};
var img = new Image (data, 40, 40, "myImage");
console.log(data);
console.log(img.width); // 40
console.log(img.height); // 40
console.log(img.name); // ‘myImage’
console.log(img.pixelData (20, 4)); // returns the color of the pixel at that position. 
