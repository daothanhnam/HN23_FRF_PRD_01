// Closure : function con vẫn có thể truy cập vào lexical (cha ông )
// của nó ngay cả khi lexical đấy đã chạy thực thi xong  , đã hoàn thành vòng đời
// bị xóa khỏi call stack // execution <stack></stack>

function outer() {
  var num = 111;
  var str = "john doe";

  function inner() {
    console.log(num);
  }
  return inner;
}
var fn = outer();

function multiply() {
  return "ABCDEF";
}
logSquare(2);
logCube(2);

// fn();
