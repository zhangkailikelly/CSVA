//Provider 继承React.Component
import React from 'react';
//提供render方法渲染
import {render} from 'react-dom';
//创建 redux的store 和 配置 中间件
import {createStore,applyMiddleware} from 'redux';
//容器组建,注入store,使其子组件都可获得store
import {Provider} from "react-redux";
//中间件 用于 异步加载
import thunk from 'redux-thunk';
//中间件打印action
import createLogger from 'redux-logger';
//容器组件
import App from "./redux/manageApp.js";
//将子reduce合并成一个主reduce传进createStore()内
import reducers from './redux/reducer/reduce.js';
//路由组件==>Router外层路由组件包裹,indexRedirect组件用于访问根路由的时候，将用户重定向到某个子组件
//Link类似于a标签,IndexRoute默认加载的子组件,hashHistory路由通过#号切换
import ReactRouter,{Router,Route,IndexRedirect,Link,browserHistory,IndexRoute} from "react-router";
//展示组件
//登录
/*import Login from "./components/Login.jsx";*/
//左上
import Stadium from "./components/Stadium/Stadium.jsx";
//右上
import Rule from "./components/Rule/Rule.jsx";
//左1
import StadiumList from "./components/Stadium/StadiumList.jsx";
//左2
import StadiumInfo from "./components/Stadium/StadiumInfo.jsx";
//左3
import StadiumData from "./components/Stadium/StadiumData.jsx";
//左4
import StadiumDataCount from "./components/Stadium/StadiumDataCount.jsx";
//左5
import DailyData from "./components/Stadium/DailyData.jsx";
//右1
import RuleAdd from "./components/Rule/RuleAdd.jsx";
//右2
import RuleList from "./components/Rule/RuleList.jsx";

//活动承载
import SportsActive from "./components/SportsActive/SportsActive.jsx";
//体育赛事
import GamesMain from "./components/SportsActive/GamesMain.jsx";
//群体活动
import ActiveMain from "./components/SportsActive/ActiveMain.jsx";
//其他文体活动
import ActiveMain2 from "./components/SportsActive/ActiveMain2.jsx";


//体育服务
import SportsService from "./components/SportsService/SportsService.jsx";
//体育培训列表
import SportsTraining from "./components/SportsService/SportsTraining.jsx";
//运动健身指导列表
import ServiceGuidance from "./components/SportsService/ServiceGuidance.jsx";
//专业训练列表
import ServiceMajor from "./components/SportsService/ServiceMajor.jsx";


//注入reduce
let store=createStore(reducers,applyMiddleware(
    thunk//允许action 返回function  并运行function  function内可以调用dispatch 用于异步加载  链接服务器用
));
//根元素
let rootElement=document.getElementById('box');
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/manage" component={App}>
                <IndexRedirect  to="stadium"/>
                {/*场馆管理*/}
                <Route path="stadium" component={Stadium}>
                    <IndexRoute component={StadiumList}/>
                    {/*path后不直接用斜杠为相对路由*/}
                    <Route path="2" component={StadiumInfo}/>
                    <Route path="3" component={StadiumData}/>
                    <Route path="4" component={StadiumDataCount}/>
                    <Route path="5" component={DailyData}/>
                    <Route path="6" component={GamesMain}/>
                    <Route path="7" component={ActiveMain}/>
                    <Route path="8" component={ActiveMain2}/>
                    <Route path="9" component={SportsTraining}/>
                    <Route path="10" component={ServiceGuidance}/>
                    <Route path="11" component={ServiceMajor}/>
                </Route>
                {/*评分规则*/}
                <Route path="Rule" component={Rule}>
                    <IndexRoute component={RuleAdd}/>
                    <Route path="2" component={RuleList}/>
                </Route>
                <Route path="SportsService" component={SportsService}>
                    <IndexRoute component={SportsTraining}/>
                    <Route path="2" component={ServiceGuidance}/>
                    <Route path="3" component={ServiceMajor}/>
                </Route>}
                {/*已注释
                 <Route path="/SportsActive" component={SportsActive}>
                 <IndexRoute component={GamesMain}/>
                 <Route path="/SportsActive/2" component={ActiveMain}/>
                 <Route path="/SportsActive/3" component={ActiveMain2}/>
                 </Route>
                 <Route path="/SportsService" component={SportsService}>
                 <IndexRoute component={SportsTraining}/>
                 <Route path="/SportsService/2" component={ServiceGuidance}/>
                 <Route path="/SportsService/3" component={ServiceMajor}/>
                 </Route> */}
            </Route>
        </Router>
    </Provider>,
    rootElement
)
