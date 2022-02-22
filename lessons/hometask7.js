class Array {
    constructor(name) {
        this.name = name
        this.arr = []
    }

    reverseArray(arr) {
        this.arr = arr
        return arr.reverse()
    }

    maxArray(arr) {
        this.arr = arr
        return Math.max.apply(null, arr)
    }
}

let firstArray = new Array("First array")
firstArray.reverseArray([1,2,3])
console.log(firstArray)