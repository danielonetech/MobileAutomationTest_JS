// Run Mobile Automation and allure report
1. Place .apk in local drive and update below path in wdio.conf file under capabilities
    'appium:app': 'E:\\Automation\\Android-MyDemoAppRN.1.3.0.build-244.apk',
2. Install apk in real device and attach to window machine.
3. Run 'npm install'
4. Run 'npx wdio run wdio.conf.mjs'
5. AFter success of all test, all logs will be stored under "allure-results".
6. run below command to generate allure report from logs
   "allure generate allure-results --clean -o allure-report"
8. Run below command to open the allure report
   "allure open allure-report"

