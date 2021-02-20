class Human {

    // this represent current obj in power

    constructor(name="Unknown", money=1000){
        this.name = name;
        this.money = money;
    }


    party = function(){
        if(this.money >= 100){
            this.money -= 100;
            console.log("Party party");
        } else {
            console.log("Yaar koi paise de do");
        }
    }

    borrow = function(friend){
        if(friend.money >= 500){
            friend.money -= 500;
            this.money += 500;
        }
    }
}

const anuj = new Human("Anuj Ji", 10000);
const nitin = new Human("Nitin Bhai", 100);

for (let index = 0; index < 11; index++) {
    nitin.party();  
}

console.log(nitin.money);
console.log(anuj.money);

console.log(anuj);

nitin.borrow(anuj);

nitin.party();  
nitin.party();  

