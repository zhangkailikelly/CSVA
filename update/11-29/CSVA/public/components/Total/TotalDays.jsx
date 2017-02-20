import React from 'react';
// import Calendar from '../Calendar.jsx'

export default class TotalDays extends React.Component {
    constructor(...arg) {
        super(...arg)
    }

    render() {
        return (
            <div>
                <div className="location"><h3><label>开放信息</label>&gt; <label> 开放天数</label></h3></div>
                <form className="form-horizontal">
                    <div className="form-group MT"><label className="col-sm-2 control-label">开放天数</label>
                        <div className="col-sm-4"><input type="number" className="form-control"/></div>
                        <label className="col-sm-1 control-label">天</label></div>
                </form>
                <div className="clearfix" style={{overflow: "hidden"}}>
                    {/*<Calendar/>*/}
                    <div className="pull-left rightCale" style={{marginTop:"15px",height: "409px", paddingTop: "200px"}}>
                        <div>数据来源于</div>
                        <div>&nbsp; 1.日常数据</div>
                        <div>&nbsp; 2.活动承载</div>
                        <div>&nbsp; 3.体育服务</div>
                    </div>
                </div>
            </div>
        )
    }
}