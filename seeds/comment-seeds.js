const Comment = require('../models/Comment')

const commentData = [
    {
        user_id: 1,
        commentDate: '08/15/2022',
        post_id: 1,
        body: 'Great post!'
    },
    {
        username: "forestgood",
        user_id: 2,
        post_id: 3,
        commentDate: '08/16/2022',
        body: 'This was not helpful.'

    },
    { 
        username: "adaorardor",
        user_id: 3,
        post_id: 2,
        commentDate: '8/01/2022',
        body: 'This was an interesting read!'
    },

]

const seedComments = () =>Comment.bulkCreate(commentData);

module.exports = seedComments;

