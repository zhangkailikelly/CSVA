import React from "react";
import ReactDOM from "react-dom";
import person from "./images/person.png";
import lock from "./images/lock.png";
import "./lib/bootstrap/dist/css/bootstrap.css";
import "./css/login.css";
class Login extends React.Component{
    constructor(...arg){
        super(...arg)
    }
    componentDidMount(){
        // $(function () {
        //     $("#sub").click(function () {
        //         $.ajax({
        //             beforeSend: function () {
        //             },
        //             url: "/index",
        //             type: "get",
        //             data: '',
        //             success: function (datas) {
        //                 if (datas == 1) {
        //                     window.location.href = window.location.href + "manage";
        //                 } else {
        //                     window.location.href = window.location.href + "users";
        //                 }
        //             },
        //             complete: function () {

        //             }
        //         })
        //     })

        // })
        var _this=this;
        $("#sub").click(function(){
                if($(_this.refs.account).val()=="admin"&&$(_this.refs.password).val()=="admin"){
                     window.location.href = window.location.href + "manage"
                 }else if($(_this.refs.account).val()=="users"&&$(_this.refs.password).val()=="123"){
                    window.location.href = window.location.href + "users"
                 }else{
                    alert("用户名或密码错误")
                 }
        }) 
        
    }
    render(){
        return (<div>
            <div className="loginBG">
                <div className="text-center loginscreen">
                    <div className="Login_Title">
                        <p className="TitleChina">中国体育场馆协会数据中心</p>
                        <p className="TitleEnglish">China Association for Data Center Stadiums</p>
                    </div>
                    <form className="m-" role="form" >
                        <div className="loginBox">
                            <div className="LoginCon">
                                <span id="message"></span>
                                <div className="form-group">
                                    <img src={person}/>
                                    <input type="email" ref="account" className="person form-control" placeholder="请输入账号" name="user[email]" required/>
                                </div>
                                <div className="form-group">
                                    <img src={lock}/>
                                    <input type="password" ref="password" className="lock form-control" placeholder="请输入密码" name="user[password]"
                                           required/>
                                </div>

                                <div className="form-group" id='sub'>
                                    <button type="button" className="btn btn-primary btn-block"><a>登 录</a></button>
                                </div>
                                <div className="LoginB">
                                    <span><a href="javascript:void(0);">忘记密码?</a> | <a href='/test'>注册新账号</a></span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer"> 版权所有: 中国体育场馆协会<span style={{marginLeft:"30px"}}>技术支持：华亿创新</span></div>
        </div>)
    }
}
ReactDOM.render(<Login/>, document.getElementById("box")
)