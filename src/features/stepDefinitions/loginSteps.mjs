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
        const errorMessage = await loginPage.getErrorMessageText();
        if (errorMessage) { // Check if errorMessage is not null
            await expect(errorMessage).toHaveTextContaining(expectedOutcome);
        } else {
            console.error('No error message found'); // Or throw an error
        }
        await loginPage.clearInput();
    }
});
