import { getLoginCreditionals } from '../helpers/loginHelper';
import dashboardPage from '../pages/dashboardPage';
import loginPage from '../pages/loginPage';
import mainPage from '../pages/mainPage';

describe('Log in', () => {
    it('Verify login', async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        const creditions = getLoginCreditionals();
        await loginPage.login(creditions.login, creditions.password);
        await dashboardPage.checkUrl();
    });
});

