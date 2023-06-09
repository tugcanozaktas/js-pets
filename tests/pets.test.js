const Pet = require("../pets");




describe("constructor", ()=>{
    it("returns an object", ()=>{
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    })

    it("sets the name property", ()=>{
        const pet = new Pet("Fido");
        expect(pet.name).toEqual("Fido");
    })

    it("has an initial age of 0", ()=>{
        const pet = new Pet("Fido");
        expect(pet.age).toEqual(0);
    })

    it("has an initial hunger of 0", ()=>{
        const pet = new Pet("Fido");
        expect(pet.hunger).toEqual(0);
    })
    it("has an initial fitness of 10", ()=>{
        const pet = new Pet("Fido");
        expect(pet.fitness).toEqual(10);
    })
})

describe("growUp", ()=>{
    it("should return pet is not alive if conditions are not satisfied", ()=>{
        const pet = new Pet("dally");

        pet.age = 31;


        expect(() =>{pet.checkUp()}).toThrow("Your pet is no longer alive :(");
    })
    it("increments the age by 1", ()=>{
        const pet = new Pet("Limo");

        pet.growUp();

        expect(pet.age).toEqual(1);
    })

    it("increments the hunger by 5", ()=>{
        const pet = new Pet("Limo");

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    })

    it("decrements the fitness by 3", ()=>{
        const pet = new Pet("Limo");

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    })
    
})

describe("walk", ()=>{
    it("should return pet is not alive if conditions are not satisfied", ()=>{
        const pet = new Pet("dally");

        pet.fitness = -1;


        expect(() =>{pet.checkUp()}).toThrow("Your pet is no longer alive :(");
    })

    it("should increment fitness by 4 and not exceed 10",()=>{
        const pet = new Pet("Fido");

        pet.fitness = 9;

        pet.walk();

        expect(pet.fitness).toEqual(10);
    })

    it("should increment fitness by 4", ()=>{
        const pet = new Pet("Fido");

        pet.fitness = 2;
        
        pet.walk();

        expect(pet.fitness).toEqual(6);
    })
})

describe("feed", ()=>{
    it("should return pet is not alive if conditions are not satisfied", ()=>{
        const pet = new Pet("dally");

        pet.hunger = 11;


        expect(() =>{pet.checkUp()}).toThrow("Your pet is no longer alive :(");
    })
    it("should decrement hunger by 3 and not go below 0",()=>{
        const pet = new Pet("Fido");

        pet.hunger = 2;

        pet.feed();

        expect(pet.hunger).toEqual(0);
    })

    it("should decrement hunger by 3", ()=>{
        const pet = new Pet("Fido");

        pet.hunger = 5;
        
        pet.feed();

        expect(pet.hunger).toEqual(2);
    })
})

describe("checkUp", ()=>{
    it("should return walk if pets fitness is 3 or less", ()=>{
        const pet = new Pet("dally");

        pet.hunger = 3;
        pet.fitness = 3;

        expect(pet.checkUp()).toEqual("I need a walk");
    })
    it("should return hungry if pets hunger is 5 or more", ()=>{
        const pet = new Pet("dally");
        
        pet.fitness = 6;
        pet.hunger = 6;

        expect(pet.checkUp()).toEqual("I am hungry");
    })
    it("should return hungry and walk if fitness <= 3 and hunger >= 5", ()=>{
        const pet = new Pet("dally");

        pet.hunger = 6;
        pet.fitness = 2;

        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    })

    it("should return great if fitness > 3 and hunger < 5", ()=>{
        const pet = new Pet("dally");

        pet.hunger = 4;
        pet.fitness = 5;

        expect(pet.checkUp()).toEqual("I feel great!");
    })

    it("should return pet is not alive if conditions are not satisfied", ()=>{
        const pet = new Pet("dally");

        pet.hunger = 11;


        expect(() =>{pet.checkUp()}).toThrow("Your pet is no longer alive :(");
    })


})

describe("isAlive", ()=>{
    it("returns false if fitness is 0 or less", ()=>{
        const pet = new Pet("dally");
        
        pet.fitness = -3;

        expect(pet.isAlive).toBe(false)
    })
    it("returns false if hunger is 10 or more", ()=>{
        const pet = new Pet("dally");
        
        pet.hunger = 12;

        expect(pet.isAlive).toBe(false)
    })
    it("returns false if age is 30 or more", ()=>{
        const pet = new Pet("dally");
        
        pet.age = 30;

        expect(pet.isAlive).toBe(false)
    })
    it("returns true otherwise", ()=>{
        const pet = new Pet("dally");
        
        pet.fitness = 5;
        pet.hunger = 5;
        pet.age = 5;

        expect(pet.isAlive).toBe(true)
    })
})

describe("haveBaby", ()=>{
    it("should add a baby named dilly in children array", ()=>{
        const pet = new Pet("dally");
        pet.haveBaby("dilly");
        
        expect(pet.children).toBeInstanceOf(Array);
        
        expect(pet.children[0].name).toBe("dilly")

    })
})

