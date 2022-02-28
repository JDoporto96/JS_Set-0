//Ch05 Ex01
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

class Person{
    constructor(){
        this.money=0;
        this.name;
        this.last_name;
    }

    getMoney(){
        return this.money;
    }
    addMoney(amount){
        this.money+=amount;
    }
    depMoney(amount){
        this.money-=amount;
    }
}

class Client{
    constructor(name,number){
        this.accountNumber=number;
        this.balance=0;
        this.person=new Person;

    }
    getAccountNumber(){
        return this.accountNumber;
    }
    getBalance(){
        return this.balance;
    }
    addBalance(amount){
        this.balance+=amount;
    }
    deposit(amount,destination){
        if(this.person.getMoney()>=amount){
            this.person.depMoney(amount);
            destination.addBalance(amount);
        }
        else{
            throw "Amount exceeds your current cash"
        }
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.person.addMoney(amount);
            this.balance-=amount; 
        }
        else{
            throw "Insufficient funds"
        }
    }
}

var client1=new Client("José Doporto", 0001);
client1.person.addMoney(300);
var client2= new Client("Kenia Carrasco",0002);
client2.person.addMoney(500);
var client3= new Client("Emilio Alvarez",0003);
client3.person.addMoney(400);

BBVA={client1, client2,client3};
console.log(BBVA);

BBVA.client1.deposit(100, client2);
console.log(BBVA);

BBVA.client2.withdraw(50);
console.log(BBVA);

console.log(BBVA.client1);
