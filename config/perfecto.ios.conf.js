const path = require('path');
const { config } = require('./wdio.shared.conf');
const host = 'trial';
const securityToken = '';
const PERFECTO_IOS_APP= '';

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
            platformName: 'iOS',
            platformVersion: '15.0',
            manufacturer: 'Apple',
            model: 'iPhone-13 Mini',
            waitForAvailableLicense: true,
            app: process.env.PERFECTO_IOS_APP || PERFECTO_IOS_APP,
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