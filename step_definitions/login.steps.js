import { Given, When, Then } from "cucumber";
import loginPage from "../page_objects/Login";

Given(/^I am on Instagram login page$/, () => {
    loginPage.open();
    loginPage.landingPageLoginButton.waitForDisplayed(
        5000,
        false,
        `Couldn't locate landing page login button`
    );
    loginPage.landingPageLoginButton.click();
});

When(/^I log in with username - "([^"]*)" and password - "([^"]*)"/, (username, password) => {
    browser.pause(3000);
    loginPage.areFormInputFieldsDisplayed();
    loginPage.login(username, password);
});

Then(/^I should see error message - "([^"]*)"$/, (errorMessage) => {
    loginPage.setErrorMessage(errorMessage);
    loginPage.isElementDisplayed(
        loginPage.loginErrorMessage, 
        `Error message not displayed`
    );
});
