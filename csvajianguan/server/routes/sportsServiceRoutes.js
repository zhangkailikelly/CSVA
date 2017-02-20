/**
 * Created by jey on 2016/4/23.
 */



var SportsService;
exports.setSportsServiceModel = function(sportsService){
  if(!SportsService){
    SportsService = sportsService;
  }
};

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
    filter.limit = 2
  }

  if(!filter.skip){
    filter.skip = 0
  }
}


exports.serviceMain = function(req ,res) {
  var filter= {} ;
  setFilter(req,filter);

  //查找条件
  var fWhere = {};
  var fArray = [];



  var typeV = getServiceType(req);
  var mainView = "serviceMain"


  fArray.push({"type":typeV}) //类型1为：体育赛事
  fArray.push({"stadiumId":req.session.currentStadium.id});

  fWhere.and = fArray;


  SportsService.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip},function (err, data) {
    SportsService.count(fWhere, function(err,count){
      res.render(mainView, {
        "services": data,
        "totalCount":count,
        "filter":filter,
        "userMark":req.session.user.mark,
        "serviceType":typeV

      });
    })

  })
}

function getServiceType(req){
  var st = 0;
  if(req.params.type){
    if(req.params.type == 1 || req.params.type == 2 || req.params.type == 3){
      st =  req.params.type;
    }
  }
  return st;
}

exports.serviceDelete = function(req,res){
  if(req.params.id){
    SportsService.destroyById(req.params.id, function(err){
      if( err ){
        res.send({"state":false,"error":err})
      }else{
        res.send({"state":true})
      }

    })
  }
}

exports.serviceDetail = function(req,res){
  console.log(req.params.id);
  if(req.params.id){
    SportsService.findById(req.params.id, function(err,data){
      if( !err ){
        res.render("serviceDetail",{
          service:data,
          serviceType:data.type
        });
      }
    })
  }
}

exports.serviceTable = function(req,res){
  var filter= {} ;
  setFilter(req, filter)

  var fWhere = {};
  var fArray = [];

  var typeV = getServiceType(req);
  var tableView = "serviceTable"

  fArray.push({"type":typeV})
  fArray.push({"stadiumId":req.session.currentStadium.id});
  if(req.body.service){
    if(req.body.service.name){
      fArray.push({name: {like:req.body.service.name}})
    }
    if(req.body.service.unit){
      fArray.push({unit: {like:req.body.service.unit}})
    }
    if(req.body.service.project){
      fArray.push({project: {like:req.body.service.project}})
    }
  }
  fWhere.and = fArray

  console.log(fWhere);

  SportsService.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip}, function(err,data){
    SportsService.count(fWhere, function(err,count){
      res.render(tableView,{
        "services": data,
        "totalCount":count,
        "filter":filter,
        "userMark":req.session.user.mark,
        "serviceType":typeV
      });
    })

  })
}


exports.serviceAddPage = function(req, res){
  if(req.session.currentStadium.id){
    var typeV = getServiceType(req);
    res.render("serviceAdd",{
      message:"",
      serviceType:typeV
    });
  }

}

exports.serviceAdd = function(req,res){
  var _service = req.body.service;
  if(req.session.currentStadium)
  {
    _service.stadiumId = req.session.currentStadium.id;
    SportsService.upsert(_service, function(err,data){
      if(err){
        res.send({"state":false,"error":err})
      }else{
        res.send({"state":true})
      }
    })
  }
  else
  {
    res.send({"state":false,"error":"找不到当前场馆信息"})
  }
}
