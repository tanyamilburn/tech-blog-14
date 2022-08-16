const router = require("express").Router();
const Comment = require('../../models');
const withAuth = require("../../utils/auth")

router.post("/", async (req, res) => {
    try {
      const dbCommentData = await Comment.create({
        username: req.session.username,
        user_id: req.session.user_id,
        date: new Date(),
        body: req.body.body,
        post_id: req.session.id,
      });
      res.status(200).json(dbCommentData)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    };
  }),


  router.delete("/:id", withAuth, async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      })
  
      res.status(200).json(commentData)
    } catch (err) {
      res.status(500).json(err)
    }
  })
module.exports = router