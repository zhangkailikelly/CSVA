import React from "react";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/actions.js';
import TablePage from "../TablePage";

class ServiceGuidance extends React.Component{
	constructor(){
		super();
	}
	componentDidMount(){
		const {dispatch,id}=this.props
		dispatch(action.getGuidanceData(id))
	}
	render(){
		const {data}=this.props;
		return (
			<div>
			    <div className="location">
 					 <h3>&gt;<span> 运动健身指导列表 </span></h3>
				</div>
			    {/*查询*/}
				<div className="topSearch RightInfo mLR MB">
				    <form className="form-inline" id="gameSearchForm">
				        <div className="form-group">
				            <label >活动名称</label>
				            <input type="text" className="form-control" placeholder="活动名称" />
				        </div>
				        <div className="form-group">
				            <label>培训机构名称</label>
				            <input type="text" className="form-control" placeholder="培训机构名称" />
				        </div>
				      <button type="button" className="btn btn-default" id="gameSearchBtn"><a>搜索</a></button>
				    </form>
				</div>

			    {/*体育赛事表格*/}
			    <div className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
	    			<table className="table tableColor tablebor NoMB" id="gameTable">
						<thead className="tabelH">
							<tr>
								<th style={{width:'170px'}}>培训名称</th>
								<th style={{width:'168px'}}>培训项目</th>
								<th style={{width:'168px'}}>起始时间</th>
								<th style={{width:'168px'}}>结束时间</th>
								<th style={{width:'168px'}}>参与人数</th>
								<th style={{width:'104px'}}>操作</th>
							</tr>
						</thead>
						<tbody>
							{
								data.length==0?(<tr><td style={{width:'945px'}}>没有数据</td></tr>):(data.map((index,i)=>
									(
							<tr key={i}>
								<td style={{width:'170px'}}>{index.name}</td>
								<td style={{width:'168px'}}>{index.unit}</td>
								<td style={{width:'168px'}}>{index.startDate}</td>
								<td style={{width:'168px'}}>{index.endDate}</td>
								<td style={{width:'168px'}}>{index.number}</td>
								<td style={{width:'104px'}}>
									<button className="btn btn-info btn-xs detBtn"><a name="57eb8803f2a6e3c946377cc3">查看</a></button>
									<button className="btn btn-info btn-xs addTrainerBtn"><a name="57eb8803f2a6e3c946377cc3">添加受训者</a></button>
									<button className="btn btn-warning btn-xs delBtn"><a name="57eb8803f2a6e3c946377cc3">删除</a></button>
								</td>
							</tr>
									)
								))
							}
						</tbody>
				    </table>
					<TablePage/>
				</div>

			</div>
			)
	}
};
function filter(store){
	return {
		data:store.data.sporteFitness==undefined?[]:store.data.sporteFitness,
		id:store.lookData.id
	}
}
export default connect(filter)(ServiceGuidance)