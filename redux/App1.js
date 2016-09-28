import React from "react";
import ReactRouter,{Link} from "react-router";
import {connect} from 'react-redux';

import '../css/login.css';
import personSrc from "../images/person.png";
import lockSrc from "../images/lock.png";

class App extends React.Component{
	constructor(){
		super();
	}
	render(){
    const {dispatch}=this.props;
		return (
      <div >
					  <div className="loginBG">
            <div className="text-center loginscreen">
            <div className="Login_Title"><p className="TitleChina">中国体育场馆协会数据中心</p><p className="TitleEnglish">China Association for Data Center Stadiums</p></div>
              <form className="m-" role="form">
                <div className="loginBox">
                  <div className="LoginCon">
                    <span id="message"></span>
                    <div className="form-group ">

                        <img src={personSrc} />
                        <input type="email" className="person form-control" placeholder="请输入账号" />

                    </div>
                    <div className="form-group">

                        <img src={lockSrc} />
                        <input type="password" className="lock form-control" placeholder="请输入密码" />

                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block"><Link to="/stadium/2">登 录</Link></button>
                    </div>

                    <div className="LoginB">
                      <a>忘记密码?</a> | <a>注册新账号</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
            <footer className="footer">
                <span>版权所有：中国体育场馆协会</span>
                <span style={{marginLeft:"40px"}}>技术支持：华亿创新</span>
            </footer>
			</div>)
	}
};


export default connect()(App);