import React from "react";
export default class TotalArea extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3><label> 开放信息 </label> &gt; <label> 开放面积 </label></h3>
				</div>
				<form className="form-horizontal" id="totalAreaForm" onsubmit="return totalAreaAdd()">
				  <div className="form-group MT">
				    <label className="col-sm-2 control-label">开放面积</label>
				    <div className="col-sm-4">
				      <input type="number" min="0" required="" value="" id="total_openArea" name="total[openArea]" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">平方米</label>
				  </div>

				  <div className="form-group">
				    <label className="col-sm-2 control-label">体育场馆面积</label>
				    <div className="col-sm-4">
				      <input type="text" min="0" readonly="readonly" id="stadium_stadiumArea" name="stadium[stadiumArea]" className="form-control" />
				    </div>
				    <label className="col-sm-1 control-label">平方米</label>
				  </div>

				  <div className="form-group">
				    <label className="col-sm-2 control-label">占比</label>
				    <div className="col-sm-4">
				      <input type="text" required="" id="zanbi" readonly="readonly" className="form-control" />
				    </div>

				  </div>


				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10">
				      <button type="submit" id="totalAreaBtn" className="btn btn-default">确定</button>
				    </div>
				  </div>

				</form>
			</div>
			)
	}
};