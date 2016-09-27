import { combineReducers } from 'redux';

 const search=function(state={},action){
	switch(action.type){
		case "STADIUM_SEARCH":
		return Object.assign({},state,action.objs);
		default:
		return state;
	}
}
const data=function(state={},action){
	switch(action.type){
		case 'STADIUM_DATA':
		return Object.assign({},state,action.obj);
		default:
		return state;
	}
}
const reducer = combineReducers({
  data,
  search
})
export default reducer;