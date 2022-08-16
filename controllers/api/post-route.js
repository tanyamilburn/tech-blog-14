const router = require("express").Router();
const Post  = require('../../models');
const withAuth = require("../../utils/auth")

router.post("/", async (req, res) => {
    try {
      const dbPostData = await Post.create({
        title: req.body.title,
        username: req.session.username,
        user_id: req.session.user_id,
        date: new Date(),
        body: req.body.body,
        post_id: req.session.id,
      });
      res.status(200).json(dbPostData)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    };
  }),

  router.put("/edit/:id", withAuth, async (req, res) => {
    // console.log(req.body)
    try {
      const editPost = await Post.update(
        {
          title: req.body.title,
          body: req.body.body,
          date: new Date(),
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      
      res.status(200).json(editpost)
      // console.log(res)
    } catch (err) {
      res.status(500).json(err)
    }
  })

  router.delete("/:id", withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        },
      })
  
      res.status(200).json(postData)
    } catch (err) {
      res.status(500).json(err)
    }
  })
module.exports = router