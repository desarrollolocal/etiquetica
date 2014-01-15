describe("Domain", function(){
  
  it("saves products", function(){
    DOMAIN.saveProduct('dumb product');
    expect(DOMAIN._products.hasOwnProperty('dumb product')).toBeTruthy();
  });

});