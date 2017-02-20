import React from "react";
import {Link} from 'react-router';
import daily from "../../images/YY1.png";
import sport from "../../images/YY2.png";
import service from "../../images/YY3.png";
export default class StadiumData extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<div className="location">
				  <h3>&gt;<label> 运营数据 </label></h3>
				</div>
				<div className="YYData animated fadeInDown clearfix">
				  <div className="YYDataCon">
				    <p className="pull-left"><img src={daily} /></p>
				    <span className="yiji"><Link to="/manage/stadium/5" className="color6">日常数据</Link></span>
				  </div>
				  <div className="YYDataCon">
				    <p className="pull-left"><img src={sport} /></p>
				    <span className="yiji">活动承载</span>
				    <div style={{marginLeft:"20px"}}>
				      <span className="erji"><Link to="/manage/stadium/6" className="color6">体育赛事</Link></span>
				      <span className="erji"><Link to="/manage/stadium/7" className="color6">群体活动</Link></span>
				      <span className="erji"><Link to="/manage/stadium/8" className="color6">其他文体活动</Link></span>
				    </div>
				  </div>
				  <div className="YYDataCon">
				    <p className="pull-left"><img src={service} /></p>
				    <span className="yiji">体育服务</span>
					<div style={{marginLeft:"20px"}}>
					    <span className="erji"><Link to="/manage/stadium/9" className="color6">体育训练</Link></span>
					    <span className="erji"><Link to="/manage/stadium/10" className="color6">运动健身指导</Link></span>
					    <span className="erji"><Link to="/manage/stadium/11" className="color6">专业训练</Link></span>
					</div>
				  </div>
				</div>
			</div>
			)
	}
};