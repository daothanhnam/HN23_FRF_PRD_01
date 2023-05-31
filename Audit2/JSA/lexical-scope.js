//Lexical scope : nói tới việc kế thừa , funct con được quyền truy cập vào funct cha/ông
//Nhưng cha/ ông ko truy cập được vào con
//=>    nơi khai báo sẽ quyết định được việc kế thừa những gì , không phải nơi thực thi

var num = 1;    
function inner() {
  console.log(num);
}

function outer() {
  var num = 2;
  inner();
}

outer();
