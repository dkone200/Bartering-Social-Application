const express = require('express');
const path = require('path');
const multer = require('multer');
const Items = require('../models/Items');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname,'uploads')); // update destination
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

const trading = (req, res, next) => {
  let items = new Items({
    Title: req.body.Title,
    Description: req.body.Description,
    img: {
      data: path.join(__dirname, 'uploads', req.file.filename), // update file path
      contentType: 'image/png'
    }
  });
  items.save()
    .then(items => {
      console.log("Items added");
      console.log(items);
      res.redirect('/items');
    })
    .catch(error => {
      res.json({
        message: 'An error occurred while saving the barter'
      });
    });
};

const router = express.Router();

router.post('/trading', upload.single('image'), trading);

module.exports = router;
