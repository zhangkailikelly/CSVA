import React from "react";
import '../css/login.css';
import personSrc from "../images/person.png";
import lockSrc from "../images/lock.png";
export default class Login extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
			    <div className="loginBG">
				    <div className="text-center loginscreen">
				    <div className="Login_Title"><p className="TitleChina">中国体育场馆协会数据中心</p><p className="TitleEnglish">China Association for Data Center Stadiums</p></div>
					    <form className="m-" role="form" onsubmit="return loginSubmit(this)">
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
					            <button type="submit" className="btn btn-primary btn-block">登 录</button>
					          </div>

					          <div className="LoginB">
					            <a>忘记密码?</a> | <a>注册新账号</a>
					          </div>
					        </div>
					      </div>
					    </form>
				    </div>
				</div>

			</div>
			)
	}
};