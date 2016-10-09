import React from "react";
import {Link} from "react-router";
export default class Total extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (<div className="content clearfix">
				    {/*左侧导航开始*/}
					<div className="sidebar pull-left">
					    <ul id="accordion" className="nav nav-sidebar accordion open">

					        <li className="open">
					            <Link to="/Total" onlyActiveOnIndex={true} className="link">开放信息<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
					            <ul className="nav submenu" style={{display:'block'}}>
					                <li><a>开放情况</a></li>
					                <li><a>开放面积</a></li>
					                <li><a>开放天数</a></li>
					                <li><a>开放时间</a></li>
					                <li><a>开放天数</a></li>
					                <li><a>体育赛事</a></li>
					                <li><a>群体活动</a></li>
					                <li><a>其他文体活动</a></li>
					                <li><a>体育培训</a></li>
					                <li><a>运动健身指导</a></li>
					                <li><a>专业训练</a></li>
					            </ul>
					        </li>
					        <li >
					            <a href="javascript:;" className="link">综合效益<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
					            <ul className="nav submenu">
					                <li><a>效益列表</a></li>
					                <li><a>接待总量</a></li>
					                <li><a>接待人次增长</a></li>
					                <li><a>收支比例</a></li>
					                <li><a>收入增长</a></li>
					                <li><a>公益项目</a></li>
					                <li><a>满意度</a></li>
					            </ul>
					        </li>
					        <li >
					            <a href="javascript:;" className="link">特色加分<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
					        </li>
					    </ul>
					</div>
					<div className="rightContent pull-left">{this.props.children}</div>
			</div>)
	}
};