let sum1 = 0
let sum2 = 0

function roll() {
    return Math.floor(Math.random() * 6) + 1
}

for (let i = 0; i < 3; i++) {
    sum1 += roll()
    sum2 += roll()
}

if (sum1 == sum2) {
    console.log('draw')
} else {
    console.log(`${sum1 > sum2 ? "first" : "second"} player win `)
}
