import React from "react";
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
				    <span className="yiji">日常数据</span>
				  </div>
				  <div className="YYDataCon">
				    <p className="pull-left"><img src={sport} /></p>
				    <span className="yiji">活动承载</span>
				    <div style={{marginLeft:"20px"}}>
				      <span className="erji">体育赛事</span>
				      <span className="erji">群体活动</span>
				      <span className="erji">其他文体活动</span>
				    </div>
				  </div>
				  <div className="YYDataCon">
				    <p className="pull-left"><img src={service} /></p>
				    <span className="yiji">体育服务</span>
					<div style={{marginLeft:"20px"}}>
					    <span className="erji">体育训练</span>
					    <span className="erji">运动健身指导</span>
					    <span className="erji">专业训练</span>
					</div>
				  </div>
				</div>
			</div>
			)
	}
};