describe("App", function() {

    var html2test='<div id="html2test" style="visibility:hidden"></div>';
    var productName;
    var input = '<input id="product-name" type="text"></input>';
    var validInput = 'moreThanThreeLetters';

    var domain = {getProducts: function() {return [{name : "Dumb Product"}, {name : "Dumber Product"}]},
                  saveProduct : function(productName, callback) {callback()}};

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

        xit("it is saved in the product list", function(){
            productName.val(validInput);
            spyOn(domain, 'saveProduct');
            EQ.processProductName();
            expect(domain.saveProduct).toHaveBeenCalledWith(validInput, EQ.showSuccess); 
        });
    });

    describe("when listing products", function(){
        
        beforeEach(function() {
            jasmine.addMatchers(customMatchers);
        });

        xit("contains all saved products", function(){
            var productsListDOM = '<ul class="list-group">';
            var productLine = '<li class="list-group-item"></li>'

            var products = domain.getProducts();

            expect(products[0]).toHaveOwnProperty(validInput);
            expect(products[1]).toHaveOwnProperty("Huerto urbano");
        });
    });

    afterEach(function(){
        $('div.alert-warning').remove();
        $('#html2test').remove();
    });
});