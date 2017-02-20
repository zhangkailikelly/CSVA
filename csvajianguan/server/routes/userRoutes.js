/**
 * Created by jey on 2016/4/9.
 */
var User;
exports.setUserModel = function(usermodel){
    if(!User){
      User = usermodel;
    }
};
var Stadium;
exports.setStadiumModel = function(stadiummodel){
  if(!Stadium){
    Stadium = stadiummodel;
  }
};


exports.index = function(req,res){
  console.log("******* 主页********");
  var user = req.session.user;
  res.render("index",{
    "user":user,
    "status":req.session.currentStadium
  });
}

exports.managerIndex = function(req,res){
  console.log("******* 协会端主页********");
  var user = req.session.user;
  console.log(user.username);
  res.render("index",{
    "user":user
  });
}


exports.registerAdminPage = function(req, res) {
  res.render("registerAdmin",{
    message:""
  });
}

exports.registerPage = function(req, res) {
  res.render("register",{
    message:""
  });
}


exports.loginPage = function(req, res) {
  res.render("login",{
    message:""
  });
}

exports.register = function(req, res) {

  var _user = req.body.user;
  //判断用户是否存在
  User.findOne({"where":{"email":_user.email}}, function(err, hasUser){
    if(err){
      console.log(err)
    }
    if(hasUser){
      res.render('register', {
        message:_user.email+ "已经被注册",
      });
    }
    else{
      _user.password = createHash(_user.password);
      User.create(_user,function(err,data){
       // res.redirect("/login");
        res.render('register', {
          message:_user.email+ "注册成功",
        });
      })
    }
  })
}

//验证登录权限中间件
exports.loginRequired = function(req, res, next){
  var user = req.session.user;
  if( !user ){
    return res.redirect('/login');
  }else{
    next();
  }


};

//验证场馆信息中间件
exports.hasStadiumRequired = function(req, res, next){
  var currentStadium = req.session.currentStadium;
  if( !currentStadium ){
    return res.redirect('/login');
  }
  next();
};

//检查是否是协会端人员
exports.adminRequired = function(req, res, next){
  var user = req.session.user;
  if(user.mark != 1){
    return res.redirect("/");
  }
  next();
};

exports.login = function(req, res) {

  var _user = req.body.user;
  _user.password = createHash(_user.password)
  User.findOne({"where":_user},function(err,data){

    if(data){
      req.session.user = data;
      return  res.send({"state":true,currentUser:data})
    }
    else{
      return  res.send({"state":false,"message":"邮箱和密码不匹配"})
    }

  })
}

exports.logout = function(req, res) {
  delete req.session.user; //删除会话session
   res.redirect('login');
}

//检查是否是协会端人员
exports.adminRequired = function(req, res, next){
  var user = req.session.user;
  if(user.mark != 1){
    return res.redirect("/");
  }
  next();
};

//验证用户场馆信息
exports.stadiumRequired = function(req, res, next){
    var _user = req.session.user;
    if(_user.mark == 1){
      return res.redirect("/Manager");
    }

    Stadium.findOne({"where":{"userid":_user.id}},function (err, data) {
      if(data && data.state){
        initStatudSession(req, data);
        switch(data.state)
        {
          case 2:{
            next();
            break;
          }
          default:{
            //审核未通过,或者正在审核
            res.render("pendStadium",{stadium:data,submitType:''});
            break
          }
        }
      }else{
          //该用户位场馆人员并且还没有提交过场馆信息
          return res.redirect("/stadiumAdd");
      }

    })

}

exports.checkStadium = function(req, res) {
  //var _user = req.session.user;
  //Stadium.findOne({"where":{"userid":_user.id}},function (err, data) {
  //  if(data && data.state){
  //    switch(data.state)
  //    {
  //      case 2:{
  //        return res.redirect("/");
  //      }
  //      default:{
  //        //审核未通过,或者正在审核
  //        res.render("pendStadium",{stadium:data});
  //        break
  //      }
  //    }
  //  }else{
  //    //该用户还没有提交过场馆信息
  //    return res.redirect("/stadiumAdd");
  //  }
  //
  //})
  return res.redirect("/");
}
var crypto = require('crypto');
var createHash = exports.createHash = (text) => {
  var hasher=crypto.createHash("md5");
  hasher.update(text);
  return hasher.digest('hex');//hashmsg为加密之后的数据
}


const initStatudSession = (req, stadiumInstance)=>{
  req.session.currentStadium = stadiumInstance; //缓存一份currentStadium Session信息
  var tempPics = 0;
  if(req.session.currentStadium.picture){
    tempPics = req.session.currentStadium.picture.length;

  }
  req.session.currentStadium.pictureCount = tempPics
}
