class ProductListScreen {
  get productList() {
    return $('//*[@content-desc="test-PRODUCTS" or @name="test-PRODUCTS"]');
  }
  get menuButton() {
    return $('//*[@content-desc="test-Menu" or @name="test-Menu"]');
  }
  get onesieShirt() {
    return $('//*[@text="Sauce Labs Onesie" or @label="Sauce Labs Onesie"]');
  }


}

module.exports = new ProductListScreen();
