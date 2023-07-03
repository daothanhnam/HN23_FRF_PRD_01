"use strict";
let price = 1.9999;
let fname = "john doe";
let isGraduated = false;
let color = [
    "Red ", "Green ", "Blue"
];
//any  có thể truy cập bất kỳ mà không cần khai báo  kiểu dữ liệu 
let x = JSON.stringify("john doe");
fname = x;
//unknown tương tự any nhưng trước khi sử dụng phải khai báo kiểu dữ liệu 
let y = 111;
y = "marry doe ";
//type asertion: có 2 cú pháp (as, <>)
y.split(" ");
y.split("");
y.toFixed(2);
fname = y;
console.log(y);
function add(a, b) {
    b = b !== null && b !== void 0 ? b : 0;
    // NẾU B KHÁC NUll , undefined thì sẽ lấy giá trị của chính nó 
    // là null , undefined thì lấy giá trị là 0 
    return a + b;
}
let result = add(1, 2);
console.log(result);
function sayHi(name, msg = "Hi") {
    console.log(`${msg} from ${name}`);
}
sayHi(fname);
//type union 
let userID = "A62GE";
userID = 12345;
let userIDArr = ["A62GE", 12345];
//typle: cố định số lượng , thứ tự và kiểu dữ liệu 
let typleArr = ["abc", 1];
let todo = {
    title: "do something",
    completed: false,
    x: "abc"
};
// không thể tạo được instnace(new) từ một interface, trong khi đó class thì có thể 
// let obj = new Vehicle();
let motoBike = {
    enine: "Động cơ xăng 4 thì ",
    color: "Đen",
    start: function () {
        // 
    },
    move: function () {
        // 
    },
    stop: function () {
        // 
    }
};
let electricBike = {
    enine: "",
    color: "",
    start: function () {
        throw new Error("Function not implemented.");
    },
    move: function () {
        throw new Error("Function not implemented.");
    },
    stop: function () {
        throw new Error("Function not implemented.");
    }
};
class Vehicle_2 {
    // Cách 1: 
    // public engine: string;
    // public color: string;
    // private id: string;
    // constructor(engine: string, color: string, id: string) {
    //     this.engine = engine;
    //     this.color = color;
    //     this.id = id;
    // }
    // Cách 2:
    constructor(engine, color, id) {
        this.engine = engine;
        this.color = color;
        this.id = id;
    }
    start() {
        // 
    }
    move() {
        // 
    }
    stop() {
        // 
    }
}
let v2 = new Vehicle_2("xăng ", " đen ", "abc");
let uID1 = 1;
