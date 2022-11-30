let arrayPosts = [];
let posts = [
  {
    postId: 1,
    postTitle: "Title number 1",
    postBody: "Number-1",
  },
  {
    postId: 2,
    postTitle: "Title number 2",
    postBody: "Number-2",
  },
  {
    postId: 3,
    postTitle: "Title number 3",
    postBody: "Number-3",
  },
];
let comments = [
  {
    commentId: 1,
    commentToPostID: 1,
    commentBody: "THIS IS COMMENT NUMBER 1",
  },
  {
    commentId: 2,
    commentToPostID: 1,
    commentBody: "THIS IS COMMENT NUMBER 2",
  },
  {
    commentId: 3,
    commentToPostID: 2,
    commentBody: "THIS IS COMMENT NUMBER 3",
  },
  {
    commentId: 4,
    commentToPostID: 2,
    commentBody: "THIS IS COMMENT NUMBER 4",
  },
  {
    commentId: 5,
    commentToPostID: 3,
    commentBody: "THIS IS COMMENT NUMBER 5",
  },
  {
    commentId: 6,
    commentToPostID: 3,
    commentBody: "THIS IS COMMENT NUMBER 6",
  },
  {
    commentId: 7,
    commentToPostID: 3,
    commentBody: "THIS IS COMMENT NUMBER 7",
  },
];

let getPostPromise = new Promise((resolve) => {
  setTimeout(() => {
    console.log(posts);
    resolve(posts);
  }, 4000);
});

let getCommentsPromise = new Promise((resolve) => {
  setTimeout(() => {
    console.log(comments);
    resolve(comments);
  }, 5000);
});

getPostPromise
  .then((allPost) => pushPost(allPost))
  .then(() => getCommentsPromise)
  .then((allComment) => pushComments(allComment))
  .then(() => arrayPosts)
  .then(() => printToHtml());

function pushPost(post) {
  arrayPosts.push(post);
  return post;
}
function pushComments(comments) {
  arrayPosts.push(comments);
  return comments;
}

function printToHtml() {
  let print = " ";
  arrayPosts[0].forEach((post) => {
    print += `<h1>${post.postTitle}</h1>`;
    arrayPosts[1].forEach((comments) => {
      if (comments.commentToPostID == post.postId) {
        print += `<p>${comments.commentBody}</p>`;
      }
    });
  });
  document.body.innerHTML = print;
}
