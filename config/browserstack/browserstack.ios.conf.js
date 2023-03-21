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
    "appium:platformVersion" : process.env.npm_config_osversion || "16.0",
    "appium:deviceName" : process.env.npm_config_device || "iPhone 14",
    "appium:app" : "bs://e5bb603500754df9402c2bcd7db4f5bd7d79a81b",
  }
]

exports.config = config;
