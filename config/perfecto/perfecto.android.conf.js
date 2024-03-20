const path = require('path');
const { config } = require('../wdio.shared.conf');
const host = 'trial';
const securityToken = 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2ZDM2NmJiNS01NDAyLTQ4MmMtYTVhOC1kODZhODk4MDYyZjIifQ.eyJpYXQiOjE3MTA4OTc2NjIsImp0aSI6ImIyZDY5Y2YwLWE1OTctNGRjOC04MDUxLWUyZWMyYjg3MDY5ZiIsImlzcyI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsImF1ZCI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsInN1YiI6IjgzMzJmZGEyLWViMTgtNDI1ZC1iNmFjLThkZTFlMjQxN2MzMSIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvZmZsaW5lLXRva2VuLWdlbmVyYXRvciIsIm5vbmNlIjoiNmUxNmE4NDUtODM1Yi00OTIyLThkYTAtMTJjNGE2NDk1NTY1Iiwic2Vzc2lvbl9zdGF0ZSI6ImVjODc0OTdlLTRiOGQtNDFjNC1iMGRiLWUxYWJmYmU5MDEyZSIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgZW1haWwifQ.cqeaT5NmZaxkad26sJf9YT3SkfMk4tjE8nZihq-SbrU';
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