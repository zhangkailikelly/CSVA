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
//容器组件
import App from "./redux/usersApp.js";
//将子reduce合并成一个主reduce传进createStore()内
import reducers from './redux/reducer/reduce.js';
//路由组件==>Router外层路由组件包裹,indexRedirect组件用于访问根路由的时候，将用户重定向到某个子组件
//Link类似于a标签,IndexRoute默认加载的子组件,hashHistory路由通过#号切换
import ReactRouter,{Router,Route,IndexRedirect,browserHistory,IndexRoute} from "react-router";
//展示组件


//--------------------日常数据
import Daily from "./components/Daily/Daily.jsx";
import DailyData from "./components/Daily/DailyDataUser.jsx";
import DailyAddUser from "./components/Daily/DailyAddUser.jsx";


//--------------------活动承载
import SportsActive from "./components/SportsActive/SportsActive.jsx";
 //体育赛事
import GamesMain from "./components/SportsActive/GamesMain.jsx";
 //添加体育赛事
import GamesAdd from "./components/SportsActive/GamesAdd.jsx";
 //群体活动
import ActiveMain from "./components/SportsActive/ActiveMain.jsx";
 //添加群体活动
import ActiveAdd from "./components/SportsActive/ActiveAdd.jsx";
 //其他文体活动
import ActiveMain2 from "./components/SportsActive/ActiveMain2.jsx";


//------------------------------体育服务
import SportsService from "./components/SportsService/SportsService.jsx";
 //体育培训列表
import SportsTraining from "./components/SportsService/SportsTraining.jsx";
 //添加体育培训
import ServiceAdd1 from "./components/SportsService/ServiceAdd1.jsx";
 //运动健身指导列表
import ServiceGuidance from "./components/SportsService/ServiceGuidance.jsx";
 //添加运动健身指导
import ServiceAdd2 from "./components/SportsService/ServiceAdd2.jsx";
 //专业训练列表
import ServiceMajor from "./components/SportsService/ServiceMajor.jsx";
 //添加专业培训
import ServiceAdd3 from "./components/SportsService/ServiceAdd3.jsx";

//---------------------------------场馆管理
import StadiumUser from "./components/Stadium/StadiumUser.jsx";
import Basemation from './components/Stadium/Basemation.jsx';
import Cheapmation from "./components/Stadium/Cheapmation.jsx";
import AddmationList from "./components/Stadium/AddmationList.jsx";



//--------------------------------汇总数据
import Total from "./components/Total/Total.jsx";
import TotalInfo from "./components/Total/TotalInfo.jsx";
import TotalTableInfo from "./components/Total/TotalTableInfo.jsx";//开放情况
import TotalArea from "./components/Total/TotalArea.jsx";//开放面积
import TotalHours from "./components/Total/TotalHours.jsx";//开放时间
import TotalDays from "./components/Total/TotalDays.jsx";//开放天数
import TotalActive1 from "./components/Total/TotalActive1.jsx";//体育赛事
import TotalActive2 from "./components/Total/TotalActive2.jsx";//群体活动
import TotalActive3 from "./components/Total/TotalActive3.jsx";//其他文体活动
import TotalService1 from "./components/Total/TotalService1.jsx";//体育培训
import TotalService2 from "./components/Total/TotalService2.jsx";//运动健康指导
import TotalService3 from "./components/Total/TotalService3.jsx";//专业训练
import benefitTableInfo from "./components/Profit/benefitTableInfo.jsx";//综合效益<效益列表
import receiveNums from "./components/Profit/receiveNums.jsx";//综合效益<接待总量
import receiveNumsByYear from "./components/Profit/receiveNumsByYear.jsx";//综合效益<接待人次增长
import paymentScale from "./components/Profit/paymentScale.jsx";//综合效益<收支比例
import paymentGrow from "./components/Profit/paymentGrow.jsx";//综合效益<收入增长
import commonweal from "./components/Profit/commonweal.jsx";//综合效益<公益项目
import fineScale from "./components/Profit/fineScale.jsx";//综合效益<满意度
import AddScore from "./components/Profit/AddScore.jsx";//特色加分

//注入reduce
let store=createStore(reducers,applyMiddleware(
	thunk//允许action 返回function  并运行function  function内可以调用dispatch 用于异步加载  链接服务器用
	));
//根元素
let rootElement=document.getElementById('box');
	render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/users" component={App}>
					<IndexRedirect  to="/users/Daily"/>
					{/*日常数据*/}
				    <Route path="Daily(/:name)" component={Daily}>
						<IndexRoute component={DailyData}/>
						<Route path="2(/:name)" component={DailyAddUser}/>
					</Route>
					{/*活动承载*/}
					<Route path="SportsActive" component={SportsActive}>
						<IndexRoute component={GamesMain}/>
						<Route path="12" component={GamesAdd}/>
						<Route path="21" component={ActiveMain}/>
						<Route path="22" component={ActiveAdd}/>
						<Route path="31" component={ActiveMain2}/>
					</Route>
					{/*体育服务*/}
					<Route path="SportsService" component={SportsService}>
						<IndexRoute component={SportsTraining}/>
						<Route path="12" component={ServiceAdd1}/>
						<Route path="21" component={ServiceGuidance}/>
						<Route path="22" component={ServiceAdd2}/>
						<Route path="31" component={ServiceMajor}/>
						<Route path="32" component={ServiceAdd3}/>
					</Route>
					{/*场馆管理*/}
					<Route path="stadium" component={StadiumUser}>
						<IndexRoute component={Basemation}/>
						{/*path后不直接用斜杠为相对路由*/}
        			   <Route path='2' component={Cheapmation}/>
        			   <Route path='3' component={AddmationList}/>
					</Route>
				    {/*汇总数据*/}
					<Route path="Total" component={Total}>
						<IndexRoute component={TotalTableInfo}/>
						<Route path="11" component={TotalTableInfo}/>
						<Route path="12" component={TotalArea}/>
						<Route path="13" component={TotalDays}/>
						<Route path="14" component={TotalHours}/>
						<Route path="15" component={TotalActive1}/>
						<Route path="16" component={TotalActive2}/>
						<Route path="17" component={TotalActive3}/>
						<Route path="18" component={TotalService1}/>
						<Route path="19" component={TotalService2}/>
						<Route path="20" component={TotalService3}/>
						<Route path="21" component={benefitTableInfo}/>
						<Route path="22" component={receiveNums}/>
						<Route path="23" component={receiveNumsByYear}/>
						<Route path="24" component={paymentScale}/>
						<Route path="25" component={paymentGrow}/>
						<Route path="26" component={commonweal}/>
						<Route path="27" component={fineScale}/>
						<Route path="31" component={AddScore}/>
					</Route>
				</Route>
			</Router>
		</Provider>,
		rootElement
		)
