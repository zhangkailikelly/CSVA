/**
 * Created by jey on 2016/4/24.
 */



var Trainer;
exports.setTrainerModel = function(trainer){
  if(!Trainer){
    Trainer = trainer;
  }
};
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


exports.trainerDelete = function(req,res){
  if(req.params.id){
    Trainer.destroyById(req.params.id, function(err){
      if( err ){
        res.send({"state":false,"error":err})
      }else{
        res.send({"state":true})
      }

    })
  }
}


exports.trainerMain = function(req ,res) {
  var filter= {} ;
  setFilter(req,filter);

  if(req.params.serviceId){
    SportsService.findById(req.params.serviceId, function(err,servicedata){
      if(servicedata){
        FindTrainers(servicedata);
      }
      else{
        res.render("trainerMain", {
          "trainers":'',
          "service": '',
          "totalCount":count,
          "filter":filter,
          "userMark":req.session.user.mark
        });
      }

    })
  }

  function FindTrainers(currentService){
      //查找条件
      var fWhere = {};
      var fArray = [];
      fArray.push({"sportsServiceId":currentService.id});
      fWhere.and = fArray;

      Trainer.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip},function (err, data) {
        Trainer.count(fWhere, function(err,count){
          res.render("trainerMain", {
            "trainers":data,
            "service": currentService,
            "totalCount":count,
            "filter":filter,
            "userMark":req.session.user.mark
          });
        })
      })
  }
}

exports.trainerAdd = function(req,res){
    var _trainer = req.body.trainer;
    Trainer.upsert(_trainer, function(err,data){
      if(err){
        res.send({"state":false,"error":err})
      }else{
        res.send({"state":true})
      }
    })
}


exports.trainerTable = function(req,res){

  var filter= {} ;
  setFilter(req,filter);

  if(req.params.serviceId){
    SportsService.findById(req.params.serviceId, function(err,servicedata){
      if( !err ){
        console.log(servicedata)
        FindTrainers(servicedata);
      }
    })
  }

  function FindTrainers(currentService){
    //查找条件
    var fWhere = {};
    var fArray = [];
    fArray.push({"sportsServiceId":currentService.id});
    if(req.body.trainer){
      if(req.body.trainer.name){
        fArray.push({name: {like:req.body.trainer.name}})
      }
      if(req.body.trainer.cardID){
        fArray.push({cardID: {like:req.body.trainer.cardID}})
      }
      if(req.body.trainer.phone){
        fArray.push({phone: {like:req.body.trainer.phone}})
      }
    }
    fWhere.and = fArray;

    Trainer.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip},function (err, data) {
      Trainer.count(fWhere, function(err,count){
        res.render("trainerTable", {
          "trainers":data,
          "service": currentService,
          "totalCount":count,
          "filter":filter,
          "userMark":req.session.user.mark
        });
      })
    })
  }

}

