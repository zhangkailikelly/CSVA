import React from "react";
import {Link} from "react-router";
import slideToggle from '../../lib/leftsidebar';

export default class TotalTableInfo extends React.Component{
	constructor(...arg){
		super(...arg);
	}
	componentDidMount(){
		slideToggle()

	}
	render(){
		return (<div className="content clearfix">
				    {/*左侧导航开始*/}
					<div className="sidebar pull-left">
					    <ul id="accordion" className="nav nav-sidebar accordion open">
					        <li className="open">
					            <Link to="/users/Total" onlyActiveOnIndex={true} className="link">开放信息<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
					            <ul className="nav submenu" style={{display:'block'}}>
					                <li><Link to="/users/Total/11" activeClassName="cur">开放情况</Link></li>
					            </ul>
					        </li>
					        <li>
					            <Link to="/users/Total/21"  className="link">综合效益<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
					            <ul className="nav submenu">
					                <li><Link to="/users/Total/21" activeClassName="cur">效益列表</Link></li>
					            </ul>
					        </li>
					        <li >
					            <Link to="/users/Total/31" className="link">特色加分<span className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
					        </li>
					    </ul>
					</div>
					<div className="rightContent pull-left">{this.props.children}</div>
			</div>)
	}
};