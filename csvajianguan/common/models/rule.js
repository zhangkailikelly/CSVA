module.exports = function(Rule) {
  Rule.currentRule = function(cb){
    Rule.findOne({"where":{"isCurrent":1}},function(err,ruledata){
      cb(err,ruledata);
    })
  }




};
