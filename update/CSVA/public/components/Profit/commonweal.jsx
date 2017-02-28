import React from "react";
export default class commonweal extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3><label> 综合效益 </label> &gt; <label>公益项目</label></h3>
				</div>
				<form className="form-horizontal">
				  <div className="form-group MT">
				    <label className="col-sm-2 control-label">服务人次</label>
				    <div className="col-sm-4">
				      <input type="number" required="" readonly="readonly" value="" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">次</label>
				  </div>
				</form>
			</div>
			)
	}
};