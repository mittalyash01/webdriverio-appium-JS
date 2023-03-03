class ProductListScreen {
  get productList() {
    return $('//*[@content-desc="test-PRODUCTS" or @name="test-PRODUCTS"]');
  }
  get menuButton() {
    return $('//*[@content-desc="test-Menu" or @name="test-Menu"]');
  }
}

module.exports = new ProductListScreen();
