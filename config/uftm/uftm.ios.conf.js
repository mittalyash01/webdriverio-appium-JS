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
    "appium:bundleId": 'com.saucelabs.SwagLabsMobileApp',
    "appium:udid": "00008110-00146CA90E92801E",
    "platformName": "iOS",
    "uftm:source": "HOSTED",
    "appium:deviceType": "real",
    "uftm:installPackageApp": true,
    "uftm:mcWorkspaceName": "Default workspace"

    }
]

exports.config = config;