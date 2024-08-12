import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageObjects/LoginPage.mjs';
import DashboardPage from '../pageObjects/DashboardPage.mjs';

Given('I launch the application', async () => {
    const dashboardPage = new DashboardPage();
    await dashboardPage.isOptionOpen();
    await dashboardPage.openLogin();
});

When('I login with username {string} and password {string}', async (username, password) => {
    const loginPage = new LoginPage();
    await loginPage.login(username, password);
});

Then('I should see the {string}', async (expectedOutcome) => {
    if (expectedOutcome.includes('Products')) {
        const dashboardPage = new DashboardPage();
        await expect(dashboardPage.welcomeMessage).toBeDisplayed();
    } else {
         //Add logic for negative scenarios
        const loginPage = new LoginPage();
        await loginPage.getErrorMessageText();
        //const errorMessage = await loginPage.getErrorMessageText();
        //await expect(errorMessage).toHaveTextContaining(expectedOutcome)
        await loginPage.clearInput();
    }
});
