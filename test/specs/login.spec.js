const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");
const ProductOnesieScreen= require("../screenobjects/product-onesie.screen");
const { default: touchAction } = require("webdriverio/build/commands/browser/touchAction");
const { default: scrollIntoView } = require("webdriverio/build/commands/element/scrollIntoView");

describe('Login', () => {

  afterEach(async function() {
    await ProductListScreen.menuButton.click();
    await SidePanelScreen.logOutButton.click();
    await expect(LoginScreen.usernameField).toBeDisplayed();
    await expect(LoginScreen.passwordField).toBeDisplayed();
  });

  it('LOGIN_valid_user', async () => {
    await LoginScreen.usernameField.setValue("standard_user");
    await LoginScreen.passwordField.setValue("secret_sauce");
    await LoginScreen.loginButton.click();
    await expect(ProductListScreen.productList).toBeDisplayed();
    await new Promise(f => setTimeout(f, 2000));
  });

  // it('PRODUCT_onesie', async () => {
  //   await LoginScreen.usernameField.setValue("standard_user");
  //   await LoginScreen.passwordField.setValue("secret_sauce");
  //   await LoginScreen.loginButton.click();
  //   await expect(ProductListScreen.productList).toBeDisplayed();
  //   await ProductListScreen.onesieShirt.scrollIntoView();
  //   await expect(ProductListScreen.onesieShirt).toBeDisplayed();
  //   //await touchAction([{ action: "longPress",}]);
  //   //await ProductListScreen.onesieShirt;
  //   await ProductListScreen.onesieShirt.click;
  //   await expect(ProductOnesieScreen.onesieTitle).toBeDisplayed();
  //   await new Promise(f => setTimeout(f, 2000));
  // });

});