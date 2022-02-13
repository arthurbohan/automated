// 1
console.log('str' + true); //string + boolean
console.log('str' + 1); // string + number
console.log(1 + true); // number + boolean

// 2
console.log('str' * true); //string * boolean 
console.log('str' * 2); // string * number
console.log(2 * true); // number + boolean 

// 3
console.log('str' / true); //string / boolean 
console.log('str' / 2); // string * number
console.log(2 / true); // number + boolean

// 4 
// String()
const a = String('str');
console.log("a", typeof a);
// Number()
const b = Number(1);
console.log('b', typeof b);
// Boolean() 
const c = Boolean(true);
console.log('c', typeof c);