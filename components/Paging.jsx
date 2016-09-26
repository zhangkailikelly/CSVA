import React from "react";
export default class Paging extends React.Component{
	constructor(){
		super()
	}
	first(){
		var _this=this.props._this;
		var dataPage=_this.state.dataPage;
		_this.setState({currentPage:1,data:_this.state.datas.slice(0,dataPage)})
		
	}
	prev(){
		var _this=this.props._this;
		var dataPage=_this.state.dataPage;
		if(_this.state.currentPage>1){
			var prevPage=--_this.state.currentPage;
			_this.setState({
			 data:_this.state.datas.slice((prevPage-1)*dataPage,prevPage*dataPage),
			 currentPage:prevPage
			})
		 }
	
	}
	next(){
		var _this=this.props._this;
		var dataPage=_this.state.dataPage;
		if(_this.state.currentPage<_this.state.allPage){
			_this.setState({
			 data:_this.state.datas.slice(_this.state.currentPage*dataPage,(_this.state.currentPage+1)*dataPage),
			 currentPage:++_this.state.currentPage

			})
		}
	}
	last(){
		var _this=this.props._this;
		var dataPage=_this.state.dataPage;
		var lastPage=_this.state.datas.length%dataPage==0?(_this.state.datas.length-dataPage):(Math.floor(_this.state.datas.length/dataPage)*dataPage)
		_this.setState({
			currentPage:_this.state.allPage,
			data:_this.state.datas.slice(lastPage)
		})
	}
	render(){
		return (
			<div className="page clearfix" style={{display:this.props._this.state.display}}>
					<div className="pageCCon">
						  	 <p className="pull-left MR">
						      	 <span>第 {this.props._this.state.currentPage} 页</span>&nbsp;&nbsp;
						     	 <span>每页 {this.props._this.state.dataPage} 条数据</span>&nbsp;&nbsp;
						      	 <span>共 {this.props._this.state.allPage} 页</span>&nbsp;&nbsp;
						      	 <span>共 {this.props._this.state.allData} 条数据</span>
						  	 </p>
						  	 <ul className="pull-right list-inline" id="paginationUL">
						     	 <li onClick={this.first.bind(this)}><a name="first" id="firstPathBtn">首页</a></li>
						     	 <li onClick={this.prev.bind(this)}><a name="prev" id="prevPageBtn">上一页</a></li>
						     	 <li onClick={this.next.bind(this)}><a name="next" id="nextPageBtn">下一页</a></li>
						     	 <li onClick={this.last.bind(this)}><a name="last" id="lastPageBtn">尾页</a></li>
						   	 </ul>
					</div>
			</div>

		)
	}
}