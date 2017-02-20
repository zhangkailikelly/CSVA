import React from "react";
export default class paymentScale extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3><label> 综合效益 </label> &gt; <label>收入比例</label></h3>
				</div>
				<form className="form-horizontal" id="paymentScaleForm">
				  <div className="form-group MT">
				    <label className="col-sm-2 control-label">经营收入</label>
				    <div className="col-sm-4">
				      <input type="number"   id="payIn" name="paymentScale[payIn]" value="" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">万</label>
				  </div>
				  <div className="form-group">
				    <label className="col-sm-2 control-label">经营支出</label>
				    <div className="col-sm-4">
				      <input type="number" id="payOut" name="paymentScale[payOut]" value="" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">万</label>
				  </div>
				  <div className="form-group">
				    <label className="col-sm-2 control-label">收支比例</label>
				    <div className="col-sm-4">
				      <input type="text"  id="payScale" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">%</label>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-7">
				      <button type="submit" className="btn btn-default">保存</button>
				    </div>
				  </div>
				</form>
			</div>
			)
	}
};