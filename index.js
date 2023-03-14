const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const multer = require('multer');

const fs = require('fs');

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
require('dotenv').config() 

const path = require('path');
const router = require('./routes/barterRoutes');
const userRoute = require('./routes/auth')
const public = path.join(__dirname,'public');

const { db } = require('./models/User');


app.use(express.static(public));

app.use(express.urlencoded({
    extended: true
  }))


app.use('/', router); 

//set up passport
app.use(passport.initialize())
app.use(passport.session())


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view engine', 'hjs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



mongoose.connect("mongodb://localhost:27017/testdb",{useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  const db=mongoose.connection
   if(!err) console.log('db connected');
   else console.log('db error');
  });

db.on('error', (err) => {
  console.log(err)
})

db.once('open', () =>{
  console.log('Database connected')
})

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

const items = require('./routes/items');
app.use('/items', items)







app.listen(9000, () => {
    console.log('Server started on port 9000. Ctrl^c to quit.');
})

app.use('/api', userRoute)