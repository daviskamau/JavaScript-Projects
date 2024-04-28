// In the observer pattern, the source of data itself (the Subject) knows who all are its observers. 
// So, there is no intermediate broker between Subject and Observers. Whereas in pub-sub, the publishers and
//  subscribers are loosely coupled, they are unaware of even the existence of each other
class PubSub {
    constructor() {
        this.observers = {};
    }
    // add the observer to listener
    subscribe = (event, cb) => {
        if (this.observers[event]) {
            this.observers[event] = [...this.observers[event], cb];
        }
        else this.observers[event] = [cb];
    }

    // remove the observer
    unsubscribe = (event) => {
        let { [event]: a, ...rest } = this.observers;
        this.observers = rest;
    }

    publish = (event, ...data) => {
        this.observers[event]?.forEach(listener => {
            listener.apply(this, data);
        })
    }
}

const pubSub = new PubSub();

pubSub.subscribe("event1", (data) => {
    console.log("First sub : Event1 data", data);
});
pubSub.subscribe("event1", (data) => {
    console.log("Second Sub : Event1 data", data);
});

pubSub.subscribe("event2", (data) => {
    console.log("Event2 data", data);
});
pubSub.publish("event1", { name: "IV1" });
pubSub.publish("event2", { name: "IV2" });
pubSub.unsubscribe("event1");
pubSub.publish("event1", { name: "IV23" });


// OUTPUT

// First sub : Event1 data 
// {name: "IV1"}
// Second Sub : Event1 data 
// {name: "IV1"}
// Event2 data 
// {name: "IV2"}


// Observer                           |  PUb SUb
// ----------------                     --------
// synchronous                        |    async
// subject knows its observers        |   subscriber and publisher dont know about each others existance
