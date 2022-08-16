const router = require("express").Router()
const sequelize = require("../config/connection")
const { Post, User, Comment} = require("../models")
const withAuth = require("../utils/auth")

//gets dashboard page renders users blogposts
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll().catch((err) => {
      res.json(err)
    })
    const userPosts = postData.filter(
      (post) => post.user_id === req.session.user_id
    )
    const posts = userPosts.map((post) => post.get({ plain: true }))

    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    console.log(err)
  }
})

//gets route to edit a post
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await posts.findByPk(req.params.id)

    const post = postData.get({ plain: true })

    res.render("dashboard", {
      ...post,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router