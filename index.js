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
import Left from "./components/Left.jsx";
import Right from "./components/Right.jsx";
import LeftListOne from "./components/LeftListOne.jsx";
import LeftListTwo from "./components/LeftListTwo.jsx";
import LeftListThree from "./components/LeftListThree.jsx";
import RightListOne from "./components/RightListOne.jsx";
import RightListTwo from "./components/RightListTwo.jsx";



//注入reduce
let store=createStore(reducers);
//根元素
let rootElement=document.getElementById('box');
	render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRedirect  to="/left"/>
					<Route path="/left" component={Left}>
						<IndexRoute component={LeftListOne}/>
        			    <Route path="/left/2" component={LeftListTwo}/>
					    <Route path="/left/3" component={LeftListThree}/>
					 </Route>
					<Route path="/right" component={Right}>
						<IndexRoute component={RightListOne}/>
						<Route path="/right/2" component={RightListTwo}/>
					</Route>
				</Route>
			</Router>
		</Provider>,
		rootElement
		)
