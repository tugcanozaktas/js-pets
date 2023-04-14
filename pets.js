module.exports = 
    class Pet {
        constructor(name, age, hunger, fitness){
            this.name = name;
            this.age = age;
            this.happiness = 0;
            this.hunger = hunger;
            this.fitness = fitness;
        }

        incrementAge() {
            this.age += 1;
            this.hunger += 1;
            this.fitness -= 1;
        }

        showLove(){
            this.happiness += 1;
        }

        isAlive(){
            if(this.age >= 30){
                return false
            }else if(this.hunger > 15){
                return false
            }else if(this.fitness < 0){
                return false
            }

            return true
        }

        feed() {
            if(this.hunger >= 0){
                this.hunger -= 1;
            }
        }

        walk(){
            if(this.fitness <= 15){
                this.fitness += 1;
            }
        }

        talk(){
            let difHunger = 15 - this.hunger;
    

            if(difHunger < this.fitness){
                return "I need food!!!"
            }else if(this.fitness < difHunger){
                return "I need to walk!!!"
            }

        
        }
    
    }
