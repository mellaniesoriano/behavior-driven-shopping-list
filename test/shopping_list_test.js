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
      expect(goji.render()).to.equal(`<li class=completed_${goji.isDone}><span>${goji.name}</span> <span>${goji.description}</span></li>`);
    });
  });//ending shoppinglistitem

  describe('ShoppingList Class', function() {
    var shoppingList = ShoppingList;
    var myShoppingList;

    beforeEach(function() {
      myShoppingList = new ShoppingList();
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

      it('should have a instance of ShoppingListItem', function () {
        var cereal = new shoppingListItem("Coco Puffs");
        myShoppingList.addItem(cereal);
        expect(cereal instanceof ShoppingListItem).to.equal(true);
      });

      it('should throw error if item does not take an argument', function () {
        expect(myShoppingList.addItem).to.throw('ERROR');
      });

    });

    describe('removeItem() method', function() {
      it('should have a method name removeItem and have a single ShoppingListItem argument', function() {
        expect(myShoppingList.removeItem).to.be.a('function')
      });

      it('should remove the object from the ShoppingList', function() {
        var cereal = new ShoppingListItem("Coco Puffs");
        myShoppingList.addItem(cereal)
        myShoppingList.removeItem(cereal)
        expect(myShoppingList.items).to.not.include(cereal)
      });

      it('should remove the last item in the ShoppingList if there are no parameters', function() {
        var cereal = new ShoppingListItem("Coco Puffs");
        myShoppingList.addItem(cereal)
        function removeItem(){
          expect(undefined).to.be.arguments
        }
      });

      it('should throw error if item is not an instanceof ShoppingListItem', function () {
        expect(myShoppingList.addItem).to.throw('ERROR');
      });
    });

    describe('render() method', function() {
      it('should have a method name render', function() {
        expect(myShoppingList.render).to.be.a('function')
      });

      it('should concatenate each items in the array', function() {
        var cereal = new ShoppingListItem("Coco Puffs");
        var milk = new ShoppingListItem("low fat milk")
        myShoppingList.addItem(cereal);
        myShoppingList.addItem(milk);
        expect(cereal.items & milk.items).to.be.nested
      });

      it('should return an HTML formatted string wrapped in a <ul> tags', function(){
        var cereal = new ShoppingListItem("Coco Puffs");
        var milk = new ShoppingListItem("low fat milk");
        expect(myShoppingList.render()).to.be.a('string');
        expect(myShoppingList.render()).to.equal(`<ul></ul>`)
      })
    });




  });//ending shoppinglist
});//the end

