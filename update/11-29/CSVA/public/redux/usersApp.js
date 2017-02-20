import React from "react";
import ReactRouter,{Link} from "react-router";
import {connect} from 'react-redux';
import Head from '../components/head.jsx';
import Foot from '../components/foot.jsx';
import "../css/common.css";
import "../lib/bootstrap/dist/css/bootstrap.css";



class App extends React.Component{
	constructor(){
		super();
	}
	render(){
    const {dispatch}=this.props;
		return (
      <div className="main">
					  <header className="Header">
                     <Head/>
                      <nav className="HeaderB">
                        <ul className="list-inline" id="topNav">
                            <li>
                              <Link to='/users/Daily/' activeClassName="active">
                                日常数据
                              </Link>
                            </li>
                            <li>
                              <Link to='/users/SportsActive/' activeClassName="active">
                                活动承载
                              </Link>
                            </li>
                            <li>
                              <Link to='/users/SportsService/' activeClassName="active">
                                体育服务
                              </Link>
                            </li>
                            <li>
                              <Link to='/users/stadium/' activeClassName="active">
                                场馆管理
                              </Link>
                            </li>
                            <li>
                              <Link to='/users/Total/' activeClassName="active">
                                汇总数据
                              </Link>
                            </li>
                        </ul>
                      </nav>
            </header>
		      	<div>{this.props.children}</div>
           <Foot/>
			</div>)
	}
};


export default connect()(App);