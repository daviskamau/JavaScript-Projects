// ==> craete object by 

let instance1 = {};
// or
let instance2 = Object.create(Object.prototype);
// or
let instance3 = new Object();


// ==> add properties:

// The . notation
instance.key = 'value';

// brackets notation
instance['key'] = 'value';

// defining a property with Object.defineProperty
Object.defineProperty(instance, 'key', {
    value: 'value',
    writable: true,
    enumerable: true,
    configurable: true
});

// defining multiple properties with Object.defineProperties
Object.defineProperties(instance, {
    'firstKey': {
        value: 'first key value',
        writable: true
    },
    'secondKey': {
        value: 'second key value',
        writable: false
    }
});


// ==> create a class with constructor and prototype(with shared methods)

// We define a constructor for Person
function Person(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;
}

// Then we extend the prototype, this way we make JavaScript
// point to this function when we call it on a Person
Person.prototype.writesCode = function () {
    console.log(this.isDeveloper ? 'this person writes code' : 'this person does not writes code')
}


// Create a person with: name = Ana, age = 32,
// isDeveloper = true and a method writesCode
let person1 = new Person('Ana', 32, true);

// Create a person with: name = Bob, age = 36,
// isDeveloper = false and a method writesCode
let person2 = new Person('Bob', 36);

// prints this person writes code
person1.writesCode();
// prints this person does not writes code
person2.writesCode();