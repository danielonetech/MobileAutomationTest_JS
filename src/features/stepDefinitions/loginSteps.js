const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageObjects/LoginPage');
const DashboardPage = require('../pageObjects/DashboardPage');

Given('I launch the application', async () => {
    // App launch logic if necessary
});

When('I login with username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I should see the {string}', async (expectedOutcome) => {
    if (expectedOutcome.includes('Welcome message')) {
        await expect(DashboardPage.welcomeMessage).toBeDisplayed();
    } else {
        // Add logic for negative scenarios
        const errorMessage = await LoginPage.getErrorMessage();
        await expect(errorMessage).toHaveTextContaining(expectedOutcome)
    }
});
