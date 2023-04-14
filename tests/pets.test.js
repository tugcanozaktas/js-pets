const Pet = require("../pets")

const dog = new Pet("pamuk", 1, 8, 6);

describe("Pet Information", () =>{

    

    it("should return the name of the pet", () => {

        expect(dog.name).toEqual("pamuk");
    })

    it("should return the age of the pet", () => {

        expect(dog.age).toEqual(1);
    })


})

describe("Ages the dog", () =>{
    
    it("should increase dog's age by 1", ()=>{
        dog.incrementAge();
        expect(dog.age).toEqual(2);
        
    });

    it("should decrease dog's fitness by 1", ()=>{
    
        expect(dog.fitness).toEqual(5);
    });
    it("should increase dog's hunger by 1", ()=>{

        expect(dog.hunger).toEqual(9);
    });
});


describe("Treats the pet", ()=>{
    it("should decrease hunger by 1", ()=>{
        dog.feed();
        expect(dog.hunger).toEqual(8);
    });

    it("should increase fitness by 1", ()=>{
        dog.walk();
        expect(dog.fitness).toEqual(6);
    });

    it("should increase the happiness when loved", ()=>{
        dog.showLove()
        expect(dog.happiness).toEqual(1);
    })
});


describe("Talks to the pet", ()=>{
    
    
    it("should return that pet needs food", ()=>{
        dog.hunger = 11;
        dog.fitness = 5;
        expect(dog.talk()).toEqual("I need food!!!")
    });

    it("should return that pet needs walk", ()=>{
        dog.hunger = 2;
        dog.fitness = 11;
        expect(dog.talk()).toEqual("I need to walk!!!")
    });

});

describe("Checks status of dog", ()=>{
    it("should kill the pet if age is 30", ()=>{
        dog.fitness = 10;
        dog.hunger = 14;
        dog.age = 30;
        expect(dog.isAlive()).toEqual(false);
    });

    it("should kill the pet if hunger is bigger than 15", ()=>{
        dog.age = 2;
        dog.fitness = 10;
        dog.hunger = 16;
        expect(dog.isAlive()).toEqual(false);
        
    });

    it("should kill the pet if fitness is less than 0", ()=>{
        dog.age = 2;
        dog.hunger = 5;
        dog.fitness = -1;
        expect(dog.isAlive()).toEqual(false);
    });
});