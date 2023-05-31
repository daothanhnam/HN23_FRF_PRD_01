// scope : phạm vi truy cập của 1 biến
// có 3 loại scope : ES5 ( function , global ) , ES6 ( block )
// Function scope: khi 1 biến / 1 hàm được khai báo ở trong 1 function
// Global scope: khi một  biến/hàm không được khai báo ở trong bất cứ funct nào

// var num = 1;

// before hoisting
function x() {
  console.log(str);
  var str = "john";
  if (false) {
    var num = 2;
  }
  console.log(num);
}

//after hoisting
function x_2() {
  var str;
  var num;
  console.log(str);
  str = "john";
  if (false) {
    var num = 2;
  }
  console.log(num);
}
x();

// console.log(num);

// Block scope : khi sử dụng let/const để khai báo biến kết hợp với
//  một cặp ngoặc nhọn bất kỳ (if,else,while,switch,case ..)
// let ~ var : có thể thay đổi giá trị khởi tạo
// const : không thay đổi được giá trị khởi tạo
//let,const : hoisting vẫn xảy ra nhưng ko cho phép truy cập trước khi khai báo
// và không cho phép khai báo trùng tên

function x_3() {
  let str = "john";
  console.log(str);
  //   if (false) {
  //     let num;
  //     num = 2;
  //   }    
  //   console.log(num);
}
x_3();
