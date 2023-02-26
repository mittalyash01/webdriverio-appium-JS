const path = require('path');
const { config } = require('./wdio.shared.conf');

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/**/*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    
    user: process.env.SAUCE_USERNAME || '<USER>',
    key: process.env.SAUCE_ACCESS_KEY || '<KEY>',
    platformName: 'iOS',
    'appium:app': 'storage:filename=iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa',
    'appium:deviceName': 'iPhone.*',
    'appium:automationName': 'XCUITest',
    'sauce:options': {
      build: "IOS",
      name: "ios_test",
    }
  }
]
exports.config = config;
