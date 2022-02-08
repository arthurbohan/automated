class MainPage {
    open() {
        browser.url('https://www.21vek.by/');
    }

    get mobileBar() {
        return $("//ul[contains(@class, 'promoItem')]//a[contains(@href, 'mobile')]");
    }

    get cartBox() {
        return $("//a[contains(@class, 'headerCartBox')]");
    }

    async choseMobileSection() {
        await this.mobileBar.click();
    };

    async openCartBox() {
        await this.cartBox.click();
    }

}
export default new MainPage();