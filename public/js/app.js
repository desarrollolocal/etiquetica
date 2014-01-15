
var EQ = {};

EQ.NAME_MINIMUM_LENGTH = 3;

EQ.processProductName = function() {
    var isValid = EQ.checkLength(EQ._productName(),EQ.NAME_MINIMUM_LENGTH);
    if (isValid) {
        DOMAIN.saveProduct(EQ._productName().val(), EQ.showSuccess);
    } else {
        EQ.showError(EQ.MESSAGES.ERROR_SHORT);
    }
};

EQ._productName = function(){
    return $('#product-name');
};

EQ.initialize = function(){
    EQ._productName().on('change', EQ.processProductName);
};

$( document ).ready(function() {
    EQ.initialize();
});



