import { combineReducers } from 'redux';
/**
 * 搜索 过滤条件
 * @param  {Object} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
 const search=function(state={},action){
	switch(action.type){
		case "STADIUM_SEARCH":
		return Object.assign({},state,action.objs);
		default:
		return state;
	}
}
/**
 * 表格数据
 * @param  {Object} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
const data=function(state={},action){
	switch(action.type){
		case 'STADIUM_DATA':
		return Object.assign({},state,action.obj);
		default:
		return state;
	}
}
/**
 * 更改审查状态
 * @param  {Object} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
const checkData=function(state={},action){
	switch(action.type){
		case "CHECK_DATA":
		return Object.assign({},state,action.datas);
		default:
		return state;
	}
}
const reducer = combineReducers({
  data,
  search,
  checkData
})
export default reducer;