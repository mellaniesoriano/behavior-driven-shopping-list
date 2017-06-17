var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');
var ShoppingList = require('../js/shopping_list.js');

var shoppingListItem = ShoppingListItem;
var goji;

describe('ShoppingListItem class', function() {
  it('should be a function', function() {
    expect(shoppingListItem).to.be.a('function');
  });

  it('should have a property name', function() {
    goji = new shoppingListItem('name');
    expect(goji.name).to.equal('name');
  });

  it('should have a property description', function() {
    goji = new shoppingListItem('name', 'description');
    expect(goji.description).to.equal('description');
  });

  it('should have a property isDone', function() {
    goji = new shoppingListItem('name', 'description', 'isDone');
    expect(goji.isDone).to.equal('isDone');
  });

  describe('check() method', function() {
    it('should have a method named checked and set isDone should equal true', function() {
      expect(goji.check).to.be.a('function');
      expect(goji.check()).to.equal(true);
    });
  });

  describe('unCheck() method', function() {
    it('should have a method named unCheck and set isDone should equal false', function() {
      expect(goji.unCheck).to.be.a('function');
      expect(goji.unCheck()).to.equal(false);
    });
  });

  describe('render() method', function(){
    it('should have a method name render and set a set HTML formatted string', function() {
      expect(goji.render).to.be.a('function');
      expect(goji.render()).to.be.a('string');
    });
  });//ending shoppinglistitem

  describe('ShoppingList Class', function() {
    var shoppingList = ShoppingList;
    var myShoppingList;
    var cereal;

    beforeEach(function() {
      myShoppingList = new ShoppingList();
      cereal = new ShoppingListItem("cereal", "coco puffs")
    });

    it('should be a function', function() {
      expect(ShoppingList.should.be.a('function'));
    });

    it('should have a property name items', function() {
      expect(myShoppingList).to.have.property('items');
    });

    it('items property should be a empty array', function(){
      expect(myShoppingList.items).to.be.a('array');
    });

    describe('addItem() method', function () {
      it('should have a method name addItem and has a argument', function() {
        expect(myShoppingList.addItem).to.be.a('function')
      });

      it('should add a object to the items array', function () {
        myShoppingList.addItem(cereal).should.contain(cereal);
      });

    });



  });//ending shoppinglist
});//the end

