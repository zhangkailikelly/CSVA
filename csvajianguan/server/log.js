
var fs = require("fs");
var path = require('path');
var moment = require("moment");
var logName = moment(new Date()).format("YYYY-MM-DD");
const logstream = fs.createWriteStream(path.resolve()+'/logs/'+logName+'log.log',{flags:"a"})

const log = exports.log = (err) =>{
  logstream.write("\n"+"["+(new Date).toLocaleString()+"] ERROR: " + err + "\n");
}
const info = exports.info = (message) =>{
  logstream.write("\n"+"["+(new Date).toLocaleString()+"] INFO: " + message + "\n");
}
