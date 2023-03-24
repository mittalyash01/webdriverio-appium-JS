
class ProductOnesieScreen {
  get onesieTitle() {
    return $('//*[@text="Sauce Labs Onesie" or @label="Sauce Labs Onesie"]');
  }
}

module.exports = new ProductOnesieScreen();
