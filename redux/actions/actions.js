//场馆列表搜索按钮
export function search(obj){
	return {type:"STADIUM_SEARCH",objs:Object.assign(obj,{type:"search"})}
}
//场馆列表获取数据
export function stadiumData(data) {
	return {type:"STADIUM_DATA",obj:data}
}
//点击审核获取数据
/**
 * [check description]	 修改审查状态
 * @param  {[type]} data 审查的那条数据
 * @param  {[type]} i    此条数据在数据数组中的索引
 * @return {[type]}      action发出的对象
 */
export function check(data,i){
	return {type:"CHECK_DATA",datas:data,index:i}
}
/**
 * 改变审查状态
 * @param  {[type]} data,改变的状态值
 * @param  {[type]} i   改变的那条数据的索引
 * state: 更改前的状态值,如果失败重新更改过来
 * @return {[type]}     
 */
export function checkState(data,i,state){
	return (dispatch,getState)=>{
		$.ajax({
			beforeSend:function(){
				dispatch({type:'CHECK_STATE',datas:data,index:i})
			},
			url:"",
			type:"post",
			success:function(){
				alert("更改成功")
			},
			error:function(){
				alert("更改失败");
				// dispatch({type:'CHECK_STATE',datas:state,index:i})
			}
		})
	}
}



/**
 * 获得词条数据的id,可根据id获取数据的更多信息
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export function viewData(id) {
	return {type:'LOOK_DATA',id:id}
}

//添加评分规则
/**
 * 失败后删除原来的
 * @param {[type]} datas [description]
 */
export function addRule(datas){
	return (dispatch,getState)=>{
		$.ajax({
			beforeSend:function(){
				dispatch({type:"ADD_RULE",data:datas})
			},
			url:"",
			type:"post",
			data:"",
			success:function(){
				alert("添加成功")
			},
			error:function(){
				// dispatch({type:'FAIL_RULE'})服务端更改失败发出此action
			}
		})
	}
}

let publicUrl="http://139.129.131.105:8802/api/";
//获取场馆列表数据
export function getStadiumsData() {
    return (dispatch, getState) => {
      $.ajax({
		url:publicUrl+"stadiums",
		data:"",
		type:"GET",
		dataType:'JSON',
		success:function(data){
		dispatch(stadiumData({stadium:data}))
			}
		})
    }
}


//获取评分规则列表数据
export function getRuleListData() {
    return (dispatch, getState) => {
        $.ajax({
            url: publicUrl+"rules",
            data: "",
            type: "GET",
            dataType: 'JSON',
            success: function(data) {
                dispatch(stadiumData({"ruleList":data}))
            }
        })
    }
}

//数据统计列表数据
export function costList(){
    return (dispatch,getState)=>{
        $.ajax({
            url:publicUrl+"dailys",
            type:"get",
            data:"",
            dataType:"json",
            success:function(data){
            dispatch(stadiumData({StadiumDataCount:data}))
            }
        })
    }
}

//体育赛事
export function getGamesMainData(id) {
    return (dispatch, getState) => {
        $.ajax({
            url: publicUrl+"sportsActivs?filter[where][stadiumId]="+id+"&filter[fields][name]=true&filter[fields][level]=true&filter[fields][startDate]=true&filter[fields][endDate]=true&filter[fields][number]=true",
            data: "",
            type: "GET",
            dataType: 'JSON',
            success: function(data) {
               dispatch(stadiumData({sportsActivs:data}))
            }
        })
    }
}

//群体活动
export function getActiveMainData(id) {
    return (dispatch, getState) => {
        $.ajax({
            url: publicUrl+"sportsActivs?filter[where][stadiumId]="+id+"&filter[fields][name]=true&filter[fields][startDate]=true&filter[fields][endDate]=true&filter[fields][number]=true",
            data: "",
            type: "GET",
            dataType: 'JSON',
            success: function(data) {
            	console.log(data)
                dispatch(stadiumData({groupActivity:data}))
            }
        })
    }
}
//其他文体活动
export function getActiveMainData2(id) {
    return (dispatch, getState) => {
        $.ajax({
            url: publicUrl+"sportsActivs?filter[where][stadiumId]="+id+"&filter[fields][name]=true&filter[fields][startDate]=true&filter[fields][endDate]=true&filter[fields][number]=true",
            data: "",
            type: "GET",
            dataType: 'JSON',
            success: function(data) {
              dispatch(stadiumData({otherActivity:data}))
            }
        })
    }
}



//体育训练
export function getTrainingData(id) {
    return (dispatch, getState) => {
        $.ajax({
            url: publicUrl+"sportsServices? filter[where][stadiumId]="+id+"&filter[fields][name]=true&filter[fields][unit]=true&filter[fields][startDate]=true&filter[fields][endDate]=true&filter[fields][number]=true",
            data: "",
            type: "GET",
            dataType: 'JSON',
            success: function(data) {
             dispatch(stadiumData({groupActivity:data}))
            }
        })
    }
}
//运动健身指导
export function getGuidanceData(id) {
    return (dispatch, getState) => {
        $.ajax({
            url:publicUrl+"sportsServices? filter[where][stadiumId]="+id+"&filter[fields][name]=true &filter[fields][startDate]=true&filter[fields][endDate]=true&filter[fields][number]=true",
            data: "",
            type: "GET",
            dataType: 'JSON',
            success: function(data) {
            	console.log(data)
             dispatch(stadiumData({sporteFitness:data}))
            }
        })
    }
}
//专业训练
export function getMajorData(id) {
    return (dispatch, getState) => {
        $.ajax({
            url: "http://139.129.131.105:8802/api/sportsServices?filter[where][stadiumId]="+id+"&filter[fields][name]=true&filter[fields][unit]=true&filter[fields][startDate]=true&filter[fields][endDate]=true&filter[fields][fee]=true&filter[fields][number]=true",
            data: "",
            type: "GET",
            dataType: 'JSON',
            success: function(data) {
            	console.log(id)
              dispatch(stadiumData({sporteMajor:data}))
            }
        })
    }
}

