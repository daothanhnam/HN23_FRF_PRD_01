function test() {
  console.log(this);
}

test();

// this:
// khi một fn làm method của 1 object thì this sẽ được trỏ đến object đấy, còn lại this sẽ được trỏ đến global- hoặc còn gọi là object window
// hoặc có giá trị khác khi sử dụng với call / bind / apply
// có giá trị là undefined khi chạy ở trong chế độ strict mode và nó đang không phải là method của một object nào đấy.

var john = {
  name: "john doe",
  sayHi: test,
  sayHello: function () {
    console.log("inside-SayHello : ", this);

    // work around solution
    var _this = this;
    function test(param1, param2) {
      // this.newKey = "12345";
      _this.newKey = "123456";
      console.log("inside-test :", _this);
      console.log("para1 : ", param1);
      console.log("para2 : ", param2);
    }

    test(11, 22);
    // mục đích của việc giá trị "this" bị thay đổi theo từng ngữ cảnh nó được thực thi là để tăng cường tái sử dụng code.
    // 3 công cụ để chỉ định giá trị của "this" : call, bind, apply
    // call : thay đổi giá trị this rồi chạy luôn
    // test.call(this, 11, 22);
    // test.call({ name: ",marry" }, 11, 22);

    // bind : thay đổi giá trị this nhưng không chạy luôn mà trả về bản sao của fn đấy với giá trị this mới,chúng ta sẽ chạy nó sau này khi cần
    var test2 = test.bind(this, 22, 33);
    // test2();

    var paramArr = [2, 4, 1];
    //apply : tương tự 'call' method nhưng parameter được truyền vào dạng array
    // test.apply(this, paramArr);
  },
};

john.sayHi();
john.sayHello();

// Ví dụ về việc mượn method giữa 2 object
var obj1 = {
  name: "john dow",
  sayHi: function () {
    console.log(`Hi from ${this.name}`);
  },
};

var obj2 = {
  name: "Marry Jane",
};

obj1.sayHi.call(obj2);
