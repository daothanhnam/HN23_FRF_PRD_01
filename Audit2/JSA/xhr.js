// AJAX(Asynchronous JavaScript And XML):là việc trao đổi dữ liệu ngầm ở phía dưới(sử dụng XHR)
// sau đó hiển thị kết quả ra màn hình ( sử dụng DOM)
//Khi trao đổi dữ liệu: có nhiều định dạng để mô tả Data(XML, JSON ... )

//JSON(Js Object Notation ) : là string mặc dù nhìn giống obj , hoặc array
//Json dự trên cú pháp của js object, gồm các cặp key - value nhưng value có thể là
// key phải bọc trong dấu nháy kép
// number , string , array , object ... nhưng không được là một function

// let john = {
//   fName: "john doe ",
//   base: 1000,
//   overTime: 20,
//   rate: 15,
//   tax: 5,
//   sayHi: function () {
//     console.log("Hi!");
//   },
// };

// let json = JSON.stringify(john);
// console.log(json);

// let obj2 = JSON.parse(json);

// console.log(obj2);

// HTTP Method: get , post , put ,delete
// Rest là một quy chuẩn để xây dựng api bên cạnh những chuẩn khác như GRPC , SOAP , GraphQL
// restful là những api xây dựng theo quy chuẩn Rest

const USER_URL = "https://jsonplaceholder.typicode.com/users";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

function getData(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      callback(undefined, data);
    } else {
      callback(new Erros(xhr.status), undefined);
    }
  };

  xhr.open("GET", url);

  xhr.send();
}

getData(USER_URL, (error, users) => {
  if (error) {
    console.log(error);
    return;
  }
  users.forEach((user, i) => {
    getData(`${USER_URL}/${user.id}/posts`, (postError, posts) => {
      if (postError) {
        console.log(postError);
        return;
      }

      users[i].posts = posts;

      users[i].posts.forEach((post, postIndex) => {
        getData(`${POST_URL}/${post.id}/comments`, (commentError, comments) => {
          if (commentError) {
            console.log(commentError);
            return;
          }
          posts[postIndex].comments = comments;
          render(users);
          // console.log(comments);
        });
      });
    });
  });
});

function render(arr) {
  const olElement = document.querySelector("ol");
  olElement.innerHTML = arr
    .map(
      (user) =>
        `<li>
      <h2>${user.name}(${user.email})</h2>
      <ol>
      </ol>
      ${user.posts
        .map(
          (post) =>
            `<li>
        <h3>${post.title}<h3>
        <ol>
        ${post.comments.map((comment) => <li>${comment.name}</li>).join("")}
        </ol>
        </li>`
        )
        .join("")}
      </li>`
    )
    .join("");
}
