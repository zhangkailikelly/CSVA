import React from "react";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/actions.js';
class RuleAdd extends React.Component{
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
    const {dispatch,store}=this.props;
		e.preventDefault();
    var startDate=this.refs.startDate.value,
        name=this.refs.ruleName.value.trim(),
        endDate=this.refs.endDate.value,
        isCurrent=this.refs.rule.checked?1:2;
    if(startDate&&endDate&&name){
      var datas={startDate,endDate,isCurrent,name};
     dispatch(action.addRule(datas));
  }

    //-------!!!!----发送失败删除store里新添加的评分规则项
 // $.ajax({
 // 		 type: 'POST',
 // 		 url: 'http://139.129.131.105:8802',
 //  		success: function(data){
 // 	  	 if(data.state){
 //     		 swal("成功!", "规则添加成功", "success");
 // 	  	 }else{
 //          alert("oh my gad 失败了");
 //          dispatch(action.faleRule())
 // 	  		 }
	//  	 },
 //     error:function(){
 //          alert("oh my gad 失败了");
 //          dispatch(action.faleRule())
 //     }
	// 	});
	}
	render(){
		return (
          <div>
          		<div className="location">
                  <h3>&gt;<span> 添加评分规则 </span></h3>
              </div>
          		<form className="form-horizontal" id="ruleAddForm" onSubmit={this.ruleAdd}>
                  <div className="form-group MT" style={{marginRight:"0px"}}>
                   		<label className="col-sm-2 control-label">起始时间</label>
                    	<div className="col-sm-4">
                    	  <input ref="startDate" type="text"  required="" name="rule[startDate]" className="form-control mydate"/>
                    	</div>
                   		<label className="col-sm-2 control-label">结束时间</label>
                    	<div className="col-sm-4">
                     	 <input ref="endDate" type="text" required="" name="rule[endDate]" className="form-control mydate"/>
                   		</div>
                	</div>
                	<div className="form-group" style={{marginRight:"0px"}}>
                    	<label className="col-sm-2 control-label">规则名称</label>
                    	<div className="col-sm-10">
                     		 <input ref="ruleName" type="text" required="" name="rule[name]" className="form-control"/>
                   		</div>
                	</div>
              	  <div className="form-group">
                  		<label className="col-sm-2 control-label">是否为当前规则</label>
                  		<div className="col-sm-10">
                  	      	<label className="radio-inline">
                  	       	   <input type="radio" ref="rule" name="rule[isCurrent]" defaultChecked="checked" id="inlineRadio1" value="1" />是
                  	       	</label>
                  	       	<label className="radio-inline">
                  	    	    <input type="radio" name="rule[isCurrent]" id="inlineRadio2" value="2"/>否
                  	 	     	</label>
                  	   </div>
                  </div>
                  <div className="form-group">
                     <div className="col-sm-offset-2 col-sm-10">
                       <button type="submit" id="ruleAddBtn" onClick={(e)=>{this.ruleAdd(e)}} className="btn btn-default">添加</button>
                     </div>
                  </div>
            </form>
		  </div>
    )
	}
};
export default connect()(RuleAdd);
