class OrderPage {
    get checkoutButton() {
        return $("//button[contains(@class, 'cr-button__order')]");
    }

    get nameField() {
        return $("input[name='data[private][name]'");
    }

    get emailField() {
        return $("input[name='data[private][email]'");
    }

    get cityField() {
        return $("input[name='data[city]'");
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    async inputUserData(name, email, city) {
        await this.nameField.setValue(name);
        await this.emailField.setValue(email);
        await this.cityField.setValue(city);
    }
}
export default new OrderPage();