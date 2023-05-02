const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");
const ProductOnesieScreen = require("../screenobjects/product-onesie.screen");
const Utils = require("../utils/utils");

describe('Hackathon Scenario_4', () => {

  it('4_PRODUCT_onesie', async () => {
    await LoginScreen.usernameField.setValue("standard_user");
    await LoginScreen.passwordField.setValue("secret_sauce");
    await LoginScreen.loginButton.click();
    await expect(ProductListScreen.productList).toBeDisplayed();
    
    await Utils.swipeDown();
    
    await expect(ProductListScreen.onesieShirt).toBeDisplayed();
    await ProductListScreen.onesieShirt.click();
    await expect(ProductOnesieScreen.onesieTitle).toBeDisplayed();
    await new Promise(f => setTimeout(f, 2000));

    // Cleanup
    await ProductListScreen.menuButton.click();
    await SidePanelScreen.logOutButton.click();
    await expect(LoginScreen.usernameField ).toBeDisplayed();
    await expect(LoginScreen.passwordField).toBeDisplayed();
  });
});