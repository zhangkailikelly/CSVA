import React from "react";
import {connect} from "react-redux";
import * as action from '../../redux/actions/actions.js';
import YHRC from "../../images/SF1.png";
import MFRC from "../../images/SF2.png";
import YHJE from "../../images/SF3.png";
 class StadiumDataCount extends React.Component{
	constructor(){
		super();
	}
	componentDidMount(){
		let {dispatch,id}=this.props;
		console.log(id)
	// $('.mydate').datetimepicker({
   	// 	 format: 'yyyy-mm-dd',
   	// 	 language:  'zh-CN',
   	// 	 minView: 2,
   	// 	 autoclose:true
  	// 	});
		dispatch(action.costList())
	
	}
	searchBtn(){
		let {dispatch}=this.props;
		var filters={
			startTime:this.refs.startTime.value,
			endTime:this.refs.endTime.value,
			tel:this.refs.tel.value,
			priceType:this.refs.priceType.value
		};
		dispatch(action.search({sDataCount:filters}))
	}
	render(){
		let {dispatch,tableData,searchContent}=this.props;
		return (
			<div>
			    <div className="location">
 					 <h3><span>场馆列表</span> &gt;<span> 免费低收费数据 </span></h3>
				</div>
				{/*顶部查询*/}
				<div className="topSearch RightInfo mLR">
					<form className="clearfix" id="stadiumDataCountForm">
					    <div className="pull-left" style={{marginRight:'50px'}}>
					        <div className="form-group input-group-sm">
					            <label>起始时间:</label>
					            <input ref="startTime" type="text" className="leastInput searchInput mydate" />
					        </div>
					        <div className="form-group input-group-sm clearfix">
					            <label className="pull-left" style={{marginTop:'6px'}}>优惠类型:</label>
					            <select ref="priceType" className="pull-left" name="sdcType">
					                <option value="0">不限</option>
					                <option value="1">免费</option>
					                <option value="2">低收费</option>
					            </select>
					        </div>
					    </div>
					    <div className="pull-left">
					        <div className="form-group input-group-sm">
					            <label>截止时间:</label>
					            <input ref="endTime" type="text" className="leastInput searchInput mydate" />
					        </div>
					        <div className="form-group input-group-sm">
					            <label>手机号码:</label>
					            <input ref="tel" type="text" className="leastInput" />
					        </div>
					    </div>
					    <button onClick={()=>{this.searchBtn()}} type="button" className="blueBut" id="CountSearchBtn">
					        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
					        搜 索
					    </button>
					</form>
				</div>
			    {/*数据统计*/}
			    <div className="SfCount">
					<p>低收费数据统计</p>
					<ul>
					    <li className="clearfixs">
					      <img className="pull-left" src={YHRC} />
					      <div className="pull-left">
					        <span>优惠人次</span>
					        <em>{statistics(tableData).count}</em>
					      </div>
					    </li>
					    <li className="clearfixs">
					      <img className="pull-left" src={MFRC} />
					      <div className="pull-left">
					        <span>免费人次</span>
					        <em>90</em>
					      </div>
					    </li>
					    <li className="clearfixs">
					      <img className="pull-left" src={YHJE} />
					      <div className="pull-left">
					        <span>优惠金额</span>
					        <em>{statistics(tableData).price}</em>
					      </div>
					    </li>
					</ul>
				</div>
			    {/*数据统计表格*/}
			    <div id="CountWrap" className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
	    			<table className="table tableColor tablebor NoMB" id="stadiumTable">
						<thead className="tabelH">
							<tr>
								<th style={{width:'125px'}}>用户名称</th>
								<th style={{width:'220px'}}>身份证号码</th>
								<th style={{width:'130px'}}>运动类型</th>
								<th style={{width:'150px'}}>日期</th>
								<th style={{width:'80px'}}>折扣</th>
								<th style={{width:'130px'}}>优惠金额</th>
								<th style={{width:'130px'}}>优惠人次</th>
							</tr>
						</thead>
						<tbody>
						{tableData.length==0?(<tr><td>没有符合条件的数据</td></tr>):tableData.map((index,i)=>{
								return (
							<tr key={i}>
								<td style={{width:'125px'}}>{index.name}</td>
								<td style={{width:'220px'}}>{index.cardID}</td>
								<td style={{width:'130px'}}>{index.sports}</td>
								<td style={{width:'150px'}}>{index.day}</td>
								<td style={{width:'80px'}}>{index.discount}</td>
								<td style={{width:'130px'}}>{index.priceType}</td>
								<td style={{width:'130px'}}>{index.discountAmount}</td>
							</tr>
									)
							})}
						</tbody>
				    </table>
				</div>
			</div>
			)
	}
};
/**
 * 低收费数据统计
 * @param  {[type]} data 统计的数据表
 * @return {[type]} price 优惠金额
 *                  count 优惠人次
 */
function statistics(data){
	var obj={
		price:0,
		count:0
	}
	data.map(function(index){
		obj.price+=index.priceType;
		obj.count+=index.count
	})
	return obj;
}
/**
 * 过滤
 * 	tableData：表格展示数据
 * 	searchContent：搜索条件
 */

/**
 * 过滤函数
 * 
 */
function filter(data,filters){
	var arr=[];
	if(filters.type==="search"){
		data.map(index=>{
			if(index.priceType==filters.sDataCount.priceType&&index.day==filters.sDataCount.startTime&&index.phone==filters.sDataCount.tel){
				arr.push(index)
			}
		})
		return arr;
	}
	return data;
}
function select(store){
	return {
		tableData:filter(store.data.StadiumDataCount==undefined?[]:store.data.StadiumDataCount,store.search),
		searchContent:store.search,
		id:store.lookData.id
	}
}
export default connect(select)(StadiumDataCount)