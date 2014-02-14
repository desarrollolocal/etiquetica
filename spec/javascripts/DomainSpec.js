describe("Domain", function(){

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });
  
  xit("saves products", function() {
    domain.saveProduct('dumb product');
    var products = domain.getProducts();
    expect(products[0]).toHaveOwnProperty('dumb product');
  });

});