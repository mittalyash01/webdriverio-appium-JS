
class SidePanelScreen {
  get logOutButton() {
    return $('//*[@content-desc="test-LOGOUT" or @name="test-LOGOUT"]');
  }
}

module.exports = new SidePanelScreen();
