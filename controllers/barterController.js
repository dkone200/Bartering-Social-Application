const router = require('../routes/barterRoutes');
const Barter = require("../models/Barter.js");


/*
exports.show_home_page = function (req, res){
    res.render("home")
}
/*

exports.show_about_page = function (req, res){
    res.render("about")
}

exports.show_gallery_page = function (req, res){
    res.render("gallery")
}

exports.show_thebarber_page = function (req, res){
    res.render("thebarber")
}
*/

exports.show_landing_page = function (req, res){
    res.render("landingpage")
}

exports.show_login_page = function (req, res){
    res.render("login")
}

exports.show_register_page = function (req, res){
    res.render("register")
}

exports.show_account_page = function (req, res){
    res.render("account")
}

exports.show_barter_page = function (req, res){
    res.render("barter")
}

exports.show_barter = function (req, res){
    Barter.find({})
    .then(barters => {
      res.render('home', { barters: barters });
    })
    .catch(error => {
      res.json({
        message: 'An error occurred while retrieving barters'
      })
    })
}