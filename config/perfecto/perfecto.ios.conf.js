const path = require('path');
const { config } = require('../wdio.shared.conf');
const host = 'trial';
const securityToken = '';
const PERFECTO_IOS_APP = 'PRIVATE:iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa';

config.protocol = 'http';
config.hostname = (host + '.perfectomobile.com');
config.path = '/nexperience/perfectomobile/wd/hub';
config.port = 80;
config.sync = true;
config.bail = 0;

config.specs = [
    path.join(process.cwd(), './test/specs/**/*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        securityToken: process.env.PERFECTO_SECURITY_TOKEN || securityToken,
        automationName: 'Appium',
        platformName: 'iOS',
        platformVersion: '14.3',
        manufacturer: 'Apple',
        model: 'iPhone-11',
        app: process.env.PERFECTO_IOS_APP || PERFECTO_IOS_APP,
        autoLaunch: true,
        autoInstrument: true,
        browserName: '',
        takesScreenshot: false,
        screenshotOnError: true,
        openDeviceTimeout: 5

    }
]

exports.config = config;