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
    $(document).on('click', '#list-button', EQ._addProductsToPage);
    $.ajax({
      dataType: "json",
      url: '/products',
      async: false,
      success: function(products) {
         var $productsSection = $('#products-list ul');
         $productsSection.html('');
         if(EQ._isEmpty(products)) {
            $productsSection.text(EQ.MESSAGES.NO_PRODUCTS);
        }

        EQ._addProductsToPage(products);
        $.each(products, function(index, val) {
            var name = products[index].name;
            var uri = EQ._nameToURI(name);
            $productsSection.append('<li class="list-group-item"><a href="' + uri + '"></a></li>');
            $('#products-list ul li a:last').text(products[index].name);
            $('#products-list ul li').append(products[index].creation_date);

        });
        }
    });
};

EQ._addProductsToPage = function(products) {


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
    EQ._productName().on('change', EQ.processProductName);
    EQ._productList().on('click', EQ.showProducts);
};

$( document ).ready(function() {
    EQ.initialize();
});