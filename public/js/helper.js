
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
    $('.products-aside').append(alert);   
};

EQ._toSpanishDate = function (date){
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var days = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
    var month = months[date.getMonth()];
    var day = days[date.getDay()];
    return date.getDate() + " de " + month + " de " + date.getFullYear();
};
