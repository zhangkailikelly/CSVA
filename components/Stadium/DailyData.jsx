import React from "react";
export default class DailyData extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
			    <div className="location">
 					 <h3>&gt;<span> 日常数据 </span></h3>
				</div>
				{/*顶部查询*/}
				<div className="topSearch RightInfo mLR MB">
				  <form className="form-inline MT" id="dailyOpenTimeForm">
				    <div className="form-group input-group-sm">
				        <label>开放时间</label>
				        <input type="text" className="leastInput mydate" />
				    </div>
				    <div className="form-group input-group-sm">
				       <label style={{width:'98px'}}>-</label>
				       <input type="text" className="leastInput mydate" />
				    </div>
				    <button type="submit" className="btn btn-default mLR" id="dailyOpenTimeBtn"><a style={{color:'#333'}}>确定</a></button>
				  </form>
				</div>

			    {/*日历*/}


			    {/*查询*/}
				<div className="topSearch RightInfo mLR">
				  <form className=" clearfix"> 
				    <div className="pull-left" style={{marginLeft:'50px'}}>
				      <div className="form-group input-group-sm">
				        <label>用户姓名</label><input className="leastInput" type="text" placeholder="用户姓名" />
				      </div>
				      <div className="form-group input-group-sm">
				          <label>手机号码</label><input className="leastInput" type="text" placeholder="手机号" />
				      </div>
				      
				    </div>
				    <div className="pull-left" style={{marginLeft:'30px'}}>
				      <div className="form-group input-group-sm">
				         <label>身份证号</label><input className="leastInput" type="text" placeholder="身份证号码" />
				      </div>
				      <div className="form-group input-group-sm">
				          <label>联系人电话</label><input className="leastInput" type="text" placeholder="手机号" />
				      </div>
				    </div>
				    <button type="submit" className="blueBut" id="dailySearchBtn">
				        <span className="glyphicon glyphicon-search " aria-hidden="true"></span>
				        搜 索
				    </button>
				    <button type="submit" className="whiteBut" id="dailyAddBtn">
				        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				        添 加
				    </button>
				    </form>
				</div>

			    {/*表格*/}
			    <div id="dailyWrap" className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
	    			<table className="table tableColor tablebor NoMB" id="dailyTable">
						<thead className="tabelH">
							<tr>
								<th style={{width:'150px'}}>用户名称</th>
								<th style={{width:'115px'}}>身份证号码</th>
								<th style={{width:'120px'}}>手机号码</th>
								<th style={{width:'115px'}}>运动类型</th>
								<th style={{width:'165px'}}>时间</th>
								<th style={{width:'290px'}}>操作</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{width:'150px'}}></td>
								<td style={{width:'115px'}}></td>
								<td style={{width:'120px'}}></td>
								<td style={{width:'115px'}}></td>
								<td style={{width:'165px'}}></td>
								<td style={{width:'290px'}}>
								</td>
							</tr>
						</tbody>
				    </table>
				</div>

			</div>
			)
	}
};