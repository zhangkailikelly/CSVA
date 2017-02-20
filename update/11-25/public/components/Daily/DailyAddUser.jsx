import React from "react";
import Calendar from '../Calendar.jsx';
var linestyle = {width: '98px'};
export default class DailyAddUser extends React.Component{
	constructor(){
		super();
	}
    componentDidMount(){
    	$('#dailyAddUserForm .mydate').datetimepicker({
		    format: 'hh:ii',
		    language:  'zh-CN',
		    minView: 0,
		    startView: 1,
		    maxView: 1,
		    autoclose:true
		});
		$('#dailyAddUserForm .mydate').datetimepicker(hourConfig);
    }
	render(){
		return (
			<div>
			    <div className="location">
				  <h3>&gt; <span> 添加日常活动用户 </span></h3>
				</div>
				<form className="form-horizontal" id="dailyAddUserForm">
				  <div className="form-group MT noMR">
				    <label className="col-sm-2 control-label">用户姓名</label>
				    <div className="col-sm-4">
				      <input type="text" required="" className="form-control" /> 
				    </div>
				    <label className="col-sm-2 control-label">身份证号码</label>
				    <div className="col-sm-4">
				      <input type="text" className="form-control" />
				    </div>
				  </div>
				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">手机号码</label>
				    <div className="col-sm-4">
				      <input type="text" className="form-control" />
				    </div>
				    <label className="col-sm-2 control-label">运动类型</label>
				    <div className="col-sm-4">
				      <input type="text" className="form-control" />
				    </div>
				  </div>
				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">起始时间</label>
				    <div className="col-sm-4">
				      <input type="text" data-date-format="hh:ii" className="form-control mydate" />
				    </div>
				    <label className="col-sm-2 control-label">结束时间</label>
				    <div className="col-sm-4">
				      <input type="text" data-date-format="hh:ii" className="form-control mydate" />
				    </div>
				  </div>
				  <div className="form-group">
				    <label className="col-sm-2 control-label">是否为当前规则</label>
				    <div className="col-sm-10">

				      <label className="radio-inline">
				        <input type="radio" defaultValue="1" name="rule"/>全价
				      </label>
				      <label className="radio-inline">
				        <input type="radio" defaultValue="2" name="rule"/>优惠价
				      </label>
				      <label className="radio-inline">
				        <input type="radio" defaultChecked="checked" defaultValue="3" name="rule"/>免费
				      </label>
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10">
				      <button type="submit" className="OrangeButF">添加</button>
				    </div>
				  </div>
				</form>
			</div>
			)
	}
};