const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const Items = require('../models/Items');




const store = (req, res, next) => {
  let items = new Items({
      Title: req.body.Title,
      Price: req.body.Price,
      Description: req.body.Description,
  });

  if (req.file) {
      items.Image = { 
        data: fs.readFileSync(req.file.path),
        contentType: 'image/png'
      };
  }

  items.save()
      .then(items => {
          console.log("Items added");
          console.log(items);
          res.redirect('/items');
      })
      .catch(error => {
          console.log(error);
          res.json({
              message: 'An error occurred while saving the barter'
          });
      });
};





  module.exports = { store }
  