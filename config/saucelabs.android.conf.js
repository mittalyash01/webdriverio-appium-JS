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
    key: process.env.SAUCE_ACCESS_KEY || '<KEY>>',
    platformName: 'Android',
    'appium:app': 'storage:filename=Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
    'appium:deviceName': 'Samsung.*',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      build: "ANDROID",
      name: "android_test",
    }
  }
]
exports.config = config;
