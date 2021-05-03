var express = require('express');
var router  = express.Router();
var User    = require("../models/User");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  if(username && password) {
    return User.find({
      username, password
    })
    .then((user) => {
      if(user.length == 1) {
        return res.join({logged: 1, message: `Login Successful, welcome back ${user[0].username}.` });
      } else {
        return res.json({logged: 0, message: `Login Failed`});
      }
    })
    .catch(() => res.json({ message: "Something went wrong" }));
  }
  return res.json({ message: "Invalid username or password" });
});

module.exports = router;
