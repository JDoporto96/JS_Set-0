//Ch5 Ex2
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

class Person{
    constructor(name){
        this.type = "person";
        this.name=name;
    }
}

class Equipment{
    constructor(name,owner){
        this.type="equipment";
        this.name=name;
        this.owner=owner;
    }
}

function createBuilding(floors, rooms){
    var build =[];
    build.floors=floors;
    build.rooms=rooms;
    for(let i=0; i<floors;i++){
        var floor=[];
        build.push(floor)
        for(let j=0;j<rooms;j++){
            var room=[];
            floor.push(room)

        }

    }
    return build;
}

build=createBuilding(30,30);
console.log(build);

build.addElement=function(element,floor,room){
    build[floor-1][room-1].push(element);
}

Function.prototype.memoized={};

build.search=function(name){
    
    function printStat(nm,rm,fl,own=undefined){
        if (own==undefined){
            console.log(nm +" found in room:" +rm+ " on floor:" +fl);
        }
        else{
            console.log(nm +" found in room:" +rm+ " on floor:" +fl+". Property of: "+own);
        }
        
    }
    var mem=build.search.memoized
    if(mem[name]){
        if(mem[name].type=="person"){
            return printStat(mem[name].name,mem[name].room,mem[name].floor)
        }
        else if(mem[name].type=="equipment"){
            return printStat(mem[name].name,mem[name].room,mem[name].floor,mem[name].owner)
        }
        
    }
    else{
        for(let i=0; i<this.floors; i++){
            for(let j=0; j<this.rooms;j++){
                var found = this[i][j].find(el=>el.name==name);
                if (found!=undefined){
                    if(found.type=="person"){
                         printStat(name,j+1,i+1);
                         mem[name]={type:found.type,name:found.name, room:j+1,floor:i+1} ;
                    }
                    else if(found.type=="equipment"){
                         printStat(name,j+1,i+1, found.owner);
                         mem[name]={type:found.type,name:found.name, room:j+1,floor:i+1,owner:found.owner} ;
                    }
                   
                console.log("memoized"); 
                }
            }
        }
    }
    
}
    

const pc1= new Equipment("PC1","Jose Doporto"),
pc2 = new Equipment("PC2","Kenia Carrasco"),
pc3 = new Equipment("PC3","Emilio Alvarez"),
hab1 = new Person("Jose Doporto"),
hab2 = new Person("Kenia Carrasco"),
hab3 = new Person("Emilio Alvarez");

build.addElement(pc1,20,30);
build.addElement(hab1,20,30);
build.addElement(pc2,11,15);
build.addElement(hab2,11,15);
build.addElement(pc3,23,4);
build.addElement(hab3,23,4);

build.search("PC2");
build.search("PC2");
build.search("Jose Doporto");
build.search("Jose Doporto");


console.log(build.search.memoized)













