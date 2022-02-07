class LoginPage {
    async clickCreateAccountLink() {
        await $('span[data-alooma-element="create_account"]').click();
    }
    async login(username, password) {
        await $("#email").setValue(username);
        await $("#password").setValue(password);
        await $("button[type='submit']").click();
    }
}
export default new LoginPage();