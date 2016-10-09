import React from "react";
import {Link} from "react-router";
export default class Rule extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
		<div className="content clearfix">
			    <div className="sidebar pull-left">
			        <ul className="nav nav-sidebar" id="side-menu">
			           <li className="nav-header">
			                <Link to="/Rule" onlyActiveOnIndex={true} activeClassName="cur">设置评分规则
			                	<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span>
			                </Link>
			                
			           </li>
			           <li className="nav-header">
			                <Link to='/Rule/2' activeClassName="cur">设置评分列表
			                	<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span>
			                </Link>

			           </li>
			        </ul>
			    </div>
				<div className="rightContent pull-left">{this.props.children}</div>
			</div>)
	}
};