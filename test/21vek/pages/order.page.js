class OrderPage {
    get checkoutButton() {
        return $("//button[contains(@class, 'cr-button__order')]");
    }

    get basketServices() {
        return $$(".cr-basket__services");
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

    get phoneField() {
        return $("input[name='data[phone]'");
    }

    get commetField() {
        return $("textarea[name='data[comment]'");
    }

    get courierDeliveryTypeButton() {
        return $("label[id='delivery_courier']");
    }

    get addrField() {
        return $("input[name='data[addr]");
    }

    get entranceField() {
        return $("input[name='data[entrance]");
    }

    get floorField() {
        return $("input[name='data[floor]");
    }

    get flatField() {
        return $("input[name='data[flat]");
    }

    get selfDeliveryTypeButton() {
        return $("label[id='delivery_self']");
    }

    get pickUpPointButtons() {
        return $$("#j-offer_spots-list .j-offer_spot_address");
    }

    get basketServices() {
        return $$(".cr-basket__services");
    }

    get orderPaymentButtons() {
        return $$(".order-payment_group");
    }

    async getForOrgButton() {
        return await $('label.g-form__checklabel.g-form__radio #no_cash').parentElement();
    }

    get unpField() {
        return $('#j-legal-entity_unp');
    }

    get orgNameField() {
        return $("input[name='data[org][org]']");
    }

    get orgAddrField() {
        return $("input[name='data[org][address]']");
    }

    get orgRsField() {
        return $("input[name='data[org][rs]']");
    }

    get orgBankField() {
        return $("input[name='data[org][bank]']");
    }

    get orgBankCodeField() {
        return $("input[name='data[org][bank_code]']");
    }

    async clickCheckoutButton() {
        await this.checkoutButton.waitForExist(5000);
        await this.checkoutButton.click();
    }

    async clickSelfDeliveryTypeButton() {
        await this.selfDeliveryTypeButton.click();
    }

    async clickToBasketServicesButtons() {
        const services = await this.basketServices;
        services.forEach(async (label) => {
            await label.click();
        });
    }

    async clickToPickUpPointButtons() {
        const pickUpButtons = await this.pickUpPointButtons;
        pickUpButtons.forEach(async (input) => {
            await input.click();
        });
    }

    async clickCourierDeliveryTypeButton() {
        await this.courierDeliveryTypeButton.click();
    }

    async inputUserData(name, email, city, phone, comment) {
        await this.nameField.setValue(name);
        await this.emailField.setValue(email);
        await this.cityField.setValue(city);
        await this.phoneField.setValue(phone);
        await this.commetField.setValue(comment);
    }

    async inputDeliveryData(addr, entrance, floor, flat) {
        await this.addrField.setValue(addr);
        await this.entranceField.setValue(entrance);
        await this.floorField.setValue(floor);
        await this.flatField.setValue(flat);
    }

    async clickToPaymentOrderButtons() {
        const orderButtons = await this.orderPaymentButtons;
        orderButtons.forEach(async (label) => {
            await label.click();
        });
    }

    async clickToForOrgButton() {
        const button = await this.getForOrgButton();
        await button.click();
    }

    async inputOrgData(unpm, name, addr, rs, bank, bank_code) {
        await this.unpField.setValue(unpm);
        await this.orgNameField.setValue(name);
        await this.orgAddrField.setValue(addr);
        await this.orgRsField.setValue(rs);
        await this.orgBankField.setValue(bank);
        await this.orgBankCodeField.setValue(bank_code);
    }
}
export default new OrderPage();