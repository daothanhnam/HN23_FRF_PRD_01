function empty(o) {
  o = null;
}

var x = [];
empty(x);
console.log(x);
//empty được định nghĩa với param là o 
// o = null 
// khởi tạo x với 1 array rỗng 
// gọi hàm empty với biến x 
// Vì o = null (gán gtri 0 = null chỉ làm ảnh hưởng tới o , k ảnh hưởng tới gtri khác ) nên param truyền  vào k gây ảnh hưởng tới x nên x vẫn là 1 array rỗng 
// console x = []