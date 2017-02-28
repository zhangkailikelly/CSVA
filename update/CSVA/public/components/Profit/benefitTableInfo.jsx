import React from "react";
import {Link} from "react-router";
export default class benefitTableInfo extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3> <label> 综合效益 </label> &gt; <label>效益列表</label></h3>
				</div>
				<div id="cheapInfoWrap" className="table-responsive normal tbodyLeft mLR">
				  <table className="table tableColor tablebor NoMB MT " id="benefitTable">
				    <thead>
				      <tr>
				        <td colSpan="2">评价指标</td>
				        <td>评价内容</td>
				        <td>数值</td>
				        <td>操作</td>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td rowSpan="4" align="center" valign="middle">运营效益</td>
				        <td>*1.1接待总量</td>
				        <td>每万平米面积（场馆园区用地面积）全年接待人次（包括健身、培训、参与或观看赛事活动及文艺演出）</td>
				        <td><span>40%</span></td>
				        <td><Link to="/users/Total/22/" >查看数据</Link></td>
				      </tr>
				      <tr>
				        <td>*1.2 接待人次增长</td>
				        <td>接待人次年增长率（本年度与上年度相比）</td>
				        <td><span>40%</span></td>
				        <td><Link to="/users/Total/23/" >查看数据</Link></td>
				      </tr>
				      <tr>
				        <td>*1.3 收支比例</td>
				        <td>经营收入与运营支出的比值</td>
				        <td><span>40%</span></td>
				        <td><Link to="/users/Total/24/" >查看数据</Link></td>
				      </tr>
				      <tr>
				        <td>*1.4 收入增长</td>
				        <td>场馆经营收入年增长率（本年度与上年度相比）</td>
				        <td><span>40%</span></td>
				        <td><Link to="/users/Total/25/" >查看数据</Link></td>
				      </tr>
				      <tr>
				        <td rowSpan="2" align="center" valign="middle">社会影响</td>
				        <td>*2.1 公益活动</td>
				        <td>免费举办或承办体育赛事、群体活动、体育健身技能培训、国民体质测试及其他文体活动参与或服务人次</td>
				        <td><span>40%</span></td>
				        <td><Link to="/users/Total/26/" >查看数据</Link></td>
				      </tr>
				      <tr>
				        <td>*2.2 满意度</td>
				        <td>顾客满意度</td>
				        <td><span>40%</span></td>
				        <td><Link to="/users/Total/27/" >查看数据</Link></td>
				      </tr>
				    </tbody>
				  </table>
				</div>
			</div>
			)
	}
};