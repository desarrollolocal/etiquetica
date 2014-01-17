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
    var $productsSection = $('#products-list ul');
    $productsSection.html('');
    $(document).on('click', '#list-button', EQ._addProductsToPage(products, $productsSection));
};

EQ._addProductsToPage = function(products, productsSection) {
    if(Object.getOwnPropertyNames(products).length == 0) {
        productsSection.text('No hay ningún producto');
    }

    $.each(products, function(index, val) {
        productsSection.append('<li></li>');
        $('#products-list ul li:last').text(index);
    });
};

EQ._productName = function(){
    return $('#product-name');
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