class SingleMobilePage {
    get addToCartButton() {
        return $("//button[contains(@class,'g-button g-buybtn item__buybtn cr-buybtn__in j-ga_track')]");
    }

    get checkCartButton() {
        return $("//div[contains(@class, 'item-buyzone')]//a[contains(@class, 'g-basketbtn j-button-clicked')]");
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
    }

    async clickCheckCartButton() {
        await this.checkCartButton.click();
    }
}
export default new SingleMobilePage();