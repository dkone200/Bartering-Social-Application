const router = require('../routes/barterRoutes');
const Barter = require("../models/Barter.js");
const Item = require("../models/Items.js");
const Coin = require("../models/Coins.js");
const User = require('../models/User');


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

exports.show_items_page = function (req, res){
    res.render("items")
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




function addBase64(item) {
  const image = item.Image;
  if (image && image.data) {
    const base64 = image.data.toString('base64');
    const newItem = {...item, Image: {...image, base64}};
    // Include other properties of the item object
    newItem.Title = item.Title;
    newItem.Price = item.Price;
    newItem.Description = item.Description;
    // Return the modified item object
    return newItem;
  }
  return item;
}


exports.show_items = function (req, res){
  Item.find({})
  .then(items => {
      const itemsWithBase64 = items.map(addBase64);
      res.render('items', { items: itemsWithBase64 });
  })
  .catch(error => {
      console.error(error);
      res.json({
          message: 'An error occurred while retrieving items'
      });
  });
};

exports.trade_items = function(req, res) {
    // Check if the user object is defined
    if (!req.user) {
      console.log('User object not found in request');
      return res.status(500).send();
    }
  
    // Retrieve the user's email from the decoded JWT payload
    const userEmail = req.user.email;
  
    // Find the user by email
    User.findOne({ email: userEmail }, function(err, user) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
  
      var itemPrice = req.body.Price;
      // Compare the user's coins to the item price
      if (itemPrice >= 0) {
        // Render the shopping cart if the user has enough coins
        //res.render('shopping_cart');
        console.log("credits");
        console.log(itemPrice);
        console.log(user); // print user object to console
      } else {
        // Log an error message if the user doesn't have enough coins
        console.log("Not enough credits");
      }
    }) 
  };
  
  






exports.save_items = function(req, res){
  
}