const path = require('path');
const { config } = require('../wdio.shared.conf');
const host = 'trial';
const securityToken = '';
const PERFECTO_ANDROID_APP = 'PRIVATE:Android.SauceLabs.Mobile.Sample.app.2.7.1.apk';


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
        platformName: 'Android',
        platformVersion: process.env.npm_config_osversion || '14',
        manufacturer: process.env.npm_config_manufacturer || 'Google',
        model: process.env.npm_config_model || 'Pixel 8',
        app: process.env.PERFECTO_ANDROID_APP || PERFECTO_ANDROID_APP,
        autoLaunch: true,
        browserName: '',
        takesScreenshot: false,
        screenshotOnError: true,
        openDeviceTimeout: 5

    }
]

exports.config = config;
