var api = require('./../controllers/persons_controller.js');

module.exports = function(app){
  app.get('/',function(req,res){
    api.index(req,res);
  });
  app.get('/new/:name/', function(req,res){
  });
  app.get('/remove/:name/', function(req,res){
  });
  app.get('/:name/', function(req,res){
  });
}
