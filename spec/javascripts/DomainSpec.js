describe("Domain", function(){

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });
  
  it("saves products", function(){
    DOMAIN.saveProduct('dumb product');
    expect(DOMAIN.products()).toHaveOwnProperty('dumb product');
  });

});