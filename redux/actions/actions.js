//场馆列表搜索按钮
export function search(obj){
	return {type:"STADIUM_SEARCH",objs:Object.assign(obj,{type:"search"})}
}
//场馆列表获取数据
export function stadiumData(data) {
	return {type:"STADIUM_DATA",obj:data}
}
