var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require('./../util/util');
//var User = require('./../models/user');
var Schedules = require('./../models/schedules');

router.get("/schedulesList", function (req,res,next) {
  Schedules.find({}).sort({'playDate':-1}).exec(function (err,doc){
  	if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:doc 
      });
    }
  })   
});

module.exports = router;
