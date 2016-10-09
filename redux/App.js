import React from "react";
import ReactRouter,{Link} from "react-router";
import {connect} from 'react-redux';
import '../css/style.css';
import userSrc from "../images/user.png";
import exitSrc from "../images/exit.png";

class App extends React.Component{
	constructor(){
		super();
	}
	render(){
    const {dispatch}=this.props;
		return (
      <div >
					  <header className="Header">
                      <div className="HeaderT">
                          <h1 className="logo clearfix">
                              <a href="#" title="中国体育场馆协会数据中心">
                                <div className="pull-left">
                                  <span className="BigName">中国体育场馆协会数据中心</span>
                                  <p className="SmallName">China Association for Data Center Stadiums</p>
                                </div>
                                <em className="pull-left">|</em>
                                <span className="RSmallName pull-left"></span> 
                              </a>
                          </h1>
                           <p className="pull-right UserExit"><img src={userSrc} style={{margin:'-3px 10px 0 0'}} /><em>admin@admin.com</em>  | <a className="exitL" name="" href="login.jsx"><img src={exitSrc} title="退出" /></a></p>
                      </div>
                      <nav className="HeaderB">
                        <ul className="list-inline" id="topNav">
                            <li>
                              <Link to='/stadium' activeClassName="active">
                                场馆管理
                              </Link>
                            </li>
                            <li>
                              <Link to='/Rule' activeClassName="active">
                                评分设置
                              </Link>
                            </li>
                        </ul>
                      </nav>
            </header>
		      	<div>{this.props.children}</div>
            <footer className="footer">
                <span>版权所有：中国体育场馆协会</span>
                <span style={{marginLeft:"40px"}}>技术支持：华亿创新</span>
            </footer>
			</div>)
	}
};


export default connect()(App);