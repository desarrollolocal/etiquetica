var EQ = {};

EQ.NAME_MINIMUM_LENGTH = 3;

EQ.addProduct = function() {
    var isValid = EQ.checkLength(EQ._productName(), EQ.NAME_MINIMUM_LENGTH);
    if (isValid) {
        domain.saveProduct(EQ._productName().val(), EQ.showSuccess);
    } else {
        EQ.showError(EQ.MESSAGES.ERROR_SHORT);
    }
};

EQ.showProducts = function() {
    domain.getProducts(EQ._fillProductsView);
};

EQ._fillProductsView = function(products){
    var $productsSection = $('#products-list ul');
    $productsSection.html('');
    if (EQ._isEmpty(products)) { $productsSection.html(EQ.MESSAGES.NO_PRODUCTS); }
    EQ._addProductsToPage(products);  
}

EQ._addProductsToPage = function(products) {
    $.each(products, function(index, val) {
        var name = products[index].name;
        var uri = EQ._nameToURI(name);
        var indicators = products[index].indicators;
        var date = new Date(products[index].creation_date);
        var spanishDate = EQ._toSpanishDate(date);

        $('#products-list ul').append('<li class="list-group-item clearfix"><a href="' + uri + '"></a></li>');
        $('#products-list ul li a:last').text(products[index].name);
        $('#products-list ul li:last').append('<span class="creation-date">' + spanishDate + '</span>');
        $('#products-list ul li:last').append('<aside class="indicators">' + indicators[0].name + '</aside>');
        $('.indicators:last').append('<div class="indicator ' + indicators[0].state + '"></div>');
    });
};

EQ._nameToURI = function(name) {
    return name.split(' ').join('-');
}

EQ._productName = function(){
    return $('#product-name');
};

EQ._isEmpty = function(products) {
    return products.length == 0;
};

EQ._productList = function(){
    return $('#list-button');
};

EQ.initialize = function(){
    EQ._productName().on('change', EQ.addProduct);
    EQ._productList().on('click', EQ.showProducts);
};

$( document ).ready(function() {
    EQ.initialize();
    $(document).on('click', '#list-button', EQ.showProducts);

});