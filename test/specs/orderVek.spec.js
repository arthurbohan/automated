const { default: mainPage } = require("../21vek/pages/main.page");
const { default: multipleMobilePage } = require("../21vek/pages/multipleMobile.page");
const { default: orderPage } = require("../21vek/pages/order.page");
const { default: singleMobilePage } = require("../21vek/pages/singleMobile.page");
const { getUserData, getDeliveryData, getOrgData } = require("../helpers/order.helper");

describe('Order', () => {
    it('Should order phone', async () => {
        await mainPage.open();
        await mainPage.choseMobileSection();
        await multipleMobilePage.choseMobileType();
        await multipleMobilePage.choseMobile();
        await singleMobilePage.clickAddToCartButton();
        await mainPage.openCartBox();
        await orderPage.clickCheckoutButton();
        await orderPage.clickToBasketServicesButtons();
        await orderPage.clickSelfDeliveryTypeButton();
        await orderPage.clickToPickUpPointButtons();
        await orderPage.clickCourierDeliveryTypeButton();
        const userData = getUserData();
        await orderPage.inputUserData(userData.name, userData.email,
            userData.city, userData.phone, userData.comment);
        const deliveryData = getDeliveryData();
        await orderPage.inputDeliveryData(deliveryData.addr, deliveryData.entrance,
            deliveryData.floor, deliveryData.flat);
        await orderPage.clickToPaymentOrderButtons();
        await orderPage.clickToForOrgButton();
        const orgData = getOrgData();
        await orderPage.inputOrgData(orgData.unp, orgData.name, orgData.addr,
            orgData.rs, orgData.bank, orgData.bank_code);
    });
});