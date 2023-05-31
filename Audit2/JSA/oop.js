// OOP
var fName = "john doe ";
var base = 1000;
var overTime = 20;
var rate = 15;
// Abstraction:tính trừu trượng
// Inheritance:tính thừa kế
// Polymorphism:tính đa hình

// Encapsulation:tính bao đóng(gom data và function có lquan tới nhau vào 1 unit(object))

// các cách tạo ra 1 object:4 ( object literal,Factory function,Constructor function, class )

//Object litteral
var john = {
  fName: "john doe ",
  base: 1000,
  overTime: 20,
  rate: 15,
  caculateIncome: function () {
    return this.base + this.overTime * this.rate;
  },
  showIncome: function () {
    console.log(`${this.fName}'s income is ${this.caculateIncome()}`);
  },
};
// var marry = {
// fName: "marry doe ",
// base: 2000,
// overTime: 20,
// rate: 15,
// caculateIncome: function () {
// return this.base + this.overTime * this.rate;
// },
// showIncome: function () {
// console.log(`${this.fName}'s income is ${this.caculateIncome()}`);
// },
// };
// console.log(john);
john.showIncome();
// marry.showIncome();

// Factory function
function createEmployee(fName, base, overTime, rate) {
  var _base = base;
  return {
    fName: fName,
    overTime: overTime,
    rate: rate,
    caculateIncome: function () {
      return _base + this.overTime * this.rate;
    },
    showIncome: function () {
      console.log(`${this.fName}'s income is ${this.caculateIncome()}`);
    },
  };
}

var john2 = createEmployee("john doe 2  ", 1000, overTime, rate);

// console.log(john2);
john2.showIncome();

//Constructor function

function Employee(fName, base, overTime, rate) {
  var _base = base;

  this.fName = fName;
  this.overTime = overTime;
  this.rate = rate;

  //   this.caculateIncome = function () {
  //     return _base + this.overTime * this.rate;
  //   };

  //   this.showIncome = function () {
  //     console.log(`${this.fName}'s income is ${this.caculateIncome()}`);
  //   };
}

// Prototype là cơ chế cớ thế trong js , nó là 1 obj nằm trong constructor function
// các obj được tạo ra từ một onstructor function sẽ có quyền truy cập vào obj prototype
// nằm trong constructor function đấy

Employee.prototype.caculateIncome = function () {
  return _base + this.overTime + this.rate;
};
Employee.prototype.showIncome = function () {
  console.log(`${this.fName}'s income is ${this.caculateIncome()}`);
};

var marry3 = new Employee("marry  doe  3  ", 2000, overTime, rate);
var john3 = new Employee("john doe 3  ", 1000, overTime, rate);
console.log("john3", john3);
console.log("marry3", marry3);
// john3.showIncome();

//CLass

class Employee_2 {
  #_base;
  fName;
  overTime;
  rate;
  tax;
  reduction;
  static staticProp = 111;

  static staticMethod() {
    console.log("static method ");
  }
  constructor(fName, base, overTime, rate) {
    this.#_base = base;
    this.fName = fName;
    this.overTime = overTime;
    this.rate = rate;
  }
  caculateIncome() {
    return this.#_base + this.overTime * this.rate;
  }
  showIncome() {
    console.log(`${this.fName}'s income is ${this.caculateIncome()}`);
  }

  // getter/setter : 2 cách khai báo một property , chỉ được truy cập ở instance
  //nhưng khi sử dụng thì giống property ( Tức là ko sử dụng cặp ngoặc tròn )
  // Getter
  get _base() {
    return this.#_base;
  }

  // setter phải có một và chỉ một parameter
  set _base(newValue) {
    if (typeof newValue === "number" && newValue >= 0) {
      this.#_base = newValue;
    } else {
      throw new Error("Invalid new value!");
    }
  }
}

// function "contructor " trong class là function được khởi chạy đầu tiên khi chúng ta tạo ra
// một obj từ class đấy
var john4 = new Employee_2("john doe 4 ", 1000, overTime, rate);

//instance(là object khởi tạo từ một khuôn(Factory,contructor,class)) ~ object ( tạo trực tiếp từ khuôn)
// public property là những property được phép truy cập ở cả   object(instance) tạo từ class
console.log("john4", john4);

//private property là những property chỉ được phép truy cập từ ở trong class
// console.log(john4.#_base);
john4.showIncome();

// static method/property là những method/property được phép truy cập từu phía class mà
// không cần khởi tạo instance/obj
console.log(Employee_2.staticProp);
Employee_2.staticMethod();

// getter/setter : 2 cách khai báo một property , chỉ được truy cập ở instance
//nhưng khi sử dụng thì giống property ( Tức là ko sử dụng cặp ngoặc tròn )

console.log(john4._base);
john4._base = 3000;
console.log(john4._base);

class Person {
  name;
  age;
  birthDay;
  idCode;
  constructor(name, age, birthDay, idCode) {
    this.name = name;
    this.age = age;
    this.birthDay = birthDay;
    this.idCode = idCode;
  }
  // Polymophisim , có nghĩa là đa hình , là việc class con có quyền tự khai báo lại 
  // property/method đc kế thừa từ class cha 
  
  speak() {
    console.log(this.name + " hehehehe");
  }
}

class Employee_3 extends Person {
  base;
  email;
  overTime;
  rate;
  constructor(name, age, birthDay, idCode, base, email, overTime, rate) {
    super(name, age, birthDay, idCode);
    this.base = base;
    this.email = email;
    this.overTime = overTime;
    this.rate = rate;
  }
  caculateIncome() {
    return this.base + this.rate + this.overTime;
  }
  showIncome() {
    console.log(this.caculateIncome());
  }
}

//  extends = Đa kế thừa 

class Student extends Person {
  constructor(name, age, birthDay, idCode, classCode) {
    super(name, age, birthDay, idCode);
    this.classCode = classCode;
  }
  doHomeWork() {
    console.log("Doing homework ");
  }
  speak() { 
    console.log(this.name + " singgg");
  }
}

var john5 = new Employee_3(
  "john",
  22,
  "9-2-2003",
  "01111111",
  1000,
  "john@gmail.com",
  20,
  15
);
var justin = new Student("justin", 17, "1-10-2006", "012345678", "12D1");

console.log("john5", john5);
console.log("justin", justin);

john5.speak();
justin.speak();
