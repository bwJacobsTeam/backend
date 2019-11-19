const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require('../users/users-model.js');

router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
      Users.add(user)
        .then(saved => {
          res.status(201).json(saved);
        })
        .catch(error => {
          res.status(500).json(error);
        });
  });
  
  router.post("/login", (req, res) => {
    let { email, password } = req.body;
  
    Users.findBy({ email })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {

          const token = getJwtToken(user.email);

          res.status(200).json({
            message: `Welcome ${user.first_name}! have a token...`,
            token
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

  function getJwtToken(email) {
    const payload = {
      email
    };
  
    const secret = process.env.JWT_SECRET || "supersecret";
  
    const options = {
      expiresIn: "1d"
    };
  
    return jwt.sign(payload, secret, options);
  }
  
  module.exports = router;