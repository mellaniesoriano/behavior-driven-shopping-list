/* jshint esversion: 6 */

class ShoppingListItem {
  constructor(name, description, isDone) {
    this.name = name;
    this.description = description;
    this.isDone = isDone;
  }

  check() {
    return this.isDone = true;
  }

  unCheck() {
    return this.isDone = false;
  }

  render() {
    return `<li class=completed_${this.isDone}><span>${this.name}</span> <span>${this.description}</span></li>`;
  }
}

// module.exports = ShoppingListItem;