const path = require('path');
const { config } = require('../wdio.shared.conf');
const userName = '';
const password= '';
const host= 'uftm-accenture';

config.protocol = 'https';
config.hostname = (host + '.saas.microfocus.com');
config.path = '/wd/hub';
config.port = 443;


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
    "uftm:userName": process.env.UFTM_USERNAME || userName,
    "uftm:password": process.env.UFTM_ACCESS_KEY || password,
    "uftm:tenantId": "999999999",
    "appium:appPackage": "com.swaglabsmobileapp",
    "appium:appActivity": "com.swaglabsmobileapp.SplashActivity",
    "appium:udid": "RFCT317SKDE",
    "platformName": "Android",
    "uftm:source": "HOSTED",
    "appium:deviceType": "real",
    "uftm:installPackageApp": true,
    "uftm:mcWorkspaceName": "Default workspace"
  }
]

exports.config = config;
