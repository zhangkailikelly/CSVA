import React from 'react';

class StadiumUser extends React.Component {
    constructor(...arg) {
        super(...arg)
    }

    render() {
        return (<div className="content clearfix">
            {/*左侧导航开始*/}
            <div className="sidebar pull-left">
                <ul id="accordion" className="nav nav-sidebar accordion open">
                    <li className="open">
                        <Link to="/StadiumUser" onlyActiveOnIndex={true} className="link">场馆基础信息<span
                            className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
                    </li>
                    <li>
                        <Link to="/StadiumUser/2" className="link">优惠信息公告<span
                            className="pull-right glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link>
                    </li>
                </ul>
            </div>
            <div className="rightContent pull-left">{this.props.children}</div>
        </div>)
    }
}