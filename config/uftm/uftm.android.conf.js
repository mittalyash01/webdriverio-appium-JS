const path = require('path');
const { config } = require('../wdio.shared.conf');
const userName = '';
const password= '' ;
const host= 'uftm-accenture';

config.protocol = 'https';
config.hostname = (host + '.saas.microfocus.com');
config.path = '/wd/hub';
config.port = 4723;
//config.sync = true;
//config.bail = 0;


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
    "appium:userName": process.env.BROWSERSTACK_USERNAME || userName,
    "appium:password": process.env.BROWSERSTACK_ACCESS_KEY || password,
    //"appium:automationName": 'Android',
    "appium:platformName" : 'android',
    "appium:platformVersion" : process.env.npm_config_osversion || "13",
    "appium:deviceName" : process.env.npm_config_device || "SM-G991U1",
    "appium:appPackage":'com.swaglabsmobileapp',
    "appium:appActivity": 'com.swaglabsmobileapp.SplashActivity',
    "appium:udid": "RFCT317SKDE",
    "appium:browserName": '',
    //"appium:appActivity": "com.swaglabsmobileapp.SplashActivity"
    //"appium:UDID": "00008110-00146CA90E92801E"
  }
]

exports.config = config;
