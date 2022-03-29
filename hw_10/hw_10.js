function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// // 1
function getTimeout() {
    return new Promise((res, rej) => {
        let random = getRandom(1, 5)
        setTimeout(() => {
            console.log(random)
            res(random)
        }, random * 1000)
    })
}

let promise1 = getTimeout()
let promise2 = getTimeout()
let promise3 = getTimeout()

Promise.all([promise1, promise2, promise3])
.then((data) => {
    let sum = data.reduce((acc, next) => {
        return acc + next
    })
    console.log(sum)
    return sum
})

// 2 

function getTimeout(number) {
    return new Promise((res, rej) => {
        let random = getRandom(1, 5)
        setTimeout(() => {
            console.log(`number of promise ${number}`)
            res(random)
        }, random * 1000)
    })
}

let promise1 = getTimeout(1)
let promise2 = getTimeout(2)
let promise3 = getTimeout(3)

Promise.race([promise1, promise2, promise3]).then((data) => {
    console.log(data)
})


// 3
function getNum() {
    return new Promise((res, rej) => {
        let random = getRandom(1, 5)
        setTimeout(() => {
            console.log(random)
            res(random)
        }, 3000)
    })
}

async function getRandomNumSqrt() {
    let num = await getNum()
    let result = num * num
    console.log(result)
    return result
}
getRandomNumSqrt();

//4 
function getNum1() {
    return new Promise((res, rej) => {
        let random = getRandom(1, 5)
        setTimeout(() => {
            console.log(random)
            res(random)
        }, 3000)
    })
}

function getNum2() {
    return new Promise((res, rej) => {
        let random = getRandom(6, 10)
        setTimeout(() => {
            console.log(random)
            res(random)
        }, 5000)
    })
}

async function getSumOfNum() {
    let num = await getNum1()
    let num1 = await getNum2()
    let result = num + num1
    console.log(result)
    return result
}

getSumOfNum()
