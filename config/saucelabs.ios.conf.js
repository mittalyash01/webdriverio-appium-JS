const path = require('path');
const { config } = require('./wdio.shared.conf');
const user= '';
const key = '';

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
    
    user: process.env.SAUCELABS_USERNAME || user,
    key: process.env.SAUCELABS_ACCESS_KEY || key,
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
