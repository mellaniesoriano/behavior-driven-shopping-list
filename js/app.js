/* jshint esversion: 6 */

var newList = new ShoppingList();
var renderList = newList.render();

var mainContent = document.querySelector('#content');
mainContent.innerHTML = renderList;

function add_to_shopping_list() {
  var title = document.querySelector('#itemTitle').value;
  var description = document.querySelector('#description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);
  newList.addItem(new_shopping_list_item);
  renderList = newList.render();
  mainContent.innerHTML = renderList;
  document.querySelector('#itemTitle').value = "";
  document.querySelector('#description').value = "";
}