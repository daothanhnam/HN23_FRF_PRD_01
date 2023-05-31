// Max safe interger
// var a = Number.MAX_SAFE_INTEGER + 1;

// var b = Number.MAX_SAFE_INTEGER + 2;
//
// console.log(a === b);
//
// var maxSafeBigint = BigInt(Number.MAX_SAFE_INTEGER);
//
// var a2 = maxSafeBigint + 1n;
// var b2 = maxSafeBigint + 2n;
//
// console.log(a2 === b2);
//

// EPSILON
// console.log(0.1 + 0.1 == 0.2);
// console.log(0.1 + 0.2 === 0.3);

// var a = 0.1;
// var b = 0.2;
// var c = 0.3;
// if (Math.abs(a + b - c) <= Number.EPSILON) {
//   console.log("a + b equal c ");
// } else {
//   console.log("a + b not equal c ");
// }

// JS Native objects

// var str1 = "john doe ";
// console.log(str1);
// var str2 = new String("john doe");
// console.log(str2);
// COERCION
var a = 1;
var b = "1";

// console.log(1 == b);

function add(a, b) {
  // if(!a ) a = 0 ;
  // if ( !b ) b = 0 ;

  a = a ? a : 0 ;
  b = !b ? 0 : b;
  return a + b;
}

console.log(add(1, 2));
console.log(add(1));
console.log(add());
