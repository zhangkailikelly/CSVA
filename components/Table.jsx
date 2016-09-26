import React from "react";
import {render} from "react-dom";
export default class Table extends React.Component{
	constructor(){
		super()
	}
	render(){
		return (
				 <div id="CountWrap" className="table-responsive normal mLR tbodyLeft MT" style={{display:this.props._this.state.display}}>
						<table className="table tableColor tablebor" id="stadiumTable">
							<thead className="tabelH">
							<tr>
						    <th></th>
						    <th>用户名称</th>
						    <th>身份证号码</th>
						    <th>运动类型</th>
						    <th>日期</th>
						    <th>折扣</th>
						    <th>优惠金额</th>
						    <th>优惠人次</th>
							</tr>
				  		  	</thead>
					    	<tbody>
							{this.props._this.state.data.map(function(index,i){
						    	return (
				    		  <tr key={i}>
				    		  <td>{index.nums}</td>
						      <td>{index.name}</td>
						      <td>{index.cardID}</td>
						      <td>{index.sports}</td>
						      <td>{index.day}</td>
						      <td>{index.discount}</td>
						      <td>{index.discountAmount}</td>
						      <td>{index.count}</td>
						      </tr>
						      )
						    })}
					  	  </tbody>
					  </table>
				</div>
		)
	}
}