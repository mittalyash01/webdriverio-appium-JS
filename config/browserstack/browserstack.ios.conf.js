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
    user: process.env.BROWSERSTACK_USERNAME || user,
    key: process.env.BROWSERSTACK_ACCESS_KEY || key,
    "platformName" : "ios",
    "appium:platformVersion" : "16.0",
    "appium:deviceName" : "iPhone 14",
    "appium:app" : "bs://68ee84e5bb3a7bc0a3f2a9b501c6aeeeb2c21bdf",
  }
]

exports.config = config;
