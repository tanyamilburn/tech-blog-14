const router = require('express').Router();
const authRoute = require('./auth-route.js');
const userRoute = require('./user-route.js');
const postRoute = require('./post-route.js');
const commentRoute = require('./comment-route.js');

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/post', postRoute);
router.use('/comment', commentRoute);


module.exports = router;