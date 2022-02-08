class OrderPage {
    get checkoutButton() {
        return $("//button[contains(@class, 'cr-button__order')]");
    }

    get nameField(){
        return $("input[name='data[private][name]'");
    }

    get emailField(){
        return $("input[name='data[private][email]'");
    }

    get cityField(){
        return $("input[name='data[city]'");
    }
    
    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}
export default new OrderPage();