const posts = [{
        title: 'Post one',
        body: 'This is post one'
    },
    {
        title: 'Post 2',
        body: 'This is Post Two '
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);

}

function createPost() {
    setTimeout((post, callback) => {
        posts.push(post);
        callback();
    }, 2000)
}


createPost({ title: 'Post3', body: 'This is Post 3' }, getPosts);