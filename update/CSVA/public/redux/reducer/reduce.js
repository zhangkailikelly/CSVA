import { combineReducers } from 'redux';
import store from "../store/store.js";
//过滤条件
 const search=function(state=store.search,action){
	 switch(action.type){
		case "STADIUM_SEARCH":
			console.log(555555555);
			console.log(Object.assign({}, state, action.objs));
			return Object.assign({},state,action.objs);
		default:
		return state;
	}
}
//获取表格数据
/**
 * [data description]
 * @param  {Object} state  [description]
 * @param  {[type]} STADIUM_DATA=>为表格提供数据 [description]
 * @return {[type]} CHECK_STATE=>审查状态 ,更改状态  [description]
 */
const data=function(state=store.data,action){
	console.log(store.data);
	switch(action.type){
		case 'STADIUM_DATA':
			console.log(121212);
			console.log(action.obj);
			console.log(Object.assign({}, state, action.obj));
			return Object.assign({},state,action.obj);//{stadium:data}
		case 'CHECK_STATE':
		let objState=Object.assign({},state);
		objState.stadium[action.index].state=action.datas;
		return Object.assign({},state,objState);
		case 'ADD_RULE':
		let pushRuleData=[...state.ruleList,action.data];
		return Object.assign({},state,{ruleList:pushRuleData});
		case 'FAIL_RULE':
		let newArr=[];
		state.ruleList.map((index,i)=>{if(i!=state.ruleList.length-1)newArr.push(index)});
		return Object.assign({},state,{ruleList:newArr});
		default:
		return state;
	}
}
//获取单条审查数据
const checkData=function(state=store.checkData,action){
	switch(action.type){
		case "CHECK_DATA":
		return Object.assign({},state,action.datas,{index:action.index});
		default:
		return state;
	}
}
//获取此条数据的id
const lookData=function (state=store.lookData,action) {
	switch(action.type){
		case "LOOK_DATA":
		return Object.assign({},state,{id:action.id});
		default:
		return state;
	}
}
//合并reduce,通过select函数的store.data/search/checkData获取对应的数据
const reducer = combineReducers({
  data,
  search,
  checkData,
  lookData
})
export default reducer;