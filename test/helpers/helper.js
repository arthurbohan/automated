function getCred() {
    let randomName = (Math.random() + 1).toString(36).substring(7);
    const username = `${randomName}@test.com`,
        password = `${randomName}@test.com`;
    const creds = {login: username, password: password};    
    return creds;
}
export{getCred};
