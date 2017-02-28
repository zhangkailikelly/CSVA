import React from 'react';
export default class AddmationList extends React.Component {
    constructor(...arg) {
        super(...arg)
    }

    render() {
        return (
            <div className="rightContent pull-left at-view-fade-in at-view-fade-out">
                <div className="location">
                    <h3>&gt; <label> 添加优惠信息 </label></h3>
                </div>
                <form className="form-horizontal" id="cheapInfoAddForm">
                    <div className="form-group MT noMR">
                        <label className="col-sm-2 control-label">标题</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" required="" name="cheapInfo[title]"
                                   placeholder="优惠信息标题"/>
                        </div>
                    </div>

                    <div className="form-group noMR">
                        <label className="col-sm-2 control-label">开放时间</label>
                        <div className="col-sm-4">
                            <input type="text" required="" name="cheapInfo[startDate]" className="form-control mydate"/>
                        </div>
                        <label className="col-sm-2 control-label">到</label>
                        <div className="col-sm-4">
                            <input type="text" required="" name="cheapInfo[endDate]" className="form-control mydate"/>
                        </div>
                    </div>

                    <div className="form-group noMR">
                        <label className="col-sm-2 control-label">是否免费</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="cheapInfoFee" name="cheapInfo[fee]">
                                <option defaultvalue="1">免费</option>
                                <option defaultvalue="2">优惠</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group noMR">
                        <label className="col-sm-2 control-label">说明</label>
                        <div className="col-sm-10">
                     <textarea className="form-control" name="cheapInfo[des]" row="10">
                     </textarea>
                        </div>
                    </div>

                    <div className="form-group noMR">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" id="cheapInfoAddBtn" className="btn btn-default">保存</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}