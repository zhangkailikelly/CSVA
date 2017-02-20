/**
 * Created by jey on 2016/4/20.
 */


var Rule;
exports.setRuleModel = function(urlemodel){
    if(!Rule){
      Rule = urlemodel;
    }
}



exports.ruleAddPage = function(req, res){
  res.render("ruleAdd");
}

exports.ruleAdd = function(req, res){
  if(req.body.rule){
    Rule.create(req.body.rule, function(err, data){
      if(err){
        return res.send({"state":false,"error":err})
      }
      //如果保存的规则，为当前规则，就将其他规则修改为非当前规则(始终确保当前规则，只有一个)
      if(data && data.isCurrent == 1){
          if(data.isCurrent == 1)
          {
              Rule.find({'where':{"isCurrent":1,'id':{'neq':data.id}}},function(err,datas)
              {
                  if(datas)
                  {
                      datas.forEach(function(o, i)
                      {
                          o.updateAttributes({"isCurrent":2},function(){
                            return res.send({"state":true})
                          });
                      })
                  }
                  else
                  {
                    return res.send({"state":true})
                  }
              })
          }
          else
          {
            return res.send({"state":true})
          }
      }
    })
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

exports.ruleTable = function(req,res){
  var filter= {} ;
  setFilter(req,filter);


  Rule.find({"limit":filter.limit,"skip":filter.skip},function (err, data) {
    Rule.count( function(err,count){
      res.render("ruleTable", {
        "rules": data,
        "totalCount":count,
        "filter":filter
      });
    })

  })
}

exports.ruleMain = function(req, res){

  var filter= {} ;
  setFilter(req,filter);


  Rule.find({"limit":filter.limit,"skip":filter.skip},function (err, data) {
    Rule.count( function(err,count){
      res.render("ruleMain", {
        "rules": data,
        "totalCount":count,
        "filter":filter
      });
    })

  })

}


//

