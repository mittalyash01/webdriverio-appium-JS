const path = require('path');
const { config } = require('./wdio.shared.conf');

exports.config = {

    runner: 'local',
    specs: [
        path.join(process.cwd(), './test/specs/**/*.js')
    ],
    //maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            appWaitDuration: 100000,
            appWaitActivity: '*'
        }],
        logLevel: 'info',
        bail: 0,
        baseUrl: 'http://localhost',
        path: '/wd/hub',
        waitforTimeout: 10000,
        connectionRetryTimeout: 120000,
        connectionRetryCount: 3,
        services: ['appium'],
        port: 4723,
        framework: 'mocha',
}