import React from "react";
export default class ServiceAdd2 extends React.Component{
	constructor(){
		super();
	}
	componentDidMount(){
		$('.mydate').datetimepicker({
	    format: 'yyyy-mm-dd hh:ii',
	    language:  'zh-CN',
	    autoclose:true
	    });
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3>&gt; <label> 添加运动健身指导 </label></h3>
				</div>
				<form className="form-horizontal" id="gameAddForm">
				  <div className="form-group MT noMR">
			        <label  className="col-sm-2 control-label">活动名称</label>
			        <div className="col-sm-10">
			          <input type="text" className="form-control" required="" name="service[name]"  placeholder="活动名称" />
			        </div>
			      </div>
			      <div className="form-group noMR">
			        <label className="col-sm-2 control-label">培训机构名称</label>
			        <div className="col-sm-10">
			          <input type="text" className="form-control" required="" name="service[unit]"  placeholder="培训机构名称" />
			        </div>
			      </div>


			      <div className="form-group noMR">
			        <label className="col-sm-2 control-label">培训内容</label>
			        <div className="col-sm-10">
			          <input type="text" className="form-control" required="" name="service[content]"  placeholder="培训内容" />
			        </div>
			      </div>

			      <div className="form-group noMR">
			        <label className="col-sm-2 control-label">是否收费</label>
			        <div className="col-sm-10">
			          <label className="radio-inline">
			            <input type="radio" name="service[fee]"  defaultValue="1" />收费
			          </label>
			          <label className="radio-inline">
			            <input type="radio" name="service[fee]" defaultChecked="checked"  defaultValue="2" />免费
			          </label>
			        </div>
			      </div>
			      <div className="form-group noMR">
					  <label className="col-sm-2 control-label">起始时间</label>
					  <div className="col-sm-4">
					    <input type="text"  required="" name="service[startDate]" className="form-control mydate" />
					  </div>
					  <label className="col-sm-2 control-label">结束时间</label>
					  <div className="col-sm-4">
					    <input type="text" required="" name="service[endDate]" className="form-control mydate" />
					  </div>
				  </div>

				  <div className="form-group noMR">
					    <label className="col-sm-2 control-label">培训联系人</label>
					    <div className="col-sm-4">
					      <input type="text" name="service[contants]" className="form-control" />
					    </div>
					    <label className="col-sm-2 control-label">联系电话</label>
					    <div className="col-sm-4">
					      <input type="text" name="service[contantsPhone]" className="form-control" />
					    </div>
					  </div>

					  <div className="form-group noMR">
					    <label className="col-sm-2 control-label">受训者人数</label>
					    <div className="col-sm-10">
					      <input type="text" required="" name="service[number]" className="form-control" />
					    </div>
					  </div>


					  <div className="form-group noMR">
					    <div className="col-sm-offset-2 col-sm-10">
					      <button type="submit" id="serviceAddBtn" className="btn btn-default">添加</button>
					    </div>
					  </div>
					  <input type="hidden" name="service[type]" />
				</form>
			</div>
			)
	}
};