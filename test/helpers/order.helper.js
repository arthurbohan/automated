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

export {
    getUserData,
    getDeliveryData
};