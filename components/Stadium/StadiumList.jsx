import React,{Component} from "react";
import {render} from "react-dom";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/actions.js';
import Search from './StadiumListSearch.jsx';
class StadiumList extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		const {dispatch}=this.props;
		$.ajax({
		url:"http://139.129.131.105:8802/api/stadiums?filter[fields][name]=true&filter[fields][city]=true&filter[fields][mainUnit]=true&filter[fields][buildDate]=true&filter[fields][state]=true",
		data:"",
		type:"GET",
		dataType:'JSON',
		success:function(data){
		dispatch(action.stadiumData({stadium:data}))
			}
		})
		
	}
	render(){
		const {dispatch,Data}=this.props;
		return (
			<div>
				<Search search={(obj)=>{dispatch(action.search(obj))}}/>
	            {/******************表格*********************/}
	            <div id="ruleWrap"  className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
	    			<table className="table tableColor tablebor NoMB" id="ruleTable">
						<thead className="tabelH">
							<tr>
								<th style={{width:'150px'}}>场馆名称</th>
								<th style={{width:'115px'}}>所在城市</th>
								<th style={{width:'120px'}}>审核状态</th>
								<th style={{width:'115px'}}>运营单位名称</th>
								<th style={{width:'165px'}}>提交时间</th>
								<th style={{width:'290px'}}>操作</th>
							</tr>
						</thead>
						<tbody>
							{
								Data.length==0?(<tr><td>没有数据</td></tr>):Data.map(function(index,i){
								return (
									<tr key={i}>
										<td style={{width:'150px'}}>{index.name}</td>
										<td style={{width:'115px'}}>{index.city}</td>
										<td style={{width:'120px'}}>{index.state}</td>
										<td style={{width:'115px'}}>{index.mainUnit}</td>
										<td style={{width:'165px'}}>{index.buildDate}</td>
										<td style={{width:'290px'}}>
											<span className="auditBtn"><a name=''>审核</a></span> | 
							                <span className="auditViewBtn"><a name=''>查看运营数据</a></span> | 
							                <span className="auditCountBtn"><a name=''>查看数据统计</a></span>
										</td>
									</tr>
								)
							})
							}
						</tbody>
				    </table>
				</div>
			</div>
		)
	}
};
//筛选符合条件的
function filter(filters,data,type){
	var arr=[];
	//没有数据或者数据小于1条均不符合要求
	if(data&&data.length){
		//状态数据转换
	data=data.map(function(index){
		if(index.state==0)index.state="不限";
		if(index.state==1)index.state="正在审核";
		if(index.state==2)index.state="审核通过";
		if(index.state==3)index.state="审核不通过";
		return index;
	})
		if(type=='search'){
			data.map(function(index){
				if(filters.state==0)filters.state="不限";
				if(filters.state==1)filters.state="正在审核";
				if(filters.state==2)filters.state="审核通过";
				if(filters.state==3)filters.state="审核不通过";
				if(index.name==filters.cgName&&index.city==filters.locaCity&&index.state==filters.state&&index.mainUnit==filters.department){
					arr.push(index)
				}
			})
		}else{
			arr=data;
		}
	}
	return arr;
}
//过滤store
function select(store){
	return {
		searchs:store.search,
		Data:filter(store.search,store.data.stadium,store.search.type)
	}
}
export default connect(select)(StadiumList);