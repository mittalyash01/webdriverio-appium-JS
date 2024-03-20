const path = require('path');
const { config } = require('../wdio.shared.conf');
const user= '';
const key = '';

config.hostname = ('hub.browserstack.com');
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
    "appium:platformVersion" : process.env.npm_config_osversion || "16.0",
    "appium:deviceName" : process.env.npm_config_device || "iPhone 14",
    "appium:app" : "bs://a1690252a4c52caecf31d93468202bbd2cf52768",
  }
]

exports.config = config;
