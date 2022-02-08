class OrderPage {
    get checkoutButton() {
        return $("//button[contains(@class, 'cr-button__order')]");
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}
export default new OrderPage();