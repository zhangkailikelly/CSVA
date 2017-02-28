import React from "react";
export default class GamesAdd extends React.Component{
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
				  <h3>&gt; <span> 添加体育赛事 </span></h3>
				</div>
				<form className="form-horizontal" id="gameAddForm">
				  <div className="form-group MT noMR">
				    <label  className="col-sm-2 control-label">赛事名称</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" required="" name="game[name]"  placeholder="赛事名称" />
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
				    <label className="col-sm-2 control-label">赛事级别</label>
				    <div className="col-sm-10" style={{marginLeft:"-3px"}}>
				        <select className="form-control" name="game[level]">
				          <option value="1">省级</option>
				          <option value="2">国家级</option>
				          <option value="3">国际级</option>
				          <option value="4">其他级别</option>
				        </select>
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
				    <label className="col-sm-2 control-label">赛事联系人</label>
				    <div className="col-sm-4">
				      <input type="text" name="game[contants]" className="form-control" />
				    </div>
				    <label className="col-sm-2 control-label">联系电话</label>
				    <div className="col-sm-4">
				      <input type="text" name="game[contantsPhone]" className="form-control" />
				    </div>
				  </div>

				  <div className="form-group noMR">
				    <label className="col-sm-2 control-label">观众人数</label>
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
				  <input type="hidden" name="game[type]" value="1" />
				</form>
			</div>
			)
	}
};