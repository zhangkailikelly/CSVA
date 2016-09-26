import React from "react";
import {Link} from "react-router";
export default class Left extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (<div className="content clearfix">
				    <div className="sidebar pull-left">
				        <ul className="nav nav-sidebar" id="side-menu">
				           <li className="nav-header">
				                <Link to="/left" onlyActiveOnIndex={true} activeClassName="cur">场馆列表
				                <span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
				           </li>
				           <li className="nav-header">
				                <Link to='/left/2' activeClassName="cur">场馆信息
				                <span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
				           </li>
				           <li className="nav-header">
				                <Link to='/left/3' activeClassName="cur">运营数据
				                <span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
				           </li>
				        </ul>
				    </div>
					<div className="rightContent pull-left">{this.props.children}</div>
			</div>)
	}
};