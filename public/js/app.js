
var EQ = {};

EQ.ERRORS = {};
EQ.ERRORS.SHORT = 'Demasiado corto';
EQ.MESSAGES = {};
EQ.MESSAGES.SUCCESS = 'Producto guardado con éxito';
EQ.MINIMUMLENGTH = 3;
EQ.HTML = {};
EQ.HTML.ALERT = '<div class="alert alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button></div>';

EQ.initialize = function(){
    EQ._productName().on('change', EQ.processProductName);
};

EQ.processProductName = function(){
    var isValid = EQ.checkLength(EQ._productName());
    if (isValid) {
        EQ._showMessage(EQ.MESSAGES.SUCCESS, 'success');
        DOMAIN.saveProduct(EQ._productName().val());
    } else {
        EQ._showMessage(EQ.ERRORS.SHORT, 'danger');
    }
};

EQ.checkLength = function (target){ 
    return target.val() && (target.val().length > EQ.MINIMUMLENGTH);
};

EQ._showMessage = function(text, alertType) {
    var alert = $(EQ.HTML.ALERT);
    alert.addClass('alert-' + alertType);
    alert.html(text + alert.html());
    $('body').append(alert);   
};

EQ._productName = function(){
    return $('#product-name');
};

$( document ).ready(function() {
    EQ.initialize();
});
