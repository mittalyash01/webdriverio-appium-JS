const path = require('path');
const { config } = require('./wdio.shared.conf');
const host = 'trial';

exports.config = {
    securityToken: process.env.PERFECTO_SECURITY_TOKEN,
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
            securityToken: process.env.PERFECTO_SECURITY_TOKEN,
            automationName: 'Appium',
            platformName: 'iOS',
            platformVersion: '14.3',
            manufacturer: 'Apple',
            model: 'iPhone-11 Pro',
            waitForAvailableLicense: true,
            app: process.env.PERFECTO_IOS_APP || 'PRIVATE:1676566714754_iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa',
            //ios_app: 'PRIVATE:1676566714754_iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa',
            takesScreenshot: true,
            screenshotOnError: true,
        },
    ],
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
}