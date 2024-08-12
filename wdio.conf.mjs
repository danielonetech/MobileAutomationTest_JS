export const config = {
    runner: 'local',
    specs: ['./src/features/**/*.feature'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': '1591973763000B6',
        'appium:platformVersion': '14.0',
        'appium:app': 'E:\\Automation\\Android-MyDemoAppRN.1.3.0.build-244.apk',
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true,
        'appium:noReset': false,
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['appium', {
        command: 'appium',
        port: 4730 // or your chosen port
    }]],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./src/features/stepDefinitions/*.mjs'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};
