import React from "react";
export default class RuleList extends React.Component{
	constructor(){
		super();
		this.state={
			currentPage:1,
			allPage:"",
			allData:"",
			datas:[],
			data:[],
			dataPage:4,
			display:"none"
	}
}
	componentDidMount(){

				var p=[
{rule:"张凯利1",start:"2016-03-01",end:"2013-06-04",or:2},
{rule:"张凯利2",start:"2016-03-02",end:"2013-06-04",or:2},
{rule:"张凯利3",start:"2016-03-03",end:"2013-06-04",or:2},
{rule:"张凯利4",start:"2016-03-04",end:"2013-06-04",or:2},
{rule:"张凯利5",start:"2016-03-05",end:"2013-06-04",or:2},
{rule:"张凯利6",start:"2016-03-06",end:"2013-06-04",or:2},
{rule:"张凯利7",start:"2016-03-07",end:"2013-06-04",or:2},
{rule:"张凯利8",start:"2016-03-08",end:"2013-06-04",or:2},
{rule:"张凯利9",start:"2016-03-09",end:"2013-06-04",or:2},

];
		$.ajax({
			url:"",
			type:"",
			dataType:"json",
			data:"",
			success:function(data){

			}
		})


		this.setState({
			datas:p,
			data:p.slice(0,4),
			allData:p.length,
			allPage:Math.ceil(p.length/4),
			display:"block"
		})
	}
	
	render(){
		return (
			<div>
				<div className="location">
 					 <h3><span>评分设置</span> &gt;<span> 评分规则列表 </span></h3>
				</div>
				<div id="ruleWrap"  className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
    			    <table className="table tableColor tablebor NoMB" id="ruleTable">
    				  <thead  className="tabelH">
     					 <tr>
      						<th style={{width:'160px'}}>规则名称</th>
      						<th style={{width:'165px'}}>起始时间</th>
      						<th style={{width:'180px'}}>结束时间</th>
      						<th style={{width:'250px'}}>是否为当前规则</th>
      						<th style={{width:'190px'}}>操作</th>
     					 </tr>
     				 </thead>
     				 <tbody>
         				{this.state.data.map(function(index,i){
         					return (<tr key={i}>
         						<td style={{width:'160px'}}>{index.rule}</td>
         						<td style={{width:'165px'}}>{index.start}</td>
         						<td style={{width:'180px'}}>{index.end}</td>
         						<td style={{width:'250px'}}></td>
            				<td style={{width:'190px'}}><span className="viewDataBtn"><a name='<%= o.id %>'>查看运营数据</a></span></td>
         					</tr>)
         				})}
     				</tbody>
   			       </table>
   				</div>
			</div>


)
	}
};