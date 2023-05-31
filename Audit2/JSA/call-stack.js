function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function logSquare(num) {
  console.log(`Square of ${num} is : ${square(num)}`);
}

var a = 2;

// console.log("AAAA")  ;
// logSquare(a);
// console.log("bbb");

//execution context

// Trước khi một function được chạy sẽ có 3 thông tin(context)
// enviroment variables
// outer enviroment variables => lexical => scope chain ( lần theo chuỗi outer của outer  )
// this

// =>> JS is synchronous  ( đồng bộ ):  // in order ( theo thứ tự)
