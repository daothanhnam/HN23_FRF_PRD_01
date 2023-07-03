const USER_URL = "https://jsonplaceholder.typicode.com/users";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

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
          ${post.comments.map((comment) => `<li>${comment.name}</li>`).join("")}
          </ol>
          </li>`
          )
          .join("")}
        </li>`
    )
    .join("");
}
function getDataPromise(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject(new Error(xhr.status));
      }
    };

    xhr.open("GET", url);
    xhr.send();
  });
}

async function userPromise() {
  try {
    let users = await getDataPromise(USER_URL);
    let allUserPosts = await Promise.all(
      users.map((user) => getDataPromise(`${USER_URL}/${user.id}/posts`))
    );

    users.forEach((user, i) => {
      user.posts = allUserPosts[i];
    });

    let allComments = await Promise.all(
      allUserPosts.map((posts) =>
        Promise.all(
          posts.map((post) => getDataPromise(`${POST_URL}/${post.id}/comments`))
        )
      )
    );

    allComments.forEach((userComments, userIndex) => {
      userComments.forEach((postComments, postIndex) => {
        users[userIndex].posts[postIndex].comments = postComments;
      });
    });

    render(users);
  } catch (error) {
    console.log(error);
  }
}
// userPromise();
