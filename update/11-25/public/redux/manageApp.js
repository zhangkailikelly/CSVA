import React from "react";
import ReactRouter, {Link} from "react-router";
import {connect} from 'react-redux';
import Head from '../components/head';
import Foot from '../components/foot';
import '../css/style';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {dispatch}=this.props;
        return (
            <div className="main">
                <header className="Header">
                    <Head/>
                    <nav className="HeaderB">
                        <ul className="list-inline" id="topNav">
                            <li>
                                <Link to='/manage/stadium' activeClassName="active">
                                    场馆管理
                                </Link>
                            </li>
                            <li>
                                <Link to='/manage/Rule' activeClassName="active">
                                    评分设置
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div>{this.props.children}</div>
                <Foot/>
            </div>)
    }
}
export default connect()(App);