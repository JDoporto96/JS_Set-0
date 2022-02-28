//Ch5 Ex2
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

class Person{
    constructor(name){
        this.name=name;
    
    }
    getName(){
        return this.name;
    }
    getRoom(){
        return this.room;
    }
    getFloor(){
        return this.floor;
    }
    setRoom(roomNumber){
        this.room=roomNumber;
    }
    setFloor(floorN){
        this.floor=floorN;
    }

}

class Equipment{
    constructor(name){
        this.name=name;
        this.owner=null;
    
    }
    getName(){
        return this.name;
    }
    getRoom(){
        return this.room;
    }
    getFloor(){
        return this.floor;
    }
    getOwner(){
        if (this.owner==null){return 'Unassigned'}
        else{
        return this.owner;
        }
    }
    setRoom(roomNumber){
        this.room=roomNumber;
    }
    setFloor(floorN){
        this.floor=floorN;
    }
    setOwner(person){
        this.owner = person;
    }
}

class Building{
    constructor(){
        this.people=[];
        this.equipment=[];
    }

    addPerson(person){
        this.people.push(person);
    }
    addEquipment(device){
        this.equipment.push(device);
    }
    searchPerson(name){
        for(let person of this.people){
            if(person.getName()==name){
                return "Floor: "+person.getFloor() + ", Room: "+person.getRoom();
            }
        }
    }
    searchEquipment(name){
        for(let device of this.equipment){
            if(device.getName()==name){
                return "Floor: "+device.getFloor() + ", Room: "+device.getRoom() + ", Owner: " + device.getOwner();
            }
        }
    }

}

var building = new Building();
var pepe = new Person('Pepe Doporto');
pepe.setRoom('01');
pepe.setFloor(3);
building.addPerson(pepe);

var keni = new Person('Kenia Carrasco');
keni.setRoom('03');
keni.setFloor(2);
building.addPerson(keni);

var ac1 = new Equipment('A/C 1');
ac1.setRoom('01');
ac1.setFloor(1);
building.addEquipment(ac1);

var pc1 = new Equipment('PC 1');
pc1.setRoom('03');
pc1.setFloor(2);
pc1.setOwner("Kenia Carrasco")
building.addEquipment(pc1);

console.log(building);

var find = building.searchEquipment('PC 1');
	console.log(find);

var find = building.searchEquipment('A/C 1');
	console.log(find);

var find = building.searchPerson('Pepe Doporto');
	console.log(find);