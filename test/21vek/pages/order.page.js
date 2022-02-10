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

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    async clickSelfDeliveryTypeButton() {
        await this.selfDeliveryTypeButton.click();
    }

    async clickToPickUpPointButtons() {
        const pickUpButtons = await this.pickUpPointButtons;
        await pickUpButtons.forEach((input) => {
            input.click();
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
}
export default new OrderPage();