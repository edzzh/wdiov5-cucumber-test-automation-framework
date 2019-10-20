import Page from "./Page";

class Login extends Page {
    constructor() {
        super();
        this.errorMessage = null;    
    }
    
    /**
    *   Define Elements
    **/
    
    get loginInputForm() { return $('//form'); }
    get usernameInput() { return $('//input[@name="username"]'); }
    get passwordInput() { return $('//input[@name="password"]'); }
    get primaryLoginButton() { return $('//button//div[contains(text(), "Log In")]'); }
    get landingPageLoginButton() { return $('//a[contains(text(), "Log in")]'); }
    get loginErrorMessage() { return $(`//p[contains(text(), "${this.errorMessage}")]`); }
    
    /*****************************/
    
    /**
    *   Set variable values
    **/
    
    setErrorMessage(errorMessage) {
        this.errorMessage = errorMessage;
    }
    
    /*****************************/
    
    /**
    *   Methods related to Login page
    **/
    
    open () {
        super.open('https://www.instagram.com');
    }
    
    areFormInputFieldsDisplayed() {
        super.isElementDisplayed(this.usernameInput, `Username Input is not displayed`);
        super.isElementDisplayed(this.passwordInput, `Password Inpute is not displayed`);
    }
    
    login (username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.primaryLoginButton.click();
    }
}

export default new Login()