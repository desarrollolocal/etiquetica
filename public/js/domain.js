DOMAIN = {};
DOMAIN._products = {};

DOMAIN.saveProduct = function (productName, callback) {
  $.ajax({
    url: '/new',
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

DOMAIN.getProducts = function () {
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

DOMAIN.products = function() {
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