import React from "react";
import ReactDom from "react-dom";
import userSrc from "../images/user.png";
import exitSrc from "../images/exit.png";
export default class Header extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (<div className="HeaderT">
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
            </div>)
        }
}
