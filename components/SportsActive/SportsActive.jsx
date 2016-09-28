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
			                <Link to='/SportsActive/' onlyActiveOnIndex={true} activeClassName="cur">体育赛事</Link>
			           </li>
			           <li className="nav-header">
			                <Link to='/SportsActive/2' activeClassName="cur">群体活动</Link>
			           </li>
			           <li className="nav-header">
			                <Link to='/SportsActive/3' activeClassName="cur">其他文体活动</Link>
			           </li>
			        </ul>
			    </div>
				<div className="rightContent pull-left">{this.props.children}</div>
			</div>)
	}
};