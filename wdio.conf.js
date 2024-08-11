exports.config = {
    specs: [
        './features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554', // Use your device/emulator name
        'appium:platformVersion': '11.0', // Your Android version
        'appium:app': '/path/to/your/app.apk', // Path to the APK
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true,
        'appium:noReset': true,
        maxInstances: 1
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./features/step-definitions/'],
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
