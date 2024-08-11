class DashboardPage {
    get welcomeMessage() { return $('~welcomeMessageSelector'); }
    async isDisplayed() {
        return this.welcomeMessage.isDisplayed();
    }
}
module.exports = new DashboardPage();
