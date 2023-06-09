const MAXIMUM_FITNESS = 10;
const FITNESS_INCR = 4

const MINIMUM_HUNGER = 0;
const HUNGER_DECR = 3;

function Pet(name){
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
}

Pet.prototype = {
    
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
    
}

Pet.prototype.growUp = function(){
    if(!(this.isAlive)){
        throw new Error("Your pet is no longer alive :(")
    } else{
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }
}

Pet.prototype.walk = function(){
    if(!(this.isAlive)){
        throw new Error("Your pet is no longer alive :(")
    } else{
        if((this.fitness + FITNESS_INCR) <= MAXIMUM_FITNESS){
            this.fitness += FITNESS_INCR;
        }else{
            this.fitness = MAXIMUM_FITNESS;
        }
    }

}

Pet.prototype.feed = function(){
    if(!(this.isAlive)){
        throw new Error("Your pet is no longer alive :(")
    } else{
        if((this.hunger - HUNGER_DECR) >= MINIMUM_HUNGER){
            this.hunger -= HUNGER_DECR;
        }else{
            this.hunger = MINIMUM_HUNGER;
        }
    }
    
}

Pet.prototype.checkUp = function(){
    if(!(this.isAlive)){
        throw new Error("Your pet is no longer alive :(")
    } else{
        if(this.fitness <= 3 && this.hunger >= 5){
            return "I am hungry AND I need a walk";
        } else if(this.fitness <= 3){
            return "I need a walk";
        } else if(this.hunger >= 5){
            return "I am hungry";
        } else{
            return "I feel great!";
        }
    }
    
}

Pet.prototype.haveBaby = function(babyName){
    const baby = new Pet(babyName);
    this.children.push(baby);
}






    
module.exports = Pet;

    