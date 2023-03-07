const path = require('path');
const { config } = require('./wdio.shared.conf');
const user= 'mittalya';
const key = 'DFUq64gVWRSzFxGT9wXi';

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
