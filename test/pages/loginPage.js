class LoginPage {
    async login(username, password) {
        await $("#email").setValue(username);
        await $("#password").setValue(password);
        await $("button[type='submit']").click();
    }
}
export default new LoginPage();