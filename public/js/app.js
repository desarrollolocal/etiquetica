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

EQ.showProducts = function() {
    var products = DOMAIN.products();
    $(document).on('click', '#list-button', EQ._addProductsToPage(products));
};

EQ._addProductsToPage = function(products) {
    var $productsSection = $('#products-list ul');
    $productsSection.html('');
    if(EQ._isEmpty(products)) {
        $productsSection.text('No hay ningún producto');
    }

    $.each(products, function(index, val) {
        $productsSection.append('<li></li>');
        $('#products-list ul li:last').text(index);
    });
};

EQ._productName = function(){
    return $('#product-name');
};

EQ._isEmpty = function(object) {
    return Object.getOwnPropertyNames(object).length == 0;
};

EQ._productList = function(){
    return $('#list-button');
};

EQ.initialize = function(){
    EQ._productName().on('change', EQ.processProductName);
    EQ._productList().on('click', EQ.showProducts);
};

$( document ).ready(function() {
    EQ.initialize();
});