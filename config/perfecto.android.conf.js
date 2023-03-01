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
            platformName: 'Android',
            platformVersion: '13',
            manufacturer: 'Samsung',
            model: 'Galaxy Note 20',
            waitForAvailableLicense: true,
            app: process.env.PERFECTO_ANDROID_APP || 'PRIVATE:1677642417487_Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
            //android_app: 'PRIVATE:1677642417487_Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
            takesScreenshot: true,
            screenshotOnError: true,
        },
    ],
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
}