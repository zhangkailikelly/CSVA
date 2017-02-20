import React from "react";
export default class benefitTableInfo extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3><label> 综合效益 </label> &gt; <label> 接待总量 </label></h3>
				</div>
				<form className="form-horizontal" id="receiveNumsForm">
				  <div className="form-group MT">
				    <label className="col-sm-2 control-label">总人数</label>
				    <div className="col-sm-4">
				      <input type="number" id="receiveNums" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">人</label>
				  </div>
				  <div className="form-group">
				    <label className="col-sm-2 control-label">园区总面积</label>
				    <div className="col-sm-4">
				      <input type="number" value="" id="parkArea" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">万平米</label>
				  </div>
				  <div className="form-group">
				    <label className="col-sm-2 control-label">年接待总量</label>
				    <div className="col-sm-4">
				      <input type="text" id="receiveCalc" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">人/万平米/年</label>
				  </div>
				</form>
				<div className="mLR">
					<label >数据来源于</label>
					<p>1.日常数据</p>
					<p>2.活动承载</p>
					<p>3.体育服务</p>
				</div>
			</div>
			)
	}
};