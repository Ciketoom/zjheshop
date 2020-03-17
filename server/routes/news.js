var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./../util/util');
//var User = require('./../models/user');
var News = require('./../models/news');

mongoose.connect('mongodb://127.0.0.1:27017/dumall');

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});


router.get("/newsList", function (req,res,next) {
  News.find({}).sort({'newClicks':-1}).exec(function (err,doc){
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

router.get("/newsTou", function (req,res,next) {
  News.find({},).sort({'newDate':-1}).limit(1).exec(function (err,doc){
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

router.get("/newsdetails", function (req,res,next) {
	let newId = req.param("newId");
  News.findOne({newId:newId},function (err,doc){
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

router.post("/zanEdit", function (req,res,next) {
	let newId = req.body.newId;
	let commentId = req.body.commentId,
			commentZan = req.body.commentZan,
			zanCheck = req.body.zanCheck;
  News.update({newId:newId, "commentList.commentId":commentId},{
  	"commentList.$.commentZan":commentZan,
  	"commentList.$.zanCheck":zanCheck,
  },function (err,doc){
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
        result:'suc'
      });
      
    }
  }) 
});

router.post("/comedit", function (req,res,next) {
	var userName = req.cookies.userName,
			newId = req.body.newId,
	 		commentCon = req.body.commentCon;
	console.log(newId,userName,commentCon);
  News.findOne({'newId':newId},function (err,doc){
  	if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      });
    }else{
    	var platform = '00';
    	var commentDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
    	var commentZan = '0';
    	var zanCheck = '0'; 	
    	var commentName = userName;
    	var r1 = Math.floor(Math.random()*20);
    	var r2 = Math.floor(Math.random()*20);
    	var commentId =  r1  + platform +r2;
    	var commentAvatar ='user1.jpg';
    	var comment ={
    		commentName:commentName,
    		commentCon:commentCon,
    		commentDate:commentDate,
    		commentZan:commentZan,
    		zanCheck:zanCheck,
    		commentId:commentId,
    		commentAvatar:commentAvatar
    	};
    	
    	doc.commentList.push(comment);
    	
    	doc.save(function (err1,doc1) {
          if(err1){
            res.json({
              status:"1",
              msg:err1.message,
              result:''
            });
          }else{
            res.json({
              status:"0",
              msg:'',
              result:doc1.commentList
            });
          }
       }); 
    }
  })
});


//router.post("/comedit", function (req,res,next) {
//var userName = req.cookies.userName,
//		  newId = req.body.newId,
//		  commentCon = req.body.commentCon;
//User.findOne({userId:userId}, function (err,doc) {
//   if(err){
//      res.json({
//          status:"1",
//          msg:err.message,
//          result:''
//      });
//   }else{
//     var address = '',goodsList = [];
//     //获取当前用户的地址信息
//     doc.addressList.forEach((item)=>{
//        if(addressId==item.addressId){
//          address = item;
//        }
//     })
//     //获取用户购物车的购买商品
//     doc.cartList.filter((item)=>{
//       if(item.checked=='1'){
//         goodsList.push(item);
//       }
//     });
//			 var platform = '622';
//     var r1 = Math.floor(Math.random()*10);
//     var r2 = Math.floor(Math.random()*10); 
//     var sysDate = new Date().Format('yyyyMMddhhmmss');
//     var createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
//     var orderId = platform + r1 + sysDate + r2;
//     var order = {
//        orderId:orderId,
//        orderTotal:orderTotal,
//        addressInfo:address,
//        goodsList:goodsList,
//        orderStatus:'1',
//        createDate:createDate
//     };
//
//     doc.orderList.push(order);
//
//     doc.save(function (err1,doc1) {
//        if(err1){
//          res.json({
//            status:"1",
//            msg:err1.message,
//            result:'fff'
//          });
//        }else{
//          res.json({
//            status:"0",
//            msg:'',
//            result:{
//              orderId:order.orderId,
//              orderTotal:order.orderTotal
//            }
//          });
//        }
//     });
//   }
//})
//});


module.exports = router;