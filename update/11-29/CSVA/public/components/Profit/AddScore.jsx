import React from "react";
export default class AddScore extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3> &gt; <label>特色加分</label></h3>
				</div>
				<form className="form-horizontal" id="totalFineForm">
				  <div className="form-group MT">
				    <label className="col-sm-2 control-label">自述</label>
				    <div className="col-sm-10">
				      <textarea className="form-control" name="total[fine]" value="" id=""  rows="10" required> 
				      </textarea>
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10">
				      <button type="submit" id="totalFine" className="btn btn-default">保存</button>
				    </div>
				  </div>
				</form>
			</div>
			)
	}
};