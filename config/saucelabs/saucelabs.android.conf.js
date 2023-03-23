const path = require('path');
const { config } = require('../wdio.shared.conf');
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
    platformName: 'Android',
    'appium:app': 'storage:filename=Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
    "appium:platformVersion" : process.env.npm_config_osversion || '10',
    'appium:deviceName': process.env.npm_config_device || 'Samsung Galaxy S9',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      build: "ANDROID",
      name: "android_test",

    }
  }
]
exports.config = config;
