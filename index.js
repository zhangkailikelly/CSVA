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
//右1
import RuleAdd from "./components/Rule/RuleAdd.jsx";
//右2
import RuleList from "./components/Rule/RuleList.jsx";



//注入reduce
let store=createStore(reducers);
//根元素
let rootElement=document.getElementById('box');
	render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRedirect  to="/stadium"/>
					<Route path="/stadium" component={Stadium}>
						<IndexRoute component={StadiumList}/>
        			    <Route path="/stadium/2" component={StadiumInfo}/>
					    <Route path="/stadium/3" component={StadiumData}/>
					 </Route>
					<Route path="/Rule" component={Rule}>
						<IndexRoute component={RuleAdd}/>
						<Route path="/Rule/2" component={RuleList}/>
					</Route>
				</Route>
			</Router>
		</Provider>,
		rootElement
		)
