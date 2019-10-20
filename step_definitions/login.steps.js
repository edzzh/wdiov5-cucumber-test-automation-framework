import { Given, When, Then } from "cucumber";
import loginPage from "../page_objects/Login";

Given(/^I am on Instagram login page$/, () => {
    loginPage.open();
});

When(/^I log in with username - "([^"]*)" and password - "([^"]*)"/, (e, a) => {
    loginPage.waitForloginPageToLoad();
    console.log(e);        
    console.log(a);
});