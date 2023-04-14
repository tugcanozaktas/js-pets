const Pet = require("../pets")



describe("Creates Pet", () =>{

    const dog = new Pet("pamuk", 2)

    it("should return the name of the pet", () => {

        expect(dog.name).toEqual("pamuk");
    })

    it("should return the age of the pet", () => {

        expect(dog.age).toEqual(2);
    })


})

describe("Ages the dog", () =>{
    it("should increase dog's age by 1", ()=>{
        
    })
})