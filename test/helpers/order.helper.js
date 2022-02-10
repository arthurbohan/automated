function getUserData() {
    const userData = {
        name: 'arthur',
        email: 'arthur@gmail.com',
        city: 'Minsk',
        phone: '+375333954546',
        comment: 'comment'
    }
    return userData;
}

function getDeliveryData() {
    const deliveryData = {
        addr: 'addr',
        entrance: '1',
        floor: '1',
        flat: '1'
    }
    return deliveryData;
}

function getOrgData() {
    const orgData = {
        unp: '123123123',
        name: 'name',
        addr: 'addr',
        rs: '123123123123123123123123123A',
        bank: 'bank',
        bank_code: '123123123A'
    }
    return orgData;
}

export {
    getUserData,
    getDeliveryData,
    getOrgData
};