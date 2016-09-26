import React from "react";
import {render} from "react-dom";

export default class StadiumSearch extends React.Component{

  constructor () {
    super();
    this.state={
      currentPage:1,//当前页数
      allPage:"",//总页数
      allData:"",//总条数
      datas:[],//请求的总数据
      data:[],//每次显示的数据
      dataPage:4,//每页显示的条数
      display:"none"//是否显示
      }
  }
  btnSearch(){
    var _this=this;
    $.ajax({
      type:"get",
      url:"http://139.129.131.105:8802/api/dailys",
      data:"",
      dataType:"json",
      success:function(data){
        data=data.map(function(index,i){
            index.nums=i+1;
           return index;
        })
        var dataPage=_this.state.dataPage;
        _this.setState({
        datas:data,
        data:data.slice(0,dataPage),
        allData:data.length,
        allPage:Math.ceil(data.length/dataPage),
        display:"block"
        })
      }
      
    })


  }
  render () {
      return (
        <div className="topSearch RightInfo mLR">
          <form className="clearfix">
            <div className="pull-left" style={{marginRight:'50px'}}>

              <div className="form-group input-group-sm">
                  <label>场馆名称:</label>
                  <input type="text" className="leastInput searchInput" placeholder="宁夏"/>
              </div>

              <div className="form-group input-group-sm clearfix">
                <label className="pull-left" style={{marginTop:'7px'}}>所在城市:</label>
                <select className="pull-left">
                      <option value={1}>北京</option>
                      <option value={2}>上海</option>
                      <option value={3}>广州</option>
                </select>
              </div>

                <div className="form-group input-group-sm clearfix">
                    <label className="pull-left" style={{marginTop:'7px'}}>审核状态:</label>
                    <select className="pull-left">
                        <option>不限</option>
                        <option>正在审核</option>
                        <option>审核通过</option>
                        <option>审核不通过</option>
                    </select>
                </div>

              </div>
              <div className="pull-left">

              <div className="form-group input-group-sm">
                  <label>运营单位名称:</label>
                  <input type="text" className="leastInput searchInput" />
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
          <button onClick={()=>{this.btnSearch()}} type="button" className="blueBut"  id="stadiumSearchBtn">
                  <span className="glyphicon glyphicon-search " aria-hidden="true"></span>
                  搜 索
              </button>
          </form>
      </div>
      )
    }
} 