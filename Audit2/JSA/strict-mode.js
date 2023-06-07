"use strict";
var john = {
  name: "john",
  sayHi: function () {
    function test() {
      console.log(this);
    }
    test();
  },
};
john.sayHi();
