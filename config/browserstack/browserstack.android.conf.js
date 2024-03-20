const path = require('path');
const { config } = require('../wdio.shared.conf');
const user= 'yashshvimittal_dODRYg';
const key = '4mxThL7TcWipJwJTfb3y';

config.hostname = ('hub.browserstack.com');
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
    "platformName" : "android",
    "appium:platformVersion" : process.env.npm_config_osversion || "12.0",
    "appium:deviceName" : process.env.npm_config_device || "Samsung Galaxy S22 Ultra",
    "appium:app" : "bs://417fb1291ea3a2ea3056507e05bb39169521e008",
    "appium:video" : true,
    "appium:interactiveDebugging" : true
  }
]

exports.config = config;
