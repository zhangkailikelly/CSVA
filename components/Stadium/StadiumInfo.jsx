import React from "react";
import {Link} from "react-router";
import {connect} from 'react-redux';
class StadiumInfo extends React.Component{
	constructor(){
		super();
	}
	render(){
		const {data}=this.props;
		return (
			<div>
			    <form id="stadiumAuditViewForm" className="animated fadeInDown">
					<ul className="RightInfo">
					  <li><label>审核状态</label>{data.state}</li>
					  <li><label>场馆名称</label><span>{data.name}</span></li>
					  <li><label>所在城市</label><span>{data.city}</span></li>
					  <li><label>建成时间</label><span>{data.buildDate}</span><em>年</em></li>
					  <li><label>投资金额</label><span>{data.investmentAmount}</span><em>万</em></li>
					  <li><label>场馆级别</label><span>{data.level}</span></li>
					  <li><label>座位数</label><span>{data.seats}</span><em>个</em></li>
					  <li><label>园区用地面积</label><span>{data.parkArea}</span>平方米</li>
					  <li><label>体育场地面积</label><span>{data.stadiumArea}</span>平方米</li>
					  <li><label>包含运动类型</label><span>{data.sports}</span></li>
					  <li><label>场馆地址</label><span>{data.address}</span></li>
					  <li><label>场馆图片</label><span></span></li>
					  <li><label>场馆电话</label><span>{data.contantsPhone}</span></li>
					  <li><label>联系人名称</label><span>{}</span></li>
					  <li><label>联系人手机</label><span>{}</span></li>
					</ul>
					<Link to="/stadium"><button type="button" style={{margin:"0 0 40px 190px"}} id="auditYesBtn" className="BlueBut">审核通过</button></Link>
					<Link to="/stadium"><button type="button" style={{margin:"0 0 40px 40px"}} id="auditNoBtn" className="BlueBut">审核不通过</button></Link>
				</form>
			</div>
			)
	}
};

function select(store){
	return {
		data:store.checkData
	}
}
export default connect(select)(StadiumInfo);