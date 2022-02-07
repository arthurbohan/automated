import dashboardPage from '../pages/dashboardPage';
import getbuttonPage from '../pages/getbuttonPage';
import {getCred} from '../helpers/helper';
import loginPage from '../pages/loginPage';
import mainPage from '../pages/mainPage';
import singupPage from '../pages/singupPage';

describe('Sign up', () => {
    it('Verify login', async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.clickCreateAccountLink();
        const cred = getCred();
        await singupPage.signup(cred.login, cred.password);
        await getbuttonPage.checkUrl();
        await getbuttonPage.clickRemindMeLater();
        await dashboardPage.checkUrl();
    });
});