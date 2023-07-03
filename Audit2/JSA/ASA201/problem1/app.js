function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();


//undefined vì do  var a =1 (hosting)  nên biến a đc khai báo nhưng chưa được gán giá trị 
// 2 vì hoisting nên hàm đã đc gọi và trả về foo  =2  
