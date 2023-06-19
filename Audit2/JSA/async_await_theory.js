function getDataPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 2000);
  });
}

const USER_URL = "https://jsonplaceholder.typicode.com/users";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// async function  luôn trả về một Promise object bởi vì
// nếu giá trị  nó return không phải là một Promise object sẵn thì nó sẽ tự động bọc lại giá trị đấy
// trong một Promise object (Promise.resolve)
// nếu giá trị return ra là Promise object sẵn thì nó sẽ return thằng mà không bọc trong Promise obj nữa

// await luôn trả về resolve
// trong try sẽ luôn lấy resolve , catch sẽ lấy reject 
async function getAllData() {
  //   console.log("BBBB");
  //   //get user
  try {
    let users = await getDataPromise(USER_URL);
    console.log(users);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
  //   console.log("CCCC");

  //   return Promise.resolve("john doe ");

//   return new Promise((resolve, reject) => {
//     resolve("john doe ");
//   });
}

// getAllData();

// console.log("AAAAAA");
// let result = getAllData();
// result.then((data) => {
//   console.log(data);
// });
// console.log("DDD");



async function test1()  { 
  return "john doe";

}

async function test2() { 
  let data = await test1();
  console.log(data);
}

test2();