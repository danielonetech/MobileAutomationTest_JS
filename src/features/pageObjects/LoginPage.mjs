export default class LoginPage {
    get usernameField() { return $('//android.widget.EditText[@content-desc="Username input field"]'); }
    get passwordField() { return $('//android.widget.EditText[@content-desc="Password input field"]'); }
    get loginButton() { return $('//android.view.ViewGroup[@content-desc="Login button"]'); }
    get genericErrorMessageText() { return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'); }
    get usernameErrorMessageText() { return $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView'); }
    get passwordErrorMessageText() { return $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView'); }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async clearInput() {
        await this.usernameField.clearValue();
        await this.passwordField.clearValue();
    }

    async getErrorMessageText() {
        if (await this.genericErrorMessageText.isDisplayed()) {
            return await this.genericErrorMessageText.isDisplayed();
        } else if (await this.usernameErrorMessageText.isDisplayed()) {
            return await this.usernameErrorMessageText.isDisplayed();
        } else{
            return await this.passwordErrorMessageText.isDisplayed();
        }
    }
}
