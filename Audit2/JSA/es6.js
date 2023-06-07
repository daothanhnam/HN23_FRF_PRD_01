let arr = [1, 2, 3, 4, 5];

let arr2 = [6, 7, 8];

let arr3 = [...arr, ...arr2];

let max = Math.max(...arr3);

console.log(max);
// Spread: khi sử dụng spread để copy array/object thì đó chỉ là shallow copy => arrguments

let obj1 = {
  name: "john doe",
};
let obj2 = {
  ...obj1,
  email: "john@gmail.com",
};

console.log(obj2);

// Rest (gom vào thành array): => parameter

function add() {
  // console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(add(1, 2, 3));

function add2(...arr) {
  return arr.reduce((acc, item) => acc + item);
}
console.log(add2(1, 2, 5, 6));

let john = {
  fullName: "John Doe ",
  base: 1000,
  overTime: 20,
  rate: 15,
  tax: 5,
};
// let fName = john.fullName;
// let base = john.base;

// Destructuring => shallow
// Destructuring Object
let { fullName: fName, base } = john;
console.log(fName);
console.log(base);

// Destructuring Array
let [first, second, third] = arr;
console.log(first, second, third);

// Use Destructuring Object in Function parameter

function caculateIncome({ base, overTime, rate }) {
  return base + overTime * rate;
}

console.log(caculateIncome(john));

// Default Parameter

function add3(a = 0, b) {
  return a + b;
}

console.log(add(3));

// Object thông thường chỉ được phép sử dụng primitive để làm key
// Map: là object cho phép sử dụng cả primitive và object để làm key

let apple = {
  name: "apple",
};

let orange = {
  name: "orange",
};

let banana = {
  name: "banana",
};

let fruits = new Map()

fruits.set(apple,1000)
fruits.set(orange,2000)
fruits.set(banana,3000)

console.log(fruits);
console.log(fruits.get(orange));