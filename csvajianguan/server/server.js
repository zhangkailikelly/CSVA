var loopback = require('loopback');
var boot = require('loopback-boot');
var fs = require("fs");

var app = module.exports = loopback();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.start = function() {

  // start the web server
  return app.listen(function() {

    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //能获取post表单的字段值
app.use(cookieParser());;


var session = require('express-session');  //添加session库
var mongoStore = require('connect-mongo')(session); //添加session持久中间件
app.use(session({
       secret: 'kobe',
       name: 'xx',
       cookie: {maxAge: 2000000 },
      resave: true,
      saveUninitialized: true,
       store: new mongoStore({

         url:"mongodb://139.129.131.105:27017/jianguan"

       })
 }));


var viewPath = [
  './client/views',
  './client/views/module/sportsActiv',
  './client/views/module/stadium',
  './client/views/module/rule',
  './client/views/module/cheapInfo',
  './client/views/module/sportsService',
  './client/views/module/trainer',
  './client/views/module/total',
  './client/views/module/daily',
  './client/views/module/profit'



]


require('./_routes.js')(app);

require('./apiRoute.js')(app);

var logger = require('morgan');
//app.use(logger('dev'));
app.set('views', viewPath);

app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

//设置静态资源文件
app.use(loopback.static( 'client'));

//设置api资源文件
app.use('/api',loopback.static('api'));


var log = require("./log");
const errorHandler = (err, req, res, next) =>{
  log.log(err.stack);
}
//app.use(errorHandler) //开发阶段暂时，不抓取错误日志，产品运行时，再放开



