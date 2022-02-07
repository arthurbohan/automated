import dashboardPage from '../pages/dashboardPage';
import getbuttonPage from '../pages/getbuttonPage';
import { getSignupCreditionals } from '../helpers/signupHelper';
import loginPage from '../pages/loginPage';
import mainPage from '../pages/mainPage';
import singupPage from '../pages/singupPage';

describe('Sign up', () => {
    it('Verify signup', async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.clickCreateAccountLink();
        const creditions = getSignupCreditionals();
        await singupPage.signup(creditions.login, creditions.password);
        await getbuttonPage.checkUrl();
        await getbuttonPage.clickRemindMeLater();
        await dashboardPage.checkUrl();
    });
});