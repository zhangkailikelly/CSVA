import React from "react";
import {render} from "react-dom";
export default class StadiumTable extends React.Component {
    constructor (props) {
        super(props)

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
		return (
			<div>
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
								Data.map(function(index,i){
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
}