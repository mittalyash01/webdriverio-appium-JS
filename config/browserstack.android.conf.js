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
    user: process.env.BROWSERSTACK_USERNAME || user,
    key: process.env.BROWSERSTACK_ACCESS_KEY || key,
    "platformName" : "android",
    "appium:platformVersion" : "12.0",
    "appium:deviceName" : "Samsung Galaxy S22 Ultra",
    "appium:app" : "bs://a479227ab81da5bf8821ab0c57de7ebffca3d4fc",
  }
]

exports.config = config;
