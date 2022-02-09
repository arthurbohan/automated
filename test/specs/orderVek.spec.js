const { default: mainPage } = require("../21vek/pages/main.page");
const { default: multipleMobilePage } = require("../21vek/pages/multipleMobile.page");
const { default: orderPage } = require("../21vek/pages/order.page");
const { default: singleMobilePage } = require("../21vek/pages/singleMobile.page");
const { getUserData } = require("../helpers/order.helper");

describe('Order', () => {
    it('Should order phone', async () => {
        await mainPage.open();
        await mainPage.choseMobileSection();
        await multipleMobilePage.choseMobileType();
        await multipleMobilePage.choseMobile();
        await singleMobilePage.clickAddToCartButton();
        await mainPage.openCartBox();
        await orderPage.clickCheckoutButton();
        const userData = getUserData();
        await orderPage.inputUserData(userData.name, userData.email, userData.city);
    });
});