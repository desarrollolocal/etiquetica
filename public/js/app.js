
var EQ={};
EQ.ERRORS={};
EQ.ERRORS.SHORT='Demasiado corto';
EQ.MINIMUMLENGTH=3;
EQ.HTML={};
EQ.HTML.ALERT='<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button></div>';

EQ.initialize= function(){
    EQ._productName().on('change', EQ.processProductName);
};

EQ.processProductName= function(){
    var isValid = EQ.checkLength(EQ._productName());
    if (!isValid) EQ._showError(EQ.ERRORS.SHORT);
    return isValid;
};

EQ.checkLength= function (target){ 
    return target.val() && (target.val().length > EQ.MINIMUMLENGTH);
};

EQ._showError= function (text) {
    var alert=$(EQ.HTML.ALERT);
    alert.html(text + alert.html());
    $('body').append(alert);    
};

EQ._productName=function(){
    return $('#product-name');
};

$( document ).ready(function() {
    EQ.initialize();
});
