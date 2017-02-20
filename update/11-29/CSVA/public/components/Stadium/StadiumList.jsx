import React,{Component} from "react";
import {Link} from 'react-router';
import {render} from "react-dom";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/actions';
import Search from './StadiumListSearch';
class StadiumList extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		const {dispatch,Data}=this.props;
		if(Data.length!=0)return;
		dispatch(action.getStadiumsData())
	}
	viewData(id){
		const {dispatch}=this.props;
		dispatch(action.viewData(id));
	}
	render(){
		const {dispatch,Data}=this.props;
		return (
			<div>
				<Search search={(obj)=>{dispatch(action.search(obj))}}/>
	            {/******************表格*********************/}
	            <div id="ruleWrap" className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
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
								Data.length==0?(<tr><td style={{width:"955px", textAlign:"center"}}>没有数据</td></tr>):Data.map((index,i)=>
								 (
									<tr key={i}>
										<td style={{width:'150px'}}>{index.name}</td>
										<td style={{width:'115px'}}>{index.city}</td>
										<td style={{width:'120px'}}>
										{
											((obj)=>{
												if(obj==0)return "不限";
												if(obj==1)return "正在审核";
												if(obj==2)return "审核通过";
												if(obj==3)return "审核不通过";
											})(index.state)
										}
										</td>
										<td style={{width:'115px'}}>{index.mainUnit}</td>
										<td style={{width:'165px'}}>{index.buildDate}</td>
										<td style={{width:'290px'}}>
										<span className="auditBtn"><Link to="/manage/stadium/2/" onClick={()=>{dispatch(action.check(index,i))}}>审核</Link></span> |
										<span className="auditViewBtn"><Link to="/manage/stadium/3/" onClick={()=>{this.viewData(index.id)}}>查看运营数据</Link></span> |
							            <span className="auditCountBtn"><Link to="/manage/stadium/4/" onClick={()=>this.viewData(index.id)}>查看数据统计</Link></span>
										</td>
									</tr>
								)
							)
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
	if(type=='search'){
			data.map(index=>{
				if(index.name==filters.cgName&&index.city==filters.locaCity&&index.state==filters.state&&index.mainUnit==filters.department){
					arr.push(index)
				}
			})
		}else{
			arr=data;

		}
	return arr;
}
//过滤store
function select(store){
	return {
		da:store,
		searchs:store.search,
		Data:filter(store.search,store.data.stadium,store.search.type)
	}
}
export default connect(select)(StadiumList);
