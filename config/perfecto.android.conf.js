const path = require('path');
const { config } = require('./wdio.shared.conf');
const host = 'trial';
const securityToken = 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2ZDM2NmJiNS01NDAyLTQ4MmMtYTVhOC1kODZhODk4MDYyZjIifQ.eyJpYXQiOjE2Nzc4MTQwNDcsImp0aSI6ImIxYzcxMDExLWJjYzktNDQ4Yi05MDRlLTJhMmRkODcyNWZkNiIsImlzcyI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsImF1ZCI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsInN1YiI6IjQwMmJhZjViLTdmYmUtNGY1NC1hZDVmLWM4MTg2MGI0N2ExMiIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvZmZsaW5lLXRva2VuLWdlbmVyYXRvciIsIm5vbmNlIjoiNTI5NjdhNDYtMThjZi00NzRkLThhMzMtMTUyODE1YzUzMjY5Iiwic2Vzc2lvbl9zdGF0ZSI6ImRmODJlOWFjLWY2M2UtNGFmMi05YWVlLWEzOTUwNTNjYmVjMyIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgZW1haWwifQ._REJQ9LdQi4Wwb2CJlshGijE2hCNQYQFgao9HT_VAf4';
const PERFECTO_ANDROID_APP= 'PRIVATE:Android.SauceLabs.Mobile.Sample.app.2.7.1.apk';

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