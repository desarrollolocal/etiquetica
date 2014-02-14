(function(global) {

var _saveProduct = function (productName, callback) {
  $.ajax({
    url: '/',
    type: 'POST',
    dataType: 'json',
    data: {name: productName},
    async: false,
    success: callback
  });
  
  if (typeof callback == 'function') {
    callback(EQ.MESSAGES.SUCCESS, 'success');
  }
};

var _getProducts = function() {
  var query = $.ajax({
    url: '/products',
    dataType: 'json',
    async: false,
    success: function(data, textStatus, xhr) {
      return data;
    }
  });

  return query.responseText;
};

  global.domain = {
    saveProduct : _saveProduct,
    getProducts : _getProducts
  };

}(this));