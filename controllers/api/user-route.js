const router = require("express").Router();
const User  = require('../../models');

router.get("/", async (req, res) => {
    try {
      const userData = await User.findAll({})
      console.log("get user info")
      return res.json(userData)
    } catch (err) {
      res.json(err)
    }
  })

router.post("/", async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        
      });
      res.status(200).json(userData)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    };
  }),

  // Logout
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    };
  });
 
module.exports = router