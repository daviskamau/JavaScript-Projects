//observerlist collection object
function ObserverList() {
    this.observerlist = [];
  }
  
  ObserverList.prototype.add = function(obj) {
    this.observerlist.push(obj);
  };
  ObserverList.prototype.count = function() {
    return this.observerlist.length;
  };
  ObserverList.prototype.remove = function(index) {
    this.observerlist.splice(index, 1);
  };
  ObserverList.prototype.indexOf = function(obj) {
    for (var i = 0; i < this.observerlist.length; i++) {
      if (this.observerlist[i] === obj) {
        return i;
      }
    }
  };
  ObserverList.prototype.getObj = function(index) {
    return this.observerlist[index];
  };
  //subject interface
  function iSubject() {
    this.Observers = new ObserverList();
  }
  
  iSubject.prototype.addObserver = function(observer) {
    this.Observers.add(observer);
  }
  
  iSubject.prototype.removeObserver = function(observer) {
    this.Observers.remove(this.Observers.indexOf(observer));
  }
  iSubject.prototype.notify = function(ctx) {
    for (var i = 0; i < this.Observers.count(); i += 1) {
      this.Observers.getObj(i).update(ctx);
    }
  }
  
  //observer interface
  function iObserver() {}
  
  iObserver.prototype.update = function(val) {
  }
    //a method that helps stick interface method on concrete obect
  var extend = function(obj, extension) {
    for (var k in extension) {
      obj[k] = extension[k];
    }
  }
  
  extend(subject, new iSubject());
  extend(observer1, new iObserver());
  extend(observer2, new iObserver());
  extend(observer3, new iObserver());
  
  
  subject.addEventListener('keyup', function() {
    this.notify(this.value);
  }, false);
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  subject.addObserver(observer3);
  
  observer1.update = function(val) {
    this.innerHTML = val;
  }
  
  observer2.update = function(val) {
    setTimeout(function() {
      this.innerText = val;
    }.bind(this), 500);
  }
  
  observer3.update = function(val) {
    this.innerText = val;
  }
      
  setTimeout(()=> subject.removeObserver(observer3), 3000)