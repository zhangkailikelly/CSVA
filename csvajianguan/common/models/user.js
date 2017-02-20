module.exports = function (user) {

  // Set the username to the users email address by default.
  user.observe('before save', function setDefaultUsername(ctx, next) {
    if (ctx.instance) {
      if(ctx.isNewInstance) {
        //ctx.instance.username = ctx.instance.email;
      }
      ctx.instance.status = 'created';
      ctx.instance.created = Date.now();
    }
    next();
  });


  user.hasAdmin = function(cb){
    user.findOne({"where":{"mark":1}},function(err,adminUser){
      if(err){
        cb(err,null)
      }

      if(adminUser){
        cb(null,true);
      }else{
        cb(null,false);
      }

    })
  }


};
