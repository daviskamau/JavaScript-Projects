// Using a closure we will expose an object
// as part of a public API that manages its
// private parts
let fruitsCollection = (() => {
    // private
    let objects = [];
 
    // public
    return {
        addObject: (object) => {
            objects.push(object);
        },
        removeObject: (object) => {
            let index = objects.indexOf(object);
            if (index >= 0) {
                objects.splice(index, 1);
            }
        },
        getObjects: () => JSON.parse(JSON.stringify(objects))
    };
})(); // notice the execution
 
fruitsCollection.addObject("apple");
fruitsCollection.addObject("orange");
fruitsCollection.addObject("banana");
 
// prints: ["apple", "orange", "banana"]
console.log(fruitsCollection.getObjects());
 
fruitsCollection.removeObject("apple");
 
// prints: ["orange", "banana"]
console.log(fruitsCollection.getObjects());

// The greatest utility of this pattern is to make a clear separation between the public and private parts of an object.