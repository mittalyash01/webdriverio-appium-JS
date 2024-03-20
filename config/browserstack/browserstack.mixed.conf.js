const path = require('path');
const { config } = require('../wdio.shared.conf');
const user= 'yashshvimittal_dODRYg';
const key = '4mxThL7TcWipJwJTfb3y';

config.hostname = ('hub.browserstack.com');
//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/**/*.js')
];

config.maxInstances = 5;

//
// ============
// Capabilities
// ============
config.capabilities = [
  //android config
  {
    user: process.env.BROWSERSTACK_USERNAME || user,
    key: process.env.BROWSERSTACK_ACCESS_KEY || key,
    "platformName" : "android",
    "appium:platformVersion" : process.env.npm_config_osversion || "12.0",
    "appium:deviceName" : process.env.npm_config_device || "Samsung Galaxy S22 Ultra",
    "appium:app" : "bs://417fb1291ea3a2ea3056507e05bb39169521e008",
    "appium:interactiveDebugging" : true
  },
  //ios config
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