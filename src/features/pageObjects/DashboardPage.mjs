export default class DashboardPage {
    get welcomeMessage() { return $('//android.view.ViewGroup[@content-desc="container header"]'); }
    get option() { return $('android.widget.ImageView'); }
    get clickLogin() { return $('//android.view.ViewGroup[@content-desc="menu item log in"]'); }

    async isDisplayed() {
        return this.welcomeMessage.isDisplayed();
    }

    async isOptionOpen() {
        return await this.option.click();
    }

    async openLogin() {
        return await this.clickLogin.click();
    }
}
