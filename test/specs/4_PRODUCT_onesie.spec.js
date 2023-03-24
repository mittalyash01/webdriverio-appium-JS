const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");
const ProductOnesieScreen = require("../screenobjects/product-onesie.screen");

describe('Hackathon Scenario_4', () => {

  it('4_PRODUCT_onesie', async () => {
    await LoginScreen.usernameField.setValue("standard_user");
    await LoginScreen.passwordField.setValue("secret_sauce");
    await LoginScreen.loginButton.click();
    await expect(ProductListScreen.productList).toBeDisplayed();

    const size = await driver.getWindowRect();
    console.log(`SCREEN SIZE: ${size.width}x${size.height}`);
    const start_y = size['height'] * 0.8
    const start_x = size['width'] * 0.5
    const end_x = size['width'] * 0.5
    const end_y = size['height'] * 0.1

    await driver.performActions([
      {
        // a. Create the event                    
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          // b. Move finger into start position                        
          { type: 'pointerMove', duration: 0, x: start_x, y: start_y },
          // c. Finger comes down into contact with screen                        
          { type: 'pointerDown', button: 0 },
          // d. Pause for a little bit                        
          { type: 'pause', duration: 100 },
          // e. Finger moves to end position                        
          //    We move our finger from the center of the element to the                        
          //    starting position of the element.                        
          //    Play with the duration to make the swipe go slower / faster                        
          { type: 'pointerMove', duration: 1000, x: end_x, y: end_y },
          // f. Finger gets up, off the screen                        
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);

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