const User = require('./model/User.js');

User.create({
    firstName: 'Marcel',
    lastName: 'Melo'
}).then(user => {
    console.log(user);
});