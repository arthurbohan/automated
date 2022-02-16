arr = []
sum = 15

function rand(max) {
    return Math.floor(Math.random() * max) + 1
}

arr[0] = rand(sum - 2)
arr[1] = rand(sum - arr[0] - 1)
arr[2] = (sum - arr[0] - arr[1])

console.log(arr)

arr2 = []

function randFloat(max) {
    return ((Math.random() * max) + 1).toFixed(2)
}

arr2[0] = randFloat(sum - 2)
arr2[1] = randFloat(sum - arr2[0] - 1)
arr2[2] = (sum - arr2[0] - arr2[1])

console.log(arr2)
