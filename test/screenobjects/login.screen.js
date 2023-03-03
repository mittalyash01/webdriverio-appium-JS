
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
}

module.exports = new LoginScreen();
