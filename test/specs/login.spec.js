const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");

describe('Login', () => {

  it('LOGIN_valid_user', async () => {
    await LoginScreen.usernameField.setValue("standard_user");
    await LoginScreen.passwordField.setValue("secret_sauce");
    await LoginScreen.loginButton.click();
    await expect(ProductListScreen.productList).toBeDisplayed();
    await new Promise(f => setTimeout(f, 2000));

    await ProductListScreen.menuButton.click();
    await SidePanelScreen.logOutButton.click();
    await expect(LoginScreen.usernameField && LoginScreen.passwordField).toBeDisplayed();
  });

  it('LOGIN_locked_out_user', async () => {
    await LoginScreen.usernameField.setValue("locked_out_user");
    await LoginScreen.passwordField.setValue("secret_sauce");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.errorMessage).toBeDisplayed();
    await expect(LoginScreen.errorMessage).toHaveText('Sorry, this user has been locked out.');
    await new Promise(f => setTimeout(f, 2000));
  });
});
