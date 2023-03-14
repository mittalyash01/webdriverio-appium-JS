
class ProductOnesieScreen {
  get onesieTitle() {
    return $('//*[@content-desc="Sauce Labs Onesie" or @name="Sauce Labs Onesie"]');
  }
}

module.exports = new ProductOnesieScreen();
