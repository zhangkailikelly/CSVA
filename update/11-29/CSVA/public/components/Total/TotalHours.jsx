import React from "react";
export default class TotalHours extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3><label> 开放信息 </label> &gt; <label> 开放时间 </label></h3>
				</div>
				<form className="form-horizontal">

				    <div className="form-group MT">
				    	<label className="col-sm-2 control-label">开放时间</label>
				    	<div className="col-sm-4">
				      		<input type="number" required="" value=""  className="form-control" />
				    	</div>
				    	<label className="col-sm-1 control-label">小时/周</label>
				    </div>
					<div className="mLR"> 
					  <label >数据来源于</label>
					  <p>1.日常数据</p>
					  <p>2.活动承载</p>
					  <p>3.体育服务</p>
					</div>
				</form>
			</div>
			)
	}
};