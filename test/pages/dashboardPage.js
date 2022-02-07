class DashboardPage {
    async checkUrl(){
        await expect(browser).toHaveUrlContaining('dashboard');
    }
}
export default new DashboardPage();