
EQ.checkLength = function (target,maxLength){ 
    return target.val() && (target.val().length > maxLength);
};

EQ.showSuccess = function(text) {
    EQ._showMessage(text,'success');
};

EQ.showError = function(text) {
    EQ._showMessage(text,'danger');   
};

EQ._showMessage = function(text, alertType) {
    var alert = $(EQ.HTML.ALERT);
    alert.addClass('alert-' + alertType);
    alert.html(text + alert.html());
    $('.container').append(alert);   
};