
class ErrorMessageScreen {
  get errorMessage() {
    return $('//*[@content-desc="test-Error message" or @name="test-Error message"]');
  }
}

module.exports = new ErrorMessageScreen();
