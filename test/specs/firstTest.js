describe('Login form', () => {
    it('Verify URL', async () => {
        browser.url('https://opensource-demo.orangehrmlive.com/');
        await expect(browser).toHaveUrlContaining('opensource');
    });

    it('Verify title', async () => {
        browser.url('https://opensource-demo.orangehrmlive.com/');
        await expect(browser).toHaveTitle('OrangeHRM');
    });

    it('Verify login', async () => {
        browser.url('https://opensource-demo.orangehrmlive.com/');
        const username = 'admin',
            password = 'admin123';
        await $("input[id='txtUsername']").setValue(username);
        await $("input[id='txtPassword']").setValue(password);
        await $("input[value='LOGIN']").click();
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});