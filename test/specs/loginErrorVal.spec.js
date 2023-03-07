const ErrorMessageScreen = require("../screenobjects/error-message.screen");
const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");

describe('Login', () => {

  afterEach(async function() {
    await ProductListScreen.menuButton.click();
    await SidePanelScreen.logOutButton.click();
    await expect(LoginScreen.usernameField && LoginScreen.passwordField).toBeDisplayed();
  });

  it('LOGIN_valid_user', async () => {
    await LoginScreen.usernameField.setValue("locked_out_user");
    await LoginScreen.passwordField.setValue("secret_sauce");
    await LoginScreen.loginButton.click();
    await expect(ErrorMessageScreen.errorMessage).toBeDisplayed();
    await new Promise(f => setTimeout(f, 2000));
  });
});