export default class LoginPage {
    get usernameField() { return $('//android.widget.EditText[@content-desc="Username input field"]'); }
    get passwordField() { return $('//android.widget.EditText[@content-desc="Password input field"]'); }
    get loginButton() { return $('//android.view.ViewGroup[@content-desc="Login button"]'); }
    get genericErrorMessageText() { return $('generic-error-message'); }
    get usernameErrorMessageText() { return $('Username-error-message'); }
    get passwordErrorMessageText() { return $('Password-error-message'); }

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
            return await this.genericErrorMessageText.getText();
        } else if (await this.usernameErrorMessageText.isDisplayed()) {
            return await this.usernameErrorMessageText.getText();
        } else if(await this.passwordErrorMessageText.isDisplayed()){
            return await this.passwordErrorMessageText.getText();
        }
        else {
            return null; // Return null if no error message is found
        }
    }
}
