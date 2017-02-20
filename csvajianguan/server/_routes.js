
const user = require("./routes/userRoutes");
const active = require("./routes/sportsActivRoutes");
const stadium = require("./routes/stadiumRoutes");
const rule = require("./routes/ruleRoutes");
const cheapInfo = require("./routes/cheapInfoRoutes");
const sportsService = require("./routes/sportsServiceRoutes");
const trainer = require("./routes/trainerRoutes");
const total = require("./routes/totalRoutes");
const daily = require("./routes/dailyRoutes");


module.exports = function(app) {


//用户登录，注册路由
  user.setUserModel(app.models.user);
  user.setStadiumModel(app.models.Stadium);
  app.get('/', user.loginRequired, user.stadiumRequired, user.index);       //主页面
  app.get('/Manager', user.loginRequired, user.adminRequired, user.managerIndex);       //协会端主页面
  app.get('/index',user.loginRequired, user.stadiumRequired,  user.index); //登录主登录页面(需要验证是否已经登录)
  app.get('/register', user.registerPage); //注册页面
  app.get('/registerAdmin', user.registerAdminPage); //注册页面
  app.get('/login', user.loginPage);   //登录页面
  app.post('/login', user.login); //登录
  app.post('/register', user.register); //注册
  app.get('/logout', user.logout);
  app.get('/checkStadium',user.loginRequired, user.stadiumRequired, user.checkStadium); //最终废弃掉



  //体育赛事路由
  active.setSportsActivModel(app.models.SportsActiv)
  app.get('/gamesList/', user.loginRequired,user.hasStadiumRequired, active.gamesList);  //默认是查找体育赛事
  app.get('/gamesList/:type', user.loginRequired,user.hasStadiumRequired, active.gamesList);//传入type,会查找对应的活动类型
  app.post('/gamesList/', user.loginRequired, user.hasStadiumRequired, active.gamesList);
  app.post('/gamesList/:type', user.loginRequired, user.hasStadiumRequired, active.gamesList);
  app.get('/gamesMain', user.loginRequired, user.hasStadiumRequired, active.gamesMain);
  app.get('/gamesMain/:type', user.loginRequired, user.hasStadiumRequired, active.gamesMain);
  app.get('/gameAdd', user.loginRequired, user.hasStadiumRequired, active.gamesAddPage);

  app.post('/searchGame', user.loginRequired, user.hasStadiumRequired,active.gamesList);
  app.post('/searchGame/:type', user.loginRequired, user.hasStadiumRequired,active.gamesList);
  app.post('/gameAdd', user.loginRequired, user.hasStadiumRequired, active.gamesAdd);
  app.get('/activeAdd/:type', user.loginRequired, user.hasStadiumRequired, active.activeAddPage);
  app.get('/activeAdd', user.loginRequired, user.hasStadiumRequired, active.activeAddPage);


  app.get('/gameDetail/:id', user.loginRequired, active.gamesDetail);
  app.get('/activeDetail/:id', user.loginRequired, active.activeDetail);
  app.delete('/gameDelete/:id', user.loginRequired, active.gamesDelete);


  //场馆路由
  stadium.setStadiumModel(app.models.Stadium);
  stadium.setStadium_DailyModel(app.models.Daily);
  app.get('/stadiumAdd',user.loginRequired, stadium.stadiumAddPage);
  app.post('/stadiumAdd', user.loginRequired, stadium.stadiumAdd);
  app.post('/stadiumDetail', user.loginRequired, stadium.stadiumDetail);
  app.post('/stadiumUpdate', user.loginRequired, stadium.update);
  app.post('/stadiumUpdateAjax', user.loginRequired, stadium.updateJson);
  app.post('/stadiumUpdatePic/:imgDir', user.loginRequired, stadium.updatePic);
  app.post('/stadiumUpdatePic', user.loginRequired, stadium.updatePic);
  app.post('/stadiumDeletePic/:img', user.loginRequired, stadium.deletePic);
  app.get('/stadiumMain',user.loginRequired, stadium.stadiumMain);
  app.get('/stadiumAuditDetail/:id', user.loginRequired, stadium.stadiumAuditDetail); //协会端人员，查看当前场馆
  app.get('/stadiumAuditDetail', user.loginRequired, stadium.stadiumAuditDetail);//协会端人员，查看当前场馆
  app.post('/stadiuAudit/:id/:state',  user.loginRequired, stadium.stadiumAudit);
  app.post('/stadiuSearch', user.loginRequired, stadium.stadiumSearchList);
  app.get('/stadiumFunctionBlock/:id', user.loginRequired, stadium.stadiumFunctionBlock);
  app.get('/stadiumFunctionBlock', user.loginRequired, stadium.stadiumFunctionBlock);

  app.get('/stadiumDataCount/:id', user.loginRequired, stadium.stadiumDataCount);
  app.get('/stadiumDataCount', user.loginRequired, stadium.stadiumDataCount);
  app.get('/stadiumDataCountUpdateTable', user.loginRequired, stadium.stadiumDataCountUpdateTable);
  app.post('/stadiumDataCountSearch', user.loginRequired, stadium.stadiumDataCountSearch);


  app.get("/stadiumInfo",  user.loginRequired,user.hasStadiumRequired, stadium.stadiumInfo);

  //场馆优惠信息路由
  cheapInfo.setCheapInfoModel(app.models.CheapInfo);
  app.get("/cheapInfoMain", user.loginRequired, cheapInfo.cheapInfoMainPage );
  app.post("/cheapInfoList", user.loginRequired, cheapInfo.cheapInfoMainList );
  app.get("/cheapInfoAdd", user.loginRequired, cheapInfo.cheapInfoAddPage );
  app.get("/cheapInfoUpdate/:id", user.loginRequired, cheapInfo.cheapInfoAddPage );
  app.post("/cheapInfoAdd", user.loginRequired, cheapInfo.cheapInfoAdd );
  app.delete("/cheapInfoDelete/:id", user.loginRequired, cheapInfo.cheapInfoDelete );


  //体育服务路由
  sportsService.setSportsServiceModel(app.models.SportsService);
  app.get('/serviceMain/:type', user.loginRequired, user.hasStadiumRequired, sportsService.serviceMain);
  app.get('/serviceAdd/:type', user.loginRequired, user.hasStadiumRequired, sportsService.serviceAddPage);
  app.post('/serviceAdd', user.loginRequired, user.hasStadiumRequired, sportsService.serviceAdd);
  app.post('/searchServices/:type', user.loginRequired, user.hasStadiumRequired, sportsService.serviceTable);
  app.get('/serviceDetail/:id', user.loginRequired, sportsService.serviceDetail);
  app.delete("/serviceDelete/:id", user.loginRequired, sportsService.serviceDelete );

  //体育服务受训者路由
  trainer.setTrainerModel(app.models.Trainer);
  trainer.setSportsServiceModel(app.models.SportsService);
  app.get('/trainerMain/:serviceId', user.loginRequired, user.hasStadiumRequired, trainer.trainerMain);
  app.post('/trainerAdd', user.loginRequired, user.hasStadiumRequired, trainer.trainerAdd);
  app.delete('/trainerDelete/:id', user.loginRequired, user.hasStadiumRequired, trainer.trainerDelete);
  app.post('/trainerSearch/:serviceId', user.loginRequired, user.hasStadiumRequired, trainer.trainerTable);

  //数据汇总路由
  total.setAppModels(app.models);
  app.get("/totalArea", user.loginRequired, user.hasStadiumRequired, total.totalAreaPage);
  app.post("/totalArea", user.loginRequired, user.hasStadiumRequired, total.totalArea);
  app.post("/totalAreaJson", user.loginRequired, user.hasStadiumRequired, total.totalAreaJson);
  app.get("/totalHours", user.loginRequired, user.hasStadiumRequired, total.totalhoursPage);
  app.post("/totalHours", user.loginRequired, user.hasStadiumRequired, total.totalhoursJson);
  app.get("/totalActive/:type", user.loginRequired, user.hasStadiumRequired, total.totalActivePage);
  app.post("/totalActive/:type", user.loginRequired, user.hasStadiumRequired, total.totalActiveJson);
  app.get("/totalService/:type", user.loginRequired, user.hasStadiumRequired, total.totalServicePage);
  app.post("/totalService/:type", user.loginRequired, user.hasStadiumRequired, total.totalServiceJson);
  app.get("/totalDays", user.loginRequired, user.hasStadiumRequired, total.totalDaysPage);
  app.post("/totalSportsService/:type", user.loginRequired, user.hasStadiumRequired, total.totalSportsService);
  app.get("/totalTableInfo", user.loginRequired, user.hasStadiumRequired, total.totalTableInfo);
  app.post("/totalDailyOpenDays", user.loginRequired, user.hasStadiumRequired, total.totalDailyOpenDays);

  //综合效益汇总路由
  app.get("/receiveNums", user.loginRequired, user.hasStadiumRequired, total.receiveNumsPage);
  app.get("/receiveNumsByYear", user.loginRequired, user.hasStadiumRequired, total.receiveNumsByYearPage);

  app.post("/receiveServiceNums", user.loginRequired, user.hasStadiumRequired, total.totalReceiveNumsJson);
  app.post("/receiveActiveNums", user.loginRequired, user.hasStadiumRequired, total.totalActiveNumsJson);
  app.post("/receiveDailyNums", user.loginRequired, user.hasStadiumRequired, total.totalDailyNumsJson);

  app.post("/receiveServiceNumsByYear/:year", user.loginRequired, user.hasStadiumRequired, total.totalReceiveServiceNumsByYearJson);
  app.post("/receiveActiveNumsByYear/:year", user.loginRequired, user.hasStadiumRequired, total.totalReceiveActiveNumsByYearJson);
  app.post("/receiveDailyNumsByYear/:year", user.loginRequired, user.hasStadiumRequired, total.totalReceiveDailyNumsByYearJson);

  app.get("/paymentScale", user.loginRequired, user.hasStadiumRequired, total.paymentScalePage);
  app.get("/paymentGrow", user.loginRequired, user.hasStadiumRequired, total.paymentGrowPage);
  app.post("/paymentGrow/:byYear", user.loginRequired, user.hasStadiumRequired, total.GetpaymentGrow);
  app.get("/commonweal", user.loginRequired, user.hasStadiumRequired, total.commonwealPage);
  app.get("/fineScale", user.loginRequired, user.hasStadiumRequired, total.fineScalePage);
  app.post("/totalSave", user.loginRequired, user.hasStadiumRequired, total.totalSave);
  app.get("/addScore", user.loginRequired, user.hasStadiumRequired, total.addScorePage);
  app.post("/paymentScaleSave", user.loginRequired, user.hasStadiumRequired, total.paymentScaleSave);
  app.get("/benefitTable", user.loginRequired, user.hasStadiumRequired, total.benefitTablePage);


  //
  daily.setDailyModel(app.models.Daily);
  daily.setDailyOpenTimeModel(app.models.DailyOpenTime);
  app.get("/dailyAddUser", user.loginRequired, user.hasStadiumRequired, daily.dailyAddUserPage);
  app.post("/dailyAddUser", user.loginRequired, user.hasStadiumRequired, daily.dailyAddUser);
  app.get("/dailyIndex", user.loginRequired, user.hasStadiumRequired, daily.dailyIndexPage);
  app.post("/DailySearch/:date", user.loginRequired, user.hasStadiumRequired, daily.dailyTable);
  app.post("/DailyOpenTimeAdd/:date", user.loginRequired, user.hasStadiumRequired, daily.dailyOpenTimeAdd);
  app.post("/DailyOpenDays", user.loginRequired, user.hasStadiumRequired, daily.dailyOpenDays);
  app.post("/DailyOpenTimeSearch/:date", user.loginRequired, user.hasStadiumRequired, daily.dailyOpenTimeSearch);
  app.post("/DailyUserCount/:date", user.loginRequired, user.hasStadiumRequired, daily.dailyUserCount);


  //协会端规则路由
  rule.setRuleModel(app.models.Rule);
  app.get('/ruleAdd', user.loginRequired, user.adminRequired, rule.ruleAddPage);
  app.post('/ruleAdd', user.loginRequired, user.adminRequired, rule.ruleAdd);
  app.get('/ruleMain', user.loginRequired, user.adminRequired, rule.ruleMain);
  app.post('/ruleTable', user.loginRequired,user.adminRequired, rule.ruleTable);





 //创建默认规则
  (function(){
      const moment = require("moment")
      app.models.Rule.currentRule(function(err,ruledata){
        if(!ruledata){
          var defaultRule = {
            startDate:moment().year()+"-01-01",
            endDate:moment().year()+"-12-31",
            name:"default",
            isCurrent:1
          }
          app.models.Rule.create(defaultRule,function(err,instance){
            console.log("已经创建默认规则.....");
          })
        }
      })


      app.models.user.hasAdmin(function(err,flag){

        if(!flag){
          var adminUser = {
            username:"admin@admin.com",
            name:"admin@admin.com",
            password:user.createHash("admin"),
            email:"admin@admin.com",
            mark:1
          }
          app.models.user.create(adminUser,function(err,instance){
              console.log("默认管理员已经创建.....");
          })
        }

      })
  })()
}

