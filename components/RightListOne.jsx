import React from "react";
export default class RightListOne extends React.Component{
	constructor(){
		super();
	}

	componentDidMount(){
	$('.mydate').datetimepicker({
   		 format: 'yyyy-mm-dd',
   		 language:  'zh-CN',
   		 minView: 2,
   		 autoclose:true
  		});

	}
	ruleAdd(e){
		e.preventDefault();
		console.log($("#ruleAddForm").serialize());
		 $.ajax({
     		 type: 'POST',
     		 url: '/ruleAdd',
     		 data: $("#ruleAddForm").serialize(),
      		success: function(data){
     	  	 if(data.state){
         		 swal("成功!", "规则添加成功", "success");
     	  	 }else{
          		alert("oh my gad 失败了");
     	  		 }
    	 	 }
   		});
	}
	render(){
		return (<div>
		<div className="location"><h3>&gt; <span> 添加评分规则 </span></h3></div>
		<form className="form-horizontal" id="ruleAddForm" onSubmit={this.ruleAdd}>
	
    <div className="form-group MT" style={{marginRight:"0px"}}>
   		<label className="col-sm-2 control-label">起始时间</label>

    	<div className="col-sm-4">
    	  <input type="text"  required="" name="rule[startDate]" className="form-control mydate"/>
    	</div>

   		<label className="col-sm-2 control-label">结束时间</label>
   		 
    	<div className="col-sm-4">
     	 <input type="text" required="" name="rule[endDate]" className="form-control mydate"/>
   		</div>
  	</div>
  	<div className="form-group" style={{marginRight:"0px"}}>
    	<label className="col-sm-2 control-label">规则名称</label>
    	<div className="col-sm-10">
     		 <input type="text" required="" name="rule[name]" className="form-control"/>
   		 </div>
	</div>
	<div className="form-group">
		<label className="col-sm-2 control-label">是否为当前规则</label>
		<div className="col-sm-10">
	      	<label className="radio-inline">
	       	   <input type="radio" name="rule[isCurrent]" id="inlineRadio1" value="1" />是
	     	</label>
	     	<label className="radio-inline">
	    	    <input type="radio" name="rule[isCurrent]" defaultChecked="checked" id="inlineRadio2" value="2"/>否
	 		</label>
	   </div>
    </div>
    <div className="form-group">
       <div className="col-sm-offset-2 col-sm-10">
         <button type="submit" id="ruleAddBtn" className="btn btn-default">添加</button>
       </div>
    </div>
  </form>

		</div>)



	}
};



