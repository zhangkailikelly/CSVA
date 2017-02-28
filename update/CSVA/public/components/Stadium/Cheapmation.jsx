import React from "react";
export default class Cheapmation extends React.Component {
    constructor(...arg) {
        super(...arg)
    }

    render() {
        return (
            <div>
                <div className="location">
                    <h3> &gt; <label>优惠信息列表 </label></h3>
                </div>
                <div className="topSearch RightInfo  mLR">
                    <button type="" className="btn btn-default MB" id="cheapInfoAddBtn">添加</button>
                </div>
                <div id="cheapInfoWrap" className="table-responsive normal mLR tbodyLeft">
                    <table className="table tableColor tablebor NoMB" id="cheapInfoTable">
                        <thead className="tabelH">
                        <th>标题</th>
                        <th>开放时间</th>
                        <th>结束时间</th>
                        <th>是否免费</th>
                        <th>操作</th>
                        </thead>
                        <tbody>
                        <div style={{backgroundColor: "#fafafa", padding: "12px 8px"}}>沒有数据</div>
                        {/*<tr>*/}
                        {/*<td></td>*/}
                        {/*<td></td>*/}
                        {/*<td></td>*/}
                        {/*<td></td>*/}
                        {/*<td>*/}
                        {/*<button className="btn btn-info btn-xs cheapinfoUpdateBtn"><a name=''>修改</a></button>*/}
                        {/*<button className="btn btn-warning btn-xs cheapInfoDelBtn"><a name=''>删除</a></button>*/}
                        {/*</td>*/}
                        {/*</tr>*/}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}