"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const USER_URL = "https://jsonplaceholder.typicode.com/users";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
function render(arr) {
    const olElement = document.querySelector("ol");
    olElement.innerHTML = arr
        .map((user) => `<li>
        <h2>${user.name}(${user.email})</h2>
        <ol>
        </ol>
        ${user.posts
        .map((post) => `<li>
          <h3>${post.title}<h3>
          <ol>
          ${post.comments.map((comment) => `<li>${comment.name}</li>`).join("")}
          </ol>
          </li>`)
        .join("")}
        </li>`)
        .join("");
}
function getDataPromise(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                resolve(data);
            }
            else {
                reject(new Error(JSON.stringify(xhr.status)));
            }
        };
        xhr.open("GET", url);
        xhr.send();
    });
}
function getAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let users = yield getDataPromise(USER_URL);
            let allUserPosts = yield Promise.all(users.map((user) => getDataPromise(`${USER_URL}/${user.id}/posts`)));
            users.forEach((user, i) => {
                user.posts = allUserPosts[i];
            });
            let allComments = yield Promise.all(allUserPosts.map((posts) => Promise.all(posts.map((post) => getDataPromise(`${POST_URL}/${post.id}/comments`)))));
            allComments.forEach((userComments, userIndex) => {
                userComments.forEach((postComments, postIndex) => {
                    users[userIndex].posts[postIndex].comments = postComments;
                });
            });
            render(users);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// userPromise();
