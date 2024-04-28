// When methods are defined in the constructor itself
// in this case , every object will have its own copy of the method
class TeslaCar {
    constructor(model) {
        this.model = model;
        this.getCarModel = function () { return this.model; };
    }
}
let t = new TeslaCar('ssada')
let h = new TeslaCar('sasad');
t.getCarModel === h.getCarModel
// false


// When methods are defined in prototype
function Car(model){
    this.model = model;
    
}
Car.prototype.getCarModel = function(){return this.model};
let c = new Car('tesla')
let d = new Car('ssdsda')
c.getCarModel === d.getCarModel
// true