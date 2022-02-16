let result = 0

for (let year = 2000; year < new Date().getFullYear(); year++) {
    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13)
        if (date.getDay() == 5) {
            result++
        }
    }
}

console.log(result)