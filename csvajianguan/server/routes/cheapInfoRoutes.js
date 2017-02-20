/**
 * Created by jey on 2016/4/21.
 */


var CheapInfo;
exports.setCheapInfoModel = function(cheapInfomodel){
    if(!CheapInfo){
      CheapInfo = cheapInfomodel;
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
    filter.limit = 2
  }

  if(!filter.skip){
    filter.skip = 0
  }
}


exports.cheapInfoAdd = function(req,res){
  var _cheapInfo = req.body.cheapInfo;
  if(req.session.currentStadium)
  {
    _cheapInfo.stadiumId = req.session.currentStadium.id;
    CheapInfo.upsert(_cheapInfo, function(err,data){
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

exports.cheapInfoDelete = function(req,res){
  if(req.params.id){
    CheapInfo.destroyById(req.params.id, function(err){
      if( err ){
        res.send({"state":false,"error":err})
      }else{
        res.send({"state":true})
      }

    })
  }
}
exports.cheapInfoAddPage = function(req,res){

  if(req.params.id){
    CheapInfo.findById(req.params.id, function(err,data){
      if( !err ){
        res.render("cheapInfoAdd",{
          cheapInfo:data
        })
      }
    })
  }else{
    res.render("cheapInfoAdd",{
      cheapInfo:null
    });
  }

}

exports.cheapInfoMainList = function(req,res){

  var filter= {} ;
  setFilter(req,filter);

  //查找条件
  var fWhere = {};
  var fArray = [];
  fArray.push({"stadiumId":req.session.currentStadium.id});

  fWhere.and = fArray;


  CheapInfo.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip},function (err, data) {
    CheapInfo.count(fWhere, function(err,count){
      res.render("cheapInfoTable", {
        "cheapinfos": data,
        "totalCount":count,
        "filter":filter
      });
    })

  })
}


exports.cheapInfoMainPage = function(req, res){

  var filter= {} ;
  setFilter(req,filter);

  //查找条件
  var fWhere = {};
  var fArray = [];
  fArray.push({"stadiumId":req.session.currentStadium.id});

  fWhere.and = fArray;

    CheapInfo.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip},function (err, data) {
      CheapInfo.count(fWhere, function(err,count){
        res.render("cheapInfo", {
          "cheapinfos": data,
          "totalCount":count,
          "filter":filter
        });
      })

    })

}


