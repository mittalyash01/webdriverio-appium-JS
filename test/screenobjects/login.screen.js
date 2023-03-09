
class LoginScreen {
  get usernameField() {
    return $('//*[@content-desc="test-Username" or @name="test-Username"]');
  }
  get passwordField() {
    return $('//*[@content-desc="test-Password" or @name="test-Password"]');
  }
  get loginButton() {
    return $('//*[@content-desc="test-LOGIN" or @name="test-LOGIN"]');
  }
  get errorMessage() {
    return $('//*[@content-desc="test-Error message" or @name="test-Error message"]/child::*[1]');
  }
}

module.exports = new LoginScreen();
