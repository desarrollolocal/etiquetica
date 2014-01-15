DOMAIN = {};
DOMAIN._products = {};

DOMAIN.saveProduct = function (productName, callback) {
  DOMAIN._products[productName] = {};
  if (typeof callback == 'function') {
    callback(EQ.MESSAGES.SUCCESS, 'success');
  }
};

DOMAIN.products = function() {
  return this._products;
};