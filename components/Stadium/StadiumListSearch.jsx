import React from 'react';
import {render} from "react-dom";
export default class Search extends React.Component{
	constructor(){
		super()
	}
	search(){
		var obj={
			cgName:this.refs.cgName.value.trim(),
			locaCity:this.refs.locaCity.value,
			state:this.refs.state.value,
			department:this.refs.department.value.trim()
		}
		this.props.search(obj);
		
	}
	render(){
		return (<div>
				<div className="location">
				   <h3><span>场馆管理</span> &gt;<span> 场馆列表 </span></h3>
				</div>
			    {/*顶部查询*/}
				<div className="topSearch RightInfo mLR">
				    <form className="clearfix">
					    <div className="pull-left" style={{marginRight:'50px'}}>

					        <div className="form-group input-group-sm">
					            <label>场馆名称:</label>
					            <input ref="cgName" type="text" className="leastInput searchInput" placeholder="宁夏"/>
					        </div>

						    <div className="form-group input-group-sm clearfix">
					              <label className="pull-left" style={{marginTop:'7px'}}>所在城市:</label>
					              <select className="pull-left" ref='locaCity'>
					                    <option>北京</option>
					                    <option>上海</option>
					                    <option>广州</option>
					            </select>
					        </div>

					        <div className="form-group input-group-sm clearfix">
					            <label className="pull-left" style={{marginTop:'7px'}}>审核状态:</label>
					            <select className="pull-left" ref="state">
					                <option value={0}>不限</option>
					                <option value={1}>正在审核</option>
					                <option value={2}>审核通过</option>
					                <option value={3}>审核不通过</option>
					            </select>
					        </div>

				        </div>
				        <div className="pull-left">

						    <div className="form-group input-group-sm">
						        <label>运营单位名称:</label>
						        <input ref="department" type="text" className="leastInput searchInput" />
						    </div>

						    <div className="form-group input-group-sm">
						        <label>联系人名称:</label>
						        <input type="text" className="leastInput" />
						    </div>

						    <div className="form-group input-group-sm">
						        <label>联系人电话:</label>
						        <input type="text" className="leastInput" />
						    </div>

						</div>
						<button  onClick={this.search.bind(this)} type="button" className="blueBut"  id="stadiumSearchBtn">
				            <span className="glyphicon glyphicon-search " aria-hidden="true"></span>
				            搜 索
				        </button>
				    </form>
				</div>
		</div>
		)
	}
};
