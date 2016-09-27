import React,{Component} from "react";
import {render} from "react-dom";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/actions.js';

class RuleList extends Component{
	constructor(){
		super();
		
	}
	componentDidMount(){
		const {dispatch}=this.props;
		$.ajax({
			url:"http://139.129.131.105:8802/api/rules",
			type:"get",
			dataType:"json",
			data:"",
			success:function(data){
				dispatch(action.stadiumData({ruleList:data}))
			}
		})
	}
	
	render(){
		const {tableData}=this.props;
		return (
			<div>
				<div className="location">
 					 <h3><span>评分设置</span> &gt;<span> 评分规则列表 </span></h3>
				</div>
				<div id="ruleWrap"  className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
    			    <table className="table tableColor tablebor NoMB" id="ruleTable">
    				  <thead  className="tabelH">
     					 <tr>
      						<th>规则名称</th>
      						<th>起始时间</th>
      						<th>结束时间</th>
      						<th>是否为当前规则</th>
      						<th>操作</th>
     					 </tr>
     				 </thead>
     				 <tbody>
     				 {tableData.map(function(index,i){
     				 		return(
     				 		<tr key={i}>
     				 			<td>{index.name}</td>
     				 			<td>{index.startDate}</td>
     				 			<td>{index.endDate}</td>
     				 			<td>{index.isCurrent==2?"否":"是"}</td>
            					<td><span className="viewDataBtn"><a name='<%= o.id %>'>查看运营数据</a></span></td>
         					</tr>
     				 			)
     				 })}
     						
         				
     				</tbody>
   			       </table>
   				</div>
			</div>


		)
	}
};

function select(store){
	return {
		tableData:store.data.ruleList==undefined?[]:store.data.ruleList
	}
}

export default connect(select)(RuleList);
