import React from "react";
export default class ActiveAdd extends React.Component{
	constructor(){
		super();
	}
	componentDidMount(){
		$('.mydate').datetimepicker({
	    format: 'yyyy-mm-dd',
	    language:  'zh-CN',
	    minView: 2,
	    autoclose:true
	    });
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3>&gt; <span> 添加群体活动 </span></h3>
				</div>
				<form className="form-horizontal" id="activeAddForm" >
				  <div className="form-group MT noMR">
				    <label  className="col-sm-2 control-label">活动名称</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" required="" name="game[name]"  placeholder="活动名称" />
				    </div>
				  </div>
				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">主办单位</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" required="" name="game[hostUnit]"  placeholder="主办单位" />
				    </div>
				  </div>
				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">承办单位</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" required="" name="game[undertakeUnit]"  placeholder="承办单位" />
				    </div>
				  </div>

				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">起始时间</label>
				    <div className="col-sm-4">
				      <input type="text"  required="" name="game[startDate]" className="form-control mydate" />
				    </div>
				    <label className="col-sm-2 control-label">结束时间</label>
				    <div className="col-sm-4">
				      <input type="text" required="" name="game[endDate]" className="form-control mydate" />
				    </div>
				  </div>

				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">活动联系人</label>
				    <div className="col-sm-4">
				      <input type="text" name="game[contants]" className="form-control" />
				    </div>
				    <label className="col-sm-2 control-label">联系电话</label>
				    <div className="col-sm-4">
				      <input type="text" name="game[contantsPhone]" className="form-control" />
				    </div>
				  </div>

				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">价格</label>
				    <div className="col-sm-10">
				      <label className="radio-inline">
				        <input type="radio" name="game[price]" id="inlineRadio1" defaultValue="1" />全价
				      </label>
				      <label className="radio-inline">
				        <input type="radio" name="game[price]"  defaultValue="2" />优惠价
				      </label>
				      <label className="radio-inline">
				        <input type="radio" name="game[price]" defaultChecked="checked"  defaultValue="3" />免费
				      </label>
				    </div>
				  </div>

				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">参与者人数</label>
				    <div className="col-sm-10">
				      <input type="text" required="" name="game[number]" className="form-control" />
				    </div>
				  </div>

				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">现场图片</label>
				    <div className="col-sm-10">
				      <input type="file" className="form-control" />
				    </div>

				  </div>

				  <div className="form-group noMR">
				    <div className="col-sm-offset-2 col-sm-10">
				      <button type="submit" id="gameAddBtn" className="btn btn-default">添加</button>
				    </div>
				  </div>
				  <input type="hidden" name="game[type]" />
				</form>
			</div>
			)
	}
};