describe("Domain", function(){
  it("saves products", function(){
    DOMAIN.saveProduct('dumb product');
    expect(DOMAIN.products.hasOwnProperty('dumb product')).toBeTruthy();
  });
});