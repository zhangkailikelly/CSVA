import React from "react";
import YHRC from "../../images/SF1.png";
import MFRC from "../../images/SF2.png";
import YHJE from "../../images/SF3.png";
export default class StadiumInfo extends React.Component{
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
 					 <h3><span>场馆列表</span> &gt;<span> 免费低收费数据 </span></h3>
				</div>
				{/*顶部查询*/}
				<div className="topSearch RightInfo mLR">
					<form className="clearfix" id="stadiumDataCountForm">
					    <div className="pull-left" style={{marginRight:'50px'}}>
					        <div className="form-group input-group-sm">
					            <label>起始时间:</label>
					            <input type="text" className="leastInput searchInput mydate" />
					        </div>
					        <div className="form-group input-group-sm clearfix">
					            <label className="pull-left" style={{marginTop:'6px'}}>优惠类型:</label>
					            <select className="pull-left" name="sdcType">
					                <option value="os1">不限</option>
					                <option value="os2">免费</option>
					                <option value="os3">低收费</option>
					            </select>
					        </div>
					    </div>
					    <div className="pull-left">
					        <div className="form-group input-group-sm">
					            <label>截止时间:</label>
					            <input type="text" className="leastInput searchInput mydate" />
					        </div>
					        <div className="form-group input-group-sm">
					            <label>手机号码:</label>
					            <input type="text" className="leastInput" />
					        </div>
					    </div>
					    <button type="button" className="blueBut" id="CountSearchBtn">
					        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
					        搜 索
					    </button>
					</form>
				</div>
			    {/*数据统计*/}
			    <div className="SfCount">
					<p>低收费数据统计</p>
					<ul>
					    <li className="clearfixs">
					      <img className="pull-left" src={YHRC} />
					      <div className="pull-left">
					        <span>优惠人次</span>
					        <em>890</em>
					      </div>
					    </li>
					    <li className="clearfixs">
					      <img className="pull-left" src={MFRC} />
					      <div className="pull-left">
					        <span>免费人次</span>
					        <em>90</em>
					      </div>
					    </li>
					    <li className="clearfixs">
					      <img className="pull-left" src={YHJE} />
					      <div className="pull-left">
					        <span>优惠金额</span>
					        <em>00</em>
					      </div>
					    </li>
					</ul>
				</div>
			    {/*数据统计表格*/}
			    <div id="CountWrap" className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
	    			<table className="table tableColor tablebor NoMB" id="stadiumTable">
						<thead className="tabelH">
							<tr>
								<th style={{width:'150px'}}>用户名称</th>
								<th style={{width:'115px'}}>身份证号码</th>
								<th style={{width:'120px'}}>运动类型</th>
								<th style={{width:'115px'}}>日期</th>
								<th style={{width:'165px'}}>折扣</th>
								<th style={{width:'290px'}}>优惠金额</th>
								<th style={{width:'290px'}}>优惠人次</th>
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