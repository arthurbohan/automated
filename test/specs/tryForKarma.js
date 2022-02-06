describe('Login form', () => {
    it('Verify login', async () => {
        browser.url('https://www.karmanow.com/');
        await $("button[type='button']").click();
        const username = 'ddd@ddd.com',
            password = 'ddd@ddd.com';
        await $("#email").setValue(username);
        await $("#password").setValue(password);
        await $("button[type='submit']").click();
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});