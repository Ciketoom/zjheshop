var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./../util/util');
var User = require('./../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



//注册账号的接口
router.post('/register',(req,res) => {
    //这里的req.body 其实使用了body-parser中间件 用来对前端发送来的数据进行解析
    //查询数据库中username= req.body.username 的数据
    User.find({userName: req.body.userName},(err,doc) => {
        if(err){
            res.json({
              status:"1001",
              msg:'查询失败'
          });
        }else{
        		if(req.body.userName=='' | req.body.userPwd=='' | req.body.picLyanzhengma==''){
        			res.json({
		              status:"1002",
		              msg:'用户名，密码或验证码不能为空'
          		});
        		}else{
        			console.log('查询成功'+ doc)
	            //data为返回的数据库中的有相同name的集合
	            if(doc!=0){
	                res.json({
			              status:"1003",
			              msg:'该用户已经注册'
	          		});
	            }else{
	            		var mat = '886';
	            		var sysDate = new Date().Format('yyyyMMddhhmmss');
	            		var r1 = Math.floor(Math.random()*10);
	            		var userId = mat + sysDate + r1;
	                let newUser = new User({
	                    userName : req.body.userName,
	                    userPwd : req.body.userPwd,
	                    userId　:　userId
	                });  
	                //newUser.save 往数据库中插入数据
	                newUser.save((err,doc) => {
	                    if (err) {
	                        res.json({
							              status:'1',
							              msg:'注册失败',
							              result:''
					          			});
	                    } else {
	                        res.json({
							              status:"0",
							              msg:'注册成功',
							              result:doc.newUser
					          			});
	                    }
	                });
	            }
	        }     
        }
    })
});

//登录接口
router.post("/login", function (req, res, next) {
  let param = {
      userName:req.body.userName,
      userPwd:req.body.userPwd
  }
  User.findOne(param, function (err,doc) {
      if(err){
          res.json({
              status:"1",
              msg:err.message
          });
      }else{  
          if(doc){
              res.cookie("userId",doc.userId,{
                  path:'/',
                  maxAge:2*365*24*60*60
              });
              res.cookie("userName",doc.userName,{
                path:'/',
                maxAge:2*365*24*60*60
              });
              res.json({
                  status:'0',
                  msg:'',
                  result:doc.userName 
              });
          }
      }
  });
});

//登出接口
router.post("/logout", function (req,res,next) {
  res.cookie("userId","",{
    path:"/",
    maxAge:-1
  });
  res.json({
    status:"0",
    msg:'',
    result:''
  })
});
//检查是否已经登录
router.get("/checkLogin", function (req,res,next) {
  if(req.cookies.userId){
      res.json({
        status:'0',
        msg:'',
        result:req.cookies.userName || ''
      });
  }else{
    res.json({
      status:'1',
      msg:'未登录',
      result:''
    });
  }
});
//router.get('/checkTou', function (req,res,next) {
//	let userId = req.cookies.userId;
//	User.findOne({userId:userId},function (err,doc){
//	if(err){
//    res.json({
//      status:'1',
//      msg:err.message,
//      result:''
//    });
//  }else{
//    res.json({
//      status:'0',
//      msg:'',
//      result:doc.userTou
//    });
//  }
//}) 
//})


module.exports = router;