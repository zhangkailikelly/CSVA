import React from "react";
import {Link} from "react-router";
import slideToggle from '../../lib/leftsidebar';

export default class SportsService extends React.Component{
	constructor(){
		super();
	}
	componentDidMount(){
		slideToggle();
	}
	render(){
		return (
			<div className="content clearfix">
			    {/*左侧导航开始*/}
				<div className="sidebar pull-left">
				    <ul id="accordion" className="nav nav-sidebar accordion open">

				        <li className="open">
				            <a href="javascript:;" className="link">体育培训<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
				            <ul className="nav submenu" style={{display:'block'}}>
				                <li><Link to="/users/SportsService" activeClassName="cur">体育培训列表</Link></li>
				                <li><Link to="/users/SportsService/12" activeClassName="cur">添加体育培训</Link></li>
				            </ul>
				        </li>
				        <li>
				            <a href="javascript:;" className="link">运动健康指导<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
				            <ul className="nav submenu">
				                <li><Link to="/users/SportsService/21" activeClassName="cur">健身指导列表</Link></li>
				                <li><Link to="/users/SportsService/22" activeClassName="cur">添加运动健身指导</Link></li>
				            </ul>
				        </li>
				        <li>
				            <a href="javascript:;" className="link">专业训练<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
				            <ul className="nav submenu">
				                <li><Link to="/users/SportsService/31" activeClassName="cur">专业训练列表</Link></li>
				                <li><Link to="/users/SportsService/32" activeClassName="cur">添加专业训练</Link></li>
				            </ul>
				        </li>
				    </ul>
				</div>
				<div className="rightContent pull-left">{this.props.children}</div>
			</div>
			)
	}
};