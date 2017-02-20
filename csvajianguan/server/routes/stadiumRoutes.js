/**
 * Created by jey on 2016/4/19.
 */

var util = require('util');
var multiparty = require('multiparty');
var path = require('path');
var fs = require('fs');
var log = require("../log");

var Stadium;
var Stadium_Daily;
exports.setStadiumModel = function(stadiummodel){
  if(!Stadium){
    Stadium = stadiummodel;
  }
};
exports.setStadium_DailyModel = function(sdailymodel){
  if(!Stadium_Daily){
    Stadium_Daily = sdailymodel;
  }
};

exports.stadiumAddPage = function(req,res){
  var user = req.session.user;
  if(req.session.currentStadium){
    delete req.session.currentStadium
  }
  res.render("stadiumAdd",{
    "user":user
  });
}

exports.deletePic = (req, res) =>{
  if(req.params.img){
      var tempPic =  req.session.currentStadium.picture;
      var tempArray = []
      if(tempPic && tempPic.forEach){
        tempPic.forEach(function(name){
          if(name != req.params.img){
            tempArray.push(name);
          }
        })
        //到数据库删除图片
        Stadium.findById(req.session.currentStadium.id,function(err,instance){
          instance.updateAttribute("picture",tempArray,function(er,inst){
            if(er){
              log.log("更新图片出现异常"+er)
            }
            req.session.currentStadium.picture = tempArray;
            res.send({"result":true});
          })
        })
        //删除磁盘上的图片
        const __filePath = path.resolve()+"/client/uploadImage/"+req.session.currentStadium.id+"/"+req.params.img;
        fs.exists(__filePath, (exists) =>{
          if(exists){
            fs.unlink(__filePath,(err) =>{
                 if(err){
                   log.log("磁盘删除文件出现异常："+err);
                 }
            })
          }
        })

      }
  }



}
const renameUploadImgDir = (tempDirName, targetDirName) =>{
  const __fileDirPath = path.resolve()+"/client/uploadImage/";
    fs.exists(__fileDirPath+tempDirName,(exists) =>{
      if(exists){
        fs.rename(__fileDirPath+tempDirName, __fileDirPath+targetDirName)
      }

    })

}
exports.updatePic = function(req,res){

  var imgDirName = ''
  var tempImgDirName = false;

  if(req.session.currentStadium){
    imgDirName = req.session.currentStadium.id;
  }else if( req.params.imgDir){
    imgDirName = req.params.imgDir;
    tempImgDirName = true;

  }

  //创建目录
  var __fileDirPath = path.resolve()+"/client/uploadImage/"+imgDirName+"/";

  const startParse = () =>{

    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: __fileDirPath});
    //上传完成后处理
    form.parse(req, function(err, fields, files) {
      var filesTmp = JSON.stringify(files, null, 2);

      if (err) {
        log.log(err)
      } else {
        var inputFile = files.file[0];
        var uploadedPath = inputFile.path;

        var dstPath = __fileDirPath + inputFile.originalFilename;

        fs.rename(uploadedPath, dstPath, function (err) {
          if (err) {
            log.log('上传图片 rename error: ' + err);
          }
        });
        if(tempImgDirName){
          res.send({"result":true,"tempDir":imgDirName});

        }else{
          res.send({"result":true});
        }

      }
    })
  }


  fs.exists(__fileDirPath,(exists) => {
      if(!exists)
      {
          fs.mkdir(__fileDirPath, function (err) {
            if(err){
              log.log("场馆创建图片目录失败！");
              res.send({"result":false});
            }else{
              startParse();
            }
          });
      }
     else
      {
        startParse();
      }
  });


}
const formStadium = (req, firstAdd) =>{
  var _stadium = req.body.stadium;

  //临时图片存储数组
  var tempArray = [];

  if(!firstAdd){
      //由于场馆图片是数组对象，需要每次都取一份备份的原始图片
      var tempPic =  req.session.currentStadium.picture;
      if(tempPic && tempPic.length > 0){
        tempPic.forEach(function(o){
          if(o){
            tempArray.push(o)
          }
        })
      }
  }
  //保存新提交过来的图片
  if(_stadium.picture){
    if( _stadium.picture.forEach){
      _stadium.picture.forEach(function(o){
        if(o){
          tempArray.push(o)
        }
      })
    }else{
      tempArray.push(_stadium.picture);
    }
  }
  _stadium.picture = tempArray;
  return _stadium;
}
exports.updateJson= (req,res) =>{
  Stadium.upsert(formStadium(req), function(err,data){
    if(err){
      log.log("场馆更新失败"+err);
      return  res.send({"state":false,"error":err})
    }
    return  res.send({"state":true})
  })
}
exports.update = function(req,res){
  Stadium.upsert(formStadium(req), function(err,data){
    if(err){
      log.log("场馆更新失败"+err);
    }
    res.redirect("/");
  })


}

exports.stadiumAdd = function(req,res){
  var user = req.session.user;
  var _stadium =formStadium(req, true);
  _stadium.userid = user.id;
  _stadium.state = 1
  console.log(util.inspect(_stadium))
  Stadium.create(_stadium, function(err,data){
    if(err){
      log.log("创建场馆error"+err);
    }
    req.session.stadium = data;
    if(req.body.tempImgDir){
      renameUploadImgDir(req.body.tempImgDir, data.id);
    }

    res.redirect("/");
  })
}



exports.stadiumSearchList = function(req,res){
  var filter= {} ;
  setFilter(req, filter)

  var fWhere = {};
  var fArray = [];
    if(req.body.stadium.name){
      fArray.push({name: {like:req.body.stadium.name}})
    }
    if(req.body.stadium.mainUnit){
      fArray.push({mainUnit: {like:req.body.stadium.mainUnit}})
    }
    if(req.body.stadium.city){
      fArray.push({city: {like:req.body.stadium.city}})
    }
    if(req.body.stadium.contants){
      fArray.push({contants: {like:req.body.stadium.contants}})
    }
    if(req.body.stadium.contantsPhone){
      fArray.push({contantsPhone: {like:req.body.stadium.contantsPhone}})
    }
    if(req.body.stadium.state && req.body.stadium.state != 0){
      fArray.push({state: req.body.stadium.state})
    }

    if(fArray.length > 0){
      fWhere.and = fArray
    }



  console.log(util.inspect(fWhere,{ depth: null }))



  Stadium.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip}, function(err,data){
    Stadium.count(fWhere, function(err,count){
        res.render("stadiumTable",{
          stadiums:data,
          "totalCount":count,
          "filter":filter
        });
      })

    })
  }


exports.stadiumAudit = function(req,res){
  if(req.params.id && req.params.state){
    Stadium.findById(req.params.id, function(err,data)
    {
      if( !err )
      {
        data.updateAttributes({state:req.params.state},function(error, ins)
        {
            if( !error )
            {
             return res.send({"state":true})
            }
          return  res.send({"state":false,"error":error})
        })

      }

    })
  }
}
exports.stadiumInfo =  function(req, res){
  res.render("stadiumView",{
    stadium:req.session.currentStadium,
    submitType:"ajax"
  });
}
exports.stadiumDetail = function(req,res){
  //var user = req.session.user;
  //Stadium.create(_stadium, function(err,data){
  //  if(err){
  //    console.log(err);
  //  }
  //  res.redirect("/stadiumView");
  //})
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


exports.stadiumFunctionBlock = function(req ,res){
  console.log(req.params.id);
  if(req.params.id){
    Stadium.findById(req.params.id, function(err,data){
      if(data){
          req.session.currentStadium = data;
          //console.log("__currentStadium:"+req.session.currentStadium.name)
          res.render("stadiumFunctionBlock",{
            currentStadium:data
          })
      }
    })
  }
  else if(req.session.currentStadium){
    res.render("stadiumFunctionBlock",{
      currentStadium:req.session.currentStadium
    })
  }
  else{
    res.render("stadiumFunctionBlock",{
      currentStadium:null
    })
  }
}
const renderStadiumPic = (_stadium) =>{
  var tempPics = 0;
  if(_stadium.picture){
    tempPics = _stadium.picture.length;
  }
  _stadium.pictureCount = tempPics;
}
exports.stadiumAuditDetail = function(req ,res){

      if(req.params.id){
        Stadium.findById(req.params.id, function(err,data){
          if( !err ){
            renderStadiumPic(data)
            res.render("stadiumViewReadyOnly",{
              stadium:data
            })
          }
        })
      }
      else if(req.session.currentStadium){
        renderStadiumPic(req.session.currentStadium);
        res.render("stadiumViewReadyOnly",{
          stadium:req.session.currentStadium
        })
      }
      else{
        res.render("stadiumViewReadyOnly",{
          stadium:null
        })
      }
}


exports.stadiumMain = function(req ,res) {
  var filter= {} ;
  setFilter(req,filter);

  //查找条件
  var fWhere = {};
  var fArray = [];
  fArray.push({"type":1})
  fWhere.and = fArray;


  Stadium.find({"limit":filter.limit,"skip":filter.skip},function (err, data) {
    Stadium.count( function(err,count){
      res.render("stadiumMain", {
        "stadiums": data,
        "totalCount":count,
        "filter":filter
      });
    })

  })
}

exports.stadiumDataCountUpdateTable = function(req, res){
  var filter= {} ;
  setFilter(req, filter)

  var fWhere = {};
  var fArray = [];
  if(req.body.sdcStartTime){
    fArray.push({day: {gte:req.body.sdcStartTime}})
  }
  if(req.body.sdcEndTime){
    fArray.push({day: {lte:req.body.sdcEndTime}})
  }
  if(req.body.sdcType){
    if(req.body.sdcType=='os1'){

    }else if(req.body.sdcType=='os2'){

      fArray.push({priceType: 3});//1全价,2低收费,3免费
    }else{

      fArray.push({priceType: 2});
    }
  }
  if(req.body.sdcPhone){
    fArray.push({phone: {like:req.body.sdcPhone}})
  }

  if(fArray.length > 0){
    fWhere.and = fArray
  }
  Stadium_Daily.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip}, function(err,data){
       if(!err){
           Stadium_Daily.count({'where':fWhere}, function(err,count){
             res.render("stadiumDataCountTable", {
               "dailyData": data,
               "totalCount":count,
               "filter":filter
             });
           });
       }else{
         res.render("stadiumDataCountTable", {
           "dailyData": [],
           "totalCount":0,
           "filter":filter
         });
       }
  })
}
exports.stadiumDataCount = function(req,res) {
  var filter= {} ;
  setFilter(req,filter);
  Stadium_Daily.find({"limit":filter.limit,"skip":filter.skip},function (err, data) {
    if(!err){
      Stadium_Daily.count( function(err,count){
        if(!err){
          var resTotalDiscountNumber=0;
          var resTotalFreeNumber=0;
          var resTotalAmount=0;
          for(var dcount=0;dcount<data.length;dcount++){
            if(data[dcount].priceType==2){
              resTotalDiscountNumber=resTotalDiscountNumber+data[dcount].count;
            }else if(data[dcount].priceType==3){
              resTotalFreeNumber=resTotalFreeNumber+data[dcount].count;
            }else{

            }
            if(data[dcount].discountAmount){

              resTotalAmount=resTotalAmount+data[dcount].discountAmount;
            }
          }
          res.render("stadiumDataCount", {
            "dailyData": data,
            "totalCount":count,
            "totalDiscountNumber":resTotalDiscountNumber,
            "totalFreeNumber":resTotalFreeNumber,
            "totalAmount":resTotalAmount,
            "filter":filter
          });
        }

      });
    }else{
      res.render("stadiumDataCount", {
        "dailyData": [],
        "totalCount":0,
        "totalDiscountNumber":0,
        "totalFreeNumber":0,
        "totalAmount":0,
        "filter":filter
      });

    }
  })
}
exports.stadiumDataCountSearch = function(req,res){
  var filter= {} ;
  setFilter(req, filter)

  var fWhere = {};
  var fArray = [];
  if(req.body.sdcStartTime){
    fArray.push({day: {gte:req.body.sdcStartTime}})
  }
  if(req.body.sdcEndTime){
    fArray.push({day: {lte:req.body.sdcEndTime}})
  }
  if(req.body.sdcType){
    if(req.body.sdcType=='os1'){

    }else if(req.body.sdcType=='os2'){

      fArray.push({priceType: 3});//1全价,2低收费,3免费
    }else{

      fArray.push({priceType: 2});
    }
  }
  if(req.body.sdcPhone){
    fArray.push({phone: {like:req.body.sdcPhone}})
  }

  if(fArray.length > 0){
    fWhere.and = fArray
  }

  //
  //
  //console.log(util.inspect(fWhere,{ depth: null }))



  Stadium_Daily.find({'where':fWhere,"limit":filter.limit,"skip":filter.skip}, function(err,data){
    if(!err){
      Stadium_Daily.count( function(err,count){
        if(!err){
          var resTotalDiscountNumber=0;
          var resTotalFreeNumber=0;
          var resTotalAmount=0;
          for(var dcount=0;dcount<data.length;dcount++){
            if(data[dcount].priceType==2){
              resTotalDiscountNumber=resTotalDiscountNumber+data[dcount].count;
            }else if(data[dcount].priceType==3){
              resTotalFreeNumber=resTotalFreeNumber+data[dcount].count;
            }else{

            }
            if(data[dcount].discountAmount){

              resTotalAmount=resTotalAmount+data[dcount].discountAmount;
            }
          }
          res.render("stadiumDataCountTable", {
            "dailyData": data,
            "totalCount":count,
            "totalDiscountNumber":resTotalDiscountNumber,
            "totalFreeNumber":resTotalFreeNumber,
            "totalAmount":resTotalAmount,
            "filter":filter
          });
        }

      });
    }else{
      res.render("stadiumDataCountTable", {
        "dailyData": [],
        "totalCount":0,
        "totalDiscountNumber":0,
        "totalFreeNumber":0,
        "totalAmount":0,
        "filter":filter
      });

    }
  })
}
