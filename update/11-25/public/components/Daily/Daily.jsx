import React from "react";
import {Link} from "react-router";
import slideToggle from '../../lib/leftsidebar';

export default class Daily extends React.Component{
	constructor(){
		super();
	}
	componentDidMount(){
		slideToggle()
	}
	render(){
		return (<div className="content clearfix">
				    <div className="sidebar pull-left">
				        <ul className="nav nav-sidebar" id="side-menu">
				            <li className="nav-header">
				                <Link to="/users/Daily" >查看日常数据
				                <span className="pull-right glyphicon glyphicon-menu-right" ></span></Link>
				            </li>
				            <li className="nav-header">
				                <Link to='/users/Daily/2' >添加活动用户
				                <span className="pull-right glyphicon glyphicon-menu-right" ></span></Link>
				            </li>
				        </ul>
				    </div>
					<div className="rightContent pull-left">{this.props.children}</div>
			</div>)
	}

};