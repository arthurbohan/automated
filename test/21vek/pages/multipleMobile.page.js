class MultipleMobilePage {
    get mobileType() {
        return $("//ul[contains(@class, 'b-recipes__items')]//a[contains(@href, 'iphone_13')]");
    }

    get mobile() {
        return $("//div[contains(@class,'catalog-result__item')]//dt//a[contains(@href, 'iphone13promax')]");
    }

    async choseMobileType() {
        await this.mobileType.click();
    }

    async choseMobile() {
        await this.mobile.click();
    }
}
export default new MultipleMobilePage();