var mongoose = require('mongoose')
var Person = require('Person');

module.exports = (function(){
  ex
    index: function(req,res){
      Person.find({}, function(err,results){
        if(err){
          console.log(err);
        } else {
          res.json(results);
        }
      })
    }
  }
})
