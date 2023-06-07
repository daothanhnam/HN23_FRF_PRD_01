var add = (a, b) => {
  return a + b;
};

// khi chỉ có 1 parameter, được phép loại bỏ dấu (), nhưng không nên dùng
// khi phần body chỉ có một lệnh , lệnh đấy là lệnh return => được phép loại bỏ dấu ngoặc nhọn {} và return.
// var square = n => n * n;

// đặc trừng của arrow function là nó không có this => sẽ lấy this của function cha( execution context ) nơi nó được khai báo, không thay đổi
// được giá trị của this sau khi đã xác định được giá trị  => khi sử dụng call, bind, apply sẽ không có tác dụng.

var test = () => {
  console.log(this);
};
test();

var john = {
  name: "john dow",
  sayHi: test,
  sayHello: function () {
    // var test = () =>{
    //   console.log(this);
    // }
    test();
  },
};

john.sayHi();
john.sayHello();
