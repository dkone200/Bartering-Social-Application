const { redirect } = require('express/lib/response');
const Barter = require ('../models/Barter')

const trading = (req, res, next) => {

  let barter = new Barter({
    Title: req.body.Title,
    Item1: req.body.Item1,
    Description: req.body.Description,
  })

  barter.save()
    .then(barter => {
      console.log("Barter added");
      console.log(barter);
      
    })
    .catch(error => {
      res.json({
        message: 'An error occurred while saving the barter'
      })
    })
}



module.exports = {
  trading
 
}
