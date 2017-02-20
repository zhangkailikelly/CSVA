 import React from "react";
 import {Link} from "react-router";
export default class TotalTableInfo extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3><label> 开放信息 </label> &gt; <label> 开放情况 </label></h3>
				</div>
				<div id="stadiumWrap" className="MT table-responsive normal mLR tbodyLeft">
				    <table  className="table tableColor tablebor NoMB" id="totalTable">
				    <thead>
				      <tr>
				        <td style={{width:"64px"}}>评价指标</td>
				        <td style={{width:"574px"}}>评价内容</td>
				        <td style={{width:"40px"}}>数值</td>
				        <td style={{width:"64px"}}>操作</td>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td rowSpan="3"   style={{lineHeight:"126px"}}>场地开放</td>
				        <td>*1.1开放面积</td>
				        <td>体育场馆和区域内的公共体育场地、设施用于提供体育及相关服务的面积占比</td>
				        <td><span id="area"></span></td>
				        <td><Link to="/users/Total/12/">查看数据</Link></td>
				      </tr>
				      <tr>

				        <td>*1.2 开放天数</td>
				        <td>体育场馆和区域内的场地、设施全年开放天数</td>
				        <td><span id="dailyOpenDays"></span>天</td>
				        <td><Link to="/users/Total/13/">查看数据</Link></td>
				      </tr>
				      <tr>

				        <td>*1.3 开放时间</td>
				        <td>体育场馆、配套设施、户外场地每周开放时间</td>
				        <td><span id="dailyHours"></span>小时</td>
				        <td><Link to="/users/Total/14/">查看数据</Link></td>
				      </tr>

				      <tr>
				        <td rowSpan="3" style={{lineHeight:"126px"}}>活动承载</td>
				        <td>*2.1 体育赛事</td>
				        <td>举办活承办体育赛事数量</td>
				        <td><span id="activeGame1"></span>次</td>
				        <td><Link to="/users/Total/15/">查看数据</Link></td>
				      </tr>
				      <tr>

				        <td>*2.2 群体活动</td>
				        <td>举办或承办群体性体育活动（含群众性体育赛事）的数量</td>
				        <td><span id="activeGame2"></span>次</td>
				        <td><Link to="/users/Total/16/">查看数据</Link></td>
				      </tr>
				      <tr>

				        <td>*2.3 其他文体及相关活动</td>
				        <td>举办或承办文化活动、文艺演出、文体讲座、文体展览等活动的数量</td>
				        <td><span id="activeGame3"></span>次</td>
				        <td><Link to="/users/Total/17/">查看数据</Link></td>
				      </tr>

				      <tr>
				        <td rowSpan="3" style={{lineHeight:"126px"}}>体育服务</td>
				        <td>*3.1 体育培训</td>
				        <td>体育培训的人次</td>
				        <td><span id="service1"></span>人次</td>
				        <td><Link to="/users/Total/18/">查看数据</Link></td>
				      </tr>

				      <tr>

				        <td>*3.2 运动健身指导</td>
				        <td>国民体质测试、运动能力评估和科学健身指导的人次</td>
				        <td><span id="service2"></span>人次</td>
				        <td><Link to="/users/Total/19/">查看数据</Link></td>
				      </tr>

				      <tr>

				        <td>*3.3 专业训练</td>
				        <td>承接专业运动队训练训练累计天数</td>
				        <td><span id="service3"></span>天</td>
				        <td><Link to="/users/Total/20/">查看数据</Link></td>
				      </tr>
				    </tbody>
				  </table>
				</div>
			</div>
			)
	}
};