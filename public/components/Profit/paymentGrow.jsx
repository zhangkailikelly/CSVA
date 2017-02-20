import React from "react";
export default class paymentGrow extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3><label> 综合效益 </label> &gt; <label>收入增长</label></h3>
				</div>
				<form className="form-horizontal" id="receiveNumsForm">
				  <div className="form-group MT">
				    <label className="col-sm-2 control-label">今年经营收入</label>
				    <div className="col-sm-4">
				      <input type="number" id="curYearIncome" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">万</label>
				  </div>
				  <div className="form-group">
				    <label className="col-sm-2 control-label">去年经营收入</label>
				    <div className="col-sm-4">
				      <input type="number" id="lastYearIncome" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">万</label>
				  </div>
				  <div className="form-group">
				    <label className="col-sm-2 control-label">增长率</label>
				    <div className="col-sm-4">
				      <input type="text"  id="paymentGrow" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">%</label>
				  </div>
				</form>
			</div>
			)
	}
};