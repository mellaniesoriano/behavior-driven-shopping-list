/* jshint esversion: 6 */

var newList = new ShoppingList();
var renderList = newList.render();

var mainContent = document.querySelector('#content');
mainContent.innerHtml = renderList;

function addToShoppingList() {
  var itemName = document.querySelector('#itemName').value;
  var description = document.querySelector('#description').value;
  var newListItem = new ShoppingListItem(itemName, description);
  newList.addItem(newListItem);
  renderList = newList.render();
  mainContent.innerHTML = renderList;
  document.querySelector('#itemName').value = "";
  document.querySelector('#description').value = "";
}