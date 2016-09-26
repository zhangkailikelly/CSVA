import React,{Component} from "react";
import {render} from "react-dom";
import Search from './LeftListOneSearch.jsx';
export default class LeftListOne extends Component{
	constructor(){
		super();
		this.state={
			data:[]
		}
}
	componentDidMount(){
		var _this=this;
		
	$.ajax({
		url:"http://139.129.131.105:8802/api/dailys",
		type:"GET",
		dataType:'',
		success:function(data){
			console.log(data);
		}
	})
}


	render(){
		return (
			<div>
			<Search/>
			   		
			</div>
				)
	}
};