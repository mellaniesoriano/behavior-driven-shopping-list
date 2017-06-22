/* jshint esversion: 6 */

var uniqueID = 0;

class ShoppingListItem {
  constructor(name, description, isDone) {
    this.name = name;
    this.description = description;
    this.is_done =  false;
    this._idx = "ShoppingListItem" + uniqueID++;
  }

  check() {
    return this.isDone = true;
  }

  unCheck() {
    return this.isDone = false;
  }

  render(idx, checkbox) {
    return `<li class="completed_${this.is_done}" id="${this._idx}"><span>${this.name}</span> <span>${this.description}</span><input type="checkbox" onchange="changeCheckedStatus('${this._idx}', this)"> <button onclick="removeItemButtonClicked('${this._idx}')">x</button></li>`;
  }
}

// module.exports = ShoppingListItem;