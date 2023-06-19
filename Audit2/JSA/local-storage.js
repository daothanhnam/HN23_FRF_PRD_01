let nums = [11, 22, 33, 44];

localStorage.setItem("numArray", JSON.stringify(nums));

let data = localStorage.getItem("numArray");

console.log(JSON.parse(data));

//Cookie vs localStorage
//cookie: dung lượng thấp(4kb), có tính thời hạn, ddc tự động gửi kèm tất cả các rq lên sever
//localStorage: dung luongjw lớn (5mb), ko có thời hạn, tức là ột khi đã lưu sẽ lưu vĩnh viễn cho tới khi được xóa
//sessionStorage: chỉ lưu theo phiên hiện atij khi đong trang web sẽ tự động bị khóa 