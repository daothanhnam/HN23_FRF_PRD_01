// Promise : ra đời trong ES6(2015) là một object sẽ trả về kết quả trong tương lai thông qua việc truy cập method .then
// Promise chain : là chuỗi các "then" nối đuôi nhau, "then" phía trước phải chạy xong mới đến "then" sau.
// Catch là method để để xử lý error một cách tập trung thay vì phải xử lý riêng lẻ trong từng "then".
// Finally là method luôn luôn được chạy cuối cùng sau các "then" và "catch" phía trước, mục đích  là để  thực hiện dọn dẹp một số tác vụ
/// có thể gây ra memory leak như timer, DOM event,....

// promise all: là công cụ để thực thi các promise mà độc lập nhau một cách mà đồng thời nó nhận vào
// một array của các promise và trả ra array theo đúng thứ tựu của array promise đầu tiên

// các công cụ khác ở trong promise: promise.allSetteled,promise.any, promise.race ,promise.resolve , promise.reject,

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Timeout Done");
//     // resolve("john doe");
//     reject("Error data");
//   }, 2000);
// });

// p.then((data) => {
//   return "Hello " + data;
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

const USER_URL = "https://jsonplaceholder.typicode.com/users";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

function getDataPromise(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject(new Erros(xhr.status));
      }
    }

    xhr.open("GET", url);
    3;

    xhr.send();
  });
}

let userPromise = getDataPromise(USER_URL);

// let users = [];
// userPromise
//   .then((userResponse) => {
//     users = userResponse;
//     // console.log(users);
//     let arr = Promise.all(
//       users.map((user) => getDataPromise(`${USER_URL}/${user.id}/posts`))
//     );
//     return arr;
//   })
//   .then((allUserPosts) => {
//     // console.log(allUserPosts);
//     users.forEach((user, i) => {
//       user.posts = allUserPosts[i];
//     });

//     return Promise.all(
//       allUserPosts.map((posts) =>
//         Promise.all(
//           posts.map((post) => getDataPromise(`${POST_URL}/${post.id}/comments`))
//         )
//       )
//     );

//     // return Promise.all(
//     //   allUserPosts
//     //     .flat()
//     //     .map((post) => getDataPromise(`${POST_URL}/${post.id}/comments`))
//     // );
//   })
//   .then((allComments) => {
//     // console.log(allComments);

//     allComments.forEach((userComments, userIndex) => {
//       // console.log(userComments);
//       userComments.forEach((postComments, postIndex) => {
//         users[userIndex].posts[postIndex].comments = postComments;
//       });
//     });
//     console.log(users);
//     render(users);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function render(arr) {
//   const olElement = document.querySelector("ol");
//   olElement.innerHTML = arr
//     .map(
//       (user) =>
//         `<li>
//         <h2>${user.name}(${user.email})</h2>
//         <ol>
//         </ol>
//         ${user.posts
//           .map(
//             (post) =>
//               `<li>
//           <h3>${post.title}<h3>
//           <ol>
//           ${post.comments.map((comment) => `<li>${comment.name}</li>`).join("")}
//           </ol>
//           </li>`
//           )
//           .join("")}
//         </li>`
//     )
//     .join("");
// }

// promise.resolve
let p2 = Promise.resolve("success data ");
console.log("aaa");
p2.then((data) => {
  console.log(data);
});
console.log("bbb");
// promise.reject

// let p3 = Promise.reject("erross data ");
// p3.catch((err) => {
//   console.log(err);
// });

