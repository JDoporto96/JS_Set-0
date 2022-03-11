//Ch05 Ex01
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
function generateNum(n){
    var number="";
    for(let i=0;i<n;i++){
        number+=Math.floor(Math.random()*10);
    }
    return number;
}

function clientsList(bank){
    var list=[];
    bank.accounts.forEach(acc => {
        list.push(new Client(acc.getOwner,acc.number,0))
    
    })
    return list;
}

function refreshList(clients,bank){
    var acc=bank.accounts;
    for(let i=clients.length;i<acc.length;i++){
        clients.push(new Client(acc[i].owner,acc[i].number,0));
    }
}

class Client{
    #name;
    #money;
    constructor(name,account,money){
        this.#name = name;
        this.account =account;
        this.#money=money;
    }
    get getName(){
        return this.#name;
    }
    get getMoney(){
        return this.#money;
    }
    getAccountNumber(){
        return this.accountNumber;
    }
    addMoney(amount){
        this.#money+=amount;
    }
    depMoney(amount){
        this.#money-=amount;
    }


}

class Account{
    #owner
    constructor(number,owner){
        this.number=number;
        this.#owner=owner;
        this.balance=0;
    }
    get getOwner(){
        return this.#owner;
    }
    
    addBalance(amount){
        this.balance+=amount;
    }
    restBalance(amount){
        this.balance-=amount;
    }
    getBalance(){
        return this.balance;
    }
}


class Bank{
    constructor(){
        this.accounts=[];
    }
    createAcc(owner){
        this.accounts.push(new Account(generateNum(8),owner))
    }

    deposit(person,amount,destination){
        var dest=this.accounts.find(el=>el.number==destination);
        if(dest==undefined){
            throw new Error("Not a valid account number");
        }
        if(person.getMoney>=amount){
            person.depMoney(amount);
            dest.addBalance(amount);
        }
        else{
            throw "Amount exceeds your current cash"
        }
        
        
    }

    withdraw(person,amount){
        var account=this.accounts.find(acc=>acc.number==person.account);
        if(account.balance>=amount){
            person.addMoney(amount);
            account.restBalance(amount); 
        }
        else{
            throw "Insufficient funds"
        }
    }

    showBalance(person){
        var account=this.accounts.find(acc=>acc.number==person.account);
        console.log("Your balance is: $"+account.balance);
    }

}

//Creates a new bank and add new accounts
BBVA=new Bank;
BBVA.createAcc("Jose Doporto");
BBVA.createAcc("Ana Carrasco");
BBVA.createAcc("Emilio Alvarez");
console.log(BBVA);

//Create a list of clients/person who will be using the banks services
var clients=clientsList(BBVA);
console.log(clients);

//Targets clients from alist of clients for further usage
const pepe=clients.find(cli =>cli.getName=="Jose Doporto"),
keni=clients.find(cli =>cli.getName=="Ana Carrasco"),
emi=clients.find(cli =>cli.getName=="Emilio Alvarez");

//Saves account numbers for further usage
const pepeAcc=pepe.account, 
keniAcc=keni.account,
emiAcc=emi.account;

//Gives clients money to hold on their own
pepe.addMoney(350), keni.addMoney(400),emi.addMoney(250);


//Bank Services
BBVA.deposit(pepe,150,emiAcc);
BBVA.deposit(keni,300,keniAcc);
BBVA.deposit(emi,100,pepeAcc);
console.log(BBVA);

BBVA.withdraw(pepe,100);
BBVA.withdraw(emi,50);

BBVA.showBalance(pepe);
BBVA.showBalance(keni);
BBVA.showBalance(emi);

//Set a new account
BBVA.createAcc("Raul Velez");
BBVA.createAcc("Cindy Cuiriz");
console.log(BBVA);

//Refreshes clients list
refreshList(clients,BBVA);
console.log(clients);

pepe.addMoney(500);
BBVA.deposit(pepe,800,pepeAcc);
console.log(BBVA);













