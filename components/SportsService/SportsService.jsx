import React from "react";
import {Link} from "react-router";
export default class SportsService extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
		<div className="content clearfix">
			    <div className="sidebar pull-left">
			        <ul className="nav nav-sidebar" id="side-menu">
			           <li className="nav-header">
			                <Link to='/SportsService/' onlyActiveOnIndex={true} activeClassName="cur">体育培训列表</Link>
			           </li>
			           <li className="nav-header">
			                <Link to='/SportsService/2' activeClassName="cur">运动健身指导列表</Link>
			           </li>
			           <li className="nav-header">
			                <Link to='/SportsService/3' activeClassName="cur">专业训练列表</Link>
			           </li>
			        </ul>
			    </div>
				<div className="rightContent pull-left">{this.props.children}</div>
			</div>)
	}
};