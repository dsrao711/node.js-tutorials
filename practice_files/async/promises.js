const posts = [{
        title: 'Post 1',
        body: 'This is Post 1'
    },
    {
        title: 'Post 2',
        body: 'This is Post 2'
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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// createPost({ title: 'Post three', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err));

// Promise.all

// const promise1 = Promise.resolve('Hwelle');
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'GooGoo')
// );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json());


// Promise.all([promise1, promise2, promise3, promise4]).then(
//     values => console.log(values)
// );


// Async await

// async function init() {
//     await createPost({ title: '333', body: 'This is demo' });
//     getPosts();
// }

// init();

// async await fetch users 

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();