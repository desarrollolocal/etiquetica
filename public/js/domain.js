DOMAIN = {};
DOMAIN.products = {};

DOMAIN.saveProduct = function (productName, callback) {
  DOMAIN.products[productName] = {};
  if (typeof callback == 'function') {
    callback(EQ.MESSAGES.SUCCESS, 'success');
  }
}