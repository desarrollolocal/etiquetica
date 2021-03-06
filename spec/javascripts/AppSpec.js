describe("App", function() {

    var html2test='<div id="html2test" style="visibility:hidden"></div>';
    var productName;
    var input = '<input id="product-name" type="text"></input>';
    var validInput = 'moreThanThreeLetters';

    beforeEach(function(){
        $('body').append(html2test);
        $('#html2test').append(input);
        productName = $('#product-name');
    });
    
    describe("when validating product name", function() {
             
        it("requires proper length", function() {
            spyOn(EQ, 'showError');
            productName.val('ltt');
            EQ.addProduct();
            expect(EQ.showError).toHaveBeenCalledWith(EQ.MESSAGES.ERROR_SHORT);
        });

        it("rejects empty field", function() {
            spyOn(EQ, 'showError');
            productName.val('');
            EQ.addProduct();
            expect(EQ.showError).toHaveBeenCalledWith(EQ.MESSAGES.ERROR_SHORT);
        });
    });

    describe("when product name is valid", function(){

        it("it is saved in the product list", function(){
            spyOn(domain, 'saveProduct');
            productName.val(validInput);
            EQ.addProduct();
            expect(domain.saveProduct).toHaveBeenCalledWith(validInput, EQ.showSuccess); 
        });
    });

    describe("when listing products", function(){
        
        beforeEach(function() {
            jasmine.addMatchers(customMatchers);
        });

        it("contains all saved products", function(){
            spyOn(domain, 'getProducts').and.returnValue({"name": validInput});
            var productsListDOM = '<ul class="list-group">';
            var productLine = '<li class="list-group-item"></li>';

            EQ.showProducts();
            expect(domain.getProducts).toHaveBeenCalled();
        });
    });

    afterEach(function(){
        $('div.alert-warning').remove();
        $('#html2test').remove();
    });
});