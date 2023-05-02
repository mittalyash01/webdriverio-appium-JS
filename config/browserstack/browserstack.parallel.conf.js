const path = require('path');
const { config } = require('../wdio.shared.conf');
const user= 'ctcdemo_FVJglZ';
const key = '5Q2GyEwCTa44vxvo9M8w';

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
config.maxInstances = 2;
config.capabilities = [
  {
    user: process.env.BROWSERSTACK_USERNAME || user,
    key: process.env.BROWSERSTACK_ACCESS_KEY || key,
    "platformName" : "android",
    "appium:platformVersion" : process.env.npm_config_android_osversion || "12.0",
    "appium:deviceName" : process.env.npm_config_android_device || "Samsung Galaxy S22 Ultra",
    "appium:app" : "bs://af7615c9a30211518eb55b187601f56b57ccad9e",
    'bstack:options' : {
      "interactiveDebugging" : "true",
    },
  },
  {
    user: process.env.BROWSERSTACK_USERNAME || user,
    key: process.env.BROWSERSTACK_ACCESS_KEY || key,
    "platformName" : "ios",
    "appium:platformVersion" : process.env.npm_config_ios_osversion || "16.0",
    "appium:deviceName" : process.env.npm_config_ios_device || "iPhone 14",
    "appium:app" : "bs://60f9aaf4d6bc53111366f5d6a232bd2e26136ec4",
  }
]

exports.config = config;
