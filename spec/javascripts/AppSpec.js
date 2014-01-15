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
            spyOn(EQ, '_showMessage');
            
            productName.val(validInput);
            EQ.processProductName();
            expect(EQ._showMessage).toHaveBeenCalledWith(EQ.MESSAGES.SUCCESS, 'success');

            productName.val('ltt');
            EQ.processProductName();
            expect(EQ._showMessage).toHaveBeenCalledWith(EQ.ERRORS.SHORT, 'danger');
        });

        it("rejects empty field", function() {
            productName.val('');
            expect(EQ.processProductName()).toBeFalsy();
        });
    });

    describe("when product name is valid", function(){
        it("it is saved in the product list", function(){
            productName = $('#product-name');
            productName.val(validInput);
            spyOn(DOMAIN, 'saveProduct');
            EQ.processProductName();
            expect(DOMAIN.saveProduct).toHaveBeenCalledWith(validInput, EQ._showMessage); 
        });
    });

    afterEach(function(){
        $('div.alert-warning').remove();
        $('#html2test').remove();
    });
});