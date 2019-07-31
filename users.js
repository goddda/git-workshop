// https://jsonplaceholder.typicode.com/

const fetch = require('node-fetch');

const getUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());

exports.getUsers = getUsers;
