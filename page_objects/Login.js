import Page from "./Page";

class Login extends Page {
    /**
    *   Define Elements
    **/
    
    get loginInputForm() { return $('//form'); }
    get usernameInput() { return $('//input[@name="username"]'); }
    get passwordInput() { return $('//input[@name="password"]'); }
    get loginButton() { return $('//button//div[contains(text(), "Log In")]'); }
    
    // overwrite Page methods
    open () {
        super.open('https://www.instagram.com');
    }
    
    waitForloginPageToLoad () {
        if(!this.loginInputForm.isDisplayed()){
            this.loginInputForm.waitForDisplayed(10000);
        }
    }
    
    login (username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }
}

export default new Login()