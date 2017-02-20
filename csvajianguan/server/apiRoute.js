/**
api接口文档

**/

module.exports = function(app) {
  
  app.get('/api', function(req,res){
  	  res.render('../../api/index.html', {
				locals: {
					title: '体育场馆监管系统API',
				}
			 });
   });



  var userDB=app.models.user;   //用户模型
  var stadiumDB=app.models.Stadium; //场馆
  var sportsActivDB=app.models.SportsActiv; //活动承载表
  var sportsServiceDB=app.models.SportsService; //体育服务
  var sportsServiceDB=app.models.CheapInfo; //场馆优惠信息
  var trainerDB=app.models.Trainer; //体育服务受训者
  var totalDB=app.models.Total; //数据汇总
  var dailyDB=app.models.Daily; //日常活动用户
  var ruleDB=app.models.Rule; //评分规则



  //活动用户列表
  app.get('/daily/user/list',function(req,res){
      userDB.find(function(err,result){

        console.log(result);
        res.send(result);
          
      });
      
  });

  app.get('/user/list',function(req,res){
      userDB.find(function(err,result){

        console.log(result);
        res.send(result);
          
      });
      
  });







  
   




   
};
