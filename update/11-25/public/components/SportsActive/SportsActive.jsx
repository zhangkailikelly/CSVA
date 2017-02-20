import React from "react";
import {Link} from "react-router";
import slideToggle from '../../lib/leftsidebar';

export default class Rule extends React.Component{
	constructor(){
		super();
	}
	componentDidMount(){
		slideToggle()

	}
	render(){
		return (
			<div className="content clearfix">
				    {/*左侧导航开始*/}
					<div className="sidebar pull-left">
					    <ul id="accordion" className="nav nav-sidebar accordion open">
					        <li className="open">
					            <Link to="/users//SportsActive/" className="link">体育赛事<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
					            <ul className="nav submenu" style={{display:'block'}}>
					                <li><Link to="/users/SportsActive/">体育赛事列表</Link></li>
					                <li><Link to="/users/SportsActive/12">添加体育赛事</Link></li>
					            </ul>
					        </li>

					        <li>
					            <Link to="/users/SportsActive/21" className="link">体育活动<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
					            <ul className="nav submenu">
					                <li><Link to="/users/SportsActive/21">体育活动列表</Link></li>
					                <li><Link to="/users/SportsActive/22">添加活动</Link></li>
					            </ul>
					        </li>

					        <li>
					            <Link to="/users/SportsActive/31" className="link">其他文体活动<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
					            <ul className="nav submenu">
					                <li><Link to="/users/SportsActive/31">其他文体活动列表</Link></li>
					                <li><Link to="/users/SportsActive/22">添加活动</Link></li>
					            </ul>
					        </li>
					    </ul>
					</div>
					<div className="rightContent pull-left">{this.props.children}</div>
			</div>
			)
	}
};