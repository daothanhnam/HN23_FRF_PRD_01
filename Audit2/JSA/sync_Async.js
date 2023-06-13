// Js is single thread progaming language (đơn luồng) vì nó chỉ có 1 call stack

// JS is  synchronous progaming language ( ngôn ngữ lập trình đồng bộ )

// callback  là một function được truyền vào một function khác dưới dạng đối số có 2 loại 
// đồng bộ và bất đồng bộ 
// Để xử lý các tác vụ bất đồng bộ, js sử dụng 3 cách :
// callback
// promise
// async await 

console.log("AAA");
let h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  console.log("BBB");
});

console.log("CCC");
