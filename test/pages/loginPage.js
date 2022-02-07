class LoginPage {
        async clickCreateAccountLink(){
            await $('span[data-alooma-element="create_account"]').click();
        }
}
export default new LoginPage();