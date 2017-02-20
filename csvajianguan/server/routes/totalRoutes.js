/**
 * Created by jey on 2016/4/25.
 */

var moment = require("moment")
var Total,
 Rule,
 SportsActiv,
 SportsService,
 Daily,
FlowMoney,
InCome

exports.setAppModels = function(models){
   Total = models.Total;
   Rule = models.Rule;
   SportsActiv = models.SportsActiv;
   SportsService = models.SportsService;
  Daily = models.Daily;
  FlowMoney = models.FlowMoney;
  InCome = models.InCome;
}


var  events = require('events');
var emitter = new events.EventEmitter();

emitter.on('page', function(res,pageTarget, obj){
  res.render(pageTarget,obj)
})


exports.totalArea = function(req, res){
  totalModelSave(req, res)
}

exports.totalSportsService = function(req,res){
  //统计活动承载和体育服务的日期
  if(req.params.type == 1 || req.params.type == 2){
    Rule.currentRule(function(err,ruledata){
      if(ruledata)
      {
        var sw =  getNormalSWhere(req, ruledata);
        var TargetModel = req.params.type == 1 ? SportsActiv : SportsService;
        TargetModel.find({fields:{startDate:true, endDate:true},where:sw.where},function (err, datas){
              if(datas.length)
              {
                var  dataSet = new Set();
                datas.forEach(function(o, i){
                  var m_start = moment(o.startDate).format("YYYY-MM-DD");
                  var m_end = moment(o.endDate).format("YYYY-MM-DD");
                  var currDay = m_start;
                  var targetDay = m_end;

                  var flag = true;
                  if( m_end <= ruledata.endDate &&  m_start >=  ruledata.startDate ){
                    //活动日期在规则日期范围内
                  }else if(m_end <  ruledata.endDate && m_end > ruledata.startDate ){
                    //活动结束日期，包含在规则日期之内
                    currDay = ruledata.startDate

                  }else if(m_start <  ruledata.endDate && m_start >  ruledata.startDate){
                    //活动结束日期，超出了规则日期
                    targetDay = ruledata.endDate;
                  }
                  else{
                    flag = false;
                  }

                  if(flag)
                  {
                    while(currDay <= targetDay){
                      dataSet.add(currDay);
                      currDay = moment(currDay).add(1, 'day').format("YYYY-MM-DD");
                    }
                  }
                  if(i+1 == datas.length)
                  {
                    var dataArray = Array.from(dataSet);
                    res.send({"data":dataArray})
                  }
                });
              }else{
                res.send({"data":[]})
              }
        })

      }else{
        res.send({"data":[]})
      }
    })
  }
}
exports.totalDailyOpenDays = function(req,res){
  Rule.currentRule(function(err,ruledata){
    if(ruledata){
      var sw =
      {
        where:
        {
          "stadiumId":req.session.currentStadium.id,
          and:[
            {"day":{"gte":ruledata.startDate}},
            {"day":{"lte":ruledata.endDate}}
          ]
        }
      }
      Daily.find({"where":sw.where,fields: {day: true}}, function(err,data){
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
          }else{
            res.send({"data":[]});
          }
        }
      })
    }else{
      res.send({"data":[]});
    }
  });

}

exports.totalServiceJson = function(req,res){
  getTotalService(req,res,function(optObj){
    res.send(optObj)
  })
}
exports.totalServicePage = function(req, res){
  getTotalService(req,res, function(optObj){
    emitter.emit('page',res, 'totalService',optObj);
  })
}

exports.totalActiveJson = function(req,res){
  gettotalActivCount(req,res,function(optObj){
    res.send(optObj)
  })
}

exports.totalActivePage = function(req, res){
  gettotalActivCount(req,res,function(optObj){
    emitter.emit('page',res, 'totalActive',optObj);
  })
}

exports.totalDaysPage = function(req, res){
  emitter.emit('page',res, 'totalDailyCalendar',{});
}

exports.totalhoursJson = function(req, res){
  getTotalHours(req, res, function(optObj){
    res.send(optObj)
  })
}
exports.totalhoursPage = function(req, res){
  getTotalHours(req, res, function(optObj){
    emitter.emit('page',res, 'totalHours',optObj);
  })
}



exports.totalAreaPage = function(req, res){
  //查找当前规则的规则id
  getTotleInstance(req,res,function(optObj){
    emitter.emit('page',res, 'totalArea',optObj);
  })
}

exports.totalAreaJson = function(req,res){
  getTotleInstance(req,res,function(optObj){
    res.send(optObj)
  })
}

exports.totalTableInfo = function(req, res){
  emitter.emit('page',res, 'totalTableInfo',{});
}

/**
 * @brief 获得一个常规的查找条件(仅仅限于体育服务，体育赛事表，时间段查找)
 * @param ruledata 规则实例对象
 * @flagType 为boolean 值，，true 表示需要条件，需要验证type
 */
const getNormalSWhere = (req,  ruledata , flagType) =>{
  var sw = {};
  var sw_or = {
    "or":
      [
        {
          "and":
            [
              {"startDate":{"gte":new Date(ruledata.startDate)}},
              {"startDate":{"lte":new Date(ruledata.endDate)}}
            ]
        },
        {
          "and":
            [
              {"endDate":{"gte":new Date(ruledata.startDate)}},
              {"endDate":{"lte":new Date(ruledata.endDate)}}
            ]
        }
      ]
  };

  if( flagType && flagType === true ){
    sw.where=
    {
        "and":
          [
            {"stadiumId":req.session.currentStadium.id},
            {"type":req.params.type},
            sw_or
          ]
    }
  }else{
    sw.where=
    {
      "and": [{"stadiumId":req.session.currentStadium.id}, sw_or]
    }
  }

  //判断是否需要加入免费服务和赛事的判断条件
  if(req.params.fee && req.params.fee > 0){
    sw.where.and.unshift({fee:req.params.fee});
  }
  else if(req.params.price && req.params.price > 0){
    sw.where.and.unshift({price:req.params.price});
  }
  return sw;
}

const getTotalHours = (req, res,cb) =>{
  var hf = "hh:mm"
  var normalStart = moment(req.session.currentStadium.operatTimeNormalEnd,hf);
  var normalEnd = moment(req.session.currentStadium.operatTimeNormalStart,hf);
  var hStart = moment(req.session.currentStadium.operatTimeHdayStart,hf);
  var hEnd = moment(req.session.currentStadium.operatTimeHdayEnd,hf);
  var optObj = {
    openHours:Math.abs( normalStart.diff(normalEnd,"hours") * 5 ) + Math.abs( hStart.diff(hEnd,"hours") * 2 )
  }
  cb(optObj);

}
const getTotleInstance = (req, res, cb) =>{
  //查找当前规则的规则id
  Rule.currentRule(function(err,ruledata){
    var optObj = {
      stadiumArea:req.session.currentStadium.stadiumArea,
      totalId:0,
      openArea:0,
      fine:'',
      special:''
    }
    if(ruledata){
      Total.findOne({where:{ruleId: ruledata.id,stadiumId:req.session.currentStadium.id}},function(err, totaldata){
        if(totaldata){
          optObj.openArea = totaldata.openArea;
          optObj.totalId = totaldata.id;
          optObj.fine= totaldata.fine;
          optObj.special= totaldata.special;
          cb(optObj)
        }else{
          cb(optObj)
        }
      })
    }
    else{
      cb(optObj)
    }
  })

}
const gettotalActivCount = (req, res, cb) =>{

  if(req.params.type){
    Rule.currentRule(function(err,ruledata){
      var optObj = {
        actives:0,
        activeType:req.params.type
      }
      if(ruledata){
        //查找条件
        var sw =  getNormalSWhere(req, ruledata, true);
        SportsActiv.count(sw.where,function (err, dataCount)
        {
          if(dataCount)
          {
            optObj.actives = dataCount
          }
          cb(optObj);
        })
      }else{
        cb(optObj);
      }
    })
  }
}
const getTotalService = (req, res,cb) =>{
  if(req.params.type || req.params.fee){
    Rule.currentRule(function(err,ruledata){
      var optObj = {
        services:0,
        serviceType:req.params.type
      }
      if(ruledata)
      {
        //查找条件

        var flag = true;
        if(req.params.fee){
          flag = false;
        }
        var sw =  getNormalSWhere(req, ruledata, flag);


        //type为1,2返回体育服务的参与人数，为3，返回专业训练的总天数
        if(req.params.type == 1 || req.params.type == 2){
          SportsService.find({fields:{number:true},where:sw.where},function (err, dataCount)
          {
            if(dataCount.length)
            {
              var tempNum = 0;
              dataCount.forEach(function(o, i){
                tempNum += o.number;
              })
              optObj.services = tempNum;
              cb(optObj);
            }
            else{
              cb(optObj);
            }
          })
        }
        else if(req.params.type == 3){
          SportsService.find({fields:{startDate:true, endDate:true},where:sw.where},function (err, datas)
          {
            if(datas.length)
            {
              var  dataSet = new Set();
              datas.forEach(function(o, i){

                var m_start = moment(o.startDate).format("YYYY-MM-DD");
                var m_end = moment(o.endDate).format("YYYY-MM-DD");

                var currDay = m_start;   //计算活动的起始当前日期
                var targetDay = m_end;   //计算活动的结束的目标日期

                var flag = true;
                if( m_end <= ruledata.endDate &&  m_start >=  ruledata.startDate ){
                  //活动日期在规则日期范围内
                }else if(m_end <  ruledata.endDate && m_end > ruledata.startDate ){
                  //活动结束日期，包含在规则日期之内
                  currDay = ruledata.startDate

                }else if(m_start <  ruledata.endDate && m_start >  ruledata.startDate){
                  //活动结束日期，超出了规则日期
                  targetDay = ruledata.endDate;
                }
                else{
                  flag = false;
                }

                if(flag)
                {
                  while(currDay <= targetDay){
                    dataSet.add(currDay);
                    currDay = moment(currDay).add(1, 'day').format("YYYY-MM-DD");
                  }
                }
                if(i+1 == datas.length)
                {
                  optObj.services = dataSet.size;
                  cb(optObj);
                }
              });
            }else{
              cb(optObj);
            }
          })

        }
      }else{
        cb(optObj);
      }
    })
  }
}


//###################综合效益汇总接口#########################//

exports.receiveNumsByYearPage = function(req, res){
  optObj = {
    "parkArea":req.session.currentStadium.parkArea,
  }
  emitter.emit('page',res, 'receiveNumsGrow',optObj);
}
exports.receiveNumsPage = function(req, res){
   optObj = {
     "parkArea":req.session.currentStadium.parkArea,
   }
    emitter.emit('page',res, 'receiveNums',optObj);
}

exports.totalReceiveNumsJson = function(req, res){
  getTotalServiceNums(req, res, function(optObj){
    res.send(optObj)
  })
}

exports.totalActiveNumsJson = function(req, res){
  getTotalActiveNums(req, res, function(optObj){
    res.send(optObj)
  })
}

exports.totalDailyNumsJson = function(req, res){
  getDailyNums(req, res, function(optObj){
    res.send(optObj)
  })
}

const getTotalServiceNums = (req, res, cb) =>{

  const search = (ruleDate) =>{
      //查找条件
      var sw =  getNormalSWhere(req, ruleDate);
      SportsService.find({fields:{number:true},where:sw.where},function (err, dataCount)
      {
        var optObj = {nums:0}
        if(dataCount)
        {
          var tempNum = 0;
          dataCount.forEach(function(o, i){
            optObj.nums += o.number;
          })
          cb(optObj);
        }
        else{
          cb(optObj);
        }
      })
  }

  //如果有year则表示汇总服务人数需要按照年份查找，否查找则按规则表查找
    Rule.currentRule(function(err,ruledata){
      if(ruledata)
      {
        search(getFilterYear(req, ruledata));
      }else{
        cb( {nums:0});
      }
    });

}
const getTotalActiveNums = (req, res, cb) =>{
  const search = (ruleDate) =>{
    //查找条件
    var sw =  getNormalSWhere(req, ruleDate);
    SportsActiv.find({fields:{number:true},where:sw.where},function (err, dataNums)
    {

      var optObj = {nums:0};
      if(dataNums)
      {

        dataNums.forEach(function(o, i){
          optObj.nums += o.number;
        })
        cb(optObj);
      }else{
        cb(optObj);
      }
    })
  }


  Rule.currentRule(function(err,ruledata){
    if(ruledata){
      search(getFilterYear(req, ruledata));
    }else{
      cb({nums:0});
    }
  })

}
const getDailyNums = (req, res, cb) =>{
      Rule.currentRule(function(err,ruledata){
        var optObj={nums : 0};
        if(ruledata){
           var swhere =
            {
              "stadiumId":req.session.currentStadium.id,
              "and":[{day:{"gte":ruledata.startDate}},{day:{"lte":ruledata.endDate}}]
            }
            Daily.count(swhere, function(err,count){
              optObj.nums = count
              cb(optObj);
            })
        }else{
          cb(optObj);
        }
      });
}
const getDailyNumsByYear = (req, res, cb) =>{
  Rule.currentRule(function(err,ruledata){
    var optObj={nums : 0};
    if(ruledata)
    {
        var swhere =
        {
          "stadiumId":req.session.currentStadium.id,
          "and":[{day:{"gte":getFilterYear(req, ruledata).startDate}},{day:{"lte":getFilterYear(req, ruledata).endDate}}]
        }

        Daily.count(swhere, function(err,count){
          optObj.nums = count
          cb(optObj);
        })
    }
    else{
      cb(optObj);
    }
  });

}

/**
 * 过滤年份
 */
const getFilterYear = (req, ruledata) =>{
  //0表示规则下的当前年，-1表示规则下的年份的上一年
  if(req.params.year){
    if(req.params.year == 0){
      return {"startDate":ruledata.startDate,"endDate":ruledata.endDate}
    }else if(req.params.year == -1){
      var year = moment(ruledata.startDate).add(-1, 'year').year();
      return {"startDate":year+"-01-01","endDate":year+"-12-31"}
    }
  }else{
    return {"startDate":ruledata.startDate,"endDate":ruledata.endDate}
  }


}
const GetInComeInfo = (req, res, cb) =>{
  Rule.currentRule(function(err,ruledata){
    if(ruledata){
        var temp = moment(ruledata.startDate).year();
        if(req.params.byYear && req.params.byYear == -1){
          temp = moment(ruledata.startDate).add(-1, 'year').year();
        }
        InCome.findOne({where:{stadiumId:req.session.currentStadium.id,year:temp}},function(err,data){
          if(data){
            cb(data);
          }else{
            cb()
          }
        })
    }else{
      cb()
    }
  })
}
const totalModelSave = (req, res) =>{
  Rule.currentRule(function(err,ruledata){
    if(ruledata){
        var _total = req.body.total;
        _total.stadiumId = req.session.currentStadium.id;
        _total.ruleId = ruledata.id;
        Total.findOrCreate({where:{stadiumId:_total.stadiumId,ruleId:_total.ruleId}},_total, function(err,data){
          if(err){
            res.send({"state":false,"error":err})
          }
          if(data){
            data.updateAttributes(_total,function(er, newIns){
              if(er){
                res.send({"state":false,"error":er})
              }else{
                res.send({"state":true})
              }
            })
          }
        })
    }else{
      res.send({"state":false,"error":err})
    }
  });
}
exports.GetpaymentGrow = function(req, res){
  GetInComeInfo(req,res,function(optObj){
    res.send(optObj)
  })
}
exports.totalReceiveDailyNumsByYearJson = function(req, res){
  getDailyNumsByYear(req, res, function(optObj){
    res.send(optObj)
  })
}

exports.totalReceiveServiceNumsByYearJson = function(req, res){
  getTotalServiceNums(req, res, function(optObj){
    res.send(optObj)
  })
}
exports.totalReceiveActiveNumsByYearJson = function(req, res){
  getTotalActiveNums(req, res, function(optObj){
    res.send(optObj)
  })
}

exports.paymentScalePage = function(req, res){
  Rule.currentRule(function(err,ruledata){
    optObj = {"data":''}
    if(ruledata){
        FlowMoney.findOne({where:{stadiumId:req.session.currentStadium.id,ruleId:ruledata.id}},function(err,data){
           if(err){
             emitter.emit('page',res, 'paymentScale',optObj);
           }
           if(data){
             optObj.data = data
           }
          emitter.emit('page',res, 'paymentScale',optObj);
        })
    }
    else{
      emitter.emit('page',res, 'paymentScale',optObj);
    }
  });


}
exports.paymentGrowPage = function(req, res){
  optObj = {}
  emitter.emit('page',res, 'paymentGrow',optObj);
}
exports.commonwealPage = function(req, res){
  req.params.type = 1; //临时赋值1或者2都行，因为getTotalService需要这个参数
  req.params.fee = 2;  //查询公益项目(fee=2免费，fee=1收费)

  getTotalService(req,res,function(optObj){
    req.params.fee = void 0; //因为查询体育服务和体育赛事，共用的一个request 所以，查找赛事时，需要清空fee
    req.params.price = 3; //公益赛事（price 3：免费，2：优惠价，1：全价）
    getTotalActiveNums(req, res,function(optObj2){
      optObj.services += optObj2.nums;
      emitter.emit('page',res, 'commonweal',optObj);
    })

  })
}

exports.fineScalePage = function(req, res){
    getTotleInstance(req,res,function(optObj){
      emitter.emit('page',res, 'fine',optObj);
    })
}

exports.benefitTablePage = function(req, res){
  emitter.emit('page',res, 'benefitTableInfo',{});

}
exports.addScorePage = function(req, res){
  getTotleInstance(req,res,function(optObj){
    emitter.emit('page',res, 'addScore',optObj);
  })
}
exports.totalSave = function(req, res){
  totalModelSave(req, res);
}
exports.paymentScaleSave = function(req, res){
  Rule.currentRule(function(err,ruledata){
    if(ruledata){
        var _paymentScale = req.body.paymentScale;
        _paymentScale.stadiumId = req.session.currentStadium.id;
        _paymentScale.ruleId = ruledata.id;
        FlowMoney.findOrCreate({where:{stadiumId:_paymentScale.stadiumId}},_paymentScale, function(err,data){
            if(data)
            {
                data.updateAttributes(_paymentScale,function(er, newIns){
                  if(er){
                    res.send({"state":false,"error":er})
                  }
                  else{
                    res.send({"state":true})
                  }
              })
            }
            else
            {
              res.send({"state":false,"error":err})
            }
        })
    }
    else
    {
      res.send({"state":false,"error":"协会没有找到规则"})
    }
  })

}
