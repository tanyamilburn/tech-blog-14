const Post = require('../models/Post')

const postData = [
    {
        title: "How to create a blog with MVC",
        username: "tmilburn",
        user_id: 1,
        date: '08/15/2022',
        body: '“Aging is an extraordinary process whereby you become the person you always should have been.” --David Bowie'
    },
    {
        title: "Python for your developer toolkit",
        username: "forestgood",
        user_id: 2,
        date: '08/16/2022',
        body: '“The truth will set you free. But not until it is finished with you.” -David Foster Wallace'

    },
    {
        title: "A glimpse into the world of Big Data",
        username: "adaorardor",
        user_id: 3,
        date: '8/01/2022',
        body: '“Maybe the only thing that hints at a sense of Time is rhythm; not the recurrent beats of the rhythm but the gap between two such beats, the gray gap between black beats: the Tender Interval.” --Vladamir Nabokov'
    },

]

const seedPosts = () =>Post.bulkCreate(postData);

module.exports = seedPosts;

