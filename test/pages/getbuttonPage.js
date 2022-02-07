class GetbuttonPage {
    async checkUrl(){
        await expect(browser).toHaveUrlContaining('demo/get-the-button');
    }
    async clickRemindMeLater(){
        await $('button[data-alooma-element="remind_me_later"]').click();
    }
}
export default new GetbuttonPage();