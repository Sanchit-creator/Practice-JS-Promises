// Promises - [resolved, reject, pending]

// function createPosts(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             posts.push(post);
//             const error = true;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Error something went wrong');
//             }
//         }, 1000)
//     })
// }

// createPosts({'title': 'p3', 'body': 'This is three'}).then(getPosts).catch(err => console.error(err))

// Many promises -> Promise.all

const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'delay occured'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))
