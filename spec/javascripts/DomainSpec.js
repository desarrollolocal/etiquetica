describe("Domain", function(){

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });
  
  xit("saves products", function() {
    DOMAIN.saveProduct('dumb product');
    var products = DOMAIN.products();
    expect(products[0]).toHaveOwnProperty('dumb product');
  });

});