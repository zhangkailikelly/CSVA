import React from 'react';
import "../../css/webuploader.css";
export default class Basemation extends React.Component {
    constructor(...arg) {
        super(...arg)
    }

    render() {
        return (
            <div className="text-center loginscreen animated fadeInDown">
                <form className="form-horizontal" id="stadiumViewForm">
                    <div className="form-group">
                        <input type="hidden" name="stadium[id]" defaultValue="57eb22c2f2a6e3c946377cc0"/>
                        <label className="col-sm-3 control-label">审核状态</label>
                        <div className="col-sm-6">
                            <label className="control-label">通过审核</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">场馆名称</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" required name="stadium[name]"
                                   defaultValue="1111111111测试" placeholder="场馆名称"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">所在城市</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" required="" defaultValue="北京"
                                   name="stadium[city]"
                                   placeholder="所在城市"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">建成时间</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control myDate" defaultValue="2010-01-01T00:00:00.000Z"
                                   name="stadium[buildDate]"/>
                        </div>
                        <label className="col-sm-1 control-label">年</label>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">投资金额</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" defaultValue="1000"
                                   name="stadium[investmentAmount]" placeholder="投资金额"/>
                        </div>
                        <label className="col-sm-1 control-label">万</label>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">场馆级别</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" required="" defaultValue="甲级"
                                   name="stadium[level]"
                                   placeholder="甲级，乙级，丙级"/>
                        </div>
                        <label className="col-sm-1 control-label"></label>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">座位数</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" required="" defaultValue="20000"
                                   name="stadium[seats]" placeholder="座位数"/>
                        </div>
                        <label className="col-sm-1 control-label">个</label>
                    </div>


                    <div className="form-group">
                        <label className="col-sm-3 control-label">园区用地面积</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" defaultValue="3000" name="stadium[parkArea]"
                                   placeholder="平方米"/>
                        </div>
                        <label className="col-sm-1 control-label">㎡</label>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">体育场地面积</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" defaultValue="4000"
                                   name="stadium[stadiumArea]"
                                   placeholder="平方米"/>
                        </div>
                        <label className="col-sm-1 control-label">㎡</label>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">包含运动类型</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" required defaultValue="羽毛、乒乓、篮球"
                                   name="stadium[sports]" placeholder="包含的运动类型"/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-sm-3 control-label">场馆地址</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" defaultChecked="fdghjk" name="stadium[address]"
                                   placeholder="场馆地址"/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-sm-3 control-label">场馆图片</label>
                        <div className="col-sm-6">
                            <div id="test" className="pull-left clearfix webuploader-container">
                                <div className="webuploader-pick">&nbsp;</div>
                                <div id="rt_rt_1b1trjmjj17uk1lejdqs1kli1a327"
                                     style={{
                                         position: "absolute",
                                         top: " 0px",
                                         left: "0px",
                                         width: " 250px",
                                         height: "82px",
                                         overflow: " hidden",
                                         bottom: "auto",
                                         right: "auto",
                                         marginLeft: "16px"
                                     }}>
                                    <input type="file" name="file" className="webuploader-element-invisible"
                                           multiple="multiple" accept="image/*"/>
                                    <label
                                        style={{
                                            opacity: ".1",
                                            width: "100%",
                                            height: "100%",
                                            display: "block",
                                            cursor: "pointer",
                                            background: "rgb(255,255,255)"
                                        }}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">场馆电话</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" defaultValue="13696622386"
                                   name="stadium[landline]"
                                   placeholder="场馆电话"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">联系人名称</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" defaultValue="wcn" name="stadium[contants]"
                                   placeholder="联系人"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">联系人手机</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" defaultValue="13696622386"
                                   name="stadium[contantsphone]" placeholder="联系人电话"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-6">
                            <button type="submit" id="gameAddBtn" className="btn btn-default">修改</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}