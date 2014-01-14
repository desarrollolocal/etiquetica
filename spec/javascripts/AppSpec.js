describe("App", function() {

    var html2test='<div id="html2test" style="visibility:hidden"></div>';
    
    describe("when validating product name", function() {
        
        var input='<input id="product-name" type="text"></input>';
        var productName;

        beforeEach(function(){
            $('body').append(html2test);
            $('#html2test').append(input);
            productName=$('#product-name');
        });

        afterEach(function(){
            $('div.alert-warning').remove();
            $('#html2test').remove();
        });
        
        it("requires proper length", function() {
            productName.val('moreThanThree');
            expect(EQ.processProductName()).toBeTruthy();
            productName.val('ltt');
            expect(EQ.processProductName()).toBeFalsy();
        });

        it("rejects empty field", function() {
            productName.val('');
            expect(EQ.processProductName()).toBeFalsy();
        });

    });

});