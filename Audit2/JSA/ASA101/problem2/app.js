function swap(a, b) {
  var tmp = a;
  a = b;
  b = tmp;
}

var x = 1;
var y = 2;
swap(x, y);

console.log(x);

// function swap truyền vào  2 param là a và b 
// tmp  được gán giá trị là a 
// a gán giá trị là b 
// b gán giá trị là tmp
// => giá trị truyền vào chỉ ảnh hưởng  tới a và b , không ảnh hưởng tới x và y ở bên ngoài 
// => truyền x, y vào hàm swap => k ảnh hưởng tới x ,y => x = 1 
