//左1搜索按钮
export function search(obj){
	return {type:"STADIUM_SEARCH",objs:Object.assign(obj,{type:"search"})}
}
//左1获取数据
export function stadiumData(data) {
	return {type:"STADIUM_DATA",obj:data}
}
