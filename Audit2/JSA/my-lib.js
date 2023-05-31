// function x() {
//   function multiply(a, b) {
//     return a * b;
//   }

//   function square(n) {
//     return multiply(n, n);
//   }

//   window.logSquare = function (num) {
//     console.log(`Square of ${num} is : ${square(num)}`);
//   };
//   window.logCube = function (num) {
//     console.log(`Cube of ${num} is : ${square(num) * num}`);
//   };
// }

// x();

//IIFE: Immediately Invoked Function Expression - Function expression được khởi tạo
// và thực thi ngay lập tức

(function () {
  function multiply(a, b) {
    return a * b;
  }

  function square(n) {
    return multiply(n, n);
  }

  window.logSquare = function (num) {
    console.log(`Square of ${num} is : ${square(num)}`);
  };
  window.logCube = function (num) {
    console.log(`Cube of ${num} is : ${square(num) * num}`);
  };
})();
