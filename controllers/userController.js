const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err
      })
    }

    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPass,
    })
    user.save()
      .then(user => {
        res.render('account', { user });
        console.log("User added");

      })
      .catch(error => {
        res.json({
          message: 'An error occurred while saving the user'
        })
      })

  })

}

const login = (req, res, next) => {
  var email = req.body.email
  var password = req.body.password

  User.findOne({email:email})
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err
            })
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, 'verySecretValue', { expiresIn: '1h' })
            res.render('account', { user });
           /* res.json({
              message: 'Login Succesful',
              token
            })*/
          } else {
            res.json({
              message: 'Password does not match'
            })
          }
        })


      } else {
        res.json({
          message: 'No user found'
        })
      }
    })

}




module.exports = {
  register, login
}
