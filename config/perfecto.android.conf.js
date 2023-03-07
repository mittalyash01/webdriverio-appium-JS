const path = require('path');
const { config } = require('./wdio.shared.conf');
const host = 'trial';
const securityToken = '';
const PERFECTO_ANDROID_APP= '';

exports.config = {
    securityToken: process.env.PERFECTO_SECURITY_TOKEN || securityToken,
    protocol: 'http',
    hostname: host + '.perfectomobile.com',
    path: '/nexperience/perfectomobile/wd/hub',
    port: 80,
    specs: [
        path.join(process.cwd(), './test/specs/**/*.js')
    ],
    //maxInstances: 1,
    capabilities: [
        {
            securityToken: process.env.PERFECTO_SECURITY_TOKEN || securityToken,
            automationName: 'Appium',
            platformName: 'Android',
            platformVersion: '9',
            manufacturer: 'Samsung',
            model: 'Galaxy Tab S3 9.7',
            waitForAvailableLicense: true,
            app: process.env.PERFECTO_ANDROID_APP || PERFECTO_ANDROID_APP,
            takesScreenshot: true,
            screenshotOnError: true,
            autoLaunch: true,
            autoInstrument: true,
        }
],
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
}