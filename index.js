//Provider 继承React.Component
import React from 'react';
//提供render方法渲染
import {render} from 'react-dom';
//createStore方法用来创建store
import {createStore} from 'redux';
//容器组建,注入store,使其子组件都可获得store
import {Provider} from "react-redux";
//容器组件
import App from "./redux/App.js";
//将子reduce合并成一个主reduce传进createStore()内
import reducers from './redux/reducer/reduce.js';
//路由组件
import ReactRouter,{Router,Route,IndexRedirect,Link,hashHistory,IndexRoute} from "react-router";
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

//汇总数据
import Total from "./components/Total/Total.jsx";
import TotalInfo from "./components/Total/TotalInfo.jsx";

//注入reduce
let store=createStore(reducers);
//根元素
let rootElement=document.getElementById('box');
	render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					{/* <IndexRedirect to="/login"/>
					<Route path="/Login" component={Login}>
					</Route> */}
					<IndexRedirect  to="/stadium"/>
					<Route path="/stadium" component={Stadium}>
						<IndexRoute component={StadiumList}/>
        			    <Route path="/stadium/2" component={StadiumInfo}/>
					    <Route path="/stadium/3" component={StadiumData}/>
					    <Route path="/stadium/4" component={StadiumDataCount}/>
					    <Route path="/stadium/5" component={DailyData}/>
					    <Route path="/stadium/6" component={GamesMain}/>
					    <Route path="/stadium/7" component={ActiveMain}/>
						<Route path="/stadium/8" component={ActiveMain2}/>
						<Route path="/stadium/9" component={SportsTraining}/>
					    <Route path="/stadium/10" component={ServiceGuidance}/>
						<Route path="/stadium/11" component={ServiceMajor}/>

					</Route>
				    {/*评分规则*/}
					<Route path="/Rule" component={Rule}>
						<IndexRoute component={RuleAdd}/>
						<Route path="/Rule/2" component={RuleList}/>
					</Route>
					{/*
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
					<Route path="/Total" component={Total}>
						<IndexRoute component={TotalInfo}/>
					</Route>
				</Route>
			</Router>
		</Provider>,
		rootElement
		)
