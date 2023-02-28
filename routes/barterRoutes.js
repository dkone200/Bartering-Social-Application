const express = require('express');
const router = express.Router();
const controller = require('../controllers/barterController.js');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');
const res = require('express/lib/response');
const User = require('../models/User')
const userController = require('../controllers/userController')
const authenticate = require('../middleware/authanticate')

const passport = require('passport')

/* -------------------- html pages---------------- */

/*
router.get('/home', function(req,res){
    res.redirect('home.html');
})

router.get('/landing', function(req,res){
    res.redirect('landingpage.html');
})

router.get('/login', function(req,res){
    res.redirect('login.html');
})

router.get('/register', function(req,res){
    res.redirect('register.html');
})


router.get('/account', function(req,res){
    res.redirect('account.html');
})


/*router.get('/', controller.show_home_page);

router.get('/about', controller.show_about_page);

router.get('/gallery', controller.show_gallery_page);

router.get('/thebarber', controller.show_thebarber_page);

*/
router.get('/', controller.show_landing_page);

router.get('/login', controller.show_login_page);

router.get('/register', controller.show_register_page);

router.get('/account1', controller.show_account_page);

router.get('/account2', (req, res, next) => {
    res.render('account');
})

router.post('/register', userController.register)
router.post('/login', userController.login)

/*router.post('/register', passport.authenticate('localRegister', {
    successRedirect: '/home'
}))*/






router.use(function(req, res) {
    res.status(404);
    /*return res.sendFile('/404');*/
})

/*router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})*/


module.exports = router;