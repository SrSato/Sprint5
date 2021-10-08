//Requireds and instance
const express = require('express');
const routes = express.Router();


//------------------ROUTING----------------------------------------------------
routes.get('/welcome', function(req,res){
  return res.status(200).send({ success: true, result: `Welcome!!!`});
})

module.exports=routes;
