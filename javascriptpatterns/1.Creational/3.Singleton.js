// https://www.dofactory.com/javascript/design-patterns/singleton
var Singleton = (function () {
  var instance;

  function createInstance() {
      var object = new Object("I am the instance");
      return object;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();

function run() {

  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  console.log("Same instance? " + (instance1 === instance2));
}


// Using class 
// https://www.freecodecamp.org/news/singleton-design-pattern-with-javascript/#:~:text=Singleton%20is%20a%20design%20pattern,want%20to%20access%20this%20state.
let instance;
let globalState = {
  color: ""
};

class StateUtility {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }

    instance = this;
  }

  getPropertyByName(propertyName) {
    return globalState[propertyName];
  }

  setPropertyValue(propertyName, propertyValue) {
    globalState[propertyName] = propertyValue;
  }
}

let stateUtilityInstance = Object.freeze(new StateUtility());

export default stateUtilityInstance;