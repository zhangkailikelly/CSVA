var moment = require("moment")
module.exports = function(FlowMoney) {

  /**
   * 每当流动资金更改后，自动触发，更改收入表的数据
   */
  FlowMoney.observe('after save', function(ctx, next) {
    if (ctx.instance) {
      const tempIns = ctx.instance;
      const InCome = ctx.Model.app.models.InCome;
      const Rule = ctx.Model.app.models.Rule;
      Rule.currentRule(function(err,curRule){
        var tempNew = {
          stadiumId:ctx.instance.stadiumId,
          money:ctx.instance.payIn,
          year:moment(curRule.startDate).year()
        }
        InCome.findOrCreate({where:{stadiumId:tempNew.stadiumId,year:tempNew.year}},tempNew, function(err,data){
          if(data){
            data.updateAttributes(tempNew, function(er, instance){})
          }
        })
      })
    }
    next();
  });
};
