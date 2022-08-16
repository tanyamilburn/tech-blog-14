const User = require('../models/User')

const userData = [
    {
        username: 'tmilburn',
        email: 'tanya@email.com',
        password: 'hello'

    },
    {
        username: 'forestgood',
        email: 'forest@email.com',
        password: 'goodbye'

    },
    {
        username: 'adaorardor',
        email: 'adaveen@email.com',
        password: 'password'

    },
]

const seedUsers = () =>User.bulkCreate(userData);

module.exports = seedUsers;