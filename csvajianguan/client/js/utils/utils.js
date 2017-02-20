(function(global){

  /**
   //* Created by jey on 2016/5/4
   * 该js主要提供一些前端业务模块的静态方法和工具方法
   */


//###########################################################################//
    /**
     * 拓展数组原型链unique方法，用于去掉数组重复数据
     * @returns {Array}
     */
    Array.prototype.unique = function(){
      var res = [];
      var json = {};
      for(var i = 0; i < this.length; i++){
        if(!json[this[i]]){
          res.push(this[i]);
          json[this[i]] = 1;
        }
      }
      return res;
    }
//###########################################################################//
  global.util={};
  /**
   * 提取一个常规ajax方法
   * @param url  地址
   * @param param 参数
   * @param cb 回调函数
     */
  global.util.postAjax = function(url,param,cb){
      $.ajax({
        type: 'post',
        url: url,
        data:param,
        success: function (data) {
          if(data){
            if(cb)
               cb(data)
          }
        }
      });
  }
//###########################################################################//


  global.total = {
    totalOpenDays:[],      //汇总开放天数
    receiveNums: 0,      //汇总接待人数
    receiveNumsThisYear: 0,       //今年接待量
    receiveNumsPrevYear: 0,       //今年接待量

    /**
     * @brief 汇总场馆开放情况，包含日常开放天数，赛事开放天数，服务开放天数
     */
    totalRenderer:function(){
      return function(url,text,cb){
        $.ajax({
          type: 'post',
          url:url,
          success: function (data) {

            if (data) {

              //追加数组()
              Array.prototype.push.apply(window.total.totalOpenDays,data.data);
              //去除掉，重复的天数
              window.total.totalOpenDays = window.total.totalOpenDays.unique();

              if(cb)
                cb(data.data, text);
            }
          }
        });
      }
    },

    /**
     * @brief 汇总场馆开放情况，包含日常开放人数，赛事开放人数，服务培训人数(对应规则日期)
     */
    totalReceiveNumsAdd:function(nums){
      this.receiveNums  += nums
    },

    /**
     * @brief 汇总场馆开放情况，包含日常开放人数，赛事开放人数，服务培训人数(对应日期为今年)
     */
    totalReceiveNumsAdd_ThisYear:function(nums){
      this.receiveNumsThisYear  += nums
    },

    /**
     * @brief 汇总场馆开放情况，包含日常开放人数，赛事开放人数，服务培训人数(对应日期为去年)
     */
    totalReceiveNumsAdd_PrevYear:function(nums){
      this.receiveNumsPrevYear  += nums
    },
    /**
     * @brief 清空人数
     */
    totalReceiveNumsEmpty:function(){
      this.receiveNums = 0;
    },
    /**
     * @brief 清空人数(今年)
     */
    totalReceiveNumsThisYearEmpty:function(){
      this.receiveNumsThisYear = 0;
    },
    /**
     * @brief 清空人数(去年)
     */
    totalReceiveNumsPrevYearEmpty:function(){
      this.receiveNumsPrevYear = 0;
    }
  };




//###########################################################################//

})(window)
