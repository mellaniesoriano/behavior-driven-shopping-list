/* jshint esversion: 6 */
var ShoppingListItem = require('../js/shopping_list_item.js');

class ShoppingList {
  constructor(items){
    this.items = [];
  }

  addItem(item){
    if(item instanceof ShoppingListItem){
      this.items.push(item);
      return this.items;
    } else {
      throw new Error("Error");
    }
  }

  removeItem(item){
    var removeList = this.items.indexOf(item);

    if(removeList !== -1){
      this.items.splice(removeList, 1);
      return this.items;
    }else if(item === undefined){
      this.items.pop();
      return this.items;
    }else{
      throw new Error("Error");
    }
  }

};

module.exports = ShoppingList;