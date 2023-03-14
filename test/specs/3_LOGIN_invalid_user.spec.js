const LoginScreen = require("../screenobjects/login.screen");

describe('Hackathon Scenarios', () => {

  it('3_LOGIN_invalid_user', async () => {
    await LoginScreen.usernameField.setValue("invalid_username");
    await LoginScreen.passwordField.setValue("invalid_password");
    await LoginScreen.loginButton.click();
    await expect(LoginScreen.errorMessage).toBeDisplayed();
    await expect(LoginScreen.errorMessage).toHaveText('Username and password do not match any user in this service.');
    await new Promise(f => setTimeout(f, 5000));
  });
  
});
