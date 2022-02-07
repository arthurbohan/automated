class MainPage {
    open() {
        browser.url('https://www.karmanow.com/');
    }
    async clickLoginButton() {
        await $("button[type='button']").click();
    }

}
export default new MainPage();