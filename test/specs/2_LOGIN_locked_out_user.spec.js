const LoginScreen = require("../screenobjects/login.screen");

describe('Hackathon Scenario_2', () => {


  it('2_LOGIN_locked_out_user', async () => {
    await LoginScreen.usernameField.setValue("locked_out_user");
    await LoginScreen.passwordField.setValue("secret_sauce");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.errorMessage).toBeDisplayed();
    await expect(LoginScreen.errorMessage).toHaveText('Sorry, this user has been locked out.');
    await new Promise(f => setTimeout(f, 2000));
  });


});
