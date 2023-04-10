const path = require('path');
const { config } = require('../wdio.shared.conf');
const username = 'yashshvi.a.mittal@accenture.com';
const password= 'Welc0me' ;
const host= 'uftm-accenture';

config.protocol = 'https';
config.hostname = (host + '.saas.microfocus.com');
config.path = '/wd/hub';
//config.port = 80;

config.specs = [
    path.join(process.cwd(), './test/specs/**/*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        user: process.env.BROWSERSTACK_USERNAME || username,
        key: process.env.BROWSERSTACK_ACCESS_KEY || password,
        automationName: 'XCUITest',
        platformName: 'iOS',
        deviceName: process.env.npm_config_model || 'iPhone 13',
        platformVersion: process.env.npm_config_osversion || '15.0.2',
        bundleId: 'com.saucelabs.SwagLabsMobileApp',
        browserName: '',

    }
]

exports.config = config;