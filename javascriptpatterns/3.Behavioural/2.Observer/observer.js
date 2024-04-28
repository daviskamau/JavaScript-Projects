const Subject = function () {
    this.observers = [];

    return {
        addObserver: function (observer) {
            this.observers.push(observer);
        },
        removeObserver: function (observer) {
            var index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers.splice(index, 1);
            }
        },
        notifyObserver: function (observer) {
            var index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers[index].update(index);
            }
        },
        notifyAllObservers: function () {
            for (var i = 0; i < this.observers.length; i++) {
                this.observers[i].update(i);
            };
        }
    };
};

var Observer = function () {
    return {
        update: function (index) {
            console.log("Observer " + index + " is notified!");
        }
    }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);
subject.addObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!