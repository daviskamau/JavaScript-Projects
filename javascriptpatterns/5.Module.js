// file lib/module.js

class ShopingCart {
    constructor(){
        // private property
        this.shoppingList = ['pizza', 'chocolate', 'coffee'];
    }
    // public methods
    getList(){
        return this.shoppingList.join(', ');
    }
    addItem(item){
        this.shoppingList.push(item)
    }
}



// use in other file like 
import ShopingCart from 'lib/module.js';

let s = new ShopingCart();
s.addItem('milk');
s.getList();

// it is used for keeping particular pieces of code independent from other parts