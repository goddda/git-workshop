const fetch = require('node-fetch')

const users = require('./users.js');

users.getUsers.then(users => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        users.forEach(user => {
            console.log(`${user.name} has ${posts.filter(post => post.userId === user.id).length} posts`)
        })
    });
});