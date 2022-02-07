class SignupPage {
        async clickCreateAccountLink(){
            await $('span[data-alooma-element="create_account"]').click();
        }
        async signup(username, password){
            await $("#email").setValue(username);
            await $("#password").setValue(password);
            await $("button[type='submit']").click();
        }
}
export default new SignupPage();