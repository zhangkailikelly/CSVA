/**
 * Created by jey on 2016/4/25.
 */


var Daily;
exports.setDailyModel = function(dailymodel){
    if(!Daily){
      Daily = dailymodel;
    }
}
var DailyOpenTime;
exports.setDailyOpenTimeModel = function(dailyOpenTimeModel){
  if(!DailyOpenTime){
    DailyOpenTime = dailyOpenTimeModel;
  }
}

function setFilter(req,filter){
  if(req.query.limit){
    filter.limit = req.query.limit;
  }
  if(req.query.skip){
    filter.skip = req.query.skip;
  }
  if(req.body.skip){
    filter.skip = req.body.skip;
  }
  if(req.body.limit){
    filter.limit = req.body.limit;
  }

  //确保每次都是有值得
  if(!filter.limit){
    filter.limit = 10
  }

  if(!filter.skip){
    filter.skip = 0
  }
}

var moment = require('moment');

/**
 *
 * @param stadium  查找哪个场馆
 * @param day  查找哪天
 * @param cb  获取场馆开放时间，后的回调函数
 * @constructor
 */
function DailyOpenTimeSearch( stadium, day, cb){

  var fWhere = {};
  var fArray = [];
  fArray.push({ "stadiumId":stadium.id });
  if(day){
    fArray.push({"day":day});
  }else{
    fArray.push({"day":new Date().toLocaleDateString()});//默认为系统当前日期
  }

  fWhere.and = fArray

  var open_time = {};
  DailyOpenTime.findOne({'where':fWhere},function(err,dot_data){
    if(dot_data){
      open_time.startTime = dot_data.startTime;
      open_time.endTime = dot_data.endTime;
    }else{
      //判断是否是平常日和假日
      const weekDay = moment(day).day();
      if(weekDay == 0 || weekDay == 6){
        open_time.startTime = stadium.operatTimeHdayStart;
        open_time.endTime = stadium.operatTimeHdayEnd;
      }
      else {
        open_time.startTime = stadium.operatTimeNormalStart;
        open_time.endTime = stadium.operatTimeNormalEnd;
      }
    }
    cb(open_time);

  })
}

exports.dailyIndexPage = function(req, res){

  var filter= {} ;
  setFilter(req,filter);
  var fWhere = {};
  var fArray = [];
  fArray.push({"stadiumId":req.session.currentStadium.id});
  fArray.push({"day":new Date().toLocaleDateString()});//默认为系统当前日期
  fWhere.and = fArray

  DailyOpenTimeSearch(req.session.currentStadium, new Date().toLocaleDateString(), findDaily)

  function findDaily(openTime)
  {
      Daily.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip},function (err, data) {
          Daily.count({day:new Date().toLocaleDateString()}, function(err,count){
            res.render("dailyIndex", {
              "dailys": data,
              "totalCount":count,
              "filter":filter,
              "dailyOpenTime":openTime,
              "currentStadium":req.session.currentStadium,
              "userMark":req.session.user.mark
            });
          })
      })
  }
}

exports.dailyTable = function(req,res){

  var filter= {} ;
  setFilter(req, filter)

  var fWhere = {};
  var fArray = [];

  fArray.push({"stadiumId":req.session.currentStadium.id});
  if( req.params.date ){
    fArray.push({"day":req.params.date});
  }
  if(req.body.daily){
    if(req.body.daily.name){
      fArray.push({name: {like:req.body.daily.name}})
    }
    if(req.body.daily.cardID){
      fArray.push({cardID: {like:req.body.daily.cardID}})
    }
    if(req.body.daily.phone){
      fArray.push({phone: {like:req.body.daily.phone}})
    }
  }
  fWhere.and = fArray

  Daily.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip}, function(err,data){
    Daily.count(fWhere, function(err,count){

      res.render('dailyTable',{
        "dailys": data,
        "totalCount":count,
        "filter":filter,
        "userMark":req.session.user.mark
      });
    })

  })

}

exports.dailyAddUserPage = function(req, res){
  res.render("dailyAddUser");
}



exports.dailyAddUser = function(req,res){
  var _daily = req.body.daily;
  _daily.stadiumId =  req.session.currentStadium.id;
  _daily.day = new moment().format('YYYY-MM-DD');


  Daily.upsert(_daily, function(err,data){
    if(err){
      res.send({"state":false,"error":err})
    }else{
      res.send({"state":true})
    }
  })

}

exports.dailyUserCount = function(req, res){

  if( req.params.date ){
    Daily.count({"stadiumId":req.session.currentStadium.id,day:req.params.date}, function(err,count){
      if(err){
        res.send({"state":false,"error":err})
      }else{
        res.send({"data":count})
      }
    })
  }
  else{
    res.send({"data":0})
  }
}
exports.dailyOpenTimeSearch = function(req, res){
  if( req.params.date ){
      function dailyOpenTime(openTime){
        res.send({"data":openTime})
      }
      DailyOpenTimeSearch(req.session.currentStadium, req.params.date, dailyOpenTime)
  }
}
exports.dailyOpenTimeAdd = function(req,res){
  var _dailyOpenTime = req.body.dailyOpenTime;
  if( req.params.date ){

    //开放时间是否被修改
    var updateFlag = false;
    //判断是否是平常日和假日
    const weekDay = moment(req.params.date).day();
    if(weekDay == 0 || weekDay == 6 ){
      if( _dailyOpenTime.startTime !=  req.session.currentStadium.operatTimeHdayStart || _dailyOpenTime.endTime != req.session.currentStadium.operatTimeHdayEnd ){
          updateFlag = true;
      }
    }else{
      if( _dailyOpenTime.startTime !=  req.session.currentStadium.operatTimeNormalStart || _dailyOpenTime.endTime != req.session.currentStadium.operatTimeNormalEnd ){
        updateFlag = true;
      }
    }

    if(updateFlag){
        _dailyOpenTime.stadiumId =  req.session.currentStadium.id;
        _dailyOpenTime.day =moment(req.params.date).format("YYYY-MM-DD");
        DailyOpenTime.findOrCreate({where:{day:_dailyOpenTime.day}}, _dailyOpenTime, function(err,data)
        {
            if(err){
              res.send({"state":false,"error":err})
            }else{
              data.updateAttributes(_dailyOpenTime,function(err, ins){
                if(ins){
                  res.send({"state":true})
                }
              })

            }
        })
    }
  }
}

exports.dailyOpenDays = function(req,res){
  Daily.find({"where":{"stadiumId": req.session.currentStadium.id},fields: {day: true}}, function(err,data){
    if(err){
      res.send({"state":false,"error":err})
    }else{
      if(data.length){
          var dataArray = [];
          data.forEach(function(o, i){
            if( dataArray.indexOf(o.day) == -1){
              dataArray.push(o.day);
            }
            if( i+1 == data.length ){
              res.send({"data":dataArray})
            }
          })
      }
      else{
        res.send({"data": []})
      }
    }
  })
}
