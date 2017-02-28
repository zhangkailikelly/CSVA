import React from 'react';
export default  class TablePage extends React.Component{
    render(){
        return (
            <section className="fr">
                <span>第 1 页</span>&nbsp;&nbsp;
                <span>每页 2 条数据</span>&nbsp;&nbsp;
                <span>共 1 页</span>&nbsp;&nbsp;
                <span>共 1 条数据</span>&nbsp;&nbsp;
                <button className="btn btn-default" id="firstPathBtn">首页</button>
                <button className="btn btn-default" id="prevPageBtn">上一页</button>
                <button className="btn btn-default" id="nextPageBtn">下一页</button>
                <button className="btn btn-default" id="lastPageBtn">尾页</button>
            </section>
            )

    }
}