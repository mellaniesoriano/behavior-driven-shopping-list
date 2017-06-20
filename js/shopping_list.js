/* jshint esversion: 6 */
// var myShoppingListStuff = require('../js/shopping_list_item.js');
// console.log(myShoppingListStuff);

class ShoppingList {
  constructor(items){
    this.items = [];
  }

  addItem(item){
    if(item instanceof ShoppingListItem){
      this.items.push(item);
      return this.items;
    } else {
      throw new Error("ERROR");
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
      throw new Error("ERROR");
    }
  }

  render(){
    var createList = '';
    for(var i = 0; i < this.items.length; i ++){
      createList += this.items[i].render();
    }
    return `<ul>${createList}</ul>`;
  }
}

// module.exports = ShoppingList;
