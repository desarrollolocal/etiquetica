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
            EQ.processProductName();
            expect(EQ.showError).toHaveBeenCalledWith(EQ.MESSAGES.ERROR_SHORT);
        });

        it("rejects empty field", function() {
            spyOn(EQ, 'showError');
            productName.val('');
            EQ.processProductName();
            expect(EQ.showError).toHaveBeenCalledWith(EQ.MESSAGES.ERROR_SHORT);
        });
    });

    describe("when product name is valid", function(){
        it("it is saved in the product list", function(){
            productName = $('#product-name');
            productName.val(validInput);
            spyOn(DOMAIN, 'saveProduct');
            EQ.processProductName();
            expect(DOMAIN.saveProduct).toHaveBeenCalledWith(validInput, EQ.showSuccess); 
        });
    });

    afterEach(function(){
        $('div.alert-warning').remove();
        $('#html2test').remove();
    });
});