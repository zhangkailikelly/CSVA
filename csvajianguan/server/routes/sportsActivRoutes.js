/**
 * Created by jey on 2016/4/13.
 */



var SportsActiv;
exports.setSportsActivModel = function(sportsActiv){
  if(!SportsActiv){
    SportsActiv = sportsActiv;
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


exports.gamesMain = function(req ,res) {
  var filter= {} ;
  setFilter(req,filter);

  //查找条件
  var fWhere = {};
  var fArray = [];



  var typeV = 1;
  var tableView = "gameMain"
  if(req.params.type){
    if(req.params.type == 2 || req.params.type == 3){
      typeV = req.params.type;
      tableView = "activeMain";
    }
  }

  fArray.push({"type":typeV}) //类型1为：体育赛事
  fArray.push({"stadiumId":req.session.currentStadium.id});

  fWhere.and = fArray;


  SportsActiv.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip},function (err, data) {
    SportsActiv.count(fWhere, function(err,count){
        res.render(tableView, {
          "games": data,
          "totalCount":count,
          "filter":filter,
          "userMark":req.session.user.mark,
          "activeType":typeV

        });
    })

  })
}

exports.gamesList = function(req,res){
  var filter= {} ;
  setFilter(req, filter)

  var fWhere = {};
  var fArray = [];

  var typeV = 1;
  var tableView = "gameTable"
  if(req.params.type){
    if(req.params.type == 2 || req.params.type == 3){
      tableView = "activeTable";
      typeV = req.params.type;
    }
  }

  fArray.push({"type":typeV})
  fArray.push({"stadiumId":req.session.currentStadium.id});
  if(req.body.game){
    if(req.body.game.name){
      fArray.push({name: {like:req.body.game.name}})
    }
    if(req.body.game.hostUnit){
      fArray.push({hostUnit: {like:req.body.game.hostUnit}})
    }
    if(req.body.game.undertakeUnit){
      fArray.push({undertakeUnit: {like:req.body.game.undertakeUnit}})
    }
  }
  fWhere.and = fArray

  console.log(fWhere);

  SportsActiv.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip}, function(err,data){
    SportsActiv.count(fWhere, function(err,count){
      res.render(tableView,{
        games:data,
        "totalCount":count,
        "filter":filter,
        "userMark":req.session.user.mark,
        "activeType":typeV
      });
    })

  })
}



exports.activeAddPage = function(req,res){
  if(req.session.currentStadium.id){

    var activeType = 2 //默认添加体育活动
    if(req.params.type){
      if(req.params.type == 2 || req.params.type == 3){
        activeType = req.params.type
      }
    }
    res.render("activeAdd",{
      message:"",
      activeType:activeType
    });
  }

}

exports.gamesAddPage = function(req,res){
  if(req.session.currentStadium.id){
      res.render("gameAdd",{
        message:"",

      });
  }

}


exports.activeDetail = function(req,res){
  console.log(req.params.id);
  if(req.params.id){
    SportsActiv.findById(req.params.id, function(err,data){
      if( !err ){
        res.render("activeDetail",{
          game:data
        })
      }
    })
  }
}

exports.gamesDetail = function(req,res){
  if(req.params.id){
    SportsActiv.findById(req.params.id, function(err,data){
        if( !err ){
          res.render("gameDetail",{
            game:data
          })
        }
    })
  }
}


exports.gamesAdd = function(req,res){
  var _game = req.body.game;
  if(req.session.currentStadium)
  {
      _game.stadiumId = req.session.currentStadium.id;
      SportsActiv.create(_game, function(err,data){
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

exports.gamesDelete = function(req,res){
  if(req.params.id){
    SportsActiv.destroyById(req.params.id, function(err){
      if( err ){
        res.send({"state":false,"error":err})
      }
      res.send({"state":true})
    })
  }
}
