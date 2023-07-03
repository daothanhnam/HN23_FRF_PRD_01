var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);


// a = 1 vì 
// khai báo a , gán giá trị là 1 
// khai báo b , trong b gán giá trị  cho a = 10 => giá trị của a bên ngoài không thay đổi , chỉ thay đổi ở trong hàm b 
// => cl (a) = 1 