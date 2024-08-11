class LoginPage {
    get usernameField() { return $('~usernameFieldSelector'); }
    get passwordField() { return $('~passwordFieldSelector'); }
    get loginButton() { return $('~loginButtonSelector'); }
    get errorMessageText() { return $('~loginButtonSelector'); }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async errorMessage(username, password) {
        await this.errorMessageText.getText();
    }
}
module.exports = new LoginPage();
